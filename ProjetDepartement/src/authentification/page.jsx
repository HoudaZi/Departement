import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Modal, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertVariant, setAlertVariant] = useState('info')
  
  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  setAlertMessage('')

  try {
    const response = await fetch('http://localhost:5000/api/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('userEmail', email)
      setAlertVariant('success')
      console.log("Code généré par le serveur :", data.code_pour_test)
      setShowVerifyModal(true)
    } else {
      alert(data.error || "Une erreur est survenue lors de l'envoi du code.");
    }
    } catch (error) {
      alert("Impossible de se connecter au serveur. Assurez-vous que l'application Python est en cours d'exécution.");
    } finally {
      setLoading(false)
    }
  }
  const handleVerifyCode = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      })
      const data = await response.json()
      if (response.ok) {
        setAlertVariant('success');
        setAlertMessage('Vérification réussie ! Redirection en cours...')
        setTimeout(() => {
          setShowVerifyModal(false)
          navigate('/dashboard')
        }, 1500)
      } else {
        setAlertVariant('danger')
        setAlertMessage(data.error || 'Code incorrect ou expiré.')
      }
    } catch (error) {
      setAlertVariant('danger')
      setAlertMessage('Erreur de connexion au serveur.')
    } finally {
      setLoading(false)
    }
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
                    style={{ width: '70px', height: '70px', objectFit: 'contain' }} 
                  />
                </div>
                <span className="fw-bold text-dark fs-4" style={{ letterSpacing: '-0.5px' }}>
                  Enosis
                </span>
              </Link>
            </div>

            <Card className="shadow-sm border-0 rounded-4 p-4">
              <Card.Body>
                <div className="text-center mb-4">
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
                      <Link to="/forgot-password" style={{ fontSize: '0.85rem', color: '#059669' }} className="text-decoration-none">
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
                    style={{ backgroundColor: '#059669' }}
                  >
                    {loading ? 'Envoi en cours...' : 'Se connecter'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="text-center mt-4">
              <p className="text-muted small">
                Vous n'avez pas de compte ?{' '}
                <Link to="/contact" className="text-decoration-none fw-semibold" style={{ color: '#059669' }}>
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

      <Modal show={showVerifyModal} onHide={() => setShowVerifyModal(false)} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold text-dark fs-5">Code de Vérification</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 py-3">
          <p className="text-muted small mb-4">
            Un code de vérification à 6 chiffres a été envoyé à votre adresse email : <strong>{email}</strong>
          </p>
          {alertMessage && <Alert variant={alertVariant} className="py-2 text-center small">{alertMessage}</Alert>}
          <Form onSubmit={handleVerifyCode}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="123456"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="text-center py-2 fs-3 fw-bold shadow-none"
                style={{ letterSpacing: '8px' }}
                required
              />
            </Form.Group>
            <Button 
              type="submit" 
              disabled={loading}
              className="w-100 py-2 border-0 text-white fw-medium rounded-2"
              style={{ backgroundColor: '#059669' }}
            >
              {loading ? 'Vérification...' : 'Valider & Se connecter'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default SignIn