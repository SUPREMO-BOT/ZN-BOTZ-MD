/**
[ By @NeKosmic || https://gitlab.com/NeKosmic ]
**/
const clave = global.Prefijo,
	masss = String.fromCharCode(8206).repeat(850),
	saltos = "\n".repeat(400);
export default {
	Lengua: () => "pt",
	Habla: () => "Idioma Português",
	AdLimite: o => `[ ! ] Você ficou sem limites para usar algumas funções T_T\nVocê pode comprar mais limites usando este comando:\n\n${clave}comprar\n`,
	AdNivel: (o, e) => `[ ! ] Você precisa ter o nível *${o}* para começar a usar este comando\n\nSeu nível atual é ${e}\n`,
	SpamerNot0: o => `[ ! ] ${o} Por favor, não sobrecarregue o bot ;-;`,
	SpamerNot1: () => "_Por favor, aguarde alguns segundos antes de usar outro comando..._ ✓",
	ErrorMsj: (o, e, n, a, i, r, t) => `*[ ! ] Foi detectado um erro no bot:*\n\n📜 Plugin: ${o}\n😵 Cliente: wa.me/${e}\n🤳 Chat: ${n}\n🧩 Comando: ${a+i} ${r}\n\n\`\`\`${t}\`\`\` \n`,
	RestriN: () => "[ ! ] Não foi possível remover o novo participante, ative o modo restrito!",
	AlertList: () => "[ ! ] Remova os números que começam com  '1'  de global.FakeList em ./config.js...!!!",
	WlcAdd: (o, n, a, i) => `⚡ *Bem-vindo @${o} a este grande grupo* ${n}\n📆 *Data de entrada | ${a}*\n🍷 _*Espero que gostem da sua estadia aqui, não se esqueça de respeitar os participantes e as regras*_ ;)\n\n📜 *Regras do grupo atualmente:* \n${masss}\n${i}`,
	WlcRemove: (o, e) => `\`\`\`[!] Esquerda: @${o}\`\`\`\n_- Data de partida |  ${e}_`,
	Gbay: () => "Tchau... 🤧",
	WlcPromot: (e, n, f) => ["Um administrador", `*Parabéns @${e}!, @${f} acabou de lhe dar um grande poder, agora você é o administrador do grupo* : _${n}_\n`, `~Eu agora tem o poder absoluto!~\n\n*Quero dizer..., _Muito obrigado a @${e} por me dar a administração, vou tentar o meu melhor para este grupo!!!_ :D*`],
	WlcDemot: (e, n, f) => ["O administrador", `*@${f} acabou de rebaixar @${e} não é mais um administrador de grupo*: _${n}_`, "Que triste, não sou mais administrador unu"],
	GpUp: (o = "") => ["🔒 *[ GRUPO FECHADO ]* 🔒\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🔓 *[ GRUPO ABERTO ]* 🔓\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃᵍᵉⁿˢ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_", "🧰 *[CONFIGURAÇÕES FEITAS NO GRUPO]* ⚙️\n_ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉᵐ ᵉᵈᶦᵗᵃʳ ᵃˢ ᶜᵒⁿᶠᶦᵍᵘʳᵃᶜ̧ᵒ̃ᵉˢ ᵈᵒ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ, ᵉˢᵗᵉʲᵃ ᶜᶦᵉⁿᵗᵉ ᵈᵉ ᵖᵉˢˢᵒᵃˢ ᶜᵒᵐ ʳᵉᵗᵃʳᵈᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASSUNTO DE GRUPO ALTERADO ]* 🤳\n\nNovo nome: _${o}_\n`],
	DelMsj: (o, e, n) => `*[X] Mensagem ~excluída~ [X]*\n\n*🧬 Tipo de mensagem:* _${o}_\n*🚮 Usuário*: _@${e}_\n*📆 Data: * _${n}_\n`,
	CallNot: (o, e) => `\n*[ ! ] @${o} Você será bloqueado*\n_Motivo: por fazer uma ${e?"chamada de vídeo":"chamada"} para este número sem autorização!_\n`,
	MsjRowner: () => "*[ ! ]* Este comando só pode ser usado *do bot principal*!",
	MsjOwner: () => "*[ ! ]* Este comando só pode ser usado pelo *proprietário do bot*!",
	MsjMods: () => "*[ ! ]* Este comando só pode ser usado por um *moderador*!",
	MsjPremium: () => "*[ ! ]* Este aplicativo é apenas para usuários *premium*!",
	MsjGroup: () => "*[ ! ]* Este comando só pode ser usado em *grupos*!",
	MsjPrivate: () => "*[ ! ]* Este comando só pode ser usado por *bate-papo privado*!",
	MsjAdmin: () => "*[ ! ]* Este comando só pode ser usado por *administradores de grupo*!",
	MsjBotAdmin: () => "*[ ! ]* O bot precisa *ser um administrador* para usar este comando!",
	MsjUnreg: () => `*[ ! ]* Registre-se para começar a usar esta função\n\nExemplo: ${clave}rg nome|idade\n\n${clave}rg Juanito|15\n`,
	MsjRestrict: () => "[ ! ] Para executar ações de exclusão, meu proprietário precisa ativar o modo restrito!",
	Error0: () => "[ ! ] Erro, tente novamente mais tarde...",
	Error1: () => "[ ! ] Ocorreu um erro inesperado u.u [!]",
	Proces: o => `_Processando, ${o} por favor aguarde..._`,
	Bsqd: o => `_Procurando, ${o} por favor aguarde..._`,
	Antlk1: o => ["[ ! ] Meu maluco você acabou de enviar um link, o bom é que o link detectado é desse grupo owo", "*[ ! ] Link detectado [ ! ]*\n\n_Felizmente não sou administrador, então Eu não posso fazer nada unu_", `*[ ! ] Link detectado [ ! ]*\n_Agora se você valesse @${o} Adeus..._\n`],
	Antlk2: o => "*[ ! ] Link detectado [ ! ]* " + (o ? "" : "\n\n_Felizmente não sou administrador, então não posso fazer nada :v_"),
	Antprv: () => `*[ ! ] Bate-papo privado é proibido [ ! ]*\nMeu dono caso precise de informações: wa.me/${OwnerNum}\n\n_Adios..._`,
	Antrb: (o = "", e = "") => [`Admin @${o} acabou de enviar um texto contendo muitos caracteres -.-!`, "*[ ! ] Foi detectada uma mensagem contendo muitos caracteres [ ! ]* " + (o ? "" : `${saltos}\nNão sou administrador, não posso fazer mais nada... :/`), `Marcar o chat como lido ✓\n${saltos}\n=> Número: wa.me/${o}\n=> Apelido: ${e}\n[ ! ] Você acabou de enviar um texto que contém muitos caracteres que podem causar travamentos em dispositivos móveis`],
	Antvwc: o => `${o}\n\n*Mensagem multimídia a ser visualizada uma vez, recuperada ✓*\n`,
	Autinf: (o, e) => `<[ ${NombreDelBot} ]>\nTempo ativo : ${o}${e?"|| Sem bate-papos privados":""}`,
	Autlvl: (o = "", e = "", n = "", a = "") => `\nParabéns, ${o} você subiu de nível!\n♻️ Nível anterior: ${e}\n🪀 Nível atual: ${n}\n⚔️ Função: ${a}\n`,
	Fingp: () => "O tempo acabou para ficar no grupo\n\nEle sai epicamente*",
	Notpre: () => "[ ! ] Seu tempo premium acabou!\n_Espero que tenha gostado :3_\n",
	Afkpl: (e = "", n = "") => [`📲 *Você parou de ser AFK depois de ${e}.*\nBem-vindo de volta!!!  :D`, `📴 *O usuário mencionado está ausente no momento, tempo decorrido ${e}.*\n\n┏⊱ *Motivo* \n┗━⊱ ${n}\n`, `Indique o motivo para deixe AFK\nExemplo de uso :\n\n${clave+e} Vou ao banheiro :v`, "[ ! ] O motivo é muito curto", `*A função AFK foi ativada com sucesso*\n\n➸ *Usuário*: ${e}\n➸ *Motivo*: ${n}`],
	Afrs: (o = "", e = "", n = "") => `\n🎴 Anime : ${o}\n🀄 Personagem : ${e}\n🔖 Frase : ${n}\n`,
	Animg: (o = "", e = "") => `┏━⊱ Imagem: ${o}\n┗⊱ Solicitado por: @${e}`,
	Aninf: (e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "", p = "", c = "", l = "", v = "", _ = "", g = "", A = "", E = "", I = "", b = "", f = "", P = "") => [`Que anime você deseja pesquisar?, exemplo de uso:\n\n${clave+e} nichijou\n`, "Nenhum resultado encontrado para sua solicitação. Forneça um título de anime mais claro", `\n* 🧬 ID:* ${e}\n* 🟢 Aprovado:* ${a?"Sim":"Não"}\n*✍️ Títulos:* [ Global: ${i} ], [ Inglês: ${r||"-"} ], [ Japonês: ${t||"-"} ]\n*📆 Temporada:* ${c||"-"} ${l||"-"}\n*🪄 Tipo : * ${s}\n*🧩 Gênero:* ${E}\n*🗃️ Episódio:* ${d}\n*🎭 Status:* ${I}\n*⌚ Duração:* ${b} \n*♻️ Avaliação:* ${f}\n*📈 Pontuação:* ${u}\n*👍 Avaliado por:* ${m}\n*⚡ Popularidade:* ${$}\n*❤️ Favoritos: * ${p}\n*📜 Sinopse:* ${P}\n*📝 Dados:* ${v}\n*🔥 Produtor:* ${_}\n*🪀 Licenciado por:* ${g} \n*🌟Estúdio:* ${A}\n*📺 Trailer:* ${n}\n`],
	Eat: () => `💻 *Redes sociais* 📲\n\n${masss+TusRedesSociales}\n\nᴺᵃ̃ᵒ ᵖᵉᶜ̧ᵒ ᵈᶦⁿʰᵉᶦʳᵒ⁻ ˢᵒ́ ᶜᵒᵐ ᵒ ˢᵉᵘ ᵃᵖᵒᶦᵒ ᶠᶦᶜᵒ ᶠᵉˡᶦᶻ :³`,
	Boes: (o = "", e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "", p = "", c = "", l = "", v = "", _ = "", g = "", A = "", E = "") => `${o?`*Grupo* : _[ ${e} ]_\n\n*Grupo banido* : _${n?"[✓]":"[X]"}_\n\n*Admin Bot?* : _${a?"[✓]":"[X]"}_`:""}\n\n*User Bot* : ${NombreDelBot}\n_${"@"+i}_\n\n*Bot* : _${opts.self?"PRIVATE-MODE [ ! ]":"PUBLIC-MODE [✓]"}_\n\n*Modo restrito* : _${r?"ON [✓]":"OFF [X]"}_\n\n*Anti-Private* : _${t?"ON [✓]":"OFF [X]"}_\n\n*Sendo Sub-Bot* : _${s?"ATIVADO [✓]":"DESATIVADO [X]"}_\n${o?`\n*Modo Somente Administradores* : _${d?"Ativo [✓]":"Idle [X]"}_\n\n*Welcome* : _${u?"Active [✓]":"Idle [X]"}_\n\n*Antilink* : _${m?"Ativo [✓]":"Inativo [X]"}_\n\n*Antilink 2* : _${$?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Estrangeiros* : _${p?"Ativo [✓]":"Inativo [X]"}_\n\n*Não Falso* : _${c?"Ativo [✓]":"Inativo [X]"}_\n\n*Não Falso 2* : _${l?"Ativo [✓]":"Inativo [X]"}_\n\n*Detecção* : _${v?"Ativo [✓]":"Inativo [X]"}_\n\n*Anti Delete* : _${_?"Inativo [X]":"Ativo [✓]"}_\n\n*Anti-caiu* : _${g?"Ativo [✓]":"Inativo [X]"}_\n\n*Chat Bot* : _${A?"Ativo [✓]":"Inativo [X]"} _\n\n*Nível Automático* : _${E?"Ativo [✓]":"Inativo [X]"}_`:""}\n`,
	Binf: (o = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "", p = "", c = "", l = "", v = "", _ = "", g = "", A = "", E = "", I = "", b = "", f = "", P = "", x = "", O = "", S = "") => ["_Obtendo informações..._", `*~》INFORMAÇÕES《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(ativo)_\n➪ *Proprietário atual* : _${Propietario}_\n➪ *Runtime* : _${o}._\n➪ *Apelido no WhatsApp* : _${n}._\n➪ *Total de grupos* : _${a}_ \n➪ *Total de usuários* : _${i}_\n➪ *Grupos ativos* : _${r} / ${t}_\n➪ *Chats pessoais* : _${s}_\n➪ *Total de bate-papos* : _${d} / ${u}_\n➪ *Hits globais* : _${m}_\n➪ *Versão do bot* : _${BotVersion}_ \n➪ *Wa- web Api*: _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot*: _https://youtu.be/Tk9Pitk1_oM_\n➪ *Total de plugins*: _${$}_\n➪ *Pasta temporária* : _${p}_\n➪ *Banco de dados* : _${c}_\n➪ *Versão do NodeJs* : _${l}_\n➪ *Velocidade de processamento* : _${v} s_\n➪ *Velocidade de conexão* : _${_} ms_\n➪ *RAM:* _${g}_\n➪ *Plataforma* : _${A}_\n➪ *Versão* : _${E}_\n➪ *Base OS* : _${I}_\n➪ *Arquitetura* : _${b}_\n➪ *Host* : _${f}_ ${P}\n\n➫ _Uso de memória:_\n${x} ${""==O?"":`\n➫ _Uso total da CPU:_\n${O}\n➫ _CPU Core(s) usado(s)_ ${S}`}\n\n┗─━─「 ✵ 」━─━─┛`],
	Bscp: () => [`*🛑Antes de continuar com a leitura, tenha em mente os seguintes requisitos:*\n- _Tenha 2 dispositivos perto de você, muito importante!_\n- _Tenha 200MBS de armazenamento gratuito em seu dispositivo_\n- _Ter Termux.apk instalado_ \n - _Tenha uma boa conexão com a internet_\n- _Por último e mais importante, seja paciente_ :v\n\n\n*[_>] Comandos para executar em termux.apk de 0* :\n\n*1 .-* cd \n*2.-* termux-setup-storage ~[ Primeiro concedemos permissão ao nosso armazenamento (memória) ]~\n*3.-* termux-change-repo ~(Opcional) [ Selecione todas as opções que aparecem no primeira janela ||  Na segunda janela selecione a opção que contém as palavras "termux.mentality.rip" ]~\n\n*[_>] Pacotes 7w7r instalados, faça um por um :D*\n\n*1.* apt-get update -y && apt-get upgrade -y\n*2.* pkg install git\n*3.* pkg install nodejs\n*4.* pkg install libwebp -y\n*5.* pkg install ffmpeg -y\n*6.* pkg install imagemagick -y\n*7.* pkg install yarn\n*8.* git clone https://gitlab.com/NeKosmic/nk-bot-md\n*9 .* cd nk-bot-md\n*10.* yarn\n*11.* npm start\n*12.* Vá para o seu telefone, abra o aplicativo WhatsApp, toque nos 3 pontos no canto superior direito da tela e selecione "dispositivos vinculados" e depois "vincular um dispositivo", Agora retorne ao aplicativo termux.apk, Basta escanear o código QR que aparecerá na tela e pronto, você pode usar o bot, lembre-se que você precisa usar o dispositivos indicados no início deste texto ;3\n\n\`\`\`O bot também pode ser executado em hosts ou máquinas virtuais...\`\`\`\n\n</Bot scripts>\ n • https://youtu.be/Tk9Pitk1_oM (Leia a descrição)\n• https://gitlab.com/NeKosmic/nk-bot-md/-/forks/new (Git)\n• https:// replit .com/@NeKosmic/NK-BOT-MD (demonstração)\n• https://github.com/NeKosmic/NK-BOT-MD (Funcionado)\n\nPrecisa de mais ajuda? Entre em contato com meu criador:`, "Modo de Demonstração Temporária"],
	Bunt: (o = "", e = "") => ["E o link do WhatsApp?", "[ ! ] Erro, O link não funciona ou é inválido", `[ ! ] A quantidade mínima para entrar no grupo deve ser *${MinimoDeUsuarios}* participantes`, `${NombreDelBot} entrou no grupo ${o} com sucesso \n${e?`Por ${e} Hora(s)`:""}`],
	Csim: () => ["Não há sistema!", "Por favor, seja mais específico em sua mensagem", "E a mensagem?"],
	Cimg: (e = "") => [`*Responda a um adesivo usando o comando*:\n\n${clave+e}\n`, "[ ! ] Somente adesivos estáticos"],
	Cmp3: (e = "") => [`Envie ou responda um (vídeo/áudio gravado) ao comando:\n\n${clave+e}`, "Não foi possível converter para áudio", "🎞️ Convertido para áudio 🎶"],
	Cptt: (e = "") => [`Envie ou responda um (vídeo/áudio) ao comando:\n\n${clave+e}`, "Não foi possível converter para gravação", "🎤 Convertido para gravação 🎶"],
	Ctxt: () => ["Forneça um texto", "*[_>] Estilos de texto para:*"],
	Caiu: (e = "") => `Enviar ou responder a um texto, exemplo de uso:\n\n${clave+e} idioma inclusivo\n`,
	Clgs: (e = "", n = "", a = "") => [`*[ ! ] Use o formato correto!* :\n\n🖼️ ~Para logos com texto contínuo~\n[1] ${clave+e} (efeito) (texto...), _Exemplo de uso:_\n\n ${clave+e} espaço NeKosmic\n\n🖼️ ~Para logos com texto separado por uma linha vertical~\n[2] ${clave+e} (efeito) (text1)|(text2), _Use exemplo: _\n\n${clave+e} Pornhub-Style-Logo NK-|BOT\n\n🖌️ Qual logotipo você deseja criar?, aqui está uma lista de efeitos:\n\n🎨 ${clave+e} `, `[ ! ] Efeito *${e}* não encontrado na lista...`, `[ ! ] O efeito *${e}* não foi encontrado na lista, escreva ou use o formato correto...`, `[ !  ] Por favor escreva ou use bem o formato, exemplo de uso: ${clave+e} ${n}`, `*┏━❪CREATE-LOGOS❫━*\n*┃*\n*┣ Design* : _ ${e}_\n*┃*\n*┣ Texto* : _${n}_\n*┃*\n*┣ Data de Criação* : _${a}_\n*┃*\n *┗ ❪ Text-Pro ❫━*`],
	Cgod: () => ["Otakus tecnológicos", "Criador principal", "Proprietário atual", "Como você é sexy"],
	Dfbv: (e = "") => ["E o link...?", "*[ ! ] E o link do facebook?*", `*[ ! ] Link inválido*\n_Por favor, use um link de vídeo do Facebook válido_\n\nExemplo de uso: ${clave+e} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Erro pode ser que o link seja inválido ou o vídeo é privado, por favor, tente novamente mais tarde"],
	Dgit: (e = "") => [`Por favor, use um URL do github, exemplo:\n${clave+e} https://github.com/adiwajshing/Baileys`, "Conta do Github banida, use outro URL", "[ ! ] URL do github inválido"],
	Dmdf: (o = "", e = "", n = "", a = "", i = "", r = "") => ["*[ ! ] E o link Mediafire?*", "*[ ! ] Link inválido*\n_Por favor, use um link MediaFire_", `*Nome:* ${o}\n*Tamanho:* ${e}\n *Extensão:* ${n}\n*Data de upload:* ${a}\n*Tipo de arquivo:* ${i}\n*Url:* ${r}`],
	Dtkv: (e = "") => ["*[ ! ] E o link do tiktok?*", "*[ ! ] Link inválido*\n_Por favor, use um link válido_", `*[ ! ] Link inválido*\n_Por favor, use um link do Tik Tok_\nExm: ${clave+e} https://vm.tiktok.com/ZMYmRWCo2/`],
	Dyta: (e = "") => [`Que áudio você deseja baixar do Youtube?, Exemplo de uso: \n\n${clave+e} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use um link do YouTube_\n", "[ ! ] O áudio está muito pesado, desculpe não poder enviar..."],
	Dyau: (e = "", n = "", a = "", i = "", r = "", t = "", s = "") => [`Que áudio você deseja baixar do Youtube?, Exemplo de uso: \n\n${clave+e} mtc s3rl`, `🔍 Resultado encontrado para: ${e}\n${n?`✍️ Título: ${n}\n⏳ Duração: 1:23 ━━━━●───────── ${a}\n👀 Visualizações: ${i}\n📝 Autor: ${r}\n📜 Descrição: ${t}\n⛓️ URL: ${s}\n\n\`\`\`Enviando áudio, aguarde...\`\`\``:""}`],
	Dytv: (e = "", n = "") => [`Qual vídeo você deseja baixar do Youtube?, Exemplo de uso: \n\n${clave+e} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor , usei um link de um vídeo do YouTube_\n", "[ ! ] Seu video pesa demais, desculpe meu rei, não posso enviar :v", `Título: ${e}\nTamanho: ${n} \nExtensão: .mp4`],
	Dylt: () => ["*[ > ] Baixar áudio*", "*[ > ] Baixar vídeo*", "_Opção 1_", "_Opção 2_", "_Opção 3_", "Selecionar uma opção"],
	Dpl1: (e = "", n = "", a = "", i = "") => [`Indique o título do áudio para baixar do YouTube, Uso Exemplo: \n\n${clave+e} mtc s3rl`, ` _Please aguarde ${e}antes de fazer outro pedido_ \n~ᴼ ᵗᵉᵐᵖᵒ ᵈᵉ ᵉˢᵖᵉʳᵃ ᵈᵉᵖᵉⁿᵈᵉ ᵈᵃ ᵈᵘʳᵃᶜ̧ᵃ̃ᵒ ᵈᵒ ᵃ́ᵘᵈᶦᵒ ˢᵒˡᶦᶜᶦᵗᵃᵈᵒ ᵃⁿᵗᵉʳᶦᵒʳᵐᵉⁿᵗᵉ~`, `*✍️ Título:*${e} \n*🎹 Autor:*${n}\n*🗜️ Tamanho:*${a+"aprox."} \n*⏳ duração:* ${i}\n\n\n\n _Enviando áudio, aguarde..._`, `Ocorreu um erro, use o comando:\n\n${clave}audio ${e}\n`],
	Dpl2: (n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "") => [`O que você quer pesquisar no Youtube?, Exemplo de uso: \n\n${clave+n} The prophet wanna play?`, "[ ! ] Sem resultados, tente novamente...", `✍️ Título: ${n}\n⚡ Autor: ${a}\n⏰ Duração: ${i}\n👀 Visualizações: ${r}\n📆 Data de upload: ${t}\n📺 Canal: ${s}\n📃 Descrição: ${d||"-"}\n🧬 ID: ${u}\n\n🧑‍💻 _Você pode usar os seguintes comandos para baixar_${masss}\n\n┌ Áudio -\n │ ┌ ${clave}ytmp3 ${m}\n└┼ ${clave}yta ${m}\n └ ${clave}ytabochi ${m}\n\n┌ Vídeo -\n│┌ ${clave}ytmp4 ${m}\n└┼ ${clave}ytv ${m}\n └ ${clave}ytvbochi ${m}\n`],
	Efau: (e = "") => `Envie ou responda uma nota de áudio/voz, com o comando \n\n${clave+e}\n`,
	Eper: (o = "", e = "") => `*┏━> Efeito de Perfil* : _${o}_\n*┗> Solicitado para*: _@${e}_`,
	Evid: (e = "", n = "") => [`┏━━⊱ ${e} \n┗⊱ Por ${n}`, `Envie ou responda um vídeo, com o comando \n\n${clave+e}\n`],
	Excc: () => ["O comando contém caracteres ilegais", "_Executando..._"],
	Gemx: (e = "") => `Exemplo de uso: ${clave+e} 🥺+🥵`,
	Gimg: (o = "", e = "", n = "") => ["O que você deseja pesquisar nas imagens do Google?", "[ ! ] Sem resultados", `*[ GOOGLE-CHAN ] ✓*\n*~> Resultado para* : _${o}_\n*~> Tamanho*: _${e} x ${n} PX_`],
	Gtts: (e = "") => ["Máximo de caracteres 600", `*[ ! ] Por favor, após usar o comando ${e}, você deve adicionar o prefixo do idioma em que deseja ouvir o áudio* \n`, `Exemplo de uso:\n\n${clave+e} pt olá \n\n-> "pt" = Prefixo português\n--\x3e "olá" = texto\n`, `*[ idiomas disponíveis ]* :${masss}\n\`\`\`\n 'af': 'africano',\n 'sq': 'albanês',\n 'ar': 'árabe',\n 'hy': 'armênio',\n 'ca': 'catalão',\n 'zh': 'Chinês',\n 'zh-cn': 'Chinês (Mandarim/China)',\n 'zh-tw': 'Chinês (Mandarim/Taiwan)',\n 'zh-yue': 'chinês (cantonês)',\n 'hr': 'croata',\n 'cs': 'tcheco',\n 'da': 'dinamarquês',\n 'nl': 'holandês',\n ' en': 'Inglês',\n 'en-au': 'Inglês (Austrália)',\n 'en-uk': 'Inglês (Reino Unido)',\n 'en-us': 'Inglês (Reino Unido) Unidos)',\n 'eo': 'Esperanto',\n 'fi': 'Finlandês',\n 'fr': 'Francês',\n 'de': 'Alemão',\n 'el ': 'Grego',\n 'ht': 'Crioulo Haitiano',\n 'oi': 'Hindiano',\n 'hu': 'Húngaro',\n 'é': 'Islandês',\n ' id' : 'indonésio',\n 'it': 'italiano',\n 'ja': 'japonês',\n 'ko': 'coreano',\n 'la': 'latino',\n ' lv' : 'Letão',\n 'mk': 'Macedônio',\n 'não': 'Norueguês',\n 'pl': 'Polonês',\n 'pt': 'Português',\n ' pt- br': 'Português (Brasil)',\n 'ro': 'Romeno',\n 'ru': 'Russo',\n 'sr': 'Sérvio',\n 'sk': 'Eslovaco ', \n 'es': 'Espanhol',\n 'es-es': 'Espanhol (Espanha)',\n 'es-us': 'Espanhol (Estados Unidos)',\n 'sw': ' Swahili' ,\n 'sv': 'Sueco',\n 'ta': 'Tamil',\n 'th': 'Tailandês',\n 'tr': 'Turco',\n 'vi': ' Vietnamita' ,\n 'cy': 'País de Gales'\n\`\`\``],
	Gbqd: (o = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "") => ["O que você deseja pesquisar no Google?", "[ ! ] Sem resultados", `〘 *GOOGLE* 〙\n_~> Resultados para: ${o}_\n\n🔖 Título: ${n}\n📜 Descrição: ${a}\n⛓️ Url: ${i}\n🖼️ Imagem: ${r+`\n🔍 Pesquisas relacionadas:\n- ${t}`}\n${s?"":`\n🌐 Mais informações: ${masss+d}`}\n`],
	Gadm: (o = "", e = "") => `*Administradores do grupo* : ${o}\n\n*Total* : \n\n${e}\n`,
	Gbnd: () => ["Bate-papo banido com sucesso ✓", "Chat desbanido com sucesso ✓"],
	Gpbc: (o = "", e = "") => ["[ ! ] E a mensagem que você deseja transmitir?", `Enviando transmissão para ${o} grupo(s), em aproximadamente ${e} segundo(s)`],
	Gcea: (o = "", e = "") => [`*A que horas você deseja fechar o grupo?*\n\n_Exemplo de uso_ : \n${clave+o} 10 segundos`, `*O grupo será fechado em ${o}*\n_Ação executada por: @${e}_`],
	Gdes: () => ["*[ ! ] Digite um texto com o qual a descrição do grupo atual será atualizada*", "*[ ! ] Máximo de caracteres 512*"],
	Gnme: () => ["*[ ! ] Digite um assunto/título/nome/apelido com o qual o assunto do grupo atual será atualizado*", "*[ ! ] o máximo de caracteres é 25*"],
	Gtag: (o = "") => `${o||"ˢᵉˣʸ Qᵘᵉᵐ ᴸᵉ̂ ⁷ʷ⁷"}`,
	Ginf: (o = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "") => `*Nome do grupo* : ${o}\n*Criado por* : _${n||"[ ! ] Número do criador do grupo principal não encontrado"}_\n*Data de criação* : _${a}_ \n*Total de participantes* : _${i}_\n*Total de administradores* : _${r}_\n${t}\n*Não administradores* : _${s}_ \n*Grupo ID* : _${d}_\n*Descrição* : \n${masss}\n${u||""}\n`,
	Ginv: (o = "", n = "", a = "", i = "") => `*[ ! ] Convocando membros do grupo* :\n${o}\n\n*~> Invocador* : _@${n}_\n*~> Mensagem* : _${a||"Não tem :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${i.map((o=>"╠➥ @"+o.replace(/@.+/,""))).join`\n`}\n╚═══════════\n`,
	Glis: (o = "") => ["Fora do grupo", "Dentro do grupo", `*Grupos com maior atividade de ${NombreDelBot} atualmente:*\n\n${o}`],
	Gvts: (n = "", a = "", i = "", r = "") => ["Votação redefinida com sucesso ✓",`*[ ! ] Ainda não há votação ativa neste grupo*\n_Para criar um novo voto use o comando_ ${clave}votacion`,"*[ ! ] Você não pode votar novamente*",`\`\`\`[ VOTO ]\`\`\`\n\n📋 *Razão:* ${a}\n✍️ *Eleitor:* ${b}\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n${c}\n┗━━⊱ Total: ${e}\n\n📝\n┣👥\n┣━⊱ Votou contra [X]\n${d}\n┗━━⊱ Total: ${f}\n\n┌ Sim vote ✔️\n└―  ${clave}sivotar\n\n┌ Nenhum voto ❌\n└―  ${clave}novotar`,`\`\`\`[ VOTOS ATUAIS ]\`\`\`\n\n📋 *Razão:* ${a} <=\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n${b}\n┗━━⊱ Total: ${d}\n\n📝\n┣👥\n┣━⊱ Votou contra [X]\n${c}\n┗━━⊱ Total: ${e} \n${f?`\nUse o comando ${clave}reiniciarvotos para reiniciar a votação ✓`:""}`,`*[ ! ] Ainda há uma votação ativa no grupo*\n_Use o comando_ : ${clave}reiniciarvotos _para criar um novo voto_`,`*Digite um motivo para votar, exemplo:*\n\n${clave+a} o gerente é bom?\n`,"O motivo da votação é bem curto, seja criativo!",`⚡ ${a} *Iniciou uma nova votação no grupo:* ${b}\n\n_Como participar da votação:_${masss}\n\n┏⊱   ${clave}sivotar\n┗━⊱  Para dar um voto positivo ✔️\n\n┏⊱   ${clave}novotar \n┗━⊱  Para dar um voto negativo ❌\n\n┏⊱   ${clave}vervotos \n┗━⊱  Para verificar os votos 👀\n\n┏⊱   ${clave}reiniciarvotos \n┗━⊱  Para excluir um voto ativo ♻️`,`\`\`\`[ VOTACIÓN ]\`\`\`\n\n📋 *Razão:* ${a}\n👤 *Pesquisador:* ${b}\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n┋\n┗━━⊱ Total: ${c}\n\n📝\n┣👥\n┣━⊱ Votou contra [X]\n┋\n┗━━⊱ Total: ${d}`],
	Gadd: (o = "") => ["Ative o modo restrito para executar esta ação", `*[ ! ] Erro, não foi possível adicionar @${o} ao grupo*\n\n_Envie o link do convite manualmente wa.me/${o}_\n`],
	Hblt: (o = "", e = "", n = "", a = "", i = "") => [`\n@${o} ${e?"ativado":"desativado"} *${n}* com sucesso ${a?"para este bot":i?"":"para este chat"}\n`, "Aqui está a lista de opções :3", "Opção", "Descrição:", "Comando:"],
	Hblr: () => [{
		title: "[ ⬇️ BEM-VINDO AUTOMÁTICO ]",
		rows: [{
			title: "[ 🛬 Ativar ]",
			description: "~ᴼ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵃˢ ᵇᵒᵃˢ⁻ᵛᶦⁿᵈᵃˢ ᵃᵒˢ ⁿᵒᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}encender bienvenida`
		}, {
			title: "[ 🛫 Desativar ]",
			description: "~ᴺᵒᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ᵇᵉᵐ⁻ᵛᶦⁿᵈᵒˢ~",
			rowId: `${clave}apagar bienvenida`
		}]
	}, {
		title: "[ ⬇️ DETECÇÃO ]",
		rows: [{
			title: "[ 🌕 Ativar ]",
			description: "~ᴼ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ᵒˢ ᵃʲᵘˢᵗᵉˢ ᶠᵉᶦᵗᵒˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}encender deteccion`
		}, {
			title: "[ 🌑 Desativar ]",
			description: "~ᴺᵃ̃ᵒ ˢᵉᶦ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ᵃʲᵘˢᵗᵉˢ ᶠᵉᶦᵗᵒˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar deteccion`
		}]
	}, {
		title: "[ ⬇️ ANTI - EXCLUIR ]",
		rows: [{
			title: "[ ♻️ Ativar ]",
			description: "~ᵀᵒᵈᵃˢ ᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵉˣᶜˡᵘᶦ́ᵈᵃˢ ˢᵉʳᵃ̃ᵒ ʳᵉᶜᵘᵖᵉʳᵃᵈᵃˢ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",
			rowId: `${clave}encender antieliminar`
		}, {
			title: "[ 🗑️ Desativar ]",
			description: "~ᴬˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵉˣᶜˡᵘᶦ́ᵈᵃˢ ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ʳᵉᶜᵘᵖᵉʳᵃᵈᵃˢ~",
			rowId: `${clave}encender eliminar`
		}]
	}, {
		title: "[ ⬇️ USO - DOCUMENTOS ]",
		rows: [{
			title: "[ 🗃️ Ativar ]",
			description: "~ᴼ ᵘˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ˢᵉʳᵃ́ ᵃᵗᶦᵛᵃᵈᵒ ᵖᵃʳᵃ ᵒ ᵇᵒᵗ~",
			rowId: `${clave}encender document`
		}, {
			title: "[ 🗳️ Desativar ]",
			description: "~ᵁˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵈᵉˢᵃᵗᶦᵛᵃᵈᵒˢ ᵖᵃʳᵃ ᵒ ᵇᵒᵗ~",
			rowId: `${clave}apagar document`
		}]
	}, {
		title: "[ ⬇️ MODO DE USO ]",
		rows: [{
			title: "[ 🏬 Público ]",
			description: "~ᴹᵒᵈᵒ ᵖᵘ́ᵇˡᶦᶜᵒ ᵃᵗᶦᵛᵃᵈᵒ ᵃᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵘˢᵘᵃ́ʳᶦᵒˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵘˢᵃʳ ᵒ ᵇᵒᵗ~",
			rowId: `${clave}encender publico`
		}, {
			title: "[ 🏡 Privado ]",
			description: "~ᴹᵒᵈᵒ ᵖʳᶦᵛᵃᵈᵒ ᵃᵗᶦᵛᵃᵈᵒ ᵃᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒ ᵈᵒⁿᵒ ᵈᵒ ᵇᵒᵗ ᵖᵒᵈᵉʳᵃ́ ᵘˢᵃ́⁻ˡᵒ~",
			rowId: `${clave}apagar publico`
		}]
	}, {
		title: "[ ⬇️ ANTI - ESTRANGEIROS ]",
		rows: [{
			title: "[ 🏳️ Ativar ]",
			description: "~ᴬ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵈᶦᶠᵉʳᵉⁿᵗᵉˢ ᵈᵒ ᵖʳᵉᶠᶦˣᵒ ᵈᵒ ᵖʳᵒᵖʳᶦᵉᵗᵃ́ʳᶦᵒ ᵉˢᵗᵃ́ ᵃᵗᶦᵛᵃᵈᵃ~\nᴺᵘ́ᵐᵉʳᵒˢ ᶜᵒᵐᵉᶜ̧ᵃⁿᵈᵒ ᶜᵒᵐ +" + PaisPrefix + " ⁿᵃ̃ᵒ ˢᵉʳᵃ̃ᵒ ʳᵉᵐᵒᵛᶦᵈᵒˢ",
			rowId: `${clave}encender antiextranjeros`
		}, {
			title: "[ 🏴 Desativar ]",
			description: "~ᴰᵉˢᵃᵇᶦˡᶦᵗᵃʳ ᴬⁿᵗᶦ ᴱˢᵗʳᵃⁿᵍᵉᶦʳᵒˢ ⁿᵒ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar antiextranjeros`
		}]
	}, {
		title: "[ ⬇️ ANTI-FALSOS 1 ]",
		rows: [{
			title: "[ 🛡️ Ativar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵃ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵃᵐᵉʳᶦᶜᵃⁿᵒˢ ⁺¹~",
			rowId: `${clave}encender antifake1`
		}, {
			title: "[ ⚰️ Desativar ]",
			description: "~ᴰᵉˢᵃᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ⁿᵒ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar antifake1`
		}]
	}, {
		title: "[ ⬇️ ANTI-FALSOS 2 ]",
		rows: [{
			title: "[ 🛡️ Ativar ]",
			description: "~ᴬ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᵉˢᵗʳᵃⁿʰᵒˢ ᵒᵘ ˢᵘˢᵖᵉᶦᵗᵒˢ ᵉˢᵗᵃ́ ᵃᵗᶦᵛᵃᵈᵃ~",
			rowId: `${clave}encender antifake2`
		}, {
			title: "[ ⚰️ Desativar ]",
			description: "~ᴰᵉˢᵃᵗᶦᵛᵉ ᵒ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ⁿᵒ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar antifake2`
		}]
	}, {
		title: "[ ⬇️ ANTI-LINK ]",
		rows: [{
			title: "[ 🗡️ Ativar ]",
			description: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵖᵒˢᵗᵃʳᵉᵐ ˡᶦⁿᵏˢ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}encender antilink`
		}, {
			title: "[ 😴 Desativar ]",
			description: "~ᴺᵃ̃ᵒ ˢᵉᶦ ᵗᵒᵐᵃʳᵃ́ ⁿᵉⁿʰᵘᵐᵃ ᵃᶜ̧ᵃ̃ᵒ ᑫᵘᵃⁿᵈᵒ ᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᶠᵒʳᵉᵐ ᵉⁿᵛᶦᵃᵈᵃˢ~",
			rowId: `${clave}apagar antilink`
		}]
	}, {
		title: "[ ⬇️ ANTI - LINK 2 ]",
		rows: [{
			title: "[ 🗡️ Ativar ]",
			description: "~ᴼ ᵇᵒᵗ ʳᵉᵐᵒᵛᵉʳᵃ́ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦᵃʳᵉᵐ ˡᶦⁿᵏˢ⁻ᵘʳˡˢ~",
			rowId: `${clave}encender antilink2`
		}, {
			title: "[ 😴 Desativar ]",
			description: "~ᴺᵃ̃ᵒ ˢᵉᶦ ˢᵉ ᵉˣᵉᶜᵘᵗᵃʳᵃ́ ᑫᵘᵃˡᑫᵘᵉʳ ᵃᶜ̧ᵃ̃ᵒ ᑫᵘᵃⁿᵈᵒ ᵒˢ ˡᶦⁿᵏˢ⁻ᵘʳˡˢ ᶠᵒʳᵉᵐ ᵉⁿᵛᶦᵃᵈᵒˢ~",
			rowId: `${clave}apagar antilink2`
		}]
	}, {
		title: "[ ⬇️ NÍVEL AUTOMÁTICO ]",
		rows: [{
			title: "[ 👑 Ativar ]",
			description: "~ᴼˢ ᵘˢᵘᵃ́ʳᶦᵒˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦ́ᵛᵉˡ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",
			rowId: `${clave}encender autolevelup`
		}, {
			title: "[ 🎓 Desativar ]",
			description: "~ᴼˢ ᵘˢᵘᵃ́ʳᶦᵒˢ ⁿᵃ̃ᵒ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵐᵃᶦˢ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦ́ᵛᵉˡ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",
			rowId: `${clave}apagar autolevelup`
		}]
	}, {
		title: "[ ⬇️ MODO RESTRITO ]",
		rows: [{
			title: "[ 🌚 Ativado ]",
			description: "~ᴬᵗᶦᵛᵉ ᵃ ᶠᵘⁿᶜ̧ᵃ̃ᵒ ᵖᵃʳᵃ ʳᵉᵐᵒᵛᵉʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉ ᵘᵐ ᵍʳᵘᵖᵒ ⁽ᵖᵒʳ ˢᵘᵃ ᶜᵒⁿᵗᵃ ᵉ ʳᶦˢᶜᵒ⁾~",
			rowId: `${clave}encender restringir`
		}, {
			title: "[ 🌝 Desabilitado ]",
			description: "~ᴬᶜ̧ᵒ̃ᵉˢ ᵖᵃʳᵃ ᵃᵈᶦᶜᶦᵒⁿᵃʳ ᵉ ʳᵉᵐᵒᵛᵉʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᵇᶦˡᶦᵗᵃᵈᵃˢ~",
			rowId: `${clave}apagar restringir`
		}]
	}, {
		title: "[ ⬇️ SEM MODO BOT ]",
		rows: [{
			title: "[ 🙈 Ativar ]",
			description: "~ᴵᵐᵖʳᶦᵐᵉ ᵃᵖᵉⁿᵃˢ ᵃˢ ᵐᵉⁿˢᵃᵍᵉⁿˢ ʳᵉᶜᵉᵇᶦᵈᵃˢ ⁿᵒ ᶜᵒⁿˢᵒˡᵉ ᵉ ᵃᵈᶦᶜᶦᵒⁿᵃ ᵘˢᵘᵃ́ʳᶦᵒˢ ᵃᵒ ᵇᵃⁿᶜᵒ ᵈᵉ ᵈᵃᵈᵒˢ~",
			rowId: `${clave}encender atender`
		}, {
			title: "[ 🙉 Desativar ]",
			description: "~ᴼ ᵇᵒᵗ ᶜᵒᵐᵉᶜ̧ᵃʳᵃ́ ᵃ ᶜᵘᵐᵖʳᶦʳ ᵃˢ ᶠᵘⁿᶜ̧ᵒ̃ᵉˢ ˢᵒˡᶦᶜᶦᵗᵃᵈᵃˢ~",
			rowId: `${clave}apagar atender`
		}]
	}, {
		title: "[ ⬇️ AUTO - LER ]",
		rows: [{
			title: "[ 🤓 Ler ]",
			description: "~ᴼ ᵇᵒᵗ ᶜᵒᵐᵉᶜ̧ᵃʳᵃ́ ᵃ ᵐᵃʳᶜᵃʳ ᵒˢ ᶜʰᵃᵗˢ ᶜᵒᵐᵒ ˡᶦᵈᵒˢ~",
			rowId: `${clave}encender autoleer`
		}, {
			title: "[ 😵 Não leia ]",
			description: "~ᴼ ᵇᵒᵗ ⁿᵃ̃ᵒ ᵐᵃʳᶜᵃʳᵃ́ ᵒˢ ᶜʰᵃᵗˢ ᶜᵒᵐᵒ ˡᶦᵈᵒˢ~",
			rowId: `${clave}apagar autoleer`
		}]
	}, {
		title: "[ ⬇️ ANTI - PRIVADO ]",
		rows: [{
			title: "[ 💔 Ativar ]",
			description: "~ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᑫᵘᵉ ᶠᵃˡᵃʳᵉᵐ ᶜᵒᵐ ᵒ ᵇᵒᵗ ᵉᵐ ᵖᵃʳᵗᶦᶜᵘˡᵃʳ ˢᵉʳᵃ̃ᵒ ᵇˡᵒᑫᵘᵉᵃᵈᵒˢ~",
			rowId: `${clave}encender noprivado`
		}, {
			title: "[ ❤️ Desativar ]",
			description: "~ᴹᵒᵈᵒ ᵃⁿᵗᶦᵖʳᶦᵛᵃᵈᵒ ᵈᵉˢᵃᵗᶦᵛᵃᵈᵒ~",
			rowId: `${clave}apagar noprivado`
		}]
	}, {
		title: "[ ⬇️ ANTI - CRASH ]",
		rows: [{
			title: "[ 🐸 Ativar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵃ ᵖʳᵒᵗᵉᶜ̧ᵃ̃ᵒ ᶜᵒⁿᵗʳᵃ ᵐᵉⁿˢᵃᵍᵉⁿˢ ᵈᵉ ᵗʳᵃᵛᵃᵐᵉⁿᵗᵒ ⁿᵒ ᵂʰᵃᵗˢᴬᵖᵖ~",
			rowId: `${clave}encender antitraba`
		}, {
			title: "[ 👾 Desativar ]",
			description: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᵉˢᵃᵗᶦᵛᵃᵈᵒ~",
			rowId: `${clave}apagar antitraba`
		}]
	}, {
		title: "[ ⬇️ CHAT - BOT ]",
		rows: [{
			title: "[ 🗣️ Ativar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᵗᶦᵛᵃ ᵘᵐ ᶜʰᵃᵗᵇᵒᵗ ᵉᵐ ᵘᵐ ᵍʳᵘᵖᵒ ᵈᵒ ᵂʰᵃᵗˢᴬᵖᵖ~",
			rowId: `${clave}encender chatbot`
		}, {
			title: "[ 👤 Desativar ]",
			description: "~ᴰᵉˢᵃᵗᶦᵛᵃʳ ᶜʰᵃᵗᵇᵒᵗ ⁿᵒ ᵍʳᵘᵖᵒ ᵃᵗᵘᵃˡ~",
			rowId: `${clave}apagar chatbot`
		}]
	}, {
		title: "[ ⬇️ SUB - BOTS ]",
		rows: [{
			title: "[ 🌳 Ativar ]",
			description: "~ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵘˢᵘᵃ́ʳᶦᵒˢ ᵖᵒᵈᵉᵐ ˢᵉ ᵗᵒʳⁿᵃʳ ᵇᵒᵗˢ ᵗᵉᵐᵖᵒʳᵃ́ʳᶦᵒˢ~",
			rowId: `${clave}encender yesclabots`
		}, {
			title: "[ 🌱 Desativar ]",
			description: "~ᴼ ᶜᵒᵐᵃⁿᵈᵒ ᵖᵃʳᵃ ˢᵉʳ ᵘᵐ ᵇᵒᵗ ⁿᵃ̃ᵒ ᵖᵒᵈᵉ ˢᵉʳ ᵘˢᵃᵈᵒ~",
			rowId: `${clave}encender noesclabots`
		}]
	}, {
		title: "[ ⬇️ APENAS - ADMINISTRADOR ]",
		rows: [{
			title: "[ ⭐ Ativar ]",
			description: "~ᴬᵍᵒʳᵃ ᵃᵖᵉⁿᵃˢ ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵘˢᵃʳ ᵒ ᵇᵒᵗ~",
			rowId: `${clave}encender soloadmins`
		}, {
			title: "[ ✨ Desativar ]",
			description: "~ᴬᵍᵒʳᵃ ᵗᵒᵈᵒˢ ᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵒᵈᵉʳᵃ̃ᵒ ᵘˢᵃʳ ᵒ ᵇᵒᵗ~",
			rowId: `${clave}apagar soloadmins`
		}]
	}],
	Hrio: (a="", b="", c="", d="", e="", f="", g="", h="", i="", j="", k="", l="", m="", o="", p="", q="", r="", s="", t="", u="", v="", w="", x="") => `\`\`\`\n「 FUSO-HORÁRIO 🌎 」\n\n⌚Perú      : ${a}\n⌚Mexico    : ${b}\n⌚Bolivia   : ${c}\n⌚Chile     : ${d}\n⌚Argentina : ${e}\n⌚Colombia  : ${f}\n⌚Ecuador   : ${g}\n⌚Costa_Rica: ${h}\n⌚Cuba      : ${i}\n⌚Guatemala : ${j}\n⌚Honduras  : ${k}\n⌚Nicaragua : ${l}\n⌚Panama    : ${m}\n⌚Uruguay   : ${o}\n⌚Venezuela : ${p}\n⌚Paraguay  : ${q}\n⌚New York  : ${r}\n⌚Brasil    : ${s}\n⌚G.N.Q     : ${t}\n⌚España    : ${u}\n⌚Asia      : ${v}\n\`\`\`\n${masss}\nFuso horário atual do servidor:\n[ ${w} ]\n${x}`,
	Hcmd: (e = "") => ["Nenhum hashe encontrado!", "[ ! ] Você não tem permissão para remover este adesivo-cmd", "Sticker-cmd removido com sucesso ✓", "*LISTA DE HASH*", "*Identificador*", "Bloqueado", " *Função executável*", "Responda uma mensagem deste chat!", "Hash SHA256 ausente (adesivo)", "[ ! ] Hash não encontrado no banco de dados", "Concluído ✓", `Responda um adesivo com o comando : \n\n*${clave+e}*`, `Exemplo de uso:\n\n${clave+e} ${clave}menu\n`, "Você não tem permissão para fazer esta solicitação.", "Concluído com sucesso ✓"],
	Hnwa: (a="", b="") => [`Forneça um número, Exemplo de uso:\n\n${clave + a} 51991378xxx\n`, "Por favor, adicione 'x' no número fornecido", "São permitidos no máximo 3 'x'! :v", "*[ LISTA DE NÚMEROS NO WHATSAPP ]*\n\n*🟢 Números ativos:*\n" , "\n*🔴Números sem informação:*\n", "\n\n🧑‍💻 *Números sem conta de WhatsApp dentro do intervalo que você forneceu:*\n", `*🥏 Número:* wa.me/${a}\n*Bio:* Ei! Estou usando whatsapp.\n`, `*🪀 Número:* wa.me/${a}\n*Bio:* ${b}\n`],
	Hesc: () => ["Por favor, forneça um texto", "Máximo de 630 caracteres!"],
	Hfth: () => "O parâmetro *URL* deve começar com http:// ou https:// -.-",
	Hrco: (e = "") => [`Envie ou responda um vídeo ou imagem com o comando \n\n${clave+e}\n`, "[ ! ] Não foi possível recuperar um comentário."],
	Hsvf: (e = "") => [`*Com qual nome você deseja salvar o arquivo?*\n_Exemplo de uso_ : \n\n${clave+e} test-plugin.js\n`, "[_>] Por favor, responda a uma mensagem que contenha sintaxe.. .", `Arquivo *${e}* foi salvo com sucesso ✓`, `Mídia salva com sucesso em *${e}*`],
	Htdr: (e = "") => `Envie ou responda a um texto com o comando ${clave+e} <idioma> [texto], exemplo:\n\n${clave+e} pt Hello World\n`,
	Hfmp: () => ["Ainda estou trabalhando em uma solicitação pendente, aguarde sua vez :D", "Foi feito no FFmpeg"],
	Iclm: (o = "", e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "") => ["[ ! ] Enter city name", `[ TEMPO ]\n\n📆 Data: ${o}\n🌁 Cidade: ${e}\n🗺️ Fuso Horário: ${n}\n📄 Descrição : ${a}\n🌡️Temperatura: Mínimo ${i}ºC / Máximo ${r}ºC\n🎭 Sensação: ${t}\n🏞️ Pressão atmosférica: ${s}milibars\n💦 Umidade: ${d}% \n👁️ Visibilidade: ${u}msnm\n🌪️ Vento: Velocidade ${m}km/h\n☁️ Nuvens: ${$}%`],
	Igit: (o = "", e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "") => ["[ ! ] A conta do meu criador principal está atualmente suspensa, você pode fazer outra pesquisa no github ou apoiá-lo em https://gitlab.com/NeKosmic :D", `[ GITHUB-USER-🐱 ]\n\n🧿 ID : ${o}\n⚡ Usuário: < ${e} />\n🔥 Nome: ${n}\n🫂 Seguidores: ${a}\n🤝 Seguindo: ${i}\n🧰 Repositórios: ${r}\n🏗️ Empresa: ${t}\n🧑‍💻 Blog: ${s}\n🌎 Localização: ${d}\n📈 Data de criação: ${u}\n📉 Última atualização: ${m}\n📜 Biografia: ${$}`],
	Itkt: (e = "", k = "") => ["*[ ! ] Digite um nome de usuário válido...*", `Por favor, use apenas um apelido!\nExemplo de uso:\n\n${clave+e} nekosmic`, `${e.id?`🌐 ID: ${e.id}\n\n`:k.id?`🌐 ID: ${k.id}\n\n`:""}⚡ Usuário: ${e.usuario||k.usuario}\n\n🔥 Apelido: ${e.apodo||k.apodo}\n\n📜 Descrição: ${e.bio||k.bio}${e.verificado?"\n\n🎭 Verificado: "+(e.verificado?"🟢":"🔴"):k.verificado?"\n\n🎭 Verificado: "+(k.verificado?"🟢":"🔴"):""}${e.pais?`\n\n🌎 País: ${e.pais}`:k.pais?`\n\n🌎 País: ${k.pais}`:""}\n\n👥 Seguidores: ${e.seguidores||k.seguidores}\n\n🤝 Seguindo: ${e.siguiendo||k.siguiendo}${e.corazones?`\n\n💞 Corações: ${e.corazones}`:k.corazones?`\n\n💞 Corações: ${k.corazones}`:""}${e.videos?`\n\n🎞️ Vídeos: ${e.videos}`:k.videos?`\n\n🎞️ Vídeos: ${k.videos}`:""}\n\n⛓️ Link: https://www.tiktok.com/${e.usuario||k.usuario}\n`],
	Jtli: (e = "", n = "") => ["Você já está em uma sala ativa -.-", `*[ ! ] Digite um nome para criar uma nova sala*\n\nExemplo de uso: \n\n${clave+e} latam \n`, "rival encontrado! \nᴼ ᶦⁿᶦᶜᶦᵃᵈᵒʳ ᵈᵉᵛᵉ ᶦⁿᶦᶜᶦᵃʳ ᵒ ʲᵒᵍᵒ ᵈᶦᵍᶦᵗᵃⁿᵈᵒ ᵘᵐ ⁿᵘ́ᵐᵉʳᵒ ᵈᵉ ¹ ᵃ ⁹", "você tem que começar o jogo", "~Digite:~\n\n\nrendirse\n\n~para desistir~", `*[ ! ] Esperando pelo oponente*\npara entrar na partida use o comando ${clave+e} ${n}\n\n_Recompensa para o vencedor +4000 XP_\n`, "Game is over", "Invalid", " Invalid position", "Posição inválida", "Ganho!", "Fim de jogo, empate", "Virar para", "*Sala 3 online eliminada com sucesso ✓*"],
	Jcal: (e = "") => [`*[ ! ] Use bem o comando :*\n${clave+e} @tag|mensagem|resposta`, `*[ ! ] Adicione barras entre cada palavra todas juntas*\n\n_Exemplo de uso_ : \n${clave+e} @taggeduser|blessme|blessed\n~Não se esqueça de usar esta barra~ : " | "`, "Sem texto :v", " use 2 barras!!!\n\n@tag|mensagem|resposta ✓"],
	Jmts: (e = "", n = "", a = "") => [`*Modos disponíveis* : \n_${Object.keys(e).join("_\n_")}_\n*Exemplo de uso* : \n\n${clave+n} kinder\n`, `*[ ! ] Use um modo válido!*\n*Você pode usar um desses modos disponíveis* : \n_${Object.keys(e).join("_\n_")}_\n*`, "[ ! ] Ainda há perguntas não respondidas neste bate-papo", `¿Qual é o resultado de *${e}*?\n\n Tempo disponível: ${n} segundos\nRecompensa por resposta correta: ${a} XP`, `¡Acabou o tempo!\n\nA resposta é: ${e}\n`, "A questão já foi resolvida....", `*Resposta correta!*\nAqui está sua recompensa:\n+${e} XP\n`, `*[ ! ] Acabou o tempo*\nResponder: *${e}*`, `*Resposta incorreta!*\nVocê tem ${e} oportunidades restantes`],
	Jnij: (o = "") => ["Use um nome ou apelido...", `☯️ Nome Ninja para _${o}_:`],
	Jprj: (o = "", e = "") => [`❥ *Casal formado* :\n\n┏─━─━─━∞◆∞━─━─━─┓\n@${o} ❤️ @${e} \n┗─━─━─━∞◆∞━─━─━─┛\n`, `Isso foi possível graças a ${o}`],
	Jqun: (e = "") => [`*[ ! ] Invente um assunto*\n_Exemplo:_\n\n${clave+e} é gay :v?\n`, "*[ ! ] O assunto é muito curto*"],
	Jtgy: (o = "", e = "") => ["_Calculando porcentagem..._", "sua porcentagem gay é ", `@${o} é ${e} gay`, "*[ ! ] Limite gay excedido [ ! ]*"],
	Jtop: () => ["*[ ! ] Qual topo você deseja gerar?*", "*[ ! ] O texto é muito curto*"],
	Jtgs: (o = "", e = "", n = "", a = "") => [`*Jogador : @${o}*\n*[ Parabéns você ganhou!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${e}*\n*┃ ├────────┤ ┃*\n*${n} <==*\n*┃ ├────────┤ ┃*\n*${a}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Sua recompensa:* \n+50000 dinheiro`, `Jogador : @${o}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${e}\n┃ ├────────┤ ┃\n${n}\n┃ ├────────┤ ┃\n${a}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
	Lpdr: () => "Pasta  './tmp'  limpa com sucesso ✓",
	Menu: () => ["_CONVERSORES :_", "_ANIME :_", "_CMDS-CASUAL :_", "_CMDS OWNER :_", "_TOOLS :_", "_PREMIUM :_", "_ADVANCED :_", "_CMDS ADMINS :_ ", "_CMDS GRUPOS :_", "_ARTE E DESIGN :_", "_PESQUISA :_", "_SERVIÇOS :_", "_XP & LIMIT :_", "_RPG, JOGOS :_", "_HOBBY :_", "_SER SUB-BOT :_", "_OUTROS :_", "_Carregando menu..._ ", "(Limitado)", "(Premium)", "_COMMANDS_", "Tempo ativo:", "Versão de bot:", "Proprietário do bot:", "Prefixo único:", "Registrado:", "Cliente:", "Premium:", "Limite restante:", "Nível:", "Função:", "XP : ", "[ ! ] Ocorreu um erro no menu :/", "_SIMPLES-CRASHER :_", "_DOWNLOADER :_", "_SEARCH :_", "MENU +18"],
	Menp: (o = "") => `Olá @${o}! 👋`,
	Menl: () => [{
		title: "Menu-Simples 🌌",
		rows: [{
			title: "Funções-Básicas",
			description: "~ᴸᶦˢᵗᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ˢᶦᵐᵖˡᵉˢ~",
			rowId: `${clave}menusimple`
		}]
	}, {
		title: "Menu-Internet 🌐",
		rows: [{
			title: "Menu-Aleatório",
			description: "~ᴸᶦˢᵗᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ᵈᶦᵛᵉʳˢᵒˢ~",
			rowId: `${clave}randmenu`
		}]
	}, {
		title: "Menu-Artístico 🎨",
		rows: [{
			title: "Criar-Logos",
			description: "~ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᶜʳᶦᵃʳ ˡᵒᵍᵒᵗᶦᵖᵒˢ ᵉ ᵐᵘᶦᵗᵒ ᵐᵃᶦˢ~",
			rowId: `${clave}logofabrica`
		}]
	}, {
		title: "Menu-Otaku/Anime 🀄",
		rows: [{
			title: "Random-Anime",
			description: "~ᶜᵒᵐᵃⁿᵈᵒˢ ᵛᵃʳᶦᵃᵈᵒˢ ᵈᵉ ᴼᵗᵃᵏᵘ/ᴬⁿᶦᵐᵉ~",
			rowId: `${clave}mianime`
		}]
	}, {
		title: "Menu-Hentai/Anime 🥵",
		rows: [{
			title: "A-Bíblia",
			description: "~ᶜᵒᵐᵃⁿᵈᵒˢ ᴴᵉⁿᵗᵃᶦ⁻ᶜᵃʳᵗᵒᵒⁿˢ ⁺¹⁸~",
			rowId: `${clave}labiblia`
		}]
	}, {
		title: "Menu-completo ♻️",
		rows: [{
			title: "Principal",
			description: "~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~",
			rowId: `${clave}menucompleto`
		}]
	}],
	Mlti: (e = "") => ["Alteração automática de idioma", `*[NK-BOT MULTI-LANGUAGE]*\n \n🇵🇪\n*┣⊱ Idioma disponível Espanhol ☰*\n*┣━⊱* _Como ativar?, Exemplo:_ \n *┗━━⊱* ${clave+e} es\n🇺🇸\n*┣⊱ Idioma inglês disponível ☰*\n*┣━⊱* _Como ativar?, Exemplo:_\n*┗━━ ⊱* ${clave+e} en\n🇧🇷\n*┣⊱ Idioma disponível português ☰*\n*┣━⊱* _Como ativar?, Exemplo:_\n*┗━━⊱* ${clave+e} pt\n🇮🇩\n*┣⊱ Tersedia Bahasa Indonesia ☰*\n*┣━⊱* _Bagaimana cara mengaktifkannya?, Contoh:_\n*┗━━⊱* ${clave+e} id\n🌎\n *┣⊱ Multi idioma automático ☰*\n*┣━⊱* _Como ativar?, Exemplo:_\n*┗━━⊱* ${clave+e} auto\n\n\`\`\` [NOTA ] : Isso não afeta os comandos do bot\n\`\`\`\n\n@NeKosmic`],
	Nwqr: (e = "") => [`\n_Deseja gerar um novo código QR?, para gerar um novo código QR use o comando_\n\n${clave+e} continuar\n`, "\n_A sessão atual do bot foi excluída com sucesso, agora você pode gerar um novo código QR do console para escanear._\n"],
	Pntr: (o = "") => ["Que imagem você quer procurar no pinterest?", `*[ PINTEREST ] ✓*\nResultado para: _${o}_`],
	Pstr: (o = "", e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "") => ["O que você quer pesquisar na playstore?", `🔍 Resultado: ${o}\n🧬 Identificador: ${e}\n⛓️ Link: ${n}\n🖼️ Imagem: ${a}\n✍️ Desenvolvedor: ${i}\n📜 Descrição: ${r||t}\n💲 Moeda: ${s}\n🎭 Grátis: ${d}\n💸 Preço: ${u}\n📈 Pontuação: ${m}`],
	Rpga: (e = "", n = "", a = "", i = "") => [`Usar formato *${clave+e} [caixa] [valor]*\nExemplo de uso: \n\n${clave+e} ordinario 1\n\n📍Lista de caixas:`, `Seu *tipo de caixa ${e+n}* não é suficiente!, você tem ${a} tipo de caixa *${e+n}*\nuse o comando:\n\n${clave}comprar ${n} ${i}\n`, `Você abriu *${e}* caixa(s) do tipo ${n+a} e obteve:`, "Parabéns, você tem um item raro, que é:", "Parabéns, você tem um item épico, que é:"],
	Rpgv: (e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "", p = "", c = "", l = "", v = "") => [`Requer pelo menos 80 ❤️Health para aventura!!\npor favor compre ❤️Health primeiro, use o comando:\n\n${clave}comprar elixir <quantia>\n\n então:\n\n${clave}sanar < montante>\n`, `*[ ! ] Você já estava em uma aventura, por favor aguarde*\n🕐${e}...*\n`, "Fim da sua aventura 🎭", `\n\n🔖 _Você estava em ${e}, ${n} mas você tem:_\n`, `*[ AVENTURA 🌎 ]*\n\n> *País:* ${e}\n> *Código do país:* ${n}\n> *Número do edifício: * ${a} ${i}\n> *Chave da cidade:* ${r}\n> *Sufixo da cidade:* ${t}\n> *Comunidade:* ${s}\n> * Localização: * ${d}\n> *Id:* ${u}\n> *Estado:* ${m}\n> *Endereço:* ${$}\n> *Rua:* ${p}\n> *Sufixo da rua:* ${c}\n> *Fuso horário:* ${l}\n> *Código postal:* ${v}`],
	Rpge: () => ["você dormiu um dia inteiro", "você teve intoxicação alimentar por comer em um restaurante de má qualidade", "você perdeu seus pertences", "você teve que lutar contra um dragão", "você perdeu seus pertences", "você estava atacado por uma gangue", "você trabalhou como fazendeiro o dia todo", "você sofreu um ataque ao lado do seu cavalo", "você foi preso por calúnia", "você pagou seus impostos", "você foi atacado por um enxame de abelhas", "uma etapa ultrapassou um terremoto de magnitude 10", "você ficou perdido em uma floresta próxima por 24 horas", "você foi roubado em uma feira", "um dia inteiro de devassidão", "você perdeu em apostas ", "lutou uma batalha perigosa", "você foi escravizado"],
	Rpgr: (e = "", n = "", a = "", i = "", r = "") => [`Usar formato *${clave+e} [tipo] [página]*\nusage exemplo: \n\n${clave+e} nkoins 1\n\n📍Lista de tipos:`, `• *${e} page rank ${n} de ${a}* •\nVocê: *${i}* de *${r}*`],
	Rpgc: (e = "", n = "", a = "", i = "", r = "") => ["Seus limites estão cheios", `Você acabou de ultrapassar o limite predefinido de ${e} por usuário, que hacker você é :0`, `Você não pode comprar mais do que ${e} limite, seu limite atual é: ${n}`, `Usar formato *${clave+e} [item] [quantidade]*\nExemplo de uso: \n\n${clave+e} elixir 10\n \n📍Lista de itens:`, "Custo", "Valor", `Você não tem ${e} suficientes para comprar *${n}* ${a}.  Você precisa de *${i}* ${r} para poder comprar`, `Você comprou *${e}* ${n} ✓`, `Você não tem o suficiente *${e}* para vender , você só tem ${n} itens`, `Você vendeu *${e}* ${n} ✓`],
	Rpgd: (o = "") => `Você já reivindicou sua recompensa diária! Por favor, volte depois de *${o}.*`,
	Rpgi: (o = "", e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "") => `Inventário *${o}*\n\n${e}${n?`\n\n\n*📍Ferramentas*\n${n}`:""}${a?`\n\n\n*📍 Itens*\n${a}\n*🎒 Total de itens:* ${i} itens`:""}${r?`\n\n\n*📍 Caixas*\n${r}\n*🎒 Total de caixas:* ${t} Caixas`:""}${s?`\n\n\n*📍 Animais de estimação*\n${s}`:""}${d?`\n\n*⌚ Cooldowns*\n${d}`:""}\n`,
	Rpgm: (o = "") => `Você já reivindicou seu presente mensal, próximo resgate em *${o}.*`,
	Rpgs: (e = "", n = "") => ["Por favor, forneça uma quantia...!", "Seu ❤️saúde está cheio -.-", `Seu 🥤elixir não é suficiente, você tem *${e}*\nuse o comando\n\n${clave}comprar elixir ${n}\n`, `Você ganha *${e}* 🥤elixir(s)`],
	Rpgt: (e = "", n = "", a = "", i = "") => ["Você já está fazendo uma transferência!", `Use o formato ${clave+e} [tipo] [valor] [número]\nexample de uso:\n\n${clave+e} nkoins 9999 @51991378809\n\n 📍 Itens transferíveis:`, "Marque um usuário ou digite o número!!!", `Usuário *${e}* não encontrado no banco de dados -.-`, `Seu *${e}${n}* é menor que *${a}*`, `Tem certeza que deseja transferir *${e}* ${n}${a} para *@${i}*\n\n*Resposta:*\nsip \n_para confirmar _\n\n*Resposta:*\nnop\n_para rejeitar_\n\n\nVocê tem 60 segundos`, "Rejeitado", `Transferência bem-sucedida *${e}* ${n}${a} a *@${i}*`, `Erro ao transferir *${e}* ${n}${a} para *@${i}*`, "Tempo esgotado..."],
	Stke: (e = "") => ["Responder um adesivo do chat atual...", `Enviar ou responder um adesivo com o comando ${clave+e}`, "Conselho, remover seu adesivo para todos ;v", "[!] Responder um adesivo para get metadata", "[ ! ] Responda a um adesivo para dar um preço falso :p", "Responda a um adesivo para editar o EXIF ​​​​do seu jeito"],
	Stks: (e = "") => ["*[ ! ] A duração máxima do vídeo é de 8 segundos!*", `*[ ! ] Por favor, envie ou responda um vídeo ou uma imagem usando o comando ${clave+e}*\n_NOTE : duração do vídeo 1 a 8 segundos no máximo_ ✓`, "[ ! ] URL inválido, tente outro ;3"],
	Stkf: (e = "", n = "") => [`*Este comando é para obter adesivos de ${e?"Telegram":"Linha"}*\n\nExemplo de uso:\n${clave+n} anime`, `*Resultados encontrados para ~${e}~, total:* ${n}\n_Enviando figurinhas. . ._`],
	Stkw: (e = "") => [`Adicione o nome do pacote e o nome do autor, exemplo: \n\n${clave+e} pacote|autor\n`, "*[ ! ] A duração do vídeo é de 7 segundos no máximo...! !! *", `*[ ! ] Envie ou responda uma imagem ou vídeo usando o comando ${clave+e}*`, "[ ! ] URL inválido, tente outro ;3"],
	Snvl: (o = "", e = "", n = "", a = "", i = "") => [`[ ! ] Seu XP atual é menor que 0, você deve ${o} XP para continuar subindo de nível...`, `\n🪀 Nível Atual *${o} (${e}/${n})*\n 🔥 Você está perdendo *${a}* XP antes de subir de nível\n`, `Parabéns!  ${o}\nVocê acabou de subir de nível`, `\`\`\`${o}\`\`\`\n\n♻️ *Nível anterior* : ${e}\n🪀 *Novo nível* : ${n}\n⚔️ *Papel do cliente*: ${a}\n📆 *Data*: ${i}\n_Quanto mais você interagir com o bot, maior será seu nível_`],
	Uact: (e = "", n = "", a = "") => ["*Qual participante você deseja tornar administrador?*", `Exemplo de uso:\n\n${clave+e} @+51995...\n`, "Quem você deseja banir?", "[ ! ] Marque o usuário que deseja banir", `Usuário banido, ${e} não poderá mais usar o bot [ !  ]`, "*Qual administrador você deseja desbanir?*", "Quem você deseja desbanir?", `Usuário desbanido, ${e} pode usar o bot novamente [✓]`, `Por favor, marque ou mencione alguém !\n\nExemplo de uso:\n${clave+e} @${n}`, `*${e}* deixou de ser premium`, "Indique o número de dias", `Somente números !\n\nExemplo de uso:\n${clave+e} @${n} 51987...`, "[ ! ] Máximo de 7 dias", `*[ USUÁRIO PREMIUM ]*\n🔖 *Nome:* ${e}\n📆 *Dias:* ${n} dia(s)\n📉 *Tempo restante:* ${a}MS`],
	Ureg: (e = "", n = "", a = "", i = "", r = "", t = "", s = "") => ["Insira seu código de registro", "[ ! ] Código de registro incorreto", "[✓] Seu registro foi removido do banco de dados com sucesso 🗑️", `*[ ! ] Você já foi cadastrado em meu banco de dados*\nDeseja se cadastrar novamente?\nUse o comando: \n\n${clave}unreg <Código de Cadastro>\n`, "Nome e idade!?", `*[ ! ] Por favor, adicione uma barra entre o nome e a idade*\n\n" | "\n`, "*[ ! ] Na idade só aceitam números -.-*", "*[ ! ] Bruh o nome é muito longo ._.*", "*[ ! ] Idade máxima 30 anos* ", "*[ ! ] Idade mínima 13 anos*", "Pubescent", "Adolescente", "Jovem", "Adulto", "Informações:", `〘 *INSCRIÇÃO* 〙\n \n*❥ Data de inscrição* : \n_${e}._\n\n┏─━─━━─━─━━─━\n╠≽️ *Registro de usuário*: @${n} \n╠≽️ *Nome registrado*: ${a}\n╠≽️ *Data de Nascimento* : ${i}\n╠≽️ *De acordo com sua idade você é a(n)* : ${r}\n╠≽️ *Informações* : ${t}\n╠≽️ *Número* : wa.me/${n}\n┗─━─━━─━─━━─━\n\n_Código de registro_: ${s}.py \n\nⱽᵒᶜᵉ̂ ᵖᵒᵈᵉ ᶜᵒᵖᶦᵃʳ ˢᵉᵘ ᶜᵒ́ᵈᶦᵍᵒ ᵈᵉ ʳᵉᵍᶦˢᵗʳᵒ ʳᵉᵐᵒᵛᵉⁿᵈᵒ ᵒˢ ᵘ́ˡᵗᶦᵐᵒˢ ³ ᵈᶦ́ᵍᶦᵗᵒˢ`],
	Uban: (o = "", e = "") => ["Você me odeia? :,c", `*Participante @${o} foi removido do grupo ✓*\n_Ação executada por ${e}_`, "Qual usuário você deseja remover!?\nPor favor, marque um"],
	Unvl: (e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "") => [`[ ! ] Seu XP atual é menor que 0, você deve ${e} XP para continuar subindo de nível...`, `┏━━❉ *[ Nível ]* ❉━━━\n┣⊱ *Usuário* : @${e}\n┣⊱ *Registrado* : ${n?"Sim ("+a+")":"Não"} ${i>0?"\n┣⊱ *Última reivindicação:* "+r:" "}\n┣⊱ *Nome* : <${t}>\n┣⊱ *XP ganho até agora* : ${s}\n┣⊱ *Seu nível atual é* : ${d} ${u?` <Você pode subir de nível agora, use o comando ${clave}subirnivel>`:""}\n┣⊱ *De acordo com o nível que está* : ${m}\n┣⊱ *Progresso de nível* : ${$}\n┗━━━━━━━━━━━━━\n\n_Use o comando ${clave}inventario para visualizar seu inventário de RPG_\n`],
	Ulpr: (o = "", e = "", n = "", a = "") => [`*[ LIST - PREMIUM ]*\n\n*🌟 Cliente* : @${o}\n${e?"*⏳ Premium time* : ∞":n?`*⏳ Premium time* : _${a}._`:"*🚫 Não é mais um usuário premium!"}`, "*⭐ Usuário* :", "*⏳ Tempo Premium* :", "🚫 Expirado ---"],
	Upfl: (o = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "") => ["➢ Código de registro:", `💻 <[ PERFIL DO USUÁRIO]> 🌐\n\n⚡ |  INFORMAÇÕES DO USUÁRIO |\n➢ Nome: ${o}\n${n?"➢ Usuário Premium: Sim":"➢ Usuário Premium: Não"} ${a?"":`\n➢ Nome registrado: ${i}`} ${r<0?"":`\n➢ Idade: ${r}`} ${t<0?"":`\n➢ Data de Inscrição: ${s}`} ${d?u:""} ${m?"\n➢ É administrador: [✓]":"\n➢ É administrador: [X]"} ${$?"\n➢ Solicitação de: Um grupo":" \n➢ Solicitação de: chat privado"} ${masss}`, `➢ País: ${o} \n➢ Chave do país: ${n} \n➢ Origem do número: ${a||" Não encontrado u.u "}\n➢ Número do link: wa.me/${i} ${r?"\n➢ Número válido: [✓]":"\n➢ Número válido: [X]"} ${t?"\n➢ Dispositivo móvel: [✓]":"\n➢ Dispositivo móvel: [X]"} \n➢ Operador: ${s} \n➢ Tipo de linha: ${t} \n➢ Formato local: ${d} \n➢ Formato internacional: ${u} \n➢ Código do país: ${m}`, `➢ Número Link: wa.me/${o}`],
	Uwme: (o = "", e = "") => [`⚡ *LINKS DO SEU NÚMERO* ⚡\n\n*Solicitado por* : ${o} \n\n▪︎ *Seu link direto do whatsapp é* :\n\n▪︎ https://wa.me/${e}\n\n*Ou você pode usar este*\n\n▪︎ https://api.whatsapp.com/send?phone=${e}`, "Toque aqui para ver o comprovante do link", `https://wa.me/${o}?text=Olá+${e}%0D%0A%E1%B4%AE%CA%B8+%E1%B4%BA%E1%B4%B7`],
	Vrip: (o = "", e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "", $ = "", p = "", c = "", l = "", v = "", _ = "", g = "", A = "", E = "", I = "", b = "", f = "", P = "", x = "") => ["*[ ! ] Digite um endereço IP*", "*[ ! ] Use um endereço IP válido de classe (C) !*", "Não consegui encontrar nenhuma informação para este endereço IP ;-;", ` 🗺️ INFORMAÇÕES DO ENDEREÇO ​​IP\n🔖 Solicitado por: @${o}\n\n[ INFORMAÇÕES ]\n\`\`\`\n➢ Endereço IP: ${e}\n➢ Dispositivo móvel: ${n?"[✓]":"[X]"}\n➢ Continente: ${a}\n➢ Código do Continente: ${i}\n➢ País: ${r}\n➢ Código do país: ${t} \n➢ Nome da Região: ${s}\n➢ Código da Região: ${d}\n➢ Cidade: ${u}\n➢ Distrito: ${m||$}\n➢ Código Postal: ${p||$}\n➢ Latitude: ${c}\n➢ Longitude: ${l}\n➢ Fuso horário: ${v}\n➢ Offset: ${_}\n➢ Moeda local: ${g}\n➢ Provedor de Internet: ${A}\n➢ Organização: ${E}\n➢ Empresa: ${b||$} \n➢ DNS: ${f||$}\n➢ Servidor Proxy : ${P?"[✓]":"[X]"}\n➢ Hospedagem na Web : ${x?"[✓]":"[X]"}\n\`\`\``],
	Wgps: (o = "", e = "") => ["ᴺᵒᵗᵃ⁻ ˢᵉ ⁿᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵉ́ ᵖʳᵒᶦᵇᶦᵈᵒ ᶜᵒᵐᵖᵃʳᵗᶦˡʰᵃʳ ˡᶦⁿᵏˢ ˢᵉ ⁿᵉᶜᵉˢˢᵃ́ʳᶦᵒ• ᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵗᵉ̂ᵐ ᵗᵒᵈᵒ ᵒ ᵈᶦʳᵉᶦᵗᵒ ᵈᵉ ᵉˡᶦᵐᶦⁿᵃʳ ᵒ ᵇᵒᵗ", `${o} Quer adicionar seu grupo? :D?`, "Toque aqui ;3"],
	Wppr: (o = "", e = "") => ["Que papel de parede você deseja procurar?", `┏━⊱ Papel de parede: ${o}\n┗⊱ Solicitado por: @${e}`],
	Wkpd: (o = "", n = "") => ["Qual é a sua pesquisa na Wikipédia?", "[ ! ] Sem resultados para a sua pesquisa ;-;", `||  *WIKIPEDIA* ||\n_~> Resultados para: ${o}_\n${masss}\n${n}`],
	Ytbd: (o = "", e = "", n = "", a = "", i = "", r = "", t = "", s = "", d = "", u = "", m = "") => [`O que você deseja pesquisar no Youtube?, Exemplo de uso: \n\n${clave+o} o que é 1 + 1`, `*[ > ] Resultados do Youtube para:* _${o}_\n\n `, `🔖 Título: ${o}\n🧬 ID: ${e}\n⛓️ URL: ${n}\n🗜️ Tipo: ${a}\n🖼️ Miniatura: ${i}\n⌚ Duração: ${r}\n📜 Descrição: ${t}\n📆 Data de upload: ${s}\n👀 Visualizações: ${d}\n||\n⚡Autor: ${u}\n📺 Canal: ${m}\n\n*—————————*\n\n`]
};
/*
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
*/