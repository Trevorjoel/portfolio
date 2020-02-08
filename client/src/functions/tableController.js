/*
* Controller functions for the Table project
*
* */

import {Button} from "reactstrap";
import React from "react";

// Handle form field changes
export const handleFirstNameChange = function(event) {
    this.setState({firstName: event.target.value});
};
export const handleLastNameChange = function(event) {
    this.setState({lastName: event.target.value});
};
export const handleDepartmentIDChange = function(event){
    this.setState({departmentID: event.target.value});
};
// More front end validation
export const handleAddEmployee = async function () {
    if (this.state.firstName !== ''
        && this.state.lastName !== ''
        && this.state.departmentID !== ''
        && isNaN(this.state.firstName)
        && isNaN(this.state.lastName)
        && this.state.firstName.length > 1
        && this.state.lastName.length > 1 ////
        && this.state.lastName.match(/^[a-zA-Z()]+$/)
        && this.state.firstName.match(/^[a-zA-Z()]+$/)
    ) {
        // Go ahead and process request
        const response = await fetch('/api/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                departmentID: this.state.departmentID,
                empEmployeeID: this.state.empEmployeeID
            })
        });
        
        const body = await response.json()
            
            // Set state
            .then(response => {
                
                let count = Object.keys(this.state.queryBody).length;
                console.log(this.state.queryBody[count - 2]);
                this.setState({
                    
                    queryBody: response.database3
                })
            })
            .catch(err => console.log(err));
        // todo: Return a success message to user
        // Reset the form fields
        this.form && this.form.reset();
        
    } // else Do nothing and let the html form validation work
};
// Request api for the table
export let queryDB = async () => {
    const response = await fetch('/api/sql');
    const query = await response.json();
    if (response.status !== 200) throw Error(query.message);
    return query;
};

// Feature to populate the table/db when it is empty
export const populateTable = function () {
    // Check if the DB is empty
    if (this.state.queryBody.length === 0) {
        // Render the button that populates db if empty
        return <Button onClick={async () => {
            const results = await fetch('/api/sql', {
                method: 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(
                    {})
            });
            const body = await results.json()
                .then(results =>
                    this.setState({queryBody: results.database2}) // keep an eye on the values
                )
        }
        } color="success" block>Populate the table</Button>
    }
};
// Create and render delete buttons for the database rows
export const handleDelete = function (empID) {
    return <Button name={empID} onClick={async () => {
        console.log('Button clicked');
        const results = await fetch('/api/sql', {
            method: 'DELETE',
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(
                {
                    id: empID
                })
        });
        const body = await results.json()
            // Set state
            .then(res =>
                this.setState({queryBody: res.database2})
       ).then( results =>{
        if(this.state.toggleDeptID || this.state.toggleEmployeeID){
            console.log('toggle1')
        }})
    }
    }
                   title="Remove" color="danger">Remove</Button>;
};

export const handleTextSort = function (el) {
    // Takes an argument from the function call to determine which list to sort by
    if (el === 'firstName') {
        // Determine the toggle state of the list
        switch (this.state.toggleFirstName) {
            case false:
                this.setState(
                    this.state.queryBody.sort(function (a, b) {
                            const firsNameA = a.empFirstName.toUpperCase();
                            const firstNameB = b.empFirstName.toUpperCase();
                            if (firsNameA < firstNameB) {
                                return -1;
                            }
                            if (firsNameA > firstNameB) {
                                return 1;
                            }
                            // names must be equal
                            return 0;
                        }
                    ));
                break;
            case true:
                this.setState(
                    this.state.queryBody.sort(function (a, b) {
                            const firsNameA = a.empFirstName.toUpperCase();
                            const firstNameB = b.empFirstName.toUpperCase();
                            if (firstNameB < firsNameA) {
                                return -1;
                            }
                            
                            if (firstNameB > firsNameA) {
                                return 1;
                            }
                            // names must be equal
                            return 0;
                        }
                    ));
                break;
            default:
                console.log('Default');
        }
        // Change toggle state
        this.toggleStateTracker(el);
    } else if (el === 'lastName') {
        switch (this.state.toggleLastName) {
            case false:
                this.setState(
                    this.state.queryBody.sort(function (a, b) {
                            const lastNameA = a.empLastName.toUpperCase();
                            const lastNameB = b.empLastName.toUpperCase();
                            
                            if (lastNameA < lastNameB) {
                                return -1;
                            }
                            if (lastNameA > lastNameB) {
                                return 1;
                            }
                            // names must be equal
                            return 0;
                        }
                    ));
                break;
            case true:
                this.setState(
                    this.state.queryBody.sort(function (a, b) {
                            
                            const lastNameA = a.empLastName.toUpperCase();
                            const lastNameB = b.empLastName.toUpperCase();
                            
                            if (lastNameB < lastNameA) {
                                return -1;
                            }
                            
                            if (lastNameB > lastNameA) {
                                return 1;
                            }
                            // names must be equal
                            return 0;
                        }
                    ));
                break;
            default:
                console.log("default last name");
        }
    }
    this.toggleStateTracker(el);
};

// Toggle the correct value switch off unused toggle values , keeps track of the sort state
export const toggleStateTracker = function (name) {
    switch (name) {
        case 'firstName':
            this.setState({
                toggleFirstName: !this.state.toggleFirstName,
                toggleLastName: false,
                toggleDeptID: false,
                toggleEmployeeID: false
            });
            break;
        case 'lastName':
            this.setState({
                toggleLastName: !this.state.toggleLastName,
                toggleFirstName: false,
                toggleDeptID: false,
                toggleEmployeeID: false
            });
            break;
        case 'employeeID':
            this.setState({
                toggleEmployeeID: !this.state.toggleEmployeeID,
                toggleLastName: false,
                toggleDeptID: false,
                toggleFirstName: false
            });
            break;
        case 'departmentID' :
            this.setState({
                toggleDeptID: !this.state.toggleDeptID,
                toggleLastName: false,
                toggleFirstName: false,
                toggleEmployeeID: false
            });
            break;
        default:
            console.log('Unknown argument passed to switch');
    }
};
export const handleIntegerSort = function (s)  {
    // Select the values to sort by
    if (s === 'departmentID') {
        
        // Check for state of toggle + Do sort
        
        switch (this.state.toggleDeptID) {
            case false:
                console.log('B');
                this.setState(this.state.queryBody.sort(function (a, b) {
                    return b.empDepartmentID - a.empDepartmentID;
                }));
                break;
            case true :
                console.log('C');
                this.setState(this.state.queryBody.sort(function (a, b) {
                    return a.empDepartmentID - b.empDepartmentID;
                }));
                break;
            default:
                console.log('Default');
        }
        console.log('C2');
        // Reverse toggle value
        this.toggleStateTracker(s);
    } else if (s === 'employeeID') {
        switch (this.state.toggleEmployeeID) {
            case false:
                console.log('D');
                this.setState(this.state.queryBody.sort(function (a, b) {
                    return b.empEmployeeID - a.empEmployeeID;
                }));
                break;
            
            case true :
                console.log('E');
                this.setState(this.state.queryBody.sort(function (a, b) {
                    return a.empEmployeeID - b.empEmployeeID;
                }));
                break;
            default:
                console.log('Default');
        }
        console.log('E2');
        this.toggleStateTracker(s);
    }
};

export const responseSort = function(st, th) {
    let s;
    switch (st) {
        case (!st.toggleLastName === true):
            s = 'lastName';
            this.handleTextSort(s);
            break;
        case (st.toggleFirstName === true):
            s = 'firstName';
            this.handleTextSort(s);
            break;
        case (st.toggleEmployeeID === true):
            s = 'employeeID';
            break;
        case  (st.toggleDeptID === true):
            s = 'departmentID';
            this.handleIntegerSort(s);
            break;
        default:
            console.log('not found');
    }
    th.setState({tempResContainer: st.queryBody})
};