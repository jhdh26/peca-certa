import { Link, Outlet } from "react-router-dom"
import './Header.css'
import { IoSearch } from "react-icons/io5"
import ScrollTop from '../ScrollTop'

const Header = () => {
    return (
        <div className="main-header">
            <header>
                <div className="left-header">
                    <Link to='/principal'>Home</Link>
                </div>
                <nav>
                    <div className="right-header">
                        <ScrollTop/>
                        <Link to='/alugar'>Alugar</Link>
                        <Link to='/registroitens'>Registro Itens</Link>
                        <Link to='/perfil'>Perfil</Link>
                        <IoSearch className="icon-search"/>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}

export default Header