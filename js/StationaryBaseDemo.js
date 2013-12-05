var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var clock = new THREE.Clock();

var keyboard = new THREEx.KeyboardState();
var joystick = new VirtualJoystick({
                      mouseSupport: true,
		                  stationaryBase: true,
                      baseX: 200,
                      baseY: 200
                   });

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor('rgb(0,0,0)', 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', onWindowResize, false); 

var cubeGeometry = new THREE.CubeGeometry(20,20,20);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 'rgb(0,255,0)' });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

var sphereGeometry = new THREE.SphereGeometry(5);
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 'rgb(255,255,0)' });
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

var light = new THREE.PointLight( 'rgb(255,255,255)', 1, 0 );
scene.add(light);

var sunRiseFlag = true;
var sunHeight = 0;
var frameTime = 0;

camera.position.y = 40;
camera.position.z = 160;

cube.rotation.x = 0.4;
cube.rotation.y = 0.6;

var debugText1 = document.getElementById("debug1");
var debugText2 = document.getElementById("debug2");

animate();

function animate(){
   
   requestAnimationFrame(animate);

   frameTime = clock.getDelta();

   if(sunRiseFlag == true){
      sunHeight = sunHeight + 60 * frameTime;
   }
   if(sunRiseFlag == false){
      sunHeight = sunHeight - 60 * frameTime;
   }

   if(sunHeight > 150){
      sunHeight = 150;
      sunRiseFlag = false;
   }
   if(sunHeight < 0){
      sunHeight = 0;
      sunRiseFlag = true;
   }

   light.position.set(50,sunHeight,50);
   sphere.position = light.position;

   
   if( keyboard.pressed("D") ){
	cube.position.x = cube.position.x + 60 * frameTime;
   }
   if( keyboard.pressed("A") ){
	cube.position.x = cube.position.x - 60 * frameTime;
   }
   if( keyboard.pressed("W") ){
	cube.position.y = cube.position.y + 60 * frameTime;
   }
   if( keyboard.pressed("S") ){
	cube.position.y = cube.position.y - 60 * frameTime;
   }
   
   if( joystick.right() ){
	cube.position.x = cube.position.x + 60 * frameTime;
   }
   if( joystick.left() ){
	cube.position.x = cube.position.x - 60 * frameTime;
   }
   if( joystick.up() ){
	cube.position.y = cube.position.y + 60 * frameTime;
   }
   if( joystick.down() ){
	cube.position.y = cube.position.y - 60 * frameTime;
   }

   
   renderer.render( scene, camera );
   
   debugText1.innerHTML = "Base X: " + joystick._baseX;
   debugText2.innerHTML = "Base Y: " + joystick._baseY;
}


function onWindowResize(){
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize( window.innerWidth, window.innerHeight );   
}
