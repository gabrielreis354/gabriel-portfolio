import { RevealOnScroll } from "../ReviewOnScroll";

export const About = () => {
  const softskills = [
    "Liderança",
    "Pensamento Crítico",
    "Resolução de Problemas",
  ];
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "NextJS"];
  const backendSkills = ["Nodejs", "Express"];
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Sobre mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Minha jornada na tecnologia tem sido marcada por projetos que unem
              performance, usabilidade e design moderno, utilizando React,
              Next.js e Tailwind CSS como principais ferramentas.
            </p>

            <div className="grid grid-cols 1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softskills.map((skill, key) => (
                    <div
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] hover:cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Front-End</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <div
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] hover:cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Back-End</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <div
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] hover:cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gri-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="w-full p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Formação</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <b>Técnico em Análise e Desenvolvimento de Sistemas</b> - Etec
                  (2020-2022)
                </li>
                <li>
                  <b>Superior em Engenharia de Software</b> - Fiap (2024-2025)
                </li>
                <li>
                  <b>Superior em Análise e Desenvolvimento de Sistemas </b> -
                  Unifaat (2025-Presente)
                </li>
              </ul>
            </div>
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Experiência</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">(trabalho) na (empresa xyz) (periodo-de-tempo)</h4>
                <p>(Descrição do trabalho)</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
