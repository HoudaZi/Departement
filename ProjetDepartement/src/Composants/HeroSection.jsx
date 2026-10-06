import { Container, Form, InputGroup, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MarqueeFilters.css'; 
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