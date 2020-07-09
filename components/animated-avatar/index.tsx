import React from 'react'

import { Body, NeckShadow } from './svg/body'
import { Beard, Moustache, MouthOpen, Nose } from './svg/face'
import { Hair } from './svg/head'

interface AnimatedAvatarProps {
  path: string
}

export const AnimatedAvatar: React.FunctionComponent<AnimatedAvatarProps> = () => {
  // NOTE:
  // All SVG shapes have been optimized using https://jakearchibald.github.io/svgomg/
  return (
    <div
      style={{
        height: 280,
        margin: 'auto',
        width: 240,
      }}
    >
      <svg viewBox="0 0 240 280">
        <g id="body">
          <Body />
          <NeckShadow />
        </g>

        <g id="face">
          <Moustache />
          <Beard />
          <Nose />
          <MouthOpen />
        </g>

        <g id="head">
          <Hair />
        </g>
      </svg>
    </div>
  )
}
