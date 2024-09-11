
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
        urlimage : "https://i.postimg.cc/y6JRGxrt/boris.jpg",
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
    }
]

const galeryProjects = document.getElementById('galery-projects')
let insertProject = ''

console.log(dataProjects)

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
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>Node js</span>
            </div>
        </article>
    `
})
console.log(insertProject)
galeryProjects.innerHTML = insertProject
