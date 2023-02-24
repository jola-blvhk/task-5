import { Component } from "react";
import './product-list.styles.css';
import price from '../../assets/Vector.png'
import category from '../../assets/Category.png'
// import Card from "../card/card.component";

class ProductList extends Component {
    render() {
        const {products} = this.props;
        
        return (
            <div className="product-list">
                {
                    products.map((product) => {
                      
                        return <div className="product-grid">
                                <div className="productImg">
                                  <img alt="" src={product.image} />
                                </div>
                                
                                <div>
                                  <h2>{product.title}</h2>
                                  <div>
                                    <div className="flex">
                                        <img src={category}/>
                                        <p>{product.category}</p>
                                    </div>
                                    <div className="flex">
                                        <img src={price} />
                                        <p><span>Starting from </span><span className="price">${product.price}`</span></p>
                                    </div>
                                  </div>
                                  <button className="buyproduct">Buy product</button>
                                </div>
                              </div>
                    }
                    )
                }
            </div>
        )

    }
}

export default ProductList;
