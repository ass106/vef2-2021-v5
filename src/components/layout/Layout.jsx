import { NavLink } from 'react-router-dom';
import s from './Layout.module.scss';

export function Layout({ title, children }) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>{title}</h1>
      </header>
      <main className={s.layout__main}>
        {children}
      </main>
      <hr></hr>
      <footer>
        <div className={s.footer}>
          <NavLink to='/'>Heim</NavLink>
          <span>Fréttir frá <a href="https://www.ruv.is/rss">RSS</a> þjónustu <a href="https://www.ruv.is/">RÚV</a>.</span>
        </div>
      </footer>
    </div>
    )
}