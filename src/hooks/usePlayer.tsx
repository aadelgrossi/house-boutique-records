import {
  ReactNode,
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer
} from 'react'

import { Release } from '~/types'

interface PlayerContextData {
  state: State
  dispatch: Dispatch<Action>
}

export const PlayerContext = createContext({} as PlayerContextData)

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

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
