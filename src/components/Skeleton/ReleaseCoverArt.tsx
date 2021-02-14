import { FC } from 'react'

import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

export const ReleaseCover: FC = () => {
  const {
    colors: { white }
  } = useTheme()

  return (
    <ContentLoader
      speed={1}
      width={200}
      height={200}
      backgroundColor={white}
      backgroundOpacity={0.1}
      foregroundOpacity={0.05}
      foregroundColor={white}
      viewBox="0 0 200 200"
    >
      <rect x="0" y="0" rx="5" ry="5" width="200" height="200" />
    </ContentLoader>
  )
}
