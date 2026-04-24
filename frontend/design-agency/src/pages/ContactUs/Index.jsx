import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Diamond,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Send,
  Sparkles,
  Zap,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SEO from '../../components/SEO/SEO'
import { getSeo, submitLead } from '../../services/contentService'

const SERVICE_OPTIONS = [
  'Brand identity',
  'Website design',
  'Design system',
  'Product interface',
  'Launch campaign',
  'Other',
]

const BUDGET_OPTIONS = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
]

const TIMELINE_OPTIONS = ['ASAP', '1 month', '2–3 months', 'Later this year', 'Flexible']

const SERVICE_ICONS = {
  'Brand identity': Diamond,
  'Website design': MonitorSmartphone,
  'Design system': Layers3,
  'Product interface': Compass,
  'Launch campaign': Rocket,
  Other: Sparkles,
}

const WHATSAPP_NUMBER = '919876543210'
const WHATSAPP_MESSAGE = 'Hi Design Agency, I would like to talk about a project.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

function ContactUs() {
  const [meta, setMeta] = useState(null)
  const [status, setStatus] = useState('idle')
  const [activeField, setActiveField] = useState('')
  const [flowPosition, setFlowPosition] = useState(null)
  const [flowDrag, setFlowDrag] = useState({ isDragging: false, offsetX: 0, offsetY: 0 })
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: [],
    budget: '',
    timeline: '',
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

  function handleServicePick(service) {
    setActiveField('service')
    setForm((current) => {
      const nextServices = current.service.includes(service)
        ? current.service.filter((item) => item !== service)
        : [...current.service, service]
      return { ...current, service: nextServices }
    })
  }

  const briefFlow = useMemo(() => {
    const sections = [
      {
        id: 'about',
        label: 'Identity',
        fields: ['name', 'email', 'company'],
      },
      {
        id: 'scope',
        label: 'Scope',
        fields: ['service', 'budget', 'timeline'],
      },
      {
        id: 'notes',
        label: 'Notes',
        fields: ['message'],
      },
    ]

    const hasValue = (value) => Array.isArray(value) ? value.length > 0 : value.trim().length > 0
    const completedCount = Object.values(form).filter(hasValue).length
    const totalCount = Object.keys(form).length
    const progress = Math.round((completedCount / totalCount) * 100)
    const hasStarted = completedCount > 0
    const trustMessage = progress >= 92
      ? 'this is going to be something great.'
      : progress >= 78
        ? 'almost ready to bring this to life.'
        : progress >= 61
          ? "clarity is building, we're getting close."
          : progress >= 43
            ? 'your project is already taking shape.'
            : 'start with a few details, we will shape the rest.'
    const activeSection = sections.find((section) => section.fields.includes(activeField))
      ?? sections.find((section) => section.fields.some((field) => !hasValue(form[field])))
      ?? sections[sections.length - 1]

    return {
      activeSectionId: activeSection.id,
      activeSectionLabel: activeSection.label,
      completedCount,
      hasStarted,
      progress,
      trustMessage,
      totalCount,
      sections: sections.map((section) => {
        const filled = section.fields.filter((field) => hasValue(form[field])).length
        return {
          ...section,
          filled,
          total: section.fields.length,
          isComplete: filled === section.fields.length,
        }
      }),
    }
  }, [activeField, form])

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    try {
      await submitLead({ ...form, service: form.service.join(', '), source: 'contact-page' })
      setStatus('success')
      setForm({
        name: '',
        email: '',
        company: '',
        service: [],
        budget: '',
        timeline: '',
        message: '',
      })
      setActiveField('')
    } catch {
      setStatus('error')
    }
  }

  function handleFlowPointerDown(event) {
    if (event.button !== 0) return
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.setPointerCapture(event.pointerId)
    setFlowPosition({ x: rect.left, y: rect.top })
    setFlowDrag({
      isDragging: true,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    })
  }

  function handleFlowPointerMove(event) {
    if (!flowDrag.isDragging) return
    const width = event.currentTarget.offsetWidth
    const height = event.currentTarget.offsetHeight
    const maxX = Math.max(8, window.innerWidth - width - 8)
    const maxY = Math.max(8, window.innerHeight - height - 8)
    const nextX = Math.min(Math.max(8, event.clientX - flowDrag.offsetX), maxX)
    const nextY = Math.min(Math.max(8, event.clientY - flowDrag.offsetY), maxY)
    setFlowPosition({ x: nextX, y: nextY })
  }

  function handleFlowPointerUp(event) {
    if (flowDrag.isDragging) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    setFlowDrag((current) => ({ ...current, isDragging: false }))
  }

  const flowStyle = flowPosition
      ? {
          left: `${flowPosition.x}px`,
          top: `${flowPosition.y}px`,
          right: 'auto',
          bottom: 'auto',
        }
      : undefined

  return (
    <main className="contact-page" id="main-content">
      <SEO meta={meta} />

      <section className="contact-hero">
        <div className="contact-hero__grid" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="contact-hero__line" />
          ))}
        </div>
        <div className="contact-hero__inner">
          <span className="contact-hero__badge">
            <span className="contact-hero__badge-dot" /> Open for projects · 2026
          </span>
          <h1 className="contact-hero__title">
            Tell us what you <span>want to build.</span>
          </h1>
          <p className="contact-hero__lede">
            Share the project goal, timeline, and the kind of creative support your team needs. We respond to every
            brief within one business day.
          </p>
          <dl className="contact-hero__stats">
            <div className="contact-hero__stat contact-hero__stat--highlight">
              <dt>
                <Zap size={12} strokeWidth={2.4} aria-hidden="true" />
                Response time
              </dt>
              <dd>
                <span className="contact-hero__badge-pill">Under 24h</span>
              </dd>
            </div>
            <div className="contact-hero__stat">
              <dt>Project window</dt>
              <dd>6–12 weeks</dd>
            </div>
            <div className="contact-hero__stat">
              <dt>Time zone</dt>
              <dd>IST · GMT+5:30</dd>
            </div>
          </dl>

        </div>
      </section>

      <section className="contact-body" aria-label="Contact form and details">
        <div
          className={`contact-flow${briefFlow.hasStarted ? '' : ' contact-flow--idle'}${flowDrag.isDragging ? ' is-dragging' : ''}`}
          style={flowStyle}
          aria-label="Brief completion progress"
          onPointerDown={handleFlowPointerDown}
          onPointerMove={handleFlowPointerMove}
          onPointerUp={handleFlowPointerUp}
          onPointerCancel={handleFlowPointerUp}
        >
          {briefFlow.hasStarted ? (
            <>
              <div className="contact-flow__head">
                <div className="contact-flow__topline">
                  <span>Brief</span>
                </div>
                <a
                  className="contact-flow__whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chat with us on WhatsApp"
                  onPointerDown={(event) => event.stopPropagation()}
                >
                  <FaWhatsapp aria-hidden="true" />
                  WhatsApp
                  <ArrowUpRight size={12} strokeWidth={2.3} aria-hidden="true" />
                </a>
              </div>
              <div className="contact-flow__summary">
                <div className="contact-flow__percent">
                  <strong>{briefFlow.progress}%</strong>
                  <span>complete</span>
                </div>
                <div className="contact-flow__copy">
                  <p>{briefFlow.trustMessage}</p>
                  <span>
                    {briefFlow.completedCount} of {briefFlow.totalCount} details added
                  </span>
                </div>
              </div>
              <div className="contact-flow__track" aria-hidden="true">
                <span style={{ width: `${briefFlow.progress}%` }} />
              </div>
              <div className="contact-flow__sections" aria-label="Brief section completion">
                {briefFlow.sections.map((section) => (
                  <span
                    key={section.id}
                    className={`contact-flow__section${
                      section.id === briefFlow.activeSectionId ? ' is-active' : ''
                    }${section.isComplete ? ' is-complete' : ''}`}
                  >
                    <span>{section.label}</span>
                    <strong>{section.filled}/{section.total}</strong>
                  </span>
                ))}
              </div>
            </>
          ) : (
            <a
              className="contact-flow__whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat with us on WhatsApp"
              onPointerDown={(event) => event.stopPropagation()}
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp
              <ArrowUpRight size={12} strokeWidth={2.3} aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="contact-body__inner">
          <div className="contact-body__form-wrap">
            <header className="contact-form__header">
              <p className="eyebrow contact-form__eyebrow">Project brief</p>
              <h2>Start the conversation.</h2>
              <p>Every field helps us scope a more honest first reply. Takes about 90 seconds.</p>
            </header>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <fieldset className="contact-form__section">
                <legend>
                  <span className="contact-form__step">
                    <span>(01)</span>
                  </span>
                  About you
                </legend>
                <div className="contact-form__grid">
                  <label className="contact-field">
                    <span className="contact-field__label">Full name</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      placeholder="Jane Doe"
                      required
                      autoComplete="name"
                    />
                  </label>
                  <label className="contact-field">
                    <span className="contact-field__label">Work email</span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      placeholder="jane@company.com"
                      required
                      autoComplete="email"
                    />
                  </label>
                  <label className="contact-field contact-field--wide">
                    <span className="contact-field__label">Company</span>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      onFocus={() => setActiveField('company')}
                      placeholder="Acme Studio"
                      autoComplete="organization"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className="contact-form__section">
                <legend>
                  <span className="contact-form__step">
                    <span>(02)</span>
                  </span>
                  What you need
                </legend>
                <div className="contact-chips" role="group" aria-label="Service of interest">
                  {SERVICE_OPTIONS.map((option) => {
                    const ServiceIcon = SERVICE_ICONS[option]
                    return (
                      <button
                        type="button"
                        key={option}
                        aria-pressed={form.service.includes(option)}
                        className={`contact-chip${form.service.includes(option) ? ' is-active' : ''}`}
                        onClick={() => handleServicePick(option)}
                        onFocus={() => setActiveField('service')}
                      >
                        <ServiceIcon size={13} strokeWidth={2.2} aria-hidden="true" />
                        {option}
                      </button>
                    )
                  })}
                </div>
                <div className="contact-form__grid">
                  <label className="contact-field">
                    <span className="contact-field__label">Budget</span>
                    <select name="budget" value={form.budget} onChange={handleChange} onFocus={() => setActiveField('budget')}>
                      <option value="">Select a range</option>
                      {BUDGET_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="contact-field">
                    <span className="contact-field__label">Timeline</span>
                    <select name="timeline" value={form.timeline} onChange={handleChange} onFocus={() => setActiveField('timeline')}>
                      <option value="">When to start</option>
                      {TIMELINE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </fieldset>

              <fieldset className="contact-form__section">
                <legend>
                  <span className="contact-form__step">
                    <span>(03)</span>
                  </span>
                  Project notes
                </legend>
                <label className="contact-field">
                  <span className="contact-field__label">Tell us about the project</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    required
                    rows="6"
                    maxLength="1200"
                    placeholder="Example: We're building a fintech app for Gen Z — need brand, website, and a simple product UI. Launching in June."
                  />
                  <span
                    className={`contact-field__counter${
                      form.message.length > 1080
                        ? ' contact-field__counter--warn'
                        : form.message.length > 0
                          ? ' contact-field__counter--active'
                          : ''
                    }`}
                  >
                    <strong>{form.message.length.toString().padStart(4, '0')}</strong>
                    <span aria-hidden="true">/</span>
                    1200 characters
                  </span>
                </label>
              </fieldset>

              <div className="contact-form__footer">
                <button type="submit" className="contact-form__submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>Sending…</>
                  ) : (
                    <>
                      Send brief
                      <Send size={16} strokeWidth={2.2} aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="contact-form__consent">
                  By submitting you agree to a short reply from our studio team. We don&apos;t share your details.
                </p>
              </div>

              <div className="contact-form__status" role="status" aria-live="polite">
                {status === 'success' ? (
                  <p className="contact-form__alert contact-form__alert--success">
                    <CheckCircle2 size={16} strokeWidth={2.2} aria-hidden="true" />
                    Brief received. We&apos;ll reply within one business day.
                  </p>
                ) : null}
                {status === 'error' ? (
                  <p className="contact-form__alert contact-form__alert--error">
                    Something went wrong. Please email us at hello@designagency.local and we&apos;ll jump in.
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <aside className="contact-side" aria-label="Studio contact">
            <div className="contact-card contact-card--primary">
              <p className="contact-card__eyebrow">
                <span className="contact-card__eyebrow-dot" /> Live
              </p>
              <h3>Talk to a human, not a form.</h3>
              <p>
                We read every brief personally. If you&apos;d rather have a 20-minute call, drop a note and we&apos;ll
                put time on the calendar.
              </p>
              <a className="contact-card__cta" href="mailto:hello@designagency.local">
                hello@designagency.local
                <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>

            <ul className="contact-channels">
              <li>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </li>
              <li>
                <div>
                  <strong>WhatsApp</strong>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <strong>Studio chat</strong>
                  <span>Mon–Fri, 10:00 – 18:30 IST</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Studio</strong>
                  <span>SMVEC campus, Puducherry, India</span>
                </div>
              </li>
            </ul>

            <div className="contact-card contact-card--calendar">
              <span className="contact-card__icon"><Calendar size={18} strokeWidth={2.2} aria-hidden="true" /></span>
              <h4>Prefer a call?</h4>
              <p>Book a 20-minute intro with a studio lead — no slides, no sales deck.</p>
              <Link to="/aboutus" className="contact-card__link">
                Book a call <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>

            <div className="contact-availability">
              <span className="contact-availability__pulse" aria-hidden="true" />
              <div>
                <strong>Taking on 2 new projects</strong>
                <span>Next opening — April 2026</span>
              </div>
              <Clock size={14} strokeWidth={2.2} aria-hidden="true" />
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-faq" aria-label="Frequent questions">
        <div className="contact-faq__inner">
          <div className="contact-faq__heading">
            <p className="eyebrow">Before you ask</p>
            <h2>Three questions we hear a lot.</h2>
          </div>
          <ul className="contact-faq__list">
            <li>
              <h3>What size projects do you take?</h3>
              <p>Anything from a focused landing page to a full brand and product launch. We scope honestly.</p>
            </li>
            <li>
              <h3>How fast can you start?</h3>
              <p>Usually within 2–3 weeks. For urgent launches we keep a small buffer for rapid-start clients.</p>
            </li>
            <li>
              <h3>Do you work with in-house teams?</h3>
              <p>Often. We plug in alongside your designers and engineers, with clear hand-off at the end.</p>
            </li>
          </ul>
        </div>
      </section>

    </main>
  )
}

export default ContactUs
