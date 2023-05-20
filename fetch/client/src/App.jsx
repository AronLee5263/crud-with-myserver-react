import "./App.css";

import Post from "./components/Post";
import CreateModal from "./components/CreateModal";

function App() {
  return (
    <main>
      <Post author="마리오 111" body="마리오가 출력됐을까?" />
      <Post author="루이지 111" body="루이지가 출력됐을까?" />
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <CreateModal />
        </div>
      </div>
    </main>
  );
}

export default App;
