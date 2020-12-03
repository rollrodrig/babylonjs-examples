import { Scene, MeshBuilder } from 'babylonjs';
import Entity from './Entity';
class Player extends Entity {
	step = 3;
	constructor(scene: Scene, name: string) {
		super(scene);
		this.entity = MeshBuilder.CreateBox(name, {}, scene);
	}
	move(event: any) {
		const k = event.sourceEvent.key;
		if (k === 'a' || k === 'A') this.moveLeft();
		if (k === 'd' || k === 'D') this.moveRight();
	}
	moveLeft() {
		if (this.entity.position.x > -this.step) {
			this.entity.position.x -= this.step;
		}
	}
	moveRight() {
		if (this.entity.position.x < this.step) {
			this.entity.position.x += this.step;
		}
	}
	moveCenter() {
		this.entity.position.x = 0;
	}
	update(): void {
	}
}
export default Player;
