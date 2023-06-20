import { useState } from "react"
import "../../styles/About.css"
function DropdownMenu({ title, text, small, equipement, equipementList }) {
    const [open, setOpen] = useState(false)
    if (!small) {
        return (
            <div className="menu">
                <div
                    className={`menu_element ${open ? "active_dropdown" : ""}`}
                    onClick={() => {
                        setOpen(!open)
                    }}
                >
                    <h1 className="menu_title">{title}</h1>
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
                        className={`menu_element ${
                            open ? "active_dropdown" : ""
                        }`}
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >
                        <h1 className="menu_title2">{title}</h1>
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
                        className={`menu_element ${
                            open ? "active_dropdown" : ""
                        }`}
                        onClick={() => {
                            setOpen(!open)
                        }}
                    >
                        <h1 className="menu_title2">{title}</h1>
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
