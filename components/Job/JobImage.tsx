import React, {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from 'react'
import Image from 'next/image'
import css from './job.module.css'
export interface JobImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  size: number
}
export const JobImage: React.FC<JobImageProps> = ({ size, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  const shouldDisplay = loaded ? 'block' : 'none'
  const containerStyle = {
    height: size,
    width: size,
  }
  const placeholderStyle = {
    width: size,
    height: '107px',
    fontSize: `${size * (1 / 8)}px`,
    lineHeight: `${size * (1 / 1.5)}px`,
  }
  return (
    <div className={css['image-container']} style={containerStyle}>
      {!loaded && (
        <div className={css['image-placeholder']} style={placeholderStyle}>
          not found
        </div>
      )}
      {hydrated && (
        <img
          {...props}
          style={{ display: shouldDisplay }}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  )
}
