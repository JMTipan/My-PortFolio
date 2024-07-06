import style from './hero.module.css'


function Hero(props){


    return (
        <>
        <div className={style.heroFlexContainer}>
            <div className={style.hero}>
                <h1>Hi, Im Joshua</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur dolor minima eveniet eaq</p>
            </div>
            <img className={style.imgProfile} src="" alt="" height={200} width={200}/>
        </div>
        </>
    );
}

export default Hero