import { Iconable } from '~/types'

function Close(props: Iconable) {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="13.5156"
        y1="25.5858"
        x2="25.1075"
        y2="13.9939"
        stroke="#9D7853"
        strokeWidth={2}
        strokeLinecap="round"
        {...props}
      />
      <line
        x1="13.9298"
        y1={14}
        x2="25.5217"
        y2="25.5918"
        stroke="#9D7853"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Close
