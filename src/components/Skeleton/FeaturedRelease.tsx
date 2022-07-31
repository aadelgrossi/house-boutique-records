import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

export const FeaturedSkeleton = () => {
  const { colors } = useTheme()

  return (
    <ContentLoader
      speed={3}
      width={550}
      height={320}
      backgroundColor={colors.white}
      backgroundOpacity={0.1}
      foregroundOpacity={0.05}
      foregroundColor={colors.white}
      viewBox="0 0 550 320"
    >
      <rect x="0" y="0" rx="5" ry="5" width="240" height="30" />
      <rect x="0" y="60" rx="5" ry="5" width="250" height="250" />
      <rect x="270" y="60" rx="5" ry="5" width="150" height="25" />
      <rect x="270" y="90" rx="5" ry="5" width="110" height="15" />
      <rect x="270" y="115" rx="10" ry="10" width="80" height="20" />
      <rect x="270" y="150" rx="0" ry="0" width="250" height="56" />
    </ContentLoader>
  )
}
