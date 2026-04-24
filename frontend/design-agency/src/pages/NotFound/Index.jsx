import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div className="not-found__inner">
        <p className="not-found__eyebrow">Error 404</p>
        <h1 className="not-found__title">This page wandered off</h1>
        <p className="not-found__description">
          The link is broken or the page has moved. Let's get you back to something useful.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="not-found__cta not-found__cta--primary">Back to home</Link>
          <Link to="/contactus" className="not-found__cta">Contact us</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
