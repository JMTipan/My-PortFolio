import styles from './nav.module.css'

function Nav(){

    return (

        
        <>    
             <h2 style={{position: "absolute", padding: "19.200px", color: "#8685EF"}}>by.joshua</h2>
           <div className={styles.navMoveSide}>
            <ul className={styles.navUl}>
                <div className={styles.burgerStyle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
              
                <li className={styles.navList}><a >About Me</a></li>
                <li className={styles.navList}><a >PortFolio</a></li>
                <li className={styles.navList}><a >Contact</a></li>
            </ul>
            </div>
          
        </>  

    );
}

export default Nav