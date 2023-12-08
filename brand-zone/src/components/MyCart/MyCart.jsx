
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../AuthProvider/AuthProvider";
const MyCart = () => {
    const [data, setData] = useState([])

    console.log(data);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/cart/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [user.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(resData => {
                        const remaining = data.filter(item => item._id !== id);
                        setData(remaining);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    };

    return (
        <div>
            <div>
                {data.length ? <div className="grid lg:grid-cols-2">
                    {
                        data?.map(cart => (
                            <div key={cart._id}>
                                <div className="container mx-auto mt-8 p-8">
                                    <div className="lg:flex text-center md:flex items-center justify-between mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                                        <div className="sm:w-7/12">
                                            <img src={cart.image} alt={cart.name} className="w-full h-64 object-cover" />
                                        </div>
                                        <div className="p-4 sm:w-5/12">
                                            <h1 className="text-2xl font-semibold mb-2">{cart.name}</h1>
                                            <p className="text-gray-600 mb-2">Brand: {cart.brandName}</p>
                                            <p className="text-lg font-bold text-indigo-700 mb-2">Price: ${cart.price}</p>
                                            <NavLink onClick={() => handleDelete(cart._id)}>
                                                <button
                                                    className="bg-red-500 transition hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    DELETE
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                    : <div className="flex justify-center items-center h-[75vh]">
                        <div className="text-center">
                            <img className="w-52 text-center mx-auto" src="https://i.ibb.co/WFH3B5J/no-data-found-concept-illustration-for-websites-landing-pages-mobile-application-banner-and-posters.jpg" alt="" />
                            <h1 className="text-center text-3xl text-red-500 font-bold">No Data Availablee</h1>
                            <p className="my-5 text-gray-500">Please Go To Home And Add Some Product</p>
                            <NavLink className='bg-green-600 btn text-white px-6 py-2' to='/'>Home</NavLink>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyCart;
