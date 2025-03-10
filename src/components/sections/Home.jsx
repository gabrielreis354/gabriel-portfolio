import React from "react";
import { RevealOnScroll } from "../ReviewOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent leading-right">
            Olá, meu nome é Gabriel e sou um desenvolvedor web!
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Sou um desenvolvedor frontend apaixonado por tecnologia e criar
            soluções acessíveis, sempre buscando oferecer a melhor experiência
            para os usuários. Gosto de aprender e melhorar constantemente, e
            estou sempre em busca de novas oportunidades para me desenvolver
            como pessoa e profissional
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projetos"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-{0_)_15px_rgba(59, 130, 246, 0.4)"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-{0_)_15px_rgba(162, 59, 246, 0.4) hover:bg-blue-500/10"
            >
              Contato
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
