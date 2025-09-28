document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const output = document.getElementById('output');
    const promptText = document.getElementById('prompt').textContent;

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

    const WELCOME_MESSAGE = `<span class="port">Paulo Henrique - Tech Analyst.</span>
${ASCII_ART}
Digite <span class="help-word">'help'</span> para visualizar os comandos do portfólio.
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
        'help': `<span class="port2">Comandos disponíveis:</span> 
        - <span class="help-word">about</span>: Sobre mim, Paulo (Eng. Software, Geek).
        - <span class="help-word">certs</span>: Minhas certificações (AZ-900, MS-900, etc.).
        - <span class="help-word">devops</span>: Meu caminho para DevOps e Infraestrutura.
        - <span class="help-word">contact</span>: Como entrar em contato.
        - <span class="help-word">clear</span>: Limpa a tela.`,

        'about': `Olá, sou o Paulo! Estudante de Engenharia de Software. 
        Atualmente sou Analista de Suporte N2, focado em me tornar Analista de Infraestrutura de TI e, por fim, DevOps. 
        Sou um grande entusiasta de games e cultura geek.`,
        
        'certs': `Certificações Atuais: AZ-900 e MS-900. 
        Estudando para: ITIL 4, AWS AI Practioner e GitHub Foundations. 
        (Sempre em busca de conhecimento para a próxima etapa em Infraestrutura.)`,
        
        'devops': `Minha jornada envolve automação, gerenciamento de ambientes Cloud (foco em Azure e AWS) e adoção de práticas de IaaC. Meu objetivo é fazer a ponte entre Desenvolvimento (Eng. Software) e Operações (Infraestrutura), usando as bases que obtive no Suporte N2.`,

        'contact': `Me encontre no LinkedIn ou envie um email: 
        LinkedIn: [Seu Link] 
        Email: [Seu Email]`,
    };

    // Função para adicionar uma nova linha de saída (sem a tag <pre>)
    function writeOutput(text) {
        // Adiciona a resposta (mantendo o conteúdo existente)
        output.innerHTML += `<br>${text.replace(/\n/g, '<br>')}`; 
        // Rola para o final da página
        output.scrollTop = output.scrollHeight; 
    }

    // Lida com o pressionar da tecla Enter
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            input.value = ''; // Limpa o input após o envio
            
            // 1. Exibe o comando digitado no histórico
            writeOutput(`${promptText} ${command}`); 

            // 2. Trata o comando CLEAR
            if (command === 'clear' || command === 'cls') {
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
    document.getElementById('terminal-container').addEventListener('click', () => {
        input.focus();
    });
});