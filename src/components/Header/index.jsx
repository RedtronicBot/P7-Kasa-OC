import { Link, useLocation } from "react-router-dom"
import Logo from "../../images/logo_kasa.png"
import "../../styles/Header.css"

function Header() {
    const location = useLocation()

    return (
        <div className="header">
            <img
                src={Logo}
                alt="logo_kasa"
                className="header_image"
                width="211"
                height="68"
            />
            <ul className="header_list">
                <li>
                    <Link
                        to={"/"}
                        className={`header_list_component ${
                            location.pathname !== "/" ? "inactive" : ""
                        }`}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/about"}
                        className={`header_list_component ${
                            location.pathname !== "/about" ? "inactive" : ""
                        }`}
                    >
                        A Propos
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
