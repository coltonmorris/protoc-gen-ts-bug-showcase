import * as React from 'react';


import * as collideTypes from '../aggregate/collide-namespace';



console.log('collision ab: ', collideTypes.A_B);
console.log('collision cd: ', collideTypes.C_D);


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
