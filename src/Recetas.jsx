function Recetas()
{
    return(
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="public\image.png" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="public\Screenshot 2024-12-18 113230.png" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>

        </div>

    );
}
export default Recetas;