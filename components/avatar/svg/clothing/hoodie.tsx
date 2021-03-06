import React from 'react'

interface HoodieProps {
  active?: boolean
  top?: number
  left?: number
}

export const Hoodie: React.FunctionComponent<HoodieProps> = ({
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
    <g id="Hoodie" transform={`translate(${left}, ${top})`}>
      <g
        transform={`rotate(${
          active && firstUpdate.current ? '0' : '-90'
        } 96 200)`}
      >
        <path
          d="M118,0.5 C132.464592,3.57024717 152,11.3932565 152,22.5412315 C152,23.1303546 151.967265,23.7160005 151.903067,24.2977743 C169.058603,30.1088472 183.335269,42.2746999 192,58.0312971 C170.098195,87.4903973 135.249179,106.541231 96.0008047,106.541231 C56.752274,106.541231 21.9031364,87.4902454 0,58.0324094 C8.6660286,42.2753198 22.9422549,30.1096997 40.0978236,24.2975909 C40.0327729,23.7166725 40,23.1306926 40,22.5412315 C40,11.1559612 59.012324,3.50416025 74,0.5 L74,23.5412315 C74,35.5699933 83.6537258,45.3440067 95.6361898,45.5382841 L96,45.5412315 C108.028762,45.5412315 117.802775,35.8875057 117.997053,23.9050417 L118,23.5412315 L118,0.5 Z"
          fill="#B7C1DB"
        ></path>
        <g
          fill="#F4F4F4"
          id="Straps"
          transform="translate(62.998495, 48.040097)"
        >
          <path
            d="M66.0044434,-5.68434189e-14 L66.002638,21.439135 C66.002638,23.3721316 64.4356346,24.939135 62.502638,24.939135 C60.5696414,24.939135 59.002638,23.3721316 59.002638,21.439135 L59.0031232,2.83794083 C61.4089158,1.99121596 63.7539867,1.04172976 66.0044434,-5.68434189e-14 Z"
            id="Right"
          />
          <path
            d="M7.00275705,2.83895081 L7.00263801,41.439135 C7.00263801,43.3721316 5.43563463,44.939135 3.50263801,44.939135 C1.56964138,44.939135 0.00263800559,43.3721316 0.00263800559,41.439135 L1.13686838e-13,0.000663283671 C2.25091401,1.04254699 4.59647014,1.99215071 7.00275705,2.83895081 Z"
            id="Left"
          />
        </g>
        <path
          d="M151.893502,24.3173548 C154.526792,25.2093258 157.092254,26.2510201 159.580004,27.4324417 C149.734202,43.6596798 120.40026,55.560812 95.9904353,55.560812 C71.5806105,55.560812 42.2466682,43.6596798 32.4,27.4329468 C34.889812,26.2510014 37.4551198,25.2092485 40.0882589,24.3171714 L40.0832146,24.2792986 C41.9573459,41.6390786 71.8539632,55.560812 95.9904353,55.560812 C119.903006,55.560812 149.46935,41.8961696 151.838293,24.7615151 L151.893502,24.3173548 L151.893502,24.3173548 Z"
          fill="#000000"
          fillOpacity="0.15"
          id="Shadow"
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
