
import './App.css';
//import ConctroledComponent from './components/ControledComponent';
//import PropTypesExample from './components/PropTypesExample';
import FilterableProductTable from './components/ProductTable';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'BaseBall' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'BasketBall' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone X' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
  ];
  
function App() {
  return (
    <div className="App">
      {/*<ConctroledComponent/>*/}
      {/*<PropTypesExample name="Alex" age= {25}/>*/}
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
