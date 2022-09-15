import "./App.css";
import useClick from "./Components/UseClick";
import useConfirm from "./Components/UseConfirm";
import useInput from "./Components/UseInput";
import usePreventLeave from "./Components/UsePreventLeave";
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
  }, 2000);
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  const confirmWarn = () => {
    console.log("confirm Waring!");
  };
  const abort = () => {
    console.log("abort");
  };
  const confirmMethod = useConfirm("Is UseConfirm", confirmWarn, abort);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1 ref={title}>Hello 창창</h1>
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
      <div>
        <button onClick={confirmMethod}>UseConfirm Btn</button>
      </div>
      <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>UnProtect</button>
      </div>
    </div>
  );
};

export default App;
