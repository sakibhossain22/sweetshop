import { NavLink, useLoaderData } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};
const banner1 = {
    backgroundImage: 'url("https://i.ibb.co/sPWcPr0/burger.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '50vh'
};
const banner2 = {
    backgroundImage: 'url("https://i.ibb.co/7yTKQys/chicker-fry.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '50vh'
};
const banner3 = {
    backgroundImage: 'url("https://i.ibb.co/JCxZ93h/Pizza.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '50vh'
};
const sliderData = [
    {
        id: 1,
        content:
            <div style={banner1}>

            </div>,
    },
    {
        id: 2,
        content:
            <div style={banner2}>


            </div>,
    },
    {
        id: 3,
        content:
            <div style={banner3}>

            </div>
    }
]
const Products = () => {

    const loadedData = useLoaderData()
    // console.log(loadedData);
    // console.log(loadedData);
    return (
        <div className='mb-7'>
            <div>
                {
                    loadedData.length ?
                        <div>
                            <div>
                                <div className='mb-7'>
                                    <Slider {...sliderSettings}>
                                        {sliderData.map((slide) => (
                                            <div key={slide.id}>
                                                <h3>{slide.content}</h3>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-4 p-4">
                                {loadedData?.map(card => (
                                    <div key={card._id} className="bg-white shadow-2xl p-4 rounded-lg">
                                        <div className="flex gap-5 items-center justify-between">
                                            <div className="w-3/6">
                                                <img src={card.image} alt={card.name} className="mx-auto w-full object-cover mb-4 rounded-md" />
                                            </div>
                                            <div className="w-3/6">
                                                <h1 className="text-3xl font-semibold mb-2">{card.name}</h1>
                                                <h3 className="text-gray-600 mb-2">Brand : {card.brandName}</h3>
                                                <p className="text-gray-500 mb-2">Type : <span className="font-bold">{card.type}</span></p>
                                                <p className="text-green-500 font-semibold mb-2">${card.price}</p>
                                                <p className="text-yellow-400 mb-4">Rating: {card.rating}</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 w-6/12 md:w-3/12 lg:w-1/2 mx-auto text-center">
                                            <NavLink to={`/details/${card._id}`}>
                                                <button className="w-full px-14 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded focus:outline-none">Details</button>
                                            </NavLink>
                                            <NavLink to={`/update/${card._id}`}>
                                                <button className="w-full px-14 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded focus:outline-none">Update</button>
                                            </NavLink>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        : <div className="flex justify-center items-center h-[75vh]">
                            <div className="text-center">
                                <img className="w-52 text-center mx-auto" src="https://i.ibb.co/WFH3B5J/no-data-found-concept-illustration-for-websites-landing-pages-mobile-application-banner-and-posters.jpg" alt="" />
                                <h1 className="text-center text-3xl text-red-500 font-bold">No Products Available</h1>
                                <p className="my-5">Please Go To Add Product And Add Some Product</p>
                                <NavLink className='bg-green-600 btn text-white px-6 py-2' to='/addproduct'>Home</NavLink>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Products;
