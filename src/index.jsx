import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Banner from "./components/Banner"
import Header from "./components/Header"
import "./styles/Global.css"
import imageBanner from "./images/home_banner.png"
import About from "./pages/About"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Banner
                                image={imageBanner}
                                text={"Chez vous, partout et ailleurs"}
                            />
                            <Home />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
