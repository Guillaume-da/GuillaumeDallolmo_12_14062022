import { Link } from 'react-router-dom';
import './styles.scss';

const Error = () => {
    return (
        <main className="error-page">
            <h1 className="error-page__title">404</h1>
            <p className="error-page__text-content">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'><p className="error-page__back-to-home">Retourner sur la page d'accueil</p></Link>
        </main>
    )
}

export default Error