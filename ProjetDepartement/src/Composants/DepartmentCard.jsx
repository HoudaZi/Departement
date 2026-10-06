import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './MarqueeFilters.css'; 
const DepartmentCard = ({ 
  icon, 
  iconBg, 
  status, 
  statusVariant, 
  title, 
  description, 
  footerText, 
}) => {
  return (
    <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white card-hover-lift"
    >
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div 
            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
            style={{ 
              width: '54px', 
              height: '54px', 
              backgroundColor: iconBg || '#E6F4EA'
            }}
          >
            {icon}
          </div>
          <span 
            className="badge px-3 py-2 rounded-pill fw-medium"
            style={{ 
              backgroundColor: statusVariant === 'success' ? '#d1fae5' : '#E6F4EA',
              color: statusVariant === 'success' ? '#065f46' : '#059669',
              fontSize: '0.8rem'
            }}
          >
            {statusVariant === 'success' ? '● ' : '• '} {status}
          </span>
        </div>
        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
          {title}
        </h5>
        <p className="text-muted mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
          {description}
        </p>
      </div>
      <div className="pt-3 border-top d-flex align-items-center justify-content-between mt-auto">
        <div className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.85rem' }}>
          Responsable : {footerText}
        </div>
        <Button 
          as={Link} 
          to="/acceder"
          className="rounded-2 px-3 py-2 fw-medium border-0 d-flex align-items-center gap-1 shadow-sm text-decoration-none text-white"
          style={{ backgroundColor: '#0A5C2A', fontSize: '0.85rem' }}
        >
          Accéder &rarr;
        </Button>
      </div>
    </Card>
  )
}
export default DepartmentCard