import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Productdetail = () => {

    const [product, setproduct] = useState('')

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('id');

    const navigate = useNavigate();

    const getsingleproduct = async () => {
        const { data } = await axios.get('http://localhost:8000/api/' + foo)
        console.log(foo)
        setproduct(data)
    }

    useEffect(() => {
        getsingleproduct();
    }, [])

    const deleteproduct = async (id) => {
        await axios.delete('http://localhost:8000/api/' + id)
        navigate('/')
    }

    return (
        <div>
            <h1>Product details</h1>
            <div className="sp">
                <img src={product.image} />
                <p className="spp">{product.name}</p>
                <p className="spp">{product.price}</p>
                <p className="spp">{product.description}</p>
                <p className="spp">{product.category}</p>
                <Link to={{
                    pathname: "/update_product",
                    search: "?id="+product.id
                }} className="btn btn-primary m-2">UPDATE</Link>
                <Link to="#" className="btn btn-danger m-2" onClick={() => deleteproduct(product.id)} >DELETE</Link>
            </div>
        </div>
    );
};

export default Productdetail;