import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export function Navbarr(props) {
  return (
    <>
      <nav className=" navbar-default navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 active"
                  aria-current="page"
                  href="#"
                >
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#Education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <NavDropdown title="Work" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#Work">Work preview</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/AllMyWork">
                    Projects
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
