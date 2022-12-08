import * as THREE from './three.module.js'
import { OrbitControls } from './OrbitControls.js';
import Perlin from "./perlin.js"

const perlin = new Perlin()

var scene = new THREE.Scene();

var loader = new THREE.TextureLoader;
const mydot= loader.load('./assets/resource/dot.png')

var camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight , 1.5, 1000);	
var renderer = new THREE.WebGLRenderer({
	canvas:bgcanvas,
	alpha:true,
	 antialias : true
})

var clock = new THREE.Clock();
let t = clock.getElapsedTime();

let particlescnt = 3500;

const posarray = new Float32Array(particlescnt*3)


renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
var grid = new THREE.GridHelper(200, 50);
const controls = new OrbitControls(camera,bgcanvas);

const particlesgeo = new THREE.PlaneBufferGeometry(170,50,50,50);

for (let i = 0; i<particlescnt*3;i++) {
    posarray[i] = (Math.random() - 0.5) *5
}

particlesgeo.setAttribute('position', new THREE.BufferAttribute(posarray,3))

const material = new THREE.PointsMaterial({
    transparent:true,
    color:0xffffff,
    map:mydot,
	size:0.001, 
	side:THREE.DoubleSide,
})

const pointsmesh = new THREE.Points(particlesgeo,material);

const light1 = new THREE.PointLight (0xffffff, 5)

light1.position.z = -10;

 scene.add(pointsmesh);

camera.position.z = 1;	



function animate(){

	// t+=0.0005;

    pointsmesh.rotation.y += .00005

	requestAnimationFrame(animate);


	
	renderer.render(scene,camera);

}
animate();   