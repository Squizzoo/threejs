import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Positioning
// Right
// mesh.position.x = 0.7;
// Down
// mesh.position.y = -0.6;
// Closer to camera
// mesh.position.z = 1;

/**
 * Objects
 */
const group = new THREE.Group();
group.position.y = 2
group.getWorldScale.y 
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'red'})
);


const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'blue'})
);
cube2.position.x = -1;

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'purple'})
);
cube3.position.x = 1

group.add(cube1);
group.add(cube2);
group.add(cube3);



// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)