import Film from "./components/Film/Films.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navebar from "./components/Navebar/Navebar.jsx";
import Home from "./components/Pages/Home.jsx";
function App() {
  return (
    <>
      <div>
        <Navebar></Navebar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;