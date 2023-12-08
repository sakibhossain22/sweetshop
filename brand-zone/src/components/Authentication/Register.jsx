/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
const Register = () => {
    const [error, setError] = useState("")
    const { signUpEmail, userUpdate } = useContext(AuthContext)
    const banner1 = {
        backgroundImage: 'url("https://i.ibb.co/McCv799/Screenshot-1.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        padding: '50px',
        width: '100%',
        height: '100vh',
    };
    const transparentBgStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    };
    const handleRegister = (e) => {
        setError("")
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value;

        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password should have 6 character , one Uppercase and a special character',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }
        const userData = { name, photo, email, password }
        console.log(userData)
        signUpEmail(email, password)
            .then(result => {
                const user = result.user
                userUpdate(name, photo)
                    .then(result => {
                        console.log('profile updated');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                if (user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Registration Successful!',
                        confirmButtonText: 'OK'
                    })
                }
                // console.log(user)
            })
            .catch(error => {
                const message = error.message
                Swal.fire({
                    title: 'Error!',
                    text: message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                // console.log(message)
            })
    }
    return (
        <div style={banner1} className="min-h-screen flex items-center justify-center bg-gray-100">
            <div style={transparentBgStyle} className="rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-6">Register Now</h1>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Type Your Name"
                            className="mt-1 bg-white p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Photo Url</label>
                        <input type="text" name="photo" placeholder="Type Your Photo URL" className="mt-1 bg-white p-2 w-full border rounded focus:outline-none focus:border-indigo-500" required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Type Your Email"
                            className="mt-1 bg-white p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Your Password"
                            className="mt-1 bg-white p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-indigo-700">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600">
                    Already Have An Account? <NavLink className='text-white font-bold bg-green-600 px-2 py-1 rounded' to='/login'>Login</NavLink>
                </p>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
        </div>

    );
};

export default Register;