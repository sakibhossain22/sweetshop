import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
    const brandsData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div>
                <div>
                    <h1 className="text-center text-4xl font-semibold text-green-600 my-2">Our Brands</h1>
                    <div className="bg-green-600 my-4 w-48 h-1 mx-auto"></div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 mx-5 lg:gap-10">
                    {
                        brandsData.map(brand => (
                            <NavLink to={`/products/${brand.name}`} key={brand.brandId} >
                                <div className="mb-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                                    style={{
                                        background: `linear-gradient(135deg, #FF6F61, #FFD166)`, color: '#fff',
                                    }}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <img className="w-32 h-32 object-cover rounded-full border-4 border-white" src={brand.brandImage} alt="Brand Logo" />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold mb-2">{brand.name}</h2>
                                        <p className="text-gray-100">{brand.description}</p>
                                    </div>
                                </div>
                            </NavLink>
                        ))
                    }




                </div>
            </div>
            {/* Why Choose Us */}
            <div className="text-white">
                <div>
                    <p className="text-center text-2xl text-green-600 font-semibold">About US</p>
                    <h1 className="text-center text-4xl font-semibold text-green-600 my-2">Why Choose Us ?</h1>
                    <div className="bg-green-600 my-4 w-48 h-1 mx-auto"></div>
                </div>
                <div className="lg:flex md:flex justify-around items-center gap-5">
                    <div>
                        <img className="w-full" src="https://i.ibb.co/RNNDH3H/Screenshot-3.png" alt="" />
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 mx-auto text-center md:text-left lg:text-left">
                        <h1 className="text-green-600 font-bold text-4xl my-5">Best Food In The Country</h1>
                        <p className="text-gray-400">The world best food is a vibrant mosaic of flavors and cultures. From Italy indulgent pasta dishes to Japan delicate sushi, every bite tells a story. India aromatic curries, France exquisite pastries, and Mexico spicy tacos showcase culinary artistry. Food transcends borders, bringing people.</p>
                        <div className="my-5 justify-center items-center flex gap-5">
                            <button className="bg-green-600 text-white px-5 py-2 rounded font-semibold">Learn More</button>
                            <button className="bg-green-600 text-white px-5 py-2 rounded font-semibold">24/7 Service</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div>
                    <h1 className="text-center text-4xl font-semibold text-green-600 my-2">Support</h1>
                    <div className="bg-green-600 my-4 w-48 h-1 mx-auto"></div>
                </div>
                <div className="lg:flex grid md:grid-cols-2 justify-center items-center gap-8 p-8">
                    <div className="flex bg-green-200 px-5 flex-col justify-center items-center rounded-lg shadow-lg p-4">
                        <img className="m-5  h-52 rounded-xl mb-4" src="https://i.ibb.co/60M19cK/thenounproject.png" alt="" />
                        <h1 className="text-xl font-bold mb-2">Best Products</h1>
                    </div>
                    <div className="flex bg-green-200 px-5 flex-col justify-center items-center rounded-lg shadow-lg p-4">
                        <img className="m-5 lg:w-full h-52 rounded-xl object-cover mb-4" src="https://i.ibb.co/q19B7G2/thenounproject.png" alt="" />
                        <h1 className="text-xl font-bold mb-2">24/7 Support</h1>
                    </div>
                    <div className="l flex bg-green-200 px-5 flex-col justify-center items-center rounded-lg shadow-lg p-4">
                        <img className="m-5 w-44 h-52 rounded-xl object-cover mb-4" src="https://i.ibb.co/52V8HD3/icon-5462346-edited.png" alt="" />
                        <h1 className="text-xl font-bold mb-2">Fastest Delivery</h1>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;