import {Routes, Route, Link} from "react-router-dom"

import {Intro} from  './pages/Intro/Intro'

export default function App(){
    return (
    <>
        <Routes>
            <Route path="/" element={<Intro />}/>
        </Routes>
    </>
)}

