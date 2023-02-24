import React from 'react';
import {Component} from 'react';
import ProductList from './components/productlist/product-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import Header from './components/header/header.component';
import Featured from './components/featured/featured.component';



  class App extends Component {
    constructor() {
      super();

      this.state = {
        allProducts: [],
        products: [],
        featuredProducts: [],
        searchField: ''
      
      }
    
    }

    componentDidMount() {
      
      fetch('https://fakestoreapi.com/products?limit=10')
      .then((response) => response.json())
      .then((allProducts) => {
        const featured = allProducts.slice(0,2)
        const products = allProducts.slice(2)
        this.setState(
          () => {
            return { 
              allProducts:allProducts,
              products: products,
              featuredProducts:featured

            };
          }
        )}
      ); 
    }

    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField }
      })
     
    }

     render(){
      const {allProducts, searchField, featuredProducts} =this.state;
      
      
      const filteredProducts = allProducts.filter((product) => {
        return product.title.toLocaleLowerCase().includes(searchField)
      });


       return (
        <div className="App">
          <Header />
        
          <SearchBox className="monster-search-box" 
                    placeholder="Search"
                    onChangeHandler={this.onSearchChange} 
         />
          <Featured featuredProducts={featuredProducts} />
          <ProductList products={filteredProducts}/>

        </div>
        );
       
        }

    }

    export default App;

