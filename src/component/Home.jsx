import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/Home.css'
import  { faBars, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'
export default function Home(){
    return(
        <>
        
        <div className="page">
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
        </div>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
        
        </>
    )
}