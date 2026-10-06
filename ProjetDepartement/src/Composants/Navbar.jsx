import logo from '../assets/logo.png'

export default function Header(){
    return(
        <>
            <div style={{ backgroundColor: '#0A5C2A', padding: '30px 40px', color: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '15px' }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>
                            Portail Sectoriel / Portail métiers
                        </h1>
                    </div>

                    <div>
                        <img src={logo} alt="logoEnosis" style={{ height: '55px', objectFit: 'contain' }} />
                    </div>
                </div>

                <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.5', maxWidth: '600px', opacity: 0.9 }}>
                    Accédez depuis un seul endroit aux espaces de travail, aux ressources opérationnelles et aux services de chaque département d'Enosis. Certaines divisions nécessitent une authentification renforcée.
                </p>
            </div>
        </>
    )
}