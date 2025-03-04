import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import AuthContext from "./AdminContext.context";
import axios from 'axios'


const AdminPovider = ({ children }) => {

    const [Products, setProducts] = useState();
    const [selected, setSelected] = useState();
    const [newPrice, setNewPrice] = useState();
    const [newName, setNewName] = useState();
    const [loading, setLoading] = useState(false);

    // UI
    const [modeName, setModeName] = useState(false)
    const [modePrice, setModePrice] = useState(false)
    const [modeAdvancedPrice, setModeAdvancedPrice] = useState(false)
    const [modeImage, setModeImage] = useState(false)

    const nevigator = useNavigate()

    const serveProduct = async (filter) => {
        setLoading(true)
        await axios.post(`${process.env.REACT_APP_BACKEND}/serve-to-admin`, {
            filterTerm: filter
        }).then((resp) => {
            console.log("products served: ", resp);
            setProducts(resp.data.data.Products)
        }).catch((error) => {
            console.log("Error while serving products :", error);
        }).finally(() => {
            setLoading(false)
        })
    }

    const selectProduct = async (ProductId) => {
        setLoading(true)

        await axios.post(`${process.env.REACT_APP_BACKEND}/selected-item`, {
            ProductId
        }).then((resp) => {
            console.log("Product Served: ", resp)
            setSelected(resp.data.data.Product);
            nevigator('/item')
        }).catch((e) => {
            console.log("error while selecting product ", e);
        }).finally(() => {
            setLoading(false)
        })
    }

    const changePrice = async (ProductId, PriceForCustomers) => {
        setLoading(true)

        await axios.put(`${process.env.REACT_APP_BACKEND}/edit-price`, {
            ProductId,
            PriceForCustomers: PriceForCustomers
        }).then((resp) => {
            console.log("Price Edited: ", resp);
            selectProduct(ProductId)
        }).catch((e) => {
            console.log("error while selecting product ", e);
            setNewPrice(0);
           
        }).finally(() => {
            setLoading(false);
            setModePrice(false)
        })
    }

    const changeAdvancedPrice = async (ProductId, AdvancedPaymentAmmount) => {
        setLoading(true)

        await axios.put(`${process.env.REACT_APP_BACKEND}/edit-advanced-ammount`, {
            ProductId,
            AdvancedPaymentAmmount: AdvancedPaymentAmmount
        }).then((resp) => {
            console.log("Price Edited: ", resp);
            selectProduct(ProductId)
        }).catch((e) => {
            console.log("error while selecting product ", e);
            setNewPrice(0);
           
        }).finally(() => {
            setLoading(false);
            setModeAdvancedPrice(false)
        })
    }

    const changeName = async (ProductId, ProductName) => {
        setLoading(true)

        await axios.put(`${process.env.REACT_APP_BACKEND}/edit-name`, {
            ProductId,
            ProductName:ProductName
        }).then((resp) => {
            console.log("Title / Name Edited: ", resp);
            selectProduct(ProductId)
            setNewName('')
        }).catch((e) => {
            console.log("error while Changing Name ", e);
            setNewName(0);
        }).finally(() => {
            setLoading(false)
            setModeName(false)
        })
    }

    const changePhoto = async (ProductId, display) => {
        setLoading(true)

        await axios.post(`${process.env.REACT_APP_BACKEND}/edit-images`, {
            ProductId,
            display
        }).then((resp) => {
            console.log("Image edited :", resp);
            selectProduct(ProductId)
        }).catch(e => {
            console.log("error while editing photos");
        }).finally(() => {
            setLoading(false)
            setModeImage(false)
        })
    }
    const suspendProduct = async (ProductId) => {
        setLoading(true)

        await axios.post(`${process.env.REACT_APP_BACKEND}/suspend-item`, {
            ProductId
        }).then((resp) => {
            console.log("Product Suspended :", resp);
            selectProduct(ProductId)
        }).catch((e) => {
            console.log("error while editing photos");
        }).finally(() => {
            setLoading(false)
        })
    }
    const pubishProduct = async (ProductId) => {
        setLoading(true)

        await axios.post(`${process.env.REACT_APP_BACKEND}/publish-item`, {
            ProductId
        }).then((resp) => {
            console.log("Product Published :", resp);
            selectProduct(ProductId)
        }).catch((e) => {
            console.log("error while editing photos");
        }).finally(() => {
            setLoading(false)
        })
    }

    

    const data = {
        Products, setProducts,
        selected, setSelected,
        newPrice, setNewPrice,
        newName, setNewName,
        loading, setLoading,
        modeName, setModeName,
        modePrice, setModePrice,
        modeImage, setModeImage,
        modeAdvancedPrice, setModeAdvancedPrice,
        serveProduct,
        selectProduct,
        changePrice,
        changeAdvancedPrice,
        changeName,
        changePhoto,
        suspendProduct,
        pubishProduct
    }
    return (<AuthContext.Provider value={data} >{children}</AuthContext.Provider>)
}

export default AdminPovider;