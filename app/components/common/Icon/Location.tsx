import { Iconable } from '~/types'

function Location(props: Iconable) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke={props?.stroke || 'currentColor'}
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            ></path>
        </svg>
    )
}

export default Location
