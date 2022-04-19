import './Apparition.css'
import Origin from './img/origin.png'


function Apparition(){
    return(
        <section className='Apparition'>
            <div className='Container'>
                <h1 className='H1'>first
                <span>Apparition</span>
                </h1>

                <div className='Wrapper-apparition'>
                    <div className='Img'>
                        <img src={Origin} alt="" />
                    </div>
                    <div>
                        <p className='Text'>ORIGINALLY PUBLISHED IN APRIL 1938 BY DC COMICS, ACTION COMICS #1 PRESENTED THE ORIGIN OF SUPERMAN, FROM HIS ARRIVAL ON EARTH TO BECOME THE FIRST GREAT COMIC HERO.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apparition;