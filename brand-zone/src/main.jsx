import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Home from './components/Home/Home';
import ErrorElement from './components/ErrorElement/ErrorElement';
import AddProduct from './components/AddProduct/AddProduct';
import Products from './components/Products/Products';
import AddProductPrivate from './components/PrivateRoute/AddProductPrivate';
import ProductsPrivateRoute from './components/PrivateRoute/ProductsPrivateRoute';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductDetailsPrivateRoute from './components/PrivateRoute/ProductDetailsPrivateRoute';
import MyCart from './components/MyCart/MyCart';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import UpdateProductPrivate from './components/PrivateRoute/UpdateProductPrivate';
import MyCartPrivateRoute from './components/PrivateRoute/MyCartPrivateRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement : <ErrorElement></ErrorElement>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch(`/products.json`)
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path :'/addproduct',
        element :<AddProductPrivate><AddProduct></AddProduct></AddProductPrivate>
      },
      {
        path : '/products/:name',
        element : <ProductsPrivateRoute><Products></Products></ProductsPrivateRoute>,
        loader : ({params}) => fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/products/${params.name}`)
        
      },
      {
        path : '/details/:id',
        element : <ProductDetailsPrivateRoute><ProductDetail></ProductDetail></ProductDetailsPrivateRoute>,
        loader : ({params}) => fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/details/${params.id}`)
      },
      {
        path : '/mycart',
        element : <MyCartPrivateRoute><MyCart></MyCart></MyCartPrivateRoute>,
        // loader : ()=> fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/cart`)
      },
      {
        path : '/update/:id',
        element : <UpdateProductPrivate><UpdateProduct></UpdateProduct></UpdateProductPrivate>,
        loader : ({params}) => fetch(`https://brand-zone-server-hk79btxio-sakib01181-gmailcom.vercel.app/update/${params.id}`)
      }
    ],
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
