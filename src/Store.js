import { useEffect, useState } from "react"

const Store = (props) => {
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [description, setDescription] = useState("")

  function getProducts() {
    fetch("http://localhost:8080/product/all", {
      method: "Get",
      headers: { token: props.token },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <div>
        <br />
        <ul>
          {products.map((product, index) => {
            return (
              <li key={index}>
                Name: {product.name} | Price: {product.price}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <label>Name</label>
        <input
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <label>Price</label>
        <input
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />
        <br />
        <button
          onClick={() => {
            let price = Number.parseInt(productPrice)
            if (Number.isNaN(price)) {
              console.log("set a price.")
              return
            }

            fetch("http://localhost:8080/product/create", {
              method: "PUT",
              body: JSON.stringify({
                name: productName,
                price: price,
                description: description,
              }),
              headers: {
                token: props.token,
                "Content-Type": "application/json",
              },
            }).then((response) => {
              getProducts()
            })
          }}
        >
          Create Product
        </button>
      </div>

      <div>
        Welcome to the store
        <br />
        {/*<input type="button" value="Logout" onClick={handleLogout} />*/}
      </div>
    </div>
  )
}

export default Store
