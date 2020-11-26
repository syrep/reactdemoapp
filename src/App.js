import logo from './logo.svg';
import './App.css';
import Users from './AxiosPart/Users';
import UsersModify from './AxiosPart/UsersModify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          New <code>/.code-test</code> with:
        </p>
       <ul>
          <li>REST API calls using Axios</li>
          <li>x Functional Components</li>
          <li>x Dynamic Functions</li>
          <li>x React Hooks</li>
          <li>x Redux</li>
        </ul>
      </header>

      <div>
        <Welcome name="Joe"/>
      </div>

      <div>
        <h2>Axios GET example</h2>
        <Users />
      </div>
      <div>
        <h2>Axios POST example</h2>
        <UsersModify />
      </div>
    </div>
  );
}

function Welcome(props){
  return <h1>Hello, {props.name} and welcome!</h1>;
}

export default App;
