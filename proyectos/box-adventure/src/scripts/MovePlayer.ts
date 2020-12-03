import Player from '../characters/Player';
class MovePlayer {
	player: any;
	constructor(player: Player) {
		this.player = player;
	}
	update() {
		this.player.entity.position.x += 0.1;
	}
}
export default MovePlayer;
