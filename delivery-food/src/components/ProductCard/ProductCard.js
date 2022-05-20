import React from 'react';
//import { connect } from 'react-redux';

const ProductCard = (props) => {

  const {
    id,
    description,
    image,
    name,
    price,
    //login
  } = props;

  const src = require(`../../assets/${image}`);

  //const handleAddToBasket = () => {

  //  const loginStorageData = localStorage.getItem(login);

  //  const initialData = [{
  //    id,
  //    title: name,
  //    cost: price,
  //    count: 1,
  //  }];

  //  if (loginStorageData) {
  //    const allData = JSON.parse(loginStorageData);
  //    const isSameProduct = !!allData.find(item => item.id === id);

  //    if (isSameProduct) {
  //      allData.forEach(item => {
  //        if (item.id === id) {
  //          item.count++;
  //        }
  //      });
  //      localStorage.setItem(login, JSON.stringify(allData));
  //    } else {
  //      const newData = allData.concat(initialData);
  //      localStorage.setItem(login, JSON.stringify(newData));
  //    }

  //  } else {
  //    if (login) {
  //      localStorage.setItem(login, JSON.stringify(initialData))
  //    }
  //  }
  //}

  return (
    <div className="card card-restaurant">
      <img className="card-image" src={src} alt={src} />
      <div className="card-text">
        <div className="card-heading">
          <h3 className="card-title card-title-reg">{name}</h3>
        </div>

        <div className="card-info">
          <div className="ingredients">{description}</div>
        </div>

        <div className="card-buttons">
          <button className="button button-primary button-add-cart" >
            <span className="button-card-text">В корзину</span>
            <span className="button-cart-svg"></span>
          </button>
          <strong className="card-price-bold card-price">${price}</strong>
        </div>
      </div>
    </div>
  )
}

//const mapStateToProps = (state) => ({
//  login: state.login
//})

export default ProductCard;
