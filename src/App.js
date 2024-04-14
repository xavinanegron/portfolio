import Hero from './home/Hero';
import About from './home/about/About';
import './index.css';
import Projects from './home/projects/Projects';
import Contact from './home/contact/Contact';
import Footer from './home/Footer';

function App() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
