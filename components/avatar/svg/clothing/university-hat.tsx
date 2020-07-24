import React from 'react'

interface UniversityHatProps {
  active?: boolean
  top?: number
  left?: number
}

export const UniversityHat: React.FunctionComponent<UniversityHatProps> = ({
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
    <g id="UniversityHat" transform={`translate(${left}, ${top})`}>
      <g transform={`rotate(${active ? '0' : '-90'} 96 200)`}>
        <path
          d="M95 18c28.168 0 50 9 50 50.763-11.837.799-20.504 1.544-26 2.237-5.496.693-13.496 2.693-24 6-11.233-2.919-19.233-4.919-24-6-6.005-1.362-14.671-2.107-26-2.237C45 27 66.832 18 95 18z"
          fill="#253744"
          id="Hat"
        />
        <path
          d="M94.752 0l94.753 21.926v3L94.752 46.852 0 24.926v-3z"
          fill="#2D404E"
          id="Plate"
        />
        <g id="Strap" transform="translate(52 20)">
          <path d="M2 51V13.4L42 2.3l2 1.4L4 15v36z" fill="#E8AF43" />
          <ellipse cx="42" cy="2.5" fill="#576870" rx="7" ry="2.5" />
          <path
            d="M3 78c1.657 0 3 .389 3-9S4.657 52 3 52s-3 7.611-3 17 1.343 9 3 9z"
            fill="#E8AF43"
          />
          <path d="M1 52h4v5H1z" fill="#2D404E" />
          <circle cx="3" cy="52" fill="#E8AF43" r="3" />
        </g>

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
