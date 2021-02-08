import { createContext, useCallback, useContext, useState } from 'react'

interface PlayerContextData {
  track: Release | null
  loadTrack(release: Release): void
}

export const PlayerContext = createContext<PlayerContextData>(
  {} as PlayerContextData
)

export const PlayerProvider: React.FC = ({ children }) => {
  const [track, setTrack] = useState<Release | null>(null)

  const loadTrack = useCallback((track: Release) => {
    setTrack(track)
  }, [])

  return (
    <PlayerContext.Provider value={{ track, loadTrack }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = (): PlayerContextData => {
  const context = useContext(PlayerContext)

  return context
}
