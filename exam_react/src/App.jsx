import "./css/style.css"
import Film from "./components/Film/Films.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navebar from "./components/Navebar/Navebar.jsx";
import Home from "./components/Pages/Home.jsx";
function App() {
  return (
    <>
      <div>
        <Navebar></Navebar>
        <Film></Film>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;