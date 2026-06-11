import { useState, Fragment } from "react";

const F = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";

const CARGOS = [
  {
    id: "social", nome: "Social Media", color: "#C026D3", cs: "#E879F9", icon: "📱",
    etapas: [
      {
        titulo: "Abertura", sub: "Script + aquecimento",
        blocks: [
          { t: "script", text: '"Antes de começar, quero que saiba que não existe resposta certa ou errada aqui. Estou mais interessado em te conhecer como pessoa e entender como você pensa do que avaliar conhecimento técnico — isso a gente já viu no portfólio. Pode ficar à vontade."' },
          { t: "nota", text: "Se a pessoa ainda estiver rígida depois do script, pergunte algo fora do roteiro — sobre o dia, como chegou. Caráter aparece quando a guarda baixa." },
          { t: "group", sec: "Aquecimento", qs: [
            { q: "Me conta um pouco sobre você — não o currículo. A pessoa.", ins: "A escolha do que contar primeiro é reveladora. Quem fala só de conquistas está no modo performance. Quem traz algo pessoal está sendo real.", fu: 'Se citar só realizações: "E fora do trabalho, o que te define?"' },
            { q: "O que você sabia sobre a CPV antes de se candidatar? Como você chegou até aqui?", ins: "Separa quem se candidatou a tudo de quem teve intenção. Interesse genuíno aparece nos detalhes que a pessoa menciona sobre a empresa." },
          ]},
        ]
      },
      {
        titulo: "Criatividade e iniciativa", sub: "Como ela pensa e cria",
        blocks: [
          { t: "group", sec: "Perguntas", qs: [
            { q: "Me lembra o último conteúdo que você fez que não era o que foi pedido — você foi além. O que aconteceu?", ins: "Vai direto ao protagonismo criativo. Se não consegue lembrar nenhum caso, ela executa mas não cria por iniciativa.", fu: "Como a pessoa que pediu reagiu quando viu que você extrapolou o briefing?" },
            { q: "Me descreve um conteúdo de qualquer marca que você gostaria de ter feito. Por quê aquele?", ins: "A referência escolhida revela o nível de sofisticação criativa. Quem cita viral genérico vs. quem aponta algo estratégico com raciocínio claro são candidatos muito diferentes." },
            { q: "Já criou algo que você achava bom e não performou? O que você concluiu?", ins: "Não é 'aprendi a seguir o algoritmo'. É alguém que consegue separar qualidade subjetiva de resultado objective — com humildade para rever a própria visão." },
          ]},
        ]
      },
      {
        titulo: "Responsabilidade e aprendizado", sub: "Ownership + crescimento",
        blocks: [
          { t: "group", sec: "Ownership", qs: [
            { q: "Me conta uma situação em que uma entrega sua ficou abaixo do esperado. O que aconteceu, exatamente?", ins: '"Exatamente" força memória real. Quem assume o que foi seu tem ownership. Quem distribui a culpa antes de chegar ao aprendizado, não tem.', fu: "O que você faria diferente hoje se estivesse nessa mesma situação?" },
            { q: "Você já discordou de uma direção criativa que te pediram? O que fez?", ins: "Busca equilíbrio entre submissão e arrogância. Quem articula o ponto de vista, ouve o outro e decide com maturidade tem o perfil certo." },
          ]},
          { t: "group", sec: "Aprendizado", qs: [
            { q: "O que você aprendeu sobre social media nos últimos três meses que mudou algo no seu trabalho?", ins: "A especificidade do período força resposta real. Quem aprende continuamente responde sem pensar muito. Quem demora ou é vago aprende por acidente." },
            { q: "Qual foi a última vez que você estava errado sobre algo no trabalho? Como descobriu?", ins: "Quem nunca estava errado tem ego grande ou pouca consciência. Quem responde com facilidade tem autoconsciência e humildade intelectual." },
          ]},
        ]
      },
      {
        titulo: "Relações e processo", sub: "Colaboração + organização",
        blocks: [
          { t: "group", sec: "Colaboração", qs: [
            { q: "Me conta de alguém com quem você trabalhou que te ensinou muito — não um chefe, um colega.", ins: "Pessoas que aprendem com colegas têm ego calibrado. Observe o tom: admiração genuína ou condescendência?" },
            { q: "Já trabalhou com alguém difícil no time? Como foi o dia a dia?", ins: "Quem descreve o conflito sem demonizar o outro tem maturidade relacional. Quem só culpa revela o que faz quando o problema chega.", fu: "E se aquela pessoa estivesse aqui agora, como você acha que ela descreveria o convívio com você?" },
          ]},
          { t: "group", sec: "Organização", qs: [
            { q: "Me descreve como é sua semana típica de produção de conteúdo — do início ao fim.", ins: "Quem tem processo descreve com precisão. Quem não tem será vago. Processo indica entrega consistente, não dependente de inspiração." },
            { q: "Já perdeu um prazo? O que aconteceu e o que você fez quando percebeu?", ins: "Quem escondeu ou esperou alguém perceber tem problema de caráter. Quem comunicou proativamente e buscou solução tem o comportamento certo." },
          ]},
        ]
      },
      {
        titulo: "Encerramento", sub: "Perguntas finais + o que observar",
        blocks: [
          { t: "group", sec: "Perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não tivemos oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado". Como a pessoa se despede, como trata quem está na recepção. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Como ela fala de ex-chefes e colegas", desc: "Culpa generalizada é sinal de alerta. Reconhecer o lado do outro mesmo em conflito é maturidade." },
            { titulo: "Ela faz perguntas sobre você?", desc: "Curiosidade sobre o trabalho e a empresa é sinal de interesse real — não só de necessidade de emprego." },
            { titulo: "Como ela admite erro", desc: "Busca contextos, não desculpas. Quem assume e aprende é quem você quer no time." },
          ]},
        ]
      },
    ]
  },
  {
    id: "designer", nome: "Designer", color: "#0891B2", cs: "#67E8F9", icon: "🎨",
    etapas: [
      {
        titulo: "Abertura", sub: "Script + aquecimento",
        blocks: [
          { t: "script", text: '"Antes de começar, quero que saiba que não existe resposta certa ou errada aqui. Estou mais interessado em te conhecer como pessoa e entender como você pensa do que avaliar o técnico — isso a gente já viu no portfólio. Pode ficar à vontade."' },
          { t: "nota", text: "O portfólio já foi avaliado. Aqui você investiga como a pessoa pensa, aprende e se comporta em equipe. Coachability e curiosidade valem mais do que domínio técnico avançado." },
          { t: "group", sec: "Aquecimento", qs: [
            { q: "Me conta um pouco sobre você — não o currículo. A pessoa.", ins: "A escolha do que contar primeiro é reveladora. Quem fala só de conquistas está no modo performance. Quem traz algo pessoal está sendo real.", fu: 'Se citar só realizações: "E fora do trabalho, o que te define?"' },
            { q: "O que você sabia sobre a CPV antes de se candidatar? Como você chegou até aqui?", ins: "Separa quem se candidatou a tudo de quem teve intenção. Interesse genuíno aparece nos detalhes que a pessoa menciona." },
          ]},
        ]
      },
      {
        titulo: "Visão criativa", sub: "Como ela pensa design",
        blocks: [
          { t: "group", sec: "Perguntas", qs: [
            { q: "Me mostra — ou descreve — uma peça sua que você considera seu melhor trabalho. Por que essa?", ins: "A escolha importa tanto quanto a explicação. Quem escolhe a mais impressionante visualmente vs. quem escolhe a que resolveu melhor um problema real são perfis diferentes.", fu: "E tem alguma peça que você não mostraria no portfólio mas que aprendeu muito fazendo?" },
            { q: "Já recebeu um briefing tão aberto que você não sabia por onde começar? O que fez?", ins: "Testa tolerância à ambiguidade. Quem tem processo de organizar o vazio para chegar a um ponto de partida tem maturidade criativa." },
            { q: "Quando você olha para o trabalho de um designer que admira, o que exatamente você observa primeiro?", ins: '"Cores bonitas" é raso. "Hierarquia tipográfica, eye-flow, espaço negativo" — é alguém que realmente estuda design, não só consome.' },
          ]},
        ]
      },
      {
        titulo: "Responsabilidade e aprendizado", sub: "Ownership + crescimento",
        blocks: [
          { t: "group", sec: "Ownership", qs: [
            { q: "Já entregou algo que você sabia que não era o seu melhor, mas dentro do prazo? Como se sentiu?", ins: "O que você busca é alguém que sente desconforto genuíno ao entregar abaixo do padrão — que não normaliza isso.", fu: "Você comunicou para quem pediu que estava abaixo do seu padrão, ou entregou sem comentar?" },
            { q: "Como você reage quando alguém pede uma mudança que vai contra sua visão estética — e você sabe que tem razão?", ins: '"E você sabe que tem razão" cria tensão intencional. Designer com ego inflado não serve bem o negócio.' },
          ]},
          { t: "group", sec: "Aprendizado", qs: [
            { q: "Me conta uma habilidade de design que você ainda não tem e gostaria muito de desenvolver.", ins: "Quem aponta algo específico demonstra humildade intelectual e direção. Quem diz 'quero melhorar em tudo' não tem clareza de si." },
            { q: "Qual feedback sobre seu trabalho te incomodou mais — e por que te incomodou?", ins: "A resposta honesta revela o ego e os pontos cegos. Quem descreve o incômodo e reflete sobre o aprendizado é quem você quer no time." },
          ]},
        ]
      },
      {
        titulo: "Relações e processo", sub: "Colaboração + organization",
        blocks: [
          { t: "group", sec: "Colaboração", qs: [
            { q: "Me conta de um projeto em que você e outra pessoa tiveram visões criativas completamente diferentes. Como foi?", ins: "Quem mantém o ponto de vista sem demolir o do outro — que entende que o melhor resultado pode vir da tensão entre duas visões — tem maturidade." },
            { q: "Se eu ligasse agora para alguém com quem você trabalhou, o que essa pessoa diria sobre trabalhar com você?", ins: "A pessoa precisa se colocar no ponto de vista do outro. Autoconsciência alta Meso-produz respostas equilibradas, com pontos positivos e fragilidades reconhecidas." },
          ]},
          { t: "group", sec: "Organização", qs: [
            { q: "Me descreve como você organiza seu Figma. O que alguém de fora conseguiria entender do seu arquivo?", ins: "Organização de arquivo é janela para organização mental. Não é sobre ser perfeito — é sobre ter consciência do impacto na colaboração." },
            { q: "Já teve duas demandas urgentes ao mesmo tempo. O que você faz?", ins: "Observe se tem critério de priorização ou entra em paralisia. Paralisia é um padrão que se repete." },
          ]},
        ]
      },
      {
        titulo: "Encerramento", sub: "Perguntas finais + o que observar",
        blocks: [
          { t: "group", sec: "Perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não tivemos oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado". Como a pessoa se despede, como trata quem está na recepção. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Como ela fala de ex-chefes e colegas", desc: "Culpa generalizada é sinal de alerta. Reconhecer o lado do outro mesmo em conflito é maturidade." },
            { titulo: "Ela faz perguntas sobre você?", desc: "Curiosidade sobre o trabalho e a empresa é sinal de interesse real." },
            { titulo: "Como ela admite erro", desc: "Busca contextos, não desculpas. Quem assume e aprende é quem você quer no time." },
          ]},
        ]
      },
    ]
  },
  {
    id: "trafego", nome: "Gest. Tráfego", color: "#059669", cs: "#6EE7B7", icon: "📡",
    etapas: [
      {
        titulo: "Abertura", sub: "Script adaptado — sem portfólio",
        blocks: [
          { t: "nota", text: "Gestor de Tráfego não passa pela etapa de portfólio. Esta entrevista cobre fit cultural e validação técnica básica na mesma sessão." },
          { t: "script", text: '"Antes de começar, quero deixar claro que não existe resposta certa ou errada aqui. Eu quero te conhecer como profissional e como pessoa — entender como você pensa, como você age diante de desafios. O que a gente vai ver depois é sobre ferramenta e processo. Aqui é sobre você. Pode ficar à vontade."' },
          { t: "group", sec: "Aquecimento", qs: [
            { q: "Me conta sobre você — quem é você além do que tá no currículo?", ins: "Quem o candidato escolhe ser quando não está sendo avaliado pelo técnico?" },
            { q: "Como o tráfego entrou na sua vida? Foi uma escolha ou aconteceu?", ins: "Quem escolheu ativamente tende a ter mais comprometimento. Observe se criou identidade com a área ou ainda está passando por ela." },
          ]},
        ]
      },
      {
        titulo: "Ownership e aprendizado", sub: "Responsabilidade + evolução",
        blocks: [
          { t: "group", sec: "Ownership", qs: [
            { q: "Me conta uma campanha que você considerava bem estruturada e não deu o resultado esperado. O que concluiu?", ins: "O ponto central não é o erro — é a capacidade de análise pós-falha. Quem culpa a plataforma sem se incluir na equação não tem ownership.", fu: "E o que você mudou concretamente nas campanhas seguintes por causa disso?" },
            { q: "Quando você entrega um relatório com resultado abaixo do esperado, o que você faz antes de apresentar?", ins: "Quem aparece com análise, contexto e próximos passos já preparados tem ownership real. Quem só apresenta os números e espera o cliente reagir não entende o que é ser dono do resultado." },
          ]},
          { t: "group", sec: "Aprendizado", qs: [
            { q: "Qual atualização de plataforma mudou mais como você trabalha? Como você lidou?", ins: "Quem não consegue citar nada específico reage às mudanças quando já chegam no trabalho, em vez de se antecipar." },
            { q: "Já testou algo em campanha por curiosidade — algo fora do pedido do cliente — e aprendeu com isso?", ins: "Testa mentalidade de experimentação. Gestor que só executa o que foi combinado nunca vai encontrar o que funciona de verdade." },
          ]},
        ]
      },
      {
        titulo: "Técnico — plataforma e criativos", sub: "Gerenciador + copy + funil",
        blocks: [
          { t: "alerta", text: 'Não exija excelência — exija raciocínio coerente e honestidade sobre o que não sabe. Quem diz "não sei, mas raciocino assim..." tem mais valor do que quem inventa.' },
          { t: "group", sec: "Gerenciador e campanhas", qs: [
            { q: "Como você estrutura uma campanha do zero — do objetivo até a segmentação? Me leva pelo seu raciocínio.", ins: '"Me leva pelo raciocínio" é intencional. Você quer entender como pensa, não só se sabe fazer.' },
            { q: "O que você olha primeiro quando abre o gerenciador de um cliente que você nunca atendeu?", ins: "Quem vai direto para métricas de resultado (CPA, ROAS) tem divisão de negócios e visão de negócio. Quem vai para configuração primeiro está mais no operacional." },
            { q: "Quando você decide pausar um anúncio? Qual é seu critério?", ins: "Critério objetivo vs. feeling. Quem tem regras claras é mais previsível e confiável do que quem decide por instinto." },
          ]},
          { t: "group", sec: "Criativo e copy", qs: [
            { q: "Me mostra — ou descreve — um anúncio que você considera muito bom. Por que aquele funciona?", ins: "Quem consegue desmontar em elementos (hook, proposta de valor, CTA, match com o funil) tem visão estratégica. Quem só diz 'é bonito' está na superfície." },
            { q: "Você já pediu mudança em copy com base em dados? O que observou e o que pediu, exatamente?", ins: '"Exatamente" força resposta real. Quem conecta dado com criativo tem uma habilidade rara e muito valiosa.' },
          ]},
          { t: "group", sec: "Funil e MQL", qs: [
            { q: "Qual é a diferença real entre um lead e um MQL? Como você garante que o tráfego está trazendo o segundo?", ins: "Quem não articula essa diferença está focado em volume, não qualidade. Gestor que pensa em MQL pensa junto com vendas." },
            { q: "Se o time de vendas te disser que os leads não estão fechando, o que você faz?", ins: "Quem defende o próprio trabalho antes de investigar tem problema de ego. Quem vai direto para o diagnóstico conjunto tem mentalidade de resultado." },
          ]},
        ]
      },
      {
        titulo: "Relações e colaboração", sub: "Como ele funciona em equipe",
        blocks: [
          { t: "group", sec: "Colaboração", qs: [
            { q: "Quando você pede alteração de criativo para o design, como faz esse pedido? Me dá um exemplo real.", ins: 'Quem pede com dado ("o CTR caiu") vs. quem pede no feeling ("acho que pode melhorar") são profissionais em níveis completamente diferentes.' },
            { q: "Já teve atrito com alguém de outra área sobre uma campanha? Me conta o que houve.", ins: "Observe se consegue narrar o conflito de forma madura — incluindo o que ela fez de errado. Habilidade relacional é tão importante quanto técnica." },
            { q: "Já identificou um problema em uma conta antes de o cliente perceber? O que fez — e como comunicou?", ins: '"Como comunicou" é tão importante quanto o que fez. Proatividade sem comunicação clara não tem valor.' },
          ]},
        ]
      },
      {
        titulo: "Encerramento", sub: "Perguntas finais + o que observar",
        blocks: [
          { t: "group", sec: "Perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real." },
            { q: "Tem algo que você queria ter falado e não tivemos oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "obs", items: [
            { titulo: "Como ela fala de ex-chefes e colegas", desc: "Culpa generalizada é sinal de alerta." },
            { titulo: "Ela faz perguntas sobre você?", desc: "Curiosidade sobre o trabalho e a empresa é sinal de interesse real." },
            { titulo: "Como ela admite erro", desc: "Busca contextos, não desculpas. Quem assume e aprende é quem você quer no time." },
          ]},
        ]
      },
    ]
  },
  {
    id: "sdr", nome: "SDR", color: "#7C3AED", cs: "#A78BFA", icon: "📞",
    etapas: [
      {
        titulo: "Abertura", sub: "Script + aquecimento",
        blocks: [
          { t: "script", text: '"Antes de começar, quero deixar claro: não existe resposta certa aqui. Quero entender como você pensa, o que te move e como você age quando as coisas não vão bem. SDR bom não é quem fala bonito — é quem insiste do jeito certo e sabe quando parar. Pode ficar à vontade."' },
          { t: "nota", text: "Você está procurando SDR Inbound com vontade de vencer. Isso não aparece no currículo — aparece em como a pessoa fala de meta, de rejeição, de número. Observe o que ela rastreia, o que a move e o que a paralisa." },
          { t: "group", sec: "Aquecimento", qs: [
            { q: "Me conta sobre você — não o currículo. O que te move?", ins: "Quem fala de conquistas está em modo performance. Quem revela o que genuinamente importa pra ela está sendo real. O que a faz segurar numa semana difícil?", fu: 'Se citar só realizações: "E o que você faria mesmo que ninguém soubesse ou pagasse?"' },
            { q: "O que você sabia sobre a CPV antes de se candidatar? Como você chegou até aqui?", ins: "Separa quem se candidatou a tudo de quem veio com intenção. Interesse genuíno aparece nos detalhes que a pessoa menciona sobre o que a empresa faz." },
          ]},
        ]
      },
      {
        titulo: "Ambição e drive", sub: "O motor interno que busca resultado",
        blocks: [
          { t: "nota", text: "Esta etapa revela se a motivação é interna ou externa. SDR com motor interno sustenta performance sem supervisão constante. Quem precisa de pressão para funcionar não escala." },
          { t: "group", sec: "Vontade de vencer", qs: [
            { q: "Você acompanha suas próprias métricas — taxa de conexão, conversão, velocidade de primeiro contato? Me fala seus números.", ins: "Quem tem vontade de vencer conhece os próprios números de cabeça. Não precisa ser exato — o que revela é se a pessoa rastreia ou não. Executor passivo não acompanha.", fu: "Qual desses números você mais quer melhorar agora? Por quê?" },
            { q: "Você é competitivo? Me dá um exemplo — pode ser fora do trabalho.", ins: "Competitividade saudável não é ego. É querer se superar. Quem não consegue dar nenhum exemplo provavelmente não tem esse drive. Observe: a competição é contra si mesmo ou sempre contra o outro?" },
            { q: "Me conta um momento em que você estava atrás da meta e virou o jogo — ou chegou perto o suficiente para se orgulhar. O que fez diferente?", ins: "Não é sobre ter virado sempre. É sobre o que a pessoa fez quando estava em desvantagem. Quem improvisa, busca ajuda e muda abordagem tem o comportamento certo." },
          ]},
        ]
      },
      {
        titulo: "Qualificação inbound", sub: "Velocidade, critério e handoff",
        blocks: [
          { t: "alerta", text: "SDR Inbound lida com leads que já demonstraram interesse. O erro mais comum não é a abordagem — é deixar o lead esfriar, avançar quem não tem perfil ou entregar lead mal qualificado para o closer." },
          { t: "group", sec: "Urgência e qualificação", qs: [
            { q: "Um lead entrou pelo site agora. Quanto tempo você tem para fazer o primeiro contato? Por quê?", ins: "Não existe resposta exata, mas quem responde com urgência ('minutos', 'o mais rápido possível') entende que inbound esfria rápido. Quem diz 'quando possível' não entende a janela de oportunidade.", fu: "E se for final de tarde, quase fora do horário comercial — o que você faz?" },
            { q: "Como você decide em menos de 5 minutos de conversa se um lead vale avançar? Me descreve as perguntas que você faz.", ins: "Quem qualifica com critério claro — perfil, urgência, autoridade, orçamento — pensa estrategicamente. Quem avança qualquer lead 'para o closer decidir' está terceirizando o trabalho." },
            { q: "Já recebeu um lead muito interessado mas que claramente não tinha perfil. O que fez?", ins: "Disqualificação é uma habilidade. Quem não consegue encerrar gentilmente perde tempo e prejudica o closer. Quem sabe dizer 'não agora' com clareza e sem constranger é valioso." },
          ]},
          { t: "group", sec: "Handoff", qs: [
            { q: "Como você passa um lead qualificado para o closer? Me descreve o que você entrega — além do nome e telefone.", ins: "SDR que entrega lead como número prejudica o time. Quem pensa no que o closer precisa saber — contexto, dor, urgência, o que foi dito — está pensando em resultado." },
          ]},
        ]
      },
      {
        titulo: "Resiliência e aprendizado", sub: "Como ela lida com pressão e evolui",
        blocks: [
          { t: "group", sec: "Resiliência", qs: [
            { q: "Me descreve a semana mais difícil que você teve em vendas. O que estava acontecendo? Como ficou seu humor?", ins: "Não busca quem nunca quebrou — busca quem quebrou e voltou. Honestidade sobre como o emocional foi afetado vale mais do que 'nada me abala'. O que importa é o que a pessoa fez no dia seguinte.", fu: "E o que você fez na segunda-feira depois?" },
            { q: "Quando você percebe que não vai bater a meta do mês, o que você faz? Seja específico.", ins: "Quem escondeu tem problema de caráter. Quem comunicou, ajustou abordagem e pediu ajuda tem o comportamento certo. 'Trabalho mais' sem detalhe é resposta vaga." },
          ]},
          { t: "group", sec: "Aprendizado tático", qs: [
            { q: "Quando uma abordagem não está convertendo, quanto tempo você leva para mudar? Me conta um exemplo real.", ins: "SDR que não itera fica preso no mesmo script. Quem testa, mede e ajusta rápido tem o ciclo que gera evolução. Quem espera o gestor dizer que não está funcionando é reativo." },
            { q: "O que você mudou na sua abordagem nos últimos dois meses? O que levou a essa mudança?", ins: '"Dois meses" força resposta recente e real. Quem estuda e aplica responde sem hesitar. Quem é vago ou não lembra nada aprende por acidente, não por intenção.' },
          ]},
        ]
      },
      {
        titulo: "Encerramento", sub: "Perguntas finais + o que observar",
        blocks: [
          { t: "group", sec: "Perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não tivemos oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado". Como a pessoa se despede. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Ela fala dos próprios números com naturalidade?", desc: "SDR com vontade de vencer conhece suas métricas. Quem não sabe é executor passivo." },
            { titulo: "Como ela fala de metas que não bateu", desc: "Culpa o contexto antes de se incluir? Ou assume o que foi seu? Ownership aparece nessas histórias." },
            { titulo: "Ela demonstra curiosidade sobre o produto e o cliente?", desc: "SDR Inbound que não entende o que vende não qualifica bem. Interesse genuíno no problema do prospect é o diferencial." },
          ]},
        ]
      },
    ]
  },
  {
    id: "filmmaker", nome: "Filmmaker", color: "#B45309", cs: "#FCD34D", icon: "🎬",
    etapas: [
      {
        titulo: "Abertura", sub: "Script + aquecimento",
        blocks: [
          { t: "script", text: '"Antes de começar, quero que saiba que não existe resposta certa ou errada aqui. Estou mais interessado em te conhecer como pessoa e entender como você pensa do que avaliar o técnico — isso a gente já viu no portfólio. Pode ficar à vontade."' },
          { t: "nota", text: "O portfólio já foi avaliado. Aqui você investiga como a pessoa pensa processo, colaboração e qualidade. O que você busca é olhar, processo e responsabilidade — não volume de equipamento." },
          { t: "group", sec: "Aquecimento", qs: [
            { q: "Me conta um pouco sobre você — não o currículo. A pessoa.", ins: "A escolha do que contar primeiro é reveladora. Quem fala só de conquistas está no modo performance. Quem traz algo pessoal está sendo real.", fu: 'Se citar só realizações: "E fora do trabalho, o que te define?"' },
            { q: "O que você sabia sobre a CPV antes de se candidatar? Como você chegou até aqui?", ins: "Separa quem se candidatou a tudo de quem teve intenção. Interesse genuíno aparece nos detalhes que a pessoa menciona." },
          ]},
        ]
      },
      {
        titulo: "Visão criativa", sub: "Como ela pensa em vídeo",
        blocks: [
          { t: "group", sec: "Perguntas", qs: [
            { q: "Me mostra — ou descreve — um vídeo que você fez e que te orgulha mais. Por que esse?", ins: "Quem escolhe pela qualidade técnica vs. quem escolhe pelo impacto gerado são perfis diferentes. O 'por quê' revela o que a pessoa valoriza no próprio trabalho.", fu: "E um que você não colocaria no portfólio mas que aprendeu muito fazendo?" },
            { q: "Quando você assiste a um vídeo muito bom, o que você observa? O que passa na sua cabeça?", ins: "Quem analisa luz, corte, ritmo, intenção narrativa tem olho treinado. Quem só diz 'achei bonito' ainda não desenvolveu visão crítica." },
            { q: "Me descreve como você pensa um vídeo do zero — antes de ligar a câmera, o que já precisa estar resolvido?", ins: "Revela processo criativo e nível de planejamento. Quem tem câmera na mão antes de ter intenção na cabeça gera material de baixa qualidade." },
          ]},
        ]
      },
      {
        titulo: "Responsabilidade e aprendizado", sub: "Ownership + crescimento",
        blocks: [
          { t: "group", sec: "Ownership", qs: [
            { q: "Já teve uma gravação que deu errado no dia — equipamento, luz, locação. O que você fez?", ins: "Adaptação em tempo real é a habilidade mais valiosa. Quem entra em colapso quando o plano falha vai travar na produção.", fu: "E o resultado final ficou comprometido ou você conseguiu recuperar?" },
            { q: "Já entregou um vídeo que você sabia que estava abaixo do seu padrão? O que aconteceu?", ins: "O que importa é se a pessoa normaliza isso ou sente desconforto genuíno. E se comunicou ou entregou em silêncio." },
          ]},
          { t: "group", sec: "Aprendizado", qs: [
            { q: "Qual técnica ou estilo você aprendeu no último ano que mudou algo no seu jeito de filmar ou editar?", ins: "Filmmaker que aprende continuamente responde sem pensar muito. Quem demora ou é vago aprende por acidente, não por intenção." },
            { q: "Me conta de um vídeo que você refez, ou que teria refeito, depois de ver o resultado. O que mudaria?", ins: "Olhar crítico sobre o próprio trabalho é raro e valioso. Quem aponta exatamente o que mudaria tem o nível de autocrítica que gera evolução real." },
          ]},
        ]
      },
      {
        titulo: "Relações e processo", sub: "Colaboração + organização",
        blocks: [
          { t: "group", sec: "Colaboração", qs: [
            { q: "Já teve que ceder criativamente num projeto — fazer de um jeito que não era o seu? Como foi?", ins: "Quem cede sem ressentimento e sabe distinguir 'minha visão está certa' de 'minha visão é mais uma opção' tem maturidade." },
            { q: "Como você alinha o que vai gravar com quem pediu o vídeo? Me descreve o processo antes de ligar a câmera.", ins: "Filmmaker que grava sem alinhar expectativa gera retrabalho. Quem tem processo de briefing confirma objetivo, estilo e entregáveis antes de investir tempo." },
          ]},
          { t: "group", sec: "Organização", qs: [
            { q: "Como você organiza seus arquivos de filmagem e edição? O que alguém de fora entenderia do seu HD?", ins: "Organização de material revela organização mental. Filmmaker desorganizado perde material, perde tempo e gera retrabalho." },
            { q: "Como você gerencia projetos quando tem mais de um rodando ao mesmo tempo?", ins: "Quem aceita tudo sem critério vai entregar tudo mal. Quem tem sistema — mesmo simples — entrega com mais consistência." },
          ]},
        ]
      },
      {
        titulo: "Encerramento", sub: "Perguntas finais + o que observar",
        blocks: [
          { t: "group", sec: "Perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real." },
            { q: "Tem algo que você queria ter falado e não tivemos oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "obs", items: [
            { titulo: "Como ela fala de ex-chefes e colegas", desc: "Culpa generalizada é sinal de alerta. Reconhecer o lado do outro mesmo em conflito é maturidade." },
            { titulo: "Ela faz perguntas sobre você?", desc: "Curiosidade sobre o trabalho e a empresa é sinal de interesse real." },
            { titulo: "Como ela admite erro", desc: "Busca contextos, não desculpas. Quem assume e aprende é quem você quer no time." },
          ]},
        ]
      },
    ]
  },
];

function RevealInsight({ text, color, cs }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 6 }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 11, fontWeight: 700, letterSpacing: ".03em",
          padding: "5px 13px", borderRadius: 7,
          border: `2px solid ${color}cc`,
          background: `${color}28`, color: cs,
          cursor: "pointer", fontFamily: F,
          textTransform: "uppercase", transition: "background-color 0.15s, border-color 0.15s, color 0.15s",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform .18s", flexShrink: 0 }}>
          <path d="M4 2l4 4-4 4" />
        </svg>
        {open ? "Ocultar" : "O que revela"}
      </button>
      {open && (
        <div style={{
          marginTop: 9, padding: "11px 13px", borderRadius: 8,
          background: `${color}15`, border: `1.5px solid ${color}38`,
          fontSize: 12, lineHeight: 1.65,
        }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: cs, marginBottom: 4 }}>
            O que revela
          </div>
          <div style={{ color: "rgba(240,235,248,.62)" }}>{text}</div>
        </div>
      )}
    </div>
  );
}

function BlockRenderer({ block, color, cs }) {
  if (block.t === "script") return (
    <div style={{ background: "rgba(255,255,255,.04)", borderRadius: 10, border: "1px solid rgba(167,100,255,.18)", padding: "14px 16px", marginBottom: 16 }}>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(240,235,248,.35)", marginBottom: 7 }}>Script de abertura</div>
      <div style={{ fontSize: 13, color: "rgba(240,235,248,.75)", lineHeight: 1.7, fontStyle: "italic" }}>{block.text}</div>
    </div>
  );

  if (block.t === "nota") return (
    <div style={{ borderRadius: 8, padding: "10px 14px", marginBottom: 16, background: `${color}15`, border: `1.5px solid ${color}40` }}>
      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: cs, display: "block", marginBottom: 4 }}>Nota</span>
      <span style={{ fontSize: 12, color: "rgba(240,235,248,.6)", lineHeight: 1.6 }}>{block.text}</span>
    </div>
  );

  if (block.t === "alerta") return (
    <div style={{ display: "flex", gap: 10, background: "rgba(220,50,50,.08)", border: "1px solid rgba(220,50,50,.28)", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 12, color: "rgba(240,160,160,.85)", lineHeight: 1.55 }}>
      <span style={{ fontSize: 13, flexShrink: 0 }}>⚠</span>
      <span>{block.text}</span>
    </div>
  );

  if (block.t === "group") return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,235,248,.28)", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid rgba(167,100,255,.08)" }}>
        {block.sec}
      </div>
      {block.qs.map((q, qi) => (
        <div key={qi} style={{ padding: "13px 0", borderBottom: qi < block.qs.length - 1 ? "1px solid rgba(167,100,255,.07)" : "none", display: "flex", gap: 11 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(240,235,248,.28)", minWidth: 16, marginTop: 2, flexShrink: 0 }}>{qi + 1}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13.5, color: "rgba(240,235,248,.94)", lineHeight: 1.58, fontWeight: 600, marginBottom: 8 }}>{q.q}</div>
            {q.fu && (
              <div style={{ marginTop: 7, padding: "7px 11px", borderLeft: `2px solid ${color}99`, fontSize: 12, color: "rgba(240,235,248,.6)", lineHeight: 1.55, fontStyle: "italic" }}>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(240,235,248,.28)", display: "block", marginBottom: 3, fontStyle: "normal" }}>Follow-up</span>
                {q.fu}
              </div>
            )}
            {q.ins && <RevealInsight text={q.ins} color={color} cs={cs} />}
          </div>
        </div>
      ))}
    </div>
  );

  if (block.t === "obs") return (
    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(167,100,255,.12)" }}>
      {block.items.map((item, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,.02)", padding: "11px 15px", display: "flex", gap: 10, borderBottom: i < block.items.length - 1 ? "1px solid rgba(167,100,255,.06)" : "none" }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, marginTop: 6, flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(240,235,248,.88)", marginBottom: 2 }}>{item.titulo}</div>
            <div style={{ fontSize: 12, color: "rgba(240,235,248,.48)", lineHeight: 1.5 }}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return null;
}

export default function App() {
  const [cA, setCA] = useState(0);
  const [eA, setEA] = useState(0);

  const cargo = CARGOS[cA];
  const etapa = cargo.etapas[eA];
  const total = cargo.etapas.length;

  const handleCargo = (i) => { setCA(i); setEA(0); };
  const handleStep = (d) => setEA(e => Math.max(0, Math.min(total - 1, e + d)));

  return (
    <div className="ecpv-bg ecpv-grid">
      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", padding: "28px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#C026D3", marginBottom: 8 }}>People & Performance · CPV</div>
          <div style={{ fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 800, background: "linear-gradient(135deg,#E879F9,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 5 }}>
            Condução de Entrevista
          </div>
          <div style={{ fontSize: 12, color: "rgba(240,235,248,0.55)" }}>Siga as etapas em sequência — cada cargo tem seu roteiro completo</div>
        </div>

        {/* Cargo nav */}
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>
          {CARGOS.map((c, i) => (
            <button key={i} onClick={() => handleCargo(i)} style={{
              padding: "8px 18px", borderRadius: 100,
              border: `2px solid ${i === cA ? c.color : "rgba(167,100,255,0.35)"}`,
              background: i === cA ? `linear-gradient(135deg,${c.color}55,${c.color}30)` : "rgba(22,10,38,0.9)",
              color: i === cA ? c.cs : "rgba(240,235,248,0.75)",
              fontFamily: F, fontSize: 12, fontWeight: 700, cursor: "pointer",
              boxShadow: i === cA ? `0 0 0 1px ${c.color}33` : "none",
              transition: "background-color 0.18s, border-color 0.18s, color 0.18s, box-shadow 0.18s",
            }}>
              {c.icon} {c.nome}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 20, padding: "0 2px" }}>
          {cargo.etapas.map((e, i) => {
            const isActive = i === eA, isDone = i < eA;
            return (
              <Fragment key={`step-${i}`}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", flexShrink: 0 }} onClick={() => setEA(i)}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    border: `2px solid ${isActive ? cargo.color : isDone ? cargo.color + "99" : "rgba(167,100,255,0.2)"}`,
                    background: isActive ? `${cargo.color}33` : isDone ? `${cargo.color}18` : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800,
                    color: isActive ? cargo.cs : isDone ? cargo.color + "aa" : "rgba(240,235,248,0.2)",
                    transition: "color 0.2s, border-color 0.2s, background-color 0.2s", flexShrink: 0,
                  }}>
                    {isDone ? "✓" : i + 1}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", color: isActive ? cargo.cs : isDone ? "rgba(240,235,248,0.5)" : "rgba(240,235,248,0.2)", transition: "color 0.2s" }}>
                    {e.titulo}
                  </span>
                </div>
                {i < cargo.etapas.length - 1 && (
                  <div style={{ flex: 1, height: 2, borderRadius: 1, minWidth: 12, background: isDone ? `${cargo.color}66` : "rgba(167,100,255,0.12)" }} />
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Content card */}
        <div style={{ background: "rgba(19,11,28,0.92)", borderRadius: 16, border: "1px solid rgba(167,100,255,0.18)", overflow: "hidden", marginBottom: 16 }}>
          <div style={{ padding: "22px 26px 18px", position: "relative", borderBottom: "1px solid rgba(167,100,255,0.12)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${cargo.color},${cargo.cs})` }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at top left,${cargo.color}15 0%,transparent 60%)`, pointerEvents: "none" }} />
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: cargo.color, marginBottom: 8 }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${cargo.color}33`, color: cargo.cs, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800 }}>{eA + 1}</div>
              {cargo.nome}
            </div>
            <div style={{ fontSize: "clamp(16px,2.5vw,22px)", fontWeight: 800, color: cargo.cs, lineHeight: 1.2, marginBottom: 4 }}>{etapa.titulo}</div>
            <div style={{ fontSize: 12, color: "rgba(240,235,248,0.55)", fontStyle: "italic" }}>{etapa.sub}</div>
          </div>
          <div style={{ padding: "22px 26px" }}>
            {etapa.blocks.map((block, bi) => (
              <BlockRenderer key={bi} block={block} color={cargo.color} cs={cargo.cs} />
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            disabled={eA === 0}
            onClick={() => handleStep(-1)}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "10px 20px", borderRadius: 100,
              border: "2px solid rgba(167,100,255,.4)",
              background: "rgba(22,10,38,.9)",
              color: "rgba(240,235,248,.75)",
              fontFamily: F, fontSize: 12, fontWeight: 700, cursor: eA === 0 ? "default" : "pointer",
              opacity: eA === 0 ? 0.25 : 1, transition: "background-color 0.18s, border-color 0.18s, opacity 0.18s, color 0.18s",
            }}
          >
            ← Etapa anterior
          </button>

          <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(240,235,248,.35)", letterSpacing: ".05em" }}>
            {eA + 1} de {total}
          </span>

          <button
            disabled={eA === total - 1}
            onClick={() => handleStep(1)}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "10px 20px", borderRadius: 100,
              border: "2px solid transparent",
              background: eA < total - 1 ? `linear-gradient(135deg,${cargo.color},${cargo.cs})` : "rgba(22,10,38,.4)",
              color: "#fff",
              fontFamily: F, fontSize: 12, fontWeight: 700, cursor: eA === total - 1 ? "default" : "pointer",
              opacity: eA === total - 1 ? 0.25 : 1, transition: "background-color 0.18s, border-color 0.18s, opacity 0.18s, color 0.18s",
            }}
          >
            Próxima etapa →
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: 40, fontSize: 11, color: "rgba(240,235,248,.2)", letterSpacing: ".1em", textTransform: "uppercase" }}>
          CPV · People & Performance · Condução de Entrevista v3
        </div>
      </div>
    </div>
  );
}
