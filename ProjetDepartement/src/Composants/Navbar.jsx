import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png'

const Header = () => {
  const navigate = useNavigate()

  // 1. التحقق واش المستخدم متصل عبر قراءة الإيميل من localStorage
  const userEmail = localStorage.getItem('userEmail') 
  const isConnected = !!userEmail // غاتعطينا true يلا كان متصل و false يلا كان خارج

  // 2. دالة تسجيل الخروج (Déconnexion)
  const handleLogout = () => {
    localStorage.removeItem('userEmail') // مسح الإيميل المخزن
    navigate('/signin') // الرجوع لصفحة تسجيل الدخول
  }

  return (
    <Navbar expand="lg" className="py-3 shadow-sm border-bottom">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <div 
            className="d-flex align-items-center justify-content-center rounded"
            style={{ width: '45px', height: '45px', overflow: 'hidden' }}
          >
            <img 
              src={logo} 
              alt="Enosis Logo" 
              style={{ width: '90px', height: '90px', objectFit: 'contain' }} 
            />
          </div>

          <span className="fw-bold text-dark fs-4" style={{ letterSpacing: '-0.5px', paddingLeft: '5px' }}>
            Enosis
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto align-items-center gap-4">
            <Nav.Link as={Link} to="/directory" className="fw-semibold" style={{ color: '#059669' }}>
              Directory
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-secondary">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/help-center" className="text-secondary">
              Help Center
            </Nav.Link>
            <Nav.Link as={Link} to="/security" className="text-secondary">
              Security
            </Nav.Link>
          </Nav>

          <Nav className="align-items-center gap-3">
            {/* 3. شرط: يلا كان متصل نظهرو الإيميل وزر الخروج، وإيلا مكنش نظهرو زر Connexion */}
            {isConnected ? (
              <>
                <span className="text-muted small d-none d-md-inline">
                  {userEmail}
                </span>
                <Button 
                  variant="outline-danger"
                  className="px-4 py-2 rounded-2 fw-medium shadow-sm"
                  onClick={handleLogout}
                >
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button 
                as={Link} 
                to="/signin" 
                className="px-4 py-2 rounded-2 fw-medium shadow-sm border-0 text-white"
                style={{ backgroundColor: '#059669' }}
              >
                Connexion
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
