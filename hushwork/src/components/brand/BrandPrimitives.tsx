// Shared brand vectors used in navigation, benefit core, closing CTA, and footer.
export function HushworkMark() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true" className="mark">
      <path className="mark__route mark__stem" d="M23.35 5.4v19.75" fill="none" stroke="currentColor" strokeWidth="4.7" strokeLinecap="round" />
      <path className="mark__route mark__branch mark__branch--upper" d="M10.15 9.6v4.55c0 3.2 2.6 5.8 5.8 5.8h.55c2.85 0 5.15 2.15 5.15 4.8" fill="none" stroke="currentColor" strokeWidth="4.7" strokeLinecap="round" strokeLinejoin="round" />
      <path className="mark__route mark__branch mark__branch--lower" d="M10.15 28.6v-4.7c0-3.2 2.6-5.8 5.8-5.8" fill="none" stroke="currentColor" strokeWidth="4.7" strokeLinecap="round" strokeLinejoin="round" />
      <rect className="mark__endpoint" x="20.75" y="27.25" width="5.2" height="5.2" rx="1.55" fill="currentColor" />
    </svg>
  )
}

export function ArrowUpRight() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.2 12.8 12.8 3.2M5 3.2h7.8V11" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
