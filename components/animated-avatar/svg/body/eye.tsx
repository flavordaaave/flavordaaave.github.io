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
  const open = React.useRef(null)
  const pinch = React.useRef(null)
  const close = React.useRef(null)

  React.useEffect(() => {
    switch (state) {
      case 'pinch':
        return pinch.current?.beginElement()
      case 'close':
        return close.current?.beginElement()
      case 'open':
      default:
        return open.current?.beginElement()
    }
  }, [state])

  return (
    <g id="Eye" transform={`translate(${left}, ${top})`}>
      <circle cx="10" cy="10" fill="#FFFFFF" r="9" />
      <circle cx="10" cy="10" fill="#4C4C4C" r="5" />
      <path
        d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 Z"
        fill="#EDB98A"
        id="Lid"
      >
        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={open}
          to="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1 C5.02943725,1 1,5.02943725 1,10 C1,14.9705627 5.02943725,19 10,19 C14.9705627,19 19,14.9705627 19,10 C19,5.02943725 14.9705627,1 10,1 Z"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={pinch}
          to="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,6 C5.02943725,6 1,8.02943725 1,10 C1,11.9705627 5.02943725,14 10,14 C14.9705627,14 19,11.9705627 19,10 C19,8.02943725 14.9705627,6 10,6 Z"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={close}
          to="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,8 C5.02943725,8 1,9.02943725 1,10 C1,10.9705627 5.02943725,9 10,9 C14.9705627,9 19,10.9705627 19,10 C19,9.02943725 14.9705627,8 10,8 Z"
        />
      </path>
    </g>
  )
}
