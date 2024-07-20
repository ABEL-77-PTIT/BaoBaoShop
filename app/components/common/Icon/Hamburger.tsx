import { Iconable } from '~/types'

export default function Hamburger(props: Iconable) {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="11.75"
        y1={13}
        x2="28.1434"
        y2={13}
        stroke="#9D7853"
        strokeWidth={2}
        strokeLinecap="round"
        {...props}
      />
      <line
        x1="11.75"
        y1={19}
        x2="28.1434"
        y2={19}
        stroke="#9D7853"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <line
        x1="11.75"
        y1={25}
        x2="28.1434"
        y2={25}
        stroke="#9D7853"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}
