import starcolor from "../../images/star_color.png"
import starnocolor from "../../images/star_no_color.png"

function StarRating({ rating }) {
    if (rating === "5") {
        return (
            <div>
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
            </div>
        )
    } else if (rating === "4") {
        return (
            <div>
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
            </div>
        )
    } else if (rating === "3") {
        return (
            <div>
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
            </div>
        )
    } else if (rating === "2") {
        return (
            <div>
                <img src={starcolor} alt="star_rating" />
                <img src={starcolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
            </div>
        )
    } else if (rating === "1") {
        return (
            <div>
                <img src={starcolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
            </div>
        )
    } else if (rating === "0") {
        return (
            <div>
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
                <img src={starnocolor} alt="star_rating" />
            </div>
        )
    }
}

export default StarRating
