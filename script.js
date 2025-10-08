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
        - <span class="help-word">gif</span>:<span class="info"> gif para alegrar seu dia.</span>
        - <span class="help-word">clear</span>:<span class="info"> Limpa a tela.</span>`,

    about: `Olá, sou o Paulo! Estudante de Engenharia de Software do quarto semestre na UCB-DF. 
        Sou um grande entusiasta de games e cultura geek.`,

    cert: `Certificações Atuais: AZ-900 e MS-900 e GitHub Foundations. 
        Estudando para: ITIL 4, AWS AI Practioner que já estão agendadas para serem feitas ainda esse ano.`,

    exp: `<span class="link">Atualmente sou Analista de Suporte N2 no IPEA(Instituto de Pesquisa Econômica Aplicada), antes eu era suporte técnico N1 e N2 pela CastGroup. Tenho experiência com atendimento ao usuário, resolução de incidentes e suporte técnico.
        Tenho grande interesse na área de software, bem como desenvolvimento e infraestrutura (DevOps).
        Possuo conhecimentos em linguagens como Python, PowerShell, JavaScript, HTML/CSS. Também tenho experiência com ferramentas como Git e GitHub, Docker, e conhecimento em plataformas de nuvem como AWS e Azure.
        Já atuei com automação de tarefas, monitoramento de sistemas e suporte a aplicações web, além de conhecimento em Linux e suas distribuições.
        Também já trabalhei com metodologias ágeis como Scrum e Kanban.
        Tenho interesse em aprender sobre Inteligência Artificial e Machine Learning, tendo projetos reais em meu GitHub sobre treinamento de modelos de LLM locais e interação com o bedrock da AWS.</span>`,

    contact: `<span class="ASCII2">Me encontre no LinkedIn ou envie um email:</span>
        <span class="port2">LinkedIn:</span><a href="https://www.linkedin.com/in/euopaulo/"><span class="link1">Meu Perfil no LinkedIn</span></a> 
        <span class="port2">Email:</span><span class="link">paulo.henrg1@gmail.com</span>`,

    gif: `<img class="gif" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGh5Zm9rMG14eWx4MmJ4NzkwNWw0Nmc1YmE2aWo4ZmxhejJ2enNwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m2Q7FEc0bEr4I/giphy.gif" alt="Gif animado de boas-vindas" align="center" />`,
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
