import { useState } from "react"
import chevron from "../../images/chevron_dropdown_menu.png"
import "../../styles/About.css"
function DropdownMenu({ title, text, small, equipement, equipementList }) {
    const [open, setOpen] = useState(false)
    if (!small) {
        return (
            <div className="menu">
                <div
                    className="menu_element"
                    onClick={() => {
                        setOpen(!open)
                    }}
                >
                    <h1 className="menu_title">{title}</h1>
                    <img
                        src={chevron}
                        alt="chevron"
                        className={`menu_chevron ${
                            open ? "active_dropdown" : ""
                        }`}
                    />
                </div>
                <div
                    className={`menu_components ${
                        open ? "active_dropdown" : ""
                    }`}
                >
                    <p>{text}</p>
                </div>
            </div>
        )
    } else {
        if (!equipement) {
            return (
                <div className="menu">
                    <div
                        className="menu_element"
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >
                        <h1 className="menu_title2">{title}</h1>
                        <img
                            src={chevron}
                            alt="chevron"
                            className={`menu_chevron ${
                                open ? "active_dropdown" : ""
                            }`}
                        />
                    </div>
                    <div
                        className={`menu_components2 ${
                            open ? "active_dropdown" : ""
                        }`}
                    >
                        <p>{text}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="menu">
                    <div
                        className="menu_element"
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >
                        <h1 className="menu_title2">{title}</h1>
                        <img
                            src={chevron}
                            alt="chevron"
                            className={`menu_chevron ${
                                open ? "active_dropdown" : ""
                            }`}
                        />
                    </div>
                    <div
                        className={`menu_components2 ${
                            open ? "active_dropdown" : ""
                        }`}
                    >
                        <ul className="dropdownmenu_list">
                            {equipementList.map((equipement, index) => (
                                <li key={`${index}`}>{equipement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default DropdownMenu
