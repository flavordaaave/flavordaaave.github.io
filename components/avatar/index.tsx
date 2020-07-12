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
import { Shirt } from './svg/clothing'

interface AvatarProps {
  path: string
}

export const Avatar: React.FunctionComponent<AvatarProps> = () => {
  const [leftEyebrow, setLeftEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >('raised')
  const [rightEyebrow, setRightEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >('raised')
  const [leftEye, setLeftEye] = React.useState<'open' | 'pinch' | 'close'>(
    'open'
  )
  const [rightEye, setRightEye] = React.useState<'open' | 'pinch' | 'close'>(
    'open'
  )
  const [mouth, setMouth] = React.useState<'open' | 'smile' | 'serious'>('open')
  const [beard, setBeard] = React.useState<'normal' | 'raised'>('raised')

  // NOTE:
  // All SVG shapes have been optimized using https://jakearchibald.github.io/svgomg/
  return (
    <>
      <div
        style={{
          height: 280,
          margin: 'auto',
          position: 'relative',
          width: 240,
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            bottom: 0,
            boxShadow:
              '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
            left: 0,
            paddingBottom: '100%',
            position: 'absolute',
            width: '100%',
            zIndex: 0,
          }}
        />
        <svg
          style={{
            left: 0,
            position: 'absolute',
            top: 0,
            zIndex: 1,
          }}
          viewBox="0 0 240 280"
        >
          {/* Body */}
          <Body left={24} top={27} />
          <NeckShadow left={98} opacity={0.1} top={182} />

          {/* Face */}
          <Mouth left={101} state={mouth} top={148} />
          <Moustache left={96} opacity={1} state={beard} top={140} />
          <Beard left={68} opacity={0.2} state={beard} top={99} />
          <Nose left={107} state={beard} top={128} />
          <Eye left={86} state={leftEye} top={94} />
          <Eye left={136} state={rightEye} top={94} />
          <Eyebrow left={79} state={leftEyebrow} top={81} />
          <Eyebrow flip left={134} state={rightEyebrow} top={81} />

          {/* Head */}
          <Hair left={67} top={21} />

          {/* Clothing */}
          <Shirt left={24} top={195} />
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
      <button
        onClick={() => {
          setMouth('open')
          setBeard('raised')
          setLeftEyebrow('raised')
          setRightEyebrow('raised')
        }}
      >
        Mouth open
      </button>
      <button
        onClick={() => {
          setMouth('smile')
          setBeard('normal')
          setLeftEyebrow('normal')
          setRightEyebrow('normal')
        }}
      >
        Mouth smile
      </button>
      <button
        onClick={() => {
          setMouth('serious')
          setBeard('normal')
          setLeftEyebrow('normal')
          setRightEyebrow('normal')
        }}
      >
        Mouth serious
      </button>
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
