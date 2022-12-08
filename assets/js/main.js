import * as THREE from './three.module.js'
import { dotmat, terrainmat } from './fgcanvas.js';
import state from './state.js'

const faviconimage = document.querySelector("#favicon")
var sboffset = innerWidth -20;
const navinput =  document.querySelector(".navigation input");
const light = document.getElementById("lightclient");
const dark = document.getElementById("darkclient");
const main = document.querySelector(".mainimgcontainer");
const mainarrow = document.getElementById("mainarrow");
const char1 = document.getElementById("char1");
const char2 = document.getElementById("char2");
const loader = document.getElementById("preloader");
const bloby = document.getElementById("blob");
const blobcon = document.querySelector('.blobcontainer');
const copyrightyear =  new Date().getFullYear();
const customcursor = document.getElementById('cursor');
const fgcanvas = document.getElementById("fgcanvas");
const con2h1 = document.getElementById('con2h41');
const con2h2 = document.getElementById('con2h42');
const logo = document.getElementById('logo')
const header = document.querySelector('header');
const sitename = document.getElementById('sitename')
const b5bg = document.getElementById('button5bg')
const K= document.getElementsByClassName('Kofi')
const P = document.getElementsByClassName('Patreon')
const D = document.getElementsByClassName('Discord')



window.addEventListener("load", function(){
    document.body.style.overflow = "visible"
    document.body.style.overflowX = "hidden"
    loader.style.animation = "fadeout .2s forwards ease-in-out";
    main.style.animation = "mainimgop 2s forwards, levitate1 1.1s 1s infinite alternate forwards ease-in-out"
    bloby.currentTime = 0;
    blobcon.style.animation = "blobscaleup 2.5s 1.5s forwards";
    fgcanvas.style.animation = "showcanvas 1.5s 2s forwards ease-in-out";
})

document.body.addEventListener("wheel", e => {
    customcursor.setAttribute("style","top: "+(e.pageY +12- scrollY)+"px; left: "+(e.pageX+9)+"px")
    ttipcontainer.setAttribute("style","top: "+(e.pageY +52- scrollY)+"px; left: "+(e.pageX+9)+"px")
});



function func1(e) {
    if (e.pageX > sboffset) {
        document.body.style.cursor = "normal"   
        customcursor.style.opacity = "0"
    }

    customcursor.setAttribute("style","top: "+(e.pageY +12- scrollY)+"px; left: "+(e.pageX+9)+"px")
}

function func2(e) {
    document.body.addEventListener("mousemove", e => {
        ttipcontainer.setAttribute("style","top: "+(e.pageY +52- scrollY)+"px; left: "+(e.pageX+9)+"px")
    });
}



for (const Ks of K) {
    Ks.addEventListener('mousemove', function () {
        ttiptext.innerHTML = "Kofi"
        ttipcontainer.style.opacity = "100%";
      
    });
}

    for (const Ps of P) {
        Ps.addEventListener('mousemove', function () {
            document.addEventListener('mousemove',func2);
            ttiptext.innerHTML = "Patreon"
            setTimeout(() => {
                ttipcontainer.style.opacity = "100%";
              }, 1000)
        });
    }

        for (const Ds of D) {
            Ds.addEventListener('mousemove', function () {
                document.addEventListener('mousemove',func2);
                ttiptext.innerHTML = "Discord"
                setTimeout(() => {
                    ttipcontainer.style.opacity = "100%";
                  }, 1000)
            });
        }
        
        for (const Ks of K) {
            Ks.addEventListener('mousemleave', function () {
                document.removeEventListener('mousemove',func2);
            });
        }
        
            for (const Ps of P) {
                Ps.addEventListener('mouseleave', function () {
                    document.removeEventListener('mousemove',func2);
                });
            }
        
                for (const Ds of D) {
                    Ds.addEventListener('mouseleave', function () {
                        document.removeEventListener('mousemove',func2);
                    });
                }

document.addEventListener('mousemove',func1);


document.addEventListener('mouseup', e => {
    if (e.button == 1) {
        document.removeEventListener('mousemove',func1);
        customcursor.style.opacity = "0"
        document.body.style.cursor = "normal"
        }
        else if (e.button == 0) {    
            customcursor.setAttribute("style","top: "+(e.pageY +12- scrollY)+"px; left: "+(e.pageX+9)+"px")
            document.addEventListener('mousemove',func1);
            customcursor.style.opacity = "100%"
            document.body.style.cursor = "none"
            
        }
        else if (e.button == 2) {    
            document.removeEventListener('mousemove',func1);
            customcursor.style.opacity = "0"
            document.body.style.cursor = "normal"
        }
})

document.body.addEventListener( 'mouseleave', () => {
    customcursor.style.opacity = "0"
})

document.querySelector('.copyright').innerHTML = "©" + " " + copyrightyear + " " + "silly sly"

    lightclient.addEventListener ( 'mouseover', () => {
        state.lighthover = true;
        char1.style.animation = "char1moveleft 2s forwards"
        char1.play()
        faviconimage.href = "./assets/resource/favicon2.png"
        b5bg.style.backgroundColor = "var(--offwhite)"
        con2h41.style.backgroundColor = "var(--offwhite)"
        con2h42.style.backgroundColor = "var(--offwhite)"
        con2h41.style.color = "var(--gray)"
        con2h42.style.color = "var(--gray)"
        button5.style.setProperty('--white','DimGray')
        sitename.style.color = "var(--gray)"
        button3.style.color = "var(--blue6)"
        button1.style.color = "var(--gray)"
        button2.style.color = "var(--gray)"
        logo.src = "./assets/resource/logo2.png"
        blobcon.style.filter = "grayscale(100%)"
        document.body.style.animation = "lettherebelight .4s forwards"
        terrainmat.color = new THREE.Color(0xe4e4e4)
        dotmat.color = new THREE.Color(0x585858)

        light.style.animation = "lightclienthover .4s forwards"
        light.style.zIndex = "995"
        dark.style.zIndex = "994"
    
    })

    lightclient.addEventListener ( 'mouseleave', () => {
        state.lighthover = false;
        char1.style.animationName = ""
        char1.currentTime = 0;
        char2.style.animationName = ""
        char2.currentTime = 0;
        faviconimage.href = "./assets/resource/favicon1.png"
        b5bg.style.backgroundColor = "var(--black1)"
        con2h41.style.backgroundColor = "var(--black1)"
        con2h42.style.backgroundColor = "var(--black1)"
        con2h41.style.color = "var(--white)"
        con2h42.style.color = "var(--white)"
        button5.style.setProperty('--white','white')
        sitename.style.color = "var(--white)"
        button3.style.color = "var(--blue2)"
        button1.style.color = "var(--white)"
        button2.style.color = "var(--white)"
        logo.src = "./assets/resource/logo1.png"
        blobcon.style.filter = "unset"
        document.body.style.animation = "lettherebedarkness .4s forwards"
        dotmat.color = new THREE.Color(0x1d1d1d)
        
        terrainmat.color = new THREE.Color(0x000000)
        light.style.animation = "lightclient .4s forwards"
        })

        darkclient.addEventListener ( 'mouseover', () => {
            char2.style.animation = "char2moveright 2s forwards"
            char2.play()
            dotmat.color = new THREE.Color(0x585858)
            dark.style.animation = "darkclienthover .4s forwards"
            light.style.zIndex = "994"
            dark.style.zIndex = "995"
            })


            darkclient.addEventListener ( 'mouseleave', () => {
                char2.style.animationName = ""
                char2.currentTime = 0;
                char1.style.animationName = ""
                char1.currentTime = 0;
                dotmat.color = new THREE.Color(0x1d1d1d)
                dark.style.animation = "darkclient .4s forwards"
                })


                main.addEventListener ( 'mouseover', () => {
                    state.clienthover = true;
                    document.body.style.overflow = "hidden"
                    header.scrollIntoView();
                    main.style.animation = "unset"
                    main.style.opacity = "1"
                    mainarrow.style.animation = "fadeout .5s forwards ease-in-out"
                 
                 
                    })

                    main.addEventListener ( 'mouseleave', () => {
                        state.clienthover = false;
                        document.body.style.overflow = "visible"
                        document.body.style.overflowX = "hidden"
                        main.style.animation = "levitate1 1.1s 1s infinite alternate forwards ease-in-out"
                        mainarrow.style.animation = "mainarrowop 2s 1.4s forwards ease-in-out,diagonal 2s infinite forwards ease-in-out"
                   
                    })

document.onclick = function(clickEvent){
    if(clickEvent.target.id !== "menu" && clickEvent.target.id !== "toggle-menu")  {
        navinput.checked = false;
       
    }
}