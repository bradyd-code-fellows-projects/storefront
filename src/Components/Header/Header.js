import './Header.scss';
import SimpleCart from '../SimpleCart/SimpleCart';

export default function Header() {
  return (
    <>
      <section id='header'>
        <h1>The Store</h1>
        <SimpleCart />
      </section>
    </>
  )
}