import { NavLink, Outlet } from 'react-router-dom'
import '../../styles/layout.css'

export const Layout = () => {
  const menuItems = [
    { href: '/', title: 'Inicio' },
    { href: '/students', title: 'Estudiantes 2024' },
    { href: '/sw-characters', title: 'Personajes SW' },
    { href: '/contact', title: 'Contacto' },
    { href: '/about', title: 'Acerda de' },
  ]

  return (
    <div>
      <div>
        <nav>
          <ul>
            {menuItems.map(({ href, title }) => (
              <li key={title}>
                <NavLink to={href}>
                  <p>{title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
