import { Link } from "react-router-dom"
import styles from "./CabeceraLink.module.css"
function CabeceraLink({url, Children}){

    return(
        <Link to={url} className={styles.link}>
        {Children}
        
        </Link>
    )
}
export default CabeceraLink