import cn from 'classnames'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ title, imageObject, slug, width, height }) {
  const image = (
    <img
      width={width}
      height={height}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
      src={urlForImage(imageObject).width(width).height(height).url()}
    />
  )

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
