import { useState, Fragment } from "react";

const F = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";

const NIVEIS = [
  { id: "junior", label: "Júnior" },
  { id: "pleno", label: "Pleno" },
  { id: "senior", label: "Sênior" },
];

const CARGOS = [
  {
    id: "social", nome: "Social Media", color: "#C026D3", cs: "#E879F9", icon: "📱", usaNivel: true,
    etapas: [
      {
        titulo: "1 · A empresa", sub: "Apresentação da CPV + verificação de interesse · ~8 min",
        blocks: [
          { t: "script", text: '"Bom te ter aqui. A conversa é simples e leva uns 40 minutos, em três partes: primeiro eu te apresento a CPV e entendo o que te trouxe até aqui, depois quero te conhecer de verdade — sua história e seu jeito — e no fim a gente entra na parte técnica de social media. Não existe resposta certa ou errada. Fica à vontade."' },
          { t: "group", sec: "Verificação de interesse — antes de você apresentar a empresa", qs: [
            { q: "Antes de eu te apresentar a CPV, me conta: o que você já sabe sobre o que a gente faz aqui?", ins: "Separa quem pesquisou de quem se candidatou a tudo. Interesse real aparece nos detalhes concretos que a pessoa cita. Chegar sem saber nada é um dado — não elimina sozinho, mas revela o esforço.", fu: "O que te fez querer trabalhar justamente com isso?" },
            { q: "Como você chegou até essa vaga? O que te chamou atenção nela especificamente?", ins: "Quem tem intenção aponta algo específico da vaga ou da empresa. Quem responde no genérico ('tava procurando oportunidade') está no modo aplicar-em-tudo." },
          ]},
          { t: "nota", text: "Agora apresente a CPV com clareza: o que é, o que faz, o momento do negócio e onde social media entra nisso. Enquanto fala, observe — a pessoa conecta o que você diz com o que ela já mencionou? Faz perguntas? Anota? Engajamento aqui é sinal de interesse real." },
          { t: "group", sec: "Fit com o momento", qs: [
            { q: "Depois do que te expliquei, o que mais faz sentido pra você nesse trabalho? E o que te preocupa, ou o que você acha que seria seu maior desafio aqui?", ins: "A parte da preocupação é a mais reveladora: quem responde com honestidade tem autoconsciência; quem diz 'nada, tá tudo perfeito' está performando ou não pensou a sério sobre a vaga." },
          ]},
        ]
      },
      {
        titulo: "2 · A pessoa", sub: "História, trajetória e perfil · ~14 min",
        blocks: [
          { t: "group", sec: "Trajetória", qs: [
            { q: "Me conta sua história — de onde você veio e como foi parar em social media. Não o currículo, o caminho.", ins: "A escolha do que contar primeiro é reveladora. Como a pessoa costura as decisões da vida mostra se tem direção própria ou foi levada pelo acaso.", fu: "Se ficar só no profissional: 'E fora do trabalho, o que te define?'" },
            { q: "Qual experiência profissional mais te formou até hoje? Por quê ela, e não outra?", ins: "Quem aprende extrai lição de experiências específicas. A escolha e o motivo mostram o que a pessoa valoriza — resultado, aprendizado, relação, superação." },
            { q: "Me descreve um trabalho ou projeto do qual você se orgulha de verdade. O que era e qual foi o seu papel exato nele?", ins: '"Papel exato" força a separar o que foi dela do que foi do time. Quem tem contribuição real descreve com precisão; quem surfa em trabalho coletivo fica no "nós fizemos".' },
          ]},
          { t: "group", sec: "Autoconhecimento — qualidades e defeitos", qs: [
            { q: "Se eu ligasse agora pra alguém que trabalhou de perto com você, quais duas forças ela citaria na hora? E qual defeito citaria primeiro?", ins: "Enquadrar pelos olhos do outro derruba a resposta ensaiada de 'meu defeito é ser perfeccionista'. Quem tem autoconsciência responde o defeito sem sofrer; quem trava ou maquia mostra pouca maturidade.", fu: "E você concorda com esse defeito? O que já fez a respeito dele?" },
            { q: "Qual crítica você já recebeu mais de uma vez na vida — de pessoas diferentes?", ins: "Crítica recorrente aponta ponto cego real, não episódio isolado. O valor está no que a pessoa fez com ela: ignorou, racionalizou ou trabalhou de verdade." },
            { q: "Em que tipo de ambiente e rotina você rende o seu melhor — e em qual você murcha?", ins: "Fit de perfil puro. Compare a resposta com a realidade do dia a dia da CPV. Ninguém rende em tudo; quem se conhece sabe onde brilha e onde sofre." },
          ]},
        ]
      },
      {
        titulo: "3 · Técnica", sub: "Competência de social media · ~16 min · adapta ao nível",
        intro: [
          { t: "nota", text: "Selecione o nível da vaga no topo (Júnior / Pleno / Sênior) — as perguntas técnicas abaixo se ajustam. O objetivo aqui é sair da conversa sabendo se a pessoa sabe o ofício, não só se é simpática. Puxe exemplos concretos: 'me dá um caso real', 'que número deu nisso?'." },
        ],
        porNivel: {
          junior: [
            { t: "group", sec: "Fundamentos", qs: [
              { q: "Me explica, do seu jeito, a diferença entre um conteúdo feito pra alcançar gente nova e um feito pra converter quem já te acompanha.", ins: "Testa se entende objetivo de conteúdo e noção de funil — não só 'postar'. Júnior bom já intui isso; quem não distingue vai produzir no escuro." },
              { q: "Você abre o perfil de uma marca que nunca viu. Em 30 segundos, o que você olha pra decidir se o social media dela é bom ou fraco?", ins: "Revela critério estético e estratégico. Quem tem olho aponta consistência, identidade, ganchos, constância. Quem não tem fala 'se tem muitos seguidores'." },
              { q: "Quando um conteúdo seu vai mal, quais são as primeiras coisas que você checa?", ins: "Pensamento diagnóstico. Quem tem método lista hipóteses (gancho, formato, horário, tema). Quem não tem culpa 'o algoritmo'." },
            ]},
            { t: "group", sec: "Cenário prático", qs: [
              { q: "Vou te dar uma marca — [ex: um restaurante local, ou a própria CPV]. Me fala 3 ideias de conteúdo pra esta semana e por que cada uma.", ins: "O teste mais honesto de um júnior: ideação crua na hora. Observe se as ideias têm objetivo e não são só 'um reels bonitinho'. Repertório e raciocínio importam mais que polimento." },
            ]},
            { t: "group", sec: "Ferramentas e repertório", qs: [
              { q: "Que ferramentas você usa no dia a dia — edição, design, agendamento? Como você aprendeu a usar?", ins: "Mapeia o toolkit e, mais importante, se é autodidata. Júnior que aprende sozinho compensa a falta de experiência rápido." },
              { q: "Que criador ou marca faz social media excepcional hoje, na sua opinião? O que exatamente ela faz bem?", ins: "A referência escolhida e a precisão da análise revelam o repertório. 'Gosto de vários' é resposta de quem consome sem estudar." },
            ]},
          ],
          pleno: [
            { t: "group", sec: "Estratégia e processo", qs: [
              { q: "Você assume um perfil estagnado há meses. Como são seus primeiros 30 dias? O que você analisa antes de postar qualquer coisa?", ins: "Plano estruturado vs. sair postando. Pleno bom faz diagnóstico (público, histórico, concorrência, objetivo) antes de produzir." },
              { q: "Me descreve seu processo de planejamento de conteúdo — de onde vem a pauta, como você decide o que produzir.", ins: "Quem tem processo descreve com precisão e repetibilidade. Quem depende de inspiração será vago — e entrega inconsistente." },
              { q: "Quais métricas você acompanha de verdade e quais você ignora? Por quê?", ins: "Separa quem entende métrica de quem olha vaidade. Resposta forte conecta métrica a objetivo (alcance no topo, salvamento/compartilhamento pra relevância, clique/conversa no fundo)." },
            ]},
            { t: "group", sec: "Cenário prático — crítica", qs: [
              { q: "Vou te mostrar (ou descrever) um perfil real. Em 2 minutos: o que está funcionando, o que você mataria e o que faria diferente — nessa ordem de prioridade.", ins: "Olho crítico + priorização. Pleno bom não lista tudo que vê; ele hierarquiza o que dá mais retorno mexer primeiro." },
            ]},
            { t: "group", sec: "Resultado e colaboração", qs: [
              { q: "Já teve um conteúdo que bombou em números mas não trouxe resultado nenhum pro negócio? Como você diferencia os dois?", ins: "Business sense. Quem só celebra viral não amadureceu; quem separa vaidade de resultado pensa como dono." },
              { q: "Como você trabalha com quem edita, desenha ou filma? O que você entrega pra essas pessoas e o que você cobra de volta?", ins: "Colaboração e clareza de processo. Revela se sabe delegar com briefing bom ou se é gargalo/refaz tudo sozinha." },
            ]},
          ],
          senior: [
            { t: "group", sec: "Estratégia e negócio", qs: [
              { q: "Como você conecta a estratégia de social media aos objetivos de negócio da empresa? Me dá um exemplo concreto de quando fez exatamente isso.", ins: "Altitude estratégica. Sênior de verdade fala em objetivo de negócio, não em número de post. Sem exemplo concreto, é sênior de tempo de casa, não de estratégia." },
              { q: "Me conta de uma virada de estratégia que você liderou: o cenário antes, o que você mudou e o resultado — com número.", ins: "Ownership de resultado. O número importa: quem lidera estratégia mede impacto. Ficar vago aqui é red flag para o nível." },
              { q: "Como você define a linha editorial e o posicionamento de uma marca do zero? Você tem um framework?", ins: "Método próprio. Sênior tem um jeito estruturado de fazer, não improvisa caso a caso. Ouça se há repetibilidade no raciocínio." },
            ]},
            { t: "group", sec: "Cenário prático — estratégia aplicada", qs: [
              { q: "A CPV quer crescer [defina a meta: presença, leads, autoridade] nos próximos 6 meses. Me esboça a estratégia de social que você proporia — canais, tipo de conteúdo e como mediria sucesso.", ins: "Pensamento estratégico aplicado à nossa realidade. Observe se faz perguntas antes de responder (sinal de senioridade), se prioriza canais com critério e se define métrica de sucesso desde o começo." },
            ]},
            { t: "group", sec: "Alocação e liderança", qs: [
              { q: "Você tem orçamento limitado e precisa escolher: mais volume de conteúdo, investir num criador/influenciador, ou subir a qualidade da produção. Como você decide?", ins: "Trade-off de alocação. Não existe resposta certa — existe raciocínio. Sênior bom decide a partir do objetivo e do estágio da marca, não por preferência pessoal." },
              { q: "Como você forma e cobra um time de conteúdo? Como você faz alguém júnior evoluir de verdade?", ins: "Liderança e desenvolvimento. Revela se sabe multiplicar resultado através de gente ou se é um executor sênior que só entrega sozinho." },
            ]},
          ],
        },
        fim: [
          { t: "group", sec: "Encerramento — perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não teve oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado": como a pessoa se despede, como trata quem está na recepção. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Sabia o que a CPV faz?", desc: "Interesse real se prova no dever de casa. Quem chegou sem saber nada estava se candidatando a qualquer coisa." },
            { titulo: "Provou competência ou só falou bonito?", desc: "Nos exemplos concretos e no cenário prático é que se vê o ofício. Boa lábia sem caso real é sinal de alerta." },
            { titulo: "Como fala de ex-chefes e colegas", desc: "Culpa generalizada é red flag. Reconhecer o lado do outro mesmo em conflito é maturidade." },
            { titulo: "Como admite erro", desc: "Busca contexto e aprendizado, não desculpa. Quem assume e evolui é quem você quer no time." },
          ]},
        ],
      },
    ]
  },
  {
    id: "designer", nome: "Designer", color: "#0891B2", cs: "#67E8F9", icon: "🎨", usaNivel: true,
    etapas: [
      {
        titulo: "1 · A empresa", sub: "Apresentação da CPV + verificação de interesse · ~8 min",
        blocks: [
          { t: "script", text: '"Bom te ter aqui. A conversa leva uns 40 minutos, em três partes: primeiro eu te apresento a CPV e entendo o que te trouxe até aqui, depois quero te conhecer de verdade — sua história e seu jeito — e no fim a gente entra na parte técnica de design. O portfólio a gente já viu, então aqui o foco é como você pensa. Não existe resposta certa ou errada. Fica à vontade."' },
          { t: "group", sec: "Verificação de interesse — antes de você apresentar a empresa", qs: [
            { q: "Antes de eu te apresentar a CPV, me conta: o que você já sabe sobre o que a gente faz aqui?", ins: "Separa quem pesquisou de quem se candidatou a tudo. Interesse real aparece nos detalhes concretos que a pessoa cita. Chegar sem saber nada é um dado — não elimina sozinho, mas revela o esforço.", fu: "O que te fez querer trabalhar justamente com design nesse tipo de negócio?" },
            { q: "Como você chegou até essa vaga? O que te chamou atenção nela especificamente?", ins: "Quem tem intenção aponta algo específico da vaga ou da empresa. Quem responde no genérico ('tava procurando oportunidade') está no modo aplicar-em-tudo." },
          ]},
          { t: "nota", text: "Agora apresente a CPV com clareza: o que é, o que faz, o momento do negócio e onde design entra nisso — servindo social media, tráfego e o material comercial. Enquanto fala, observe — a pessoa conecta o que você diz com o que ela já mencionou? Faz perguntas? Anota? Engajamento aqui é sinal de interesse real." },
          { t: "group", sec: "Fit com o momento", qs: [
            { q: "Depois do que te expliquei, o que mais faz sentido pra você nesse trabalho? E o que te preocupa, ou o que você acha que seria seu maior desafio aqui?", ins: "A parte da preocupação é a mais reveladora: quem responde com honestidade tem autoconsciência; quem diz 'nada, tá tudo perfeito' está performando ou não pensou a sério sobre a vaga." },
          ]},
        ]
      },
      {
        titulo: "2 · A pessoa", sub: "História, trajetória e perfil · ~14 min",
        blocks: [
          { t: "group", sec: "Trajetória", qs: [
            { q: "Me conta sua história — de onde você veio e como o design entrou na sua vida. Foi escolha ou aconteceu?", ins: "Quem escolheu ativamente tende a ter mais comprometimento e identidade profissional formada. Observe se fala de resolver problemas ou só de fazer coisas bonitas — os dois são válidos, mas dizem coisas diferentes sobre o que vai motivar essa pessoa no dia a dia.", fu: "Se ficar só no profissional: 'E fora do trabalho, o que te define?'" },
            { q: "Qual experiência profissional mais te formou até hoje? Por quê ela, e não outra?", ins: "Quem aprende extrai lição de experiências específicas. A escolha e o motivo mostram o que a pessoa valoriza — resultado, aprendizado, relação, superação." },
            { q: "Me mostra — ou descreve — uma peça do portfólio que representa bem o seu jeito de trabalhar. Por que essa, e qual foi seu papel exato nela?", ins: "\"Papel exato\" força a separar o que foi dela do que foi do time. A escolha diz tanto quanto a explicação: quem escolhe pelo impacto que gerou vale mais do que quem escolhe pela peça mais bonita.", fu: "E uma peça que você não mostraria no portfólio mas que aprendeu muito fazendo?" },
          ]},
          { t: "group", sec: "Autoconhecimento — qualidades e defeitos", qs: [
            { q: "Se eu ligasse agora pra alguém que trabalhou de perto com você, quais duas forças ela citaria na hora? E qual defeito citaria primeiro?", ins: "Enquadrar pelos olhos do outro derruba a resposta ensaiada de 'meu defeito é ser perfeccionista'. Quem tem autoconsciência responde o defeito sem sofrer; quem trava ou maquia mostra pouca maturidade.", fu: "E você concorda com esse defeito? O que já fez a respeito dele?" },
            { q: "Qual crítica você já recebeu mais de uma vez na vida — de pessoas diferentes?", ins: "Crítica recorrente aponta ponto cego real, não episódio isolado. O valor está no que a pessoa fez com ela: ignorou, racionalizou ou trabalhou de verdade." },
            { q: "Em que tipo de ambiente e rotina você rende o seu melhor — e em qual você murcha?", ins: "Fit de perfil puro. Compare a resposta com a realidade do dia a dia da CPV. Ninguém rende em tudo; quem se conhece sabe onde brilha e onde sofre." },
          ]},
        ]
      },
      {
        titulo: "3 · Técnica", sub: "Competência de design · ~16 min · adapta ao nível",
        intro: [
          { t: "nota", text: "Selecione o nível da vaga no topo (Júnior / Pleno / Sênior) — as perguntas técnicas abaixo se ajustam. O portfólio já foi avaliado; o objetivo aqui é entender processo, maturidade e como a pessoa se comporta quando o projeto complica. Puxe exemplos concretos: 'me dá um caso real', 'o que você fez exatamente'." },
          { t: "alerta", text: 'Não exija a peça mais bonita — exija raciocínio coerente e honestidade sobre o que não sabe. Quem diz "não sei, mas eu pensaria assim..." tem mais valor do que quem enrola.' },
        ],
        porNivel: {
          junior: [
            { t: "group", sec: "Fundamentos", qs: [
              { q: "Me descreve como você começa uma peça do zero. O que acontece antes de abrir o Figma?", ins: "Quem tem processo descreve com clareza: leitura do briefing, referência, rascunho. Quem abre o Figma antes de ter clareza do problema vai iterar por tentativa e erro — e gerar retrabalho.", fu: "E quando o briefing chega incompleto — você começa assim mesmo ou pergunta antes?" },
              { q: "Você abre um perfil ou site de uma marca que nunca viu. Em 30 segundos, o que você olha pra decidir se o design dela é bom ou fraco?", ins: "Revela critério estético e de hierarquia visual. Quem tem olho aponta consistência, legibilidade, contraste, identidade. Quem não tem fala só 'gostei' ou 'achei bonito'." },
              { q: "Já recebeu uma crítica ou pedido de alteração que você achou que piorava a peça? O que você fez?", ins: "Testa maturidade com feedback logo na base. Júnior com ego inflado defende a própria visão sem contexto; júnior maduro pergunta o porquê antes de discordar." },
            ]},
            { t: "group", sec: "Cenário prático", qs: [
              { q: "Vou te dar uma marca — [ex: um restaurante local, ou a própria CPV]. Me fala como você pensaria a peça pra redes sociais dela, do briefing ao rascunho.", ins: "O teste mais honesto de um júnior: raciocínio cru na hora. Observe se pensa em objetivo e público antes de estética. Repertório e raciocínio importam mais que polimento." },
            ]},
            { t: "group", sec: "Ferramentas e repertório", qs: [
              { q: "Que ferramentas você usa no dia a dia — Figma, Illustrator, Photoshop? Como você aprendeu a usar?", ins: "Mapeia o toolkit e, mais importante, se é autodidata. Júnior que aprende sozinho compensa a falta de experiência rápido." },
              { q: "Que designer ou marca faz um trabalho excepcional hoje, na sua opinião? O que exatamente ela faz bem?", ins: "A referência escolhida e a precisão da análise revelam o repertório. 'Gosto de vários' é resposta de quem consome sem estudar." },
            ]},
          ],
          pleno: [
            { t: "group", sec: "Processo e autonomia", qs: [
              { q: "Já teve um briefing muito aberto, sem referência nem direção clara? Como você lidou?", ins: "Testa tolerância à ambiguidade. Designer que paralisa diante do vazio depende de briefing perfeito para entregar. Quem cria processo próprio para organizar o vazio tem maturidade criativa." },
              { q: "Já foi responsável por uma peça ou campanha de ponta a ponta — do briefing à entrega final? Me conta como foi.", ins: "Separa quem executou peças de quem pensou o todo. Quem teve ownership real sabe descrever os problemas que apareceram no meio e como resolveu — não só o resultado.", fu: "Teve um momento em que você precisou tomar uma decisão criativa sozinho, sem aprovação? O que fez?" },
              { q: "Como você garante qualidade quando tem muitas entregas ao mesmo tempo?", ins: "Quem tem processo de priorização descreve com precisão. Quem diz 'trabalho mais horas' não tem sistema — tem esforço. E esforço sem sistema não escala." },
            ]},
            { t: "group", sec: "Cenário prático — crítica", qs: [
              { q: "Vou te mostrar (ou descrever) uma peça real. Em 2 minutos: o que está funcionando, o que você mudaria e o que faria diferente — nessa ordem de prioridade.", ins: "Olho crítico + priorização. Pleno bom não lista tudo que vê; ele hierarquiza o que dá mais retorno mexer primeiro." },
            ]},
            { t: "group", sec: "Colaboração e resultado", qs: [
              { q: "Como você apresenta suas ideias para pessoas que não são da área criativa?", ins: "Quem traduz a lógica criativa para negócio — 'fiz assim porque quero que o olho vá para cá, o que aumenta a chance de clicar' — tem habilidade rara. Quem espera que o outro 'entenda o design' vai frustrar sempre." },
              { q: "Já trabalhou lado a lado com social media ou tráfego pra alinhar uma campanha? Como foi?", ins: "Para CPV especificamente, designer não trabalha isolado. Observe se a pessoa entende que o criativo serve o resultado — e não só o portfólio." },
            ]},
          ],
          senior: [
            { t: "group", sec: "Estratégia e sistema", qs: [
              { q: "Como você conecta as decisões de design aos objetivos de negócio da empresa? Me dá um exemplo concreto de quando fez exatamente isso.", ins: "Altitude estratégica. Sênior de verdade fala em objetivo de negócio, não em peça bonita. Sem exemplo concreto, é sênior de tempo de casa, não de estratégia." },
              { q: "Me conta de uma vez em que você estruturou ou reformulou uma identidade visual do zero. Qual era o cenário, o que você definiu e qual foi o resultado — com número, se tiver.", ins: "Ownership de resultado. O número importa quando existe: quem lidera estratégia mede impacto. Ficar vago aqui é red flag para o nível." },
              { q: "Você tem um framework ou processo próprio pra manter consistência visual quando várias pessoas produzem peças ao mesmo tempo?", ins: "Método próprio e pensamento de sistema. Sênior tem um jeito estruturado (guidelines, design system, revisão), não improvisa caso a caso." },
            ]},
            { t: "group", sec: "Cenário prático — estratégia aplicada", qs: [
              { q: "A CPV quer elevar o padrão visual de tudo que produz nos próximos 6 meses — social, comercial, apresentações. Me esboça como você estruturaria isso: prioridades, processo e como mediria se funcionou.", ins: "Pensamento estratégico aplicado à nossa realidade. Observe se faz perguntas antes de responder (sinal de senioridade), se prioriza com critério e se define o que significa 'funcionou' desde o começo." },
            ]},
            { t: "group", sec: "Alocação e liderança", qs: [
              { q: "Você tem tempo limitado e precisa escolher: mais volume de peças, subir a qualidade da produção, ou investir em construir um design system. Como você decide?", ins: "Trade-off de alocação. Não existe resposta certa — existe raciocínio. Sênior bom decide a partir do objetivo e do estágio da marca, não por preferência pessoal." },
              { q: "Como você forma e dá feedback pra um designer júnior? Como você faz alguém evoluir de verdade?", ins: "Liderança e desenvolvimento. Revela se sabe multiplicar resultado através de gente ou se é um executor sênior que só entrega sozinho." },
            ]},
          ],
        },
        fim: [
          { t: "group", sec: "Encerramento — perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não teve oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado": como a pessoa se despede, como trata quem está na recepção. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Como ela fala do próprio trabalho", desc: "Orgulho excessivo sem autocrítica é sinal de alerta. Quem aponta o que melhoraria numa peça própria revela maturidade." },
            { titulo: "Provou processo ou só falou bonito?", desc: "No cenário prático é que se vê o ofício. Boa lábia sem raciocínio concreto é sinal de alerta." },
            { titulo: "Como ela reage à palavra 'revisão'", desc: "Observe o tom. Quem tensa ao ouvir revisão vai criar atrito. Quem entende revisão como parte do processo tem maturidade." },
            { titulo: "Como admite erro", desc: "Busca contexto e aprendizado, não desculpa. Quem assume e evolui é quem você quer no time." },
          ]},
        ],
      },
    ]
  },
  {
    id: "trafego", nome: "Gest. Tráfego", color: "#059669", cs: "#6EE7B7", icon: "📡", usaNivel: true,
    etapas: [
      {
        titulo: "1 · A empresa", sub: "Apresentação da CPV + verificação de interesse · ~8 min",
        blocks: [
          { t: "script", text: '"Bom te ter aqui. A conversa leva uns 40 minutos, em três partes: primeiro eu te apresento a CPV e entendo o que te trouxe até aqui, depois quero te conhecer de verdade — sua história e seu jeito — e no fim a gente entra na parte técnica de tráfego. Não existe resposta certa ou errada. Fica à vontade."' },
          { t: "group", sec: "Verificação de interesse — antes de você apresentar a empresa", qs: [
            { q: "Antes de eu te apresentar a CPV, me conta: o que você já sabe sobre o que a gente faz aqui?", ins: "Separa quem pesquisou de quem se candidatou a tudo. Interesse real aparece nos detalhes concretos que a pessoa cita. Chegar sem saber nada é um dado — não elimina sozinho, mas revela o esforço.", fu: "O que te fez querer trabalhar justamente com isso?" },
            { q: "Como você chegou até essa vaga? O que te chamou atenção nela especificamente?", ins: "Quem tem intenção aponta algo específico da vaga ou da empresa. Quem responde no genérico ('tava procurando oportunidade') está no modo aplicar-em-tudo." },
          ]},
          { t: "nota", text: "Agora apresente a CPV com clareza: o que é, o que faz, o momento do negócio e onde tráfego pago entra nisso. Enquanto fala, observe — a pessoa conecta o que você diz com o que ela já mencionou? Faz perguntas? Anota? Engajamento aqui é sinal de interesse real." },
          { t: "group", sec: "Fit com o momento", qs: [
            { q: "Depois do que te expliquei, o que mais faz sentido pra você nesse trabalho? E o que te preocupa, ou o que você acha que seria seu maior desafio aqui?", ins: "A parte da preocupação é a mais reveladora: quem responde com honestidade tem autoconsciência; quem diz 'nada, tá tudo perfeito' está performando ou não pensou a sério sobre a vaga." },
          ]},
        ]
      },
      {
        titulo: "2 · A pessoa", sub: "História, trajetória e perfil · ~14 min",
        blocks: [
          { t: "group", sec: "Trajetória", qs: [
            { q: "Me conta sua história — de onde você veio e como o tráfego entrou na sua vida. Foi escolha ou aconteceu?", ins: "Quem escolheu ativamente tende a ter mais comprometimento. Observe se criou identidade com a área ou ainda está passando por ela.", fu: "Se ficar só no profissional: 'E fora do trabalho, o que te define?'" },
            { q: "Qual experiência profissional mais te formou até hoje? Por quê ela, e não outra?", ins: "Quem aprende extrai lição de experiências específicas. A escolha e o motivo mostram o que a pessoa valoriza — resultado, aprendizado, relação, superação." },
            { q: "Me descreve uma campanha ou conta da qual você se orgulha de verdade. Qual era o cenário e qual foi o seu papel exato nela?", ins: '"Papel exato" força a separar o que foi dela do que foi do time. Quem tem contribuição real descreve com precisão; quem surfa em trabalho coletivo fica no "nós fizemos".' },
          ]},
          { t: "group", sec: "Autoconhecimento — qualidades e defeitos", qs: [
            { q: "Se eu ligasse agora pra alguém que trabalhou de perto com você, quais duas forças ela citaria na hora? E qual defeito citaria primeiro?", ins: "Enquadrar pelos olhos do outro derruba a resposta ensaiada de 'meu defeito é ser perfeccionista'. Quem tem autoconsciência responde o defeito sem sofrer; quem trava ou maquia mostra pouca maturidade.", fu: "E você concorda com esse defeito? O que já fez a respeito dele?" },
            { q: "Qual crítica você já recebeu mais de uma vez na vida — de pessoas diferentes?", ins: "Crítica recorrente aponta ponto cego real, não episódio isolado. O valor está no que a pessoa fez com ela: ignorou, racionalizou ou trabalhou de verdade." },
            { q: "Em que tipo de ambiente e rotina você rende o seu melhor — e em qual você murcha?", ins: "Fit de perfil puro. Compare a resposta com a realidade do dia a dia da CPV. Ninguém rende em tudo; quem se conhece sabe onde brilha e onde sofre." },
          ]},
        ]
      },
      {
        titulo: "3 · Técnica", sub: "Competência de tráfego · ~16 min · adapta ao nível",
        intro: [
          { t: "nota", text: "Selecione o nível da vaga no topo (Júnior / Pleno / Sênior) — as perguntas técnicas abaixo se ajustam. O objetivo é sair da conversa sabendo se a pessoa sabe o ofício, não só se é simpática. Puxe exemplos concretos: 'me dá um caso real', 'que número deu nisso?'." },
          { t: "alerta", text: 'Não exija excelência — exija raciocínio coerente e honestidade sobre o que não sabe. Quem diz "não sei, mas raciocino assim..." tem mais valor do que quem inventa.' },
        ],
        porNivel: {
          junior: [
            { t: "group", sec: "Fundamentos", qs: [
              { q: "Como você estrutura uma campanha do zero — do objetivo até a segmentação? Me leva pelo seu raciocínio.", ins: '"Me leva pelo raciocínio" é intencional. Você quer entender como pensa, não só se decorou o passo a passo do gerenciador.' },
              { q: "Me explica, do seu jeito, o que significam CPM, CTR, CPC e CPA — e qual deles diz mais sobre um problema no criativo.", ins: "Testa se domina o básico e sabe ligar métrica a causa. Júnior bom liga CTR baixo a criativo/segmentação; quem decora definição sem conectar vai otimizar no escuro." },
              { q: "Quando você decide pausar um anúncio? Qual é seu critério?", ins: "Critério objetivo vs. feeling. Mesmo júnior, quem já tem uma regra clara (volume mínimo, janela de tempo) é mais confiável que quem decide por instinto." },
            ]},
            { t: "group", sec: "Cenário prático", qs: [
              { q: "Um cliente [ex: um e-commerce local] te dá R$ 3.000 pra rodar no mês com objetivo de vendas. Como você montaria as campanhas? Me leva pela estrutura.", ins: "Ideação estruturada na hora. Observe se define objetivo, público e criativo com coerência — e se reserva verba pra teste. Raciocínio importa mais que a resposta 'certa'." },
            ]},
            { t: "group", sec: "Ferramentas e aprendizado", qs: [
              { q: "Qual atualização de plataforma mudou mais como você trabalha? Como você lidou?", ins: "Quem não cita nada específico reage às mudanças quando já chegam no trabalho, em vez de se antecipar." },
              { q: "Já testou algo numa campanha por curiosidade — fora do combinado — e aprendeu com isso?", ins: "Mentalidade de experimentação. Gestor que só executa o combinado nunca encontra o que funciona de verdade." },
            ]},
          ],
          pleno: [
            { t: "group", sec: "Diagnóstico e otimização", qs: [
              { q: "Uma conta que ia bem começa a piorar: o CPA subiu nas últimas duas semanas. Me leva pelo seu diagnóstico — o que você olha, e em que ordem?", ins: "Pensamento diagnóstico estruturado. Pleno bom separa criativo (fadiga), público (saturação), leilão (concorrência) e conversão (página/oferta). Quem só 'troca o criativo' não investiga a causa." },
              { q: "Como você decide alocar verba entre campanhas? O que faz você mover budget de uma pra outra?", ins: "Revela critério de otimização. Resposta forte fala em eficiência por objetivo e janela de aprendizado, não em 'a que tá gastando menos'." },
              { q: "Quais métricas você acompanha de verdade no dia a dia e quais você ignora? Por quê?", ins: "Separa quem entende métrica de quem olha vaidade. Resposta forte conecta métrica a etapa do funil e a objetivo de negócio (CPA/ROAS), não a impressão/curtida." },
            ]},
            { t: "group", sec: "Cenário prático — vendas x tráfego", qs: [
              { q: "O time de vendas te diz que os leads que você trouxe não estão fechando. O que você faz nas próximas 48 horas?", ins: "Quem defende o próprio trabalho antes de investigar tem ego. Pleno bom vai pro diagnóstico conjunto: olha segmentação, oferta, qualificação e alinha o que é MQL com vendas — sem terceirizar a culpa." },
            ]},
            { t: "group", sec: "Criativo e funil", qs: [
              { q: "Você já pediu mudança em copy ou criativo com base em dados? O que observou e o que pediu, exatamente?", ins: '"Exatamente" força resposta real. Quem conecta dado (CTR, hook rate, retenção) a um pedido concreto pro design tem uma habilidade rara e valiosa.' },
              { q: "Qual a diferença real entre um lead e um MQL? Como você garante que o tráfego está trazendo o segundo?", ins: "Quem não articula isso está focado em volume, não qualidade. Gestor que pensa em MQL pensa junto com vendas." },
            ]},
          ],
          senior: [
            { t: "group", sec: "Estratégia e negócio", qs: [
              { q: "Como você conecta a estratégia de mídia aos números de negócio — CAC, LTV, margem? Me dá um exemplo concreto de quando uma decisão sua de tráfego mexeu num desses.", ins: "Altitude estratégica. Sênior de verdade fala a língua do negócio, não só do gerenciador. Sem exemplo concreto, é sênior de tempo de casa, não de estratégia." },
              { q: "Me conta de uma conta que você escalou mantendo eficiência: qual era o gargalo, o que você mudou e o resultado — com número.", ins: "Escalar sem estourar CPA é o que separa operador de estrategista. O número importa: quem lidera resultado mede impacto. Ficar vago aqui é red flag para o nível." },
              { q: "Como você estrutura contas e estratégia de mídia para um cliente do zero? Você tem um framework?", ins: "Método próprio. Sênior tem um jeito estruturado (topo/meio/fundo, teste vs. escala, estrutura de campanhas), não improvisa caso a caso." },
            ]},
            { t: "group", sec: "Cenário prático — estratégia aplicada", qs: [
              { q: "A CPV tem [defina a verba] por mês e quer crescer [leads qualificados / faturamento] em 6 meses. Como você estruturaria a operação de tráfego — canais, divisão de verba e como mediria sucesso?", ins: "Pensamento estratégico aplicado à nossa realidade. Observe se faz perguntas antes de responder (sinal de senioridade), se divide verba entre teste e escala com critério e se define métrica de sucesso desde o começo." },
            ]},
            { t: "group", sec: "Alocação e liderança", qs: [
              { q: "Você precisa escolher: concentrar verba no canal que já performa, abrir um canal novo, ou investir em produção de criativo. Como você decide?", ins: "Trade-off de alocação. Não existe resposta certa — existe raciocínio. Sênior bom decide a partir do objetivo e do estágio do negócio, não por preferência pessoal." },
              { q: "Como você forma e cobra um time de tráfego? Como você faz um gestor júnior evoluir de verdade — e como você alinha isso com vendas?", ins: "Liderança e desenvolvimento. Revela se sabe multiplicar resultado através de gente e integrar mídia com o funil comercial, ou se é um executor sênior que só entrega sozinho." },
            ]},
          ],
        },
        fim: [
          { t: "group", sec: "Encerramento — perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não teve oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado": como a pessoa se despede, como trata quem está na recepção. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Sabia o que a CPV faz?", desc: "Interesse real se prova no dever de casa. Quem chegou sem saber nada estava se candidatando a qualquer coisa." },
            { titulo: "Provou competência ou só falou bonito?", desc: "Nos exemplos concretos e no cenário prático é que se vê o ofício. Boa lábia sem caso real e sem número é sinal de alerta." },
            { titulo: "Como fala de ex-chefes, clientes e vendas", desc: "Culpa generalizada é red flag. Reconhecer o lado do outro mesmo em conflito é maturidade." },
            { titulo: "Como admite erro", desc: "Busca contexto e aprendizado, não desculpa. Quem assume e evolui é quem você quer no time." },
          ]},
        ],
      },
    ]
  },
  {
    id: "sdr", nome: "SDR", color: "#7C3AED", cs: "#A78BFA", icon: "📞", usaNivel: true,
    etapas: [
      {
        titulo: "1 · A empresa", sub: "Apresentação da CPV + verificação de interesse · ~8 min",
        blocks: [
          { t: "script", text: '"Bom te ter aqui. A conversa leva uns 40 minutos, em três partes: primeiro eu te apresento a CPV e entendo o que te trouxe até aqui, depois quero te conhecer de verdade — sua história e seu jeito — e no fim a gente entra na parte técnica de qualificação de leads. Não existe resposta certa ou errada. Fica à vontade."' },
          { t: "group", sec: "Verificação de interesse — antes de você apresentar a empresa", qs: [
            { q: "Antes de eu te apresentar a CPV, me conta: o que você já sabe sobre o que a gente faz aqui?", ins: "Separa quem pesquisou de quem se candidatou a tudo. Interesse real aparece nos detalhes concretos que a pessoa cita. Chegar sem saber nada é um dado — não elimina sozinho, mas revela o esforço.", fu: "O que te fez querer trabalhar justamente com vendas/qualificação?" },
            { q: "Como você chegou até essa vaga? O que te chamou atenção nela especificamente?", ins: "Quem tem intenção aponta algo específico da vaga ou da empresa. Quem responde no genérico ('tava procurando oportunidade') está no modo aplicar-em-tudo." },
          ]},
          { t: "nota", text: "Agora apresente a CPV com clareza: o que é, o que faz, o momento do negócio e onde o SDR entra no funil — recebendo o lead inbound e entregando pro closer. Enquanto fala, observe — a pessoa conecta o que você diz com o que ela já mencionou? Faz perguntas? Anota? Engajamento aqui é sinal de interesse real." },
          { t: "group", sec: "Fit com o momento", qs: [
            { q: "Depois do que te expliquei, o que mais faz sentido pra você nesse trabalho? E o que te preocupa, ou o que você acha que seria seu maior desafio aqui?", ins: "A parte da preocupação é a mais reveladora: quem responde com honestidade tem autoconsciência; quem diz 'nada, tá tudo perfeito' está performando ou não pensou a sério sobre a vaga." },
          ]},
        ]
      },
      {
        titulo: "2 · A pessoa", sub: "História, trajetória e perfil · ~14 min",
        blocks: [
          { t: "group", sec: "Trajetória", qs: [
            { q: "Me conta sua história — de onde você veio e como as vendas entraram na sua vida. Foi escolha ou aconteceu?", ins: "Quem escolheu ativamente tende a ter mais comprometimento. Observe se criou identidade com a área ou ainda está passando por ela.", fu: 'Se ficar só no profissional: "E fora do trabalho, o que te define?"' },
            { q: "Qual experiência profissional mais te formou até hoje? Por quê ela, e não outra?", ins: "Quem aprende extrai lição de experiências específicas. A escolha e o motivo mostram o que a pessoa valoriza — resultado, aprendizado, relação, superação." },
            { q: "Me conta um momento em que você estava atrás da meta e virou o jogo — ou chegou perto o suficiente para se orgulhar. O que fez diferente?", ins: "Não é sobre ter virado sempre. É sobre o que a pessoa fez quando estava em desvantagem. Quem improvisa, busca ajuda e muda abordagem tem o comportamento certo." },
          ]},
          { t: "group", sec: "Autoconhecimento — qualidades e defeitos", qs: [
            { q: "Se eu ligasse agora pra alguém que trabalhou de perto com você, quais duas forças ela citaria na hora? E qual defeito citaria primeiro?", ins: "Enquadrar pelos olhos do outro derruba a resposta ensaiada de 'meu defeito é ser perfeccionista'. Quem tem autoconsciência responde o defeito sem sofrer; quem trava ou maquia mostra pouca maturidade.", fu: "E você concorda com esse defeito? O que já fez a respeito dele?" },
            { q: "Me descreve a semana mais difícil que você teve em vendas. O que estava acontecendo, e o que você fez na segunda-feira seguinte?", ins: "Não busca quem nunca quebrou — busca quem quebrou e voltou. Honestidade sobre como o emocional foi afetado vale mais do que 'nada me abala'. O que importa é o que a pessoa fez depois." },
            { q: "Em que tipo de ambiente e rotina você rende o seu melhor — e em qual você murcha?", ins: "Fit de perfil puro. Compare a resposta com a realidade do dia a dia da CPV. Ninguém rende em tudo; quem se conhece sabe onde brilha e onde sofre." },
          ]},
        ]
      },
      {
        titulo: "3 · Técnica", sub: "Competência de qualificação · ~16 min · adapta ao nível",
        intro: [
          { t: "nota", text: "Selecione o nível da vaga no topo (Júnior / Pleno / Sênior) — as perguntas técnicas abaixo se ajustam. Você está procurando SDR Inbound com vontade de vencer — isso não aparece no currículo, aparece em como a pessoa fala de meta, de rejeição, de número." },
          { t: "alerta", text: "SDR Inbound lida com leads que já demonstraram interesse. O erro mais comum não é a abordagem — é deixar o lead esfriar, avançar quem não tem perfil ou entregar lead mal qualificado para o closer." },
          { t: "group", sec: "Vontade de vencer — motor interno", qs: [
            { q: "Você acompanha suas próprias métricas — taxa de conexão, conversão, velocidade de primeiro contato? Me fala seus números.", ins: "Quem tem vontade de vencer conhece os próprios números de cabeça. Não precisa ser exato — o que revela é se a pessoa rastreia ou não. Executor passivo não acompanha.", fu: "Qual desses números você mais quer melhorar agora? Por quê?" },
            { q: "Você é competitivo? Me dá um exemplo — pode ser fora do trabalho.", ins: "Competitividade saudável não é ego. É querer se superar. Quem não consegue dar nenhum exemplo provavelmente não tem esse drive. Observe: a competição é contra si mesmo ou sempre contra o outro?" },
          ]},
        ],
        porNivel: {
          junior: [
            { t: "group", sec: "Fundamentos de qualificação", qs: [
              { q: "Um lead entrou pelo site agora. Quanto tempo você tem para fazer o primeiro contato? Por quê?", ins: "Não existe resposta exata, mas quem responde com urgência ('minutos', 'o mais rápido possível') entende que inbound esfria rápido. Quem diz 'quando possível' não entende a janela de oportunidade.", fu: "E se for final de tarde, quase fora do horário comercial — o que você faz?" },
              { q: "Como você decide se um lead vale avançar? Me descreve as perguntas básicas que você faz.", ins: "Testa se entende que qualificar é mais que 'confirmar interesse'. Júnior bom já pergunta por perfil e urgência; quem só confirma que a pessoa 'quer saber mais' vai empurrar lead ruim pro closer." },
              { q: "Quando uma ligação ou mensagem não é respondida, o que você faz depois?", ins: "Revela se tem cadência mínima de follow-up ou desiste no primeiro não-atendimento. Quem só tenta uma vez perde lead que só precisava de outro horário." },
            ]},
            { t: "group", sec: "Cenário prático", qs: [
              { q: "Vamos simular: eu sou um lead que acabou de preencher o formulário do site. Me liga agora — como você abriria essa conversa?", ins: "O teste mais honesto de um júnior: abertura na hora, sem decorar. Observe se personaliza com o que o lead preencheu ou usa script genérico de vendedor." },
            ]},
            { t: "group", sec: "Ferramentas e organização", qs: [
              { q: "Como você registra e organiza seus leads no dia a dia? Já usou algum CRM?", ins: "Mapeia o toolkit e a disciplina de registro. Júnior que documenta tudo, mesmo sem CRM sofisticado, escala rápido; quem confia na memória perde lead." },
            ]},
          ],
          pleno: [
            { t: "group", sec: "Qualificação e critério", qs: [
              { q: "Como você decide em menos de 5 minutos de conversa se um lead vale avançar? Me descreve as perguntas que você faz.", ins: "Quem qualifica com critério claro — perfil, urgência, autoridade, orçamento — pensa estrategicamente. Quem avança qualquer lead 'para o closer decidir' está terceirizando o trabalho." },
              { q: "Já recebeu um lead muito interessado mas que claramente não tinha perfil. O que fez?", ins: "Disqualificação é uma habilidade. Quem não consegue encerrar gentilmente perde tempo e prejudica o closer. Quem sabe dizer 'não agora' com clareza e sem constranger é valioso." },
              { q: "Como você passa um lead qualificado para o closer? Me descreve o que você entrega — além do nome e telefone.", ins: "SDR que entrega lead como número prejudica o time. Quem pensa no que o closer precisa saber — contexto, dor, urgência, o que foi dito — está pensando em resultado." },
            ]},
            { t: "group", sec: "Cenário prático — alinhamento com vendas", qs: [
              { q: "O closer te diz que os leads que você passou nas últimas semanas não estão fechando. O que você faz nas próximas 48 horas?", ins: "Quem defende o próprio trabalho antes de investigar tem ego. Pleno bom vai pro diagnóstico conjunto: revê critério de qualificação, escuta o closer e ajusta — sem terceirizar a culpa." },
            ]},
            { t: "group", sec: "Resiliência tática", qs: [
              { q: "Quando uma abordagem não está convertendo, quanto tempo você leva para mudar? Me conta um exemplo real.", ins: "SDR que não itera fica preso no mesmo script. Quem testa, mede e ajusta rápido tem o ciclo que gera evolução. Quem espera o gestor dizer que não está funcionando é reativo." },
              { q: "O que você mudou na sua abordagem nos últimos dois meses? O que levou a essa mudança?", ins: '"Dois meses" força resposta recente e real. Quem estuda e aplica responde sem hesitar. Quem é vago ou não lembra nada aprende por acidente, não por intenção.' },
            ]},
          ],
          senior: [
            { t: "group", sec: "Estratégia e playbook", qs: [
              { q: "Como você conecta as métricas de SDR ao pipeline e à receita? Me dá um exemplo concreto de quando uma mudança sua no processo de qualificação mexeu num desses números.", ins: "Altitude estratégica. Sênior de verdade fala a língua do negócio, não só de ligação feita. Sem exemplo concreto, é sênior de tempo de casa, não de estratégia." },
              { q: "Me conta de uma vez em que você reformulou o processo ou o playbook de qualificação: qual era o problema, o que você mudou e o resultado — com número.", ins: "Ownership de resultado. O número importa: quem lidera processo mede impacto. Ficar vago aqui é red flag para o nível." },
              { q: "Você tem um framework próprio pra priorizar e qualificar leads quando o volume é alto?", ins: "Método próprio. Sênior tem um jeito estruturado de decidir o que atacar primeiro, não improvisa caso a caso." },
            ]},
            { t: "group", sec: "Cenário prático — estratégia aplicada", qs: [
              { q: "A CPV quer dobrar o volume de leads inbound nos próximos 6 meses sem perder qualidade de qualificação. Como você estruturaria a operação de SDR — processo, critério e como mediria sucesso?", ins: "Pensamento estratégico aplicado à nossa realidade. Observe se faz perguntas antes de responder (sinal de senioridade), se define critério de qualidade além de volume e se define métrica de sucesso desde o começo." },
            ]},
            { t: "group", sec: "Liderança e mentoria", qs: [
              { q: "Como você forma e cobra um time de SDR? Como você faz alguém júnior evoluir de verdade?", ins: "Liderança e desenvolvimento. Revela se sabe multiplicar resultado através de gente ou se é um executor sênior que só entrega sozinho." },
              { q: "Como você se alinha com marketing pra melhorar a qualidade do lead já na origem, antes dele chegar até o SDR?", ins: "Visão de funil completo. Sênior bom não trata o problema só no seu pedaço — influencia a qualidade rio acima." },
            ]},
          ],
        },
        fim: [
          { t: "group", sec: "Encerramento — perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não teve oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado". Como a pessoa se despede. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Ela fala dos próprios números com naturalidade?", desc: "SDR com vontade de vencer conhece suas métricas. Quem não sabe é executor passivo." },
            { titulo: "Como ela fala de metas que não bateu", desc: "Culpa o contexto antes de se incluir? Ou assume o que foi seu? Ownership aparece nessas histórias." },
            { titulo: "Ela demonstra curiosidade sobre o produto e o cliente?", desc: "SDR Inbound que não entende o que vende não qualifica bem. Interesse genuíno no problema do prospect é o diferencial." },
            { titulo: "Como fala de gestores ou metas anteriores", desc: "Culpa generalizada é red flag. Reconhecer o próprio papel mesmo quando o resultado foi ruim é maturidade." },
          ]},
        ],
      },
    ]
  },
  {
    id: "closer", nome: "Closer", color: "#DC2626", cs: "#FCA5A5", icon: "🎯", usaNivel: true,
    etapas: [
      {
        titulo: "1 · A empresa", sub: "Apresentação da CPV + verificação de interesse · ~8 min",
        blocks: [
          { t: "script", text: '"Bom te ter aqui. A conversa leva uns 40 minutos, em três partes: primeiro eu te apresento a CPV e entendo o que te trouxe até aqui, depois quero te conhecer de verdade — sua história e seu jeito — e no fim a gente entra na parte técnica de vendas. Não existe resposta certa ou errada. Fica à vontade."' },
          { t: "group", sec: "Verificação de interesse — antes de você apresentar a empresa", qs: [
            { q: "Antes de eu te apresentar a CPV, me conta: o que você já sabe sobre o que a gente faz aqui?", ins: "Separa quem pesquisou de quem se candidatou a tudo. Interesse real aparece nos detalhes concretos que a pessoa cita. Chegar sem saber nada é um dado — não elimina sozinho, mas revela o esforço.", fu: "O que te fez topar essa conversa? O que você tá buscando de diferente?" },
            { q: "Como você chegou até essa vaga? O que te chamou atenção nela especificamente?", ins: "Quem tem intenção aponta algo específico da vaga ou da empresa. Quem responde no genérico ('tava procurando oportunidade') está no modo aplicar-em-tudo." },
          ]},
          { t: "nota", text: "Agora apresente a CPV com clareza: o que é, o que faz, o momento do negócio, o produto/ticket e onde o closer entra — recebendo o lead qualificado pelo SDR e fechando. Enquanto fala, observe — a pessoa conecta o que você diz com o que ela já mencionou? Faz perguntas? Anota?" },
          { t: "group", sec: "Fit com o momento", qs: [
            { q: "Depois do que te expliquei, o que mais faz sentido pra você nesse trabalho? E o que te preocupa, ou o que você acha que seria seu maior desafio aqui?", ins: "A parte da preocupação é a mais reveladora: quem responde com honestidade tem autoconsciência; quem diz 'nada, tá tudo perfeito' está performando ou não pensou a sério sobre a vaga." },
          ]},
        ]
      },
      {
        titulo: "2 · A pessoa", sub: "História e contexto de vida · ~14 min",
        blocks: [
          { t: "nota", text: "O objetivo aqui é deixar a pessoa contar a própria história no ritmo dela. Família, origem, responsabilidades e contexto de vida surgem naturalmente — sem necessidade de perguntar diretamente." },
          { t: "group", sec: "Trajetória", qs: [
            { q: "Me conta um pouco da sua história — de onde você veio, como chegou até onde tá hoje.", ins: "O que a pessoa escolhe contar primeiro revela o que é prioridade pra ela. Família, cidade, trajetória — tudo vem voluntariamente." },
            { q: "Qual experiência profissional mais te formou até hoje? Por quê ela, e não outra?", ins: "Quem aprende extrai lição de experiências específicas. A escolha e o motivo mostram o que a pessoa valoriza — resultado, aprendizado, relação, superação." },
          ]},
          { t: "nota", text: "Não pergunte diretamente sobre idade, estado civil ou filhos — além de ser vedado pela CLT, é desnecessário. Quem tem família geralmente menciona ao falar de contexto de vida ou motivação financeira. O que a pessoa escolhe contar voluntariamente é dado muito mais rico do que o que ela responderia por obrigação." },
          { t: "group", sec: "Maturidade financeira e fit PJ", qs: [
            { q: "O que você faz quando tá em um mês ruim e a conta não fecha?", ins: "Maturidade financeira + reação à pressão. Entra em espiral ou ativa plano?" },
            { q: "Você já viveu de comissão pura? Como você se organizava?", ins: "Realidade do PJ comissionado. Quem não sobreviveu a mês ruim antes, vai pedir fixo em 60 dias." },
          ]},
          { t: "obs", items: [
            { titulo: "Clareza de fala", desc: "Como a pessoa se expressa e organiza o raciocínio." },
            { titulo: "Motivação de entrada", desc: "O que realmente a trouxe até aqui — financeiro, crescimento, fuga, ambição." },
            { titulo: "Presença e postura", desc: "Como ela se apresenta quando não está em modo defesa." },
            { titulo: "Autoconsciência", desc: "Ela sabe o que quer e por quê?" },
          ]},
        ]
      },
      {
        titulo: "3 · Técnica", sub: "Processo, objeção e resultado · ~20 min · adapta ao nível",
        intro: [
          { t: "nota", text: "Selecione o nível da vaga no topo (Júnior / Pleno / Sênior) — as perguntas técnicas abaixo se ajustam." },
          { t: "alerta", text: "As perguntas parecem conversa, mas cada uma tem um critério de avaliação interno específico. Não entregue o critério — só faça a pergunta e escute. A regra vale também pra maturidade: nunca pergunte sobre ela diretamente, ou você vai ouvir o que a pessoa acha que você quer ouvir." },
          { t: "group", sec: "Postura sob pressão", qs: [
            { q: "Me conta uma situação em que você discordou do seu gestor ou da empresa sobre como vender. O que você fez?", ins: "Resolve dentro ou cria atrito? Tem postura sem ser rebelde?" },
          ]},
        ],
        porNivel: {
          junior: [
            { t: "group", sec: "Fundamentos de processo", qs: [
              { q: "Quando o lead traz preço como objeção, qual é o seu primeiro movimento?", ins: "Isola a objeção ou já começa a dar desconto? Processo vs. impulso — mesmo júnior, quem tem uma regra clara é mais confiável que quem decide por instinto." },
              { q: "Você já trabalhou com metodologia de vendas definida pela empresa, ou sempre vendeu do seu jeito?", ins: "Aderência a processo. Júnior que segue estrutura aprende mais rápido do que quem quer reinventar a roda desde o início." },
              { q: "Me conta como você faz o follow-up depois de uma conversa que não fechou na hora.", ins: "Tem sistema ou é no feeling? Mesmo básico, uma cadência clara vale mais que 'eu mando mensagem de vez em quando'." },
            ]},
            { t: "group", sec: "Cenário prático", qs: [
              { q: "Vamos simular: eu sou um lead que gostou da proposta mas disse 'preciso pensar'. Me responde agora — o que você diria?", ins: "O teste mais honesto de um júnior: reação na hora, sem decorar. Observe se investiga a real objeção por trás do 'preciso pensar' ou já parte pra pressão/desconto." },
            ]},
          ],
          pleno: [
            { t: "group", sec: "Processo e método", qs: [
              { q: "Me conta uma venda que você perdeu. E me fala onde você acha que perdeu.", ins: "Autocrítica real vs. culpa externa. Closer bom sabe exatamente onde escorregou." },
              { q: "Me conta como você conduzia o follow-up. Qual era a sua lógica?", ins: "Tem sistema ou é no feeling? Qual a cadência, qual o gatilho." },
              { q: "Qual foi sua melhor fase de resultado? O que você atribui a isso?", ins: "Consegue replicar ou foi sorte de pipeline? Mentalidade de consistência." },
            ]},
            { t: "nota", text: "Se em algum momento o candidato culpar muito o SDR, o marketing ou o lead pela perda — isso é sinal de alerta de postura. Não aprofunde ali, só registre internamente." },
            { t: "obs", items: [
              { titulo: "Gestão de objeção", desc: "Isola, investiga e converte — ou entra em desconto por impulso?" },
              { titulo: "Respeito ao processo", desc: "Segue metodologia ou sempre constrói do próprio jeito?" },
              { titulo: "Sistema de follow-up", desc: "Tem cadência e critério ou age no feeling?" },
            ]},
          ],
          senior: [
            { t: "group", sec: "Estratégia e consistência de resultado", qs: [
              { q: "Me conta de uma fase em que você liderou ou fez o número do time subir de forma consistente. O que mudou e qual foi o resultado — com número?", ins: "Ownership de resultado em escala. O número importa: quem lidera resultado mede impacto. Ficar vago aqui é red flag para o nível." },
              { q: "Como você constrói ou refina uma metodologia de vendas pra um time inteiro, e não só pra você mesmo?", ins: "Método próprio e pensamento de sistema. Sênior tem um jeito estruturado de transmitir o que funciona, não guarda o talento só pra si." },
              { q: "Como você decide quando desconto é estratégia e quando é fraqueza?", ins: "Critério de negociação em altitude. Sênior de verdade fala em margem e posicionamento, não só em 'fechar de qualquer jeito'." },
            ]},
            { t: "group", sec: "Cenário prático — estratégia aplicada", qs: [
              { q: "A CPV quer subir o ticket médio e a taxa de fechamento nos próximos 6 meses. Como você estruturaria o processo — objeção, follow-up, negociação — pra chegar lá?", ins: "Pensamento estratégico aplicado à nossa realidade. Observe se faz perguntas antes de responder (sinal de senioridade) e se define métrica de sucesso desde o começo." },
            ]},
            { t: "group", sec: "Liderança e mentoria", qs: [
              { q: "Como você forma um closer júnior? Como ensina a isolar uma objeção sem cair em desconto por impulso?", ins: "Liderança e desenvolvimento. Revela se sabe multiplicar resultado através de gente ou se é um executor sênior que só entrega sozinho." },
              { q: "Como você diagnostica quando um closer do time está numa fase ruim — é falta de pipeline, de processo ou de postura?", ins: "Diagnóstico de gente, não só de número. Sênior bom separa causa raiz antes de prescrever solução." },
            ]},
          ],
        },
        fim: [
          { t: "nota", text: "Aqui você inverte o papel e observa como o closer age quando está do outro lado. As perguntas que ele faz dizem mais do que as respostas que ele deu." },
          { t: "group", sec: "Encerramento — pergunta obrigatória", qs: [
            { q: "Antes de eu te contar os próximos passos, você tem alguma pergunta sobre a operação, o produto ou o que a gente espera?", ins: "Pergunta sobre comissão logo? Pergunta sobre processo, produto, time? Closer bom pergunta sobre ticket médio, ciclo de venda, qualidade do lead ou estrutura do time. Closer mediano pergunta sobre salário. Closer ruim não pergunta nada." },
          ]},
          { t: "obs", items: [
            { titulo: "Closer bom", desc: "Pergunta sobre ticket médio, ciclo de venda, qualidade do lead ou estrutura do time." },
            { titulo: "Closer mediano", desc: "Pergunta sobre salário." },
            { titulo: "Closer ruim", desc: "Não pergunta nada." },
          ]},
        ],
      },
    ]
  },
  {
    id: "filmmaker", nome: "Filmmaker", color: "#B45309", cs: "#FCD34D", icon: "🎬", usaNivel: true,
    etapas: [
      {
        titulo: "1 · A empresa", sub: "Apresentação da CPV + verificação de interesse · ~8 min",
        blocks: [
          { t: "script", text: '"Bom te ter aqui. A conversa leva uns 40 minutos, em três partes: primeiro eu te apresento a CPV e entendo o que te trouxe até aqui, depois quero te conhecer de verdade — sua história e seu jeito — e no fim a gente entra na parte técnica de vídeo. O portfólio a gente já viu, então aqui o foco é como você pensa. Não existe resposta certa ou errada. Fica à vontade."' },
          { t: "group", sec: "Verificação de interesse — antes de você apresentar a empresa", qs: [
            { q: "Antes de eu te apresentar a CPV, me conta: o que você já sabe sobre o que a gente faz aqui?", ins: "Separa quem pesquisou de quem se candidatou a tudo. Interesse real aparece nos detalhes concretos que a pessoa cita. Chegar sem saber nada é um dado — não elimina sozinho, mas revela o esforço.", fu: "O que te fez querer trabalhar justamente com vídeo nesse tipo de negócio?" },
            { q: "Como você chegou até essa vaga? O que te chamou atenção nela especificamente?", ins: "Quem tem intenção aponta algo específico da vaga ou da empresa. Quem responde no genérico ('tava procurando oportunidade') está no modo aplicar-em-tudo." },
          ]},
          { t: "nota", text: "Agora apresente a CPV com clareza: o que é, o que faz, o momento do negócio e onde vídeo entra nisso — servindo social media, tráfego e o material comercial. Enquanto fala, observe — a pessoa conecta o que você diz com o que ela já mencionou? Faz perguntas? Anota? Engajamento aqui é sinal de interesse real." },
          { t: "group", sec: "Fit com o momento", qs: [
            { q: "Depois do que te expliquei, o que mais faz sentido pra você nesse trabalho? E o que te preocupa, ou o que você acha que seria seu maior desafio aqui?", ins: "A parte da preocupação é a mais reveladora: quem responde com honestidade tem autoconsciência; quem diz 'nada, tá tudo perfeito' está performando ou não pensou a sério sobre a vaga." },
          ]},
        ]
      },
      {
        titulo: "2 · A pessoa", sub: "História, trajetória e perfil · ~14 min",
        blocks: [
          { t: "group", sec: "Trajetória", qs: [
            { q: "Me conta sua história — de onde você veio e como o vídeo entrou na sua vida. Foi escolha ou aconteceu?", ins: "Quem escolheu ativamente tende a ter mais comprometimento e identidade profissional formada. Observe se criou identidade com a área ou ainda está passando por ela.", fu: "Se ficar só no profissional: 'E fora do trabalho, o que te define?'" },
            { q: "Qual experiência profissional mais te formou até hoje? Por quê ela, e não outra?", ins: "Quem aprende extrai lição de experiências específicas. A escolha e o motivo mostram o que a pessoa valoriza — resultado, aprendizado, relação, superação." },
            { q: "Me mostra — ou descreve — um vídeo que você fez e que te orgulha mais. Por que esse?", ins: "Quem escolhe pela qualidade técnica vs. quem escolhe pelo impacto gerado são perfis diferentes. O 'por quê' revela o que a pessoa valoriza no próprio trabalho.", fu: "E um que você não colocaria no portfólio mas que aprendeu muito fazendo?" },
          ]},
          { t: "group", sec: "Autoconhecimento — qualidades e defeitos", qs: [
            { q: "Se eu ligasse agora pra alguém que trabalhou de perto com você, quais duas forças ela citaria na hora? E qual defeito citaria primeiro?", ins: "Enquadrar pelos olhos do outro derruba a resposta ensaiada de 'meu defeito é ser perfeccionista'. Quem tem autoconsciência responde o defeito sem sofrer; quem trava ou maquia mostra pouca maturidade.", fu: "E você concorda com esse defeito? O que já fez a respeito dele?" },
            { q: "Qual crítica você já recebeu mais de uma vez na vida — de pessoas diferentes?", ins: "Crítica recorrente aponta ponto cego real, não episódio isolado. O valor está no que a pessoa fez com ela: ignorou, racionalizou ou trabalhou de verdade." },
            { q: "Em que tipo de ambiente e rotina você rende o seu melhor — e em qual você murcha?", ins: "Fit de perfil puro. Compare a resposta com a realidade do dia a dia da CPV. Ninguém rende em tudo; quem se conhece sabe onde brilha e onde sofre." },
          ]},
        ]
      },
      {
        titulo: "3 · Técnica", sub: "Competência de vídeo · ~16 min · adapta ao nível",
        intro: [
          { t: "nota", text: "Selecione o nível da vaga no topo (Júnior / Pleno / Sênior) — as perguntas técnicas abaixo se ajustam. O portfólio já foi avaliado; o que você busca aqui é olhar, processo e responsabilidade — não volume de equipamento." },
          { t: "alerta", text: 'Não exija o vídeo mais bonito — exija raciocínio coerente e honestidade sobre o que não sabe. Quem diz "não sei, mas eu resolveria assim..." tem mais valor do que quem enrola.' },
        ],
        porNivel: {
          junior: [
            { t: "group", sec: "Fundamentos", qs: [
              { q: "Quando você assiste a um vídeo muito bom, o que você observa? O que passa na sua cabeça?", ins: "Quem analisa luz, corte, ritmo, intenção narrativa tem olho treinado. Quem só diz 'achei bonito' ainda não desenvolveu visão crítica." },
              { q: "Me descreve como você pensa um vídeo do zero — antes de ligar a câmera, o que já precisa estar resolvido?", ins: "Revela processo criativo e nível de planejamento. Quem tem câmera na mão antes de ter intenção na cabeça gera material de baixa qualidade." },
              { q: "Já teve uma gravação que deu errado no dia — equipamento, luz, locação. O que você fez?", ins: "Adaptação em tempo real é a habilidade mais valiosa. Quem entra em colapso quando o plano falha vai travar na produção.", fu: "E o resultado final ficou comprometido ou você conseguiu recuperar?" },
            ]},
            { t: "group", sec: "Cenário prático", qs: [
              { q: "Vou te dar um tema — [ex: um dia de trabalho na CPV, ou um produto de um cliente]. Me fala como você pensaria esse vídeo: o que gravaria, em que ordem e por quê.", ins: "O teste mais honesto de um júnior: raciocínio cru na hora. Observe se pensa em intenção narrativa antes de listar planos soltos." },
            ]},
            { t: "group", sec: "Ferramentas e aprendizado", qs: [
              { q: "Que equipamento e software você usa no dia a dia — câmera, edição, som? Como você aprendeu a usar?", ins: "Mapeia o toolkit e, mais importante, se é autodidata. Júnior que aprende sozinho compensa a falta de experiência rápido." },
              { q: "Qual técnica ou estilo você aprendeu no último ano que mudou algo no seu jeito de filmar ou editar?", ins: "Filmmaker que aprende continuamente responde sem pensar muito. Quem demora ou é vago aprende por acidente, não por intenção." },
            ]},
          ],
          pleno: [
            { t: "group", sec: "Processo e ownership", qs: [
              { q: "Já entregou um vídeo que você sabia que estava abaixo do seu padrão? O que aconteceu?", ins: "O que importa é se a pessoa normaliza isso ou sente desconforto genuíno. E se comunicou ou entregou em silêncio." },
              { q: "Como você organiza seus arquivos de filmagem e edição? O que alguém de fora entenderia do seu HD?", ins: "Organização de material revela organização mental. Filmmaker desorganizado perde material, perde tempo e gera retrabalho." },
              { q: "Como você gerencia projetos quando tem mais de um rodando ao mesmo tempo?", ins: "Quem aceita tudo sem critério vai entregar tudo mal. Quem tem sistema — mesmo simples — entrega com mais consistência." },
            ]},
            { t: "group", sec: "Cenário prático — crítica", qs: [
              { q: "Me conta de um vídeo que você refez, ou que teria refeito, depois de ver o resultado. O que mudaria e por quê?", ins: "Olhar crítico sobre o próprio trabalho é raro e valioso. Quem aponta exatamente o que mudaria tem o nível de autocrítica que gera evolução real." },
            ]},
            { t: "group", sec: "Colaboração", qs: [
              { q: "Já teve que ceder criativamente num projeto — fazer de um jeito que não era o seu? Como foi?", ins: "Quem cede sem ressentimento e sabe distinguir 'minha visão está certa' de 'minha visão é mais uma opção' tem maturidade." },
              { q: "Como você alinha o que vai gravar com quem pediu o vídeo? Me descreve o processo antes de ligar a câmera.", ins: "Filmmaker que grava sem alinhar expectativa gera retrabalho. Quem tem processo de briefing confirma objetivo, estilo e entregáveis antes de investir tempo." },
            ]},
          ],
          senior: [
            { t: "group", sec: "Estratégia e narrativa", qs: [
              { q: "Como você conecta as decisões de vídeo aos objetivos de negócio da empresa? Me dá um exemplo concreto de quando fez exatamente isso.", ins: "Altitude estratégica. Sênior de verdade fala em objetivo de negócio, não em plano bonito. Sem exemplo concreto, é sênior de tempo de casa, não de estratégia." },
              { q: "Me conta de uma vez em que você definiu ou reformulou a linguagem visual de vídeo de uma marca. Qual era o cenário, o que você mudou e qual foi o resultado — com número, se tiver.", ins: "Ownership de resultado. O número importa quando existe: quem lidera estratégia mede impacto. Ficar vago aqui é red flag para o nível." },
              { q: "Você tem um framework ou processo próprio pra manter consistência de estilo quando várias pessoas produzem vídeo ao mesmo tempo?", ins: "Método próprio e pensamento de sistema. Sênior tem um jeito estruturado (guidelines, referência, revisão), não improvisa caso a caso." },
            ]},
            { t: "group", sec: "Cenário prático — estratégia aplicada", qs: [
              { q: "A CPV quer elevar o padrão de vídeo de tudo que produz nos próximos 6 meses — social, comercial, institucional. Me esboça como você estruturaria isso: prioridades, processo e como mediria se funcionou.", ins: "Pensamento estratégico aplicado à nossa realidade. Observe se faz perguntas antes de responder (sinal de senioridade), se prioriza com critério e se define o que significa 'funcionou' desde o começo." },
            ]},
            { t: "group", sec: "Alocação e liderança", qs: [
              { q: "Você tem tempo e verba limitados e precisa escolher: mais volume de vídeo, subir a qualidade de produção, ou investir em equipamento novo. Como você decide?", ins: "Trade-off de alocação. Não existe resposta certa — existe raciocínio. Sênior bom decide a partir do objetivo e do estágio da marca, não por preferência pessoal." },
              { q: "Como você forma e dá feedback pra um filmmaker júnior? Como você faz alguém evoluir de verdade?", ins: "Liderança e desenvolvimento. Revela se sabe multiplicar resultado através de gente ou se é um executor sênior que só entrega sozinho." },
            ]},
          ],
        },
        fim: [
          { t: "group", sec: "Encerramento — perguntas finais obrigatórias", qs: [
            { q: "Tem alguma pergunta sobre a empresa, a equipe ou o dia a dia aqui?", ins: "A qualidade das perguntas revela o nível de interesse real. Quem não tem nenhuma pergunta estava só de passagem." },
            { q: "Tem algo que você queria ter falado e não teve oportunidade?", ins: "Uma das mais reveladoras. Quem aproveita o espaço mostra iniciativa e autoconsciência." },
          ]},
          { t: "nota", text: 'Observe o que acontece depois do "é isso, obrigado": como a pessoa se despede, como trata quem está na recepção. Caráter aparece quando a guarda baixa.' },
          { t: "obs", items: [
            { titulo: "Como ela fala de ex-chefes e colegas", desc: "Culpa generalizada é sinal de alerta. Reconhecer o lado do outro mesmo em conflito é maturidade." },
            { titulo: "Provou processo ou só falou bonito?", desc: "No cenário prático é que se vê o ofício. Boa lábia sem raciocínio concreto é sinal de alerta." },
            { titulo: "Ela faz perguntas sobre você?", desc: "Curiosidade sobre o trabalho e a empresa é sinal de interesse real." },
            { titulo: "Como ela admite erro", desc: "Busca contextos, não desculpas. Quem assume e aprende é quem você quer no time." },
          ]},
        ],
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
  const [nivel, setNivel] = useState("pleno");

  const cargo = CARGOS[cA];
  const etapa = cargo.etapas[eA];
  const total = cargo.etapas.length;
  const blocks = etapa.porNivel
    ? [...(etapa.intro || []), ...(etapa.porNivel[nivel] || []), ...(etapa.fim || [])]
    : etapa.blocks;

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

        {/* Seletor de nível */}
        {cargo.usaNivel && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 8px 6px 14px", borderRadius: 100, border: "1px solid rgba(167,100,255,0.2)", background: "rgba(22,10,38,0.6)" }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(240,235,248,0.4)" }}>Nível da vaga</span>
              <div style={{ display: "inline-flex", gap: 4 }}>
                {NIVEIS.map((n) => {
                  const on = n.id === nivel;
                  return (
                    <button key={n.id} onClick={() => setNivel(n.id)} style={{
                      padding: "6px 15px", borderRadius: 100,
                      border: `1.5px solid ${on ? cargo.color : "transparent"}`,
                      background: on ? `${cargo.color}30` : "transparent",
                      color: on ? cargo.cs : "rgba(240,235,248,0.5)",
                      fontFamily: F, fontSize: 12, fontWeight: 700, cursor: "pointer",
                      transition: "background-color .15s, border-color .15s, color .15s",
                    }}>
                      {n.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

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
            {blocks.map((block, bi) => (
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
