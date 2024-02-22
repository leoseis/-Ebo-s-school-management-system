import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/students/')                             //get method gets all tables inputs
    .then(response => response.data)
}

export function addStudent(student){                                          // post method input from forms (modal pop uo)
  return axios.post('http://127.0.0.1:8000/students/', {
    studentId:null,
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    RegistrationNo:student.RegistrationNo.value,
    Email:student.Email.value,
    Course:student.Course.value
  })
    .then(response=>response.data) 
}
