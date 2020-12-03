import {
	Scene,
	Engine,
	Color3,
	Vector3,
	HemisphericLight,
	ArcRotateCamera,
	MeshBuilder,
} from 'babylonjs';
import { degToRadians } from './utils/degToRadians';
import Player from './characters/Player';
import MovePlayer from './scripts/MovePlayer';
const canvas: any = document.getElementById('canvas');
const engine = new Engine(canvas, true);
const createScene = function() {
	const scene = new Scene(engine);
	const light = new HemisphericLight(
		'HemiLight',
		new Vector3(0, 1, 0),
		scene
	);
	const camera = new ArcRotateCamera(
		'Camera',
		degToRadians(-90),
		degToRadians(45),
		20,
		Vector3.Zero(),
		scene
	);
	camera.attachControl(canvas, true);
	const player: Player = new Player(scene, 'player');
	const movePlayer = new MovePlayer(player);
	const player2: any = new Player(scene, 'player');
	const movePlayer2 = new MovePlayer(player2);
	player2.entity.position.z = -4;
	scene.registerBeforeRender(() => {
		movePlayer.update();
		movePlayer2.update();
	});
	return scene;
};
const scene = createScene();
engine.runRenderLoop(() => {
	scene.render();
});
