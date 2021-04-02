import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const productData ={
            name: data.name,
            price: data.price,
            imageUrl: imageUrl
        };
        const url = 'https://shrouded-temple-26979.herokuapp.com/addProduct';

        console.log(productData);
        fetch(url , {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response'))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f5521aeaa7a0c81cab3e95c8389350b9');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    
    return (
        <div className='container'>
            <h1>Add Your Product here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Your new product" ref={register} />
                <br /> <br/>
                <input name="price" defaultValue="Your new product price" ref={register} />
                <br /> <br/>
                <input name="exampleRequired" type='file' onChange={handleImageUpload} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br /> <br/>
                <input type="submit" />
            </form>
            
        </div>
    );
};

export default AddProduct;