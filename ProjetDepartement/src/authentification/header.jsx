import logo from '../assets/logo1.png';

export default function Header() {
  return (
    <header className="w-100border-bottom border-light" style={{backgroundColor: 'white'}}>
      <div className="w-100" style={{ height: '6px', backgroundColor: '#1b6b3b' }}></div>
      <div className="container-fluid px-4 py-3 d-flex align-items-center gap-3" style={{ maxWidth: '1280px' }}>
        <div 
          className="d-flex align-items-center justify-content-center text-white rounded-4 flex-shrink-0 overflow-hidden" 
          
        >
          <img src={logo} alt="Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
        </div>

        <div className="d-flex flex-column" style={{fontFamily: "Sans-serif"}}>
          <h1 className="fw-bold text-dark mb-0 lh-sm" style={{fontSize: "28px"}}>
            Portail Sectoriel
          </h1>
          <span className="text-secondary small fw-medium">
            Portail métiers
          </span>
        </div>

      </div>
    </header>
  );
}