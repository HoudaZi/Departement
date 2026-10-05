import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsDiagram3, BsShieldCheck, BsLock, BsHeadset } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const StatsBar = () => {
  const statsData = [
    {
      icon: <BsDiagram3 size={22} style={{ color: '#059669' }} />,
      iconBg: '#E6F4EA',
      title: '9 Core',
      subtitle: 'Global Divisions',
    },
    {
      icon: <BsShieldCheck size={22} style={{ color: '#059669' }} />,
      iconBg: '#d1fae5',
      title: '100%',
      subtitle: 'Core Gateway Live',
    },
    {
      icon: <BsLock size={22} style={{ color: '#059669' }} />,
      iconBg: '#E6F4EA',
      title: 'Tier 4 SSO',
      subtitle: 'Encrypted Protocol',
    },
    {
      icon: <BsHeadset size={22} style={{ color: '#059669' }} />,
      iconBg: '#E6F4EA',
      title: '24/7 Desk',
      subtitle: 'Cross-Hub Support',
    },
  ];

  return (
    <div className="py-4">
      <Container style={{ maxWidth: '1100px' }}>
        <Card className="border-0 shadow-sm p-3 rounded-4" style={{ backgroundColor: '#f0fdf4' }}>
          <div>
            <Row className="g-3 align-items-center">
              {statsData.map((item, index) => (
                <Col xs={12} sm={6} lg={3} key={index}>
                  <div className="d-flex align-items-center gap-3 p-2">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                      style={{ 
                        width: '48px', 
                        height: '48px', 
                        backgroundColor: item.iconBg 
                      }}
                    >
                      {item.icon}
                    </div>
                    
                    <div>
                      <h5 className="fw-bold mb-0 text-dark fs-5" style={{ letterSpacing: '-0.5px' }}>
                        {item.title}
                      </h5>
                      <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                        {item.subtitle}
                      </small>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default StatsBar;