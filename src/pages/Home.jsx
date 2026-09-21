import { Link, NavLink } from "react-router";
import About from "../components/About";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Contact from "./Contact";
import { projects } from "../../data/projects";
import Button from "../atoms/Button";
import buttonStyles from "../atoms/styles/Button.module.css";
import { useTranslation, Trans } from "react-i18next";

function Home() {
    const {t}=useTranslation();
    return (
        <>
        <Hero/>
        <About/>
        <Stack/>
        <Button href="/projects" variant="primary" className={buttonStyles.wide}><Trans i18nKey="home.projects" /></Button>
        <Contact/>
        </>
    )
}

export default Home;