import React from 'react'

interface BeardProps {
  top?: number
  left?: number
  state?: 'normal' | 'raised'
}

const BEARD_PATH_NORMAL =
  'M0 40V0c1.73.576 1 29 8 44s17 8.001 28 7.999h21C69 51.996 79 59 86 44S91.701.766 94 0v40c-1 11-6 22-10 28S63 89 57 91c-2.148.537-2 1-10 1s-8.148-.538-10-1.001c-6-2-23-17-27-23S1 51 0 40z'
const BEARD_PATH_RAISED =
  'M0 40V0c1.73.576-1 23 8 44s17 5.001 28 4.999h21C69 48.996 77 65 86 44S91.701.766 94 0v40c-1 11-6 22-10 28S63 89 57 91c-2.148.537-2 1-10 1s-8.148-.538-10-1.001c-6-2-23-17-27-23S1 51 0 40z'

export const Beard: React.FunctionComponent<BeardProps> = ({
  left = 0,
  state,
  top = 0,
}) => {
  const normal = React.useRef<SVGElement>(null)
  const raised = React.useRef<SVGElement>(null)

  React.useEffect(() => {
    switch (state) {
      case 'raised':
        raised.current?.beginElement()
        return
      case 'normal':
      default:
        normal.current?.beginElement()
        return
    }
  }, [state])

  return (
    <path
      d={state === 'raised' ? BEARD_PATH_RAISED : BEARD_PATH_NORMAL}
      fill="#BD946E"
      id="Beard"
      transform={`translate(${left}, ${top})`}
    >
      <animate
        attributeName="d"
        begin="indefinite"
        dur="100ms"
        fill="freeze"
        ref={normal}
        to={BEARD_PATH_NORMAL}
      />

      <animate
        attributeName="d"
        begin="indefinite"
        dur="100ms"
        fill="freeze"
        ref={raised}
        to={BEARD_PATH_RAISED}
      />
    </path>
  )
}

interface MoustacheProps {
  top?: number
  left?: number
  opacity?: number
  state?: 'normal' | 'raised'
}

export const Moustache: React.FunctionComponent<MoustacheProps> = ({
  left = 0,
  opacity = 1,
  state,
  top = 0,
}) => {
  const normal = React.useRef<SVGElement>(null)
  const raised = React.useRef<SVGElement>(null)

  React.useEffect(() => {
    switch (state) {
      case 'raised':
        raised.current?.beginElement()
        return
      case 'normal':
      default:
        normal.current?.beginElement()
    }
  }, [state])

  return (
    <path
      d="M30.708 9.283l-11.416.04-10.741-.04c-.79.007-1.298.027-1.524.038l-.045.002c-1.887.114-5.889.638-6.767-.726-.949-1.474 1.248-4.452 6.457-7.385L7.1.982C7.678.685 9.19 0 12.025 0h25.95c2.944 0 4.462.74 4.988 1.015l.055.028c5.432 2.866 7.734 6.051 6.767 7.554-.854 1.326-4.66.977-6.605.741l-.162-.015c-.435-.026-4.538-.039-12.31-.04z"
      fill="#342920"
      fillOpacity={opacity}
      id="Moustache"
      transform={`translate(${left}, ${top})`}
    >
      <animateTransform
        attributeName="transform"
        begin="indefinite"
        dur="100ms"
        fill="freeze"
        from={`${left}, ${top - 4}`}
        ref={normal}
        to={`${left}, ${top}`}
        type="translate"
      />

      <animateTransform
        attributeName="transform"
        begin="indefinite"
        dur="100ms"
        fill="freeze"
        from={`${left}, ${top}`}
        ref={raised}
        to={`${left}, ${top - 4}`}
        type="translate"
      />
    </path>
  )
}
