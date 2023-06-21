import starcolor from "../../images/star_color.png"
import starnocolor from "../../images/star_no_color.png"
import "../../styles/Logement.css"
function StarRating({ rating }) {
    if (rating === "5") {
        return (
            <div className="star_rating">
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
            </div>
        )
    } else if (rating === "4") {
        return (
            <div className="star_rating">
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
            </div>
        )
    } else if (rating === "3") {
        return (
            <div className="star_rating">
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
            </div>
        )
    } else if (rating === "2") {
        return (
            <div className="star_rating">
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
            </div>
        )
    } else if (rating === "1") {
        return (
            <div className="star_rating">
                <img src={starcolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
            </div>
        )
    } else if (rating === "0") {
        return (
            <div className="star_rating">
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
                <img src={starnocolor} alt="star_rating" className="star" />
            </div>
        )
    }
}

export default StarRating
