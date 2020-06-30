import styled from 'styled-components'

interface NavButtonProps {
  isActive: boolean
  onClick: () => void
}

const SHADOW_DEFAULT =
  '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
const SHADOW_ACTIVE =
  '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
const TRANSFORM_DEFAULT = 'translate(0)'
const TRANSFORM_ACTIVE = 'translateY(-4px)'

export const NavButton = styled.div<NavButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 28px);
  height: calc(100% - 28px);
  margin: 14px;
  border-radius: 6px;
  font-weight: 700;
  color: ${({ isActive }) => (isActive && '#ffffff') || '#000000'};
  background-color: ${({ isActive }) =>
    (isActive && 'transparent') || '#ffffff'};
  cursor: pointer;
  box-shadow: ${({ isActive }) =>
    (isActive && SHADOW_ACTIVE) || SHADOW_DEFAULT};
  transform: ${({ isActive }) =>
    (isActive && TRANSFORM_ACTIVE) || TRANSFORM_DEFAULT};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: ${SHADOW_ACTIVE};
    transform: ${TRANSFORM_ACTIVE};
  }
`
