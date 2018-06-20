import * as React from 'react';
import _ from 'lodash';

// import * as types from '../aggregate/types';
// import * as services from '../aggregate/services';
// import * as actions from '../aggregate/actions';
// import * as both from '../aggregate/both';

import * as aggy from '../aggregate/namespaces';
import * as collideTypes from '../aggregate/collide-namespace';

// import * as custom from '../types/module';

console.log('aggy: ', Object.keys(aggy));

export interface MyTest {
  pipelines: {
    isLoading: boolean
    errorMsg: string;
    value: aggy.org.Organization.AsObject,
    // value: aggy['org']['Organization']['AsObject'],
  }
}

var org = new aggy.org.Organization();

org.setFirst("tcn");
console.log("org name: ", org.getFirst());
console.log("eq instanceof: ", org instanceof aggy.org.Region);
console.log("asobj: ", org.getObject());
console.log("typeof", _.eq(typeof new aggy.org.Organization(), org.getObject()));

var reg = new aggy.billing.Region();
reg.setName("tcn");
console.log("reg name: ", reg.getName());
console.log("eq instanceof: ", reg instanceof aggy.org.Region);

console.log('collision ab: ', collideTypes.A_B);
console.log('collision cd: ', collideTypes.C_D);

// console.log('both: ', Object.keys(both));
// var varbage : both.Tvariable1 = "hello";
// console.log('Tvariable: ', varbage, varbage instanceof both.Tvariable1);
// console.log('typeof: ', typeof varbage == typeof both['Tvariable1']);

// console.log('custom: ', Object.keys(custom));
// console.log('custom: ', custom.test);
// var myCustom = new custom['Organization']()
// myCustom.setFirst('colton')
// console.log('myCustom: ', myCustom.getFirst());

// console.log('types: ', Object.keys(types));
// console.log('types: ', Object.keys(types.orphan.types));
// var simple = new types.orphan.types.MySimple()
// simple.setMyString("colton")
// console.log('mysimple: ', simple.getMyString());
// simple.setMyString('hi')

// console.log('services: ', Object.keys(services));
// console.log('services: ', Object.keys(services.orphan.services));
// console.log('actions: ', Object.keys(actions));
// console.log('actions idk: ', actions.idk);
// console.log('actions: ', Object.keys(actions['api_v0alpha']));

// console.log("org: ", Object.keys(actions['api_v0alpha']))
// console.log("org: ", Object.keys(actions['api_v0alpha']['Org']))
// console.log("org: ", actions['api_v0alpha']['Org']['org']())
// console.log("org2: ", actions['api_v0alpha']['Org']['org2']())

// console.log("aggregate: ", )


interface IDynamicImportProps {
  // load: () => Promise<any>;
}

interface IDynamicImportState {
  // component: any;
}

export default class Test extends React.Component<IDynamicImportProps, IDynamicImportState> {
  constructor(props: IDynamicImportProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p> Check the Console </p>
      </div>
    );
  }
}
