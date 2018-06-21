/*
* This is the top level routing between the apps.
* It also brings in the theme at a global level for all of the apps.
* It also implements async module loading for the apps in order to achieve code-splitting.
*/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from '../test';

ReactDOM.render(<Test />, document.getElementById('root'));
