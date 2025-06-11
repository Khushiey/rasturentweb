import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/Nav.css'
import  { faBars, faBowlFood } from '@fortawesome/free-solid-svg-icons'
export default function Home(){
    return(
        <>
        
        
            <div className="container">
            <div className="nav">
                <div className="logo">
                <h1><FontAwesomeIcon icon={faBowlFood} /></h1>
                 <h2><span>C</span>ompany</h2>
                </div>
                <div className="menu">
                    <h1><FontAwesomeIcon icon={faBars}/></h1>
                </div>
            </div>
            </div>
        
        
        
        </>
    )
}