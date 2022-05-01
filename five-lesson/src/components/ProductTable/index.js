import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnly = this.handleInStockOnly.bind(this);
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockOnly(e) {
        this.props.onInStockChange(e.target.checked);
    }
    render() {
        console.log(this.props);
        return(
            <form>
            <p>
            <input type="text" value={this.props.filterText} onChange={this.handleFilterTextChange}/> 
            </p>
               <p>
                   <input type="checkbox" checked = {this.props.inStockOnly} onChange={this.handleInStockOnly}/>
               </p>
            </form>
        )
    }
}

class ProductRow extends React.Component {
   
    render () {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style ={{color: "red"}}>{product.name}</span>
        return(
            <tr>
                <th>{name}</th>
                <th>{product.price}</th>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render () {
        console.log(this.props);
        const {filterText, inStockOnly, products} = this.props;
        const rows = [];
        let lastCategory = null;

products.forEach(product => {
    if(product.name.indexOf(filterText) === -1 ) {
        return;
    }
    if(inStockOnly && !product.stocked) {
        return;
    }
    if(product.category !== lastCategory)  {
        rows.push(
            <tr key={product.category}>
                <th colSpan="2">{product.category}</th>
            </tr>
        );
    }
    rows.push(<ProductRow product = {product} key={product.name}/>);
    lastCategory = product.category;
});

        return (
<table style={{margin: '0 auto'}}>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        {rows}
    </tbody>
</table>
        )
    }
}

class FilterableProductTable extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        filterText: '',
        inStockOnly: false,
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnly = this.handleInStockOnly.bind(this);
}


handleFilterTextChange(filterText){
    this.setState( {filterText,})     
    
}

handleInStockOnly(inStockOnly) {
    this.setState({inStockOnly,});
}
    render(){
        console.log(this.state);
        return(
            <div>
                <SearchBar
                    filterText = {this.state.filterText}
                    onFilterTextChange = {this.handleFilterTextChange}
                    onInStockChange = {this.handleInStockOnly}
                    inStockOnly = {this.state.inStockOnly}
                />
                <ProductTable 
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    products = {this.props.products}
                />
            </div>
        );
    }
}

export default FilterableProductTable;