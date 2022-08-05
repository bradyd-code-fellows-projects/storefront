import { useEffect } from 'react';
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Typography, Button } from '@mui/material';
import { handleAddToCart } from '../../store/actions';
import { getProducts } from '../../store/products'
import './Products.scss';

export function Products(props) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Grid
      id='productGrid'
      container spacing={3}
      justifyContent='space-around'
      alignItems='center'
      >
        {props.products.map((product, idx) => (
          <Card key={`product-${idx}`}>
            <Typography component='div'>{product.productName}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.price}</Typography>
            <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            <Button>View Details</Button>
          </Card>
        ))}
      </Grid>
    </>
  )
}

const mapStateToProps = ({ categories }) => {
  let a = categories.categories;
  let productsList = [];
  a.forEach(obj => {
    if (categories.activeCategory === obj.name) {
      productsList = obj.products
    }
  })

  return {
    activeCategory: categories.activeCategory,
    products: productsList
  }
}

export default connect(mapStateToProps)(Products);