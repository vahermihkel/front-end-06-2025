import { useParams } from "react-router-dom";
// import productsFromFile from "../../data/products.json";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";

function SingleProduct() {
  const {id} = useParams();
  //const foundProduct = productsFromFile[index];
  const productsUrl = import.meta.env.VITE_PRODUCTS_DB_URL;
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const foundProduct = dbProducts.find(product => product.id === Number(id))
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json || []);
        setLoading(false);
      })
  }, [productsUrl]);

  if(loading) {
    return <div>Loading...</div>
  }

  if(foundProduct === undefined) {
    return <div>Toodet ei leitud</div>
  }
  return (
    <div>
      <div>{foundProduct.title}</div>
      <div>{foundProduct.price}</div>
      <div>{foundProduct.description} </div>
      <div>{foundProduct.category} </div>
      <div>{foundProduct.rating.rate} </div>
      <div>{foundProduct.rating.count} </div>
      <img src={foundProduct.image} alt="" />
    </div>
  )
}

export default SingleProduct