import { useEffect, useState } from 'react'
import styles from './UpdateProduct.module.css'
import { Link, useParams } from 'react-router-dom'

function UpdateProduct() {

    let [product,setProduct] = useState({})
    let params = useParams()
    
    useEffect(()=>{
        fetch("http://localhost:3000/products/"+params.id,{
            method:"GET"
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            setProduct(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function handleInput() 
    {
        setProduct({...product,[event.target.name]:event.target.value})
    }
    function handleSubmit(){
        
    }

    return(
    <section className={styles.container}>
        <div className={styles.header}>
        <h1 className={styles.container_title}>Update Product</h1>
        <Link to="/Products">
            <i className={"fa-solid fa-list "+styles.createBtn}></i>
        </Link>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>

            <input className={styles.inp} value={product.name} type="text" required placeholder='Enter Name' name='name'
            onChange={handleInput} 
            />
            <input className={styles.inp} value={product.price} type="text" required placeholder='Enter Price' name='price' 
            onChange={handleInput}
            />
            <input className={styles.inp} value={product.quantity} type="text" required placeholder='Enter Quantity' name='quantity' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" value={product.imageURL} required placeholder='Enter Image URL' name='imageURL' 
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" value={product.category} required placeholder='Enter Category' name='category' 
            onChange={handleInput}
            />

            <button className={styles.btn} type='submit'>Update Product</button>


        </form>


    </section>
    )
}

export default UpdateProduct