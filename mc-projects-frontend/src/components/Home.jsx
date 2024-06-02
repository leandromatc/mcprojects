import { Link } from "react-router-dom";
import "./Home.css";
import { AiOutlineMail } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import AnimatedPages from "./AnimatedPages";

function Home() {
  return (
    <AnimatedPages>
      <div className="container">
        <h1 className="text-white font-bold text-2xl">
          ¡Nos estámos renovando!
        </h1>
      </div>
    </AnimatedPages>
  );
}

export default Home;
