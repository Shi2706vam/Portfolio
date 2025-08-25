import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="tex-4xl md:text-6xl font-bold">
            <span className="text-secondary opacity-0 animate-fade-in">
              Hi ,I'm{" "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Frontend
            </span>
            <span className="text-secondary opacity-0 animate-fade-in-delay-2">
              {" "}
              Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-secondary max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am <span className="text-primary font-bold opacity-0 animate-fade-in-delay-1">Shivam Kumar</span> and I create modern website, build interface that are both beautiful and functional .
          </p>
        </div>
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground 
            font-medium transition-all duration-300 hover:shaow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-10s active:scale-95"
          >
            View My Projects
          </a>
        </div>
      </div>
      <div className="absolute text-secondary bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
