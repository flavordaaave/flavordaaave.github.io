import React from 'react'

interface SuitProps {
  active?: boolean
  top?: number
  left?: number
}

export const Suit: React.FunctionComponent<SuitProps> = ({
  active,
  left = 0,
  top = 0,
}) => {
  const show = React.useRef<SVGElement>(null)
  const hide = React.useRef<SVGElement>(null)

  const firstUpdate = React.useRef(true)
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (active) {
      show.current?.beginElement()
    } else {
      hide.current?.beginElement()
    }
  }, [active])

  return (
    <g id="Suit" transform={`translate(${left}, ${top})`}>
      <g
        transform={`rotate(${
          active && firstUpdate.current ? '0' : '-90'
        } 96 200)`}
      >
        <path
          d="M129.012 11c27.093 0 50.692 15.132 62.988 37.497-21.902 29.465-56.75 48.52-96 48.52-39.248 0-74.097-19.055-96-48.519C12.299 26.132 35.897 11 62.99 11h9.136A24.788 24.788 0 0072 13.5C72 27.031 82.969 38 96.5 38S121 27.031 121 13.5c0-.844-.043-1.678-.126-2.5h8.138z"
          fill="#E6E6E6"
          id="Shirt"
        />
        <path
          d="M61 48.001c0 16.737 1.87 32.303 5.327 45.277C39.447 86.364 16.187 70.275 0 48.5c12.299-22.366 35.897-37.498 62.99-37.498L64.406 11C62.183 22.116 61 34.688 61 48.001zm68.012-37c27.093 0 50.692 15.132 62.988 37.497-15.971 21.486-38.827 37.437-65.253 44.5C130.157 80.08 132 64.618 132 48c0-13.313-1.183-25.885-3.407-37.001l.42.001z"
          fill="#253744"
          id="Saco"
        />
        <path
          d="M144 60.886l9.556-7.167a4 4 0 014.856.043L165 58.886l-21 2z"
          fill="#E6E6E6"
          id="PocketHanky"
        />
        <path
          d="M123.197 10.983h5.749L129 11l19 30-6 6 6 9-13.038 34.46a118.068 118.068 0 01-16.208 4.362c6.573-37.236 8.055-65.181 4.443-83.84zM74.567 94.692l.072.39a118.082 118.082 0 01-16.031-4.09L45 56l6-9-6-6 19-30 .057-.017h5.746c-3.67 18.934-2.081 46.837 4.764 83.709z"
          fill="#2D404E"
          id="Wings"
        />
        <path
          d="M74 0v16.364c0 5.896 3.666 11.111 9.283 14.282l.71 4.345L80 33.52l-5.479 4.556c-6.915-4.504-11.36-11.244-11.517-18.798L63 18.864C63 11.335 67.26 4.584 74 0zm44 1.483c5.572 4.498 9 10.627 9 17.381 0 7.307-4.013 13.883-10.411 18.454L112 33.428l-4.115 2.123.833-4.906c5.617-3.17 9.282-8.385 9.282-14.281 0-.168-.003-.335-.009-.501l.01-14.38z"
          fill="#F2F2F2"
          id="Collar"
        />

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
