import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Diamond,
  FileText,
  HelpCircle,
  Layers3,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  Quote,
  Rocket,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
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
  'Under ₹5L',
  '₹5L – ₹15L',
  '₹15L – ₹40L',
  '₹40L – ₹80L',
  '₹80L+',
]

const TIMELINE_OPTIONS = ['ASAP', '1 month', '2–3 months', 'Later this year', 'Flexible']

const FAQ_ITEMS = [
  {
    label: 'Project size',
    question: 'What size projects do you take?',
    answer: 'Anything from a focused landing page to a full brand and product launch. We scope honestly.',
  },
  {
    label: 'Start date',
    question: 'How fast can you start?',
    answer: 'Usually within 2–3 weeks. For urgent launches we keep a small buffer for rapid-start clients.',
  },
  {
    label: 'Team fit',
    question: 'Do you work with in-house teams?',
    answer: 'Often. We plug in alongside your designers and engineers, with clear hand-off at the end.',
  },
]

const TESTIMONIALS = [
  {
    id: 't1',
    quotePre: 'I run into so many roadblocks internally. I go to Clockwork to help find my',
    highlight: '“Yes”',
    quotePost: '.',
    name: 'VP, Brand & Digital Strategy',
    role: 'Fortune 500 · Financial Services',
    logoMark: 'BR',
    logoName: 'Bluerock Capital',
  },
  {
    id: 't2',
    quotePre: 'They made the impossible feel',
    highlight: 'inevitable',
    quotePost: ' — our rebrand shipped weeks ahead of plan and finally sounds like us.',
    name: 'Head of Marketing',
    role: 'Series B · Health & Wellness',
    logoMark: 'AH',
    logoName: 'Aura Health',
  },
  {
    id: 't3',
    quotePre: 'The calmest, most',
    highlight: 'honest',
    quotePost: ' studio we have ever worked with. They tell you what actually moves the needle.',
    name: 'Founder & CEO',
    role: 'Early stage · Developer tools',
    logoMark: 'SG',
    logoName: 'Signal.dev',
  },
]

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
  const [openFaq, setOpenFaq] = useState(0)
  const [voiceIndex, setVoiceIndex] = useState(0)
  const activeVoice = TESTIMONIALS[voiceIndex]
  const voiceTotal = TESTIMONIALS.length

  useEffect(() => {
    getSeo('/contactus').then(setMeta)
  }, [])

  useEffect(() => {
    const id = setTimeout(() => {
      setOpenFaq((i) => (i + 1) % FAQ_ITEMS.length)
    }, 5000)
    return () => clearTimeout(id)
  }, [openFaq])

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
            <span key={i} className="contact-hero__line">
              <span className="contact-hero__line-inner" />
            </span>
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

      <section className="contact-body" aria-label="Contact form and details">
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

            <div className="contact-console" role="group" aria-label="Direct channels">
              <div className="contact-console__head">
                <span className="contact-console__pulse" aria-hidden="true" />
                <span className="contact-console__title">Direct channels</span>
                <span className="contact-console__meta" aria-hidden="true">04</span>
              </div>
              <ul className="contact-console__list">
                <li className="contact-console__row">
                  <span className="contact-console__icon" aria-hidden="true">
                    <Phone size={14} strokeWidth={2.2} />
                  </span>
                  <span className="contact-console__label">Phone</span>
                  <a className="contact-console__value" href="tel:+919876543210">
                    +91 98765 43210
                    <ArrowUpRight size={12} strokeWidth={2.4} aria-hidden="true" />
                  </a>
                </li>
                <li className="contact-console__row">
                  <span className="contact-console__icon contact-console__icon--whatsapp" aria-hidden="true">
                    <FaWhatsapp />
                  </span>
                  <span className="contact-console__label">WhatsApp</span>
                  <a
                    className="contact-console__value"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    +91 98765 43210
                    <ArrowUpRight size={12} strokeWidth={2.4} aria-hidden="true" />
                  </a>
                </li>
                <li className="contact-console__row">
                  <span className="contact-console__icon" aria-hidden="true">
                    <MessageSquare size={14} strokeWidth={2.2} />
                  </span>
                  <span className="contact-console__label">Studio chat</span>
                  <span className="contact-console__value contact-console__value--static">
                    Mon–Fri · 10:00–18:30 IST
                  </span>
                </li>
                <li className="contact-console__row">
                  <span className="contact-console__icon" aria-hidden="true">
                    <MapPin size={14} strokeWidth={2.2} />
                  </span>
                  <span className="contact-console__label">Studio</span>
                  <span className="contact-console__value contact-console__value--static">
                    SMVEC · Puducherry, IN
                  </span>
                </li>
              </ul>
            </div>

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

      <section className="contact-voice" aria-label="Client testimonial">
        <div className="contact-voice__paper" aria-hidden="true" />
        <svg className="contact-voice__doodle contact-voice__doodle--tl" viewBox="0 0 110 70" aria-hidden="true">
          <path
            d="M6 52 C 24 10, 58 4, 100 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M88 10 L100 16 L94 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg className="contact-voice__doodle contact-voice__doodle--br" viewBox="0 0 140 70" aria-hidden="true">
          <path
            d="M6 20 C 34 8, 70 46, 134 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="12" cy="52" r="2.2" fill="currentColor" />
          <circle cx="28" cy="58" r="1.6" fill="currentColor" opacity="0.7" />
        </svg>

        <div className="contact-voice__inner">
          <div className="contact-voice__head">
            <span className="contact-voice__eyebrow">
              <span className="contact-voice__eyebrow-rule" aria-hidden="true" />
              From the studio notebook
            </span>
            <span className="contact-voice__index">
              No. {String(voiceIndex + 1).padStart(2, '0')}
              <span className="contact-voice__index-divider" aria-hidden="true">/</span>
              {String(voiceTotal).padStart(2, '0')}
            </span>
          </div>

          <figure className="contact-voice__figure" key={activeVoice.id}>
            <svg className="contact-voice__mark" viewBox="0 0 70 52" aria-hidden="true">
              <path
                d="M10 18 C 6 26, 8 38, 22 42 M10 18 C 14 10, 24 8, 28 16 C 31 23, 27 30, 20 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M40 18 C 36 26, 38 38, 52 42 M40 18 C 44 10, 54 8, 58 16 C 61 23, 57 30, 50 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <blockquote className="contact-voice__quote">
              <p>
                {activeVoice.quotePre}
                {' '}
                <span className="contact-voice__highlight">
                  {activeVoice.highlight}
                  <svg className="contact-voice__swoosh" viewBox="0 0 160 26" aria-hidden="true">
                    <path
                      d="M4 18 C 30 6, 72 24, 118 10 C 132 5, 144 8, 156 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                {activeVoice.quotePost}
              </p>
            </blockquote>

            <figcaption className="contact-voice__cite">
              <div className="contact-voice__logo" aria-label={activeVoice.logoName}>
                <span className="contact-voice__logo-mark" aria-hidden="true">
                  {activeVoice.logoMark}
                </span>
                <span className="contact-voice__logo-name">{activeVoice.logoName}</span>
              </div>
              <div className="contact-voice__who">
                <span className="contact-voice__sign">— {activeVoice.name}</span>
                <span className="contact-voice__role">{activeVoice.role}</span>
              </div>
              <span className="contact-voice__heart" aria-hidden="true">
                <svg viewBox="0 0 28 26">
                  <path
                    d="M14 22 C 14 22, 3 15, 3 8.5 C 3 5, 5.6 2.6, 8.7 2.6 C 11 2.6, 12.9 4, 14 6.2 C 15.1 4, 17 2.6, 19.3 2.6 C 22.4 2.6, 25 5, 25 8.5 C 25 15, 14 22, 14 22 Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="contact-voice__heart-label">Loved by clients</span>
              </span>
            </figcaption>
          </figure>

          <nav className="contact-voice__nav" aria-label="Testimonial navigation">
            <button
              type="button"
              className="contact-voice__nav-btn"
              onClick={() => setVoiceIndex((i) => (i - 1 + voiceTotal) % voiceTotal)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <ol className="contact-voice__pager" role="tablist">
              {TESTIMONIALS.map((t, i) => (
                <li key={t.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === voiceIndex}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`contact-voice__dot${i === voiceIndex ? ' is-active' : ''}`}
                    onClick={() => setVoiceIndex(i)}
                  />
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="contact-voice__nav-btn"
              onClick={() => setVoiceIndex((i) => (i + 1) % voiceTotal)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </section>

      <section className="contact-faq" aria-label="Frequent questions">
        <div className="contact-faq__inner">
          <div className="contact-faq__copy">
            <p className="contact-faq__eyebrow">
              <span><HelpCircle size={11} strokeWidth={2.4} aria-hidden="true" /> Before you ask</span>
            </p>
            <h2 className="contact-faq__title">
              Three questions <span>we hear a lot.</span>
            </h2>
            <p className="contact-faq__lede">
              Quick answers to help you scope your project with confidence — ask us anything else in the form.
            </p>
            <ul className="contact-faq__perks" aria-label="What these answers cover">
              <li>
                <span className="contact-faq__perk-icon"><Layers3 size={14} strokeWidth={2} aria-hidden="true" /></span>
                <span className="contact-faq__perk-label">Project scope</span>
              </li>
              <li>
                <span className="contact-faq__perk-icon"><Clock size={14} strokeWidth={2} aria-hidden="true" /></span>
                <span className="contact-faq__perk-label">Timelines</span>
              </li>
              <li>
                <span className="contact-faq__perk-icon"><Users size={14} strokeWidth={2} aria-hidden="true" /></span>
                <span className="contact-faq__perk-label">Team fit</span>
              </li>
            </ul>
          </div>
          <div
            className="contact-faq__carousel"
            style={{ '--faq-count': FAQ_ITEMS.length, '--faq-active': Math.max(openFaq, 0) }}
          >
            <div className="contact-faq__stage">
              <div
                className="contact-faq__slides"
                style={{ transform: `translateX(calc(var(--faq-active) * -100% / var(--faq-count, 3)))` }}
              >
                {FAQ_ITEMS.map((item, i) => {
                  const isActive = openFaq === i
                  return (
                    <article
                      key={item.question}
                      aria-hidden={!isActive}
                      className={`contact-faq__slide${isActive ? ' is-active' : ''}`}
                    >
                      <span className="contact-faq__slide-vector" aria-hidden="true">
                        {i === 0 && (
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 41 Q24 42 43 41" strokeWidth="2.4" />
                            <path d="M10 41 Q10 35 11 32 Q13 30 14 32 Q15 35 14 41" strokeWidth="2.4" />
                            <path d="M21 41 Q21 28 22 24 Q24 22 25 24 Q26 28 25 41" strokeWidth="2.4" />
                            <path d="M32 41 Q32 18 33 11 Q35 9 36 11 Q37 20 36 41" strokeWidth="2.4" />
                            <path d="M40 12 L41 7" strokeWidth="1.6" opacity="0.6" />
                            <path d="M37 8 L40 6" strokeWidth="1.6" opacity="0.6" />
                          </svg>
                        )}
                        {i === 1 && (
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              d="M24 10 C33 10 39 16 40 24 C41 33 35 40 26 40 C17 40 9 34 8 25 C7 16 15 10 24 10 Z"
                              strokeWidth="2.4"
                            />
                            <path d="M19 7 Q24 6 29 7" strokeWidth="2.2" />
                            <path d="M24 25 L24 17" strokeWidth="2.4" />
                            <path d="M24 25 L30 29" strokeWidth="2.4" />
                            <circle cx="24" cy="25" r="1.4" fill="currentColor" />
                            <path d="M42 13 L45 10" strokeWidth="1.6" opacity="0.55" />
                            <path d="M5 13 L3 10" strokeWidth="1.6" opacity="0.55" />
                          </svg>
                        )}
                        {i === 2 && (
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              d="M16 14 C20 13 21 17 20 20 C19 22 15 22 14 19 C13 16 13 14 16 14 Z"
                              strokeWidth="2.2"
                            />
                            <path d="M6 36 Q9 24 16 24 Q23 24 25 36" strokeWidth="2.2" />
                            <path
                              d="M33 14 C37 13 38 17 37 20 C36 22 32 22 31 19 C30 16 30 14 33 14 Z"
                              strokeWidth="2.2"
                            />
                            <path d="M22 36 Q25 24 32 24 Q39 24 42 36" strokeWidth="2.2" />
                            <path d="M19 29 Q24 25 29 29" strokeWidth="1.8" strokeDasharray="1.5 3" />
                            <path d="M24 7 L24 4" strokeWidth="1.6" opacity="0.6" />
                            <path d="M20 8 L18 5" strokeWidth="1.6" opacity="0.6" />
                            <path d="M28 8 L30 5" strokeWidth="1.6" opacity="0.6" />
                          </svg>
                        )}
                      </span>
                      <h3 className="contact-faq__slide-question">{item.question}</h3>
                      <p className="contact-faq__slide-answer">{item.answer}</p>
                    </article>
                  )
                })}
              </div>
            </div>
            <ul className="contact-faq__dots" role="tablist" aria-label="FAQ navigation">
              {FAQ_ITEMS.map((item, i) => {
                const isActive = openFaq === i
                return (
                  <li key={item.question}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Show question ${i + 1}: ${item.label}`}
                      className={`contact-faq__dot${isActive ? ' is-active' : ''}`}
                      onClick={() => setOpenFaq(i)}
                    >
                      <span className="visually-hidden">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}

export default ContactUs
