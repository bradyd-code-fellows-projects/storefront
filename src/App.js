import { connect } from 'react-redux';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

const App = (props) => {
  return (
    <>
      <Header />
      <Categories />
      {/* <Products /> */}
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    myStore: state.myStore
  }
}

export default connect(mapStateToProps)(App);
