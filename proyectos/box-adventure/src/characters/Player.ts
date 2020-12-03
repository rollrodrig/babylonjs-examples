import { Scene, MeshBuilder } from 'babylonjs';
import Entity from './Entity';
class Player extends Entity {
	constructor(scene: Scene, name: string) {
		super(scene);
		this.entity = MeshBuilder.CreateBox(name, {}, scene);
	}
}
export default Player;
