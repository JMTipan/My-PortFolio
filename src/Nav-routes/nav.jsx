import styles from './nav.module.css'

function Nav(){

    return (
        
        <>    
           <div className={styles.navMoveSide}>
            <ul className={styles.navUl}>
                <li className={styles.navList}><a >About Me</a></li>
                <li className={styles.navList}><a >PortFolio</a></li>
                <li className={styles.navList}><a  >Contact</a></li>
            </ul>
            </div>
          
        </>  

    );
}

export default Nav