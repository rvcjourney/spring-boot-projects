package dao;

import db.MyConnection;
import model.Data;

import java.io.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DataDAO {

    public static List<Data> getAllFiles(String email) throws SQLException, IOException {
        Connection connection = MyConnection.getConnection();
        PreparedStatement ps = connection.prepareStatement("SELECT * FROM data WHERE email = ?");
        ps.setString(1, email);
        ResultSet rs = ps.executeQuery();
        List<Data> files = new ArrayList<>();
        while (rs.next()) {
            int id = rs.getInt(1);
            String name = rs.getString(2);
            String path = rs.getString(3);
            files.add(new Data(id, name, path));
        }
        return files;
    }

    public static int hideFile(Data file) throws SQLException, IOException {
        Connection connection = MyConnection.getConnection();
        PreparedStatement ps = connection.prepareStatement("INSERT INTO data(name, path, email, bin_data) VALUES (?, ?, ?, ?)");
        ps.setString(1, file.getFileName());
        ps.setString(2, file.getPath());
        ps.setString(3, file.getEmail());
        File f = new File(file.getPath());
        FileInputStream fis = new FileInputStream(f);
        ps.setBinaryStream(4, fis, (int) f.length());
        int ans = ps.executeUpdate();
        fis.close();
        f.delete();
        return ans;
    }

    public static void unhide(int id) throws SQLException, IOException {
        Connection connection = MyConnection.getConnection();
        PreparedStatement ps = connection.prepareStatement("SELECT path, bin_data FROM data WHERE id = ?");
        ps.setInt(1, id);
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            String path = rs.getString("path");
            Blob blob = rs.getBlob("bin_data");

            InputStream inputStream = blob.getBinaryStream();
            FileOutputStream fos = new FileOutputStream(path);
            int byteRead;
            while ((byteRead = inputStream.read()) != -1) {
                fos.write(byteRead);
            }
            fos.close();
            inputStream.close();

            ps = connection.prepareStatement("DELETE FROM data WHERE id = ?");
            ps.setInt(1, id);
            ps.executeUpdate();
            System.out.println("Successfully Unhidden");
        }
    }
}
