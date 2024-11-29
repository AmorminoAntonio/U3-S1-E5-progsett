import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyMain from "./components/MyMain";
import FirstGallery from "./components/FirstGallery";
import SecondGallery from "./components/SecondGallery";
import ThirdGallery from "./components/ThirdGallery";


function App() {
  return (
    <>
      <MyNav />
      <MyMain />
      <FirstGallery/>
      <SecondGallery/>
      <ThirdGallery/>
    </>
  );
}

export default App;
