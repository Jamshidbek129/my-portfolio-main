"use client";

import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Bog&#39;lanish
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-5xl font-bold lg:text-start">
           Bog&#39;lanish
        </h2>
        <p className="lg:text-lg lg:text-start text-muted-foreground">
          Yangi loyihalar, hamkorlik takliflari yoki AI va dasturlash bo&#39;yicha
          savollaringiz bo&#39;lsa, men bilan bog&#39;lanishingiz mumkin.
          Sizning xabaringizga imkon qadar tez javob berishga harakat qilaman.
        </p>
      </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:px-6 mb-4">

        <a
          href="mailto:shokirovjamshidbek389@gmail.com"
          className="w-full"
        >
          <Button className="w-full">
            <Mail className="mr-2 h-5 w-5" />
            Email
          </Button>
        </a>

        <a
          href="https://github.com/Jamshidbek129"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/jamshidbek-shokirov-046257287/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="outline" className="w-full">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </a>

        <a
          href="https://t.me/Jamshidbek582"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="outline" className="w-full">
            <Send className="mr-2 h-5 w-5" />
            Telegram
          </Button>
        </a>

      </div>
    </section>
  );
}
