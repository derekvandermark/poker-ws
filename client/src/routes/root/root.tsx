import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import './root.scss';
import LobbyContainer from "../../components/lobbycontainer/lobbycontainer.component";

export default function Root() {
    return (
        <LobbyContainer>
            <h1 className="title" >Texas Hold'Em</h1> 
            <div className="lobby-link-container" >
                <Link to={'create'} className="lobby-link" >Start Table</Link>
                <Link to={'join'} className="lobby-link" >Join Table</Link>
            </div>
        </LobbyContainer>
    );
}