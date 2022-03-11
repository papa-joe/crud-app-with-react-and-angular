import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {

  const [image, setimage] = useState(null)
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')

  const navigate = useNavigate();

  const addproductinfo = async () => {
    let formfield = new FormData()

    formfield.append('name', name)
    formfield.append('price', price)
    formfield.append('category', category)
    formfield.append('description', description)

    if(image !== null){
      formfield.append('image', image)
    }

    await axios({
      method:'POST',
      url:'http://127.0.0.1:8000/api/',
      data:formfield
    }).then((res) => {
      console.log(res.data)
      navigate('/')
    })
  }

  return (
    <div className='container'>
      <h1>Add product</h1>

      <div className='form-group'>
        <img src='' />
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
        <button className='btn btn-success' onClick={addproductinfo} >Add Product</button>
      </div>

    </div>
  );
};

export default Addproduct;