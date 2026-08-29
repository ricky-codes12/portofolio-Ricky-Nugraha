import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PortfolioChat from "../components/PortfolioChat";

function Home({ theme, onToggleTheme, language, onChangeLanguage }) {
  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={onToggleTheme}
        language={language}
        onChangeLanguage={onChangeLanguage}
      />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Certificates language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <PortfolioChat key={language} language={language} />
    </>
  );
}

export default Home;
