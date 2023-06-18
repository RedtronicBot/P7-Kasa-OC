//import { Link } from "react-router-dom"
import "../../styles/Home.css"
function Thumbnail({ title, picture }) {
    return (
        <div className="thumbnail">
            <img src={picture} alt="logements" className="thumbnail_image" />
            <p className="thumbnail_titre">{title}</p>
        </div>
    )
}

export default Thumbnail
