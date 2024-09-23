
// CONFIGURACION DE ESTRELLAS EN LA PANTALLA
const star = document.getElementsByClassName('universe')

const t_monitor = document.documentElement.scrollHeight
const t_monitor_medio = t_monitor / 2
const l_monitor = document.documentElement.scrollWidth
const l_monitor_medio = l_monitor / 2

let l_random = Number
let t_random = Number
let valor_scroll = String
let stars = []

let starLot = 130

if(document.documentElement.scrollWidth <= 767) starLot = 40
for (let i = 1; i <= starLot; i++) {
    l_random = Math.random() * l_monitor
    t_random = Math.random() * t_monitor
    if(l_random>l_monitor_medio && t_random>t_monitor_medio){valor_scroll = 'star-scroll-right-top'}
    else if(l_random>l_monitor_medio && t_random<t_monitor_medio){valor_scroll = 'star-scroll-right-bottom'}
    else if(l_random<l_monitor_medio && t_random>t_monitor_medio){valor_scroll = 'star-scroll-left-top'}
    else if(l_random<l_monitor_medio && t_random<t_monitor_medio){valor_scroll = 'star-scroll-left-bottom'}

    stars += `
                <span 
                    style="
                        top:${Math.ceil(Math.random() * t_monitor)}px;
                        left:${Math.ceil(l_random)}px;
                        animation-name: ${ valor_scroll };
                    " 
                    class="color_star${Math.ceil(Math.random()*3)}">
                </span>
            ` 
}
star[0].innerHTML = stars



// DATOS DE LOS PROYECTOS PARA INSERTAR EN EL HTML

const dataProjects = [
    {
        title : "Ataraxia Requintado",
        description : "UN ASIENTO que A LA VEZ ES una pieza de arte en sí misma. Las curvas y las líneas del diseño SON elegantes y fluidas, tomando inspiración de la glicina en su aspecto más bello.",
        urlimage : "https://i.postimg.cc/sgqRGT3c/Captura.png",
        urlWeb: "https://ataraxia-requintado.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/AtaraxiaRequintado",
        technology : [
            {
                name: "HTML",
                color: "#e96228"
            },
            {
                name: "css",
                color: "#0091d5"
            },
            {
                name: "Figma",
                color: "#ea4c1d"
            }
        ]
    },
    {
        title : "Boris the Teddy",
        description : "El compañero diseñado especialmente para niños con Síndrome de Espectro Autista.",
        urlimage : "https://i.postimg.cc/9Qd7hT40/Captura-de-pantalla-2024-09-18-173809.png",
        urlWeb: "https://boris-the-teddy.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/BoristheTeddy",
        technology : [
            {
                name: "HTML",
                color: "#e96228"
            },
            {
                name: "css",
                color: "#0091d5"
            },
            {
                name: "Figma",
                color: "#ea4c1d"
            }
        ]
    },
    {
        title : "Sistema de ticket",
        description : "Sistema para la administración de Equipos de computo y la gestion de incidencias en una empresa.",
        urlimage : "https://i.postimg.cc/RZngQ3JT/Captura-de-pantalla-2024-09-18-170107.png",
        urlWeb: "https://system-ticket-frontend.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/SystemTicket-frontend",
        technology : [
            {
                name: "Vite",
                color: "#e96228"
            },
            {
                name: "Tailwindcss",
                color: "#0091d5"
            },
            {
                name: "Material-Tailwind",
                color: "#ea4c1d"
            },
            {
                name: "React Router Dom",
                color: "#ea4c1d"
            }
        ]
    },
    {
        title : "CodeJunior",
        description : "Proyecto grupal - Web de trabajos para desarrolladores Junior, un portal donde emplesas de desarrollo o personas independientes pueden buscar a un desarrollador con poca o nada de experiencia.",
        urlimage : "https://i.postimg.cc/cCBmCjCg/Captura-de-pantalla-2024-09-18-172547.png",
        urlWeb: "https://code-junior.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/codeJunior",
        technology : [
            {
                name: "React",
                color: "#e96228"
            },
            {
                name: "React-router-dom",
                color: "#0091d5"
            },
            {
                name: "Sweetalert2",
                color: "#ea4c1d"
            }
        ]
    },
    {
        title : "Primer portafolio",
        description : "Mi primer portafolio con HTML, CSS y Javscript.",
        urlimage : "https://i.postimg.cc/VN02vf8J/Captura-de-pantalla-2024-09-18-173458.png",
        urlWeb: "https://frontend-g19-one.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/frontend_g19",
        technology : [
            {
                name: "HTML",
                color: "#e96228"
            },
            {
                name: "CSS",
                color: "#0091d5"
            },
            {
                name: "Javascript",
                color: "#ea4c1d"
            }
        ]
    },
    {
        title : "Tarea: Blog Afrianska",
        description : "Web donde nuestro mi habilidad con HTML y CSS.",
        urlimage : "https://i.postimg.cc/WzSs8Nt2/Captura-de-pantalla-2024-09-18-174900.png",
        urlWeb: "https://quinto-reto.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/quinto_reto",
        technology : [
            {
                name: "HTML",
                color: "#e96228"
            },
            {
                name: "CSS",
                color: "#0091d5"
            }
        ]
    },
    {
        title : "Tarea: Sunnyside",
        description : "Proyecto grupal - Web donde nuestro mi habilidad con HTML y CSS.",
        urlimage : "https://i.postimg.cc/8zzmttXD/Captura-de-pantalla-2024-09-18-180108.png",
        urlWeb: "https://segundo-reto-grupal.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/segundo_reto_grupal",
        technology : [
            {
                name: "HTML",
                color: "#e96228"
            },
            {
                name: "CSS",
                color: "#0091d5"
            }
        ]
    }
]

const galeryProjects = document.getElementById('galery-projects')
let insertProject = ''

dataProjects.forEach( p => {
    insertProject += `
        <article class="project">
            <div class="title-project">
                <h3>${p.title}</h3>
                <a href="${p.urlGithub}" target="_blank">
                    <img src="assets/github.svg" alt="">
                </a>
            </div>

            <a href="${p.urlWeb}" target="_blank" class="link-image">
                <div class="img-project">
                    <img src="${p.urlimage}" alt="">
                </div>
            </a>
            
            <p class="description-project">${p.description}</p>
            <div class="tech-project">
                ${p.technology.map((t)=>(
                    `<span>${t.name}</span>`
                )).join('')}
            </div>
        </article>
    `
})
galeryProjects.innerHTML = insertProject


document.addEventListener("mousemove", coordenadasMouse)

const mouseMove = document.getElementById('mouseMove')
const coorY = document.documentElement.scrollHeight
function coordenadasMouse(e) {
    //console.log("X: ",e.clientX, " Y: ",e.clientY)
    mouseMove.style.top = `${e.clientY}px`
    mouseMove.style.left = `${e.clientX}px`
}