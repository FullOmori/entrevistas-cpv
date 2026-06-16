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
          { t: "script", text: '"Antes de começar, quero que saiba que não existe resposta certa aqui. O portfólio a gente já viu — aqui eu quero entender quem você é como designer: como você pensa, como você resolve, como você se comporta quando o projeto complica. Pode ficar à vontade."' },
          { t: "nota", text: "O portfólio já foi avaliado. Aqui você investiga processo, maturidade e identidade profissional. O que você busca não é o designer mais talentoso — é quem pensa com clareza, entrega com consistência e cresce com feedback." },
          { t: "group", sec: "Aquecimento", qs: [
            { q: "Me conta sobre você além do portfólio — o que te move como designer?", ins: "A resposta revela identidade profissional. Quem fala de resolver problemas tem maturidade diferente de quem fala de fazer coisas bonitas. Nenhum é errado — mas dizem muito sobre o que vai motivar essa pessoa no dia a dia.", fu: 'Se falar só de estética: "E quando te pedem algo que você acha feio mas que funciona — como você lida?"' },
            { q: "Quando você olha para o seu trabalho, o que te dá mais orgulho — a estética, a solução ou o processo?", ins: "Não existe resposta certa. O que você observa é a coerência entre o que a pessoa valoriza e o tipo de trabalho que vai encontrar aqui. Designer que valoriza só estética vai frustrar em ambiente orientado a resultado." },
          ]},
        ]
      },
      {
        titulo: "Criatividade e processo", sub: "Como ela pensa e começa",
        blocks: [
          { t: "group", sec: "Processo criativo", qs: [
            { q: "Me descreve como você começa um projeto do zero. O que acontece antes de abrir o Figma?", ins: "Quem tem processo descreve com clareza: leitura do briefing, referências, rascunho, alinhamento. Quem abre o Figma antes de ter clareza do problema vai iterar por tentativa e erro — e gerar retrabalho.", fu: "E quando o briefing chega incompleto — você começa assim mesmo ou espera até ter as respostas que precisa?" },
            { q: "Já teve um briefing muito aberto, sem referências nem direção clara? Como você lidou?", ins: "Testa tolerância à ambiguidade. Designer que paralisa diante do vazio depende de briefing perfeito para entregar. Quem cria processo próprio para organizar o vazio tem maturidade criativa." },
            { q: "Me mostra — ou descreve — uma peça que representa bem o seu jeito de trabalhar. Por que essa?", ins: "A escolha diz tanto quanto a explicação. Quem escolhe pelo impacto que gerou vale mais do que quem escolhe pela peça mais bonita. O 'por quê' revela o que a pessoa valoriza no próprio trabalho.", fu: "E uma peça que você não mostraria no portfólio mas que aprendeu muito fazendo?" },
          ]},
        ]
      },
      {
        titulo: "Ownership e entrega", sub: "Responsabilidade + adaptação",
        blocks: [
          { t: "group", sec: "Responsabilidade", qs: [
            { q: "Já foi responsável por um projeto de ponta a ponta — do briefing à entrega final? Me conta como foi.", ins: "Separa quem executou peças de quem pensou o todo. Quem teve ownership real sabe descrever os problemas que apareceram no meio e como resolveu — não só o resultado.", fu: "Teve um momento em que você precisou tomar uma decisão criativa sozinho, sem aprovação? O que fez?" },
            { q: "Como você garante qualidade quando tem muitas entregas ao mesmo tempo?", ins: "Quem tem processo de priorização descreve com precisão. Quem diz 'trabalho mais horas' não tem sistema — tem esforço. E esforço sem sistema não escala." },
          ]},
          { t: "group", sec: "Adaptação e feedback", qs: [
            { q: "Me conta de um projeto que sofreu muitas revisões. Como você se sentiu e como conduziu?", ins: "Não busca quem nunca frustrou — busca quem processa a frustração sem deixar o ego contaminar a entrega. Quem narra a situação com maturidade, incluindo o que fez diferente, tem o perfil certo.", fu: "Em algum momento você entendeu por que as revisões eram necessárias — ou ficou no 'o cliente não entende'?" },
            { q: "Como você reage quando o cliente ou gestor pede algo que você acha que vai prejudicar o resultado?", ins: "Designer com ego inflado defende a visão acima do resultado. Designer sem ego entrega sem questionar. O que você quer é quem argumenta com contexto e aceita quando o outro tem razão." },
          ]},
        ]
      },
      {
        titulo: "Colaboração e fit", sub: "Time + ambiente",
        blocks: [
          { t: "group", sec: "Colaboração", qs: [
            { q: "Como você apresenta suas ideias para pessoas que não são da área criativa?", ins: "Quem traduz a lógica criativa para negócio — 'fiz assim porque quero que o olho vá para cá, o que aumenta a chance de clicar' — tem habilidade rara. Quem espera que o outro 'entenda o design' vai frustrar sempre." },
            { q: "Já trabalhou com Social Media ou tráfego para alinhar uma campanha? Como foi?", ins: "Para CPV especificamente, designer não trabalha isolado. Observe se a pessoa entende que o criativo serve o resultado — e não só o portfólio." },
          ]},
          { t: "group", sec: "Fit cultural", qs: [
            { q: "O que te faz querer crescer dentro de um lugar — e não só passar por ele?", ins: "Quem responde com clareza sabe o que quer. Quem é vago ainda não parou para pensar nisso. Compare a resposta com o que você pode oferecer — e seja honesto se não tem match." },
            { q: "Que tipo de ambiente tira o melhor de você criativamente?", ins: "A resposta revela o que a pessoa precisa para performar. Não existe certo ou errado — existe compatibilidade com a cultura que vocês têm." },
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
            { titulo: "Como ela fala do próprio trabalho", desc: "Orgulho excessivo sem autocrítica é sinal de alerta. Quem aponta o que melhoraria numa peça própria revela maturidade." },
            { titulo: "Ela faz perguntas sobre o trabalho e a equipe?", desc: "Curiosidade genuína sobre com quem vai trabalhar e o que vai fazer é sinal de interesse real." },
            { titulo: "Como ela reage à palavra 'revisão'", desc: "Observe o tom. Quem tensa ao ouvir revisão vai criar atrito. Quem entende revisão como parte do processo tem maturidade." },
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
    id: "closer", nome: "Closer", color: "#DC2626", cs: "#FCA5A5", icon: "🎯",
    etapas: [
      {
        titulo: "Abertura", sub: "História e contexto de vida · ~8 min",
        blocks: [
          { t: "nota", text: "O objetivo aqui é deixar a pessoa contar a própria história no ritmo dela. Família, origem, responsabilidades e contexto de vida surgem naturalmente — sem necessidade de perguntar diretamente." },
          { t: "group", sec: "Aquecimento", qs: [
            { q: "Me conta um pouco da sua história — de onde você veio, como chegou até onde tá hoje.", ins: "O que a pessoa escolhe contar primeiro revela o que é prioridade pra ela. Família, cidade, trajetória — tudo vem voluntariamente." },
            { q: "O que te fez topar essa conversa? O que você tá buscando de diferente?", ins: "Motivação real — financeira, crescimento, fuga, ambição." },
          ]},
          { t: "nota", text: "Não pergunte diretamente sobre idade, estado civil ou filhos — além de ser vedado pela CLT, é desnecessário. Quem tem família geralmente menciona ao falar de contexto de vida ou motivação financeira. O que a pessoa escolhe contar voluntariamente é dado muito mais rico do que o que ela responderia por obrigação." },
          { t: "obs", items: [
            { titulo: "Clareza de fala", desc: "Como a pessoa se expressa e organiza o raciocínio." },
            { titulo: "Motivação de entrada", desc: "O que realmente a trouxe até aqui — financeiro, crescimento, fuga, ambição." },
            { titulo: "Contexto de vida", desc: "Responsabilidades, ritmo e o que molda as decisões dela." },
            { titulo: "Presença e postura", desc: "Como ela se apresenta quando não está em modo defesa." },
            { titulo: "Autoconsciência", desc: "Ela sabe o que quer e por quê?" },
          ]},
        ]
      },
      {
        titulo: "Técnico", sub: "Processo, método e objeção · ~20 min",
        blocks: [
          { t: "alerta", text: "As perguntas parecem conversa, mas cada uma tem um critério de avaliação interno específico. Não entregue o critério — só faça a pergunta e escute." },
          { t: "group", sec: "Processo e método", qs: [
            { q: "Me conta uma venda que você perdeu. E me fala onde você acha que perdeu.", ins: "Autocrítica real vs. culpa externa. Closer bom sabe exatamente onde escorregou." },
            { q: "Quando o lead traz preço como objeção, qual é o seu primeiro movimento?", ins: "Isola a objeção ou já começa a dar desconto? Processo vs. impulso." },
            { q: "Você já trabalhou com metodologia de vendas definida pela empresa ou sempre construiu do seu jeito?", ins: "Aderência a processo. Sênior que improvisa quebra a operação." },
            { q: "Me conta como você conduzia o follow-up. Qual era a sua lógica?", ins: "Tem sistema ou é no feeling? Qual a cadência, qual o gatilho." },
            { q: "Qual foi sua melhor fase de resultado? O que você atribui a isso?", ins: "Consegue replicar ou foi sorte de pipeline? Mentalidade de consistência." },
          ]},
          { t: "nota", text: "Se em algum momento o candidato culpar muito o SDR, o marketing ou o lead pela perda — isso é sinal de alerta de postura. Não aprofunde ali, só registre internamente." },
          { t: "obs", items: [
            { titulo: "Gestão de objeção", desc: "Isola, investiga e converte — ou entra em desconto por impulso?" },
            { titulo: "Respeito ao processo", desc: "Segue metodologia ou sempre constrói do próprio jeito?" },
            { titulo: "Autocrítica", desc: "Sabe onde perdeu ou distribui culpa?" },
            { titulo: "Sistema de follow-up", desc: "Tem cadência e critério ou age no feeling?" },
            { titulo: "Consistência de resultado", desc: "A boa fase foi construída ou foi sorte de pipeline?" },
          ]},
        ]
      },
      {
        titulo: "Postura", sub: "Maturidade e fit cultural · ~12 min",
        blocks: [
          { t: "alerta", text: "Esse é o bloco mais crítico. A regra aqui é nunca perguntar sobre maturidade diretamente — você vai ouvir o que a pessoa acha que você quer ouvir." },
          { t: "group", sec: "Maturidade e fit", qs: [
            { q: "Me conta uma situação em que você discordou do seu gestor ou da empresa sobre como vender. O que você fez?", ins: "Resolve dentro ou cria atrito? Tem postura sem ser rebelde?" },
            { q: "O que você faz quando tá em um mês ruim e a conta não fecha?", ins: "Maturidade financeira + reação à pressão. Entra em espiral ou ativa plano?" },
            { q: "Você já viveu de comissão pura? Como você se organizava?", ins: "Realidade do PJ comissionado. Quem não sobreviveu a mês ruim antes, vai pedir fixo em 60 dias." },
          ]},
          { t: "obs", items: [
            { titulo: "Ownership", desc: "Assume o resultado como seu ou distribui a responsabilidade?" },
            { titulo: "Reação à pressão", desc: "Entra em espiral ou ativa um plano quando o mês aperta?" },
            { titulo: "Maturidade financeira", desc: "Sabe organizar a vida com renda variável?" },
            { titulo: "Fit PJ", desc: "Já sobreviveu a mês ruim de comissão — ou vai pedir fixo em 60 dias?" },
          ]},
        ]
      },
      {
        titulo: "Encerramento", sub: "Inversão do jogo · ~5 min",
        blocks: [
          { t: "nota", text: "Aqui você inverte o papel e observa como o closer age quando está do outro lado. As perguntas que ele faz dizem mais do que as respostas que ele deu." },
          { t: "group", sec: "Perguntas finais obrigatórias", qs: [
            { q: "Antes de eu te contar os próximos passos, você tem alguma pergunta sobre a operação, o produto ou o que a gente espera?", ins: "Pergunta sobre comissão logo? Pergunta sobre processo, produto, time? Closer bom pergunta sobre ticket médio, ciclo de venda, qualidade do lead ou estrutura do time. Closer mediano pergunta sobre salário. Closer ruim não pergunta nada." },
          ]},
          { t: "obs", items: [
            { titulo: "Closer bom", desc: "Pergunta sobre ticket médio, ciclo de venda, qualidade do lead ou estrutura do time." },
            { titulo: "Closer mediano", desc: "Pergunta sobre salário." },
            { titulo: "Closer ruim", desc: "Não pergunta nada." },
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
