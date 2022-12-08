import * as THREE from './three.module.js'
import { OrbitControls } from './OrbitControls.js';
import Perlin from "./perlin.js"
const perlin = new Perlin()
import state from './state.js'

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight , 0.001, 1000);	
var renderer = new THREE.WebGLRenderer({
	canvas:fgcanvas,
	alpha:true,
	 antialias : true
})

let t1 = 0;
let t2 = 0;

const startcolor = new THREE.Color(0x141414)
const endcolor = new THREE.Color(0x585858)


function getshady() {
	if (state.lighthover!=true)
	t2+=.0029
	let s = Math.sin(t2*2.0) * 0.5+0.5;
	dotmat.color.copy(startcolor).lerpHSL(endcolor,s);
}

function getwavy() {
	if (state.clienthover) {
		t1 += .0011;
	}else {
		t1 += .00009;
	}
  }

  function waverise() {
	if (line.position.y < -22) {
		line.position.y +=	1.4
		terrain.position.y +=	1.4
	}
  }

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

var grid = new THREE.GridHelper(100, 10);

const controls = new OrbitControls(camera,fgcanvas);

const planegeo = new THREE.PlaneBufferGeometry(200,106,90,90);



var loader = new THREE.TextureLoader;
const mydot= loader.load('./assets/resource/dot.png')


export const terrainmat = new THREE.MeshBasicMaterial({
		color:0x000000, 
		side:THREE.DoubleSide,
	})
	
const light1 = new THREE.PointLight (0xffffff, 5)

const wireframe = new THREE.WireframeGeometry( planegeo )
const terrain = new THREE.Mesh(planegeo,terrainmat,)
export const linemat = new THREE.LineBasicMaterial({
	color:0xffffff
})
export const dotmat = new THREE.PointsMaterial({
	map:mydot,
	transparent:true,
	size: 0.3,
	color:0x1d1d1d
})
const line = new THREE.Points(planegeo,dotmat)

light1.position.z = -10;

function updatemyvert (geom) {

	var myvert = geom.geometry.attributes.position.array;
	for ( var i = 0; i <= myvert.length; i+=3) {
		myvert[i+2] = perlin.noise(myvert[i]/40 + t1, myvert[i+1]/40 + t1 ) * 12;
	}
	geom.geometry.attributes.position.needsUpdate = true;
}

// line.position.y =	-62
// terrain.position.y =	-62.2

line.position.y =	-22
terrain.position.y =	-22.2

line.rotation.x =	THREE.MathUtils.degToRad(90)
terrain.rotation.x =	THREE.MathUtils.degToRad(90)

 scene.add(terrain,line);

// scene.add(grid);

camera.position.z = 65;	

 setTimeout(() => {
	function animate(){	
		// waverise();
		getwavy();
		getshady();
		requestAnimationFrame(animate);
		controls.update();
		updatemyvert(terrain);
		updatemyvert(line);
		renderer.render(scene,camera);
	}
	animate();   
}, 2300);




