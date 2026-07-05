"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "2022 - 2026",
    currentPosition: "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti (TATU)",
    place: "Dasturiy injiniring fakulteti",
    previousPositions: [""],
    description:
      "Universitet davomida Python, Machine Learning, Deep Learning va Web Development yo'nalishlarida amaliy loyihalar ishlab chiqdim. FastAPI, Django va PyTorch texnologiyalari yordamida AI tizimlari yaratish bo'yicha tajriba orttirdim.",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "PyTorch",
      "Git",
    ],
  },
  {
    timeline: "2024 - Hozir",
    currentPosition: "AI & Machine Learning Developer",
    place: "Shaxsiy loyihalar",
    previousPositions: [""],
    description:
      "Suv sifati bashorati, Toshkent uy narxlarini bashorat qilish, jigar sirrozi prognozi, diabet diagnostikasi va o'simlik kasalliklarini aniqlash kabi Machine Learning loyihalarini ishlab chiqdim.",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "FastAPI",
      "Streamlit",
      "PyTorch",
    ],
  },
  {
    timeline: "2025 - 2026",
    currentPosition: "Bitiruv malakaviy ishi",
    place: "2D Water Quality Prediction System",
    previousPositions: [""],
    description:
      "2D dispersion modeli asosida suv sifati parametrlarini bashorat qiluvchi sun'iy intellekt tizimini ishlab chiqdim. Tizim ekologik ko'rsatkichlarni prognoz qilish va ularni interaktiv grafiklarda vizualizatsiya qilish imkonini beradi.",
    skills: [
      "Regression",
      "Machine Learning",
      "Python",
      "FastAPI",
      "Streamlit",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  );
}
