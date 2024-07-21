import { Iconable } from '~/types'

function Star(props: Iconable = {}) {
  return (
    <span {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="18"
        fill="none"
        viewBox="0 0 17 18"
      >
        <path
          fill={props?.fill || '#000000'}
          d="M15.884 6.685a1.09 1.09 0 00-.97-.758l-3.944-.272L9.51 1.97a1.089 1.089 0 00-1.01-.691 1.09 1.09 0 00-1.01.69L6.004 5.676l-3.918.252a1.096 1.096 0 00-.97.758 1.116 1.116 0 00.346 1.201l3.015 2.55-.897 3.527a1.229 1.229 0 00.465 1.301 1.195 1.195 0 001.335.04l3.114-1.972h.014l3.353 2.118c.172.112.373.172.578.173a1.094 1.094 0 001.049-1.381l-.95-3.859 3.002-2.497a1.116 1.116 0 00.345-1.201z"
        ></path>
      </svg>
    </span>
  )
}

export default Star
