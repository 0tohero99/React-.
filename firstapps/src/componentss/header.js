import React from "react";
import "./header.css"

const Header = () => {

    const mystyle = {
        text: {
            fontSize: "18px",
            letterSpacing: "7px",
            wordSpacing: "3px",
        }
    }

    return (
        // inline css 👇//
        <header style={{ textAlign: "center", color: "green", backgroundColor: "lightgreen" }}>
            <h1>React</h1>
            {/* external css 👇 */}
            <input />
            {/*style obzect or internal css 👇 */}
            <div style={mystyle.text}>inputs text here !</div>
        </header>
    )
}

export default Header