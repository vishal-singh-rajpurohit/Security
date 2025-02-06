import React from 'react'

const Navigation = () => {
    return (
        <nav class="nav">
            <div class="left">
                <ul class="left-ul">
                    <li class="left-li underline-center">Home</li>
                    <li class="left-li underline-center">About</li>
                    <li class="left-li underline-center">Contact</li>
                </ul>
            </div>
            <div class="mid">
                <span class="logo-span">
                    <img
                        src="./Assets/logo3.png"
                        alt="logo of sewad info tech"
                        class="logo-"
                    />
                </span>
            </div>
            <div class="right">
                <ul class="right-ul">
                    <li class="right-li"></li>
                    <li class="right-li"></li>
                    <li class="right-li"></li>
                    <li class="right-li"></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation