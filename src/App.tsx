import React from 'react';

import './App.css';
import { Welcome } from './components/Welcome';
import { Menu } from './components/Menu/Menu';
import { Sidebar } from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content_wrapper">
        <Sidebar />
        <Welcome welcomeText={`Храм в честь иконы Божьей Матери "Неупиваемая Чаша".`} />
      </div>
    </div>
  );
};

export default App;

