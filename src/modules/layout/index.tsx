import { NavLink, Outlet } from 'react-router-dom'
import '../../styles/layout.css'
import subjectJSON from '../../data/subject-info.json'
import { Subject } from '../../types/subject.types'
import { Typography } from 'antd'

const { Title } = Typography

export const Layout = () => {
  const subject = subjectJSON as Subject

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
        <Title>Hola clase de {subject.name}</Title>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
