import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alerta } from '../components/Alerta';
import { Spinner } from '../components/Spinner';

export const Contacto = () => {
  
    const form = useRef();
    const [alerta, setAlerta] = useState(false);
    const [spinner, setSpinner] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_qd7v3i4', 'template_xki3n5r', form.current, {
          publicKey: 'YsDFUQs3OAcK6z8fI',
        })
        .then(
          () => {
            console.log('SUCCESS!');
  
            setSpinner(true);
  
            setTimeout(() => {
              setSpinner(false)
              setAlerta(true);
            }, 3000);
  
            setTimeout(() => {
              setAlerta(false);
            }, 6000); // Oculta la alerta después de 3 segundos (3000 milisegundos)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <main className="contenedor contenido-principal">
        <h2><span>Reserva tu</span> Cita</h2>
  
        <div className="contenido-contacto">
          <form ref={form} onSubmit={sendEmail} className="formulario">
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" placeholder="Tu nombre" />
            </div>
  
            <div className="campo">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Tu email" />
            </div>
  
            <div className="campo">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" name="telefono" />
            </div>
  
            <div className="campo">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
  
        {spinner && (
          <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        )}
  
        {alerta && (
          <div className="alerta">
            <p>¡Tu información se ha enviado con éxito!</p>
          </div>
        )}
  
        <section>
          <div className="texto-contacto">
            <h3>Nuestras redes Sociales:</h3>
          </div>
  
          <div className="contenedor contenido-iconos">
            <div className="listado-icono-contacto">
              <a href="https://www.facebook.com/Mentesemprendedorasmeta" className="icono-contacto">
                <img src="/public/img/icono_facebook.png" alt="icono" />
              </a>
  
              <a href="https://www.instagram.com/mentesemprendedorasmeta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="icono-contacto">
                <img src="/public/img/icono_IG.png" alt="icono" />
              </a>
  
              {/* <a href="#" className="icono-contacto">
                <img src="/public/img/icono_LI.png" alt="icono" />
              </a> */}
            </div>
          </div>
        </section>
      </main>
    );
}
