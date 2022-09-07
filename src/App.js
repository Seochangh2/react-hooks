import "./App.css";
import useInput from "./UseInput";
const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <h1>Hello 창창</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

export default App;
