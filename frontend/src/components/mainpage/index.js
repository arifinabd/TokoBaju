import React from 'react'
import './style.css'

import CardHome from './card_home'

function MainPage(props) {
    const handleClick = (e) => {
        e.preventDefault()
        props.history.push("/productlist")
    }

    return (
        <div className="cover">
            <div className="background1"></div>
            <div className="main_page">
                <nav className="kecil">
                    <a href="#">lates</a>
                    <a href="#">all</a>
                </nav>

                <div className="title">
                    <div className="title1">Choose <span>as you want</span></div>
                    <div className="title2">Pay <span>as you can</span></div>
                </div>

                <div className="sub_title">New Concept <span>of Online Shopping</span>
                </div>
                <div className="shop_now">
                    <button onClick={(e) => handleClick(e)}>Shop Now</button>
                </div>

                <div className="contain">
                    <div className="contain1">
                        <p>Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here.</p>
                    </div>
                    <CardHome/>
                </div>
            </div>
        </div>
    )
}

export default MainPage
