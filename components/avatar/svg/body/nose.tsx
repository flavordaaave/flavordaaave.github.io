import React from 'react'

interface NoseProps {
  top?: number
  left?: number
  state?: 'normal' | 'raised'
}

export const Nose: React.FunctionComponent<NoseProps> = ({
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
    }
  }, [state])

  return (
    <path
      d="M0 0c0 4.418 7.82 8 15 8s15-3.582 15-8H0z"
      fill="#000000"
      fillOpacity="0.15"
      id="Nose"
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
