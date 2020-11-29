import logo from "./logo.svg";
import "./App.css";
import Users from "./AxiosPart/Users";
import UsersModify from "./AxiosPart/UsersModify";
import { Hello, Hello2, Hello3, Hello4, Hello5 } from "./FunctionalPart/Hello";
import DynUser from "./DynamicPart/Dynamic";

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
					<li>x Dynamic Functions</li>
					<li>x React Hooks</li>
					<li>x Plotly.js</li>
					<li>x Redux</li>
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
					<h2>Functional Component example</h2>
					<Hello />
					<Hello2 age="6" />{" "}
					{/* Or can use {} for actual numerical operations */}
					<Hello3 name="NAME" />
					<Hello4 class="classname" />
					<Hello5 work="work" />
				</div>
				<div>
					<br />
					<h2>Dynamic Functions example</h2>
					<DynUser />
				</div>
			</div>
		</div>
	);
}
export default App;
