import React from 'react'

interface EyebrowProps {
  flip?: boolean
  top?: number
  left?: number
  state?: 'normal' | 'raised' | 'down'
}

export const Eyebrow: React.FunctionComponent<EyebrowProps> = ({
  flip,
  left = 0,
  state,
  top = 0,
}) => {
  const normalBrow = React.useRef<SVGElement>(null)
  const normalPosition = React.useRef<SVGElement>(null)
  const raisedBrow = React.useRef<SVGElement>(null)
  const raisedPosition = React.useRef<SVGElement>(null)
  const downBrow = React.useRef<SVGElement>(null)
  const downPosition = React.useRef<SVGElement>(null)

  /**
   * HACK:
   * There's a bug in Safari Browser when using the `additive="sum"` prop
   * on the `animateTransform` component.
   * So we manually need to set the `from` attribute based on the
   * previous `state`.
   */
  const prevState = React.useRef<'normal' | 'raised' | 'down' | undefined>(
    undefined
  )
  React.useEffect(() => {
    prevState.current = state
  })

  React.useEffect(() => {
    switch (state) {
      case 'raised':
        raisedBrow.current?.beginElement()
        raisedPosition.current?.beginElement()
        return
      case 'down':
        downBrow.current?.beginElement()
        downPosition.current?.beginElement()
        return
      case 'normal':
      default:
        normalBrow.current?.beginElement()
        normalPosition.current?.beginElement()
    }
  }, [state])

  return (
    <g
      transform={`scale(${flip ? '-1' : '1'}, 1) translate(${
        flip ? -left - 27 : left
      }, ${top})`}
    >
      <path
        d="M3.267 9.18C6.791 3.81 16.45 2.747 24.77 4.96c.966.258 1.94-.382 2.178-1.428.237-1.046-.354-2.102-1.32-2.358C15.967-1.396 4.782.14.334 6.92c-.576.877-.386 2.095.424 2.718.81.624 1.934.418 2.51-.46z"
        fill="#342920"
        id="Eyebrow"
      >
        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={normalBrow}
          to="M3.267 9.18C6.791 3.81 16.45 2.747 24.77 4.96c.966.258 1.94-.382 2.178-1.428.237-1.046-.354-2.102-1.32-2.358C15.967-1.396 4.782.14.334 6.92c-.576.877-.386 2.095.424 2.718.81.624 1.934.418 2.51-.46z"
        />
        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          from={
            prevState.current === 'raised'
              ? '0 -4'
              : prevState.current === 'down'
              ? '0 2'
              : '0 0'
          }
          ref={normalPosition}
          to="0 0"
          type="translate"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={raisedBrow}
          to="M3.267 12.18C6.791 6.81 13.45 2.747 21.77 4.96c.966.258 1.94-.382 2.178-1.428.237-1.046-.354-2.102-1.32-2.358C12.967-1.396 4.782 3.14.334 9.92c-.576.877-.386 2.095.424 2.718.81.624 1.934.418 2.51-.46z"
        />
        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          from={
            prevState.current === 'raised'
              ? '0 -4'
              : prevState.current === 'down'
              ? '0 2'
              : '0 0'
          }
          ref={raisedPosition}
          to="0 -4"
          type="translate"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          ref={downBrow}
          to="M3.26729611,7.17953731 C6.79064126,1.80907145 16.4499279,3.74737173 24.7703506,5.96073945 C25.7357587,6.21755369 26.7105659,5.57797215 26.9476435,4.53219409 C27.1847211,3.48641603 26.5942926,2.43045633 25.6288845,2.17364209 C15.9661372,-0.396805792 4.78093335,-1.85936568 0.332915701,4.92053409 C-0.24295012,5.79829871 -0.052898175,7.01556263 0.7574086,7.63936915 C1.56771538,8.26317566 2.69143029,8.05730194 3.26729611,7.17953731 Z"
        />
        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="100ms"
          fill="freeze"
          from={
            prevState.current === 'raised'
              ? '0 -4'
              : prevState.current === 'down'
              ? '0 2'
              : '0 0'
          }
          ref={downPosition}
          to="0 2"
          type="translate"
        />
      </path>
    </g>
  )
}
