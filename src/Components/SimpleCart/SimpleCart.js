import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, ListItemButton, IconButton, Collapse } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

export function SimpleCart(props) {
  const { cart, cartCount, handleDeleteFromCart } = props;
  const [open, setOpen] = React.useState(true);
  const handleOpenCart = () => {
    setOpen(!open);
  };
  console.log('cart: ', cart);
  return (
    <>
      <List>
        <ListItemButton onClick={handleOpenCart}>{`Cart (${cartCount})`}</ListItemButton>
        <Collapse in={open}>
          {cart && cart.map((product, idx) => (
            <ListItem key={`cartItem-${idx}`}>
              <ListItemText primary={product.productName}></ListItemText>
              <IconButton edge='end' aria-label='delete'><DeleteIcon onClick={handleDeleteFromCart} sx={{ color: red[500] }} /></IconButton>
            </ListItem>
          ))}
        </Collapse>
      </List>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    cart: products.cart,
    cartCount: products.cartCount
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);