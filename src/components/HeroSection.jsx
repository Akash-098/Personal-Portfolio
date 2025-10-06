import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const phrases = ["I am a Web Developer", "I am a Coder"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const fullText = phrases[currentPhrase];
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  // Render text with bold for Web Developer / Coder
  const renderText = () => {
    return displayText.split(/(Web Developer|Coder)/).map((part, index) => {
      if (part === "Web Developer" || part === "Coder") {
        return (
          <strong key={index} className="text-white font-bold">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-purple-900 via-indigo-900 to-black"></div>
      </div>

      {/* Content */}
      <div className="container max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Photo */}
        <div className="flex-shrink-0 animate-float mb-6 md:mb-0">
          <img
            src="/images/profile.jpg"
            alt="Akash Kumar Rai"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover object-center scale-110 shadow-lg border-4 border-primary opacity-100"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-muted-foreground block opacity-0 animate-fade-in-delay-1">
              Hi, I'm
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent block opacity-0 animate-fade-in-delay-2">
              Akash Kumar Rai
            </span>
          </h1>

          {/* Typewriter with bold */}
          <p className="text-lg md:text-xl text-primary max-w-2xl mt-4 flex flex-wrap">
            {renderText()}
            <span className="border-r-2 border-primary animate-pulse ml-1"></span>
          </p>

          {/* Description paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 opacity-0 animate-fade-in-delay-3">
            I create web experiences with modern technologies. Specializing in
            front-end development, I build interfaces that are both beautiful
            and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button px-6 py-3 rounded-md font-semibold inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-white mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
