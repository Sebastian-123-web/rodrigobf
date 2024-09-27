
// CONFIGURACION DE ESTRELLAS EN LA PANTALLA
const totalStar = 300
const universe = document.getElementsByClassName('universe')
const screenHeight = document.documentElement.scrollHeight
console.log(screenHeight)

let stars = []

for (let index = 0; index < totalStar; index++) {
    stars += `<span style="top: calc(${Math.ceil(Math.random()*screenHeight*2)}px - 100vh); left: ${Math.ceil(Math.random()*97)}vw;" class="color_star${Math.ceil(Math.random()*3)}"></span>`
}

universe[0].innerHTML = stars


// DATOS DE LOS PROYECTOS PARA INSERTAR EN EL HTML

const dataProjects = [
    {
        title : "Miru Outfit",
        description : "Proyecto en Proceso: Web sobre exhibición de ropa de invierno para la venta por internet con delivery.",
        urlimage : "https://i.postimg.cc/dVQYdVvs/Captura-de-pantalla-2024-09-27-095449.png",
        urlWeb: "https://miru-nine.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/miru",
        technology : [
            {
                name: "React",
            },
            {
                name: "Tailwindcss",
            }
        ]
    },
    {
        title : "Ataraxia Requintado",
        description : "UN ASIENTO que A LA VEZ ES una pieza de arte en sí misma. Las curvas y las líneas del diseño SON elegantes y fluidas, tomando inspiración de la glicina en su aspecto más bello.",
        urlimage : "https://i.postimg.cc/sgqRGT3c/Captura.png",
        urlWeb: "https://ataraxia-requintado.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/AtaraxiaRequintado",
        technology : [
            {
                name: "HTML",
            },
            {
                name: "css",
            },
            {
                name: "Figma",
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
            },
            {
                name: "css",
            },
            {
                name: "Figma",
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
            },
            {
                name: "Tailwindcss",
            },
            {
                name: "Material-Tailwind",
            },
            {
                name: "React Router Dom",
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
            },
            {
                name: "React-router-dom",
            },
            {
                name: "Sweetalert2",
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
            },
            {
                name: "CSS",
            },
            {
                name: "Javascript",
            }
        ]
    },
    {
        title : "Proyecto: Blog Afrianska",
        description : "Web donde nuestro mi habilidad con HTML y CSS.",
        urlimage : "https://i.postimg.cc/WzSs8Nt2/Captura-de-pantalla-2024-09-18-174900.png",
        urlWeb: "https://quinto-reto.vercel.app/",
        urlGithub : "https://github.com/Sebastian-123-web/quinto_reto",
        technology : [
            {
                name: "HTML",
            },
            {
                name: "CSS",
            }
        ]
    },
    {
        title : "Proyecto: Sunnyside",
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
                    <div class="project-link">
                        <img src="assets/link.svg" alt="" class="link">
                    </div>
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