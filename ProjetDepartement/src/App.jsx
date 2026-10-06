import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCar, FaBalanceScale, FaBoxOpen , FaUsers } from 'react-icons/fa'; // Icônes mnasbin l Parc Auto w Juridique
import { useState, useEffect } from 'react';

import Header from './Composants/Navbar';
import HeroSection from './Composants/HeroSection';
import SupportSection from './Composants/StatsBar';
import DepartmentCard from './Composants/DepartmentCard';
import SignIn from './authentification/page'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Footer from './Composants/footer';

const departments = [
  {
    icon: <FaCar size={24} className="text-primary" />,
    iconBg: "#e6eeff",
    status: "Operational",
    statusVariant: "success",
    title: "Parc auto",
    description: "Le département Parc auto gère les véhicules de l'entreprise : réservations, entretien, carburant et sinistres. Il veille à ce que chaque collaborateur dispose d'un véhicule fiable pour ses déplacements professionnels.",
    footerText: "Parc auto",
    category: "Parc auto"
  },
  {
    icon: <FaBalanceScale size={24} className="text-success" />,
    iconBg: "#d1fae5",
    status: "Internal Access",
    statusVariant: "primary",
    title: "Juridique",
    description: "Le département Juridique conseille l'entreprise sur toutes les questions de droit : contrats, conformité réglementaire et litiges. Il protège les intérêts de l'entreprise et sécurise ses décisions et ses engagements.",
    footerText: "Juridique",
    category: "Juridique"
  },
  {
    icon: <FaBoxOpen size={24} style={{ color: '#ea580c' }} />,
    iconBg: "#ffedd5",
    status: "Operational",
    statusVariant: "success", 
    title: "Contrôle qualité",
    description: "Le département Contrôle qualité s'assure que les produits, services et processus de l'entreprise respectent les normes et exigences définies. Il réalise les inspections et les audits, puis suit les actions correctives pour garantir une qualité constante.",
    footerText: "Contrôle qualité",
    category: "Contrôle qualité"
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
    

      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <Header />
              <HeroSection 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              
              <Container className="" style={{ maxWidth: '1100px' }}>
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
                      <p className="text-muted">On n’a trouvé aucun département qui corresponde à ton sujet de recherche.</p>
                    </Col>
                  )}
                </Row>
              </Container>

              <SupportSection />


              <Footer />
            </div>
          } 
        />
        <Route           
          path="/acceder" 
          element={
             <SignIn />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App