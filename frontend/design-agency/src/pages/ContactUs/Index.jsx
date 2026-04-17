import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import SEO from '../../components/SEO/SEO'
import { getSeo, submitLead } from '../../services/contentService'

function ContactUs() {
  const [meta, setMeta] = useState(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  })

  useEffect(() => {
    getSeo('/contactus').then(setMeta)
  }, [])

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    try {
      await submitLead({ ...form, source: 'contact-page' })
      setStatus('success')
      setForm({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-us-page" id="main-content">
      <SEO meta={meta} />
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you want to build.</h1>
          <p>Share the project goal, timeline, and the kind of creative support your team needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner contact-layout">
          <form className="lead-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" />
            </label>
            <label>
              Company
              <input name="company" value={form.company} onChange={handleChange} autoComplete="organization" />
            </label>
            <label>
              Budget
              <input name="budget" value={form.budget} onChange={handleChange} placeholder="$10k - $25k" />
            </label>
            <label className="lead-form__wide">
              Message
              <textarea name="message" value={form.message} onChange={handleChange} required rows="6" />
            </label>
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending' : 'Send message'}
            </Button>
            <p role="status" aria-live="polite">
              {status === 'success' ? 'Your message has been saved.' : null}
              {status === 'error' ? 'The message could not be sent. Please email us directly.' : null}
            </p>
          </form>
          <aside className="contact-panel" aria-label="Project details">
            <h2>Good starting points</h2>
            <p>Brand identity, web design, launch campaigns, design systems, and digital product interfaces.</p>
            <a href="mailto:hello@designagency.local">hello@designagency.local</a>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
