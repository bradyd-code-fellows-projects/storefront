import { connect } from 'react-redux';
import { selectCategory, reset } from '../../store/categories';
import './Categories.scss';

export function Categories(props) {

  const { activeCategory, categories } = props;

  return (
    <>
    <h2>Active Category: {activeCategory}</h2>
      <section id='categories'>
        <p id='categoriesTitle'>Categories</p>
        {categories.map((category, idx) => (
          <button key={`category-${idx}`} onClick={() => props.selectCategory(category.name)}>{category.name}</button>
        ))}
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