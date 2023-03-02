import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './shop.css'
const Shop = () => {
    
    useEffect(() => {
      fetchProducts()
    }, [])

    const [products, setProducts] = useState([]); 

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((json)=>setProducts(json))
    }

    return <div className="d-flex flex-wrap justify-content-center mt-4">
         {products.map((product) => {
          console.log('test', product)
          return <div className="border w-25 mx-2 my-2 p-4" key={product.id}>
                    <div className="img-wrapper d-flex justify-content-center">
                      <img className="w-25" src={product.image}/>
                    </div>
                    <p>{product.category}</p>
                    <h4>EGP: {product.price}</h4>
                    <div className="rating">
                         <p>{product.rating.rate}</p>
                    </div>
                    <Link to={`/shop/${product.id}`} className="btn btn-primary btn-sm">See Details</Link>
                 </div>
    })}</div>
}

export default Shop 