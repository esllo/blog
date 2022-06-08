import React, { useEffect, useMemo } from 'react'

import { ThumbnailContainer } from '../thumbnail-container'
import { ThumbnailItem } from '../thumbnail-item'
import { CATEGORY_TYPE } from '../../constants'
import aos from 'aos'

import 'aos/dist/aos.css'

export const Contents = ({ posts, countOfInitialPost, count, category }) => {
  useEffect(() => {
    aos.init({ mirror: true, once: false, offset: 0 })
  }, [])

  const refinedPosts = useMemo(() =>
    posts
      .filter(
        ({ node }) =>
          category === CATEGORY_TYPE.ALL ||
          node.frontmatter.category === category
      )
      .slice(0, count * countOfInitialPost)
  )

  return (
    <ThumbnailContainer>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${node.fields.slug}`} />
      ))}
    </ThumbnailContainer>
  )
}
