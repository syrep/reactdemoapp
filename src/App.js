import logo from "./logo.svg";
import "./App.css";
import Users from "./AxiosPart/Users";
import UsersModify from "./AxiosPart/UsersModify";
import { Hello, Hello2, Hello3, Hello4, Hello5 } from "./FunctionalPart/Hello";
import DynUser from "./DynamicPart/Dynamic";
import { HooksFunc, HookComp } from "./HooksPart/Hooks";
import ReduxPart from "./reduxpart/Redux";
import PlotlyJSPart from "./plotlyjspart/plotly";

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
          <li>Functional Components</li>
          <li>Dynamic Functions</li>
          <li>React Hooks</li>
          <li>Plotly.js</li>
          <li>Redux</li>
        </ul>
      </header>
      <div className="subheader">
        <div>
          <h2>Axios GET example</h2>
          <Users />
        </div>
        <div>
          <h2>Axios POST example</h2>
          <UsersModify />
        </div>
        <div>
          <h2>Functional Component and props example</h2>
          <Hello />
          <Hello2 age="6" />{" "}
          {/* Or can use {} for actual numerical operations */}
          <Hello3 name="NAME" />
          <Hello4 class="classname" />
          <Hello5 work="work" />
        </div>
        <div>
          <br />
          <h2>Dynamic Functions and state example</h2>
          <DynUser />
        </div>
        <div>
          <br />
          <h2>Hooks example</h2>
          <HooksFunc />
          <HookComp />
        </div>
        <div>
          <br />
          <h2>Redux Example</h2>
          <ReduxPart />
        </div>
        <div>
          <br />
          <h2>Plotly.js Example</h2>
          <PlotlyJSPart />
        </div>
      </div>
    </div>
  );
}
export default App;
