import React, { useEffect, useRef } from 'react'

import aos from 'aos'
import 'aos/dist/aos.css'

export const PostContainer = ({ html }) => {
  const divRef = useRef(null)
  useEffect(() => {
    if (divRef.current) {
      const children = [...divRef.current.children]
      children.forEach(child => child.setAttribute('data-aos', 'fade-up'))
    }
    aos.init({ offset: 0, once: true })
  }, [])
  return <div ref={divRef} dangerouslySetInnerHTML={{ __html: html }} />
}
