import React from 'react'

interface ShirtProps {
  active?: boolean
  top?: number
  left?: number
}

export const Shirt: React.FunctionComponent<ShirtProps> = ({
  active,
  left = 0,
  top = 0,
}) => {
  const show = React.useRef(null)
  const hide = React.useRef(null)

  const firstUpdate = React.useRef(true)
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (active) {
      return show.current?.beginElement()
    }
    return hide.current?.beginElement()
  }, [active])

  return (
    <g id="Shirt" transform={`translate(${left}, ${top})`}>
      <g transform={`rotate(${active ? '0' : '-90'} 96 200)`}>
        <path
          d="M61.0000177,0.0272474777 L61,0 C61,13.8071187 76.8938914,25 96.5,25 C116.076676,25 131.952271,13.8406993 131.999893,0.0621644777 C157.832465,1.12735836 180.157647,15.9550416 192,37.4900656 C170.098195,66.9491658 135.249179,86 96.0008047,86 C56.752274,86 21.9031364,66.9490139 0,37.4911779 C11.9968116,15.6778602 34.7451365,0.747318412 61.0000177,0.0272474777 Z"
          fill="#496FA8"
        ></path>
        <path
          d="M60.2134305,0.0531054193 L61,0.027 L61,0 C61,13.8071187 76.8938914,25 96.5,25 C116.076676,25 131.952271,13.8406993 131.999893,0.0621644777 C134.005495,0.144864557 135.989956,0.310521346 137.950012,0.555833143 C137.983041,1.0350202 138,1.51612617 138,2 C138,18.0162577 119.419817,31 96.5,31 C73.5801829,31 55,18.0162577 55,2 C55,1.47583156 55.0199008,0.954911179 55.0592031,0.437587667 C56.760598,0.248061514 58.4791639,0.119574155 60.2134305,0.0531054193 Z"
          fill="#000000"
          fillOpacity="0.15"
          id="Shadow"
        ></path>

        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="300ms"
          fill="freeze"
          from="90 96 200"
          ref={show}
          to="0 96 200"
          type="rotate"
        />

        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="300ms"
          fill="freeze"
          from="0 96 200"
          ref={hide}
          to="-90 96 200"
          type="rotate"
        />
      </g>
    </g>
  )
}
