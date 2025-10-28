export default function Success() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#fafafa'
    }}>
      <div style={{ 
        textAlign: 'center',
        maxWidth: '600px',
        padding: '60px 40px',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ 
          fontSize: '64px',
          marginBottom: '24px'
        }}>
          ✅
        </div>
        <h1 style={{ 
          fontSize: '36px',
          fontWeight: '700',
          color: '#0a0a0a',
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          ¡Mensaje Enviado!
        </h1>
        <p style={{ 
          fontSize: '18px',
          color: '#666',
          marginBottom: '32px'
        }}>
          Gracias por contactarme. Te responderé lo antes posible.
        </p>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

