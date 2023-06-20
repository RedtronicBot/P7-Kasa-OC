import logementsList from "../../logements.json"
import Thumbnail from "../../components/Thumbnail"
import Banner from "../../components/Banner"
import imageBanner from "../../images/home_banner.png"
import "../../styles/Home.css"
function Home() {
    return (
        <div>
            <Banner
                image={imageBanner}
                text={"Chez vous, partout et ailleurs"}
            />
            <ul className="thumbnail_list">
                {logementsList.map((logements) => (
                    <li key={`${logements.id}`}>
                        <Thumbnail
                            title={logements.title}
                            picture={logements.cover}
                            id={logements.id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
