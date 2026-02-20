'use client'

import React from 'react'
import Link from 'next/link'
import { LazyMotion, domAnimation, m, MotionProps } from 'framer-motion'

/**
 * Simple classnames helper
 */
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export type Variant = 'primary' | 'secondary' | 'outline' | 'gradient'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  children: React.ReactNode
  className?: string
  whileHover?: MotionProps['whileHover']
  whileTap?: MotionProps['whileTap']
}

interface LinkProps extends BaseProps {
  as?: 'link'
  href: string
  onClick?: never
  type?: never
}

interface ButtonProps extends BaseProps {
  as: 'button'
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: never
}

type Props = (LinkProps | ButtonProps) & {
  variant?: Variant
  size?: Size
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-[#B6FF1A] text-[#0F1113] hover:brightness-110 focus:ring-[#B6FF1A]/50 font-extrabold uppercase tracking-widest',
  secondary: 'bg-[#2A2D30] text-[#F2F2F2] hover:bg-[#35393D] hover:border-white/20 focus:ring-white/10 font-bold uppercase tracking-widest border border-white/5',
  outline:
    'border border-white/20 text-white hover:bg-white/5 focus:ring-white/10 font-bold uppercase tracking-widest',
  gradient:
    'relative p-0.5 overflow-hidden bg-gradient-to-br from-[#B6FF1A] to-[#8FCC14] focus:ring-[#B6FF1A]/30 font-bold uppercase tracking-widest',
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button(props: Props) {
  const {
    as = 'link',
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    // whileHover = { scale: 1.0 },
    // whileTap = { scale: 0.95 },
    ...rest
  } = props

  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition focus:outline-none focus:ring-4',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  )

  return (
    <LazyMotion features={domAnimation}>
      {as === 'button' ? (
        <m.button
          {...(rest as ButtonProps)}
          // whileHover={whileHover}
          // whileTap={whileTap}
          className={baseClasses}
        >
          {children}
        </m.button>
      ) : (
        <m.div >
          <Link {...(rest as LinkProps)} className={baseClasses}>
            {children}
          </Link>
        </m.div>
      )}
    </LazyMotion>
  )
}
