import React from 'react'

interface EyeProps {
  top?: number
  left?: number
  state?: 'open' | 'pinch' | 'close'
}

export const Eye: React.FunctionComponent<EyeProps> = ({
  left = 0,
  state,
  top = 0,
}) => {
  const open = React.useRef<SVGElement>(null)
  const pinch = React.useRef<SVGElement>(null)
  const close = React.useRef<SVGElement>(null)

  React.useEffect(() => {
    switch (state) {
      case 'pinch':
        pinch.current?.beginElement()
        return
      case 'close':
        close.current?.beginElement()
        return
      case 'open':
      default:
        open.current?.beginElement()
    }
  }, [state])

  return (
    <g id="Eye" transform={`translate(${left}, ${top})`}>
      <circle cx="9" cy="9" fill="#FFFFFF" id="Eyeball" r="8"></circle>
      <circle cx="9" cy="9" fill="#4C4C4C" id="Pupil" r="4"></circle>
      <path
        d="M9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 Z M9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 Z"
        fill="#EDB98A"
        id="Lid"
      >
        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={open}
          to="M9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 Z M9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 Z"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={pinch}
          to="M9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 Z M9,5.4 C4.52649353,5.4 1,7.22649353 1,9 C1,10.7735065 4.52649353,12.6 9,12.6 C13.4735065,12.6 17,10.7735065 17,9 C17,7.22649353 13.4735065,5.4 9,5.4 Z"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={close}
          to="M9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 Z M9,7.5 C5.52649353,7.5 1,8.5 1,9 C1,9.5 4.52649353,8 9,8 C13.4735065,8 17,9.5 17,9 C17,8.5 12.4735065,7.5 9,7.5 Z"
        />
      </path>
    </g>
  )
}
