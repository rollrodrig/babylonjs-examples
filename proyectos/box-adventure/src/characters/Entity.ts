import { Scene, MeshBuilder } from 'babylonjs';
class Entity {
	scene: Scene;
	entity: MeshBuilder;
	constructor(scene: Scene) {
		this.scene = scene;
	}
}
export default Entity;
