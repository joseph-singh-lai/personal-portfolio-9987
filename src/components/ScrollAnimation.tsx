'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  distance?: number
}

const ScrollAnimation = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 50
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation()

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      case 'fade':
        return { opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      case 'fade':
        return { opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={isVisible ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation
