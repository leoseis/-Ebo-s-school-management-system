import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { getStudents, } from "../services/StudentService";
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";

const Manage = () => {
  const [students, setStudents] = useState([]);
  const [addModalshow, setAddModalshow] = useState(false); // This ana add function this shows a new form when there is am add button
  const [editModalShow, setEditModalshow] = useState(false);
  const [editStudent, setEditStudent] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);


  useEffect(() => {
    let mounted = true;
    if (students.length && !isUpdated) {
      return;
    }
    getStudents().then((data) => {
      if (mounted) {
        setStudents(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, students]);

  const handleAdd = (e) => {
    // handleAdd handler
    e.preventDefault();
    setAddModalshow(true);
  };

  const handleUpdate = (e, stu) => {
    // handleupdate handler
    e.preventDefault();
    setEditModalshow(true);
    setEditStudent(stu);
  };


  let AddModalClose = () => AddModalClose(false);         // whenever my form is closed set  to false
  let EditModelClose =()=> setEditModalshow(false);
  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="before-table"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
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
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.RegistrationNo}</td>
                <td>{stu.Email}</td>
                <td>{stu.Course}</td>
                <td>
                  <Button className="mr-2" variant="primary"
                  onClick={event => handleUpdate(event, stu)}>
                    Update
                  </Button>{" "}
                  <UpdateStudentModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                    onHide={EditModelClose}>
                    </UpdateStudentModal>
                  <Button className="mr-2" variant="danger">
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>        {/*handleAdd hanlder for event and it would be applied to the update*/}
            Add Student
          </Button>
          <AddStudentModal
            show={addModalshow}
            setUpdated={setIsUpdated}
            onHide={AddModalClose}
          ></AddStudentModal>
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Manage;
