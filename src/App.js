import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./State/store";
import MyResume from "./Components/MyResume";
import EditResume from "./Components/EditResume";
import Download from "../src/Templates/Download";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/myresume" element={<MyResume/>}/>
        <Route path="/edit_resume" element={<EditResume/>} />
        <Route path="/download" element={<Download/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
