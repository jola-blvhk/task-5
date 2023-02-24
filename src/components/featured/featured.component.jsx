import { Component } from "react";
import './featured.styles.css'
import price from '../../assets/Vector.png'
import category from '../../assets/Category.png'
// import Card from "../card/card.component";

class Featured extends Component {
  render() {
      const {featuredProducts} = this.props;
      
      return (
          <div className="product-list-featured">
              {
                  featuredProducts.map((product) => {
                    
                      return <div className="product-grid-featured">
                              <div className="productImg-featured">
                                <img alt="" src={product.image} />
                              </div>
                              
                              <div>
                                <h2>{product.title}</h2>
                                <div>

                                  <div className="flex">
                                      <img src={category}/>
                                      <p>{product.category}</p>
                                  </div>


                                  <div className="flex-pb">
                                    <div className="flex">
                                      <img src={price} />
                                      <p><span>Starting from </span><span className="price">${product.price}</span></p>
                                    </div>
                                    <div>
                                      <button className="buyproductf">Buy product</button>
                                    </div>
                                  </div>


                                </div>
                               
                              </div>
                            </div>
                  }
                  )
              }
          </div>
      )

  }
}

export default Featured;
;
