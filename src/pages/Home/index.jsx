import logementsList from "../../logements.json"
import Thumbnail from "../../components/Thumbnail"
import "../../styles/Home.css"
function Home() {
    return (
        <ul className="thumbnail_list">
            {logementsList.map((logements) => (
                <li key={`${logements.id}`}>
                    <Thumbnail
                        title={logements.title}
                        picture={logements.cover}
                    />
                </li>
            ))}
        </ul>
    )
}

export default Home
