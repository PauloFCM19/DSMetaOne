import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div id="dsmeta-logo-conteiner">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por <a href="https://github.com/PauloFCM19" target="_blank">Paulo Fernando</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;