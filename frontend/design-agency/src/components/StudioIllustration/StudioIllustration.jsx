function StudioIllustration({ className = '' }) {
  const classes = ['studio-illustration', className].filter(Boolean).join(' ')

  return (
    <svg
      className={classes}
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Designer reading in a studio chair"
    >
      <path className="studio-illustration__paper" d="M0 24 175 0h345v360H0V24Z" />
      <path className="studio-illustration__panel" d="M91 68c4-27 17-36 43-31l328 58c18 3 26 13 24 31l-27 244H61L91 68Z" />
      <path className="studio-illustration__floor" d="M78 310h330" />

      <g className="studio-illustration__lamp">
        <path d="M254 64h29v76" />
        <path className="studio-illustration__lamp-shade" d="M239 135 269 105l37 30v12h-67v-12Z" />
        <path className="studio-illustration__lamp-glow" d="M246 149h54" />
      </g>

      <g className="studio-illustration__plant">
        <path className="studio-illustration__side-table" d="M358 194h60v95h-60z" />
        <path className="studio-illustration__pot" d="M382 216h46l-8 61h-32l-6-61Z" />
        <path d="M405 216c-12-29 0-52 28-68" />
        <path d="M408 216c9-28 33-34 52-21" />
        <path d="M404 216c-10-24-31-31-50-18" />
        <path className="studio-illustration__leaf" d="M432 150c18 4 25 18 15 34-18-3-25-18-15-34Z" />
        <path className="studio-illustration__leaf" d="M456 197c-14 13-31 12-43-1 14-14 31-13 43 1Z" />
        <path className="studio-illustration__leaf" d="M356 199c18-9 34-4 41 13-18 9-34 4-41-13Z" />
      </g>

      <g className="studio-illustration__chair">
        <path className="studio-illustration__chair-seat" d="M139 182h203c16 0 29 13 29 29v45H118v-54c0-12 9-20 21-20Z" />
        <path className="studio-illustration__chair-arm" d="M103 221c0-22 17-39 39-39h28v74h-67v-35Z" />
        <path className="studio-illustration__chair-arm" d="M339 183h31c16 0 28 12 28 28v45h-59v-73Z" />
        <path d="M132 256v54M382 256v54" />
        <path d="M119 310h45M361 310h45" />
      </g>

      <g className="studio-illustration__person">
        <path className="studio-illustration__neck" d="M304 125v31h-30v-31" />
        <path className="studio-illustration__head" d="M276 81c20-9 45 1 53 21 8 22-5 46-27 52-22 5-43-8-48-30-4-17 4-33 22-43Z" />
        <path className="studio-illustration__face-line" d="M263 119c7 0 13-2 19-7" />
        <path className="studio-illustration__hair" d="M255 109c7-34 29-50 66-42 14 3 25 10 33 19-21 1-35 8-43 22-13-7-26-10-39-5-8 3-14 6-17 6Z" />
        <path className="studio-illustration__shirt" d="M232 153c21-17 86-17 108 1 17 15 21 47 15 80H216c-5-38 1-66 16-81Z" />
        <path d="M255 160c8 20 10 46 7 75M314 159c-7 20-11 45-9 73" />
        <path className="studio-illustration__arm" d="M222 177c-15 12-24 32-29 57l49 7 13-34" />
        <path className="studio-illustration__arm" d="M337 174c23 11 34 34 37 58l-48 9-14-31" />
        <path className="studio-illustration__book-back" d="M151 189h67l31 68h-74l-24-68Z" />
        <path className="studio-illustration__book-front" d="M156 197h60l26 51h-67l-19-51Z" />
        <path d="M184 209h32M189 222h29" />
        <path className="studio-illustration__hand" d="M234 229c12-5 22-1 29 8-9 7-20 7-31-2" />
        <path className="studio-illustration__hand" d="M323 229c10-7 21-6 29 3-7 9-17 11-30 4" />
        <path
          className="studio-illustration__pants"
          d="M216 238c38 6 75 11 112 17l-63 68h-48l34-44-101-22c-20-6-32-17-38-34l27-16c19 18 47 28 77 31Z"
        />
        <path
          className="studio-illustration__pants"
          d="M299 252c26 18 45 37 59 55l-39 20c-18-17-39-37-62-59l42-16Z"
        />
        <path className="studio-illustration__shoe" d="M207 321h54c-8 15-23 21-44 17l-28-6 18-11Z" />
        <path className="studio-illustration__shoe" d="M317 323h52c-9 13-25 18-45 14l-23-5 16-9Z" />
      </g>
    </svg>
  )
}

export default StudioIllustration
