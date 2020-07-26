import React from 'react'

import { Laptop } from './svg/accessories'
import {
  Beard,
  Body,
  Eye,
  Eyebrow,
  Hair,
  Head,
  Moustache,
  Mouth,
  NeckShadow,
  Nose,
} from './svg/body'
import {
  Glasses,
  Hoodie,
  Ninja,
  Shirt,
  Suit,
  UniversityHat,
} from './svg/clothing'

interface AvatarProps {
  path: string
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({ path }) => {
  const [leftEyebrow, setLeftEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >(
    path === '/'
      ? 'raised'
      : path === '/skills'
      ? 'down'
      : path === '/education'
      ? 'down'
      : 'normal'
  )
  const [rightEyebrow, setRightEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >(path === '/' ? 'raised' : path === '/skills' ? 'down' : 'normal')
  const [leftEye, setLeftEye] = React.useState<'open' | 'pinch' | 'close'>(
    path === '/skills' ? 'pinch' : path === '/education' ? 'close' : 'open'
  )
  const [rightEye, setRightEye] = React.useState<'open' | 'pinch' | 'close'>(
    path === '/skills' ? 'pinch' : 'open'
  )
  const [mouth, setMouth] = React.useState<'open' | 'smile' | 'serious'>(
    path === '/' ? 'open' : path === '/skills' ? 'serious' : 'smile'
  )
  const [beard, setBeard] = React.useState<'normal' | 'raised'>(
    path === '/' ? 'raised' : 'normal'
  )

  React.useEffect(() => {
    switch (path) {
      case '/':
        return setHome()
      case '/skills':
        return setSkills()
      case '/work':
        return setWork()
      case '/education':
        return setEducation()
      default:
        setHome()
    }
  }, [path])

  React.useEffect(() => {
    if (path === '/') {
      const interval = setInterval(() => {
        const rand = Math.floor(Math.random() * 3) + 1
        if (rand === 1) {
          winkLeft()
        } else if (rand === 2) {
          winkRight()
        } else {
          winkLeft()
          winkRight()
        }
      }, 4000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [path])

  return (
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
        <mask fill="white" id="Mask">
          <path d="M240,2.84217094e-14 L240,160 C240,226.27417 186.27417,280 120,280 C54.3885717,280 1.07577143,227.343314 0.0160765715,161.984419 L0,160 L0,2.84217094e-14 L240,2.84217094e-14 Z"></path>
        </mask>

        <g mask="url(#Mask)">
          {/* Body */}
          <Body left={24} top={181} />
          <NeckShadow left={98} opacity={0.1} top={179} />

          {/* Clothing */}
          <Shirt active={path === '/'} left={24} top={195} />
          <Hoodie active={path === '/work'} left={24} top={173.5} />
          <Suit active={path === '/education'} left={24} top={183.5} />

          {/* Head */}
          <Head left={65} top={36} />
          <Beard left={73} state={beard} top={97} />
          <Mouth left={99} state={mouth} top={154} />
          <Moustache left={95} opacity={1} state={beard} top={148} />
          <Nose left={105} state={beard} top={137} />
          <Eye left={87} state={leftEye} top={100} />
          <Eye left={135} state={rightEye} top={100} />
          <Eyebrow left={81} state={leftEyebrow} top={89} />
          <Eyebrow flip left={132} state={rightEyebrow} top={89} />

          {/* Gear */}
          <Hair left={70} top={27} />
          <Glasses active={path === '/work'} left={66} top={90} />
          <Laptop active={path === '/work'} left={31} top={171} />
          <UniversityHat active={path === '/education'} left={25} top={11} />
          <Ninja active={path === '/skills'} left={2} top={27} />
        </g>
      </svg>
    </div>
  )

  function setHome(): void {
    setLeftEyebrow('raised')
    setRightEyebrow('raised')
    setLeftEye('open')
    setRightEye('open')
    setBeard('raised')
    setMouth('open')
  }

  function setSkills(): void {
    setLeftEyebrow('down')
    setRightEyebrow('down')
    setLeftEye('pinch')
    setRightEye('pinch')
    setBeard('normal')
    setMouth('serious')
  }

  function setWork(): void {
    setLeftEyebrow('normal')
    setRightEyebrow('normal')
    setLeftEye('open')
    setRightEye('open')
    setBeard('normal')
    setMouth('smile')
  }

  function setEducation(): void {
    setLeftEyebrow('down')
    setRightEyebrow('normal')
    setLeftEye('close')
    setRightEye('open')
    setBeard('normal')
    setMouth('smile')
  }

  function winkLeft(): void {
    setLeftEye('open')
    setLeftEye('close')
    setLeftEyebrow('down')
    setTimeout(() => {
      setLeftEye('open')
      setLeftEyebrow('raised')
    }, 150)
  }
  function winkRight(): void {
    setRightEye('open')
    setRightEye('close')
    setRightEyebrow('down')
    setTimeout(() => {
      setRightEye('open')
      setRightEyebrow('raised')
    }, 150)
  }
}
