import { Iconable } from '~/types'

function Plus(props: Iconable) {
    return (
        <svg
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-4"
            {...props}
        >
            <g clipPath="url(#clip0_3121_178804)">
                <path
                    d="M11.8802 6.25876V7.83511C11.8802 8.05405 11.8036 8.24015 11.6504 8.39341C11.4971 8.54666 11.311 8.62329 11.0921 8.62329H7.67663V12.0387C7.67663 12.2577 7.60001 12.4438 7.44675 12.597C7.29349 12.7503 7.10739 12.8269 6.88846 12.8269H5.3121C5.09316 12.8269 4.90707 12.7503 4.75381 12.597C4.60055 12.4438 4.52392 12.2577 4.52392 12.0387V8.62329H1.10849C0.889552 8.62329 0.703454 8.54666 0.550198 8.39341C0.396941 8.24015 0.320312 8.05405 0.320312 7.83511V6.25876C0.320312 6.03982 0.396941 5.85372 0.550198 5.70047C0.703454 5.54721 0.889552 5.47058 1.10849 5.47058H4.52392V2.05515C4.52392 1.83621 4.60055 1.65011 4.75381 1.49686C4.90707 1.3436 5.09316 1.26697 5.3121 1.26697H6.88846C7.10739 1.26697 7.29349 1.3436 7.44675 1.49686C7.60001 1.65011 7.67663 1.83621 7.67663 2.05515V5.47058H11.0921C11.311 5.47058 11.4971 5.54721 11.6504 5.70047C11.8036 5.85372 11.8802 6.03982 11.8802 6.25876Z"
                    fill={props.fill || 'black'}
                />
            </g>
            <defs>
                <clipPath id="clip0_3121_178804">
                    <rect
                        width="11.8"
                        height="15"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.200195 15.2166)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Plus
