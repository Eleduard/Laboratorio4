import { Link } from "react-router-dom";

export const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mj Music
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to="/dondeestamos" className="nav-link">
              Dónde estamos
            </Link>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            <Link to="/administrar" className="nav-link">
              Administrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
