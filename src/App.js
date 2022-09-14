import "./App.css";
import useInput from "./Components/UseInput";
import useTabs from "./Components/UseTabs";
import useTitle from "./Components/UseTitle";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];
const App = () => {
  const maxLen = (value) => value.length < 20;
  const name = useInput("Mr.", maxLen);
  const { currentItem, changeItem } = useTabs(0, content);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Chang's React Hooks");
  }, 3000);
  return (
    <div className="App">
      <h1>Hello 창창</h1>
      <input placeholder="Name" {...name}></input>
      <div>
        {content.map((section, index) => (
          <button
            onClick={() => {
              changeItem(index);
            }}
          >
            {section.tab}
          </button>
        ))}
      </div>
      <div> {currentItem.content}</div>
    </div>
  );
};

export default App;
