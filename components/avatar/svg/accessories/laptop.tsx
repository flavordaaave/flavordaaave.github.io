import React from 'react'

interface LaptopProps {
  active?: boolean
  top?: number
  left?: number
}

export const Laptop: React.FunctionComponent<LaptopProps> = ({
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
      const timeout = setTimeout(() => {
        show.current?.beginElement()
      }, 500)
      return () => clearTimeout(timeout)
    }

    hide.current?.beginElement()
  }, [active])

  return (
    <g id="Laptop" transform={`translate(${left}, ${top})`}>
      <g transform={`translate(0, ${active ? '0' : '150'})`}>
        <path
          d="M2.21724481,0 L176.782755,0 C177.887325,-2.02906125e-16 178.782755,0.8954305 178.782755,2 C178.782755,2.06863909 178.779222,2.13723267 178.772169,2.20550844 L167.409057,112.205508 C167.303734,113.225085 166.444646,114 165.419643,114 L13.5803565,114 C12.5553544,114 11.6962663,113.225085 11.590943,112.205508 L0.227831262,2.20550844 C0.114332084,1.10678567 0.913013608,0.124085626 2.01173637,0.010586448 C2.08001214,0.0035334919 2.14860572,4.8975901e-15 2.21724481,0 Z"
          fill="#D8D8D8"
          id="Shadow"
        ></path>
        <path
          d="M2.21724481,3 L176.782755,3 C177.887325,3 178.782755,3.8954305 178.782755,5 C178.782755,5.06863909 178.779222,5.13723267 178.772169,5.20550844 L167.409057,115.205508 C167.303734,116.225085 166.444646,117 165.419643,117 L13.5803565,117 C12.5553544,117 11.6962663,116.225085 11.590943,115.205508 L0.227831262,5.20550844 C0.114332084,4.10678567 0.913013608,3.12408563 2.01173637,3.01058645 C2.08001214,3.00353349 2.14860572,3 2.21724481,3 Z"
          fill="#BABABA"
          id="Case"
        ></path>
        <ellipse
          cx="90.5"
          cy="57"
          fill="#E9E9E9"
          id="Logo"
          rx="9.5"
          ry="11"
        ></ellipse>

        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="300ms"
          fill="freeze"
          from="0, 150"
          ref={show}
          to="0, 0"
          type="translate"
        />

        <animateTransform
          attributeName="transform"
          begin="indefinite"
          dur="300ms"
          fill="freeze"
          from="0, 0"
          ref={hide}
          to="0, 150"
          type="translate"
        />
      </g>
    </g>
  )
}
