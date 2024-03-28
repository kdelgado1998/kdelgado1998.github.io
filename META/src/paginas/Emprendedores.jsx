import React from 'react'

export const Emprendedores = () => {
    return (
        <main className="contenedor contenido-principal">
            <div className="contenedor">
                <div className="texto-uni">
                    <h3>¿Buscas Emprender o impulsar tu emprendimiento?</h3>
                </div>

                <div className="contenido-universitarios">
                    <div className="texto-u">
                        <div className="contenido-nosotros">
                            <div className="imagen">
                                <img src="/public/img/meta-9.jpg" alt="nosotros" />
                            </div>
                            <div className="texto">
                                <p>Se parte de la familia <span>Meta</span> y cultiva tu emprendimiento con conocimientos adquiridos por parte de nuestros universitarios.</p>
                                <p>Meta es una iniciativa de capacitación a través de <span>talleres</span> impartidos por jóvenes.</p>
                                <p>Para lograr que más personas logremos desenvolvernos con <span>éxito</span> en los diversos entornos que influenciamos: familia, trabajo, centro de estudio, sociedad, etc.</p>
                            </div>
                        </div>

                        <div className="contenido-u">
                            <div className="orden-uni">
                                <div className="flex-uni">
                                    <h3 className="texto-uni">¿Quiénes actúan?</h3>
                                    <ol>
                                        <li className="competencias">Profesionales</li>
                                        <li className="competencias">Estudiantes</li>
                                        <li className="competencias">Personas beneficiadas</li>
                                    </ol>
                                </div>

                                <div className="flex-uni">
                                    <h3 className="texto-uni">Nuestros Valores</h3>
                                    <ol>
                                        <li className="competencias">Responsabilidad Social</li>
                                        <li className="competencias">Alegría</li>
                                        <li className="competencias">Compromiso</li>
                                        <li className="competencias">Amistad</li>
                                        <li className="competencias">Respeto</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
