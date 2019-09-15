import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import shallow from 'react-test-renderer/shallow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('does snapshotting', () => {
  const renderer = shallow.createRenderer();
  const result = renderer.render(<App />);

  expect(result).toMatchSnapshot();
});
