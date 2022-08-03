import './Categories.scss';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../../store/categories';
import { Button } from '@mui/material';

export function Categories(props) {

  const { activeCategory, categories } = props;

  return (
    <>
      <section id='categories'>
        <h2>Active Category: {activeCategory}</h2>
        <h3>Category Description Goes Here</h3>
        <p id='categoriesTitle'>Browse Categories</p>
        <div id='categoryButtonsContainer'>
          {categories.map((category, idx) => (
            <Button variant='outlined' id='categoryButton' key={`category-${idx}`} onClick={() => props.selectCategory(category.name)}>{category.name}</Button>
          ))}
        </div>
      </section>
    </>
  )
}

const mapStateToProps = ({ categories }) => {
  console.log(categories);
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory
  }
}

const mapDispatchToProps = {
  selectCategory,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);