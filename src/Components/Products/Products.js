import { useEffect } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { Grid, Card, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { handleAddToCart } from '../../store/actions';
import './Products.scss';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '200px',
  maxHeight: '150px',
  borderRadius: '10px'
});

const Products = (props) => {
  let dispatch = useDispatch();
  let products = props.products.filter(product => product.category === props.activeCategory);

  return (
    <>
      <Grid
      id='productGrid'
      direction='row'
      container spacing='auto'
      justifyContent='space-evenly'
      alignItems='center'
      >
        {products.map((product, idx) => (
          <Card id='productCard' key={`product-${idx}`}>
            <Typography id='cardTitle' component='div'>{product.name}</Typography>
            <Img alt={`${product.name}-image`} src={`/assets/${product.img}`}/>
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.activeCategory
  }
}

export default connect(mapStateToProps)(Products);