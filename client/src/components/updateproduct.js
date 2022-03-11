import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Updateproduct = () => {

    const [image, setimage] = useState(null)
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const navigate = useNavigate();

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');

    const loadproduct = async () => {
        const { data } = await axios.get('http://localhost:8000/api/' + id)
        console.log(data)
        setimage(data.image)
        setname(data.name)
        setprice(data.price)
        setdescription(data.description)
        setcategory(data.category)
    }

    useEffect(() => {
        loadproduct();
    }, [])

    const updateproduct = async () => {
        let formfield = new FormData()

        formfield.append('name', name)
        formfield.append('price', price)
        formfield.append('category', category)
        formfield.append('description', description)

        if (image !== null) {
            formfield.append('image', image)
        }

        await axios({
            method: 'PUT',
            url: 'http://localhost:8000/api/'+id+'/',
            data: formfield
        }).then((res) => {
            console.log(res.data)
            navigate('/')
        })
    }

    return (
        <div>
            <h1>Update Product</h1>

            <div className='form-group'>
                <img src={image} />
                <input type='file' className='form-control form-control-lg' name='image' onChange={(e) => setimage(e.target.files[0])} /><br></br>
            </div>

            <div className='form-group'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter your name' name='name' value={name} onChange={(e) => setname(e.target.value)} /><br></br>
            </div>

            <div className='form-group'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter price' name='price' value={price} onChange={(e) => setprice(e.target.value)} /><br></br>
            </div>

            <div className='form-group'>
                <textarea type='text' className='form-control form-control-lg' placeholder='Enter description' name='description' value={description} onChange={(e) => setdescription(e.target.value)} /><br></br>
            </div>

            <div className='form-group'>
                <input type='text' className='form-control form-control-lg' placeholder='Enter category' name='category' value={category} onChange={(e) => setcategory(e.target.value)} /><br></br>
            </div>

            <div className='form-group'>
                <button className='btn btn-success' onClick={updateproduct} >Update Product</button>
            </div>
        </div>
    );
};

export default Updateproduct;