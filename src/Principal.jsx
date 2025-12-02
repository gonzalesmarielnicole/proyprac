import { Routes, Route } from "react-router-dom";
import Recetas from "./Recetas";
import Tarjetas from "./Tarjetas";
import Decoracion from "./Decoracion";
import "./App.css" 
function Principal(props){
    return(
        <div classNameName="padre">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Menu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/recetas">Recetas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/tarjetas">Tarjetas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/decoracion">Decoracion</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

            <Routes>
                <Route path="/"  ></Route>
                <Route path="/recetas" element={<Recetas></Recetas>}></Route>
                <Route path="/tarjetas" element={<Tarjetas></Tarjetas>} ></Route>
                <Route path="/decoracion" element={<Decoracion></Decoracion>}></Route>
            </Routes>

        </div>

    );
}
export default Principal;
