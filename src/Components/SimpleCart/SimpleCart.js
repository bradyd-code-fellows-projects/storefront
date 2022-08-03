import { connect } from 'react-redux';
import { List } from '@mui/material';

export function SimpleCart(props) {
  const { cart, cartCount } = props;
  return(
    <>
    <List>{`Cart (${cartCount})`}

    </List>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  console.log('cart: ', products.cart, 'cartCount: ', products.cartCount);
  return {
    cart: products.cart,
    cartCount: products.cartCount
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);