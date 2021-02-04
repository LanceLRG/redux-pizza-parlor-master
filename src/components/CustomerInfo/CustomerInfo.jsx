import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function CustomerInfo() {

    // const history = useHistory();
    // console.log(history);
    
    // // Called when the submit button is pressed
    // const addCustomer = () => {
    //     // POST student to the server
    //     axios({
    //         method: 'POST',
    //         url: '/students',
    //         data: {github_name: newStudent}
    //     }).then((response) => {
    //         console.log(response);
    //         history.push('/allStudents');
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    // // Called when the submit button is pressed
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     addStudent(student);
    //     clearStudentFields();
    // }

    // // Clear fields of the form by reseting the user
    // const clearStudentFields = () => {
    //     setStudent('');
    // }


    return (
        // <form onSubmit={handleSubmit}>
        //     <input onChange={(event) => setStudent(event.target.value)} 
        //             placeholder="GitHub username"
        //             value={student} />
        //     <input type="submit" value="Submit" />
        // </form>
        <>
        <h1>CUSTOMERINFO_PAGE</h1>
        </>
    );
    
}



export default CustomerInfo;
