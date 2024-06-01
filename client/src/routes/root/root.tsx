import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import './root.css';

export default function Root() {
    return (
        <main className="lobby-container" >
            <div className="lobby-link-container" >
                <Link to={'create'} className="lobby-link" >Start Table</Link>
                <Link to={'join'} className="lobby-link" >Join Table</Link>
            </div>
        </main>
    );
}