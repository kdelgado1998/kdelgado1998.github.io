import React from 'react'

export const Nosotros = () => {
    return (
        <main className="contenedor contenido-principal">
            <h2><span>Conoce más</span> Sobre nosotros</h2>

            <div className="proceso-cafe">
                <div className="imagen">
                    <img src="/public/img/virtus+3.jpg" alt="proceso" />
                </div>
                <div className="texto">
                    <h3>Misión:</h3>
                    <p>Ser una iniciativa social que impacta en las comunidades de Costa Rica a través de la capacitación de las personas, fomentando valores y emprendedurismo.</p>
                </div>
            </div>

            <div className="proceso-cafe">
                <div className="imagen">
                    <img src="/public/img/virtus+6.jpg" alt="proceso" />
                </div>
                <div className="texto">
                    <h3>Visión:</h3>
                    <p>Ser una iniciativa social de capacitación de personas presente en todas las comunidades de Costa Rica, impulsado como un proyecto de responsabilidad social empresarial y con enlaces internacionales.</p>
                </div>
            </div>

            <div className="proceso-cafe">
                <div className="imagen">
                    <img src="/public/img/virtus+7.jpg" alt="proceso" />
                </div>
                <div className="texto">
                    <h3>Nuestro Objetivo:</h3>
                    <p>Las personas profesionales imparten capacitaciones en temas de gestión empresarial y desarrollo personal a las personas universitarias y estas a su vez a las personas beneficiarias</p>
                </div>
            </div>

            <div className="proceso-cafe">
                <div className="imagen">
                    <img src="/public/img/virtus+4.jpg" alt="proceso" />
                </div>
                <div className="texto">
                    <h3>Competencias a desarrollar:</h3>
                    <ol>
                        <li className="competencias">Aportar de las habilidades adquiridas en la universidad para el crecimiento de la sociedad.</li>
                        <li className="competencias">Comprensión de otros ambientes y realidades.</li>
                        <li className="competencias">Expresarse de manera que las personas emprendedoras puedan entender el mensaje que se transmite.</li>
                        <li className="competencias">Adquirir conocimiento sobre los emprendedurismos para aplicarlo en su vida personal y futuro profesional.</li>
                        <li className="competencias">Experiencia de trabajo en equipo tanto con profesionales como con emprendedores.</li>
                        <li className="competencias">Hablar en público</li>
                    </ol>
                </div>
            </div>
        </main>
    )
}
