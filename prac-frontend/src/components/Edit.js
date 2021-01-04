// import React, { useState } from "react";
// import axios from "axios";

// function Edit(props) {

    // const [updates, setUpdates] = useState({
    //     usrFirstName: "",
    //     usrLastName: "",
    //     usrEmail: "",
    //     usrBirthData: "",
    //     usrInfo: ""
    // });

    // //Update Data in State    
    // function handleInput(e) {
    //     const { name, value } = e.target;
    //     // console.log(name);
    //     // console.log(value);

    //     setUpdates({
    //         ...updates,
    //         [name]: value
    //     });

    //     // console.log(e.target.name);
    //     // console.log(e.target.value);
    // }
    // // ./././././Update Data in State

//     function handleEdit(e) {
//         console.log(e);
//         e.preventDefault();
//         // axios.put("/edit", updates)
//         //     .then(function (res) {
//         //         console.log(res);
//         //     });
//         // console.log(updates);

//     }



//     return (
//         <>
//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">New User</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <form onSubmit={handleEdit}>
//                                 <div className="form-group">
//                                     <label htmlFor="recipient-name" className="col-form-label">First Name</label>
//                                     <input type="text" className="form-control" id="recipient-name" name="usrFirstName" value={updates.fName} onChange={handleInput} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="message-text" className="col-form-label">Last Name</label>
//                                     <input type="text" className="form-control" id="recipient-name" name="usrLastName" value={updates.lName} onChange={handleInput} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="message-text" className="col-form-label">Email</label>
//                                     <input type="text" className="form-control" id="recipient-name" name="usrEmail" value={updates.email} onChange={handleInput} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="message-text" className="col-form-label">Birth Data</label>
//                                     <input type="text" className="form-control" id="recipient-name" name="usrBirthData" value={updates.dob} onChange={handleInput} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="message-text" className="col-form-label">Biodata</label>
//                                     <input type="text" className="form-control" id="recipient-name" name="usrInfo" value={updates.bio} onChange={handleInput} />
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                     <input type="hidden" name="editData" value={props.dataId} />
//                                     <button type="submit" className="btn btn-primary">Updata Data</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Edit;



// //             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button>

