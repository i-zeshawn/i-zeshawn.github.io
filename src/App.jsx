import {BrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import {Hero, Navbar} from "./components/index.js";

// Lazy load components that are below the fold
const About = lazy(() => import("./components/About.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Tech = lazy(() => import("./components/Tech.jsx"));
const Works = lazy(() => import("./components/Works.jsx"));
const Feedbacks = lazy(() => import("./components/Feedbacks.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars.jsx"));

// Loading fallback component
const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-white">Loading...</div>
    </div>
);

function App() {

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className={"bg-hero-pattern bg-cover bg-no-repeat bg-center"}>
                    <Navbar/>
                    <Hero/>
                </div>
                <Suspense fallback={<LoadingFallback />}>
                    <About/>
                    <Experience/>
                    <Tech/>
                    <Works/>
                    <Feedbacks/>
                    <div className={"relative z-0"}>
                        <Contact/>
                        <StarsCanvas/>
                    </div>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}

export default App
