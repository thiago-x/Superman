import './Creators.css'
import Jerry from'./img/jerry_siegel.jpg'
import Joe from './img/Joe_shuster.jpg'

function Creators(){
    return(
        <section className='Creators'>
            <h1 className='H1'>The
                <span>creators</span>
            </h1>

            <div className='Wrapper-creators'>
                <div>
                    <img src={Jerry} alt="" />
                    <p>Jerry Siegel.</p>
                </div>
                <div>
                    <img src={Joe} alt="" />
                    <p>Joe Shuster</p>
                </div>
            </div>
        </section>
    )
}

export default Creators;