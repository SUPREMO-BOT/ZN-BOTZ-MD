/**
</> https://gitlab.com/NeKosmic
**/
const clave = global.Prefijo,
	masss = String.fromCharCode(8206).repeat(850),
	saltos = "\n".repeat(400);
export default {
	Lengua: () => "es",
	Habla: () => "Idioma Español",
	AdLimite: e => `[ ! ] Te quedaste sin límites para usar algunas funciones T_T\nPuede comprar mas límites usando este comando:\n\n${clave}comprar\n`,
	AdNivel: (e, n) => `[ ! ] Necesitas tener el nivel *${e}* para comenzar a usar este comando\n\nTu nivel actual es ${n}\n`,
	SpamerNot0: e => `[ ! ] ${e} Por favor no sature al bot ;-;`,
	SpamerNot1: () => "_Espere unos segundos antes de usar otro comando..._ ✓",
	ErrorMsj: (e, n, a, o, i, r, t) => `*[ ! ] Se detecto un error en el bot:*\n\n📜 Plugin: ${e}\n😵 Cliente: wa.me/${n}\n🤳 Chat: ${a}\n🧩 Comando: ${o+i} ${r}\n\n\`\`\`${t}\`\`\` \n`,
	RestriN: () => "[ ! ] No se pudo eliminar al participante nuevo, por favor active el modo restringido!",
	AlertList: () => "[ ! ] Borre los números que inicien con   '1'   de global.FakeList en ./config.js ...!",
	WlcAdd: (e, a, o, i) => `⚡ *Bienvenid@ @${e} a este grandioso grupo* ${a}\n📆 *Fecha de ingreso | ${o}*\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${masss}\n${i}`,
	WlcRemove: (e, n) => `\`\`\`[!] C fue alv : @${e}\`\`\`\n_- Fecha de salida | ${n}_`,
	Gbay: () => "Adios... 🤧",
	WlcPromot: (e, n, f) => ["Un administrador", `*Felicidades @${e}!, @${f} te acaba de dar un gran poder, ahora eres admin del grupo* : _${n}_\n`, `~Ahora tengo el poder absoluto y me la pelan!~\n\n*Digo..., _Muchas gracias a @${e} por darme administración intentaré dar lo mejor de mi para este grupo!!!_ :D*`],
	WlcDemot: (e, n, f) => ["El administrador", `*@${f} acaba de degradar a @${e} ya no es administrador del grupo* : _${n}_`, "Shale, ya no soy administrador unu"],
	GpUp: (e = "") => ["🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\nAsunto nuevo: _${e}_\n`],
	DelMsj: (e, n, a) => `*[X] Mensaje ~eliminado~ [X]*\n\n*🧬 Tipo De Mensaje :* _${e}_\n*🚮 Usuario* : _@${n}_\n*📆 Fecha :* _${a}_\n`,
	CallNot: (e, n) => `\n*[ ! ] @${e} Seras bloqueado*\n_Razon : por realizar una ${n?"videollamada":"llamada"} a este numero sin autorizacion!_\n`,
	MsjRowner: () => "*[ ! ]* Este comando solo puede ser usado *desde el bot principal*!",
	MsjOwner: () => "*[ ! ]* Este comando solo puede ser utilizado por el *propietario del bot*!",
	MsjMods: () => "*[ ! ]* Este comando solo puede ser utilizado por un *moderador*!",
	MsjPremium: () => "*[ ! ]* Esta solicitud es solo para usuarios *premium*!",
	MsjGroup: () => "*[ ! ]* Este comando solo se puede usar en *grupos*!",
	MsjPrivate: () => "*[ ! ]* Este comando solo se puede usar por *chat privado*!",
	MsjAdmin: () => "*[ ! ]* Este comando solo puede ser usado por los *administradores del grupo*!",
	MsjBotAdmin: () => "*[ ! ]* El bot necesita *ser administrador* para usar este comando!",
	MsjUnreg: () => `*[ ! ]* Regístrese para comenzar a usar esta función\n\nEjemplo: ${clave}rg nombre|edad\n\n${clave}rg Juanito|15\n`,
	MsjRestrict: () => "[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!",
	Error0: () => "[ ! ] Error, vuelva a intentarlo mas tarde...",
	Error1: () => "[ ! ] Ocurrio un error inesperado u.u [ ! ]",
	Proces: e => `_Procesando, ${e} por favor espere..._`,
	Bsqd: e => `_Buscando, ${e} por favor espere..._`,
	Antlk1: e => ["[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo", "*[ ! ] Enlace detectado [ ! ]*\n\n_Por suerte no soy acmin, asi que no puedo hacer nada unu_", `*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${e} Adios..._\n`],
	Antlk2: e => "*[ ! ] Link detectado [ ! ]* " + (e ? "" : "\n\n_Por suerte no soy admin, asi que no puedo hacer nada :v_"),
	Antprv: () => `*[ ! ] El chat por privado esta prohibido [ ! ]*\nMi dueño por si necesita información : wa.me/${OwnerNum}\n\n_Adios..._`,
	Antrb: (e = "", n = "") => [`El administrador @${e} acaba de enviar un texto que contiene muchos caracteres -.-!`, "*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]* " + (e ? "" : `${saltos}\nNo soy administrador, no puedo hacer nada mas... :/`), `Marcar el chat como leido ✓\n${saltos}\n=> El número : wa.me/${e}\n=> Alias : ${n}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en dispositivos móviles`],
	Antvwc: e => `${e}\n\n*Mensaje multimedia para verse una sola vez, recuperado ✓*\n`,
	Autinf: (e, n) => `<[ ${NombreDelBot} ]>\nTiempo activo : ${e}${n?"|| No chats privados":""}`,
	Autlvl: (e = "", n = "", a = "", o = "") => `\nFelicidades, ${e} subiste de nivel!\n♻️ Nivel anterior : ${n}\n🪀 Nivel actual : ${a}\n⚔️ Rol : ${o}\n`,
	Fingp: () => "Expiró el tiempo para quedarme en el grupo\n\nC va epicamente*",
	Notpre: () => "[ ! ] Se acabó tu tiempo premium!\n_Espero que lo hayas disfrutado :3_\n",
	Afkpl: (n = "", a = "") => [`📲 *Dejaste de estar AFK después de ${n}.*\nBienvenid@ de vuelta!!! :D`, `📴 *El usuario mencionado actualmente esta ausente, tiempo transcurrido ${n}.*\n\n┏⊱ *Razon* \n┗━⊱ ${a}\n`, `Por favor diga su motivo para irse AFK\nEjemplo de uso :\n\n${clave+n} iré al baño :v`, "[ ! ] El motivo es muy corto", `*Se activo la función AFK exitosamente*\n\n➸ *Usuario*: ${n}\n➸ *Razon*: ${a}`],
	Afrs: (e = "", n = "", a = "") => `\n🎴 Anime : ${e}\n🀄 Personaje : ${n}\n🔖 Frase : ${a}\n`,
	Animg: (e = "", n = "") => `┏━⊱ Imagen : ${e}\n┗⊱ Solicitada por : @${n}`,
	Aninf: (n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "", $ = "", p = "", m = "", v = "", _ = "", g = "", A = "", b = "", E = "", I = "", f = "", h = "") => [`Que anime desea buscar?, ejemplo de uso:\n\n${clave+n} nichijou\n`, "No encontré resultados para su solicitud. Por favor, proporcione un título de anime más claro", `\n*🧬 ID:* ${n}\n*🟢 Aprobado:* ${o?"Si":"No"}\n*✍️ Títulos:* [ Global: ${i} ], [ Ingles: ${r||"-"} ], [ Japonés: ${t||"-"} ]\n*📆 Temporada:* ${p||"-"} ${m||"-"}\n*🪄 Tipo:* ${s}\n*🧩 Genero:* ${b}\n*🗃️ Episodio:* ${d}\n*🎭 Estado:* ${E}\n*⌚ Duración:* ${I}\n*♻️ Clasificación:* ${f}\n*📈 Puntaje:* ${u}\n*👍 Calificado por:* ${c}\n*⚡ Popularidad:* ${l}\n*❤️ Favoritos:* ${$}\n*📜 Sinopsis:* ${h}\n*📝 Dato:* ${v}\n*🔥 Productora:* ${_}\n*🪀 Licenciado por:* ${g}\n*🌟 Estudio:* ${A}\n*📺 Trailer:* ${a}\n`],
	Eat: () => `💻 *Redes sociales* 📲\n\n${masss+TusRedesSociales}\n\nᴺᵒ ᵖᶦᵈᵒ ᵈᶦⁿᵉʳᵒ⁻ ˢᵒˡᵒ ᶜᵒⁿ ᵗᵘ ᵃᵖᵒʸᵒ ˢᵒʸ ᶠᵉˡᶦᶻ  :³`,
	Boes: (e = "", n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "", $ = "", p = "", m = "", v = "", _ = "", g = "", A = "", b = "") => `${e?`*Grupo* : _[ ${n} ]_\n\n*Grupo baneado* : _${a?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${o?"[✓]":"[X]"}_`:""}\n\n*Bot usuario* : ${NombreDelBot}\n_${"@"+i}_\n\n*Bot* : _${opts.self?"MODO-PRIVADO [ ! ]":"MODO-PUBLICO [✓]"}_\n\n*Modo Restringido* : _${r?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Anti-Privado* : _${t?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Ser Sub-Bot* : _${s?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n${e?`\n*Modo Solo-Admins* : _${d?"Activo [✓]":"Inactivo [X]"}_\n\n*Bienvenida* : _${u?"Activo [✓]":"Inactivo [X]"}_\n\n*Antilink* : _${c?"Activo [✓]":"Inactivo [X]"}_\n\n*Antilink 2* : _${l?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Extranjeros* : _${$?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos* : _${p?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos 2* : _${m?"Activo [✓]":"Inactivo [X]"}_\n\n*Detección* : _${v?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Eliminar* : _${_?"Inactivo [X]":"Activo [✓]"}_\n\n*Antitraba* : _${g?"Activo [✓]":"Inactivo [X]"}_\n\n*Chat Bot* : _${A?"Activo [✓]":"Inactivo [X]"}_\n\n*Auto Nivel* : _${b?"Activo [✓]":"Inactivo [X]"}_`:""}\n`,
	Binf: (e = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "", $ = "", p = "", m = "", v = "", _ = "", g = "", A = "", b = "", E = "", I = "", f = "", h = "", R = "", S = "", T = "") => ["_Obteniendo información..._", `*~》INFORMACIÓN《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(activo)_\n➪ *Dueño actual* : _${Propietario}_\n➪ *Tiempo de ejecucion* : _${e}._\n➪ *Apodo en Whatsapp* : _${a}._\n➪ *Total de grupos* :  _${o}_\n➪ *Total de usuarios* : _${i}_\n➪ *Grupos activos* : _${r} / ${t}_\n➪ *Chats personales* : _${s}_\n➪ *Total de chats* : _${d} / ${u}_\n➪ *Hits globales* : _${c}_\n➪ *Version del bot* : _${BotVersion}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Total de plugins* : _${l}_\n➪ *Carpeta temporal* : _${$}_\n➪ *Base de datos* : _${p}_\n➪ *Versión NodeJs* : _${m}_\n➪ *Velocidad de procesamiento* : _${v} s_\n➪ *Velocidad de conexion* : _${_} ms_\n➪ *RAM:* _${g}_\n➪ *Plataforma* : _${A}_\n➪ *Versión* : _${b}_\n➪ *Base OS* : _${E}_\n➪ *Arquitectura* : _${I}_\n➪ *Host* : _${f}_ ${h}\n\n➫ _Consumo de memoria :_\n${R} ${""==S?"":`\n➫  _Uso total de CPU:_\n${S}\n➫ _CPU Core(s) Usado_ ${T}`}\n\n┗─━─「 ✵ 」━─━─┛`],
	Bscp: () => [`*🛑 Antes de continuar con su lectura, tenga en cuenta los siguientes requisitos:*\n- _Tener 2 dispositivos cerca de usted, muy importante!_\n- _Tener 200MBS de almacenamiento libre en su dispositivo_\n- _Tener instalado Termux.apk_\n- _Tener una buena conexión a internet_\n- _Por último y mas importante, tener paciencia_ :v\n\n\n*[_>] Comandos para ejecutar en termux.apk desde 0* :\n\n*1.-* cd\n*2.-* termux-setup-storage ~[ Primero otorgamos permiso a nuestro almacenamiento(memoria) ]~\n*3.-* termux-change-repo ~(Opcional) [ Seleccionan todas las opciones que les aparescan en la primera ventana || En la segunda ventana seleccionan la opcion que contenga las palabras "termux.mentality.rip" ]~\n\n*[_>] Instalado packs 7w7r, por favor hacerlo uno por uno :D*\n\n*1.* apt-get update -y && apt-get upgrade -y\n*2.* pkg install git\n*3.* pkg install nodejs\n*4.* pkg install libwebp -y\n*5.* pkg install ffmpeg -y\n*6.* pkg install imagemagick -y\n*7.* pkg install yarn\n*8.* git clone https://gitlab.com/NeKosmic/nk-bot-md\n*9.* cd nk-bot-md\n*10.* yarn\n*11.* npm start\n*12.* Ve a tu movil, abre la aplicación de WhatsApp, toca los 3 puntos en la parte superior derecha de tu pantalla y selecciona "dispositivos vinculados" luego en "vincular un dispositivo", Ahora regreso a la aplicación termux.apk, Solo escanea el código QR que aparecera en la pantalla y listo ya podras usar al bot, recuerda que requieres usar de los dispositivos indicados al principio de este texto ;3\n\n\`\`\`El bot también se puede ejecutar en hosts o maquinas virtuales...\`\`\`\n\n</Scripts del bot>\n• https://youtu.be/Tk9Pitk1_oM (Leer la descripción)\n• https://gitlab.com/NeKosmic/nk-bot-md/-/forks/new (Git)\n• https://replit.com/@NeKosmic/NK-BOT-MD (Demo)\n• https://github.com/NeKosmic/NK-BOT-MD (Funado)\n\nNecesitas mas ayuda?, comunicate con mi creador:`, "Modo Demo Temporal"],
	Bunt: (e = "", n = "") => ["Y el enlace de WhatsApp?", "[ ! ] Error, El enlace no funciona o es inválido", `[ ! ] La cantidad mínima para unirme al grupo debe ser de *${MinimoDeUsuarios}* participantes`, `${NombreDelBot} se unió al grupo ${e} con éxito \n${n?`Durante ${n} Hora(s)`:""}`],
	Csim: () => ["No hay sistema!", "Por favor, sea mas específico en su mensaje", "Y el mensaje?"],
	Cimg: (n = "") => [`*Responda un sticker usando el comando*:\n\n${clave+n}\n`, "[ ! ] Solo stickers estáticos"],
	Cmp3: (n = "") => [`Envie ó Responda un (video/audio grabado) con el comando:\n\n${clave+n}`, "No se pudo convertir a audio", "🎞️ Convertido a audio 🎶"],
	Cptt: (n = "") => [`Envie ó Responda un (video/audio) con el comando:\n\n${clave+n}`, "No se pudo convertir a grabacion", "🎤 Convertido a grabación 🎶"],
	Ctxt: () => ["Por favor proporcione un texto", "*[_>] Estilos de texto para:*"],
	Caiu: (n = "") => `Envie o responda un texto, ejemplo de uso:\n\n${clave+n} lenguaje inclusivo\n`,
	Clgs: (n = "", a = "", o = "") => [`*[ ! ] Use el formato correcto!* :\n\n🖼️ ~Para logos con texto continuo~\n[1]  ${clave+n} (efecto) (texto...), _Ejemplo de uso:_\n\n${clave+n} space NeKosmic\n\n🖼️ ~Para logos con texto separados por una linea vertical~\n[2]  ${clave+n} (efecto) (texto1)|(texto2), _Ejemplo de uso:_\n\n${clave+n} Pornhub-Style-Logo NK-|BOT\n\n🖌️ Que logo desea crear?, aqui tiene una lista de efectos:\n\n🎨 ${clave+n} `, `[ ! ] El efecto *${n}* no se encuentra en la lista...`, `[ ! ] El efecto *${n}* no se encuentra en la lista, por favor escriba ó use bien el formato...`, `[ ! ] Por favor escriba ó use bien el formato, ejemplo de uso: ${clave+n} ${a}`, `*┏━❪CREA-LOGOS❫━*\n*┃*\n*┣ Diseño* : _${n}_\n*┃*\n*┣ Texto* : _${a}_\n*┃*\n*┣ Fecha de Creación* : _${o}_\n*┃*\n*┗❪ Text-Pro ❫━*`],
	Cgod: () => ["Otakus Tecnológicos", "Creador Principal", "Dueño actual", "Que setsi eres"],
	Dfbv: (n = "") => ["Y el link...?", "*[ ! ] Y el link de facebook?*", `*[ ! ] Link inválido*\n_Por favor use un Link válido de un vídeo de Facebook_\n\nEjemplo de uso: ${clave+n} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Error puede que el link sea inválido o el vídeo sea privado, vuelva a intentarlo mas tarde"],
	Dgit: (n = "") => [`Por favor use una URL de github, ejemplo:\n${clave+n} https://github.com/adiwajshing/Baileys`, "Cuenta de github baneada, por favor use otra URL", "[ ! ] URL de github inválido"],
	Dmdf: (e = "", n = "", a = "", o = "", i = "", r = "") => ["*[ ! ] Y el Link de mediafire?*", "*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_", `*Nombre:* ${e}\n*Tamaño:* ${n}\n*Extensión:* ${a}\n*Fecha de subida:* ${o}\n*Tipo de archivo :* ${i}\n*Url :* ${r}`],
	Dtkv: (n = "") => ["*[ ! ] Y el Link de tiktok?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${clave+n} https://vm.tiktok.com/ZMYmRWCo2/`],
	Dyta: (n = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${clave+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n", "[ ! ] El audio pesa demasiado, lo siento no podre enviarlo..."],
	Dyau: (n = "", a = "", o = "", i = "", r = "", t = "", s = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${clave+n} mtc s3rl`, `🔍 Resultado encontrado para: ${n}\n${a?`✍️ Titulo: ${a}\n⏳ Duracion: 1:23 ━━━━●───────── ${o}\n👀 Vistas: ${i}\n📝 Autor: ${r}\n📜 Descripción: ${t}\n⛓️ URL: ${s}\n\n\`\`\`Enviando audio, espere...\`\`\``:""}`],
	Dytv: (n = "", a = "") => [`Que video desea descargar de Youtube?, Ejemplo de uso: \n\n${clave+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de un video de YouTube_\n", "[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v", `Titulo: ${n}\nTamaño: ${a}\nExtencion: .mp4`],
	Dylt: () => ["*[ > ] Descargar Audio*", "*[ > ] Descargar Video*", "_Opción 1_", "_Opción 2_", "_Opción 3_", "Seleccione una opción "],
	Dpl1: (n = "", a = "", o = "", i = "") => [`Indique el titulo del audio para descargar de Youtube, Ejemplo de uso: \n\n${clave+n} mtc s3rl`, `_Por favor espere ${n}antes de realizar otra solicitud_ \n~ᴱˡ ᵗᶦᵉᵐᵖᵒ ᵈᵉ ᵉˢᵖᵉʳᵃ ᵈᵉᵖᵉⁿᵈᵉ ᵈᵉ ˡᵃ ᵈᵘʳᵃᶜᶦᵒ́ⁿ ᵈᵉˡ ᵃᵘᵈᶦᵒ ᵃⁿᵗᵉʳᶦᵒʳᵐᵉⁿᵗᵉ ˢᵒˡᶦᶜᶦᵗᵃᵈᵒ~`, `*✍️ Título:* ${n}\n*🎹 Autor:* ${a}\n*🗜️ Tamaño:* ${o+" Aprox."}\n*⏳ Duración:* ${i}\n\n\n\n _Enviando audio, espere..._`, `Ocurrio un error, por favor use el comando:\n\n${clave}audio ${n}\n`],
	Dpl2: (a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "") => [`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${clave+a} The prophet wanna play?`, "[ ! ] Sin resultados, vuelva a intentarlo...", `✍️ Titulo : ${a}\n⚡ Autor : ${o}\n⏰ Duracion : ${i}\n👀 Vistas : ${r}\n📆 Fecha de subida : ${t}\n📺 Canal : ${s}\n📃 Descripcion : ${d||"-"}\n🧬 ID : ${u}\n\n🧑‍💻 _Puedes usar los siguientes comandos para descargar_${masss}\n\n┌ Audio -\n│┌  ${clave}ytmp3 ${c}\n└┼  ${clave}yta ${c}\n   └  ${clave}ytabochi ${c}\n\n┌ Video -\n│┌  ${clave}ytmp4 ${c}\n└┼  ${clave}ytv ${c}\n   └  ${clave}ytvbochi ${c}\n`],
	Efau: (n = "") => `Envie ó Responda un audio/nota de voz, con el comando \n\n${clave+n}\n`,
	Eper: (e = "", n = "") => `*┏━> Efecto de perfil* : _${e}_\n*┗> Solicitado para* : _@${n}_`,
	Evid: (n = "", a = "") => [`┏━━⊱ ${n} \n┗⊱ By ${a}`, `Envie ó Responda un vídeo, con el comando \n\n${clave+n}\n`],
	Excc: () => ["El comando contiene caracteres no permitidos", "_Ejecutando..._"],
	Gemx: (n = "") => `Ejemplo de uso : ${clave+n} 🥺+🥵`,
	Gimg: (e = "", n = "", a = "") => ["Que desea buscar en Google imágenes?", "[ ! ] Sin resultados", `*[ GOOGLE-CHAN ] ✓*\n*~> Resultado para* : _${e}_\n*~> Tamaño* : _${n} x ${a} PX_`],
	Gtts: (n = "") => ["Maximo de caracteres 600", `*[ ! ] Por favor, despues de usar el comando ${n}, tiene que agregarle el prefijo del idioma en el cual desea escuchar el audio* \n`, `Ejemplo de uso:\n\n${clave+n} es hola\n\n-> "es" = prefijo español\n--\x3e "hola" = texto\n`, `*[ idiomas disponibles ]* :${masss}\n\`\`\`\n  'af': 'Africano',\n  'sq': 'Albanes',\n  'ar': 'Arabico',\n  'hy': 'Armenio',\n  'ca': 'Catalan',\n  'zh': 'Chino',\n  'zh-cn': 'Chino (Mandarin/China)',\n  'zh-tw': 'Chino (Mandarin/Taiwanes)',\n  'zh-yue': 'Chino (Cantones)',\n  'hr': 'Croata',\n  'cs': 'Checo',\n  'da': 'Danes',\n  'nl': 'Holandes',\n  'en': 'Ingles',\n  'en-au': 'Ingles (Australia)',\n  'en-uk': 'Ingles (Reino unido)',\n  'en-us': 'Ingles (Estados unidos)',\n  'eo': 'Esperanto',\n  'fi': 'Finlandes',\n  'fr': 'Frances',\n  'de': 'Aleman',\n  'el': 'Griego',\n  'ht': 'Criollo haitiano',\n  'hi': 'Hindio',\n  'hu': 'Hungaro',\n  'is': 'islandes',\n  'id': 'Indonesio',\n  'it': 'Italiano',\n  'ja': 'Japones',\n  'ko': 'Koreano',\n  'la': 'Latino',\n  'lv': 'Leton',\n  'mk': 'Macedonio',\n  'no': 'Noruego',\n  'pl': 'Polaco',\n  'pt': 'Portugues',\n  'pt-br': 'Portugues (Brazil)',\n  'ro': 'Rumano',\n  'ru': 'Ruso',\n  'sr': 'Serbio',\n  'sk': 'Slovaco',\n  'es': 'Español',\n  'es-es': 'Español (España)',\n  'es-us': 'Español (Estados Unidos)',\n  'sw': 'Swahili',\n  'sv': 'Sueco',\n  'ta': 'Tamil',\n  'th': 'Tailandes',\n  'tr': 'Turco',\n  'vi': 'Vietnamita',\n  'cy': 'Gales'\n\`\`\``],
	Gbqd: (e = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "") => ["Que desea buscar en Google?", "[ ! ] Sin resultados", `〘  *GOOGLE* 〙\n_~> Resultados para : ${e}_\n\n🔖 Titulo: ${a}\n📜 Descripcion: ${o}\n⛓️ Url: ${i}\n🖼️ Imagen: ${r+`\n🔍 Busquedas relacionadas:\n- ${t}`}\n${s?"":`\n🌐 Mas información: ${masss+d}`}\n`],
	Gadm: (e = "", n = "") => `*Administradores del grupo* : ${e}\n\n*Total* : \n\n${n}\n`,
	Gbnd: () => ["Chat baneado correctamente ✓", "Chat desbaneado correctamente ✓"],
	Gpbc: (e = "", n = "") => ["[ ! ] Y el mensaje que desea transmitir?", `Enviando transmisión a ${e} grupo(s), en aproximadamente ${n} segundo(s)`],
	Gcea: (n = "", a = "") => [`*En que tiempo desea cerrar el grupo?*\n\n_Ejemplo de uso_ : \n${clave+n} 10 segundos`, `*El grupo se cerrará en ${n}*\n_Accion ejecutada por : @${a}_`],
	Gdes: () => ["*[ ! ] Ingrese un texto con el cual se actualizará la descripción del grupo actual*", "*[ ! ] Máximo de carácteres 512*"],
	Gnme: () => ["*[ ! ] Ingrese un titulo/nombre/apodo con el cual se actualizará el asunto del grupo actual*", "*[ ! ] máximo de carácteres es 25*"],
	Gtag: (e = "") => `${e||"ˢᵉˣʸ ᵉˡ ᑫᵘᵉ ˡᵒ ˡᵉᵃ ⁷ʷ⁷"}`,
	Ginf: (e = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "") => `*Nombre del grupo* : ${e}\n*Creado por* : _${a||"[ ! ] Número del creador principal del grupo no encontrado"}_\n*Fecha de creación* : _${o}_\n*Total de participantes* : _${i}_\n*Total de administradores* : _${r}_\n${t}\n*No administradores* : _${s}_\n*ID del grupo* : _${d}_\n*Descripción* : \n${masss}\n${u||""}\n`,
	Ginv: (e = "", a = "", o = "", i = "") => `*[ ! ] Invocando a los integrantes del grupo* :\n${e}\n\n*~> Invocador* : _@${a}_\n*~> Mensaje* : _${o||"No hay :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${i.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n`}\n╚═══════════\n`,
	Glis: (e = "") => ["Fuera del grupo", "Dentro del grupo", `*Grupos con mayor actividad de ${NombreDelBot} actualmente:*\n\n${e}`],
	Gvts: (a="", b="", c="", d="", e="", f="") => ["Votacion reiniciada correctamente ✓",`*[ ! ] Aun no hay una votación activa en este grupo*\n_Para crear una nueva votacion use el comando_ ${clave}votacion`,"*[ ! ] No puedes volver a votar*",`\`\`\`[ VOTACIÓN ]\`\`\`\n\n📋 *Razon:* ${a}\n✍️ *Votante:* ${b}\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n${c}\n┗━━⊱ Total: ${e}\n\n📝\n┣👥\n┣━⊱ Votos en contra [X]\n${d}\n┗━━⊱ Total: ${f}\n\n┌ Si Votar ✔️\n└―  ${clave}sivotar\n\n┌ No Votar ❌\n└―  ${clave}novotar`,`\`\`\`[ VOTOS ACTUALES ]\`\`\`\n\n📋 *Razon:* ${a} <=\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n${b}\n┗━━⊱ Total: ${d}\n\n📝\n┣👥\n┣━⊱ Votos en contra [X]\n${c}\n┗━━⊱ Total: ${e} \n${f?`\nUse el comando ${clave}reiniciarvotos para reiniciar la votacion ✓`:""}`,`*[ ! ] Aun hay una votacion activa en el grupo*\n_Use el comando_ : ${clave}reiniciarvotos _para crear una nueva votacion_`,`*Ingrese un motivo para la votacion, ejemplo:*\n\n${clave+a} el admin es god?\n`,"El motivo para la votación es muy corta se creativ@!",`⚡ ${a} *Comenzó una nueva votacion en el grupo:* ${b}\n\n_Como participar en la votación :_${masss}\n\n┏⊱   ${clave}sivotar\n┗━⊱  Para dar un voto positivo ✔️\n\n┏⊱   ${clave}novotar \n┗━⊱  Para dar un voto negativo ❌\n\n┏⊱   ${clave}vervotos \n┗━⊱  Para verificar los votos 👀\n\n┏⊱   ${clave}reiniciarvotos \n┗━⊱  Para eliminar una votacion activa ♻️`,`\`\`\`[ VOTACIÓN ]\`\`\`\n\n📋 *Razon:* ${a}\n👤 *Encuestador:* ${b}\n\n📝\n┣🫂\n┣━⊱ Votos a favor [✓]\n┋\n┗━━⊱ Total: ${c}\n\n📝\n┣👥\n┣━⊱ Votos en contra [X]\n┋\n┗━━⊱ Total: ${d}`],
	Gadd: (e = "") => ["Active el modo restringido para realizar esta acción", `*[ ! ] Error, no se pudo añadir a @${e} al grupo*\n\n_Por favor enviale un enlace de invitación manualmente wa.me/${e}_\n`],
	Hblt: (e = "", n = "", a = "", o = "", i = "") => [`\n@${e} ${n?"activó":"desactivó"} *${a}* exitosamente ${o?"para este bot":i?"":"para este chat"}\n`, "Aqui tiene la lista de opciones :3", "Opcion", "Descripción:", "Comando:"],
	Hblr: () => [{
		title: "[ ⬇️ BIENVENIDA AUTOMÁTICA ]",
		rows: [{
			title: "[ 🛬 Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}encender bienvenida`
		}, {
			title: "[ 🛫 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar bienvenida`
		}]
	}, {
		title: "[ ⬇️ DETECCIÓN ]",
		rows: [{
			title: "[ 🌕 Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}encender deteccion`
		}, {
			title: "[ 🌑 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ́ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar deteccion`
		}]
	}, {
		title: "[ ⬇️ ANTI - ELIMINADO ]",
		rows: [{
			title: "[ ♻️ Activar ]",
			description: "~ᵀᵒᵈᵒ ᵐᵉⁿˢᵃʲᵉ ᵉˡᶦᵐᶦⁿᵃᵈᵒ ˢᵉʳᵃ́ ʳᵉᶜᵘᵖᵉʳᵃᵈᵒ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",
			rowId: `${clave}encender antieliminar`
		}, {
			title: "[ 🗑️ Desactivar ]",
			description: "~ᴸᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ ⁿᵒ ˢᵉʳᵃ́ⁿ ʳᵉᶜᵘᵖᵉʳᵃᵈᵒˢ~",
			rowId: `${clave}encender eliminar`
		}]
	}, {
		title: "[ ⬇️ USAR - DOCUMENTOS ]",
		rows: [{
			title: "[ 🗃️ Activar ]",
			description: "~ˢᵉ ᵃᶜᵗᶦᵛᵃʳᵃ́ ᵉˡ ᵘˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ~",
			rowId: `${clave}encender document`
		}, {
			title: "[ 🗳️ Desactivar ]",
			description: "~ᵁˢᵒ ᵈᵉ ᵈᵒᶜᵘᵐᵉⁿᵗᵒˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒˢ ᵖᵃʳᵃ ᵉˡ ᵇᵒᵗ~",
			rowId: `${clave}apagar document`
		}]
	}, {
		title: "[ ⬇️ MODO DE USO ]",
		rows: [{
			title: "[ 🏬 Público ]",
			description: "~ᴹᵒᵈᵒ ᵖᵘᵇˡᶦᶜᵒ ᵃᶜᵗᶦᵛᵃᵈᵒ ᵃʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵖᵒᵈʳᵃⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
			rowId: `${clave}encender publico`
		}, {
			title: "[ 🏡 Privado ]",
			description: "~ᴹᵒᵈᵒ ᵖʳᶦᵛᵃᵈᵒ ᵃᶜᵗᶦᵛᵃᵈᵒ ᵃʰᵒʳᵃ ˢᵒˡᵒ ᵉˡ ᵈᵘᵉⁿ̃ᵒ ᵈᵉˡ ᵇᵒᵗ ᵖᵒᵈʳᵃ ᵘˢᵃʳˡᵒ~",
			rowId: `${clave}apagar publico`
		}]
	}, {
		title: "[ ⬇️ ANTI - EXTRANJEROS ]",
		rows: [{
			title: "[ 🏳️ Activar ]",
			description: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵈᶦˢᵗᶦⁿᵗᵒˢ ᵃˡ ᵖʳᵉᶠᶦʲᵒ ᵈᵉˡ ᵖʳᵒᵖᶦᵉᵗᵃʳᶦᵒ~\nᴸᵒˢ ⁿᵘ́ᵐᵉʳᵒˢ ᑫᵘᵉ ᶜᵒᵐᶦᵉⁿᶻᵉⁿ ᶜᵒⁿ +" + PaisPrefix + " ⁿᵒ ˢᵉʳᵃ́ⁿ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ",
			rowId: `${clave}encender antiextranjeros`
		}, {
			title: "[ 🏴 Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᴬⁿᵗᶦᵉˢᵗʳᵃⁿʲᵉʳᵒˢ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar antiextranjeros`
		}]
	}, {
		title: "[ ⬇️ ANTI - FAKES 1 ]",
		rows: [{
			title: "[ 🛡️ Activar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵉˢᵗᵃᵈᵒᵘⁿᶦᵈᵉⁿˢᵉˢ ⁺¹~",
			rowId: `${clave}encender antifake1`
		}, {
			title: "[ ⚰️ Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar antifake1`
		}]
	}, {
		title: "[ ⬇️ ANTI - FAKES 2 ]",
		rows: [{
			title: "[ 🛡️ Activar ]",
			description: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᶠᵃˡˢᵒˢ ᵒ ᵛᶦʳᵗᵘᵃˡᵉˢ~",
			rowId: `${clave}encender antifake2`
		}, {
			title: "[ ⚰️ Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}apagar antifake2`
		}]
	}, {
		title: "[ ⬇️ ANTI - LINK ]",
		rows: [{
			title: "[ 🗡️ Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉ ᵘⁿ ᵉⁿˡᵃᶜᵉ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
			rowId: `${clave}encender antilink`
		}, {
			title: "[ 😴 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ᵉⁿˡᵃᶜᵉˢ~",
			rowId: `${clave}apagar antilink`
		}]
	}, {
		title: "[ ⬇️ ANTI - LINK 2 ]",
		rows: [{
			title: "[ 🗡️ Activar ]",
			description: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
			rowId: `${clave}encender antilink2`
		}, {
			title: "[ 😴 Desactivar ]",
			description: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
			rowId: `${clave}apagar antilink2`
		}]
	}, {
		title: "[ ⬇️ AUTO - NIVELEAR ]",
		rows: [{
			title: "[ 👑 Activar ]",
			description: "~ᴸᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ᵖᵒᵈʳᵃⁿ ᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃᵐᵉⁿᵗᵉ~",
			rowId: `${clave}encender autolevelup`
		}, {
			title: "[ 🎓 Desactivar ]",
			description: "~ᴸᵒˢ ᵘˢᵘᵃʳᶦᵒˢ ʸᵃ ⁿᵒ ᵖᵒᵈʳᵃⁿ ᵃ ˢᵘᵇᶦʳ ᵈᵉ ⁿᶦᵛᵉˡ~",
			rowId: `${clave}apagar autolevelup`
		}]
	}, {
		title: "[ ⬇️ MODO RESTRINGIDO ]",
		rows: [{
			title: "[ 🌚 Activado ]",
			description: "~ᴬᶜᵗᶦᵛᵃ ˡᵃ ᶠᵘⁿᶜᶦᵒ́ⁿ ᵖᵃʳᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵍʳᵘᵖᵒˢ⁽ᴺᵒ ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
			rowId: `${clave}encender restringir`
		}, {
			title: "[ 🌝 Desactivado ]",
			description: "~ᴬᶜᶜᶦᵒⁿᵉˢ ᵈᵉ ᵉˡᶦᵐᶦⁿᵃʳ ʸ ᵃᵍʳᵉᵍᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵃ⁽ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
			rowId: `${clave}apagar restringir`
		}]
	}, {
		title: "[ ⬇️ MODO SIN BOT ]",
		rows: [{
			title: "[ 🙈 Activar ]",
			description: "~ˢᵒˡᵒ ᶦᵐᵖʳᶦᵐᵉ ˡᵒˢ ᵐᵉⁿˢᵃʲᵉˢ ʳᵉᶜᶦᵇᶦᵈᵒˢ ᵉⁿ ᶜᵒⁿˢᵒˡᵃ ʸ ᵃᵍʳᵉᵍᵃ ᵘˢᵘᵃʳᶦᵒˢ ᵃ ˡᵃ ᵇᵃˢᵉ ᵈᵉ ᵈᵃᵗᵒˢ~",
			rowId: `${clave}encender atender`
		}, {
			title: "[ 🙉 Desactivar ]",
			description: "~ᶜᵒᵐᵉⁿᶻᵃʳᵃ́ ᵃ ᶜᵘᵐᵖˡᶦʳ ᶜᵒⁿ ˡᵃˢ ᶠᵘⁿᶜᶦᵒⁿᵉˢ ˢᵒˡᶦᶜᶦᵗᵃᵈᵃˢ~",
			rowId: `${clave}apagar atender`
		}]
	}, {
		title: "[ ⬇️ AUTO - LEER ]",
		rows: [{
			title: "[ 🤓 Leer ]",
			description: "~ᴱˡ ᵇᵒᵗ ᶜᵒᵐᵉⁿᶻᵃʳᵃ́ ᵃ ᵐᵃʳᶜᵃʳ ˡᵒˢ ᶜʰᵃᵗˢ ᶜᵒᵐᵒ ˡᵉᶦ́ᵈᵒˢ~",
			rowId: `${clave}encender autoleer`
		}, {
			title: "[ 😵 No-Leer ]",
			description: "~ᴱˡ ᵇᵒᵗ ⁿᵒ ˡᵉᵉʳᵃ́ ˡᵒˢ ᶜʰᵃᵗˢ~",
			rowId: `${clave}apagar autoleer`
		}]
	}, {
		title: "[ ⬇️ ANTI - PRIVADO ]",
		rows: [{
			title: "[ 💔 Activar ]",
			description: "~ᴬʰᵒʳᵃ ᵗᵒᵈᵒ ᵃᑫᵘᵉˡ ᑫᵘᵉ ʰᵃᵇˡᵉ ᵃˡ ᵇᵒᵗ ᵖᵒʳ ᵖʳᶦᵛᵃᵈᵒ ˢᵉʳᵃ ᵇˡᵒᑫᵘᵉᵃᵈᵒ~",
			rowId: `${clave}encender noprivado`
		}, {
			title: "[ ❤️ Desactivar ]",
			description: "~ᴹᵒᵈᵒ ᴬⁿᵗᶦ⁻ᴾʳᶦᵛᵃᵈᵒ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",
			rowId: `${clave}apagar noprivado`
		}]
	}, {
		title: "[ ⬇️ ANTI - TRABA ]",
		rows: [{
			title: "[ 🐸 Activar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ~",
			rowId: `${clave}encender antitraba`
		}, {
			title: "[ 👾 Desactivar ]",
			description: "~ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",
			rowId: `${clave}apagar antitraba`
		}]
	}, {
		title: "[ ⬇️ CHAT - BOT ]",
		rows: [{
			title: "[ 🗣️ Activar ]",
			description: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵘⁿ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ~",
			rowId: `${clave}encender chatbot`
		}, {
			title: "[ 👤 Desactivar ]",
			description: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ ᵃᶜᵗᵘᵃˡ~",
			rowId: `${clave}apagar chatbot`
		}]
	}, {
		title: "[ ⬇️ SUB - BOTS ]",
		rows: [{
			title: "[ 🌳 Activar ]",
			description: "~ᴬʰᵒʳᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵘˢᵃʳ ᵉˡ ᶜᵒᵐᵃⁿᵈᵒ ᵖᵃʳᵃ ˢᵉʳ ᵇᵒᵗˢ ᵗᵉᵐᵖᵒʳᵃˡᵉˢ~",
			rowId: `${clave}encender yesclabots`
		}, {
			title: "[ 🌱 Desactivar ]",
			description: "~ᴱˡ ᶜᵒᵐᵃⁿᵈᵒ ᵖᵃʳᵃ ˢᵉʳ ᵇᵒᵗ ⁿᵒ ᵖᵒᵈʳᵃ́ ˢᵉʳ ᵘˢᵃᵈᵒ~",
			rowId: `${clave}encender noesclabots`
		}]
	}, {
		title: "[ ⬇️ SOLO - ADMINS ]",
		rows: [{
			title: "[ ⭐ Activar ]",
			description: "~ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
			rowId: `${clave}encender soloadmins`
		}, {
			title: "[ ✨ Desactivar ]",
			description: "~ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
			rowId: `${clave}apagar soloadmins`
		}]
	}],
	Hrio: (a="", b="", c="", d="", e="", f="", g="", h="", i="", j="", k="", l="", m="", o="", p="", q="", r="", s="", t="", u="", v="", w="", x="") => `\`\`\`\n「 ZONA-HORARIA 🌎 」\n\n⌚Perú      : ${a}\n⌚Mexico    : ${b}\n⌚Bolivia   : ${c}\n⌚Chile     : ${d}\n⌚Argentina : ${e}\n⌚Colombia  : ${f}\n⌚Ecuador   : ${g}\n⌚Costa_Rica: ${h}\n⌚Cuba      : ${i}\n⌚Guatemala : ${j}\n⌚Honduras  : ${k}\n⌚Nicaragua : ${l}\n⌚Panama    : ${m}\n⌚Uruguay   : ${o}\n⌚Venezuela : ${p}\n⌚Paraguay  : ${q}\n⌚New York  : ${r}\n⌚Brasil    : ${s}\n⌚G.N.Q     : ${t}\n⌚España    : ${u}\n⌚Asia      : ${v}\n\`\`\`\n${masss}\nZona horaria del servidor actual:\n[ ${w} ]\n${x}`,
	Hcmd: (n = "") => ["No se encontraron hashes!", "[ ! ] No tienes permiso para eliminar este sticker-cmd", "Sticker-cmd eliminado correctamente ✓", "*LISTA HASH*", "*Identificador*", "Bloqueado", "*Funcion ejecutable*", "Responda un mensaje de este chat!", "Falta hash SHA256(sticker)", "[ ! ] Hash no encontrado en la base de datos", "Hecho ✓", `Responda un sticker con el comando: \n\n*${clave+n}*`, `Ejemplo de uso:\n\n${clave+n} ${clave}menu\n`, "No tienes permiso para realizar esta solicitud.", "Completado correctamente ✓"],
	Hnwa: (a="", b="") => [`Proporcione un número, Ejemplo de uso:\n\n${clave+a} 51991378xxx\n`, "Por favor agrege 'x' en el número proporcionado", "¡Se permiten un máximo de 3 'x'! :v", "*[ LISTA DE NÚMEROS EN WHATSAPP ]*\n\n*🟢 Numeros activos:*\n", "\n*🔴 Números sin información:*\n", "\n\n🧑‍💻 *Números sin cuenta de WhatsApp dentro del rango que proporcionó:*\n", `*🥏 Número:* wa.me/${a}\n*Bio:* ¡Hola! Estoy usando Whatsapp.\n`, `*🪀 Número:* wa.me/${a}\n*Bio:* ${b}\n`],
	Hesc: () => ["Proporcione un texto", "Máximo de caracteres 630!"],
	Hfth: () => "El parámetro *URL* debe comenzar con http:// ó https:// -.-",
	Hrco: (n = "") => [`Envie ó Responda un video ó imagen con el comando \n\n${clave+n}\n`, "[ ! ] No se pudo recuperar un comentario."],
	Hsvf: (n = "") => [`*Con que nombre desea guardar el archivo?*\n_Ejemplo de uso_ : \n\n${clave+n} test-plugin.js\n`, "[_>] Responda un mensaje que contenga una sintaxis correcta...", `El archivo *${n}* fue guardado correctamente ✓`, `Medios guardados con éxito en *${n}*`],
	Htdr: (n = "") => `Envie o responda un texto con el comando ${clave+n} <idioma> [texto], ejemplo:\n\n${clave+n} es Hello World\n`,
	Hfmp: () => ["Aun estoy trabajando en una solicitud pendiente, por favor esperé su turno :D", "Echo en FFmpeg"],
	Iclm: (e = "", n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "") => ["[ ! ] Introduzca el nombre de la ciudad", `[ CLIMA ]\n\n📆 Fecha: ${e}\n🌁 Ciudad: ${n}\n🗺️ Zona horaria: ${a}\n📄 Descripcion: ${o}\n🌡️Temperatura: Minimo ${i}ºC / Maximo ${r}ºC\n🎭 Sensacion: ${t}\n🏞️ Presion atmosferica: ${s}milibares\n💦 Humedad: ${d}%\n👁️ Visibilidad: ${u}msnm\n🌪️ Viento: Velocidad ${c}km/h\n☁️ Nubes: ${l}%`],
	Igit: (e = "", n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "") => ["[ ! ] Actualmente la cuenta de mi creador principal esta suspendido, puede realizar otra búsqueda en github ó apoyarlo en https://gitlab.com/NeKosmic :D", `[ USUARIO-GITHUB-🐱 ]\n\n🧿 ID: ${e}\n⚡ Usuario: < ${n} />\n🔥 Nombre: ${a}\n🫂 Seguidores: ${o}\n🤝 Siguiendo: ${i}\n🧰 Repositorios: ${r}\n🏗️ Compañía: ${t}\n🧑‍💻 Blog: ${s}\n🌎 Ubicación: ${d}\n📈 Fecha de creacion: ${u}\n📉 Ultima actualizacion: ${c}\n📜 Biografia: ${l}`],
	Itkt: (n = "", k = "") => ["*[ ! ] Introduzca el nombre de usuario valido...*", `Por favor, solo use un nombre o nickname!\nEjemplo de uso:\n\n${clave+n} nekosmic`, `${n.id?`🌐 ID: ${n.id}\n\n`:k.id?`🌐 ID: ${k.id}\n\n`:""}⚡ Usuario: ${n.usuario||k.usuario}\n\n🔥 Nickname: ${n.apodo||k.apodo}\n\n📜 Descripcion: ${n.bio||k.bio}${n.verificado?"\n\n🎭 Verificado: "+(n.verificado?"🟢":"🔴"):k.verificado?"\n\n🎭 Verificado: "+(k.verificado?"🟢":"🔴"):""}${n.pais?`\n\n🌎 Pais: ${n.pais}`:k.pais?`\n\n🌎 Pais: ${k.pais}`:""}\n\n👥 Seguidores: ${n.seguidores||k.seguidores}\n\n🤝 Siguiendo: ${n.siguiendo||k.siguiendo}${n.corazones?`\n\n💞 Corazones: ${n.corazones}`:k.corazones?`\n\n💞 Corazones: ${k.corazones}`:""}${n.videos?`\n\n🎞️ Videos: ${n.videos}`:k.videos?`\n\n🎞️ Videos: ${k.videos}`:""}\n\n⛓️ Link: https://www.tiktok.com/${n.usuario||k.usuario}\n`],
	Jtli: (n = "", a = "") => ["Ya estas en una sala activa -.-", `*[ ! ] Ingrese un nombre para crear una nueva sala*\n\nEjemplo de uso:\n\n${clave+n} latam\n`, "Rival encontrado!\nᴱˡ ᶦⁿᶦᶜᶦᵃᵈᵒʳ ᵗᶦᵉⁿᵉ ᑫᵘᵉ ᶜᵒᵐᵉⁿᶻᵃʳ ᵉˡ ʲᵘᵉᵍᵒ ᵉˢᶜʳᶦᵇᶦᵉⁿᵈᵒ ᵘⁿ ⁿᵘ́ᵐᵉʳᵒ ᵈᵉ ¹ ᵃˡ ⁹ ᵖᵃʳᵃ ᶜᵒᵐᵉⁿᶻᵃʳ", "tiene que comenzar el juego", "~Escriba :~\n\nrendirse\n\n~para darse por vencido~", `*[ ! ] Esperando rival*\npara unirse a la partida use el comando ${clave+n} ${a}\n\n_Recompensa para el ganador +4000 de XP_\n`, "El juego ha terminado", "Inválido", "Posición inválida", "Posición inválida", "Victoria!", "Juego terminado, empate", "Turno de", "*Sala 3 en linea eliminado correctamente ✓*"],
	Jcal: (n = "") => [`*[ ! ] Use bien el comando :*\n${clave+n} @tag|mensaje|respuesta`, `*[ ! ] Agrege barras entre cada palabra todo junto*\n\n_Ejemplo de uso_ : \n${clave+n} @usuarioetiquetado|bendiceme|bendecido\n~No olvide usar esta barra~ : " | "`, "No hay texto :v", " use 2 barras!!!\n\n@tag|mensaje|respuesta ✓"],
	Jmts: (n = "", a = "", o = "") => [`*Modos disponibles* : \n_${Object.keys(n).join("_\n_")}_\n*Ejemplo de uso* : \n\n${clave+a} kinder\n`, `*[ ! ] Por favor use un modo valido!*\n*Puede usar uno de estos modos disponibles* : \n_${Object.keys(n).join("_\n_")}_\n*`, "[ ! ] Todavía hay preguntas sin respuesta en este chat.", `¿Cuál es el resultado de *${n}*?\n\nTiempo disponible: ${a} segundos\nRecompensa por respuesta correcta: ${o} XP`, `¡Se acabó el tiempo!\n\nLa respuesta es: ${n}\n`, "La pregunta ya fue resuelta...", `*Respuesta correcta!*\nAqui tienes tu recompensa:\n+${n} XP\n`, `*[ ! ] Se acabo el tiempo*\nRespuesta: *${n}*`, `*Respuesta incorrecta!*\nTe quedan ${n} oportunidades`],
	Jnij: (e = "") => ["Use un nombre o apodo...", `☯️ Nombre ninja para _${e}_:`],
	Jprj: (e = "", n = "") => [`❥ *Pareja formada* :\n\n┏─━─━─━∞◆∞━─━─━─┓\n@${e} ❤️ @${n} \n┗─━─━─━∞◆∞━─━─━─┛\n`, `Esto fue posible gracias a ${e}`],
	Jqun: (n = "") => [`*[ ! ] Invente un asunto*\n_Ejemplo:_\n\n${clave+n} es gay :v?\n`, "*[ ! ] El asunto es muy corto*"],
	Jtgy: (e = "", n = "") => ["_Calculando porcentaje..._", "su porcentaje de gay es ", `@${e} es ${n} gay`, "*[ ! ] Limite de gay superado [ ! ]*"],
	Jtop: () => ["*[ ! ] Que top desea generar?*", "*[ ! ] El texto es muy corto*"],
	Jtgs: (e = "", n = "", a = "", o = "") => [`*Jugador : @${e}*\n*[ Felicidades, ganaste!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${n}*\n*┃ ├────────┤ ┃*\n*${a} <==*\n*┃ ├────────┤ ┃*\n*${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Tu recompensa:* \n+50000 de dinero`, `Jugador : @${e}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${n}\n┃ ├────────┤ ┃\n${a}\n┃ ├────────┤ ┃\n${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
	Lpdr: () => "Se limpió la carpeta  './tmp'  correctamente ✓",
	Menu: () => ["_CONVERSORES :_", "_ANIME :_", "_CMDS-CASUAL :_", "_CMDS DUEÑO :_", "_HERRAMIENTAS :_", "_PREMIUM :_", "_AVANZADO :_", "_CMDS ADMINS :_", "_CMDS GRUPOS :_", "_ARTE Y DISEÑO :_", "_BUSQUEDA :_", "_SERVICIOS :_", "_XP & LIMITE :_", "_RPG, JUEGOS :_", "_PASATIEMPO :_", "_SER SUB-BOT :_", "_OTROS :_", "_Cargando menu..._ ", "(Limitado)", "(Premium)", "_COMANDOS_", "Tiempo activo:", "Version del bot:", "Dueño del bot:", "Prefijo único:", "Registrados:", "Cliente:", "Premium:", "Limite restante:", "Nivel:", "Rol:", "XP:", "[ ! ] Ocurrio un error en el menú :/", "_SIMPLE-TRABAS :_", "_DESCARGADOR :_", "_BUSCADOR :_", "MENU +18"],
	Menp: (e = "") => `Hola @${e}! 👋`,
	Menl: () => [{
		title: "Menu-Simple 🌌",
		rows: [{
			title: "Funciones-básicas",
			description: "~ᴸᶦˢᵗᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ˢᶦᵐᵖˡᵉˢ~",
			rowId: `${clave}menusimple`
		}]
	}, {
		title: "Menu-Internet 🌐",
		rows: [{
			title: "Random-Menu",
			description: "~ᴸᶦˢᵗᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ᵛᵃʳᶦᵃᵈᵒˢ~",
			rowId: `${clave}randmenu`
		}]
	}, {
		title: "Menu-Artístico 🎨",
		rows: [{
			title: "Crear-Logos",
			description: "~ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᶜʳᵉᵃʳ ˡᵒᵍᵒˢ ʸ ᵐᵃˢ~",
			rowId: `${clave}logofabrica`
		}]
	}, {
		title: "Menu-Otaku/Anime 🀄",
		rows: [{
			title: "Random-Anime",
			description: "~ᶜᵒᵐᵃⁿᵈᵒˢ ᵒᵗᵃᵏᵘ⁻ᵃⁿᶦᵐᵉ ᵛᵃʳᶦᵃᵈᵒ~",
			rowId: `${clave}mianime`
		}]
	}, {
		title: "Menu-Hentai/Anime 🥵",
		rows: [{
			title: "La-Biblia",
			description: "~ᶜᵒᵐᵃⁿᵈᵒˢ ʰᵉⁿᵗᵃᶦ⁻ᶜᵃʳᵗᵒᵒⁿ ⁺¹⁸~",
			rowId: `${clave}labiblia`
		}]
	}, {
		title: "Menu-Completo ♻️",
		rows: [{
			title: "Principal",
			description: "~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~",
			rowId: `${clave}menucompleto`
		}]
	}],
	Mlti: (n = "") => ["Cambió de idioma automático", `*[NK-BOT MULTI-IDIOMA]*\n    \n🇵🇪\n*┣⊱ Idioma disponible español ☰*\n*┣━⊱* _¿Como activar?, Ejemplo:_\n*┗━━⊱*  ${clave+n} es\n🇺🇸\n*┣⊱ Idioma disponible inglés ☰*\n*┣━⊱* _¿Como activar?, Ejemplo:_\n*┗━━⊱*  ${clave+n} en\n🇧🇷\n*┣⊱ Idioma disponible portugués ☰*\n*┣━⊱* _¿Como activar?, Ejemplo:_\n*┗━━⊱*  ${clave+n} pt\n🇮🇩\n*┣⊱ Idioma disponible indonesio ☰*\n*┣━⊱* _¿Como activar?, Ejemplo:_\n*┗━━⊱*  ${clave+n} id\n🌎\n*┣⊱ Multi idioma automático  ☰*\n*┣━⊱* _¿Como activar?, Ejemplo:_\n*┗━━⊱*  ${clave+n} auto\n\n\`\`\`[NOTA] : Esto no afecta a los comandos del bot\n\`\`\`\n\n@NeKosmic`],
	Nwqr: (n = "") => [`\n_Desea generar un nuevo código QR?, para generar un nuevo código QR use el comando_\n\n${clave+n} continuar\n`, "\n_La sesión actual del bot fue eliminada correctamente, ahora podras generar un nuevo código QR desde la consola para escanear._\n"],
	Pntr: (e = "") => ["Que imagen quiere buscar en pinterest?", `*[ PINTEREST ] ✓*\nResultado para: _${e}_`],
	Pstr: (e = "", n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "") => ["Que desea buscar en playstore?", `🔍 Resultado: ${e}\n🧬 Identificador: ${n}\n⛓️ Link: ${a}\n🖼️ Imagen: ${o}\n✍️ Desarrollador: ${i}\n📜 Descripcion: ${r||t}\n💲 Moneda: ${s}\n🎭 Gratis: ${d}\n💸 Precio: ${u}\n📈 Puntuacion: ${c}`],
	Rpga: (n = "", a = "", o = "", i = "") => [`Use formato *${clave+n} [caja] [valor]*\nEjemplo de uso: \n\n${clave+n} ordinario 1\n\n📍Lista de cajas:`, `Su *caja tipo ${n+a}* no es suficiente!, tienes ${o} caja tipo *${n+a}*\nuse el comando:\n\n${clave}comprar ${a} ${i}\n`, `Has abierto *${n}* caja(s) tipo ${a+o} y obtienes:`, "Felicidades, tienes un artículo raro, que es:", "Felicidades, tienes un artículo épico, que es:"],
	Rpgv: (n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "", $ = "", p = "", m = "", v = "") => [`Requiere al menos 80 de ❤️Salud para la aventura!!\npor favor compre ❤️Salud primero, use el comando:\n\n${clave}comprar elixir <cantidad>\n\ny luego:\n\n${clave}sanar <cantidad>\n`, `*[ ! ] Ya estuviste en una aventura, por favor espera*\n🕐${n}...*\n`, "Fin de tu aventura 🎭", `\n\n🔖 _Estuviste en ${n}, ${a} pero tienes:_\n`, `*[ AVENTURA 🌎 ]*\n\n> *País:* ${n}\n> *Código de pais:* ${a}\n> *Número de edificio:* ${o} ${i}\n> *clave de ciudad:* ${r}\n> *Sufijo de ciudad:* ${t}\n> *Comunidad:* ${s}\n> *Ubicación:* ${d}\n> *Id:* ${u}\n> *Estado:* ${c}\n> *Dirección:* ${l}\n> *Calle:* ${$}\n> *Sufijo de calle:* ${p}\n> *Zona horaria:* ${m}\n> *Código zip:* ${v}`],
	Rpge: () => ["te quedaste dormido por un dia completo", "sufriste una intoxicación por comer en un restaurante de mala calidad", "perdiste tus pertenencias", "tuviste que pelear contra un dragon", "perdiste tus pertenencias", "fuiste atacado por una pandilla", "trabajaste como agricultor todo el dia", "sufriste un ataque junto a tu caballo", "fuiste a la cárcel por una calumnia", "pagaste tus impuestos", "te atacó un enjambre de abejas", "paso un terremoto de magnitud 10", "te perdiste en un bosque cercano por 24 horas", "te estafaron en una feria", "un dia completo de libertinaje", "perdiste en apuestas", "luchaste en una batalla peligrosa", "fuiste esclavizado"],
	Rpgr: (n = "", a = "", o = "", i = "", r = "") => [`Usar formato *${clave+n} [tipo] [página]*\nejemplo de uso: \n\n${clave+n} nkoins 1\n\n📍 Lista de tipos:`, `• *${n} página de ranking ${a} de ${o}* •\nTú: *${i}* de *${r}*`],
	Rpgc: (n = "", a = "", o = "", i = "", r = "") => ["Tus límites estan completos", `Acabas de superar el limite predefinido de ${n} por usuario, que hacker eres :0`, `No puedes comprar mas de ${n} limit, tu límite actual es: ${a}`, `Usar formato *${clave+n} [artículo] [cantidad]*\nEjemplo de uso: \n\n${clave+n} elixir 10\n    \n📍Lista de artículos:`, "Costo", "Valor", `No tienes suficiente ${n} para comprar *${a}* ${o}. Necesitas *${i}* ${r} para poder comprar`, `Tú compraste *${n}* ${a} ✓`, `No tienes suficiente *${n}* para vender, tu solo tienes ${a} artículos`, `Vendiste *${n}* ${a} ✓`],
	Rpgd: (e = "") => `¡Ya has reclamado tu recompensa diaria!, vuelva después de *${e}.*`,
	Rpgi: (e = "", n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "") => `Inventario *${e}*\n\n${n}${a?`\n\n\n*📍 Herramientas*\n${a}`:""}${o?`\n\n\n*📍 Elementos*\n${o}\n*🎒 Total de elementos:* ${i} elementos`:""}${r?`\n\n\n*📍 Cajas*\n${r}\n*🎒 Total de cajas:* ${t} Cajas`:""}${s?`\n\n\n*📍 Mascotas*\n${s}`:""}${d?`\n\n*⌚ Enfriamientos*\n${d}`:""}\n`,
	Rpgm: (e = "") => `Ya has reclamado tu regalo mensual, siguiente reclamo en *${e}.*`,
	Rpgs: (n = "", a = "") => ["Proporcione una cantidad...!", "Tu ❤️salud esta lleno -.-", `Tu 🥤elixir no es suficiente, tienes *${n}*\nuse el comando\n\n${clave}comprar elixir ${a}\n`, `Obtienes *${n}* 🥤elixir(s)`],
	Rpgt: (n = "", a = "", o = "", i = "") => ["Ya estas realizando una transferencia!", `Usar formato ${clave+n} [tipo] [cantidad] [número]\nejemplo de uso:\n\n${clave+n} nkoins 9999 @51991378809\n\n📍 Artículos transferibles:`, "Etiqueta a un usuario ó indique el número!!!", `Usuario *${n}* no se encuentra en la base de datos -.-`, `Su *${n}${a}* es menos que *${o}*`, `¿Está seguro de que desea transferir *${n}* ${a}${o} a *@${i}*\n\n*Responda:*\nsip \n_para confirmar _\n\n*Responda:*\nnop\n_para rechazar_\n\n\nTienes 60 segundos`, "Rechazado", `Transferencia exitosa *${n}* ${a}${o} a *@${i}*`, `Error al transferir *${n}* ${a}${o} a *@${i}*`, "Se acabó el tiempo..."],
	Stke: (n = "") => ["Responda un sticker del chat actual...", `Envie ó Responda un sticker con el comando ${clave+n}`, "Consejo, elimina tu sticker para todos ;v", "[ ! ] Responda un sticker para obtener los metadatos", "[ ! ] Responda un sticker para asignarle un precio falso :p", "Responda un sticker para editar el EXIF a tu manera"],
	Stks: (n = "") => ["*[ ! ] Máxima duración de vídeo son 8 segundos!*", `*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${clave+n}*\n_NOTA : duracion de video 1 a 8 segundos máximo_ ✓`, "[ ! ] Url inválido, prueba con otro ;3"],
	Stkf: (n = "", a = "") => [`*Este comando es para obtener stickers de ${n?"Telegram":"Line"}*\n\nEjemplo de uso:\n${clave+a} anime`, `*Resultados encontrados para ~${n}~, total:* ${a}\n_Enviando stickers..._`],
	Stkw: (n = "") => [`Agregue el nombre del paquete y nombre del autor, ejemplo: \n\n${clave+n} paquete|autor\n`, "*[ ! ] La duración de vídeo son 7 segundos como máximo...!!!*", `*[ ! ] Por favor Envie o Responda una imagen o vídeo usando el comando ${clave+n}*`, "[ ! ] Url inválido, prueba con otro ;3"],
	Snvl: (e = "", n = "", a = "", o = "", i = "") => [`[ ! ] Su XP actual es menor de 0, usted debe ${e} XP para continuar subiendo de nivel...`, `\n🪀 Nivel actual *${e} (${n}/${a})*\n🔥 Te faltan *${o}* de XP para que puedas subir al siguiente nivel\n`, `Felicidades! ${e}\nAcabas de subir de nivel`, `\`\`\`${e}\`\`\`\n\n♻️ *Nivel anterior* : ${n}\n🪀 *Nuevo nivel* : ${a}\n⚔️ *Rol del cliente* : ${o}\n📆 *Fecha* : ${i}\n_Cuanto mas interactúes con el bot, mayor será¡ tu nivel_`],
	Uact: (n = "", a = "", o = "") => ["*A que participante desea convertirlo en administrador?*", `Ejemplo de uso:\n\n${clave+n} @+51995...\n`, "A quien desea banear?", "[ ! ] Por favor etiquete al usuario que desea banear", `Usuario baneado, ${n} ya no podra usar al bot [ ! ]`, "*A que administrador desea quitarle su puesto?*", "A quien desea desbanear?", `Usuario desbaneado, ${n} puede volver a usar al bot [✓]`, `Por favor etiquete o mencioné a alguien!\n\nEjemplo de uso:\n${clave+n} @${a}`, `*${n}* dejó de ser premium`, "Por favor indique el número de dias", `Solo números!\n\nEjemplo de uso:\n${clave+n} @${a} 51987...`, "[ ! ] Maximo 7 dias", `*[ USUARIO PREMIUM ]*\n🔖 *Nombre:* ${n}\n📆 *Dias:* ${a} dia(s)\n📉 *Tiempo restante:* ${o}MS`],
	Ureg: (n = "", a = "", o = "", i = "", r = "", t = "", s = "") => ["Por favor introduzca su código de registro", "[ ! ] Codigo de registro incorrecto", "[✓] Su registro fue eliminado de la base de datos correctamente 🗑️", `*[ ! ] Ya estuviste registrado en mi base de datos*\nQuieres volver a registrarte nuevamente?\nUse el comando:  \n\n${clave}unreg <Código de registro>\n`, "Nombre y edad!?", `*[ ! ] Por favor agregue una barra en medio de nombre y edad*\n\n" | "\n`, "*[ ! ] En edad solo se aceptan números -.-*", "*[ ! ] Bruh el nombre es muy largo ._.*", "*[ ! ] Maximo de edad 30 años*", "*[ ! ] Minimo de edad 13 años*", "Puberto(a)", "Adolecente", "Joven", "Adulto(a)", "Información:", `〘  *REGISTRO* 〙\n\n*❥ Fecha de registro* : \n_${n}._\n\n┏─━─━━─━─━━─━\n╠≽️ *Registro de usuario* : @${a}\n╠≽️ *Nombre Registrado* : ${o}\n╠≽️ *Fecha de nacimiento* : ${i}\n╠≽️ *De acuerdo a tu edad eres un(a)* : ${r}\n╠≽️ *Información* : ${t}\n╠≽️ *Número* : wa.me/${a}\n┗─━─━━─━─━━─━\n\n_Codigo de registro_ : ${s}.py \n\nᴾᵘᵉᵈᵉ ᶜᵒᵖᶦᵃʳ ˢᵘ ᶜᵒ́ᵈᶦᵍᵒ ᵈᵉ ʳᵉᵍᶦˢᵗʳᵒ ᵉˡᶦᵐᶦⁿᵃⁿᵈᵒ ˡᵒˢ ³ ᵘ́ˡᵗᶦᵐᵒˢ ᵈᶦ́ᵍᶦᵗᵒˢ`],
	Uban: (e = "", n = "") => ["Me odias? :,c", `*El participante @${e} fue eliminado del grupo ✓*\n_Accion ejecutada por ${n}_`, "A que usuario desea eliminar!?\nPor favor etiqueta a uno"],
	Unvl: (n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "") => [`[ ! ] Su XP actual es menor de 0, usted debe ${n} XP para continuar subiendo de nivel...`, `┏━━❉ *[ Nivel ]* ❉━━━\n┣⊱ *Usuario* : @${n}\n┣⊱ *Registrado* : ${a?"Si ("+o+")":"No"} ${i>0?"\n┣⊱ *Último reclamo :* "+r:""}\n┣⊱ *Nombre* : <${t}>\n┣⊱ *XP conseguido asta el momento* : ${s}\n┣⊱ *Su nivel actual es* : ${d} ${u?`<Ya puedes subir de nivel,use el comando ${clave}subirnivel>`:""}\n┣⊱ *De acuerdo al nivel es* : ${c}\n┣⊱ *Progreso de nivel* : ${l}\n┗━━━━━━━━━━━━━\n\n_Use el comando ${clave}inventario para ver tu inventario RPG_\n`],
	Ulpr: (e = "", n = "", a = "", o = "") => [`*[ LISTA - PREMIUM ]*\n\n*🌟 Cliente* : @${e}\n${n?"*⏳ Tiempo premium* : ∞":a?`*⏳ Tiempo premium* : _${o}._`:"*🚫 Ya no es un usuario premium!"}`, "*⭐ Usuario* :", "*⏳ Tiempo premium* :", "🚫 Expirado ---"],
	Upfl: (e = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "") => ["➢ Codigo de registro :", `💻 <[ PERFIL DE USUARIO]> 🌐\n\n⚡ | INFO DE USUARIO |\n➢ Nombre : ${e}\n${a?"➢ Usuario premium : Si":"➢ Usuario premium : No"} ${o?"":`\n➢ Nombre registrado : ${i}`} ${r<0?"":`\n➢ Edad : ${r}`} ${t<0?"":`\n➢ Fecha de registro : ${s}`} ${d?u:""} ${c?"\n➢ Es administrador : [✓]":"\n➢ Es administrador : [X]"} ${l?"\n➢ Solicitud desde : Un Grupo":"\n➢ Solicitud desde : Chat privado"} ${masss}`, `➢ Pais : ${e} \n➢ clave de pais : ${a} \n➢ Origen del número : ${o||"No encontrado u.u"}\n➢ Link de Número : wa.me/${i} ${r?"\n➢ Número valido : [✓]":"\n➢ Número valido : [X]"} ${t?"\n➢ Dispositivo mobil : [✓]":"\n➢ Dispositivo mobil : [X]"} \n➢ Operadora : ${s} \n➢ Tipo de linea : ${t} \n➢ Formato local : ${d} \n➢ Formato internacional : ${u} \n➢ Código de pais : ${c}`, `➢ Link de Número : wa.me/${e}`],
	Uwme: (e = "", n = "") => [`⚡ *LINKS DE TU NUMERO* ⚡\n\n*Solicitado por* : ${e} \n\n▪︎ *Su link directo de whatsapp es* :\n\n▪︎ https://wa.me/${n}\n\n*O puede usar este otro*\n\n▪︎ https://api.whatsapp.com/send?phone=${n}`, "Toque aqui para ver una prueba del link", `https://wa.me/${e}?text=Hola+${n}%0D%0A%E1%B4%AE%CA%B8+%E1%B4%BA%E1%B4%B7`],
	Vrip: (e = "", n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "", $ = "", p = "", m = "", v = "", _ = "", g = "", A = "", b = "", E = "", I = "", f = "", h = "", R = "") => ["*[ ! ] Introduzca una dirección IP*", "*[ ! ] Use una dirección IP valida de clase (C) !*", "No pude encontrar ninguna información para esta dirección IP ;-;", `🗺️ INFO DE DIRECCION IP\n🔖 Solicitado por : @${e}\n\n[ INFORMACIÓN ]\n\`\`\`\n➢ Dirección IP : ${n}\n➢ Dispositivo mobil : ${a?"[✓]":"[X]"}\n➢ Continente : ${o}\n➢ Codigo de continente : ${i}\n➢ Pais : ${r}\n➢ Codigo de pais : ${t}\n➢ Nombre de región : ${s}\n➢ Código de Region : ${d}\n➢ Ciudad : ${u}\n➢ Distrito : ${c||l}\n➢ Codigo postal : ${$||l}\n➢ Latitud : ${p}\n➢ Longitud : ${m}\n➢ Zona horaria : ${v}\n➢ Offset : ${_}\n➢ Moneda local : ${g}\n➢ Proveedor de internet : ${A}\n➢ Organización : ${b}\n➢ Sociedad : ${I||l} \n➢ DNS : ${f||l}\n➢ Servidor proxy : ${h?"[✓]":"[X]"}\n➢ Alojamiento web : ${R?"[✓]":"[X]"}\n\`\`\``],
	Wgps: (e = "", n = "") => ["ᴺᴼᵀᴬ- ˢᶦ ᵉⁿ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵉˢᵗᵃ́ ᵖʳᵒʰᶦᵇᶦᵈᵒ ᶜᵒᵐᵖᵃʳᵗᶦʳ ᵉⁿˡᵃᶜᵉˢ• ᴰᵉ ˢᵉʳ ⁿᵉᶜᵉˢᵃʳᶦᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵗᶦᵉⁿᵉⁿ ᵗᵒᵈᵒ ᵉˡ ᵈᵉʳᵉᶜʰᵒ ᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵃˡ ᵇᵒᵗ", `${e} Quieres agregar tu grupo :D?`, "Toca aqui ;3"],
	Wppr: (e = "", n = "") => ["Que fondo de pantalla desea buscar?", `┏━⊱ Wallpaper : ${e}\n┗⊱  Solicitada por : @${n}`],
	Wkpd: (e = "", a = "") => ["Cual es su búsqueda en Wikipedia?", "[ ! ] Sin resultados para su búsqueda ;-;", `|| *WIKIPEDIA* ||\n_~> Resultados para : ${e}_\n${masss}\n${a}`],
	Ytbd: (n = "", a = "", o = "", i = "", r = "", t = "", s = "", d = "", u = "", c = "", l = "") => [`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${clave+n} cuanto es 1 + 1`, `*[ > ] Resultados en Youtube para:* _${n}_\n\n`, `🔖 Titulo: ${n}\n🧬 ID: ${a}\n⛓️ URL: ${o}\n🗜️ Tipo: ${i}\n🖼️ Miniatura: ${r}\n⌚ Duracion: ${t}\n📜 Descripción: ${s}\n📆 Fecha de subida: ${d}\n👀 Vistas: ${u}\n||\n⚡Autor: ${c}\n📺 Canal: ${l}\n\n*——————————*\n\n`]
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
