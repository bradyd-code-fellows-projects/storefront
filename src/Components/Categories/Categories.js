import { connect } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { Button } from '@mui/material';
import './Categories.scss';

const Categories = (props) => {

  console.log('props: ', props)

  return (
    <>
      <section id='categories'>
        <h2>Active Category: {props.categories.name}</h2>
        <h3>Category Description Goes Here</h3>
        <p id='categoriesTitle'>Browse Categories</p>
        <div id='categoryButtonsContainer'>
          {
            props.categories.map((category, idx) => (
              <button key={`category-${idx}`} onClick={() => props.selectCategory(category.name)}>{category.name}</button>
            ))
          }
        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
