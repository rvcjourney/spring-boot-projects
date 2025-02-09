package db;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MyConnection {
    public static Connection connection = null;
    public static Connection getConnection(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/file_hider_data","root","9923");
            System.out.println("Connection Established");
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }

        return connection;
    }
    public static void closeConnection(){
        if(connection != null){
            try{
                connection.close();
            }catch(SQLException ex){
                throw new RuntimeException(ex);
            }
        }
    }
}


