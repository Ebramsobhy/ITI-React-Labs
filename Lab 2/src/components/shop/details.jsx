import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Details = () => {

    useEffect(() => {
        fetchProductDetails()
      },[])

    const params = useParams();
    console.log('params', params)

    const [product, setProduct] = useState({}) 
    
    const fetchProductDetails = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((res)=>res.json())
            .then((json)=>setProduct(json))
    }

    return (
        <div className="d-flex justify-content-around align-items-center mt-5">
            <div className="img-wrapper w-25 d-flex justify-content-center">
                <img className="w-100" src={product.image} />
            </div>
            <div className="information">
              <h3>{product.title}</h3>
              <hr/>
              <p>{product.price}</p>
              <hr/>
              <p>{product.description}</p>
              <hr/>
              <p>{product.category}</p>
            </div>
      </div>

    ) 
        
   
}

export default Details 