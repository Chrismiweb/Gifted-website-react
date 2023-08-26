import React from "react";
import './Features2.css'
import Props from "./Chris";
import money from '../images/logo.png'


const Features2 =()=>{
    return(
        <div className="nnn">
            <Props
                Image = {money}
                heading = 'Learn'
                paragraph = 'You’ll Be Taught By Our Experience And Qualified Teachers, And Get Update Through Our Website, Telegram Page And Newsletters.'
                btn = 'Learn More'
                class = 'one'
            />
            <Props
                Image = {money}
                heading = 'Quiz'
                paragraph = 'Test Your Intellectual Growth And Win Weekly/Monthly Prizes Respectively.'
                btn = 'Learn More'
                class = 'two'
            />
            <Props
                Image = {money}
                heading = 'Earn'
                paragraph = 'You’ll Earn Reward By Daily Incentive, Affiliate Commission And The Quiz You Completed.'
                btn = 'Learn More'
                class = 'three'
            />

        </div>
    )
}
export default Features2;