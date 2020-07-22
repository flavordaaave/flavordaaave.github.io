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
    d="M29 144c-11-14-16-18-21-41l-.02-1.963C2.96 100.063 0 97 0 91V72c0-6 2-10 8-11v-9C8 23 27 0 55 0l.837.007C83.378.46 102 23.29 102 52v9c6 1 8 5 8 11v19c0 6-2.96 9.063-7.98 10.037L102 103c-5 23-10 27-21 41s-15 13-26 13-15 1-26-13z"
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
    d="M44 0v9.153c-8.082 8.508-12.654 8.1-21.958 8.06h-.084c-9.303.04-13.875.448-21.958-8.059V0c8.17 8.983 12.443 8.228 22 8.228S35.83 8.983 44 0z"
    fill="#000000"
    fillOpacity={opacity}
    id="NeckShadow"
    transform={`translate(${left}, ${top})`}
  />
)
