import React from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from '../../configuration/Configuration';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const container = createContainer();
  const App = container.resolve<React.ComponentType<any>>('App');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
