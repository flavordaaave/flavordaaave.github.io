import React from 'react'

interface BodyProps {
  top?: number
  left?: number
  opacity?: number
}

export const Body: React.FunctionComponent<BodyProps> = ({
  left = 0,
  top = 0,
}) => (
  <path
    d="M118 0v13.984h11.012c27.093 0 50.692 15.132 62.988 37.497C170.098 80.946 135.25 100 96 100c-39.248 0-74.097-19.055-96-48.518 12.299-22.367 35.897-37.498 62.99-37.498H74V.002L118 0z"
    fill="#EDB98A"
    id="Body"
    transform={`translate(${left}, ${top})`}
  />
)

interface HeadProps {
  top?: number
  left?: number
  opacity?: number
}

export const Head: React.FunctionComponent<HeadProps> = ({
  left = 0,
  top = 0,
}) => (
  <path
    d="M8 101.001c-5-1-8-4-8-10v-19c0-6 1-10 8-11v-9C8 24.001 27.837.008 55 0c27.163-.006 47 24.001 47 52.001v9c7 1 8 5 7.998 11l.002 19c0 6-3 9-8 10-1 11-6 22-10 28s-21 21-27 23c-2.148.537-2 1-10 1s-8.148-.538-10-1.001C39 150 22 135 18 129s-9-17-10-28z"
    fill="#EDB98A"
    id="Body"
    transform={`translate(${left}, ${top})`}
  />
)

interface NeckShadowProps {
  top?: number
  left?: number
  opacity?: number
}

export const NeckShadow: React.FunctionComponent<NeckShadowProps> = ({
  left = 0,
  opacity = 0.1,
  top = 0,
}) => (
  <path
    d="M11.999 8.096c1.852.464 2 1.001 10 1.001s7.852-.463 10-1c2.592-.864 7.236-4.154 12-8.096v10.7c-4.53 3.61-8.784 6.506-11.273 7.33-2.304.572-2.145 1.065-10.727 1.065s-8.74-.573-10.727-1.067c-2.49-.823-6.743-3.718-11.273-7.329L0 .001C4.763 3.943 9.407 7.232 12 8.096z"
    fill="#000000"
    fillOpacity={opacity}
    id="NeckShadow"
    transform={`translate(${left}, ${top})`}
  />
)
