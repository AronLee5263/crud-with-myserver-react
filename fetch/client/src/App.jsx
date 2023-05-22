import Post from "./components/Post";
import CreateModal from "./components/CreateModal";

export default function App() {
  return (
    <main>
      <Post author="마리오 111" body="마리오가 출력됐을까?" />
      <Post author="루이지 111" body="루이지가 출력됐을까?" />
    </main>
  );
}
