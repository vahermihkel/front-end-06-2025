import { useEffect, useRef, useState } from "react";
// import productsFromFile from "../../data/products.json";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const searchRef = useRef();
  const productsUrl = import.meta.env.VITE_PRODUCTS_DB_URL;
  const [loading, setLoading] = useState(true);
  const [dbProducts, setDbProducts] = useState([]);

  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })
  }, [productsUrl]);
    
  const deleteProduct = (id) => {
    const index = dbProducts.findIndex(product => product.id === id);
    dbProducts.splice(index,1);
    // setProducts(dbProducts.slice());
    
    fetch(productsUrl, {method: "PUT", body: JSON.stringify(dbProducts)})
      .then(res => res.json())
      .then(() => {
          searchFromProducts();
          toast.success("Toode kustutatud");
      })
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setProducts(result);
  }

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <label>Otsi</label>
      <input onChange={searchFromProducts} ref={searchRef} type="text" />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Toote nimi</th>
            <th>Toote hind</th>
            <th>Toote kirjeldus</th>
            <th>Toote kategooria</th>
            <th>Toote pilt</th>
            <th>Toote hinnang</th>
            <th>Hindajate arv</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td><img style={{width: "50px"}} src={product.image} alt="" /></td>
            <td>{product.rating.rate}</td>
            <td>{product.rating.count}</td>
            <td><button onClick={() => deleteProduct(product.id)}>x</button></td>
            <td><Link to={"/admin/edit-product/" + product.id}><button>Muuda</button></Link></td>
          </tr>)}
        </tbody>
      </table>

      <ToastContainer 
          position="bottom-right"
          autoClose={4000}
          theme="dark"
      />
    </div>
  )
}

export default MaintainProducts