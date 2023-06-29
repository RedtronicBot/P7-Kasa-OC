import { useState } from "react"
import LeftArrow from "../../images/left_arrow_carroussel.png"
import RightArrow from "../../images/right_arrow_carroussel.png"
function Carrousel({ image }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const GoToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const GoToNext = () => {
        const isLastSlide = currentIndex === image.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    return (
        <div className="logement_carrousel">
            <img
                src={LeftArrow}
                alt="left_arrow"
                className={`left_arrow_carrousel ${
                    image.length === 1 ? "inactive_carrousel" : ""
                }`}
                onClick={GoToPrevious}
            />
            <img
                src={image[currentIndex]}
                alt="image_logement"
                className="logement_image"
            />
            <img
                src={RightArrow}
                alt="right_arrow"
                className={`right_arrow_carrousel ${
                    image.length === 1 ? "inactive_carrousel" : ""
                }`}
                onClick={GoToNext}
            />
            <p
                className={`pagination_carrousel ${
                    image.length === 1 ? "inactive_carrousel" : ""
                }`}
            >
                {currentIndex + 1}/{image.length}
            </p>
        </div>
    )
}

export default Carrousel
