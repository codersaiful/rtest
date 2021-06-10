import headerLogo from './images/logo.webp';
import './header.css';

function Header(){
    return (
        <div className="header">
            <div className="logo-area">
                <img src={headerLogo} alt="Header Logo"/>
            </div>
            <div className="right-area">
                <h2>UltraAddons Elementor Lite</h2>
            </div>
        </div>
    );
}

export default Header;