import React, { useState } from "react";
import axios from "axios";
// import Edit from "./Edit";

function Tbody() {

    const [posts, setPosts] = useState([]);

    const [updates, setUpdates] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
        bioDate: ""
    });

    axios.get("/data")
        .then(function (res) {
            // console.log(res);
            setPosts(res.data.reverse());
        })

    //Update Data in State    
    function handleInput(e) {
        const { name, value } = e.target;
        // console.log(name);
        // console.log(value);

        setUpdates({
            ...updates,
            [name]: value
        });

        // console.log(e.target.name);
        // console.log(e.target.value);
    }
    // ./././././Update Data in State


    function handleDelete(e) {
        // console.log(e.target[0].name);
        // console.log(e.target[0].value);
        const name = e.target[0].name;
        const value = e.target[0].value;
        const obj = {
            name: value
        }
        axios.post("/delete", obj)
            .then(function (res) {
                console.log(res);
            });
        e.preventDefault();
    }

    function handleClickEdit(e) {
        // console.log(e.target.name);
        // console.log(e.target.value);

        const editDataName = e.target.name;
        const editDataValue = e.target.value

        const editDataRequest = {
            editDataName: editDataValue
        }

        axios.get(`/edit/${editDataRequest.editDataName}`)
            .then(function (res) {
                // console.log(res);

                setUpdates(res.data);
            })

    }

    function handleEdit(e) {
        e.preventDefault();
        // console.log(e.target);
        // console.log(updates);
        // const editIdName = e.target[5].name;
        // const editIdValue = e.target[5].value;
        // const editObjId = {
        //     editIdName: editIdValue
        // }
        // console.log(e.target[1]);
        // console.log(e.target[2]);
        // console.log(e.target[3]);
        // console.log(e.target[4]);
        // console.log("Edit Data");
        const editDataId = updates._id;
        axios.put(`/edit/${editDataId}`, updates)
            .then(function (res) {
                console.log(res);
            })
        $("#exampleModa").modal("hide");
    }

    return (
        <tbody>
            {/* <tr>
                <td>1</td>
                <td>fName</td>
                <td>lName</td>
                <td>email</td>
                <td>DOB</td>
                <td>bio</td>
            </tr> */}
            {/* <h1>Hello Data</h1> */}
            {posts.map(function (singlepost, index) {
                {/* {console.log(singlepost);} */ }
                return <tr key={singlepost._id}>
                    <td>{index + 1}</td>
                    <td>{singlepost.firstName}</td>
                    <td>{singlepost.lastName}</td>
                    <td>{singlepost.email}</td>
                    <td>{singlepost.birthDate}</td>
                    <td>{singlepost.bioDate}</td>
                    <td>
                        <form onSubmit={handleDelete}>
                            <input type="hidden" name="delete" value={singlepost._id} />
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </td>
                    <td>
                        <div>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModa"
                                onClick={handleClickEdit}
                                name="editDataValue"
                                value={singlepost._id}>
                                Edit
                            </button>

                            <div className="modal fade" id="exampleModa" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={handleEdit}>
                                                <div className="form-group">
                                                    <label htmlFor="recipient-name" className="col-form-label">First Name</label>
                                                    <input type="text" className="form-control" id="recipient-name" name="firstName" value={updates.firstName} onChange={handleInput} />
                                                    <input type="hidden" name="editId" value={singlepost._id} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Last Name</label>
                                                    <input type="text" className="form-control" id="recipient-name" name="lastName" value={updates.lastName} onChange={handleInput} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Email</label>
                                                    <input type="text" className="form-control" id="recipient-name" name="email" value={updates.email} onChange={handleInput} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Birth Data</label>
                                                    <input type="text" className="form-control" id="recipient-name" name="birthDate" value={updates.birthDate} onChange={handleInput} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Biodata</label>
                                                    <input type="text" className="form-control" id="recipient-name" name="bioDate" value={updates.bioDate} onChange={handleInput} />
                                                    <input type="hidden" name="edit" value={singlepost._id} />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button type="submit" className="btn btn-info">Edit</button> */}
                    </td>
                </tr>
            })}
            {/* <tr>
                <td>January</td>
                <td>$100</td>
            </tr> */}
        </tbody>
    );
}

export default Tbody;
