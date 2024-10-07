import { NavLink, Outlet } from "react-router-dom" ; 
import '../../styles/layout.css'

export const Layout = () => {
    const menuItems = [
        { href: '/', title: 'Home' },
        { href: '/students', title: 'Estudiantes 2024' },
        { href: '/contact', title: 'Contacto' },
        { href: '/about', title: 'About' }
    ];

    return (
        <div>
            <div>
                <nav>
                    <ul>
                        {
                            menuItems.map(({href, title}) => (
                                <li key={title}>
                                    <NavLink to={href}>
                                        <p>{title}</p>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}