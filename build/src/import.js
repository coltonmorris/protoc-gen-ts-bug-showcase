// import { matrix_org } from './export';
// import * as mod from '../types/module';
import * as types from '../aggregate/types';
import * as services from '../aggregate/services';
import * as actions from '../aggregate/actions';
console.log('types: ', Object.keys(types));
console.log('types: ', Object.keys(types.orphan.types));
console.log('services: ', Object.keys(services));
console.log('services: ', Object.keys(services.orphan.services));
console.log('actions: ', Object.keys(actions));
console.log('actions idk: ', actions.idk);
console.log('actions: ', Object.keys(actions['api']));
actions['api']['log']('actions: logged');
console.log("org: ", Object.keys(actions['api']['v0alpha']));
console.log("org: ", Object.keys(actions['api']['v0alpha']['Org']));
console.log("org: ", actions['api']['v0alpha']['Org'].org());
console.log("org2: ", actions['api']['v0alpha']['Org']['org2']());
// console.log("org: ", mod);
// console.log("org: ", mod.test);
// mod.test = "colton"
// console.log("org: ", mod.test);
// mod.test = 21
// console.log("org: ", mod.test);
// console.log("org: ", Object.keys(org));
// console.log("org: ", typeof org["first"], org["first"]);
// org["first"] = 10
// console.log("org: ", typeof org["first"],  org["first"]);
// console.log("org: ", Object.keys(org["Organization"]));
// org["Organization"].first = 3
// console.log("org: ", org["Organization"].first);
// console.log("test: ", Object.keys(matrix_org));
// console.log("test.name: ", matrix_org.matrix_org.name);
//# sourceMappingURL=import.js.map