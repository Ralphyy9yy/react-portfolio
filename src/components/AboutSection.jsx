import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary ">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 ">
          <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

          <p className="text-muted-foreground max-w-lg mx-auto md:mx-25">
            {" "}
            I’m an aspiring web developer passionate about creating modern,
            responsive web applications using React, Tailwind CSS, and Node.js.
            I enjoy turning ideas into clean, user-friendly interfaces.
          </p>

          <p className="text-muted-foreground max-w-lg mx-auto md:mx-25">
            {" "}
            I’m an aspiring web developer passionate about creating modern,
            responsive web applications using React, Tailwind CSS, and Node.js.
            I enjoy turning ideas into clean, user-friendly interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="gradient-border p-6 card-hover md:mr-20">
            <div className=" flex items-end gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left ">
                <h4 className=" text-lg font-semibold mb-1">Web Development</h4>
                <p className="text-muted-foreground">
                  Meow meow mewo meow memom meow meow meow meow eoowowooowo.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover md:mr-20">
            <div className=" flex items-start gap-6">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left ">
                <h4 className=" text-lg font-semibold">Web Development</h4>
                <p className="text-muted-foreground">
                  Meow meow mewo meow memom meow meow meow meow eoowowooowo.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover md:mr-20">
            <div className=" flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left ">
                <h4 className=" text-lg font-semibold">Web Development</h4>
                <p className="text-muted-foreground">
                  Meow meow mewo meow memom meow
                   meow meow meow eoowowooowo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
