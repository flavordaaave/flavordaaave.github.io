import React from 'react'

interface GlassesProps {
  active?: boolean
  top?: number
  left?: number
}

export const Glasses: React.FunctionComponent<GlassesProps> = ({
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
    <g id="Glasses" transform={`translate(${left}, ${top})`}>
      <g transform={`rotate(${active ? '0' : '-90'} 96 200)`}>
        <defs>
          <path
            d="M78.5,0 C85.2785053,0 91.2055294,3.64562454 94.4273364,9.08313782 C94.6080426,9.02917663 94.800614,9 95,9 L106,9 C107.104569,9 108,9.8954305 108,11 C108,12.1045695 107.104569,13 106,13 L96.1689018,13.0006762 C96.7090347,14.7379605 97,16.5850009 97,18.5 C97,28.7172679 88.7172679,37 78.5,37 C68.2827321,37 60,28.7172679 60,18.5 C60,16.8530202 60.215219,15.2563074 60.6190675,13.7364513 C59.9543633,11.0125731 57.1819731,9 53.9211964,9 C50.7756404,9 48.0845661,10.872856 47.3010962,13.4505825 C47.7568314,15.0554759 48,16.7493404 48,18.5 C48,28.7172679 39.7172679,37 29.5,37 C19.2827321,37 11,28.7172679 11,18.5 C11,16.5850009 11.2909653,14.7379605 11.8310982,13.0006762 L2,13 C0.8954305,13 1.3527075e-16,12.1045695 0,11 C-1.3527075e-16,9.8954305 0.8954305,9 2,9 L13,9 C13.199386,9 13.3919574,9.02917663 13.5736777,9.0834933 C16.7944706,3.64562454 22.7214947,0 29.5,0 C36.4340714,0 42.4771303,3.81487821 45.6448601,9.46031813 C47.5654271,7.3537664 50.5588061,6 53.9211964,6 C57.3409446,6 60.3789844,7.40034721 62.2968998,9.56832663 C65.4459207,3.86363242 71.5217605,0 78.5,0 Z M29.5,3 C20.9395864,3 14,9.93958638 14,18.5 C14,27.0604136 20.9395864,34 29.5,34 C38.0604136,34 45,27.0604136 45,18.5 C45,9.93958638 38.0604136,3 29.5,3 Z M78.5,3 C69.9395864,3 63,9.93958638 63,18.5 C63,27.0604136 69.9395864,34 78.5,34 C87.0604136,34 94,27.0604136 94,18.5 C94,9.93958638 87.0604136,3 78.5,3 Z"
            id="path"
          ></path>
          <filter
            filterUnits="objectBoundingBox"
            height="110.8%"
            id="filter-2"
            width="101.9%"
            x="-0.9%"
            y="-2.7%"
          >
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            ></feOffset>
            <feColorMatrix
              in="shadowOffsetOuter1"
              type="matrix"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            ></feColorMatrix>
          </filter>
        </defs>
        <use
          fill="black"
          fillOpacity="1"
          filter="url(#filter-2)"
          xlinkHref="#path"
        ></use>
        <use fill="#252C2F" fillRule="evenodd" xlinkHref="#path"></use>

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
