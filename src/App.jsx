import Container from "./components/Container";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App flex flex-col grow hover:cursor-[url(./assets/cursor00.svg),_pointer]">
      <Header /> 
      <Container />
      <Footer />
    </div>
  )
}