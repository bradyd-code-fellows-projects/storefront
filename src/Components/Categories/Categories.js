import './Categories.scss';

export default function Categories(props) {
  const { categories } = props;
  // const categories = ['electronics', 'tools'];
  return (
    <>
      <section id='categories'>
        <p id='categoriesTitle'>Categories</p>
        {categories.map((category, idx) => (
          <div key={`category-${idx}`}>{category}</div>
        ))}
      </section>
    </>
  )
}