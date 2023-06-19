import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Error from "./pages/Error"
import "./styles/Global.css"

import About from "./pages/About"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
