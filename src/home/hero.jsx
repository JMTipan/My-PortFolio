import style from './hero.module.css'


function Hero(props){


    return (
        <>
        <div className={style.heroFlexContainer}>
            <div className={style.hero}>
                <h1>Hi, Im Joshua</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur dolor minima eveniet eaque vel maiores ea odit temporibus repellat odio voluptatum amet cumque eligendi illo autem vitae aliquam modi labore asperiores, sequi eius. Blanditiis esse iusto ea ipsam velit!</p>
            </div>
        </div>
        </>
    );
}

export default Hero