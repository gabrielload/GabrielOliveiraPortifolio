import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Gabriel Oliveira</h1>
        <p>Analista de TI | Desenvolvedor Full Stack | React Native | Python | Análise de Dados</p>
        <div className="contact">
          <a href="mailto:gabriellload.qi@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/gabrieloliveira-24a82a21a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="summary">
        <h2>Sobre Mim</h2>
        <p>Olá! Meu nome é Gabriel Oliveira, e aos 21 anos, já acumulei mais de 3 anos de experiência no setor de tecnologia. Ao longo da minha jornada, tenho tido o privilégio de participar de projetos desafiadores, que vão desde pequenos sistemas corporativos até aplicativos web de grande escala. Essas experiências me permitiram aprender continuamente e crescer, tanto ao colaborar em equipes multidisciplinares quanto ao liderar iniciativas próprias.</p>
        <p>Minha formação começou com um curso técnico em informática para internet, onde desenvolvi uma base sólida em programação, redes e desenvolvimento web. Atualmente, estou aprofundando meus conhecimentos como estudante de Engenharia da Computação, explorando novas áreas e tecnologias.</p>
        <p>Tenho uma forte inclinação para o desenvolvimento web, com habilidades em tecnologias como React, PHP e Next.js. Além disso, sou proficiente no desenvolvimento back-end, utilizando Python e frameworks como Django, Pandas e Flask. Estou sempre disposto a aprender e compartilhar conhecimento. Se tiver alguma pergunta ou quiser trocar ideias, estarei à disposição!</p>
      </section>

      <section className="experience">
        <h2>Experiência</h2>
        <div className="experience-item">
          <h3>Colégio Mãe de Deus - Rede ICM de Educação</h3>
          <p><strong>Cargo:</strong> Analista de TI</p>
          <p><strong>Período:</strong> June 2024 - Present</p>
          <p>Responsável pelo suporte interno para resolver problemas de TI, gerencio locações de equipamentos, supervisiono sistemas e realizo correções no ecossistema escolar via Windows Server. Além disso, planejo e implemento projetos tecnológicos, desenvolvo melhorias operacionais e conduzo análise detalhada de logs para garantir a eficiência e segurança dos sistemas.</p>
        </div>
        {/* Adicione mais itens de experiência aqui */}
      </section>

      <section className="education">
        <h2>Educação</h2>
        <div className="education-item">
          <h3>Universidade Cruzeiro do Sul</h3>
          <p><strong>Curso:</strong> Engenharia da Computação</p>
          <p><strong>Período:</strong> August 2023 - July 2027</p>
        </div>
        <div className="education-item">
          <h3>QI Faculdade & Escola Técnica</h3>
          <p><strong>Curso:</strong> Técnico em Informática para Internet</p>
          <p><strong>Período:</strong> June 2021 - February 2023</p>
        </div>
      </section>

      <section className="projects">
        <h2>Projetos</h2>
        {/* Adicione seus projetos aqui */}
      </section>

      <section className="certifications">
        <h2>Certificações</h2>
        <ul>
          <li>Programação em Python Mundo 1</li>
          <li>Segurança da Informação</li>
          <li>Programação em Python Mundo 3</li>
          <li>BotCamp Análise de Dados | Santander</li>
          <li>Redes de Computadores</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2024 Gabriel Oliveira | <a href="https://gabrieloliveira.vercel.app/" target="_blank" rel="noopener noreferrer">Visite meu site</a></p>
      </footer>
    </div>
  );
}

export default App;
