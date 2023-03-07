import { useEffect, useRef, useState } from 'preact/hooks'

type Props = {
  url: string
  alt: string
  style: string
}

const Image = ({ url, alt, style }: Props) => {
  const img = useRef<HTMLImageElement>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const onLoad = () => {
    setIsLoaded(true)
  }
  console.log(img.current)

  return (
    <img
      src={url}
      alt={alt}
      className={`${style} ${isLoaded ? 'animate-none' : 'animate-pulse bg-gray-400'}`}
      ref={img}
      onLoad={onLoad}
    />
  )
}

export default Image
