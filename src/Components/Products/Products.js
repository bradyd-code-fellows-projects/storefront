import './Products.scss';
import { connect } from "react-redux";
import { Grid, Card, Typography, Button } from '@mui/material';
import { handleAddToCart } from '../../store/products';


export function Products(props) {
  const { handleAddToCart } = props;

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

const mapDispatchToProps = {
  handleAddToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);