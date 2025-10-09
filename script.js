document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("command-input");
  const output = document.getElementById("output");
  const promptText = document.getElementById("prompt").textContent;

  const ASCII_ART = `
            ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  |                 |  |  |     | -==----'|      |
     |  | <span class="ASCII">Seja bem-vindo,</span> |  |  |     |         |      |
     |  | <span class="ASCII">Usuário</span>         |  |  |     |         |      |
     |  | <span class="ASCII">C:\\>_</span>           |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |         |    ,"
     |  \`-----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |,"     
        /_)______________(_/  //'   | +---------+
   ___________________________/___  \`,
  /  oooooooooooooooo  .o.  oooo /,   \\,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\`\\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
`;

  const WELCOME_MESSAGE = `<span class="port">Meu portfólio - Paulo Tech Analyst [versão 1.0.0]</span>
<span class="port">(c) Paulo Henrique. Todos os direitos reservados.</span>
${ASCII_ART}
Digite <span class="help-word">'start'</span> para visualizar os comandos do portfólio.
`;
  // Função que reinicializa o terminal, carregando a Arte ASCII
  function initializeTerminal() {
    output.innerHTML = `<pre>${WELCOME_MESSAGE}</pre>`;
    output.scrollTop = output.scrollHeight;
  }

  initializeTerminal();
  input.focus();

  // Mapeamentos dos comandos
  const commands = {
    start: `<span class="port2">Comandos disponíveis:</span> 
        - <span class="help-word">about</span>:<span class="info"> Um pouco sobre mim, quem eu sou e meus hobbies.</span>
        - <span class="help-word">exp</span>:<span class="info"> Meu caminho na TI e interesses na área.</span>
        - <span class="help-word">cert</span>:<span class="info"> Minhas certificações oficiais.</span>
        - <span class="help-word">contact</span>:<span class="info"> Como entrar em contato comigo.</span>
        - <span class="help-word">clear</span>:<span class="info"> Limpa a tela.</span>
        - <span class="help-word">mistery</span>:<span class="info"> Não entre aqui!!!!!</span>`,

    about: `<span class="ASCII2">Olá, <span class="cert">me chamo Paulo!</span> Sou <span class="cert">estudante de Engenharia de Software do quarto semestre na UCB-DF.</span>
    Tenho 25 anos e uma paixão enorme por tecnologia, especialmente na área de TI.
    Essa paixão surgiu junto com meu interesse por videogames, o que me levou a explorar mais sobre computadores e tecnologia desde cedo.
    Nas minhas horas livres, sou um grande entusiasta de games e da cultura geek.</span>`,

    cert: `<span class="ASCII2">Certificações Atuais: <span class="cert">AZ-900</span>, <span class="cert">MS-900</span> e <span class="cert">GitHub Foundations</span>. 
        Estudando para: <span class="cert">ITIL 4</span>, <span class="cert">AWS AI Practioner</span> que já estão agendadas para serem feitas ainda esse ano.</span>`,

    exp: `<span class="ASCII2">Atualmente sou <span class="cert">Analista de Suporte N2 Pleno</span> no <span class="cert">IPEA (Instituto de Pesquisa Econômica Aplicada)</span>, antes eu era suporte técnico N1 e N2 pela CastGroup no IPEA também. Tenho experiência com atendimento ao usuário, resolução de incidentes e suporte técnico.

        Tenho grande interesse na área de software, bem como desenvolvimento e infraestrutura (DevOps).

        Possuo conhecimentos em linguagens como <span class="cert">Python</span>, <span class="cert">PowerShell</span>, <span class="cert">JavaScript</span>, <span class="cert">HTML/CSS</span>. Também tenho experiência com ferramentas como <span class="cert">Git</span> e <span class="cert">GitHub</span>, <span class="cert">Docker</span>, <span class="cert">Postaman</span> e integração de APIs.

        Possuo conhecimento em plataformas de nuvem como <span class="cert">AWS</span> e <span class="cert">Azure</span>.

        Já atuei com automação de tarefas, monitoramento de sistemas e suporte a <span class="cert">aplicações web</span>, além de conhecimento em <span class="cert">Linux</span>.

        Também já trabalhei com metodologias ágeis como <span class="cert">Scrum</span> e <span class="cert">Kanban</span>.

        Tenho interesse em aprender sobre <span class="cert">Inteligência Artificial</span> e <span class="cert">Machine Learning</span>, tendo feito projetos reais em meu GitHub sobre treinamento de modelos de LLM locais e interação com o bedrock da AWS.</span>`,

    contact: `<span class="ASCII2">Me encontre no LinkedIn ou envie um email:</span>
        <span class="port2">LinkedIn:</span><a href="https://www.linkedin.com/in/euopaulo/"><span class="link1">Meu Perfil no LinkedIn</span></a> 
        <span class="port2">Email:</span><span class="link">paulo.henrg1@gmail.com</span>`,

    mistery: `<img class="gif" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGh5Zm9rMG14eWx4MmJ4NzkwNWw0Nmc1YmE2aWo4ZmxhejJ2enNwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m2Q7FEc0bEr4I/giphy.gif" alt="Gif animado de boas-vindas" align="center" />`,
  };

  // Função para adicionar uma nova linha de saída (sem a tag <pre>)
  function writeOutput(text) {
    // Adiciona a resposta (mantendo o conteúdo existente)
    output.innerHTML += `<br>${text.replace(/\n/g, "<br>")}`;
    // Rola para o final da página
    output.scrollTop = output.scrollHeight;
  }

  // Lida com o pressionar da tecla Enter
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = input.value.trim().toLowerCase();
      input.value = ""; // Limpa o input após o envio

      // 1. Exibe o comando digitado no histórico
      writeOutput(`${promptText} ${command}`);

      // 2. Trata o comando CLEAR
      if (command === "clear" || command === "cls") {
        initializeTerminal(); // Recarrega a Arte ASCII
        return;
      }

      // 3. Busca e trata a resposta
      const response = commands[command];

      if (response) {
        // Comando encontrado: Exibe a resposta (que pode conter HTML, como no 'help')
        writeOutput(response);
      } else {
        // Comando NÃO encontrado: Exibe a mensagem de erro com a classe de destaque
        const errorMessage = `Comando '${command}' não encontrado. Digite <span class="help-word">'help'</span>.`;
        writeOutput(`<span class="error-message">${errorMessage}</span>`);
      }
    }
  });

  // Garante que o input esteja sempre focado ao clicar no terminal
  document
    .getElementById("terminal-container")
    .addEventListener("click", () => {
      input.focus();
    });
});
