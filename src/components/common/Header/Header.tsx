import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import styles from "./styles.module.css";

const {headerContainer, headerLogo} = styles;

const Header = () => {
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}>
                <span>your </span>
                <Badge bg="info">Ecom</Badge>
            </h1>

            {/* Cart */}
        </div>

        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
          <Container>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Categories</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="#">Login</Nav.Link>
                <Nav.Link href="#">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>


    </header>

  );
};

export default Header;
