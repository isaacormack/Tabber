import React, {useEffect, useState} from "react";
import "./LibraryPage.css";
import LibraryTable from "./LibraryTable";
import LibraryPlayer from "../../common/musicplayer/component/LibraryPlayer";
import {getAudioFile} from "../../common/musicplayer/component/MusicHelper";
import {LickInterface} from "../../common/lick/interface/LickInterface";



export default function LibraryPage() {

    const [licks, setLicks] = useState<LickInterface[]>([])
    const [selected, setSelected] = useState<LickInterface>()
    const [selectedFile, setSelectedFile] = useState<Blob>()

    function getLibrary() {
        fetch("/api/user/licks", {
            method: "GET"
        }).then((response) => {
            if (response.status === 200) { //remove this later
                return response.json();
            }
        }).then((responseJson) => {
            if (responseJson) {
                setLicks(responseJson);
            }
        })
    }

    useEffect(() => {
        getLibrary();
    }, [])

    useEffect(() => {
        if (selected) {
            getAudioFile(selected).then((file: Blob) => {
                setSelectedFile(file);
            })
        }
    }, [selected])

    //TODO: add music player next to library title
    return (
        <div>
            <div className="library-table-wrapper centered">
                <div className="library-title">
                    My Library
                </div>
                <div>
                    <LibraryPlayer audioFile={selectedFile} />
                </div>
                <br />
                <LibraryTable licks={licks} selected={selected} setSelected={setSelected}/>
            </div>
        </div>
    )
}