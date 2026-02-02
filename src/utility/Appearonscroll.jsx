import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const AppearOnScroll = ({ 
  children, 
  animation = 'fade',
  duration = 700,
  delay = 0,
  threshold = 0.2,
  once = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, once])

  const animations = {
    fade: 'opacity-0 [&.visible]:opacity-100',
    slideLeft: 'opacity-0 -translate-x-full [&.visible]:opacity-100 [&.visible]:translate-x-0',
    slideRight: 'opacity-0 translate-x-full [&.visible]:opacity-100 [&.visible]:translate-x-0',
    slideUp: 'opacity-0 translate-y-10 [&.visible]:opacity-100 [&.visible]:translate-y-0',
    slideDown: 'opacity-0 -translate-y-10 [&.visible]:opacity-100 [&.visible]:translate-y-0',
    zoomIn: 'opacity-0 scale-50 [&.visible]:opacity-100 [&.visible]:scale-100',
    zoomOut: 'opacity-0 scale-150 [&.visible]:opacity-100 [&.visible]:scale-100',
    rotateLeft: 'opacity-0 -rotate-45 [&.visible]:opacity-100 [&.visible]:rotate-0',
    rotateRight: 'opacity-0 rotate-45 [&.visible]:opacity-100 [&.visible]:rotate-0',
    blurIn: 'opacity-0 blur-sm [&.visible]:opacity-100 [&.visible]:blur-0',
    slideUpFade: 'opacity-0 translate-y-20 [&.visible]:opacity-100 [&.visible]:translate-y-0',
    slideDownFade: 'opacity-0 -translate-y-20 [&.visible]:opacity-100 [&.visible]:translate-y-0',
    slideLeftFade: 'opacity-0 -translate-x-20 [&.visible]:opacity-100 [&.visible]:translate-x-0',
    slideRightFade: 'opacity-0 translate-x-20 [&.visible]:opacity-100 [&.visible]:translate-x-0',
    scaleSlideUp: 'opacity-0 scale-75 translate-y-10 [&.visible]:opacity-100 [&.visible]:scale-100 [&.visible]:translate-y-0',
    scaleSlideDown: 'opacity-0 scale-75 -translate-y-10 [&.visible]:opacity-100 [&.visible]:scale-100 [&.visible]:translate-y-0'
  }

  const animationClass = animations[animation] || animations.fade

  return (
    <div
      ref={elementRef}
      className={`transition-all ${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

AppearOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    'fade', 'slideLeft', 'slideRight', 'slideUp', 'slideDown',
    'zoomIn', 'zoomOut', 'rotateLeft', 'rotateRight', 'blurIn',
    'slideUpFade', 'slideDownFade', 'slideLeftFade', 'slideRightFade',
    'scaleSlideUp', 'scaleSlideDown'
  ]),
  duration: PropTypes.number,
  delay: PropTypes.number,
  threshold: PropTypes.number,
  once: PropTypes.bool,
  className: PropTypes.string
}

export default AppearOnScroll