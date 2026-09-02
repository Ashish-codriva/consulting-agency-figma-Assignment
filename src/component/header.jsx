import './header.css'
import SuccessBtn from './successBtn.jsx';
import logo from '../assets/Logo.png';

function Header(){
    return (

        <section id="header">

            <div class="head-div">

                <div class="logo-div">
                    <img src={logo} alt="Logo" class="logo-img" />
                    <span class="logo-text">Crito</span>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Page</li>
                        <li>Pricing</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <SuccessBtn />
                </div>

            </div>

        </section>

    )
}

export default Header;