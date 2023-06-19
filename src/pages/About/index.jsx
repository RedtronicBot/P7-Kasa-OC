import Banner from "../../components/Banner"
import imageBanner from "../../images/about_banner.png"
import aboutList from "./about_text.json"
import DropdownMenu from "../../components/DropdownMenu"
import "../../styles/About.css"
function About() {
    return (
        <div>
            <Banner image={imageBanner} text={""} />
            <ul className="about_list">
                {aboutList.map((about, index) => (
                    <div key={`${index}`}>
                        <li>
                            <DropdownMenu
                                title={about.title}
                                text={about.text}
                            />
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default About
