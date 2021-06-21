import './styles.css'

export default function Header() {
    return (
        <header>
        <nav>
            <a href="/">
                <img src="/images/logos/logo-header.png" alt="logo-header"  id="IndexHeaderImg"/>
             </a>
            <div className="nav-links">
                <a href="/login">entrar</a>
                <a href="/sign-up">cadastrar</a>
                </div>
        </nav>
        </header>
    );
}