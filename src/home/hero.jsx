import style from './hero.module.css'
import javascritp_logo from "../assets/Javascript.png"
import html_logo from "../assets/Html.webp"
import css_logo from "../assets/Css.png"
import react_logo from '../assets/React.png'

function Hero(props){


    return (
        <>
        <div className={style.heroFlexContainer}>
            <div className={style.hero}>
                <h1>Hi, Im Joshua im a front end developer</h1>
                <p>i still dont kow what to put here :)</p>
                <div className={style.techStackContainer}>
                    <h3>Tech Stack</h3>
                    <div className={style.techLayout}>
                        <img src={javascritp_logo} alt="javascript" width={40}/>
                        <img src={html_logo} alt="html" width={40}/>
                        <img src={css_logo} alt="css" width={40}/>
                        <img src={react_logo} alt="React" width={40}/>
                    </div>
                </div>
                
            </div>
            <img className={style.heroProfile} src="" alt="" height={400} width={400}/>
            <div className='blob'></div>
        </div>
     
        </>
    );
}

export default Hero