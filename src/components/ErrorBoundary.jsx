import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('App crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#0a0a0a', color: 'white', height: '100vh',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '2rem', fontFamily: 'monospace'
        }}>
          <h1 style={{ color: '#e62b1e', marginBottom: '1rem' }}>⚠️ App Error</h1>
          <p style={{ marginBottom: '1rem' }}>The app crashed. Open DevTools (F12) → Console for full details.</p>
          <pre style={{
            background: '#1a1a1a', padding: '1rem', borderRadius: '8px',
            maxWidth: '700px', overflow: 'auto', color: '#ff6b6b', fontSize: '0.8rem'
          }}>
            {this.state.error?.toString()}
          </pre>
          <button
            style={{ marginTop: '1rem', background: '#e62b1e', color: 'white', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
