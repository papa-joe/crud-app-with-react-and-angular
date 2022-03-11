import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    const getproducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        // console.log(response.data)
        setProducts(response.data)
    }

    useEffect(() => {
        getproducts();
    }, [])

    return (
        <div className="pci">
            {
                products.map((product, index) => (
                    <Card className="m-2 rounded shadow-lg" key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Title>{product.price}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.category}</Card.Text>
                            <Link to={{
                                pathname: "/product",
                                search: "?id=" + product.id
                            }} variant="primary">View more</Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
};

export default ShowProducts;