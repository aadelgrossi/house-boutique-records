import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

export const ReleaseCardsSkeleton = () => {
  const { colors } = useTheme()

  return (
    <ContentLoader
      speed={3}
      width={740}
      height={320}
      backgroundColor={colors.white}
      backgroundOpacity={0.1}
      foregroundOpacity={0.05}
      foregroundColor={colors.white}
      viewBox="0 0 740 320"
    >
      <rect x="0" y="0" rx="5" ry="5" width="240" height="30" />

      <rect x="0" y="60" rx="5" ry="5" width="180" height="180" />
      <rect x="0" y="250" rx="5" ry="5" width="150" height="25" />
      <rect x="0" y="280" rx="5" ry="5" width="110" height="15" />
      <rect x="0" y="300" rx="10" ry="10" width="80" height="20" />

      <rect x="240" y="60" rx="5" ry="5" width="180" height="180" />
      <rect x="240" y="250" rx="5" ry="5" width="175" height="25" />
      <rect x="240" y="280" rx="5" ry="5" width="120" height="15" />
      <rect x="240" y="300" rx="10" ry="10" width="80" height="20" />

      <rect x="480" y="60" rx="5" ry="5" width="180" height="180" />
      <rect x="480" y="250" rx="5" ry="5" width="80" height="25" />
      <rect x="480" y="280" rx="5" ry="5" width="110" height="15" />
      <rect x="480" y="300" rx="10" ry="10" width="80" height="20" />
    </ContentLoader>
  )
}
