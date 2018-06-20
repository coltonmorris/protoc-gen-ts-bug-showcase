export const idk = "idk";

// _.set(module.exports, 'api', {
// 	...module.exports.api,
// 	name: "colton",
//   age: 23,
//   log: (i) => { console.log(i) },
// });
// _.set(module.exports, 'api["v0alpha"]["Org"]', {
//   ...module.exports['api']['v0alpha']['Org'],
//   name: "org",
//   org: () => ("Hello Org"),
// });
// _.set(module.exports, 'api.v0alpha.Org', {
//   ...module.exports['api']['v0alpha']['Org'],
//   name2: "org",
//   org2: () => ("Hello Org2"),
// });
//

var tmp = { Org: {} } ;

tmp['Org']['name'] = "org"
tmp['Org']['org'] = () => ('hello org')

tmp['Org']['name2'] = "org"
tmp['Org']['org2'] = () => ('hello org2')

export var api_v0alpha = tmp;
