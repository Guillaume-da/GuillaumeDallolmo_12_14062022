import './styles.scss';

/**
* Allows to show 404 error
*
* @return jsx
* @author Guillaume
* @version 1.0
*/

const Error = () => {
    return (
        <main className="error-page">
            <h1 className="error-page__title">404</h1>
            <p className="error-page__text-content">Oups! La page que vous demandez n'existe pas.</p>
        </main>
    )
}

export default Error