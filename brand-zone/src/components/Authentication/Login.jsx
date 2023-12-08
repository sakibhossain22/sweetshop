import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
const Login = () => {
    const navigate = useNavigate()
    const { googleLogin, signInEmail } = useContext(AuthContext)
    const banner1 = {
        backgroundImage: 'url("https://i.ibb.co/7nHzwwj/login-banner.jpg")',
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
    const HandleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => {
                console.error(err.message)
            })
    }
    const handleEmailSign = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value;
        const loginData = { email, password }
        console.log(loginData)
        signInEmail(email, password)
            .then(result => {
                const user = result.user
                // console.log(user)
                if (user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Login Successful!',
                        confirmButtonText: 'OK'
                    })
                }
                navigate('/')
            })
            .catch(error => {
                const message = error.message
                Swal.fire({
                    title: 'Error!',
                    text: message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                console.log(error.message);
            })
    }
    return (
        <div style={banner1}>
            <div style={transparentBgStyle} className="lg:w-1/2 md:w-5/6 overflow-y-hidden mx-auto">
                <div className="shadow-2xl  rounded-lg p-8">
                    <form onSubmit={handleEmailSign}>
                        <h1 className="text-center text-black text-3xl font-bold uppercase my-5">Login Now</h1>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type Your Email"
                                className="bg-white mt-1 p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Type Your Password"
                                className="bg-white mt-1 p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700">
                                Login
                            </button>
                        </div>
                        <p className="text-center text-black mb-4">Don't Have An Account? <NavLink className='text-white font-bold bg-green-600 px-2 py-1 rounded' to='/register'>Register</NavLink></p>
                        <h1 className="text-xl border-b-2 border-black text-center pb-2 my-4">Sign In With</h1>
                    </form>
                        <button onClick={HandleGoogleLogin} className='flex mx-auto items-center lg:w-3/6 bg-white border border-black lg:p-2 p-1 md:p-2 rounded-lg hover:bg-green-400 transition'>
                            <img className="w-8" src="https://i.ibb.co/zbMdxWH/Google-G-Logo-svg.webp" alt="Google Logo" />
                            <p className="ml-2">Sign In With Google</p>
                        </button>
                </div>
            </div>
        </div>

    );
};

export default Login;