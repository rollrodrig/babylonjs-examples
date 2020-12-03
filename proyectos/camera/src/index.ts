import {
	Scene,
	Engine,
	Color3,
	Vector3,
	FreeCamera,
	Mesh,
	GizmoManager,
	SceneLoader,
	PointLight,
	Color4,
	PointerEventTypes,
	Axis,
} from 'babylonjs';

const canvas: any = document.getElementById('canvas');
const engine = new Engine(canvas, true);
let freeCamera: FreeCamera;

const createFreeCamera = (scene: Scene): FreeCamera => {
	const cameraPosition = new Vector3(0, 6, -10);
	const camera = new FreeCamera('camera1', cameraPosition, scene);
	camera.setTarget(Vector3.Zero());
	camera.attachControl(canvas, true);
	return camera;
};

const createScene = (): Scene => {
	const scene = new Scene(engine);
	const color: Color3 = Color3.White();
	scene.clearColor = color as any;
	const box = Mesh.CreateBox('Box', 4.0, scene);
	const light = new PointLight('myPointLight', new Vector3(0, 3, 0), scene);
	// light.intensity = .5;
	freeCamera = createFreeCamera(scene);
	light.diffuse = new Color3(1, 0.5, 0.5);

	scene.onPrePointerObservable.add(
		(pointerInfo, eventState) => {
			const event: WheelEvent = pointerInfo.event as WheelEvent;
			const dir = scene.activeCamera.getDirection(Axis.Z);
			if (event.deltaY > 0) {
				scene.activeCamera.position.addInPlace(dir);
			} else {
				scene.activeCamera.position.subtractInPlace(dir);
			}
		},
		PointerEventTypes.POINTERWHEEL,
		false
	);
	let startDrag = false;
	scene.onPrePointerObservable.add(
		(pointerInfo, eventState) => {
			console.log(pointerInfo);
			const event: PointerEvent = pointerInfo.event as PointerEvent;
			if (event.which == 2) {
				if (startDrag === false) {
					console.log('start drag');
					const dir = scene.activeCamera.getDirection(Axis.Z);
					scene.activeCamera.position.addInPlace(dir);
					startDrag = true;
				} else {
					startDrag = false;
					console.log('end drag');
				}
			}
			if (startDrag) {
				console.log(scene.pointerX, scene.pointerY);
			}
		},
		PointerEventTypes.POINTERDOWN + PointerEventTypes.POINTERUP,
		false
	);
	return scene;
};
const moveCamera = (scene: Scene, move: boolean) => {
	if (move) {
		console.log(scene.pointerX, scene.pointerY);
	}
};
const scene: Scene = createScene();
engine.runRenderLoop(function() {
	scene.render();
	moveCamera(scene, false);
});

const onKeyActions = (scene: Scene) => {};

const isWPressed = false;
const isSPressed = false;
const isAPressed = false;
const isDPressed = false;

// zoom camera
// https://playground.babylonjs.com/#6FHKHC#9
// drag camera
// https://playground.babylonjs.com/#4NUAEA#8

// canvas.addEventListener('click', (event: WheelEvent) => {
// 	console.log('click', event);
// });
// canvas.addEventListener('mousewheel', (event: WheelEvent) => {
// 	console.log('mousewheel', event);
// 	const steps = 0.5;
// 	if (event.deltaY > 0) {
// 		freeCamera.position.z += steps;
// 	} else {
// 		freeCamera.position.z -= steps;
// 	}
// });
// canvas.addEventListener('keydown', function(event: any) {
// 	if (event.key == 'w' || event.key == 'W') {
// 		isWPressed = true;
// 	}
// 	if (event.key == 's' || event.key == 'S') {
// 		isSPressed = true;
// 	}
// 	if (event.key == 'a' || event.key == 'A') {
// 		isAPressed = true;
// 	}
// 	if (event.key == 'd' || event.key == 'D') {
// 		isDPressed = true;
// 	}
// });
// canvas.addEventListener('keyup', function(event: any) {
// 	if (event.key == 'w' || event.key == 'W') {
// 		isWPressed = false;
// 	}
// 	if (event.key == 's' || event.key == 'S') {
// 		isSPressed = false;
// 	}
// 	if (event.key == 'a' || event.key == 'A') {
// 		isAPressed = false;
// 	}
// 	if (event.key == 'd' || event.key == 'D') {
// 		isDPressed = false;
// 	}
// });

// gizmo
// https://doc.babylonjs.com/how_to/gizmo
// scene.activeCamera.position.z += delta/10;
// let delta = 0;
// if (event.wheelDelta) {
// 	delta = event.wheelDelta;
// } else if (event.detail) {
// 	delta = -event.detail;
// }
// if (delta) {
// 	console.log(delta);
// 	const dir = scene.activeCamera.getDirection(BABYLON.Axis.Z);
// 	console.log('dir: ', dir);
// 	//scene.activeCamera.position.z += delta/10;
// 	if (delta > 0) scene.activeCamera.position.addInPlace(dir);
// 	else scene.activeCamera.position.subtractInPlace(dir);
// 	// scene.activeCamera.???;

// 	// if (event.preventDefault) {
// 	//     if (!noPreventDefault) {
// 	//         event.preventDefault();
// 	//     }
// 	// }
// }
