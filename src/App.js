import "./styles.css";
import Counter from "./count";
import Toggle from "./toogle";
import Twitter from "./twitter";
import Password from "./pass";

export default function App() {
  return (
    <div className="App">
      <h1> Character Counter </h1>
      <Counter />
      <br />
      <h1> Toggle button </h1>
      <Toggle />
      <br />
      <h1> Twitter Count</h1>
      <Twitter />
      <br />
      <h1> password checker</h1>
      <Password />
      <br />
    </div>
  );
}
