import IResource from "./IResource";
import Player from "../Resources/Player";

export default class PlayerResource implements IResource {
    private player: Player;
    constructor(player: Player) {
        this.player = player;
    }
    abstract(): string {
        return this.player.description;
    };

    image(): string {
        return this.player.preview;
    };

    url(): string {
        return this.player.profile;
    };

}