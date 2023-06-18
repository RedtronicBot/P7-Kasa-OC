import "../../styles/Home.css"

function Banner({ image, text }) {
    return (
        <div className="banniere">
            <img src={image} alt="Banniere" className="banniere_image" />
            <p className="banniere_titre">{text}</p>
        </div>
    )
}

export default Banner
