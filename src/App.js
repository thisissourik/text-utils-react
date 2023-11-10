import "./App.css";
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";
import Footer from "./MyComponents/Footer";
// import Contact from "./MyComponents/contact.js";
function App() {
  return (
    <>
      <Navbar title="TEXT-UTILITY" aboutText="Contact Us" />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter your text here !"/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
