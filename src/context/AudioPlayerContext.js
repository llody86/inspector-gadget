import React, { useState } from "react";

const AudioPlayerContext = React.createContext([{}, () => {}]);

const AudioPlayerProvider = (props) => {

    const [state, setState] = useState({});


    return (
        <AudioPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </AudioPlayerContext.Provider>
    )
}

export { AudioPlayerContext, AudioPlayerProvider }
