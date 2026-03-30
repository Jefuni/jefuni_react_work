const Carousel = () =>{
   return (
  <div className="carousel slide" id="myCarousel" data-bs-ride="carousel" data-bs-interval="3000">
    
    <ol className="carousel-indicators">
      <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      
      <div className="carousel-item active">
        <img src="/images/slide1.png" alt="slide 1" className="d-block w-100" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Our Laptops</h5>
          <p>Quality and Performance</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src="/images/slide2.png" alt="slide 2" className="d-block w-100" />
      </div>

      <div className="carousel-item">
        <img src="/images/slide3.png" alt="slide 3" className="d-block w-100" />
      </div>

    </div>

    <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>

    <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>

  </div>
);
    
}
export default Carousel;