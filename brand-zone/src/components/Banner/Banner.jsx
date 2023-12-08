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
    backgroundImage: 'url("https://i.ibb.co/s9kTZ3J/kfc.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '80vh'
};
const banner2 = {
    backgroundImage: 'url("https://i.ibb.co/M2syzXQ/coca.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '80vh'
};
const banner3 = {
    backgroundImage: 'url("https://i.ibb.co/LRmVP0P/nugget.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '80vh'
};
const banner4 = {
    backgroundImage: 'url("https://i.ibb.co/L5FQV4W/nestle.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '80vh'
};
const banner5 = {
    backgroundImage: 'url("https://i.ibb.co/0FsNyRF/starbuck.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    width: '100%',
    height: '80vh',
    
};
const sliderData = [
    {
        id: 1,
        content:
            <div style={banner1}>
                <div className='lg:flex gap-10 items-center justify-between'>
                    <div className='w-4/6'>

                    </div>
                    <div className='flex items-center justify-center h-[400px]'>
                        <div className='text-left space-y-4'>
                            <p className='text-left bg-green-600 px-2 w-[200px] rounded-xl py-1  text-white font-bold'>Our Special Product</p>
                            <h1 className='text-4xl font-bold uppercase'>Hot And Crispy <br /> Chicken</h1>
                            <p className='text-gray-200'>KFC chicken: Crispy, golden, flavorful, and tender, <br /> a mouthwatering blend of secret herbs and spices.</p>
                            <button className='bg-[#22b46b] text-white font-bold uppercase px-6 py-3 rounded-lg'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>,
    },
    {
        id: 2,
        content:
            <div style={banner2}>
                <div>
                    <div className='lg:flex gap-10 items-center justify-between'>
                        <div className='w-1/2'>

                        </div>
                        <div className='flex justify-center items-center h-[400px]'>
                            <div className='text-left space-y-4'>
                                <p className='text-center bg-green-600 px-2 w-[200px] rounded-xl py-1 text-white font-bold'>Our Special Product</p>
                                <h1 className='text-4xl font-bold uppercase'>Coca Cola</h1>
                                <p className='text-gray-200'>Iconic carbonated beverage, Coca-Cola, delights taste buds worldwide with its fizzy, refreshing, and timeless flavor.</p>
                                <button className='bg-[#22b46b] text-white font-bold uppercase px-6 py-3 rounded-lg'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>,
    },
    {
        id: 3,
        content:
            <div style={banner3}>
                <div>
                    <div className='lg:flex gap-10 items-center justify-between'>
                        <div className='w-1/2 lg:mr-72'>

                        </div>
                        <div className='flex justify-center items-center h-[400px]'>
                            <div className='text-left space-y-4'>
                                <p className='text-center bg-green-600 px-2 w-[200px] rounded-xl py-1 text-white font-bold'>Our Special Product</p>
                                <h1 className='text-4xl font-bold'>McNuggets</h1>
                                <p>McNuggets: Bite-sized chicken pieces, popular fast food, crispy outside, tender inside, served with sauces.</p>
                                <button className='bg-[#22b46b] text-white font-bold uppercase px-6 py-3 rounded-lg'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
    },
    {
        id: 4,
        content:
            <div style={banner4}>
                <div className='lg:flex gap-10 items-center justify-between'>
                    <div className='w-1/2 lg:mr-80'>

                    </div>
                    <div className='flex justify-center items-center h-[400px]'>
                        <div className='text-left space-y-4'>
                            <p className='text-center bg-green-600 px-2 w-[200px] rounded-xl py-1 text-white font-bold'>Our Special Product</p>
                            <h1 className='text-4xl font-bold uppercase'>Nestle Corn</h1>
                            <p>Nestle Coffee: Rich, aromatic blend, crafted by Nestle, delivering a delightful coffee experience to enthusiasts.</p>
                            <button className='bg-[#22b46b] text-white font-bold uppercase px-6 py-3 rounded-lg'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>,
    },
    {
        id: 5,
        content:
            <div style={banner5}>
                <div className='lg:flex gap-10 items-center justify-between'>
                    <div className='w-1/2 lg:mr-80'>

                    </div>
                    <div className='flex justify-center items-center h-[400px]'>
                        <div className='text-left space-y-4'>
                            <p className='text-center bg-green-600 px-2 w-[200px] rounded-xl py-1 text-white font-bold'>Our Special Product</p>
                            <h1 className='text-4xl font-bold uppercase'>Starbucks Coffe</h1>
                            <p>Starbucks: Global coffeehouse chain, famed for premium coffee, cozy atmosphere, and diverse menu, enjoyed by millions daily.</p>
                            <button className='bg-[#22b46b] text-white font-bold uppercase px-6 py-3 rounded-lg'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>,
    }


];
const Banner = () => {
    return (
        <div className='mb-7'>
            <Slider {...sliderSettings}>
                {sliderData.map((slide) => (
                    <div key={slide.id}>
                        <h3>{slide.content}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;