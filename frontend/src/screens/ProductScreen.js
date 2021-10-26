import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { detailsProduct } from '../action/productActions';
import LoadingBox from '../components/LoadingBox';
import Rating from '../components/Rating';
import MessageBox from '../components/MessageBox';


export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productId = props.match.params.id;
  const  productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
      <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (  
        <div>
          <Link to="/productlist">Back to List</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating 
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>
                    <p>{product.name}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium totam, dolorum incidunt autem optio ab maxime. Voluptate ex asperiores debitis quibusdam tenetur laudantium molestias doloribus odio odit, quia laborum aliquam.</p>
                    <form action="">
                        <label for="size">Size:</label>
                        <select id="size" name="size-chart">
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </form>
                </li>
                {/* <li>Price : $ {product.price}</li> */}
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">$ {product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unvailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                              <select
                                value={qty}
                                onChange={e => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={ x+1 } value={x + 1}>{x + 1}</option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                      </li>
                    </>
                  )}    
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};
