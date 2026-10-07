import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header'
import StarButton from './StarButton'
import './StarButton.css'
import logo from '../assets/logo2.png';
import { User, Lock, Eye, EyeOff, LogIn, ArrowLeft, Building2} from 'lucide-react';

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
  }
  
  return (
    <div style={{backgroundColor: '#fbfffcff',width: '100%'}} className="min-vh-100 d-flex flex-column">
      <Header/>
      <div className="min-vh-100 d-flex align-items-center justify-content-center py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="shadow-sm border-0 rounded-4 mx-auto" style={{ backgroundColor: 'white', width: '100%', maxWidth: '520px' }}>
                <Card.Body className="p-4 p-sm-5">
                  <div className="text-center mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center shadow-sm rounded-circle"
                      style={{ 
                        width: '65px', 
                        height: '65px', 
                        backgroundColor: '#E8F5E9',
                        color: '#0A5C2A',
                        border: '2px solid rgba(10, 92, 42, 0.15)',
                        animation: 'floatCard 4s ease-in-out infinite'
                      }}
                    >

                      <img src={logo} alt="Logo" style={{ width: '75px', height: '75px', objectFit: 'contain' }} />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="fw-bold text-dark">Connectez-vous à votre Portail</h3>
                    <p className="text-muted small">
                      Entrez vos identifiants d'entreprise pour accéder à vos espaces de travail, ressources et services
                    </p>
                  </div>
                  <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3 text-start" controlId="formEmail">
                      <Form.Label className="fw-bold text-dark small text-start d-block">
                        Nom d'utilisateur / Email professionnel
                      </Form.Label>
                      <Form.Control.Feedback type="invalid" />
                          <div className="input-group custom-input-group overflow-hidden">
                              <span className="input-group-text bg-transparent border-0 text-muted ps-3 input-icon">
                                <User size={18} />
                              </span>
                              <Form.Control 
                                type="email" 
                                placeholder="prenom.nom@entreprise.com" 
                                className="py-2 border-0 shadow-none ps-0 bg-transparent"
                              />
                            </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <Form.Label className="fw-bold text-dark small mb-0">Mot de passe</Form.Label>
                        <Link to="/forgot-password" style={{ fontSize: '0.85rem', color: '#0A5C2A' }} className="text-decoration-none">
                          Mot de passe oublié ?
                        </Link>
                      </div>
                      <div className="input-group custom-input-group overflow-hidden">
                        <span className="input-group-text bg-white border-end-0 text-muted ps-3 input-icon">
                          <Lock size={18} />
                        </span>
                        <Form.Control 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Saisissez votre mot de passe" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="py-2 border-start-0 border-end-0 ps-0 shadow-none"
                        />
                        <span 
                          className="input-group-text bg-white border-start-0 text-muted pe-3" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </span>
                      </div>
                    </Form.Group>

                  <div className="mt-4">
                      <StarButton disabled={loading}>
                        {loading ? 'Connexion en cours...' : 'Se connecter'}
                      </StarButton>
                    </div>
                  </Form>

                  <hr className="my-4 text-muted opacity-25" />
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <Link to="/forgot-password" className="text-decoration-none text-muted small lh-sm">
                      Problème de<br />connexion ?
                    </Link>
                    <div className="vr mx-2" style={{ height: '32px', width: '1px', backgroundColor: '#dee2e6' }}></div>
                    <Link to="/register" className="text-decoration-none fw-semibold small lh-sm text-end" style={{ color: '#0A5C2A' }}>
                      S'inscrire (Nouveau<br />collaborateur)
                    </Link>
                  </div>
                </Card.Body>
              </Card>

              <div className="text-center mt-4">
                  <Link to="/" className="back-home-badge">
                    <ArrowLeft size={16} className="arrow-icon" />
                    <span>Retour à l'accueil du portail</span>
                  </Link>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default SignIn