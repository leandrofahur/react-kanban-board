import React from 'react'
import { LabelContainer, LabelVariant } from './Label.styled'

type LabelProps = {
  variant?: LabelVariant
  children: React.ReactNode
}

export function Label(props: LabelProps) {
  const { variant = 'done', children } = props
  return <LabelContainer variant={variant}>{children}</LabelContainer>
}