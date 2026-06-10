import { Link, NavLink } from "react-router";
import About from "../components/About";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Contact from "./Contact";
import { projects } from "../../data/projects";
import Button from "../atoms/Button";
import buttonStyles from "../atoms/styles/Button.module.css";


function Home() {
    return (
        <>
        <Hero/>
        <About/>
        <Stack/>
        <Button href="/projects" variant="primary" className={buttonStyles.wide}>Projects</Button>
        <Contact/>
        </>
    )
}

export default Home;