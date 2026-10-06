import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
  }
  
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="text-center mb-4">
              <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none">
                <div className="d-flex align-items-center justify-content-center rounded">
                  <img 
                    src={logo} 
                    alt="Enosis Logo" 
                    style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
                  />
                </div>
                <span className="fw-bold text-dark fs-5" style={{ letterSpacing: '-0.5px' }}>
                  Enosis
                </span>
              </Link>
            </div>
            <Card className="shadow-sm border-0 rounded-4 ">
              <Card.Body>
                <div className="text-center">
                  <h3 className="fw-bold text-dark">Connexion</h3>
                  <p className="text-muted small">Entrez vos coordonnées pour accéder à votre espace</p>
                </div>
                <Form onSubmit={handleLoginSubmit}>
                  <Form.Group className="mb-3 text-start" controlId="formEmail">
                    <Form.Label className="fw-medium text-secondary small text-start d-block">
                      Adresse Email
                    </Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="nom@enosis.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label className="fw-medium text-secondary small mb-0">Mot de passe</Form.Label>
                      <Link to="/forgot-password" style={{ fontSize: '0.85rem', color: '#0A5C2A' }} className="text-decoration-none">
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <Form.Control 
                      type="password" 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="py-2 mt-1"
                    />
                  </Form.Group>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-100 py-2 fw-medium rounded-2 shadow-sm mt-3 border-0"
                    style={{ backgroundColor: '#0A5C2A' }}
                  >
                    {loading ? 'Connexion en cours...' : 'Se connecter'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="text-center mt-4">
              <p className="text-muted small">
                Vous n'avez pas de compte ?{' '}
                <Link to="/contact" className="text-decoration-none fw-semibold" style={{ color: '#0A5C2A' }}>
                  Contactez l'administrateur
                </Link>
              </p>
              <p className="text-muted" style={{ fontSize: '0.8rem' }}>
                <Link to="/" className="text-decoration-none text-secondary">
                  ← Retour à l'accueil
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default SignIn