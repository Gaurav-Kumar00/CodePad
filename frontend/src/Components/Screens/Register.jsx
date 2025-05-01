// import React, { useState } from "react";
// import Login_svg from "../../assets/Login-amico.svg";
// import blog_svg from "../../assets/blobanimation.svg";
// import { NavLink } from "react-router-dom";
// // import { useFormik } from 'formik';
// // import { registerSchema } from './schema';
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// // const initialuser = {
// //     username:"",
// //     email:"",
// //     pass:"",
// //     cpass:"",
// //     work:"",
// //     dom:""
// // }

// function Register() {
//     const history1 = useNavigate();

//     //for storing the data to sent in backend.
//     const [user, setUser] = useState({
//         username: "",
//         email: "",
//         password: "",
//         cpassword: "",
//         role: "",
//         // dom:"",
//     });

//     let name, value;
//     const handleChange = (e) => {
//         console.log(e);
//         name = e.target.name;
//         value = e.target.value;

//         setUser({ ...user, [name]: value });
//     };

//     const PostData = async (e) => {
//         e.preventDefault();
//         const { username, email, password, cpassword, role /* dom,*/ } = user;
//         const res = await fetch("http://localhost:5050/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 username,
//                 email,
//                 password,
//                 cpassword,
//                 role /* dom*/,
//             }),
//         });
//         const data = await res.json();

//         if (res.status === 422 || !data) {
//             // window.alert("Invalid Registration");
//             toast.error("Please Fill The Details.");
//             console.log("Invalid Registration");
//         } else if (res.status === 421) {
//             toast.error("Email is Already Registered");
//         } else if (res.status === 420) {
//             toast.error("Password is not Matching");
//         } else {
//             // window.alert("Register Successsful");
//             toast.success("Register Successfuly");
//             console.log("Register Successful");

//             // history1.push("/login",{replace:true});
//             history1("/login");
//         }
//     };

//     // const handleSubmit = (e)=>{
//     //     e.preventDefault();
//     // }

//     //for authentication purpose below code/..
//     // const {values,errors,handleBlur,touched,handleChange,handleSubmit} =  useFormik({
//     //     initialValues:user,
//     //     validationSchema:registerSchema,
//     //     onSubmit:(values,action)=>{
//     //         console.log(
//     //             " ~ File: Register.jsx ~ line 14 ~ Register ~ values ",
//     //             values
//     //         );
//     //         action.resetForm();
//     //     },
//     // });

//     const width2 = window.outerWidth;
//     return (
//         <>
//             <div className="smallScreen">
//                 <mark>
//                     The Screen is Visible with width more than 250px <br />
//                     <br />
//                     <hr />
//                     <br />
//                     Screen Size: {width2}px
//                 </mark>
//             </div>
//             <div className="registerMainComponent">
//                 <img
//                     className="blob_svg blob_a"
//                     src={blog_svg}
//                     alt="backgound-svg"
//                 />
//                 <img
//                     className="blob_svg2 blob_a"
//                     src={blog_svg}
//                     alt="backgound-svg"
//                 />
//                 <h1 className="registerTitle title">Registration</h1>
//                 <br />
//                 <div className="registerSection">
//                     <div className="registerForm">
//                         {/* <form onSubmit={handleSubmit}> */}
//                         <form>
//                             <div className="RegisterInputField">
//                                 <div className="Registername">
//                                     <label
//                                         className="registerLabels"
//                                         htmlFor="username"
//                                     >
//                                         {" "}
//                                         Username:
//                                     </label>
//                                     <br />
//                                     <input
//                                         type="text"
//                                         name="username"
//                                         id="username"
//                                         // autoComplete='off'
//                                         placeholder="codofile"
//                                         value={user.username}
//                                         onChange={handleChange}
//                                         // onBlur={handleBlur}
//                                     />
//                                     <br />
//                                     {/* {errors.username && touched.username ? (<p className='errorlabelinput'>{errors.username}</p>) : null} */}
//                                 </div>
//                                 <div className="Registeremail">
//                                     <label
//                                         className="registerLabels"
//                                         htmlFor="email"
//                                     >
//                                         Email:
//                                     </label>
//                                     <br />
//                                     <input
//                                         type="text"
//                                         name="email"
//                                         id="email"
//                                         // autoComplete='off'
//                                         placeholder="CodoFile@gmail.com"
//                                         value={user.email}
//                                         onChange={handleChange}
//                                         // onBlur={handleBlur}
//                                     />
//                                     <br />
//                                     {/* {errors.email && touched.email ? (<p className='errorlabelinput'>{errors.email}</p>) : null} */}
//                                 </div>
//                                 <div className="Registerpassword">
//                                     <label
//                                         className="registerLabels"
//                                         htmlFor="pass"
//                                     >
//                                         Password:
//                                     </label>
//                                     <br />
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         id="password"
//                                         // autoComplete='off'
//                                         placeholder="123456"
//                                         value={user.password}
//                                         onChange={handleChange}
//                                         // onBlur={handleBlur}
//                                     />
//                                     <br />
//                                     {/* {errors.pass && touched.pass ? (<p className='errorlabelinput'>{errors.pass}</p>) : null} */}
//                                 </div>
//                                 <div className="Registercpassword">
//                                     <label
//                                         className="registerLabels"
//                                         htmlFor="cpass"
//                                     >
//                                         Confirm Password:
//                                     </label>
//                                     <br />
//                                     <input
//                                         type="password"
//                                         name="cpassword"
//                                         id="cpassword"
//                                         // autoComplete='off'
//                                         placeholder="123456"
//                                         value={user.cpassword}
//                                         onChange={handleChange}
//                                         // onBlur={handleBlur}
//                                     />
//                                     <br />
//                                     {/* {errors.cpass && touched.cpass ? (<p className='errorlabelinput'>{errors.cpass}</p>) : null} */}
//                                 </div>
//                                 <div className="Registerdomain">
//                                     <label
//                                         className="registerLabels"
//                                         htmlFor="work"
//                                     >
//                                         Profession:
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="role"
//                                         id="role"
//                                         // autoComplete='off'
//                                         placeholder="Web Developer"
//                                         value={user.role}
//                                         onChange={handleChange}
//                                         // onBlur={handleBlur}
//                                     />
//                                     {/* {errors.work && touched.work ? (<p className='errorlabelinput'>{errors.work}</p>) : null} */}
//                                 </div>
//                                 {/* <div className="Registerdomain">
//                                 <label className='registerLabels' htmlFor="dom">You are a :</label><br />
//                                 <input
//                                 type="text"
//                                 name="dom"
//                                 id="dom"
//                                 placeholder='Student/Teacher/Learner'
//                                 value={user.dom}
//                                 onChange={handleChange}
//                                 // onBlur={handleBlur}
//                                  />
//                                  {/* {errors.dom && touched.dom ? (<p className='errorlabelinput'>{errors.dom}</p>) : null}
//                             </div> */}
//                             </div>
//                             <input
//                                 type="submit"
//                                 onClick={PostData}
//                                 className="btn registerbtn"
//                             />
//                         </form>
//                     </div>
//                     <div className="registerSVG">
//                         <img src={Login_svg} alt="" />
//                         <p>
//                             Already have an Account?{" "}
//                             <NavLink to="/login">
//                                 <span className="registerSwitch">
//                                     Login Now
//                                 </span>
//                             </NavLink>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Register;
import React, { useState } from "react";
import Login_svg from "../../assets/Login-amico.svg";
import blog_svg from "../../assets/blobanimation.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Register() {
    const history1 = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const isStrongPassword = (password) => {
        const re =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;
        return re.test(password);
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { username, email, password, cpassword, role } = user;

        if (!username || !email || !password || !cpassword || !role) {
            toast.error("Please fill in all fields.");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Invalid email format.");
            return;
        }

        if (!isStrongPassword(password)) {
            toast.error(
                "Password must be at least 8 characters with uppercase, lowercase, number, and special character."
            );
            return;
        }

        if (password !== cpassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const res = await fetch("http://localhost:5050/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    cpassword,
                    role,
                }),
            });

            const data = await res.json();

            if (res.status === 422 || !data) {
                toast.error("Please Fill The Details.");
            } else if (res.status === 421) {
                toast.error("Email is Already Registered");
            } else if (res.status === 420) {
                toast.error("Password is not Matching");
            } else {
                toast.success("Register Successfully");
                history1("/login");
            }
        } catch (error) {
            toast.error("Something went wrong. Try again later.");
            console.error(error);
        }
    };

    const width2 = window.outerWidth;
    return (
        <>
            <div className="smallScreen">
                <mark>
                    The Screen is Visible with width more than 250px <br />
                    <br />
                    <hr />
                    <br />
                    Screen Size: {width2}px
                </mark>
            </div>
            <div className="registerMainComponent">
                <img
                    className="blob_svg blob_a"
                    src={blog_svg}
                    alt="background-svg"
                />
                <img
                    className="blob_svg2 blob_a"
                    src={blog_svg}
                    alt="background-svg"
                />
                <h1 className="registerTitle title">Registration</h1>
                <br />
                <div className="registerSection">
                    <div className="registerForm">
                        <form>
                            <div className="RegisterInputField">
                                <div className="Registername">
                                    <label
                                        className="registerLabels"
                                        htmlFor="username"
                                    >
                                        Username:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="codofile"
                                        value={user.username}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="Registeremail">
                                    <label
                                        className="registerLabels"
                                        htmlFor="email"
                                    >
                                        Email:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="CodoFile@gmail.com"
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="Registerpassword">
                                    <label
                                        className="registerLabels"
                                        htmlFor="password"
                                    >
                                        Password:
                                    </label>
                                    <br />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="********"
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="Registercpassword">
                                    <label
                                        className="registerLabels"
                                        htmlFor="cpassword"
                                    >
                                        Confirm Password:
                                    </label>
                                    <br />
                                    <input
                                        type="password"
                                        name="cpassword"
                                        id="cpassword"
                                        placeholder="********"
                                        value={user.cpassword}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="Registerdomain">
                                    <label
                                        className="registerLabels"
                                        htmlFor="role"
                                    >
                                        Profession:
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        id="role"
                                        placeholder="Web Developer"
                                        value={user.role}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <input
                                type="submit"
                                onClick={PostData}
                                className="btn registerbtn"
                                value="Register"
                            />
                        </form>
                    </div>
                    <div className="registerSVG">
                        <img src={Login_svg} alt="Login Illustration" />
                        <p>
                            Already have an Account?{" "}
                            <NavLink to="/login">
                                <span className="registerSwitch">
                                    Login Now
                                </span>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
