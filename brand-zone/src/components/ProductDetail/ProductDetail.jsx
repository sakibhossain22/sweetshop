import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../AuthProvider/AuthProvider";
const ProductDetail = () => {
    const { user } = useContext(AuthContext)
    const loadedProduct = useLoaderData();
    const { name, image, brandName, description, price, rating, type } = loadedProduct;
    const email = user.email
    const addToCart = () => {
        const cardItem = { name, image, brandName, description, price, rating, type, email }
        fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cardItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Product Added Successfully!',
                        confirmButtonText: 'OK'
                    })
                }
                // console.log(data)
            })
        // console.log(cardItem);
    };
    return (
        <div className="flex justify-center items-center">
            <div  className="max-w-3xl bg-white my-5 p-6 border-2 rounded-lg shadow-lg">
                <div className="mb-4">
                    <img src={image} alt={name} className="w-1/2 mx-auto h-auto rounded" />
                </div>
                <h1 className="text-2xl font-bold mb-2 text-3xl">{name}</h1>
                <p className="text-gray-600 mb-2 text-xl">Brand: <span className="font-bold">{brandName}</span></p>
                <p className="text-gray-600 mb-4">Description: {description}</p>
                <p className="text-lg font-bold text-indigo-700 mb-2">Price: ${price}</p>
                <p className="text-gray-600 mb-2 text-lg">Rating: {rating}/5</p>
                <p className="text-gray-600 mb-4 text-lg">Type: <span className="font-bold">{type}</span></p>
                <button
                    onClick={addToCart}
                    className="bg-green-500 transition w-full py-5 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
