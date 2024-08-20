import { useState } from "react";
import DropList from "../../components/droplist/droplist.component";
import LobbyContainer from "../../components/lobbycontainer/lobbycontainer.component";
import './create.scss'

export default function Create() {
    const blinds = {
        // list choice: dollar values
        '$ 0.10/0.20': [0.1, 0.2],
        '$ 0.25/0.50': [0.25, 0.5], 
        '$ 1/2': [1, 2], 
        '$ 2/5': [2, 5], 
        '$ 5/10': [5, 10], 
        '$ 50/100': [50, 100]
    };
    const times = {
        // list choice: time in seconds
        '10 seconds': 10,
        '20 seconds': 20,
        '30 seconds': 30,
        '1 minute': 60,
        '2 minutes': 120,
        '3 minutes': 180
    };

    const [selectedBlind, setSelectedBlind] = useState(Object.keys(blinds)[0]);
    const [selectedTime, setSelectedTime] = useState(Object.keys(times)[0]);
    const [blindsListVisible, setBlindsListVisible] = useState(false);
    const [timesListVisible, setTimesListVisible] = useState(false);

    function closeList() {
        if (blindsListVisible) {
            setBlindsListVisible(false);
        }
        if (timesListVisible) {
            setTimesListVisible(false);
        }
    }

    return (
        <LobbyContainer>
            <div className="settings-container" onClick={closeList} >
                <h1>Game Settings</h1>
                <h2>Blinds</h2>
                <DropList 
                    itemList={Object.keys(blinds)} 
                    selectedItem={selectedBlind} 
                    setSelectedItem={setSelectedBlind} 
                    listVisible={blindsListVisible}
                    setListVisible={setBlindsListVisible}
                />
                <h2>Time per Move</h2>
                <DropList 
                    itemList={Object.keys(times)} 
                    selectedItem={selectedTime} 
                    setSelectedItem={setSelectedTime} 
                    listVisible={timesListVisible}
                    setListVisible={setTimesListVisible}
                />
            </div>
        </LobbyContainer>
    );
}