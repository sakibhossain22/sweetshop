import { NavLink } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="flex justify-center items-center h-[70vh]">
            <div>
                <img src="https://i.ibb.co/Fzy7bsL/404-landing-page-free-vector.jpg" alt="" />
                <div className="text-center my-10">
                    <p className="text-3xl font-bold">Something went <span className="text-red-600">wrong</span> !! Please Go to Home</p>
                    <NavLink to='/'>
                        <button className="btn btn-ghost bg-green-600 text-white py-1 px-6 my-5">Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;