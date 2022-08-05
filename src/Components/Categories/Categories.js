import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { getCategories } from '../../store/categories.slice';
import { Button } from '@mui/material';
import './Categories.scss';

export function Categories(props) {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(getCategories())
  }, []);

  console.log('categories: ', categories);

  return (
    <>
      <section id='categories'>
        {/* <h2>Active Category: {categories.results.name}</h2> */}
        <h3>Category Description Goes Here</h3>
        <p id='categoriesTitle'>Browse Categories</p>
        <div id='categoryButtonsContainer'>
          {
            categories.categories.results.map((category, idx) => (
              <Button variant='outlined' id='categoryButton' key={`category-${idx}`} onClick={() => dispatch(selectCategory(category.name))}>{category.name}</Button>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Categories;


// const mapStateToProps = ({ categories }) => {
//   return {
//     categories: categories.categories,
//     activeCategory: categories.activeCategory
//   }
// }

// const mapDispatchToProps = {
//   selectCategory,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Categories);