import React from 'react';
import { Router } from './components/Router';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '50px',
          backgroundColor: '#ff0000',
          color: 'white',
          minHeight: '100vh',
          fontFamily: 'monospace'
        }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Application Error</h1>
          <pre style={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}