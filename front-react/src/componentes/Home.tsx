export const Home = () => {
  return (
    <div className="container-fluid home">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/Local3.jpg" className="d-block w-100 imagen" alt="local" />
          </div>
          <div className="carousel-item">
            <img src="/img/Local1.jpeg" className="d-block w-100 imagen" alt="local" />
          </div>
          <div className="carousel-item">
            <img src="/img/Local2.jpg" className="d-block w-100 imagen" alt="local" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
			<p>
				Mj Music distribuye y representa marcas de guitarras, instrumentos de viento, pianos, baterías, micrófonos y más. Si buscas accesorios musicales de calidad, ¡Mj Music es el lugar adecuado! 
			</p>
    </div>
  );
};
