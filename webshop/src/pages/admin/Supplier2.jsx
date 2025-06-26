import { useEffect, useState } from "react"

// renderdamine --> esimest korda HTMLi väljakuvamine
// re-renderdamine --> setteri HTMLi uuendamine

function Supplier2() {
  // https://fakestoreapi.com/products
  const [products, setProducts] = useState([]);
  const [openDescription, setOpenDescription] = useState(-1);

  // uef
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Toote nimi</th>
            <th>Toote ostuhind</th>
            <th>Toote müügihind</th>
            <th>Toote kirjeldus</th>
            <th>Toote kategooria</th>
            <th>Toote pilt</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price.toFixed(2)}</td>
            <td>{(product.price * 1.2).toFixed(2)}</td>
            <td>{product.description.length > 200 && openDescription !== product.id ? 
                  <>
                    <span>{product.description.substring(0,200) + "..."}</span>
                    <button onClick={() => setOpenDescription(product.id)}>nt rohkem</button>
                  </> : 
                  product.description }</td>
            <td>{product.category.name}</td>
            <td><img style={{width: "50px"}} src={product.images[0]} alt="" /></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Supplier2