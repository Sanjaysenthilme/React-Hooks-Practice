import React, { useEffect, useState } from 'react'
import ProductPagenation from './ProductPagenation';
const ProductList = () => {
    const [products,setProducts] = useState([]);
    const [total,setTotal] = useState(0);
    const [pages,setPages] = useState(1);

    const fetchProductData = async()=>{
        try{
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${(pages -1)*10}`);
            const responseData = await response.json();
            setProducts(responseData.products);
            setTotal(responseData.total);
            console.log(products);
        }
        catch(e){
            console.log(`We got some from Fetch ${e}`);
        }
    }
    useEffect(()=>{
        fetchProductData();
    },[pages])

  return (
    <div>
        {products&&products.length ?
            products.map((product,index)=>(
                <ul key={index}>
                    <li>
                        <img src={product.thumbnail} alt={product.title} width={400} height={400}/>
                        <br/><span><b>{product.title}</b></span><br/>
                        <span> - ${product.price}</span>
                    </li>
                </ul>
            )): 'Loading...'
        }

        <ProductPagenation products={products} total={total} pages={pages} setPages ={setPages}/>
    </div>
  )
}

export default ProductList;