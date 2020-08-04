import Npc from './Npc.ts';
import HumanDisplay from './HumanDisplay.ts';
import NormalAttack from './NormalAttack.ts';
import Skeleton from './SkeletonDisplay.ts';
import BossAttack from './BossAttack.ts';

/**
 * The main idea is to have independence 
 * between the characters and create a variety of them without abuse of the inheritance or the composition
 */
let human = new HumanDisplay();
let normalHumanoidNpc = new Npc(human, new NormalAttack());
let normalSkeletonNpc = new Npc(new Skeleton(), new NormalAttack());
let BossHumanoidNPC = new Npc(human, new BossAttack());
console.log(normalHumanoidNpc.Display().defaultDisplay(), normalHumanoidNpc.Attack().defaultAttack());
console.log(normalSkeletonNpc.Display().defaultDisplay(), normalSkeletonNpc.Attack().superPower());
console.log(BossHumanoidNPC.Display().defaultDisplay(), BossHumanoidNPC.Attack().superPower());
