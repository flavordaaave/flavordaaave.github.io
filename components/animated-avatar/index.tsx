import React from 'react'

import {
  Beard,
  Body,
  Eye,
  Eyebrow,
  Hair,
  Moustache,
  Mouth,
  NeckShadow,
  Nose,
} from './svg/body'

interface AnimatedAvatarProps {
  path: string
}

export const AnimatedAvatar: React.FunctionComponent<AnimatedAvatarProps> = () => {
  const [leftEyebrow, setLeftEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >('normal')
  const [rightEyebrow, setRightEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >('normal')
  const [leftEye, setLeftEye] = React.useState<'open' | 'pinch' | 'close'>(
    'open'
  )
  const [rightEye, setRightEye] = React.useState<'open' | 'pinch' | 'close'>(
    'open'
  )
  const [mouth, setMouth] = React.useState<'open' | 'smile' | 'serious'>('open')

  // NOTE:
  // All SVG shapes have been optimized using https://jakearchibald.github.io/svgomg/
  return (
    <>
      <div
        style={{
          height: 280,
          margin: 'auto',
          width: 240,
        }}
      >
        <svg viewBox="0 0 240 280">
          {/* Body */}
          <Body left={24} top={27} />
          <NeckShadow left={98} opacity={0.1} top={182} />

          {/* Face */}
          <Mouth left={101} state={mouth} top={148} />
          <Moustache left={96} opacity={1} top={136} />
          <Beard left={68} opacity={0.2} top={99} />
          <Nose left={107} top={126} />
          <Eye left={86} state={leftEye} top={94} />
          <Eye left={135} state={rightEye} top={94} />
          <Eyebrow left={79} state={leftEyebrow} top={81} />
          <Eyebrow flip left={134} state={rightEyebrow} top={81} />

          {/* Head */}
          <Hair left={67} top={21} />
        </svg>
      </div>
      <button
        onClick={() => {
          setLeftEye('open')
          setRightEye('open')
        }}
      >
        Open
      </button>
      <button
        onClick={() => {
          setLeftEye('pinch')
          setRightEye('pinch')
        }}
      >
        Pinch
      </button>
      <button onClick={winkLeft}>Wink Left</button>
      <button onClick={winkRight}>Wink Right</button>
      <button onClick={() => setMouth('open')}>Mouth open</button>
      <button onClick={() => setMouth('smile')}>Mouth smile</button>
      <button onClick={() => setMouth('serious')}>Mouth serious</button>
      <button
        onClick={() => {
          setLeftEyebrow('normal')
          setRightEyebrow('normal')
        }}
      >
        Eybrows normal
      </button>
      <button
        onClick={() => {
          setLeftEyebrow('raised')
          setRightEyebrow('raised')
        }}
      >
        Eybrows raised
      </button>
      <button
        onClick={() => {
          setLeftEyebrow('down')
          setRightEyebrow('down')
        }}
      >
        Eybrows down
      </button>
    </>
  )

  function winkLeft(): void {
    setLeftEye('open')
    setLeftEye('close')
    setLeftEyebrow('down')
    setTimeout(() => {
      setLeftEye('open')
      setLeftEyebrow('normal')
    }, 200)
  }
  function winkRight(): void {
    setRightEye('open')
    setRightEye('close')
    setRightEyebrow('down')
    setTimeout(() => {
      setRightEye('open')
      setRightEyebrow('normal')
    }, 200)
  }
}
