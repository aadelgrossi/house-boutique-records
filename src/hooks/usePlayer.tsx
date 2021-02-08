import { createContext, Dispatch, Reducer, useContext, useReducer } from 'react'

interface PlayerContextData {
  state: State
  dispatch: Dispatch<Action>
}

export const PlayerContext = createContext<PlayerContextData>(
  {} as PlayerContextData
)

type Action = {
  name: 'load' | 'play' | 'pause'
  payload?: Release | null
}

type State = {
  playing: boolean
  currentTrack: Release | null
}

const initialState: State = {
  playing: false,
  currentTrack: null
}

const reducer: Reducer<State, Action> = (
  state: State,
  { name, payload = null }: Action
) => {
  switch (name) {
    case 'load':
      return { ...state, currentTrack: payload }
    case 'play':
      return { ...state, playing: true }
    case 'pause':
      return { ...state, playing: false }
    default:
      throw new Error()
  }
}

export const PlayerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = (): PlayerContextData => {
  const context = useContext(PlayerContext)

  return context
}
