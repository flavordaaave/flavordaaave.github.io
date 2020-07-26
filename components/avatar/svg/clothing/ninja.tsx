import React from 'react'

interface NinjaProps {
  active?: boolean
  top?: number
  left?: number
}

export const Ninja: React.FunctionComponent<NinjaProps> = ({
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
    <g id="Ninja" transform={`translate(${left}, ${top})`}>
      <g transform={`rotate(${active ? '0' : '-90'} 100 400)`}>
        <g transform="scale(1 -1) rotate(38 570.915 76.418)">
          <path
            d="M18 5.527V213h-8L9.998 18.212C11.658 13.19 14.424 8.81 18 5.527z"
            fill="#B3B3B3"
          />
          <path
            d="M26 .613V213h-8V5.526C20.21 3.499 22.727 1.891 25.482.81l.52-.197z"
            fill="#D6D6D6"
          />
          <path
            d="M28 209v54c0 5.523-4.477 10-10 10s-10-4.477-10-10v-54h20z"
            fill="#BD391E"
          />
          <path
            d="M28 250.861v6.928L9.593 268.417A9.953 9.953 0 018 263v-.592l20-11.547z"
            fill="#691F11"
          />
          <path
            d="M28 231.861v6.928L8 250.336v-6.928l20-11.547zM28 213.762v6.929L8 232.238v-6.929l20-11.547z"
            fill="#752313"
          />
          <path
            d="M18 209l.002 63.473h-3.213c-3.873-1.312-6.68-4.932-6.786-9.222l-.001-50.865c1.733-1.294 4.432-2.45 7.88-3.387H18z"
            fill="#000"
            fillOpacity=".1"
          />
          <rect fill="#362928" height="6" rx="1" width="36" y="206" />
        </g>
        <g transform="rotate(-142 91.91 155.875)">
          <path
            d="M18 5.527V213h-8L9.998 18.212C11.658 13.19 14.424 8.81 18 5.527z"
            fill="#B3B3B3"
          />
          <path
            d="M26 .613V213h-8V5.526C20.21 3.499 22.727 1.891 25.482.81l.52-.197z"
            fill="#D6D6D6"
          />
          <path
            d="M28 209v54c0 5.523-4.477 10-10 10s-10-4.477-10-10v-54h20z"
            fill="#BD391E"
          />
          <path
            d="M28 250.861v6.928L9.593 268.417A9.953 9.953 0 018 263v-.592l20-11.547z"
            fill="#691F11"
          />
          <path
            d="M28 231.861v6.928L8 250.336v-6.928l20-11.547zM28 213.762v6.929L8 232.238v-6.929l20-11.547z"
            fill="#752313"
          />
          <path
            d="M18 209l.002 63.473h-3.213c-3.873-1.312-6.68-4.932-6.786-9.222l-.001-50.865c1.733-1.294 4.432-2.45 7.88-3.387H18z"
            fill="#000"
            fillOpacity=".1"
          />
          <rect fill="#362928" height="6" rx="1" width="36" y="206" />
        </g>
        <rect
          fill="#C05656"
          height="27"
          rx="2"
          transform="rotate(26 78.225 136.01)"
          width="18"
          x="69.225"
          y="122.51"
        />
        <rect
          fill="#E36566"
          height="27"
          rx="2"
          transform="rotate(56 66.225 124.01)"
          width="18"
          x="57.225"
          y="110.51"
        />
        <path
          d="M147 73H89a9 9 0 000 18h58a9 9 0 100-18zm20.617-2.4a9.916 9.916 0 01.648.243l.067.028.199.087.04.019c.06.027.117.054.175.082l.136.067.081.042.08.043c.207.11.402.226.587.347l.046.031.14.096.055.04c.097.069.19.14.281.213l.082.067.008.006c.113.094.222.191.326.29l.01.01a6.258 6.258 0 01.443.47l.053.065a5.938 5.938 0 01.477.66l.032.052.067.111.055.096.052.092.051.096.024.045.076.151a8.369 8.369 0 01.586 1.604c.062.238.118.483.167.733a14.764 14.764 0 01.194 1.304 24.617 24.617 0 01.107 1.441l.004.085a31.79 31.79 0 01.028 1.067c.003.204.004.41.004.618l.002 19c0 6-3 9-8 10-1 11-6 22-10 28a21.64 21.64 0 01-1.189 1.59c-.234.29-.485.589-.752.898l-.036.043c-.247.285-.507.578-.779.879a71.09 71.09 0 01-1.37 1.47l-.083.087a92.258 92.258 0 01-2.182 2.2l-.348.339-.137.133a123.983 123.983 0 01-2.096 1.983c-.542.502-1.095 1.006-1.654 1.508l-.175.157-.483.43c-.698.62-1.406 1.235-2.115 1.84l-.138.118a140.57 140.57 0 01-1.463 1.228v13.08h11.012c27.093 0 50.692 15.132 62.988 37.497C192.098 232.946 157.25 252 118 252c-39.248 0-74.097-19.055-96-48.518 12.299-22.367 35.897-37.498 62.99-37.498H96v-13.08c-.267-.221-.536-.445-.804-.671l-.397-.335c-.8-.677-1.599-1.37-2.387-2.067l-.224-.198-.387-.345-.174-.157a148.126 148.126 0 01-1.551-1.412 132.858 132.858 0 01-3.276-3.134 84.948 84.948 0 01-2.877-2.99c-.333-.365-.649-.72-.945-1.063l-.037-.043c-.804-.932-1.465-1.774-1.941-2.488-4-6-9-17-10-28-5-1-8-4-8-10v-19a44.726 44.726 0 01.022-1.412l.004-.104.012-.292.007-.146a23.836 23.836 0 01.1-1.257l.004-.04c.027-.251.06-.497.097-.738l.003-.016a13.255 13.255 0 01.277-1.32 10.26 10.26 0 01.19-.618l.024-.067a8.652 8.652 0 01.274-.68 7.118 7.118 0 01.552-.985l.058-.084a6.362 6.362 0 01.202-.273l.05-.063a6.22 6.22 0 01.215-.253l.089-.097a6.257 6.257 0 01.49-.471 6.668 6.668 0 01.667-.505l.013-.009-.004.002.079-.05a7.29 7.29 0 01.089-.057l.072-.044a7.582 7.582 0 01.192-.113l-.021.012a7.86 7.86 0 01.305-.166l.103-.052.103-.051.128-.06c.04-.02.08-.037.12-.055l.139-.06a9.475 9.475 0 01.377-.151l.07-.026c.048-.018.096-.036.146-.053-.047-.873-.07-1.605-.087-2.027-.273-6.317-.226-12.824.358-19.118.795-8.578 2.217-16.77 6.018-24.254 3.944-7.766 10.685-13.864 17.512-17.794 8.855-5.098 20.047-4.523 29.618-6.541C124.48.319 131.169.183 132 .26c2.672.246 1.761.642 1.022 2.06C135.257 1.382 138 1.26 140 .26c1.91-.954.982.894.202 2.679l-.11.254c1.662-.54 7.05 1.64 7.908 2.067 1.948.97-.465.15-.532 1.649-.053 1.184.147.358.532 1.351.16.413 1.075 1.587 1.206 1.712.574.55 1.171 1.066 1.76 1.595 2.663 2.4 5.402 4.794 7.76 7.614 8.844 10.57 9.226 28.606 9.274 42.438.009 3.267-.493 5.937-.777 8.856l.154.047.03.01-.031-.01.059.019.182.06z"
          fill="#39404A"
        />
        <path
          d="M167.992 60H68.006c.033-3.52.192-7.041.513-10.498.235-2.538.525-5.042.916-7.504L167.06 42c.76 6.103.897 12.352.931 18z"
          fill="#E36566"
        />
        <path
          d="M96 165.874l30.92 33.158-10.239 9.548-39.342-42.19a72.019 72.019 0 017.65-.406H96v-.11z"
          fill="#646464"
        />
        <path
          d="M140 162.205v3.779h11.012c1.504 0 2.996.046 4.477.138l-74.574 79.972a118.422 118.422 0 01-13.941-5.58l73.025-78.309z"
          fill="#000"
          fillOpacity=".2"
        />
        <path
          d="M140.475 165.983h10.537c2.764 0 5.491.158 8.174.465L84.01 247.063a118.28 118.28 0 01-14.238-5.261l70.702-75.819z"
          fill="#646464"
        />
        <path
          d="M107.999 161.096c1.852.464 2 1.001 10 1.001s7.852-.463 10-1c2.592-.864 7.236-4.154 12-8.096v10.7c-4.53 3.61-8.784 6.506-11.273 7.33-2.304.572-2.145 1.065-10.727 1.065s-8.74-.573-10.727-1.067c-2.49-.823-6.743-3.718-11.273-7.329L96 153.001c4.763 3.942 9.407 7.231 11.999 8.095z"
          fill="#000"
          fillOpacity=".1"
        />
        <path
          d="M103 110c0 4.418 7.82 8 15 8s15-3.582 15-8h-30z"
          fill="#000"
          fillOpacity=".15"
        />

        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="300ms"
          fill="freeze"
          from="90 100 400"
          ref={show}
          to="0 100 400"
          type="rotate"
        />

        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="300ms"
          fill="freeze"
          from="0 100 400"
          ref={hide}
          to="-90 100 400"
          type="rotate"
        />
      </g>
    </g>
  )
}