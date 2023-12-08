/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';

const Navbar = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("body").setAttribute('data-theme', 'dark')
        }
        else {
            document.querySelector("body").setAttribute('data-theme', 'light')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme == "dark" ? "light" : "dark");

    }
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'LogOut Successful!',
                    confirmButtonText: 'OK'
                })
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
    const [toggle, setToggle] = useState('false')
    const toggleTheme = () => {
        handleThemeSwitch()
        setToggle(!toggle)
    }
    return (
        <div className="text-black">
            <div>
                <div>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="">
                                <NavLink to='/' className="btn bg-white normal-case lg:text-xl"><h1 className="text-black font-bold">SWEET <span className="text-[#22b46b]">SHOP</span></h1></NavLink>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <div className={toggle ? 'bg-black px-1 lg:px-4 py-1 rounded text-white' : 'bg-white px-1 lg:px-4 py-1 rounded text-black'}>
                                <button style={{ display: 'flex', alignItems: 'center', gap: '10px' }}  onClick={toggleTheme}>
                                    {
                                        toggle ? <FaRegLightbulb></FaRegLightbulb> : <FaLightbulb className="text-yellow-500"></FaLightbulb>
                                    }
                                    {toggle ? 'Dark' : 'Light'}
                                </button>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div>
                                {
                                    user ? <span className="flex items-center gap-1 lg:gap-3">
                                        <img className="w-10 rounded-3xl" src={user.photoURL} alt="" />
                                        <h1 className="lg:block md:block hidden text-green-600 sm:text-base font-bold uppercase">{user.displayName}</h1>
                                        <button onClick={handleLogOut} className="bg-green-400 px-4 py-2 rounded text-black">Log Out</button>
                                    </span>
                                        : <span>
                                            <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "border-b-2 bg-green-400 text-white px-4 py-1 rounded-lg" : ""
                                                }
                                            >
                                                <span className="text-black">Login</span>
                                            </NavLink>
                                        </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:navbar py-2 bg-green-400 flex justify-center items-center mx-auto md:flex text-center">
                    <div>
                        <ul className="px-1 space-x-4 lg:flex md:flex md:mx-5 items-center font-bold gap-5">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-b-2  text-white px-4 lg:py-1 rounded-lg" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/addproduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-b-2  text-white px-4 lg:py-1 rounded-lg" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                            <NavLink
                                to="/mycart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-b-2  text-white px-4 lg:py-1 rounded-lg" : ""
                                }
                            >
                                My Cart
                            </NavLink>
                            <NavLink
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-b-2  text-white px-4 lg:py-1 rounded-lg" : ""
                                }
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-b-2 text-white px-4" : ""
                                }
                            >
                                Login
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;