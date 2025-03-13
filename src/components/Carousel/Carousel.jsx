import "./Carousel.css";
import slide1 from "../../assets/images/pcgamingprueba5.webp";
import slide2 from "../../assets/images/pcgamingprueba1.webp";
import slide3 from "../../assets/images/pcgamingprueba3.webp";

function Carousel() {
  return (
    <div className="container-fluid">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <picture>
              <source srcSet={slide1} type="image/webp" />
              <img src={slide1} className="img-fluid d-block w-100" alt="slide1" loading="lazy" />
            </picture>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <picture>
              <source srcSet={slide2} type="image/webp" />
              <img src={slide2} className="img-fluid d-block w-100" alt="slide2" loading="lazy" />
            </picture>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <picture>
              <source srcSet={slide3} type="image/webp" />
              <img src={slide3} className="img-fluid d-block w-100" alt="slide3" loading="lazy" />
            </picture>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel