import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyMain from "./components/MyMain";
import MyFullGallery from "./components/MyFullGallery";
import MyFooter from "./components/MyFooter";


function App() {
  return (
    <>
      <MyNav />
      <MyMain />
      <MyFullGallery/>
      <MyFooter/>
    </>
  );
}

export default App;
