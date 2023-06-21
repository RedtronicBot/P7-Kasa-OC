import "../../styles/Footer.css"
import Logo from "../../images/logo_kasa_white.png"
function Footer() {
    return (
        <div className="footer">
            <img
                src={Logo}
                alt="logo_kasa"
                className="footer_image"
                width="122"
                height="40"
            />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
