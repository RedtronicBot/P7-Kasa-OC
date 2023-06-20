import { Link } from "react-router-dom"
import "../../styles/Home.css"
function Thumbnail({ title, picture, id }) {
    return (
        <div>
            <Link to={`/logement?id=${id}`}>
                <div className="thumbnail">
                    <img
                        src={picture}
                        alt="logements"
                        className="thumbnail_image"
                    />
                    <p className="thumbnail_titre">{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default Thumbnail
