import React, { useContext } from "react"
import { AudioPlayerContext } from "../../context/AudioPlayerContext";

const TrackList = () => {
  const [state, setState] = useContext(AudioPlayerContext);
  return (
    <button onClick={() => setState(state => ({ ...state, name: 'Clicked!' }))}>
      {state.name}
    </button>
  )
}

export default TrackList;