/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
const MyCartPrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default MyCartPrivateRoute;