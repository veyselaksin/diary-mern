import React from 'react'

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/diary'>Diary</a>
                    </li>
                </ul>
            </nav>

            <span>The Diary</span>
        </header>
    )
}

export default Navbar
