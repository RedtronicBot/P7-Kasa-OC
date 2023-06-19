import { useState } from "react"
import "../../styles/About.css"
function DropdownMenu({ title, text }) {
    const [open, setOpen] = useState(false)
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
            <div className={`menu_components ${open ? "active_dropdown" : ""}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default DropdownMenu
