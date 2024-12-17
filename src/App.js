import './App.css';
import { useContext } from 'react'
import { ApiContext } from './context/ApiContext';
import Szakdolgozatok1 from './components/Szakdolgozatok1';

function App() {

  const {szakdogaLista}=useContext(ApiContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Számalk-Szalézi Technikum és Szakgimnázium 2020-2022 évfolyam szoftverfejlesztőinek szakdolgozatai</h1>
      </header>
        <h2>Admin oldal</h2>
        <table className="table table-striped">
          <thead>
              <tr>
                  <th>Szakdolgozat címe</th>
                  <th>Készítők neve</th>
                  <th>GitHub link</th>
                  <th>Szakdolgozat elérhetősége</th>
              </tr>
          </thead>
          <Szakdolgozatok1 szakdogaLista={szakdogaLista} />
        </table>
    </div>
  );
}

export default App;
