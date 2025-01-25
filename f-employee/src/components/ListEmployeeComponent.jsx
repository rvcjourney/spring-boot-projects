import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'


const ListEmployeeComponent = () =>{

    const[employees,setEmployees] = useState([])

    useEffect(() =>{
        getAllEmployees();
    },[])

    // const dummydata = [
    //     {
    //         "id":1,
    //         "firstName":"Jhon",
    //         "lastName":"Janardhan",
    //         "email":"jjhon@gmail.com"
    //     },
    //     {
    //         "id":2,
    //         "firstName":"Jenny",
    //         "lastName":"Jenifer",
    //         "email":"jenny@gmail.com"
    //     },
    //     {
    //         "id":3,
    //         "firstName":"Bean",
    //         "lastName":"Smith",
    //         "email":"bean@gmail.com"
    //     }
    // ]

    const navigator = useNavigate();

    function getAllEmployees(){
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch((error) =>{
            console.log(error);
        } )
    }

    return(
        <div className='container'>
            <h2 className='text-center mt-2'>List of Employee</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>

                                <td>
                                    <button className='btn btn-info ' onClick={()=>updateEmployee(employee.id)} style={{marginRight:'20px'}}>Update</button>
                                    <button className='btn btn-danger ' onClick={()=>removeEmployee(employee.id)} style={{marginLeft:'20px'}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent