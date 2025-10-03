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
        - <span class="help-word">sobre</span>:<span class="info"> Um pouco sobre mim, quem eu sou e meus hobbies.</span>
        - <span class="help-word">experiências</span>:<span class="info"> Meu caminho na TI e interesses na área.</span>
        - <span class="help-word">certificações</span>:<span class="info"> Minhas certificações oficiais.</span>
        - <span class="help-word">contato</span>:<span class="info"> Como entrar em contato comigo.</span>
        - <span class="help-word">limpar</span>:<span class="info"> Limpa a tela.</span>`,

    sobre: `Olá, sou o Paulo! Estudante de Engenharia de Software do quarto semestre na UCB-DF. 
        Sou um grande entusiasta de games e cultura geek.`,

    certificações: `Certificações Atuais: AZ-900 e MS-900 e GitHub Foundations. 
        Estudando para: ITIL 4, AWS AI Practioner que já estão agendadas para serem feitas ainda esse ano.`,

    experiencias: `Atualmente sou Analista de Suporte N2 no IPEA(Instituto de Pesquisa Econômica Aplicada), antes eu era suporte técnico N1 e N2 pela CastGroup. Tenho experiência com atendimento ao usuário, resolução de incidentes e suporte técnico.
        Tenho grande interesse na área de software, bem como desenvolvimento e infraestrutura (DevOps).
        Possuo conhecimentos em linguagens como Python, PowerShell, JavaScript, HTML/CSS. Também tenho experiência com ferramentas como Git e GitHub, Docker, e conhecimento em plataformas de nuvem como AWS e Azure.
        Já atuei com automação de tarefas, monitoramento de sistemas e suporte a aplicações web, além de conhecimento em Linux e suas distribuições.
        Também já trabalhei com metodologias ágeis como Scrum e Kanban.
        Tenho interesse em aprender sobre Inteligência Artificial e Machine Learning, tendo projetos reais em meu GitHub sobre treinamento de modelos de LLM locais e interação com o bedrock da AWS.`,

    contato: `Me encontre no LinkedIn ou envie um email: 
        LinkedIn: <a href="https://www.linkedin.com/in/euopaulo/"><span class="link1">Meu Perfil no LinkedIn</span></a> 
        Email: <span class="link">paulo.henrg1@gmail.com</span>`,
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
