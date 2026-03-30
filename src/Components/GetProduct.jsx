import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GetProduct = () => {

    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")

    let [search_word, setSearchWord] = useState("");
    let [filtered_products, setFilteredProducts] = useState([])

    let [laptops, setLaptops] = useState([]);


    

    // base url for image location
    const img_url = "https://jefuni.alwaysdata.net/static/images/"


    let navigator = useNavigate()

    // function to fetch products from the server

    const getProducts = async() => {
        setError("")        
        setLoading("Fetching Products. Please wait...")


        try{
            const response = await axios.get("https://jefuni.alwaysdata.net/api/get_products");
            console.log(response);

            if(response.status === 200) {
                setLoading("")
                setProducts(response.data);

                let laptops_cat = response.data.filter(
                    (product) => product.product_category === "laptops",
                )
                setLaptops(laptops_cat);


            }

        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }

    useEffect(()=>{getProducts()}, [])

    const handleSearch = (search_word)  => {
        let filtered = products.filter((product) =>
        product.product_name.toLowerCase().includes(search_word.toLowerCase()),);
        setFilteredProducts(filtered);


    }

    useEffect(() => {
        handleSearch(search_word);

    }, [search_word])

    return (
        <div className="row">
            <Navbar/>
            
            <h3 className="">OUR TECH ITEMS</h3>
            <h5 className="text-danger">{error}</h5>
            <h5 className="text-warning">{loading}</h5>

            <div className="row justify-content-center my-3">
                <div className="col-md-3">
                    <div className="form-floating">
                    <input 
                    type="text" 
                    className="form-control"
                    id="searchInput"
                    placeholder="Search by Item Name"
                    value={search_word}
                    onChange={(e) => setSearchWord(e.target.value)}
                     />
                     <label htmlFor="searchInout">Search Item by Name</label>
                     </div>
                </div>
            </div>

            

            {/* map/loop over the product array to acess one at a time */}

              {filtered_products.map((product) => (
                <div className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow card-margin product-card">
                        <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-muted">{product.product_description}</p>
                            <b className="text-warning">{product.product_cost}</b>
                            <br />
                            <button
                                className="btn btn-dark"
                                onClick={() => {
                                    navigator("/makepayment", { state: { product } })
                                }}
                            >Purchase Now
                            </button>
                        </div>
                    </div>
                 </div>
            ))}

            <h2 className="text-center text-white bg-dark my-2 p-4">Laptops</h2>
            

            {products.map((product) => (
                <div className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow card-margin product-card">
                        <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                        <div className="card-body">
                            <h5 className="mt-2">{product.product_name}</h5>
                            <p className="text-muted">{product.product_description}</p>
                            <b className="text-warning">{product.product_cost}</b>
                            <br />
                            <button
                                className="btn btn-dark"
                                onClick={() => {
                                    navigator("/makepayment", { state: { product } })
                                }}
                            >Purchase Now
                            </button>
                        </div>
                    </div>
                 </div>
            ))}
        
        </div>
    )
}

export default GetProduct;