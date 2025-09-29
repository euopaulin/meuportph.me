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

    const WELCOME_MESSAGE = `<span class="port">Meu portfólio - Paulo Tech Analyst [versão 1.0.0]</span>
<span class="port">(c) Paulo Henrique. Todos os direitos reservados.</span>
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
        - <span class="help-word">sobre</span>: Um pouco sobre mim, quem eu sou e meus hobbies.
        - <span class="help-word">certificações</span>: Minhas certificações oficiais.
        - <span class="help-word">experiências</span>: Meu caminho na TI e interesses na área.
        - <span class="help-word">contato</span>: Como entrar em contato comigo.
        - <span class="help-word">limpar</span>: Limpa a tela.`,

        'sobre': `Olá, sou o Paulo! Estudante de Engenharia de Software. 
        Atualmente sou Analista de Suporte N2, focado em me tornar Analista de Infraestrutura de TI e, por fim, DevOps. 
        Sou um grande entusiasta de games e cultura geek.`,
        
        'certificações': `Certificações Atuais: AZ-900 e MS-900. 
        Estudando para: ITIL 4, AWS AI Practioner e GitHub Foundations. 
        (Sempre em busca de conhecimento para a próxima etapa em Infraestrutura.)`,
        
        'experiências': `Minha jornada envolve automação, gerenciamento de ambientes Cloud (foco em Azure e AWS) e adoção de práticas de IaaC. Meu objetivo é fazer a ponte entre Desenvolvimento (Eng. Software) e Operações (Infraestrutura), usando as bases que obtive no Suporte N2.`,

        'contato': `Me encontre no LinkedIn ou envie um email: 
        LinkedIn: <a href="https://www.linkedin.com/in/euopaulo/"><span class="link1">Meu Perfil no LinkedIn</span></a> 
        Email: <span class="link">paulo.henrg1@gmail.com</span>`,
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