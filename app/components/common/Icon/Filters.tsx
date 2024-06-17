import { Iconable } from '~/types'

function Filters(props: Iconable) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 24"
            fill="none"
            className="w-4 h-4"
            {...props}
        >
            <path
                d="M12.2187 6.37627V4.09424C12.2187 3.90361 12.1429 3.7208 12.0081 3.58601C11.8733 3.45121 11.6905 3.37549 11.4999 3.37549C11.3093 3.37549 11.1265 3.45121 10.9917 3.58601C10.8569 3.7208 10.7812 3.90361 10.7812 4.09424V6.37627C10.3624 6.52591 10.0002 6.80134 9.74415 7.16483C9.48805 7.52832 9.35059 7.96209 9.35059 8.40674C9.35059 8.85138 9.48805 9.28516 9.74415 9.64865C10.0002 10.0121 10.3624 10.2876 10.7812 10.4372V19.9067C10.7812 20.0974 10.8569 20.2802 10.9917 20.415C11.1265 20.5498 11.3093 20.6255 11.4999 20.6255C11.6905 20.6255 11.8733 20.5498 12.0081 20.415C12.1429 20.2802 12.2187 20.0974 12.2187 19.9067V10.4372C12.6374 10.2876 12.9996 10.0121 13.2557 9.64865C13.5118 9.28516 13.6492 8.85138 13.6492 8.40674C13.6492 7.96209 13.5118 7.52832 13.2557 7.16483C12.9996 6.80134 12.6374 6.52591 12.2187 6.37627Z"
                fill={props?.fill || 'currentColor'}
            />
            <path
                d="M20.1249 15.5942C20.1244 15.1488 19.9859 14.7144 19.7285 14.3508C19.4711 13.9872 19.1074 13.7123 18.6874 13.5638V4.09424C18.6874 3.90361 18.6117 3.7208 18.4769 3.58601C18.3421 3.45121 18.1593 3.37549 17.9687 3.37549C17.778 3.37549 17.5952 3.45121 17.4604 3.58601C17.3256 3.7208 17.2499 3.90361 17.2499 4.09424V13.5638C16.8312 13.7134 16.469 13.9888 16.2129 14.3523C15.9568 14.7158 15.8193 15.1496 15.8193 15.5942C15.8193 16.0389 15.9568 16.4727 16.2129 16.8361C16.469 17.1996 16.8312 17.4751 17.2499 17.6247V19.9067C17.2499 20.0974 17.3256 20.2802 17.4604 20.415C17.5952 20.5498 17.778 20.6255 17.9687 20.6255C18.1593 20.6255 18.3421 20.5498 18.4769 20.415C18.6117 20.2802 18.6874 20.0974 18.6874 19.9067V17.6247C19.1074 17.4762 19.4711 17.2013 19.7285 16.8377C19.9859 16.4741 20.1244 16.0397 20.1249 15.5942Z"
                fill={props?.fill || 'currentColor'}
            />
            <path
                d="M5.74991 10.6888V4.09424C5.74991 3.90361 5.67418 3.7208 5.53939 3.58601C5.4046 3.45121 5.22178 3.37549 5.03116 3.37549C4.84053 3.37549 4.65772 3.45121 4.52292 3.58601C4.38813 3.7208 4.31241 3.90361 4.31241 4.09424V10.6888C3.8937 10.8384 3.53149 11.1138 3.27539 11.4773C3.0193 11.8408 2.88184 12.2746 2.88184 12.7192C2.88184 13.1639 3.0193 13.5977 3.27539 13.9611C3.53149 14.3246 3.8937 14.6001 4.31241 14.7497V19.9067C4.31241 20.0974 4.38813 20.2802 4.52292 20.415C4.65772 20.5498 4.84053 20.6255 5.03116 20.6255C5.22178 20.6255 5.4046 20.5498 5.53939 20.415C5.67418 20.2802 5.74991 20.0974 5.74991 19.9067V14.7497C6.16861 14.6001 6.53082 14.3246 6.78692 13.9611C7.04301 13.5977 7.18048 13.1639 7.18048 12.7192C7.18048 12.2746 7.04301 11.8408 6.78692 11.4773C6.53082 11.1138 6.16861 10.8384 5.74991 10.6888Z"
                fill={props?.fill || 'currentColor'}
            />
        </svg>
    )
}

export default Filters
