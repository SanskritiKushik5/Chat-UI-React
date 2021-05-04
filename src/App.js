import './App.css';
import Sidebar from "./Sidebar";
import Center from "./Center";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Center />
      <Chat />
    </div>
  );
}

export default App;
