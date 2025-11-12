import React, { Component } from 'react'
import Monitor from '../Objetos/Monitor'
import mesa from './../../assets/mesa.png'
import lampara from './../../assets/lampara.png'
import ventana from './../../assets/ventana.png'
import tajamar from './../../assets/tajamar.jfif'
import infantaelena from './../../assets/infantaelena.jpg'
import cuadro from './../../assets/cuadro.png'
import aeioros from './../../assets/aeioros.png'
import laredonda from './../../assets/laredonda.png'
import './Desktop.css' // <-- agrega este import
import Libros from '../Objetos/Libros'
import Cafe from '../Objetos/Cafe'
import Telefono from '../Objetos/Telefono'
import Swal from 'sweetalert2'

export default class Desktop extends Component {
  state = {
    objetoActivo: null
  }

  mostrarVidaAcedimica = () => {
    Swal.fire({
            // Título
            title: "<strong>Vida Académica</strong>", 
            icon: "info",
            
            // PROPIEDAD CLAVE: Aumenta el ancho de la alerta
            width: '1000px', 
            
            // Contenido HTML: Estructurado para aprovechar el ancho
            html: `
                <p style="font-size: 1.1em; text-align: left; margin-bottom: 25px; line-height: 1.5;">
                Actualmente me centro en la formación <strong>FullStack y Cloud</strong>, complementando mi sólida base de desarrollo web. Mi objetivo es crear soluciones eficientes y escalables.
                </p>
                
                <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">

                <div style="display: flex; justify-content: space-between; text-align: left; gap: 30px;">
                    
                    <div style="flex: 1; padding-right: 15px; justify-content:center">
                        
                        
                        <strong style="font-size: 1.1em; display: flex; align-items: center; gap: 10px;">
                            <img src="${tajamar}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;" alt="Colegio Tajamar"/>
                            <span>Colegio Tajamar</span>
                        </strong>

                        <p style="margin: 5px 0 0 0;">Desarrollo FullStack + Cloud</p>
                    </div>

                    <div style="flex: 1; padding-right: 15px;">
                        
                        <strong style="font-size: 1.1em; display: flex; align-items: center; gap: 10px;">
                            <img src="${infantaelena}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;" alt="Colegio Tajamar"/>
                            <span>I.E.S. Infanta Elena</span>
                        </strong>

                        <p style="margin: 5px 0 0 0;">C.F.G.S. Desarrollo de Aplicaciones Web</p>
                    </div>
                    
                </div>
            `,
            
            // Botones de control
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            
            // Botón de Confirmación (Positivo)
            confirmButtonText: `
                Ver Habilidades
            `,
            confirmButtonAriaLabel: "Ver habilidades técnicas",
            
            // Botón de Cancelación (Negativo)
            cancelButtonText: `
                Cerrar
            `,
            cancelButtonAriaLabel: "Cerrar ventana de información académica"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    title: "<strong>Mis Habilidades</strong>",
                    icon: "success",
                    width: '900px',
                    html: `
                        <div style="text-align: left; font-size: 1.05em; line-height: 1.6;">

                        <p style="margin-bottom: 20px;">
                            Como <strong>Desarrollador Full-Stack en formación</strong>, trabajo con un conjunto equilibrado de tecnologías frontend, backend y cloud, siempre buscando escribir código limpio y escalable.
                        </p>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">

                            <div>
                            <h4 style="color: #007bff; margin-bottom: 8px;">Frontend</h4>
                            <p>HTML, CSS, Angular, React, Vue, jQuery, Bootstrap</p>
                            </div>

                            <div>
                            <h4 style="color: #007bff; margin-bottom: 8px;">Backend</h4>
                            <p>PHP, Java, C#</p>
                            </div>

                            <div>
                            <h4 style="color: #007bff; margin-bottom: 8px;">Bases de Datos</h4>
                            <p>MySQL</p>
                            </div>

                            <div>
                            <h4 style="color: #007bff; margin-bottom: 8px;">Cloud & DevOps</h4>
                            <p>AWS, Azure</p>
                            </div>
                        </div>

                        <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">

                        <p style="font-size: 0.95em; color: #555;">
                            💡 En constante aprendizaje: actualmente profundizando en tecnologías Cloud (AWS, Azure) y frameworks modernos de desarrollo web.
                        </p>
                        </div>
                    `,
                    showCloseButton: true,
                    confirmButtonText: "Cerrar",
                    focusConfirm: false,
                })

            } 
        });
  }

  
  mostrarContacto = () => {
    Swal.fire({
        title: "<strong>Contacto</strong>",
        icon: "info",
        width: "700px",
        html: `
            <div style="text-align: center; font-size: 1.05em; line-height: 1.6;">

            <p style="margin-bottom: 20px;">
                Si deseas ponerte en contacto conmigo, colaborar en un proyecto o simplemente charlar sobre desarrollo web, ¡estaré encantado de escucharte!
            </p>

            <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">

                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/alejandro-c%C3%A1novas-l%C3%B3pez-026b62390/" 
                target="_blank" 
                style="text-decoration: none; color: #0a66c2; font-weight: bold; display: flex; align-items: center; gap: 10px;">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                    style="width: 32px; height: 32px;">
                LinkedIn / Alejandro Cánovas
                </a>

                <!-- Gmail -->
                <a href="mailto:aleecanovaslopez@gmail.com" 
                style="text-decoration: none; color: #d93025; font-weight: bold; display: flex; align-items: center; gap: 10px;">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                    style="width: 32px; height: 32px;">
                aleecanovaslopez@gmail.com
                </a>

                <!-- GitHub -->
                <a href="https://github.com/alexcl11" 
                target="_blank" 
                style="text-decoration: none; color: #333; font-weight: bold; display: flex; align-items: center; gap: 10px;">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                    style="width: 32px; height: 32px;">
                github.com/alexcl11
                </a>

            </div>

            <hr style="border: 0; height: 1px; background: #ddd; margin: 25px 0;">

            <p style="font-size: 0.95em; color: #555;">
                💬 <em>Siempre abierto a nuevas oportunidades y colaboraciones. ¡No dudes en escribirme!</em>
            </p>
            </div>
        `,
        showCloseButton: true,
        confirmButtonText: "Cerrar",
        focusConfirm: false,
    });

  }

  mostrarSobreMi = () => {
    Swal.fire({
        title: "<strong>Acerca de mí</strong>",
        icon: "info",
        width: '900px',
        html: `
            <div style="text-align: left; font-size: 1.05em; line-height: 1.6;">
            
            <p>
                ¡Hola! Soy <strong>Alejandro Cánovas</strong>, 
                un <b>Desarrollador Full-Stack en formación</b> con pasión por la tecnología, 
                la innovación y el aprendizaje continuo.
            </p>

            <p>
                Actualmente estoy cursando el 
                <strong style="display: inline-flex; align-items: center; gap: 8px;">
                Máster en Desarrollo FullStack + Cloud
                </strong> 
                en <b>Colegio Tajamar</b>, combinando una sólida base técnica con la exploración de entornos Cloud modernos como <b>AWS</b> y <b>Azure</b>.
            </p>

            <hr style="border: 0; height: 1px; background: #ddd; margin: 15px 0;">

            <h4 style="color: #007bff; font-weight: bold;">Mi Filosofía</h4>
            <p>
                Creo que el desarrollo va más allá del código: se trata de crear soluciones que aporten valor real, 
                sean escalables y brinden una gran experiencia al usuario. 
                Me gusta trabajar en entornos colaborativos, mantener buenas prácticas y seguir aprendiendo cada día.
            </p>

            <hr style="border: 0; height: 1px; background: #ddd; margin: 15px 0;">

            <h4 style="color: #007bff; font-weight: bold;">Actualmente</h4>
            <ul style="margin-left: 20px;">
                <li>Perfeccionando mis conocimientos en <b>tecnologías Cloud (AWS, Azure)</b>.</li>
                <li>Profundizando en frameworks modernos de desarrollo web.</li>
                <li>Mejorando mis habilidades de <b>diseño, optimización y rendimiento</b> en aplicaciones full-stack.</li>
            </ul>

            <p style="font-size: 0.95em; color: #555; margin-top: 15px;">
                💬 <em>Mi objetivo es crecer como profesional aportando soluciones innovadoras y efectivas en cada proyecto.</em>
            </p>

            </div>
        `,
        showCloseButton: true,
        confirmButtonText: "Cerrar",
        focusConfirm: false,
    })
  }

  mostrarExperiencia = () => {
    Swal.fire({
        title: "<strong>Experiencia Profesional</strong>",
        icon: "info",
        width: '900px',
        html: `
            <div style="text-align: left; font-size: 1.05em; line-height: 1.6;">
            
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <img src="${aeioros}" alt="Aeioros Servicios" style="width: 50px; height: 50px; object-fit: contain; border-radius: 6px; background: #fff; padding: 3px;">
                <div>
                <strong style="font-size: 1.2em;">Aeioros Servicios</strong><br>
                <span style="color: #555;">Desarrollador Web (Contrato de Prácticas)</span>
                </div>
            </div>

            <p style="margin: 0 0 8px 0; color: #777;">
                📍 Madrid, Comunidad de Madrid, España &nbsp; | &nbsp; 🗓️ mar. 2025 – jun. 2025 (4 meses)
            </p>

            <hr style="border: 0; height: 1px; background: #ddd; margin: 15px 0;">

            <ul style="margin-left: 20px;">
                <li><b>Liderazgo de Migración:</b> Participé activamente en la actualización y migración de la plataforma <b>Drupal</b>, garantizando la integridad de los datos y la continuidad del servicio.</li>
                <li><b>Desarrollo de Funcionalidades:</b> Creé y personalicé módulos en <b>PHP</b> para mejorar la gestión interna y la experiencia de usuario.</li>
                <li><b>Optimización del Front-End:</b> Apliqué mejoras con <b>jQuery</b> y optimicé el sistema de temas en Drupal, corrigiendo errores y mejorando el rendimiento.</li>
                <li><b>Mantenimiento y Buenas Prácticas:</b> Consolidé conocimientos en entornos reales aplicando buenas prácticas en mantenimiento y desarrollo de CMS.</li>
            </ul>

            <hr style="border: 0; height: 1px; background: #ddd; margin: 15px 0;">

            <p style="font-size: 0.95em; color: #555;">
                💡 Esta experiencia me permitió fortalecer mis habilidades en desarrollo web, gestión de proyectos reales y trabajo en equipo dentro de un entorno profesional.
            </p>
            </div>

             <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">

            <h4 style="color: #007bff; font-weight: bold;">Proyecto de Fin de Grado — <em>“La Redonda”</em></h4>
            
            <div style="display: flex; align-items: flex-start; gap: 15px;">
                <img src="${laredonda}" alt="Proyecto La Redonda" style="width: 120px; height: auto; border-radius: 8px; background: #f9f9f9; padding: 4px;">
                <div>
                <p>
                    Este proyecto fue mi <b>Trabajo de Fin de Grado</b>: una plataforma web Full Stack 
                    creada con <b>PHP</b> y <b>JavaScript nativo</b>, centrada en la visualización de 
                    datos y noticias de fútbol mediante una arquitectura <b>MVC</b>.
                </p>
                <p>
                    <b>Objetivo:</b> ofrecer una herramienta centralizada para consultar clasificaciones, 
                    resultados y noticias deportivas relevantes en tiempo real.
                </p>
                </div>
            </div>
            <div>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li style="text-align:left" ><b>Fuentes de Datos:</b> TheSportsDB (fútbol) y WorldNewsAPI (noticias).</li>
                <li style="text-align:left" ><b>Base de Datos:</b> MySQL para la gestión de usuarios y sesiones.</li>
                <li style="text-align:left" ><b>Frontend:</b> HTML, CSS, Bootstrap y JavaScript puro.</li>
                <li style="text-align:left" ><b>Backend:</b> PHP con arquitectura Modelo-Vista-Controlador (MVC).</li>
                <li style="text-align:left" ><b>Hosting:</b> Desplegado en InfinityFree.</li>
            </ul>
            </div>
            <p style="font-size: 0.95em; color: #555; margin-top: 10px;">
                💡 Este proyecto consolidó mis conocimientos en integración de APIs, gestión de bases de datos 
                y buenas prácticas de programación, demostrando mi capacidad para desarrollar soluciones completas 
                de principio a fin.
            </p>

            <p style="margin-top: 10px;">
                🔗 <a href="https://laredonda.gt.tc" target="_blank" style="color:#007bff; text-decoration:none;">Aplicación en Vivo</a>  
                &nbsp;|&nbsp;  
                <a href="https://github.com/alexcl11/LaRedonda" target="_blank" style="color:#007bff; text-decoration:none;">Código Fuente (GitHub)</a>
            </p>
            </div>`,        
        showCloseButton: true,
        confirmButtonText: "Cerrar",
        focusConfirm: false,
    })
  }

  setObjetoActivo = (objeto) => {
    this.setState({
      objetoActivo: objeto
    })
  }

  componentDidUpdate = () => {
    if (this.state.objetoActivo === 'libros') {
        this.mostrarVidaAcedimica()
    }
    if(this.state.objetoActivo === 'cafe'){
        this.mostrarExperiencia()
    }
    if(this.state.objetoActivo === 'monitor'){
        this.mostrarSobreMi()
    }
    if(this.state.objetoActivo === 'telefono'){
        this.mostrarContacto()
    }
  }

  componentDidMount = () => {
    Swal.fire({
        title: "<strong>¡Explora e Interactúa!</strong>",
        icon: "info",
        width: "500px",
        html: `
            <p style="font-size: 1.05em; line-height: 1.6; text-align: center;">
            Haz clic en los objetos del escritorio para descubrir más sobre mí.  
            Varios elementos esconden una parte de mi historia como desarrollador   
            </p>
        `,
        confirmButtonText: "¡Entendido!",
        focusConfirm: true,
    });

  }
  

  render() {
    return (
      <div className="desktop-container">
        <div 
          className="monitor-container object-with-tooltip" 
          onClick={() => this.setObjetoActivo('monitor')}
        >
          <Monitor />
          <span className="tooltip-text">Monitor: Acerca de mí & Habilidades</span>
        </div>
        
        
        <div 
          className="libros-container object-with-tooltip"
          onClick={() => this.setObjetoActivo('libros')}
        >
          <Libros />
          <span className="tooltip-text">Libros: Vida Académica</span>
        </div>
        
         
         <div 
          className="cafe-container object-with-tooltip" 
          onClick={() => this.setObjetoActivo('cafe')}
        >
          <Cafe />
          <span className="tooltip-text-cafe">Taza de Café: Experiencia Profesional</span>
        </div>
        
        
        <div 
          className="telefono-container object-with-tooltip"
          onClick={() => this.setObjetoActivo('telefono')}
        >
          <Telefono />
          <span className="tooltip-text">Teléfono: Contacto</span>
        </div>
        
        
        <div className="lampara-container">
          <img src={lampara} alt="Lampara" style={{width:"250px"}}/>
        </div>
        
        
        <div className="ventana-container">
          <img src={ventana} alt="Ventana" style={{width:"250px"}}/>
        </div>
        <div className="cuadro-container">
          <img src={cuadro} alt="Cuadro" style={{width:"150px"}}/>
        </div>
        <div className="mesa-container">
          <img src={mesa} alt="Mesa" />
        </div>
      </div>
    )
  }
}
