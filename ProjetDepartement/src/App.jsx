import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCar, FaBalanceScale, FaBoxOpen } from 'react-icons/fa'; // Icônes mnasbin l Parc Auto w Juridique
import { useState, useEffect } from 'react';

import Header from './Composants/Navbar';
import HeroSection from './Composants/HeroSection';
import StatsBar from './Composants/StatsBar';
import DepartmentCard from './Composants/DepartmentCard';
import SignIn from './authentification/page';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const departments = [
  {
    icon: <FaCar size={24} className="text-primary" />,
    iconBg: '#e6eeff',
    status: 'Operational',
    statusVariant: 'success',
    title: 'Parc auto',
    description: 'Gestion de la flotte de véhicules, suivi de l\'entretien, des réservations et des déplacements...',
    footerText: '🔒 Parc auto',
    category: 'Parc auto'
  },
  {
    icon: <FaBalanceScale size={24} className="text-success" />,
    iconBg: '#d1fae5',
    status: 'Internal Access',
    statusVariant: 'primary',
    title: 'Juridique',
    description: 'Gestion des contrats, dossiers juridiques, conseils légaux et conformité réglementaire...',
    footerText: '👤 Juridique',
    category: 'Juridique'
  },
  {
    icon: <FaBoxOpen size={24} style={{ color: '#ea580c' }} />,
    iconBg: '#ffedd5',
    status: 'Operational',
    statusVariant: 'success', 
    title: 'Logistique',
    description: 'Gestion des flux de marchandises, approvisionnements, suivi des stocks, des livraisons et optimisation de la chaîne logistique...',
    footerText: '📦 Logistique',
    category: 'Logistique'
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [filteredDepartments, setFilteredDepartments] = useState(departments);

  useEffect(() => {
    const result = departments.filter((dept) => {
    const matchesSearch = dept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        dept.description.toLowerCase().includes(searchTerm.toLowerCase())
      
    const matchesFilter = activeFilter === 'Tous' || dept.category === activeFilter;
    return matchesSearch && matchesFilter
  })

    setFilteredDepartments(result);
  }, [searchTerm, activeFilter]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <HeroSection 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <StatsBar />
              
              <Container className="py-5" style={{ maxWidth: '1100px' }}>
                <Row className="g-4">
                  {filteredDepartments.length > 0 ? (
                    filteredDepartments.map((dept, index) => (
                      <Col xs={12} md={4} key={index}>
                        <DepartmentCard 
                          {...dept} 
                          onAccess={() => alert(`Accessing ${dept.title}`)} 
                        />
                      </Col>
                    ))
                  ) : (
                    <Col xs={12} className="text-center py-4">
                      <p className="text-muted">Ma l9ina 7ta chi département kay-nasab l-baht dyalk.</p>
                    </Col>
                  )}
                </Row>
              </Container>
            </div>
          } 
        />
        <Route path="/directory" element={<div className="p-4">Directory Page</div>} />
        <Route path="/about" element={<div className="p-4">About Page</div>} />
        <Route path="/help-center" element={<div className="p-4">Help Center Page</div>} />
        <Route path="/security" element={<dxiv className="p-4">Security Page</dxiv>} />
        <Route path="/signin" element={<div className="p-4"> <SignIn/> </div> } />

        <Route path="/acceder" element={<div className="p-4"> <SignIn/> </div> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App