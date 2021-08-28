/**
 * Imagine a game that has a functionality to display either players, items in different kind of views (full view, short view).
 * The problem that the pattern wants to solve is the class explosion that this problem will produce (ex: cartesian product)
 */
import FullView from "./Views/FullView";
import PlayerResource from "./ResourceImplementations/PlayerResource";
import Player from "./Resources/Player";

const player1 = new Player()
const playerResource = new PlayerResource(player1)
let PlayerFullView = new FullView(playerResource);
PlayerFullView.show()