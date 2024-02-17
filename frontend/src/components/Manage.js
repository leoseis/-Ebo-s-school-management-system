import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { getStudents, deleteStudents} from '../services/StudentService';
import "../App.css";

const Manage = () => {
  const [students, setStudents] = useState([]);
  const [addModalshow, setAddModalshow] = useState(false);       // This ana add function

  useEffect(() => {
   let mounted = true;
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registration No</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>            
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.RegistrationNo}</td>
                <td>{stu.Email}</td>
                <td>{stu.Course}</td>
                <td> <Button className='mr-2' variant="danger">Delete</Button>{' '}  
                  </td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Manage;