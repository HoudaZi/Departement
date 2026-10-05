import React from 'react'
import { Container, Form, InputGroup, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const HeroSection = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => {
  const filters = [
    'Tous',
    'Parc auto',
    'Juridique',
    'Logistique',
    'Ressources Humaines',
    'Marketing'
  ]

  return (
    <section className="py-5 text-center">
      <Container>
        <div className="mb-3">
          <span 
            className="badge px-3 py-2 rounded-pill fw-medium"
            style={{ 
              backgroundColor: '#E6F4EA', 
              color: '#059669',
              fontSize: '0.85rem',
              letterSpacing: '0.5px',
              fontWeight: 'bold'
            }}
          >
            ● ESPACE ENTREPRISE ● Enosis PUBLIC DIRECTORY
          </span>
        </div>

        <h1 className="fw-bold display-5 text-dark mb-2" style={{ letterSpacing: '-1px' , fontSize : '40px'}}>
          Portail des Départements
        </h1>

        <h4 className="fw-semibold mb-3" style={{ fontSize: '1.25rem', color: '#059669' }}>
          Enterprise Department & Services Hub
        </h4>

        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '650px', fontSize: '1rem', lineHeight: '1.6' }}>
          Accédez aux espaces de travail internes, aux ressources opérationnelles et aux services des différents départements d'Enosis. Une connexion est requise pour accéder aux divisions nécessitant une authentification et aux portails sécurisés.    
        </p>

        <div className="mb-4">
          <InputGroup className="shadow-sm rounded-3 overflow-hidden border">
            <InputGroup.Text className="bg-white border-0 ps-3 text-muted">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Rechercher des départements, équipes ou services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 py-3 shadow-none"
              style={{ fontSize: '0.95rem' }}
            />
          </InputGroup>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-pill px-3 py-2 fw-medium border-0 ${
                  isActive ? 'shadow-sm' : 'text-secondary'
                }`}
                style={{
                  backgroundColor: isActive ? '#059669' : '#f3f4f6',
                  color: isActive ? '#ffffff' : '#4b5563',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {filter}
              </Button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default HeroSection