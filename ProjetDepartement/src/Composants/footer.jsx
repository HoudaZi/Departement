import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="w-100 bg-white border-top py-3 mt-5">
      <Container 
        className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2"
        style={{ maxWidth: '1100px' }}
      >
        <div className="text-muted" style={{ fontSize: '0.85rem' }}>
          © 2026 Enosis · Portail interne
        </div>
        <div className="text-muted text-end" style={{ fontSize: '0.85rem' }}>
          Confidentiel — usage réservé aux collaborateurs
        </div>
      </Container>
    </footer>
  )
}
