import { useSearchParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import logementsList from "../../logements.json"
import StarRating from "../../components/StarRating"
import DropdownMenu from "../../components/DropdownMenu"
import Carrousel from "../../components/Carrousel"
import "../../styles/Logement.css"

function Logement() {
    const [queryParams] = useSearchParams()
    const id = queryParams.get("id")
    const navigate = useNavigate()
    useEffect(() => {
        const logement = logementsList.find((item) => item.id === id)

        if (!logement) {
            navigate("/error")
        }
    }, [id, navigate])
    const logement = logementsList.find((item) => item.id === id)
    if (!logement) {
        return null
    } else {
        const image_logement = logement.pictures
        return (
            <div className="logement">
                <Carrousel image={image_logement} />
                <div className="logement_presentation">
                    <div className="logement_titre_location_tag">
                        <h1 className="logement_titre">{logement.title}</h1>
                        <p className="logement_location">{logement.location}</p>
                        <ul className="logement_tag_list">
                            {logement.tags.map((tag, index) => (
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
                                {logement.host.name}
                            </p>
                            <img
                                src={logement.host.picture}
                                alt="host_picture"
                                className="logement_host_picture"
                            />
                        </div>
                        <StarRating rating={logement.rating} />
                    </div>
                </div>

                <div className="logement_description_equipement">
                    <DropdownMenu
                        title={"Description"}
                        text={logement.description}
                        small={true}
                    />
                    <DropdownMenu
                        title={"Équipements"}
                        small={true}
                        equipement={true}
                        equipementList={logement.equipments}
                    />
                </div>
            </div>
        )
    }
}

export default Logement
