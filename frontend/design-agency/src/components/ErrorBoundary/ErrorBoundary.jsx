import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, errorInfo)
    }
  }

  handleReload = () => {
    this.setState({ hasError: false })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="not-found" role="alert">
          <div className="not-found__inner">
            <p className="not-found__eyebrow">Something went wrong</p>
            <h1 className="not-found__title">We hit a snag</h1>
            <p className="not-found__description">
              An unexpected error occurred. Try reloading the page — if it keeps happening, let us know.
            </p>
            <div className="not-found__actions">
              <button type="button" onClick={this.handleReload} className="not-found__cta not-found__cta--primary">
                Reload
              </button>
            </div>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
