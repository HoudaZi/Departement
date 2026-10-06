import { Container, Form, InputGroup, Button, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MarqueeFilters.css'; 
const HeroSection = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => {
  const filters = [
    'Tous',
    'Parc auto',
    'Juridique',
    'Contrôle qualité',
    'Ressources Humaines',
    'Marketing'
  ]
  return (
    <section className="py-5 text-center">
      <Container>
        <div className="mb-4">
          <Row className="g-2 align-items-center">
            <Col>
              <InputGroup className="shadow-sm rounded-pill overflow-hidden border bg-white px-2 py-1 align-items-center">
                <InputGroup.Text className="bg-transparent border-0 ps-3 text-muted">
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Rechercher des départements, équipes ou services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-0 shadow-none bg-transparent"
                  style={{ fontSize: '0.95rem' }}
                />
                
                {searchTerm && (
                  <Button 
                    variant="link" 
                    className="text-muted text-decoration-none p-0 me-2" 
                    onClick={() => setSearchTerm('')}
                  >
                    <FaTimes />
                  </Button>
                )}
              </InputGroup>
            </Col>
            <Col xs="auto">

                <button>
                  <span class="span-mother">
                    <span>R</span>
                    <span>e</span>
                    <span>c</span>
                    <span>h</span>
                    <span>e</span>
                    <span>r</span>
                    <span>c</span>
                    <span>h</span>
                    <span>e</span>
                    <span>r</span>
                  </span>
                  <span class="span-mother2">
                    <span>R</span>
                    <span>e</span>
                    <span>c</span>
                    <span>h</span>
                    <span>e</span>
                    <span>r</span>
                    <span>c</span>
                    <span>h</span>
                    <span>e</span>
                    <span>r</span>
                  </span>
                </button>

            </Col>
          </Row>
        </div>
          <div className="marquee-container py-3">
            <div className="marquee-track">
              {[...filters, ...filters].map((filter, index) => {
                const isActive = activeFilter === filter;
                return (
                  <Button
                    key={index}
                    onClick={() => setActiveFilter(filter)}
                    className="rounded-pill px-4 py-2 fw-medium border-0 flex-shrink-0"
                    style={{
                      backgroundColor: isActive ? '#0A5C2A' : '#f3f4f6',
                      color: isActive ? '#ffffff' : '#4b5563',
                      fontSize: '0.9rem',
                      transition: 'all 0.25s ease-in-out',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: isActive ? '0 4px 12px rgba(1, 96, 66, 0.25)' : 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, color 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {filter}
                  </Button>
                )
              })}
            </div>
          </div>
      </Container>
    </section>
  )
}
export default HeroSection