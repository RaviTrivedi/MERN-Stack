import React, { useState } from "react";
import axios from "axios";

function Form(props) {

    const [items, setItems] = useState({
        usrFirstName: "",
        usrLastName: "",
        usrEmail: "",
        usrBirthData: "",
        usrInfo: ""
    });

    function handleInput(e) {
        const { name, value } = e.target;
        // console.log(name);
        // console.log(value);

        setItems({
            ...items,
            [name]: value
        });

        // console.log(e.target.name);
        // console.log(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(e);
        // JSON.stringify(items);
        await axios.post("/data", items)
            .then(function (res) {
                console.log(res);
            })
        $('#exampleModal').modal('hide');        
        // console.log(items);
        // axios.post("/data");
    }

    return (
        <>
            <button type="button" className="btn btn-primary create-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Create</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">First Name</label>
                                    <input type="text" className="form-control fname-input" id="recipient-name" name="usrFirstName" value={items.fName} onChange={handleInput} />
                                    <p id="fname-validation"></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Last Name</label>
                                    <input type="text" className="form-control lname-input" id="recipient-name" name="usrLastName" value={items.lName} onChange={handleInput} />
                                    <p id="lname-validation"></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Email</label>
                                    <input type="text" className="form-control email-input" id="recipient-name" name="usrEmail" value={items.email} onChange={handleInput} />
                                    <p id="email-validation"></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Birth Data</label>
                                    <input type="text" className="form-control dob-input" id="recipient-name" name="usrBirthData" value={items.dob} onChange={handleInput} />
                                    <p id="dob-validation"></p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Biodata</label>
                                    <input type="text" className="form-control bio-input" id="recipient-name" name="usrInfo" value={items.bio} onChange={handleInput} />
                                    <p id="bio-validation"></p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary myclass">Add Data</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// if (name === "usrFirstName") {
//     return {
//         fName: value,
//         lName: prevValue.usrLastName,
//         email: prevValue.usrEmail,
//         dob: prevValue.usrBirthData,
//         bio: prevValue.usrInfo

//     }
// }

// } else if (name === "usrLastName") {
//     return {
//         fName: prevValue.usrFirstName,
//         lName: value,
//         email: prevValue.usrEmail,
//         dob: prevValue.usrBirthData,
//         bio: prevValue.usrInfo

//     }
// } else if (name === "usrEmail") {
//     return {
//         fName: prevValue.usrFirstName,
//         lName: prevValue.usrLastName,
//         email: value,
//         dob: prevValue.usrBirthData,
//         bio: prevValue.usrInfo

//     }
// } else if (name === "usrBirthData") {
//     return {
//         fName: prevValue.usrFirstName,
//         lName: prevValue.usrLastName,
//         email: prevValue.usrEmail,
//         dob: value,
//         bio: prevValue.usrInfo

//     }
// } else if (name === "usrInfo") {
//     return {
//         fName: prevValue.usrFirstName,
//         lName: prevValue.usrLastName,
//         email: prevValue.usrEmail,
//         dob: prevValue.usrBirthData,
//         bio: value
//     }
// }


export default Form;