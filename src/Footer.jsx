import './Footer.css'
import Dc from './img/dc.png'

function Footer(){
    return(
        <footer>
            <div className='Footer'>
                <p >All rights <span>reserved</span></p>
                <img src={Dc} alt="" />
            </div>
        </footer>
    )
}

export default Footer