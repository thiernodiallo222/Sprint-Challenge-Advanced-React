import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import useDarkMode from './Components/Hooks/useDarkMode';
import useLocalStorage from './Components/Hooks/useLocalStorage';
import PlayerList from './Components/PlayerList';
import PlayerCard from './Components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  
it('renders without craching', () => {
  ReactDom.render(<PlayerList />)
});

it('renders without craching', () => {
  ReactDom.render(<PlayerCard />)
})