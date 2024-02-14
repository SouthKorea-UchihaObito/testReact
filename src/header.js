import {Container, Nav, Navbar} from 'react-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom';
function Header(){
    // page 이동 도와줌
    let navigate = useNavigate();
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate('/')}}>Main</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/detail')}}>상품목록</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/event')}}>상품목록</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </header>
    )
}
export default Header;