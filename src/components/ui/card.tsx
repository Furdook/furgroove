import React from 'react'
import { cn } from '@/lib/utils.ts'
import { ColorHelper } from '@/lib/color-helper.ts'

export function Card({ className, ...props }: React.ComponentProps<'section'>) {
  return <section className={cn('card border-effect p-4', className)} {...props} />
}

function CardTitle({
  color = ColorHelper.Default,
  className,
  ...props
}: React.ComponentProps<'h2'> & { color?: ColorHelper }) {
  return <h2 style={{ color: color }} className={cn('text-2xl uppercase', className)} {...props} />
}
Card.Title = CardTitle

function CardContent({ ...props }: React.ComponentProps<'div'>) {
  return <div {...props} />
}
Card.Content = CardContent
