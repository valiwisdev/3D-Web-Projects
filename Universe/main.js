import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const radius = 7;
const detail = 2;

const geometry = new THREE.IcosahedronGeometry(radius, detail);
const material = new THREE.MeshBasicMaterial({ color: '#87CEEB' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 20;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();