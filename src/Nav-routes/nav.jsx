import styles from './nav.module.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
//routes component
import Hero from '../home/hero';
function Nav(){

    return (
        
        <>    
            <ul className={styles.navUl}>
                <li className={styles.navList}><Link style={{textDecoration: "none", padding: "inherit"}} to="/">Home</Link></li>
                <li className={styles.navList}><Link style={{textDecoration: "none", padding: "inherit"}} to="/about me">About Me</Link></li>
                <li className={styles.navList}><Link style={{textDecoration: "none", padding: "inherit"}} to="/PortFolio">PortFolio</Link></li>
                <li className={styles.navList}><Link style={{textDecoration: "none", padding: "inherit"}} to="Contact">Contact</Link></li>
            </ul>
        
            <Routes>
                <Route path='/' element={<Hero />}/>
                <Route path='/' element/>
                <Route path='/' element/>
                <Route path='/' element/>
            </Routes>
        </>  

    );
}

export default Nav