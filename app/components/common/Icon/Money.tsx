type Props = {
  [key: string]: any
}

function Money(props: Props) {
  return (
    <span {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        fill="none"
        viewBox="0 0 29 29"
      >
        <path
          fill="#252525"
          d="M26.478 8.4v14.85H4.603v-2.97H3.145V6.916H23.56v1.485h2.917zm-5.834 0a1.46 1.46 0 00.422 1.045c.13.131.285.24.467.325.182.085.372.123.57.116V8.4h-1.459zM4.604 9.887c.205 0 .395-.039.57-.116a1.46 1.46 0 00.455-.313c.13-.132.236-.29.32-.476.083-.186.12-.38.113-.58H4.603v1.485zm0 5.94c.402 0 .778.076 1.128.231.35.155.66.367.934.638.273.27.482.584.627.94.144.355.22.742.228 1.16h11.666c0-.41.076-.793.228-1.149.152-.355.36-.672.627-.95.265-.28.573-.492.922-.639a3.06 3.06 0 011.14-.232v-4.454c-.403 0-.779-.078-1.128-.232a3.103 3.103 0 01-.934-.638 2.778 2.778 0 01-.627-.94 3.215 3.215 0 01-.228-1.16H7.52c0 .41-.076.793-.228 1.148-.152.356-.361.673-.627.952a2.726 2.726 0 01-.923.638c-.35.147-.729.224-1.14.232v4.454zm17.5 1.484a1.39 1.39 0 00-.57.116 1.459 1.459 0 00-.456.313c-.129.132-.235.29-.319.476a1.277 1.277 0 00-.113.58h1.458V17.31zm-17.5 1.485H6.06a1.462 1.462 0 00-.421-1.044 1.586 1.586 0 00-.467-.325 1.215 1.215 0 00-.57-.116v1.485zm20.416-8.91h-1.458V20.28h-17.5v1.485H25.02V9.885zM8.25 14.34a.695.695 0 01-.513-.22.72.72 0 01-.216-.522.72.72 0 01.216-.522.695.695 0 01.513-.22c.197 0 .368.073.512.22a.72.72 0 01.217.522.72.72 0 01-.217.522.695.695 0 01-.512.22zm10.208 0a.695.695 0 01-.513-.22.72.72 0 01-.216-.522.72.72 0 01.216-.522.695.695 0 01.513-.22c.197 0 .368.073.513.22a.72.72 0 01.216.522.72.72 0 01-.216.522.695.695 0 01-.513.22zm-5.104 2.97c-.403 0-.779-.077-1.128-.232a3.1 3.1 0 01-.934-.638 2.779 2.779 0 01-.627-.94 3.213 3.213 0 01-.228-1.16v-1.485c0-.41.076-.792.228-1.148.152-.356.36-.673.627-.951.265-.279.573-.491.922-.638.35-.147.73-.225 1.14-.232.402 0 .778.077 1.128.232.35.154.66.367.934.638.274.27.482.584.627.94.144.355.22.742.227 1.16v1.484c0 .41-.075.793-.227 1.149-.152.355-.361.672-.627.95a2.724 2.724 0 01-.923.639 3.06 3.06 0 01-1.14.232zm-1.458-2.97a1.46 1.46 0 00.421 1.044c.13.132.285.24.467.325.183.085.372.124.57.116.205 0 .395-.039.57-.116a1.46 1.46 0 00.455-.313c.13-.132.236-.29.32-.476.083-.185.12-.379.113-.58v-1.485a1.462 1.462 0 00-.421-1.044 1.586 1.586 0 00-.468-.324 1.215 1.215 0 00-.57-.116 1.39 1.39 0 00-.569.116 1.459 1.459 0 00-.455.313c-.13.131-.236.29-.32.475a1.277 1.277 0 00-.113.58v1.485z"
        ></path>
      </svg>
    </span>
  )
}

export default Money
