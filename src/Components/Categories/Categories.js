import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { Button } from '@mui/material';
import './Categories.scss';

const Categories = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);


  return (
    <>
      <section id='categories'>
        <p id='categoriesTitle'>Browse Categories</p>
        <div id='categoryButtonsContainer'>
          {
            categories.map((category, idx) => (
              <Button key={`category-${idx}`} onClick={() => dispatch(selectCategory(category.name))}>{category.name}</Button>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Categories;