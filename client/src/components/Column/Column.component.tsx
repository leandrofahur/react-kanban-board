import React from 'react'
import { ColumnWrapper, ColumnTitle } from './Column.styled'

interface ColumnProps {
  title: string,
  iconPath: string,
  color: string,
  children: React.ReactNode
}

export function Column(props: ColumnProps) {
  const { title, iconPath, color, children } = props;
  return (
    <ColumnWrapper color={color}>
      <ColumnTitle><img src={iconPath} /> {title}</ColumnTitle>
      {children}
    </ColumnWrapper>
  )
}