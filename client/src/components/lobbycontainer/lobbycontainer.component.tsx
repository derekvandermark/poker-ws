import { ReactNode } from 'react';
import './lobbycontainer.styles.scss';

interface LCProps {
    children?: ReactNode
}

export default function LobbyContainer({ children } : LCProps) {
    return (
        <main className="lobby-container" >{children}</main>
    );
}