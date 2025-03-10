import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { RevealOnScroll } from "../ReviewOnScroll";
export const Projects = () => {
  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Melhores Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Ecocycle: Biodigestor e lixeira inteligente
              </h3>
              <p className="text-gray-400 mb-4">
                Este é um projeto acadêmico desenvolvido para a Global Solution
                2024 da FIAP com o tema "Green Energy". A aplicação trata-se de
                um frontend construído com React, que detalha uma lixeira
                inteligente que pode gerar energia a partir da biomassa.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Scss", "CSS"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition hover:cursor-pointer"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Projeto:
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/gabrielreis354/ecocycle_manager"
                    target="_blank"
                  >
                    <FaGithub size={"30px"} className="hover:cursor-pointer" />
                  </a>
                  <a
                    href="https://gs-ecocycle-solution.netlify.app"
                    target="_blank"
                  >
                    <GoLinkExternal
                      className="hover:cursor-pointer"
                      size={"30px"}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                EasyCall: Gerenciador de Chamados
              </h3>
              <p className="text-gray-400 mb-4">
                Este é um projeto acadêmico desenvolvido para a empresa Softtek
                em parceria com a FIAP. A aplicação trata-se de um gerenciador
                de chamados com o objetivo de facilitar o trabalho do técnico
                com a ajuda da IA para garantir a eficiência e rapidez no
                atendimento.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Scss", "CSS"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition hover:cursor-pointer"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Projeto:
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/lgpgomes/challenge-softtek"
                    target="_blank"
                  >
                    <FaGithub size={"30px"} className="hover:cursor-pointer" />
                  </a>
                  <a
                    href="https://softtek-challenge.vercel.app"
                    target="_blank"
                  >
                    <GoLinkExternal
                      className="hover:cursor-pointer"
                      size={"30px"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
