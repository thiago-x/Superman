import './Header.css'
// import Logo from './img/logo.png'

function Header(){
    return(
        <header className='Header'>
            {/* <img src={Logo} alt="" className='Logo'></img> */}
            <p className='Cite'>"DREAMS SAVE US, ELEVATE US AND TRANSFORM US."</p>
            <nav className='Nav'>
                <ul>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;