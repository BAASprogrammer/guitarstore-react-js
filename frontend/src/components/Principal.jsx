import React from 'react';
import ColorProvider from "../contexts/ColorProvider"
import App from '../App';
 
export default function Principal() {
    return(
        <ColorProvider>
            <App/>
        </ColorProvider>
    )
}