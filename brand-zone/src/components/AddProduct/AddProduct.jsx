import Swal from 'sweetalert2'
const AddProduct = () => {
    const banner1 = {
        backgroundImage: 'url("https://i.ibb.co/72Wp6c0/Screenshot-2.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        width: '100%',
        borderRadius: '10px',
        height: '100vh',
    };
    const transparentBgStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    };
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brandName = form.brand.value
        const image = form.image.value
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const description = form.description.value;
        const info = { name, image, brandName, description, price, rating, type }
        console.log(info);
        fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/addproduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Info Updated Successfully!',
                    confirmButtonText: 'OK'
                })
            }
            // console.log(data);
        })
    }
    return (
        <div className='overflow-y-hidden'>
            <div style={banner1}>
                <div style={transparentBgStyle} className="h-[550px] md:my-20  lg:w-4/6 mx-auto flex-justify-center items-center">
                    <div>
                        <div className="shadow-2xl pt-2">
                            <div>
                                <h1 className="mt-4 text-center text-black text-3xl font-bold uppercase">Add Product</h1>
                            </div>
                            <form onSubmit={handleUpdate} className="text-black px-5 py-5 h-screen">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input type="text" name="image" placeholder="Type Your Image Url" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Type Your Name" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <input type="text" name="brand" placeholder="Type Your Brand Name" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Type</span>
                                        </label>
                                        <input type="text" name="type" placeholder="Type" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Type Price" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered bg-white" required />
                                    </div>
                                    <div className="form-control col-span-2">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered bg-white" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success">ADD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;