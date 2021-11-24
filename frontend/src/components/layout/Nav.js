import NavLink from "../NavLink";
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <section className="contenedor">
        <nav>
            <ul className="menu">
                <li><NavLink activeClassName="activo" exact to="/">Inicio</NavLink></li>
                <li><NavLink activeClassName="activo" exact to= "#!">Articulos</NavLink></li>
                <li><NavLink activeClassName="activo" exact to ="#!">Politicas</NavLink></li>
                <li><NavLink activeClassName="activo" exact to = "contacto.html">Contacto</NavLink></li>
              </ul>
        </nav>
    </section>

    )    
};
export default Nav;