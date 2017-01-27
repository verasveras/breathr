// new scene
var scene = new THREE.Scene();

// create a new camera and position it
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));;

// create a renderer and appender it to the dom.
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// geometry defining all the points of the line
var geometry = new THREE.Geometry();

geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, -10, 0));
// geometry.vertices.push(new THREE.Vector3(0, 10, 0));



// add the line to the scene
var line = new THREE.Line(geometry, material);
scene.add(line);


let x = 0, y = 0, z = 0;

// runs this at 60fps
function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}

render();

// renderer.render(scene, camera);





// Detector Check
// if (Detector.webgl) {
//     init();
//     animate();
// } else {
//     var warning = Detector.getWebGLErrorMessage();
//     document.getElementById('container').appendChild(warning);
// }