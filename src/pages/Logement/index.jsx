import { useSearchParams } from "react-router-dom"
import logementsList from "../../logements.json"
import StarRating from "../../components/StarRating"
import DropdownMenu from "../../components/DropdownMenu"
import Carrousel from "../../components/Carrousel"
import "../../styles/Logement.css"

function Logement() {
    const [queryParams] = useSearchParams()
    const id = queryParams.get("id")
    const logemement = logementsList.find((item) => item.id === id)
    const image_logement = logemement.pictures
    return (
        <div className="logement">
            <Carrousel image={image_logement} />
            <div className="logement_presentation">
                <div className="logement_titre_location_tag">
                    <h1 className="logement_titre">{logemement.title}</h1>
                    <p className="logement_location">{logemement.location}</p>
                    <ul className="logement_tag_list">
                        {logemement.tags.map((tag, index) => (
                            <li
                                key={`${index}`}
                                className="logement_tag_list_components"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="logement_tag_rating">
                    <div className="logement_host">
                        <p className="logement_host_name">
                            {logemement.host.name}
                        </p>
                        <img
                            src={logemement.host.picture}
                            alt="host_picture"
                            className="logement_host_picture"
                        />
                    </div>
                    <StarRating rating={logemement.rating} />
                </div>
            </div>

            <div className="logement_description_equipement">
                <DropdownMenu
                    title={"Description"}
                    text={logemement.description}
                    small={true}
                />
                <DropdownMenu
                    title={"Équipements"}
                    small={true}
                    equipement={true}
                    equipementList={logemement.equipments}
                />
            </div>
        </div>
    )
}

export default Logement
