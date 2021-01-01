import React from "react";
import ReactPlayer from "react-player";


export interface LibraryPlayerProps {
    audioFile?: Blob
}



export default function LibraryPlayer(props?: LibraryPlayerProps) {



    if (!props || !props.audioFile) {
        return (<div>Please select a lick to play</div>);
    }

    let audioPath = "";
    if (props.audioFile) {
        try {
            audioPath = URL.createObjectURL(props.audioFile);
        } catch {
            return (<div>Failed to play the lick</div>);
        }
    }
    if (audioPath) {
        return (
            <ReactPlayer url={audioPath}
                         playing={audioPath ? true : false}
                         height={"30px"}
                         width={"250px"}
            controls={true}/>
        )
    } else {
        return (<div>Failed to play the lick</div>);
    }
}

