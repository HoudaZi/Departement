import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaQuestionCircle, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SupportSection() {
  return (
    <Container className="py-4" style={{ maxWidth: '1100px' }}>
      <Row className="g-4">
        <Col xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-100"
          >
            <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="d-flex align-items-start gap-3">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                  style={{ width: '44px', height: '44px', backgroundColor: '#edf2f7', color: '#4a5568' }}
                >
                  <FaQuestionCircle size={20} />
                </div>
                <div className="text-start">
                  <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1.05rem' }}>
                    Centre d'aide
                  </h5>
                  <p className="text-muted mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                    Le Centre d’aide vous accompagne dans l’utilisation quotidienne de la plateforme. Vous y trouverez des guides pratiques et des tutoriels pour vous approprier rapidement chaque espace départemental, ainsi qu’une FAQ répondant aux questions les plus fréquentes. En cas de besoin, vous pouvez facilement soumettre une demande d’assistance et suivre l’avancement de vos tickets en direct auprès de nos équipes support.
                  </p>
                  <Link 
                    to="/aide" 
                    className="fw-semibold text-decoration-none" 
                    style={{ color: '#059669', fontSize: '0.85rem' }}
                  >
                    Ouvrir le centre d'aide
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </Col>

        <Col xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="h-100"
          >
            <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
              <div className="d-flex align-items-start gap-3">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                  style={{ width: '44px', height: '44px', backgroundColor: '#e6f4ea', color: '#059669' }}
                >
                  <FaShieldAlt size={20} />
                </div>
                <div className="text-start">
                  <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1.05rem' }}>
                    Sécurité & accès
                  </h5>
                  <p className="text-muted mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                    La rubrique Sécurité & accès vous permet de visualiser et gérer l'ensemble de vos droits d’accès aux différents portails de l'entreprise. Si vous avez besoin de consulter des informations restreintes, formulez directement une demande d’autorisation pour débloquer l’espace souhaité. Retrouvez également dans cet espace l’ensemble des règles de confidentialité et la politique de sécurité garantissant la protection des données de chaque département.
                  </p>
                  <Link 
                    to="/acces" 
                    className="fw-semibold text-decoration-none" 
                    style={{ color: '#059669', fontSize: '0.85rem' }}
                  >
                    Voir mes accès
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  )
}