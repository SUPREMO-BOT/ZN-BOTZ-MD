/**
[ By @NeKosmic || https://gitlab.com/NeKosmic ]
**/
const clave = global.Prefijo,
	masss = String.fromCharCode(8206).repeat(850),
	saltos = "\n".repeat(400);
export default {
	Lengua: () => "en",
	Habla: () => "English language",
	AdLimite: e => `[ ! ] You have run out of limits to use some functions T_T\nYou can buy more limits using this command:\n\n${clave}comprar\n`,
	AdNivel: (e, n) => `[ ! ] You need to have level *${e}* to start using this command\n\nYour current level is ${n}\n`,
	SpamerNot0: e => `[ ! ] ${e} Please do not overwhelm the bot ;-;`,
	SpamerNot1: () => "_Please wait a few seconds before using another command..._ ✓",
	ErrorMsj: (e, n, t, o, a, i, r) => `*[ ! ] An error was detected in the bot:*\n\n📜 Plugin: ${e}\n😵 Client: wa.me/${n}\n🤳 Chat: ${t}\n🧩 Command: ${o+a} ${i}\n\n\`\`\`${r}\`\`\` \n`,
	RestriN: () => "[ ! ] Could not remove new participant, please activate restricted mode!",
	AlertList: () => "[ ! ] Remove numbers starting with  '1'  from global.FakeList in ./config.js ...!!!",
	WlcAdd: (e, t, o, a) => `⚡ *Welcome @${e} to this great group* ${t}\n📆 *Date joined | ${o}*\n🍷 _*I hope and you like your stay here, don't forget to respect the participants and the rules*_ ;)\n\n📜 *Rules of the group currently :* \n${masss}\n${a}`,
	WlcRemove: (e, n) => `\`\`\`[!] Left: @${e}\`\`\`\n_- Date of departure |  ${n}_`,
	Gbay: () => "Bye... 🤧",
	WlcPromot: (e, n, f) => ["An admin", `*Congratulations @${e}!, @${f} just gave you a great power, you are now admin of the group* : _${n}_\n`, `~I now have the absolute power!~\n\n*I mean..., _Many thanks to @${e} for giving me administration, I'll try my best for this group!!!_ :D*`],
	WlcDemot: (e, n, f) => ["The administrator", `*@${f} just demoted @${e} is no longer a group admin* : _${n}_`, "How sad, I am no longer an administrator unu"],
	GpUp: (e = "") => ["🔒 *[ CLOSED GROUP ]* 🔒\n_ᴺᵒʷ ᵃˡˡ ᵃˡˡ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🔓 *[ OPEN GROUP ]* 🔓\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_\n~ᴾˡᵉᵃˢᵉ ᵇᵉ ᵃʷᵃʳᵉ ᵒᶠ ᵖᵉᵒᵖˡᵉ ʷᶦᵗʰ ᵐᵉⁿᵗᵃˡ ʳᵉᵗᵃʳᵈᵃᵗᶦᵒⁿ~", `✍️ *[ GROUP SUBJECT CHANGED ]* 🤳\n\nNew name: _${e}_\n`],
	DelMsj: (e, n, t) => `*[X] Message ~deleted~ [X]*\n\n*🧬 Message Type :* _${e}_\n*🚮 User* : _@${n}_\n*📆 Date : * _${t}_\n`,
	CallNot: (e, n) => `\n*[ ! ] @${e} You will be blocked*\n_Reason: for making a ${n?"video call":"call"} to this number without authorization!_\n`,
	MsjRowner: () => "*[ ! ]* This command can only be used *from the main bot*!",
	MsjOwner: () => "*[ ! ]* This command can only be used by the *bot owner*!",
	MsjMods: () => "*[ ! ]* This command can only be used by a *moderator*!",
	MsjPremium: () => "*[ ! ]* This application is for *premium* users only!",
	MsjGroup: () => "*[ ! ]* This command can only be used in *groups*!",
	MsjPrivate: () => "*[ ! ]* This command can only be used by *private chat*!",
	MsjAdmin: () => "*[ ! ]* This command can only be used by *group administrators*!",
	MsjBotAdmin: () => "*[ ! ]* The bot needs to *be an administrator* to use this command!",
	MsjUnreg: () => `*[ ! ]* Register to start using this function\n\nExample: ${clave}rg name|age\n\n${clave}rg Juanito|15\n`,
	MsjRestrict: () => "[ ! ] To perform deletion actions, my owner has to turn on restricted mode!",
	Error0: () => "[ ! ] Error, please try again later...",
	Error1: () => "[ ! ] An unexpected error occurred u.u [ ! ]",
	Proces: e => `_Processing, ${e} please wait..._`,
	Bsqd: e => `_Searching, ${e} please wait..._`,
	Antlk1: e => ["[ ! ] My crazy you just sent a link, the good thing is that the link detected is from this group owo", "*[ ! ] Link detected [ ! ]*\n\n_Luckily I'm not an admin, so I can't do nothing unu_", `*[ ! ] Link detected [ ! ]*\n_Now if you were worth @${e} Goodbye..._\n`],
	Antlk2: e => "*[ ! ] Link detected [ ! ]* " + (e ? "" : "\n\n_Luckily I'm not an admin, so I can't do anything :v_"),
	Antprv: () => `*[ ! ] Private chat is prohibited [ ! ]*\nMy owner in case you need information: wa.me/${OwnerNum}\n\n_Adios..._`,
	Antrb: (e = "", n = "") => [`Admin @${e} just sent a text containing many characters -.-!`, "*[ ! ] A message was detected containing many characters [ ! ]* " + (e ? "" : `${saltos}\nI'm not an administrator, I can't do anything else... :/`), `Mark the chat as read ✓\n${saltos}\n=> The number : wa.me/${e}\n=> Nickname ​​: ${n}\n[ ! ] You have just sent a text that contains many characters that can cause crashes on mobile devices`],
	Antvwc: e => `${e}\n\n*Multimedia message to be viewed once, retrieved ✓*\n`,
	Autinf: (e, n) => `<[ ${global.NombreDelBot} ]>\nActive time : ${e}${n?"|| No private chats":""}`,
	Autlvl: (e = "", n = "", t = "", o = "") => `\nCongratulations, ${e} you leveled up!\n♻️ Previous level : ${n}\n🪀 Current level : ${t}\n⚔️ Role : ${o}\n`,
	Fingp: () => "The time expired to stay in the group\n\nHe leaves epically*",
	Notpre: () => "[ ! ] Your premium time is up!\n_I hope you enjoyed it :3_\n",
	Afkpl: (n = "", t = "") => [`📲 *You stopped being AFK after ${n}.*\nWelcome back!!!  :D`, `📴 *The user mentioned is currently absent, elapsed time ${n}.*\n\n┏⊱ *Reason* \n┗━⊱ ${t}\n`, `Please state your reason to leave AFK\nExample of use :\n\n${clave+n} I will go to the bathroom :v`, "[ ! ] The reason is too short", `*The AFK function was activated successfully*\n\n➸ *User*: ${n}\n➸ *Reason*: ${t}`],
	Afrs: (e = "", n = "", t = "") => `\n🎴 Anime : ${e}\n🀄 Character : ${n}\n🔖 Phrase : ${t}\n`,
	Animg: (e = "", n = "") => `┏━⊱ Image : ${e}\n┗⊱ Requested by : @${n}`,
	Aninf: (n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "", c = "", m = "", p = "", h = "", g = "", _ = "", y = "", v = "", w = "", f = "", b = "", A = "") => [`What anime do you want to search for?, usage example:\n\n${clave+n} nichijou\n`, "No results found for your request. Please provide a clearer anime title", `\n* 🧬 ID:* ${n}\n* 🟢 Approved:* ${o?"Yes":"No"}\n*✍️ Titles:* [ Global: ${a} ], [ English: ${i||"-"} ], [ Japanese: ${r||"-"} ]\n*📆 Season:* ${m||"-"} ${p||"-"}\n*🪄 Type :* ${s}\n*🧩 Genre:* ${v}\n*🗃️ Episode:* ${l}\n*🎭 Status:* ${w}\n*⌚ Duration:* ${f} \n*♻️ Rating:* ${b}\n*📈 Score:* ${u}\n*👍 Rated By:* ${d}\n*⚡ Popularity:* ${$}\n*❤️ Favorites :* ${c}\n*📜 Synopsis:* ${A}\n*📝 Data:* ${h}\n*🔥 Producer:* ${g}\n*🪀 Licensed by:* ${_}\n*🌟Studio:* ${y}\n*📺 Trailer:* ${t}\n`],
	Eat: () => `💻 *Social networks* 📲\n\n${masss+TusRedesSociales}\n\nᴵ ᵈᵒⁿ'ᵗ ᵃˢᵏ ᶠᵒʳ ᵐᵒⁿᵉʸ⁻ ᵒⁿˡʸ ʷᶦᵗʰ ʸᵒᵘʳ ˢᵘᵖᵖᵒʳᵗ ᴵ ᵃᵐ ʰᵃᵖᵖʸ :³`,
	Boes: (e = "", n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "", c = "", m = "", p = "", h = "", g = "", _ = "", y = "", v = "") => `${e?`*Group* : _[ ${n} ]_\n\n*Banned group* : _${t?"[✓]":"[X]"}_\n\n*Admin Bot?* : _${o?"[✓]":"[X]"}_`:""}\n\n*User Bot* : ${NombreDelBot}\n_${"@"+a}_\n\n*Bot* : _${opts.self?"PRIVATE-MODE [ ! ]":"PUBLIC-MODE [✓]"}_\n\n*Restricted Mode* : _${i?"ON [✓]":"OFF [X]"}_\n\n*Anti-Private* : _${r?"ON [✓]":"OFF [X]"}_\n\n*Being Sub-Bot* : _${s?"ENABLED [✓]":"DISABLED [X]"}_\n${e?`\n*Only-Admins Mode* : _${l?"Active [✓]":"Idle [X]"}_\n\n*Welcome* : _${u?"Active [✓]":"Idle [X]"}_\n\n*Antilink* : _${d?"Active [✓]":"Inactive [X]"}_\n\n*Antilink 2* : _${$?"Active [✓]":"Inactive [X]"}_\n\n*Anti Foreigners* : _${c?"Active [✓]":"Inactive [X]"}_\n\n*No False* : _${m?"Active [✓]":"Inactive [X]"}_\n\n*No False 2* : _${p?"Active [✓]":"Inactive [X]"}_\n\n*Detection* : _${h?"Active [✓]":"Inactive [X]"}_\n\n*Anti Delete* : _${g?"Inactive [X]":"Active [✓]"}_\n\n*Anti-Crash* : _${_?"Active [✓]":"Inactive [X]"}_\n\n*Chat Bot* : _${y?"Active [✓]":"Inactive [X]"}_\n\n*Auto Level* : _${v?"Active [✓]":"Inactive [X]"}_`:""}\n`,
	Binf: (e = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "", c = "", m = "", p = "", h = "", g = "", _ = "", y = "", v = "", w = "", f = "", b = "", A = "", I = "", T = "", R = "") => ["_Getting information..._", `*~》INFORMATION《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(active)_\n➪ *Current owner* : _${Propietario}_\n➪ *Runtime* : _${e}._\n➪ *Nickname on WhatsApp* : _${t}._\n➪ *Total groups* : _${o}_\n➪ *Total users* : _${a}_\n➪ *Active groups* : _${i} / ${r}_\n➪ *Personal chats* : _${s}_\n➪ *Total Chats* : _${l} / ${u}_\n➪ *Global Hits* : _${d}_\n➪ *Bot Version* : _${BotVersion}_ \n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Total plugins* : _${$}_\n➪ *Temporary folder* : _${c}_\n➪ *Database* : _${m}_\n➪ *NodeJs version* : _${p}_\n➪ *Processing speed* : _${h} s_\n➪ *Connection speed* : _${g} ms_\n➪ *RAM:* _${_}_\n➪ *Platform* : _${y}_\n➪ *Version* : _${v}_\n➪ *Base OS* : _${w}_\n➪ *Architecture* : _${f}_\n➪ *Host* : _${b}_ ${A}\n\n➫ _Memory usage:_\n${I} ${""==T?"":`\n➫ _Total CPU usage:_\n${T}\n➫ _CPU Core(s) Used_ ${R}`}\n\n┗─━─「 ✵ 」━─━─┛`],
	Bscp: () => [`*🛑Before continuing with your reading, keep in mind the following requirements:*\n- _Have 2 devices near you, very important!_\n- _Have 200MBS of free storage on your device_\n- _Have Termux.apk installed_ \n- _Have a good internet connection_\n- _Last and most important, be patient_ :v\n\n\n*[_>] Commands to run in termux.apk from 0* :\n\n*1 .-* cd\n*2.-* termux-setup-storage ~[ First we grant permission to our storage(memory) ]~\n*3.-* termux-change-repo ~(Optional) [ Select all options that appear in the first window || In the second window select the option that contains the words "termux.mentality.rip" ]~\n\n*[_>] Installed 7w7r packs, please do it one by one :D*\n\n*1.* apt-get update -y && apt-get upgrade -y\n*2.* pkg install git\n*3.* pkg install nodejs\n*4.* pkg install libwebp -y\n*5.* pkg install ffmpeg -y\n*6.* pkg install imagemagick -y\n*7.* pkg install yarn\n*8.* git clone https://gitlab.com/NeKosmic/nk-bot-md\n*9 .* cd nk-bot-md\n*10.* yarn\n*11.* npm start\n*12.* Go to your phone, open the WhatsApp app, tap the 3 dots on the top right of your screen and select "linked devices" then "link a device", Now return to the termux.apk application, Just scan the QR code that will appear on the screen and that's it, you can use the bot, remember that you need to use the devices indicated at the beginning of this text ;3\n\n\`\`\`The bot can also be run on hosts or virtual machines...\`\`\`\n\n</Bot scripts>\n • https://youtu.be/Tk9Pitk1_oM (Read the description)\n• https://gitlab.com/NeKosmic/nk-bot-md/-/forks/new (Git)\n• https://replit .com/@NeKosmic/NK-BOT-MD (Demo)\n• https://github.com/NeKosmic/NK-BOT-MD (Functioned)\n\nNeed more help? Contact my creator:`, "Temporary Demo Mode"],
	Bunt: (e = "", n = "") => ["And the WhatsApp link?", "[ ! ] Error, The link does not work or is invalid", `[ ! ] The minimum amount to join the group must be *${MinimoDeUsuarios}* participants`, `${NombreDelBot} joined the group ${e} successfully \n${n?`For ${n} Hour(s)`:""}`],
	Csim: () => ["There is no system!", "Please, be more specific in your message", "And the message?"],
	Cimg: (n = "") => [`*Respond to a sticker using the command*:\n\n${clave+n}\n`, "[ ! ] Static stickers only"],
	Cmp3: (n = "") => [`Send or Reply a (recorded video/audio) to the command:\n\n${clave+n}`, "Could not convert to audio", "🎞️ Converted to audio 🎶"],
	Cptt: (n = "") => [`Send or Reply a (video/audio) to the command:\n\n${clave+n}`, "Could not convert to recording", "🎤 Converted to recording 🎶"],
	Ctxt: () => ["Please provide a text", "*[_>] Text styles for:*"],
	Caiu: (n = "") => `Send or reply to a text, usage example:\n\n${clave+n} inclusive language\n`,
	Clgs: (n = "", t = "", o = "") => [`*[ ! ] Use the correct format!* :\n\n🖼️ ~For logos with continuous text~\n[1] ${clave+n} (effect) (text...), _Usage example:_\n\n ${clave+n} space NeKosmic\n\n🖼️ ~For logos with text separated by a vertical line~\n[2] ${clave+n} (effect) (text1)|(text2), _Use example: _\n\n${clave+n} Pornhub-Style-Logo NK-|BOT\n\n🖌️ What logo do you want to create?, here is a list of effects:\n\n🎨 ${clave+n} `, `[ ! ] Effect *${n}* not found in list...`, `[ ! ] The effect *${n}* is not found in the list, please write or use the correct format...`, `[ ! ] Please write or use the format well, example of use: ${clave+n} ${t}`, `*┏━❪CREATE-LOGOS❫━*\n*┃*\n*┣ Design* : _ ${n}_\n*┃*\n*┣ Text* : _${t}_\n*┃*\n*┣ Creation Date* : _${o}_\n*┃*\n *┗❪ Text-Pro ❫━*`],
	Cgod: () => ["Technological Otakus", "Main Creator", "Current Owner", "How Sexy You Are"],
	Dfbv: (n = "") => ["And the link...?", "*[ ! ] And the facebook link?*", `*[ ! ] Invalid Link*\n_Please use a valid Facebook Video Link_\n\nExample of use: ${clave+n} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Error may the link is invalid or the video is private, try it again later"],
	Dgit: (n = "") => [`Please use a github URL, example:\n${clave+n} https://github.com/adiwajshing/Baileys`, "Github account banned, please use another URL", "[ ! ] URL from github invalid"],
	Dmdf: (e = "", n = "", t = "", o = "", a = "", i = "") => ["*[ ! ] And the Mediafire Link?*", "*[ ! ] Invalid Link*\n_Please use a MediaFire link_", `*Name:* ${e}\n*Size:* ${n}\n*Extension:* ${t}\n*Upload Date:* ${o}\n*File Type:* ${a}\n*Url:* ${i}`],
	Dtkv: (n = "") => ["*[ ! ] And the tiktok Link?*", "*[ ! ] Invalid link*\n_Please use a valid link_", `*[ ! ] Invalid link*\n_Please use a Tik Tok link_\nExm: ${clave+n} https://vm.tiktok.com/ZMYmRWCo2/`],
	Dyta: (n = "") => [`What audio do you want to download from Youtube?, Usage example: \n\n${clave+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please, use a YouTube link_\n", "[ ! ] The audio is too heavy, sorry I can't send it..."],
	Dyau: (n = "", t = "", o = "", a = "", i = "", r = "", s = "") => [`What audio do you want to download from Youtube?, Usage example: \n\n${clave+n} mtc s3rl`, `🔍 Result found for: ${n}\n${t?`✍️ Title: ${t}\n⏳ Duration: 1:23 ━━━━●───────── ${o}\n👀 Views: ${a}\n📝 Author: ${i}\n📜 Description: ${r}\n⛓️ URL: ${s}\n\n\`\`\`Sending audio, please wait...\`\`\``:""}`],
	Dytv: (n = "", t = "") => [`What video do you want to download from Youtube?, Usage example: \n\n${clave+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please, use a link from a YouTube video_\n", "[ ! ] Your video weighs too much, sorry my king I can't send it :v", `Title: ${n}\nSize: ${t}\nExtension: .mp4`],
	Dylt: () => ["*[ > ] Download Audio*", "*[ > ] Download Video*", "_Option 1_", "_Option 2_", "_Option 3_", "Select an option"],
	Dpl1: (n = "", t = "", o = "", a = "") => [`Indicate the title of the audio to download from Youtube, Usage example: \n\n${clave+n} mtc s3rl`, `_Please wait ${n}before making another request_ \n~ᵀʰᵉ ʷᵃᶦᵗᶦⁿᵍ ᵗᶦᵐᵉ ᵈᵉᵖᵉⁿᵈˢ ᵒⁿ ᵗʰᵉ ᵈᵘʳᵃᵗᶦᵒⁿ ᵒᶠ ᵗʰᵉ ᵖʳᵉᵛᶦᵒᵘˢˡʸ ʳᵉᑫᵘᵉˢᵗᵉᵈ ᵃᵘᵈᶦᵒ~`, `*✍️ Title:*${n} \n*🎹 Author:*${t}\n*🗜️ Size:*${o+"approx."} \n*⏳ Duration:* ${a}\n\n\n\n _Sending audio, please wait..._`, `An error occurred, please use the command:\n\n${clave}audio ${n}\n`],
	Dpl2: (t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "") => [`What do you want to search on Youtube?, Usage example: \n\n${clave+t} The prophet wanna play?`, "[ ! ] No results, try again...", `✍️ Title: ${t}\n⚡ Author : ${o}\n⏰ Duration : ${a}\n👀 Views : ${i}\n📆 Upload date : ${r}\n📺 Channel : ${s}\n📃 Description : ${l||"-"}\n🧬 ID : ${u}\n\n🧑‍💻 _You can use the following commands to download_${masss}\n\n┌ Audio -\n│ ┌ ${clave}ytmp3 ${d}\n└┼ ${clave}yta ${d}\n └ ${clave}ytabochi ${d}\n\n┌ Video -\n│┌ ${clave}ytmp4 ${d}\n└┼ ${clave}ytv ${d}\n └ ${clave}ytvbochi ${d}\n`],
	Efau: (n = "") => `Send or Reply an audio/voice note, with the command \n\n${clave+n}\n`,
	Eper: (e = "", n = "") => `*┏━> Profile Effect* : _${e}_\n*┗> Requested for* : _@${n}_`,
	Evid: (n = "", t = "") => [`┏━━⊱ ${n} \n┗⊱ By ${t}`, `Send or Reply a video, with the command \n\n${clave+n}\n`],
	Excc: () => ["The command contains illegal characters", "_Executing..._"],
	Gemx: (n = "") => `Usage example : ${clave+n} 🥺+🥵`,
	Gimg: (e = "", n = "", t = "") => ["What do you want to search Google images for?", "[ ! ] No results", `*[ GOOGLE-CHAN ] ✓*\n*~> Result for* : _${e}_\n*~> Size* : _${n} x ${t} PX_`],
	Gtts: (n = "") => ["Maximum characters 600", `*[ ! ] Please, after using the command ${n}, you have to add the prefix of the language in which you want to listen to the audio* \n`, `Example of use:\n\n${clave+n} en hello \n\n-> "en" = English prefix\n--\x3e "hello" = text\n`, `*[ available languages ​​]* :${masss}\n\`\`\`\n ' af': 'African',\n 'sq': 'Albanian',\n 'ar': 'Arabic',\n 'hy': 'Armenian',\n 'ca': 'Catalan',\n ' zh': 'Chinese',\n 'zh-cn': 'Chinese (Mandarin/China)',\n 'zh-tw': 'Chinese (Mandarin/Taiwan)',\n 'zh-yue': ' Chinese (Cantonese)',\n 'hr': 'Croatian',\n 'cs': 'Czech',\n 'da': 'Danish',\n 'nl': 'Dutch',\n 'en ': 'English',\n 'en-au': 'English (Australia)',\n 'en-uk': 'English (United Kingdom)',\n 'en-us': 'English (United States) )',\n 'eo': 'Esperanto',\n 'fi': 'Finnish',\n 'fr': 'French',\n 'de': 'German',\n 'el': ' Greek',\n 'ht': 'Haitian Creole',\n 'hi': 'Hindian',\n 'hu': 'Hungarian',\n 'is': 'Icelandic',\n 'id': 'Indonesian',\n 'it': 'Italian',\n 'ja': 'Japanese',\n 'ko': 'Korean',\n 'la': 'Latin',\n 'lv': 'Latvian',\n 'mk': 'Macedonian',\n 'no': 'Norwegian',\n 'pl': 'Polish',\n 'pt': 'Portuguese',\n 'pt-br ': 'Portugues (Brazil)',\n 'ro': 'Romanian',\n 'ru': 'Russian',\n 'sr': 'Serbian',\n 'sk': 'Slovakian',\n 'es': 'Spanish',\n 'es-es': 'Spanish (Spain)',\n 'es-us': 'Spanish (United States)',\n 'sw': 'Swahili', \n 'sv': 'Swedish',\n 'ta': 'Tamil',\n 'th': 'Thai',\n 'tr': 'Turkish',\n 'vi': 'Vietnamese', \n 'cy': 'Wales'\n\`\`\``],
	Gbqd: (e = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "") => ["What do you want to search in Google?", "[ ! ] No results", `〘 *GOOGLE* 〙\n_~> Results for : ${e}_\n\n🔖 Title: ${t}\n📜 Description : ${o}\n⛓️ Url: ${a}\n🖼️ Image: ${i+`\n🔍 Related searches:\n- ${r}`}\n${s?"":`\n🌐 More information: ${masss+l}`}\n`],
	Gadm: (e = "", n = "") => `*Group admins* : ${e}\n\n*Total* : \n\n${n}\n`,
	Gbnd: () => ["Chat Banned Successfully ✓", "Chat Unbanned Successfully ✓"],
	Gpbc: (e = "", n = "") => ["[ ! ] And the message you want to broadcast?", `Sending broadcast to ${e} group(s), in approximately ${n} second(s)`],
	Gcea: (n = "", t = "") => [`*At what time do you want to close the group?*\n\n_Example of use_ : \n${clave+n} 10 segundos`, `*The group will close in ${n}*\n_Action executed by: @${t}_`],
	Gdes: () => ["*[ ! ] Enter a text with which the description of the current group will be updated*", "*[ ! ] Maximum characters 512*"],
	Gnme: () => ["*[ ! ] Enter a subject/title/name/nickname with which the subject of the current group will be updated*", "*[ ! ] maximum characters is 25*"],
	Gtag: (e = "") => `${e||"ˢᵉˣʸ ᵂʰᵒᵉᵛᵉʳ ᴿᵉᵃᵈˢ ᴵᵗ ⁷ʷ⁷"}`,
	Ginf: (e = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "") => `*Group name* : ${e}\n*Created by* : _${t||"[ ! ] Number of main group creator not found"}_\n*Creation date* : _${o}_\n*Total participants* : _${a}_\n*Total administrators* : _${i}_\n${r}\n*Non-administrators* : _${s}_ \n*Group ID* : _${l}_\n*Description* : \n${masss}\n${u||""}\n`,
	Ginv: (e = "", t = "", o = "", a = "") => `*[ ! ] Summoning party members* :\n${e}\n\n*~> Summoner* : _@${t}_\n*~> Message* : _${o||"There is no :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${a.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n`}\n╚═══════════\n`,
	Glis: (e = "") => ["Outside the group", "Inside the group", `*Groups with the highest activity of ${NombreDelBot} currently:*\n\n${e}`],
	Gvts: (t = "", o = "", a = "", i = "") => ["Voting reset successfully ✓",`*[ ! ] There is no active vote in this group yet*\n_To create a new vote use the command_ ${clave}votacion`,"*[ ! ] You can't vote again*",`\`\`\`[ VOTE ]\`\`\`\n\n📋 *Reason:* ${a}\n✍️ *Voter:* ${b}\n\n📝\n┣🫂\n┣━⊱ Votes in favor [✓]\n${c}\n┗━━⊱ Total: ${e}\n\n📝\n┣👥\n┣━⊱ Voted against [X]\n${d}\n┗━━⊱ Total: ${f}\n\n┌ Yes vote ✔️\n└―  ${clave}sivotar\n\n┌ No vote ❌\n└―  ${clave}novotar`,`\`\`\`[ CURRENT VOTES ]\`\`\`\n\n📋 *Reason:* ${a} <=\n\n📝\n┣🫂\n┣━⊱ Votes in favor [✓]\n${b}\n┗━━⊱ Total: ${d}\n\n📝\n┣👥\n┣━⊱ Voted against [X]\n${c}\n┗━━⊱ Total: ${e} \n${f?`\nUse the command ${clave}reiniciarvotos to restart the vote ✓`:""}`,`*[ ! ] There is still an active vote in the group*\n_Use the command_ : ${clave}reiniciarvotos _to create a new vote_`,`*Enter a reason for voting, example:*\n\n${clave+a} is the manager good?\n`,"The reason for the vote is very short, be creative!",`⚡ ${a} *Started a new vote in the group:* ${b}\n\n_How to participate in the vote:_${masss}\n\n┏⊱   ${clave}sivotar\n┗━⊱  To give a positive vote ✔️\n\n┏⊱   ${clave}novotar \n┗━⊱  To give a negative vote ❌\n\n┏⊱   ${clave}vervotos \n┗━⊱  To verify the votes 👀\n\n┏⊱   ${clave}reiniciarvotos \n┗━⊱  To delete an active vote ♻️`,`\`\`\`[ VOTE ]\`\`\`\n\n📋 *Reason:* ${a}\n👤 *Pollster:* ${b}\n\n📝\n┣🫂\n┣━⊱ Votes in favor [✓]\n┋\n┗━━⊱ Total: ${c}\n\n📝\n┣👥\n┣━⊱ Voted against [X]\n┋\n┗━━⊱ Total: ${d}`],
	Gadd: (e = "") => ["Turn on restricted mode to perform this action", `*[ ! ] Error, could not add @${e} to group*\n\n_Please send invite link manually wa.me/${e}_\n`],
	Hblt: (e = "", n = "", t = "", o = "", a = "") => [`\n@${e} ${n?"activated":"deactivated"} *${t}* successfully ${o?"for this bot":a?"":"for this chat"}\n`, "Here is the list of options :3", "Option", "Description:", "Command:"],
	Hblr: () => [{
		title: "[ ⬇️ AUTOMATIC WELCOME ]",
		rows: [{
			title: "[ 🛬 Activate ]",
			description: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʷᵉˡᶜᵒᵐᵉ ⁿᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}encender bienvenida`
		}, {
			title: "[ 🛫 Deactivate ]",
			description: "~ᴺᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿ ᵃ ᵍʳᵒᵘᵖ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʷᵉˡᶜᵒᵐᵉᵈ~",
			rowId: `${clave}apagar bienvenida`
		}]
	}, {
		title: "[ ⬇️ DETECTION ]",
		rows: [{
			title: "[ 🌕 Activate ]",
			description: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}encender deteccion`
		}, {
			title: "[ 🌑 Deactivate ]",
			description: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}apagar deteccion`
		}]
	}, {
		title: "[ ⬇️ ANTI - ELIMINATE ]",
		rows: [{
			title: "[ ♻️ Activate ]",
			description: "~ᴬˡˡ ᵈᵉˡᵉᵗᵉᵈ ᵐᵉˢˢᵃᵍᵉˢ ʷᶦˡˡ ᵇᵉ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ ʳᵉᶜᵒᵛᵉʳᵉᵈ~",
			rowId: `${clave}encender antieliminar`
		}, {
			title: "[ 🗑️ Deactivate ]",
			description: "~ᴰᵉˡᵉᵗᵉᵈ ᵐᵉˢˢᵃᵍᵉˢ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʳᵉᶜᵒᵛᵉʳᵉᵈ~",
			rowId: `${clave}encender eliminar`
		}]
	}, {
		title: "[ ⬇️ USE - DOCUMENTS ]",
		rows: [{
			title: "[ 🗃️ Activate ]",
			description: "~ᵀʰᵉ ᵘˢᵉ ᵒᶠ ᵈᵒᶜᵘᵐᵉⁿᵗˢ ʷᶦˡˡ ᵇᵉ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ ᶠᵒʳ ᵗʰᵉ ᵇᵒᵗ~",
			rowId: `${clave}encender document`
		}, {
			title: "[ 🗳️ Deactivate ]",
			description: "~ᵁˢᵉ ᵒᶠ ᵈᶦˢᵃᵇˡᵉᵈ ᵈᵒᶜᵘᵐᵉⁿᵗˢ ᶠᵒʳ ᵗʰᵉ ᵇᵒᵗ~",
			rowId: `${clave}apagar document`
		}]
	}, {
		title: "[ ⬇️ INSTRUCTIONS FOR USE ]",
		rows: [{
			title: "[ 🏬 Public ]",
			description: "~ᴾᵘᵇˡᶦᶜ ᵐᵒᵈᵉ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ ⁿᵒʷ ᵃˡˡ ᵘˢᵉʳˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
			rowId: `${clave}encender publico`
		}, {
			title: "[ 🏡 Private ]",
			description: "~ᴾʳᶦᵛᵃᵗᵉ ᵐᵒᵈᵉ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ ⁿᵒʷ ᵒⁿˡʸ ᵗʰᵉ ᵒʷⁿᵉʳ ᵒᶠ ᵗʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᶦᵗ~",
			rowId: `${clave}apagar publico`
		}]
	}, {
		title: "[ ⬇️ ANTI - FOREIGNERS ]",
		rows: [{
			title: "[ 🏳️ Activate ]",
			description: "~ᵀʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ⁿᵘᵐᵇᵉʳˢ ᵒᵗʰᵉʳ ᵗʰᵃⁿ ᵗʰᵉ ᵒʷⁿᵉʳ'ˢ ᵖʳᵉᶠᶦˣ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~\nᴺᵘᵐᵇᵉʳˢ ˢᵗᵃʳᵗᶦⁿᵍ ʷᶦᵗʰ +" + PaisPrefix + " ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʳᵉᵐᵒᵛᵉᵈ",
			rowId: `${clave}encender antiextranjeros`
		}, {
			title: "[ 🏴 Deactivate ]",
			description: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ ᶠᵒʳᵉᶦᵍⁿᵉʳˢ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}apagar antiextranjeros`
		}]
	}, {
		title: "[ ⬇️ ANTI-FAKES 1 ]",
		rows: [{
			title: "[ 🛡️ Activate ]",
			description: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᵁˢ ⁿᵘᵐᵇᵉʳˢ ⁺¹~",
			rowId: `${clave}encender antifake1`
		}, {
			title: "[ ⚰️ Deactivate ]",
			description: "~ᴰᶦˢᵃᵇˡᵉ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}apagar antifake1`
		}]
	}, {
		title: "[ ⬇️ ANTI - FAKES 2 ]",
		rows: [{
			title: "[ 🛡️ Activate ]",
			description: "~ᴾʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ˢᵗʳᵃⁿᵍᵉ ᵒʳ ˢᵘˢᵖᶦᶜᶦᵒᵘˢ ⁿᵘᵐᵇᵉʳˢ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~",
			rowId: `${clave}encender antifake2`
		}, {
			title: "[ ⚰️ Deactivate ]",
			description: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}apagar antifake2`
		}]
	}, {
		title: "[ ⬇️ ANTI-LINK ]",
		rows: [{
			title: "[ 🗡️ Activate ]",
			description: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ᵖᵒˢᵗ ˡᶦⁿᵏˢ ᶦⁿ ᵃ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}encender antilink`
		}, {
			title: "[ 😴 Deactivate ]",
			description: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵗᵃᵏᵉ ᵃⁿʸ ᵃᶜᵗᶦᵒⁿ ʷʰᵉⁿ ᵐᵉˢˢᵃᵍᵉˢ ᵃʳᵉ ˢᵉⁿᵗ~",
			rowId: `${clave}apagar antilink`
		}]
	}, {
		title: "[ ⬇️ ANTI - LINK 2 ]",
		rows: [{
			title: "[ 🗡️ Activate ]",
			description: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵗʰᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ˢᵉⁿᵈ ˡᶦⁿᵏˢ⁻ᵘʳˡˢ~",
			rowId: `${clave}encender antilink2`
		}, {
			title: "[ 😴 Deactivate ]",
			description: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵖᵉʳᶠᵒʳᵐ ᵃⁿʸ ᵃᶜᵗᶦᵒⁿ ʷʰᵉⁿ ˡᶦⁿᵏˢ⁻ᵘʳˡˢ ᵃʳᵉ ˢᵉⁿᵗ~",
			rowId: `${clave}apagar antilink2`
		}]
	}, {
		title: "[ ⬇️ AUTO - LEVEL ]",
		rows: [{
			title: "[ 👑 Activate ]",
			description: "~ᵁˢᵉʳˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ˡᵉᵛᵉˡ ᵘᵖ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ~",
			rowId: `${clave}encender autolevelup`
		}, {
			title: "[ 🎓 Deactivate ]",
			description: "~ᵁˢᵉʳˢ ʷᶦˡˡ ⁿᵒ ˡᵒⁿᵍᵉʳ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ˡᵉᵛᵉˡ ᵘᵖ ᵃᵘᵗᵒᵐᵃᵗᶦᶜᵃˡˡʸ~",
			rowId: `${clave}apagar autolevelup`
		}]
	}, {
		title: "[ ⬇️ RESTRICTED MODE ]",
		rows: [{
			title: "[ 🌚 Activated ]",
			description: "~ᴬᶜᵗᶦᵛᵃᵗᵉ ᵗʰᵉ ᶠᵘⁿᶜᵗᶦᵒⁿ ᵗᵒ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶠʳᵒᵐ ᵃ ᵍʳᵒᵘᵖ ⁽ᵃᵗ ʸᵒᵘʳ ᵒʷⁿ ʳᶦˢᵏ⁾~",
			rowId: `${clave}encender restringir`
		}, {
			title: "[ 🌝 Disabled ]",
			description: "~ᴬᶜᵗᶦᵒⁿˢ ᵗᵒ ᵃᵈᵈ ᵃⁿᵈ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᵈᶦˢᵃᵇˡᵉᵈ~",
			rowId: `${clave}apagar restringir`
		}]
	}, {
		title: "[ ⬇️ NO BOT MODE ]",
		rows: [{
			title: "[ 🙈 Activate ]",
			description: "~ᴵᵗ ᵒⁿˡʸ ᵖʳᶦⁿᵗˢ ᵗʰᵉ ᵐᵉˢˢᵃᵍᵉˢ ʳᵉᶜᵉᶦᵛᵉᵈ ᶦⁿ ᵗʰᵉ ᶜᵒⁿˢᵒˡᵉ ᵃⁿᵈ ᵃᵈᵈˢ ᵘˢᵉʳˢ ᵗᵒ ᵗʰᵉ ᵈᵃᵗᵃᵇᵃˢᵉ~",
			rowId: `${clave}encender atender`
		}, {
			title: "[ 🙉 Deactivate ]",
			description: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵇᵉᵍᶦⁿ ᵗᵒ ᶠᵘˡᶠᶦˡˡ ᵗʰᵉ ʳᵉᑫᵘᵉˢᵗᵉᵈ ᶠᵘⁿᶜᵗᶦᵒⁿˢ~",
			rowId: `${clave}apagar atender`
		}]
	}, {
		title: "[ ⬇️ AUTO - READ ]",
		rows: [{
			title: "[ 🤓 Read ]",
			description: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ˢᵗᵃʳᵗ ᵐᵃʳᵏᶦⁿᵍ ᶜʰᵃᵗˢ ᵃˢ ʳᵉᵃᵈ~",
			rowId: `${clave}encender autoleer`
		}, {
			title: "[ 😵 Do not read ]",
			description: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ⁿᵒᵗ ᵐᵃʳᵏ ᶜʰᵃᵗˢ ᵃˢ ʳᵉᵃᵈ~",
			rowId: `${clave}apagar autoleer`
		}]
	}, {
		title: "[ ⬇️ ANTI - PRIVATE ]",
		rows: [{
			title: "[ 💔 Activate ]",
			description: "~ᴺᵒʷ ᵉᵛᵉʳʸᵒⁿᵉ ʷʰᵒ ᵗᵃˡᵏˢ ᵗᵒ ᵗʰᵉ ᵇᵒᵗ ᶦⁿ ᵖʳᶦᵛᵃᵗᵉ ʷᶦˡˡ ᵇᵉ ᵇˡᵒᶜᵏᵉᵈ~",
			rowId: `${clave}encender noprivado`
		}, {
			title: "[ ❤️ Deactivate ]",
			description: "~ᴬⁿᵗᶦ⁻ᵖʳᶦᵛᵃᵗᵉ ᵐᵒᵈᵉ ᵈᶦˢᵃᵇˡᵉᵈ~",
			rowId: `${clave}apagar noprivado`
		}]
	}, {
		title: "[ ⬇️ ANTI - CRASHED ]",
		rows: [{
			title: "[ 🐸 Activate ]",
			description: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᶜʳᵃˢʰ ᵐᵉˢˢᵃᵍᵉˢ ᶦⁿ ᵂʰᵃᵗˢᴬᵖᵖ~",
			rowId: `${clave}encender antitraba`
		}, {
			title: "[ 👾 Deactivate ]",
			description: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᶦˢᵃᵇˡᵉᵈ~",
			rowId: `${clave}apagar antitraba`
		}]
	}, {
		title: "[ ⬇️ CHAT - BOT ]",
		rows: [{
			title: "[ 🗣️ Activate ]",
			description: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵃ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᵃ ᵂʰᵃᵗˢᴬᵖᵖ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}encender chatbot`
		}, {
			title: "[ 👤 Deactivate ]",
			description: "~ᴰᶦˢᵃᵇˡᵉ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᶜᵘʳʳᵉⁿᵗ ᵍʳᵒᵘᵖ~",
			rowId: `${clave}apagar chatbot`
		}]
	}, {
		title: "[ ⬇️ SUB - BOTS ]",
		rows: [{
			title: "[ 🌳 Activate ]",
			description: "~ᴺᵒʷ ᵃˡˡ ᵘˢᵉʳˢ ᶜᵃⁿ ᵇᵉᶜᵒᵐᵉ ᵗᵉᵐᵖᵒʳᵃʳʸ ᵇᵒᵗˢ~",
			rowId: `${clave}encender yesclabots`
		}, {
			title: "[ 🌱 Deactivate ]",
			description: "~ᵀʰᵉ ᶜᵒᵐᵐᵃⁿᵈ ᵗᵒ ᵇᵉ ᵃ ᵇᵒᵗ ᶜᵃⁿⁿᵒᵗ ᵇᵉ ᵘˢᵉᵈ~",
			rowId: `${clave}encender noesclabots`
		}]
	}, {
		title: "[ ⬇️ ONLY - ADMINS ]",
		rows: [{
			title: "[ ⭐ Activate ]",
			description: "~ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
			rowId: `${clave}encender soloadmins`
		}, {
			title: "[ ✨ Deactivate ]",
			description: "~ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
			rowId: `${clave}apagar soloadmins`
		}]
	}],
	Hrio: (a="", b="", c="", d="", e="", f="", g="", h="", i="", j="", k="", l="", m="", o="", p="", q="", r="", s="", t="", u="", v="", w="", x="") => `\`\`\`\n「 TIME-ZONE 🌎 」\n\n⌚Perú      : ${a}\n⌚Mexico    : ${b}\n⌚Bolivia   : ${c}\n⌚Chile     : ${d}\n⌚Argentina : ${e}\n⌚Colombia  : ${f}\n⌚Ecuador   : ${g}\n⌚Costa_Rica: ${h}\n⌚Cuba      : ${i}\n⌚Guatemala : ${j}\n⌚Honduras  : ${k}\n⌚Nicaragua : ${l}\n⌚Panama    : ${m}\n⌚Uruguay   : ${o}\n⌚Venezuela : ${p}\n⌚Paraguay  : ${q}\n⌚New York  : ${r}\n⌚Brasil    : ${s}\n⌚G.N.Q     : ${t}\n⌚España    : ${u}\n⌚Asia      : ${v}\n\`\`\`\n${masss}\nCurrent server time zone:\n[ ${w} ]\n${x}`,
	Hcmd: (n = "") => ["No hashes found!", "[ ! ] You do not have permission to remove this sticker-cmd", "Sticker-cmd successfully removed ✓", "*HASH LIST*", "*Identifier*", "Blocked", " *Executable function*", "Reply a message from this chat!", "Missing SHA256 hash(sticker)", "[ ! ] Hash not found in the database", "Done ✓", `Reply a sticker with the command: \n\n*${clave+n}*`, `Usage example:\n\n${clave+n} ${clave}menu\n`, "You do not have permission to make this request.", "Completed successfully ✓"],
	Hnwa: (a="", b="") => [`Please provide a number, Example usage:\n\n${clave + a} 51991378xxx\n`, "Please add 'x' in the number provided", "A maximum of 3 'x' are allowed! :v", "*[ LIST OF NUMBERS IN WHATSAPP ]*\n\n*🟢 Active numbers:*\n", "\n*🔴Numbers without information:*\n", "\n\n🧑‍💻 *Numbers without WhatsApp account within the range you provided:*\n", `*🥏 Number:* wa.me/${a}\n*Bio:* Hey there! I am using WhatsApp.\n`, `*🪀 Number:* wa.me/${a}\n*Bio:* ${b}\n`],
	Hesc: () => ["Please provide a text", "Maximum characters 630!"],
	Hfth: () => "The *URL* parameter must start with http:// or https:// -.-",
	Hrco: (n = "") => [`Send or Reply a video or image with the command \n\n${clave+n}\n`, "[ ! ] Could not retrieve a comment."],
	Hsvf: (n = "") => [`*What name do you want to save the file with?*\n_Usage example_ : \n\n${clave+n} test-plugin.js\n`, "[_>] Please reply to a message that contains correct syntax.. .", `File *${n}* was saved successfully ✓`, `Media successfully saved to *${n}*`],
	Htdr: (n = "") => `Send or reply to a text with the command ${clave+n} <language> [text], example:\n\n${clave+n} en Hola Mundo\n`,
	Hfmp: () => ["I'm still working on a pending request, please wait your turn :D", "It was done in FFmpeg"],
	Iclm: (e = "", n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "") => ["[ ! ] Enter city name", `[ WEATHER ]\n\n📆 Date: ${e}\n🌁 City: ${n}\n🗺️ Time Zone: ${t}\n📄 Description : ${o}\n🌡️Temperature: Minimum ${a}ºC / Maximum ${i}ºC\n🎭 Sensation: ${r}\n🏞️ Atmospheric pressure: ${s}millibars\n💦 Humidity: ${l}%\n👁️ Visibility: ${u}msnm\n🌪️ Wind: Speed ​​${d}km/h\n☁️ Clouds: ${$}%`],
	Igit: (e = "", n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "") => ["[ ! ] My main creator's account is currently suspended, you can do another search on github or support him at https://gitlab.com/NeKosmic :D", `[ GITHUB-USER-🐱 ]\n\n🧿 ID : ${e}\n⚡ User: < ${n} />\n🔥 Name: ${t}\n🫂 Followers: ${o}\n🤝 Following: ${a}\n🧰 Repositories: ${i}\n🏗️ Company: ${r}\n🧑‍💻 Blog: ${s}\n🌎 Location: ${l}\n📈 Creation Date: ${u}\n📉 Last Update: ${d}\n📜 Biography: ${$}`],
	Itkt: (n = "", k = "") => ["*[ ! ] Enter a valid username...*", `Please, only use a nickname!\nExample of use:\n\n${clave+n} nekosmic`, `${n.id?`🌐 ID: ${n.id}\n\n`:k.id?`🌐 ID: ${k.id}\n\n`:""}⚡ User: ${n.usuario||k.usuario}\n\n🔥 Nickname: ${n.apodo||k.apodo}\n\n📜 Description: ${n.bio||k.bio}${n.verificado?"\n\n🎭 Verified: "+(n.verificado?"🟢":"🔴"):k.verificado?"\n\n🎭 Verified: "+(k.verificado?"🟢":"🔴"):""}${n.pais?`\n\n🌎 Country: ${n.pais}`:k.pais?`\n\n🌎 Country: ${k.pais}`:""}\n\n👥 Followers: ${n.seguidores||k.seguidores}\n\n🤝 Following: ${n.siguiendo||k.siguiendo}${n.corazones?`\n\n💞 Hearts: ${n.corazones}`:k.corazones?`\n\n💞 Hearts: ${k.corazones}`:""}${n.videos?`\n\n🎞️ Videos: ${n.videos}`:k.videos?`\n\n🎞️ Videos: ${k.videos}`:""}\n\n⛓️ Link: https://www.tiktok.com/${n.usuario||k.usuario}\n`],
	Jtli: (n = "", t = "") => ["You are already in an active room -.-", `*[ ! ] Enter a name to create a new room*\n\nExample of use: \n\n${clave+n} latam\n`, "Rival found! \nᵀʰᵉ ᶦⁿᶦᵗᶦᵃᵗᵒʳ ʰᵃˢ ᵗᵒ ˢᵗᵃʳᵗ ᵗʰᵉ ᵍᵃᵐᵉ ᵇʸ ᵗʸᵖᶦⁿᵍ ᵃ ⁿᵘᵐᵇᵉʳ ᶠʳᵒᵐ ¹ ᵗᵒ ⁹", "You have to start the game", "~Type :~\n\nrendirse\n\n~to give up~", `*[ ! ] Waiting for opponent*\nto join the game use the command ${clave+n} ${t}\n\n_Reward for the winner +4000 XP_\n`, "Game is over", "Invalid", " Invalid position", "Invalid position", "Win!", "Game over, draw", "Turn for", "*Room 3 online successfully eliminated ✓*"],
	Jcal: (n = "") => [`*[ ! ] Use well the command :*\n${clave+n} @tag|message|reply`, `*[ ! ] Add slashes between each word all together*\n\n_Usage example_ : \n${clave+n} @taggeduser|blessme|blessed\n~Don't forget to use this slash~ : " | "`, "No text :v", " use 2 slashes!!!\n\n@tag|message|reply ✓"],
	Jmts: (n = "", t = "", o = "") => [`*Available modes* : \n_${Object.keys(n).join("_\n_")}_\n*Example of use* : \n\n${clave+t} kinder\n`, `*[ ! ] Please use a valid mode!*\n*You can use one of these available modes* : \n_${Object.keys(n).join("_\n_")}_\n*`, "[ ! ] There are still unanswered questions in this chat", `¿What is the result of *${n}*?\n\nAvailable time: ${t} seconds\n Reward for correct answer: ${o} XP`, `¡Time is over!\n\nThe answer is: ${n}\n`, "The question has already been resolved....", `*Correct answer!*\nHere is your reward:\n+${n} XP\n`, `*[ ! ] Time is over*\nAnswer: *${n}*`, `*Wrong answer!*\nYou have left ${n} opportunities`],
	Jnij: (e = "") => ["Use a name or nickname...", `☯️ Ninja name for _${e}_:`],
	Jprj: (e = "", n = "") => [`❥ *Formed couple* :\n\n┏─━─━─━∞◆∞━─━─━─┓\n@${e} ❤️ @${n} \n┗─━─━─━∞◆∞━─━─━─┛\n`, `This was possible thanks to ${e}`],
	Jqun: (n = "") => [`*[ ! ] Make up a subject*\n_Example:_\n\n${clave+n} is gay :v?\n`, "*[ ! ] The subject is too short*"],
	Jtgy: (e = "", n = "") => ["_Calculating percentage..._", "Your gay percentage is ", `@${e} is ${n} gay`, "*[ ! ] Gay limit exceeded [ ! ]*"],
	Jtop: () => ["*[ ! ] Which top do you want to generate?*", "*[ ! ] The text is too short*"],
	Jtgs: (e = "", n = "", t = "", o = "") => [`*Player : @${e}*\n*[ Congratulations you won!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${n}*\n*┃ ├────────┤ ┃*\n*${t} <==*\n*┃ ├────────┤ ┃*\n*${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Your reward:* \n+50000 money`, `Player : @${e}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${n}\n┃ ├────────┤ ┃\n${t}\n┃ ├────────┤ ┃\n${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
	Lpdr: () => "Cleaned  './tmp'  folder successfully ✓",
	Menu: () => ["_CONVERTERS :_", "_ANIME :_", "_CMDS-CASUAL :_", "_CMDS OWNER :_", "_TOOLS :_", "_PREMIUM :_", "_ADVANCED :_", "_CMDS ADMINS :_ ", "_CMDS GROUPS :_", "_ART AND DESIGN :_", "_SEARCH :_", "_SERVICES :_", "_XP & LIMIT :_", "_RPG, GAMES :_", "_HOBBY :_", "_BE SUB-BOT :_", "_OTHERS :_", "_Loading menu..._ ", "(Limited)", "(Premium)", "_COMMANDS_", "Active time:", "Version of bot:", "Bot Owner:", "Unique prefix:", "Registered:", "Customer:", "Premium:", "Limit Remaining:", "Level:", "Role:", "XP :", "[ ! ] An error occurred in the menu :/", "_SIMPLE-CRASHER :_", "_DOWNLOADER :_", "_SEARCH :_", "MENU +18"],
	Menp: (e = "") => `Hello @${e}! 👋`,
	Menl: () => [{
		title: "Menu-Simple 🌌",
		rows: [{
			title: "Basic-Functions",
			description: "~ˢᶦᵐᵖˡᵉ ᶜᵒᵐᵐᵃⁿᵈ ˡᶦˢᵗ~",
			rowId: `${clave}menusimple`
		}]
	}, {
		title: "Menu-Internet 🌐",
		rows: [{
			title: "Random-Menu",
			description: "~ᴹᶦˢᶜᵉˡˡᵃⁿᵉᵒᵘˢ ᶜᵒᵐᵐᵃⁿᵈ ᴸᶦˢᵗ~",
			rowId: `${clave}randmenu`
		}]
	}, {
		title: "Menu-Artistic 🎨",
		rows: [{
			title: "Create-Logos",
			description: "~ᶜᵒᵐᵐᵃⁿᵈˢ ᵗᵒ ᶜʳᵉᵃᵗᵉ ˡᵒᵍᵒˢ ᵃⁿᵈ ᵐᵒʳᵉ~",
			rowId: `${clave}logofabrica`
		}]
	}, {
		title: "Menu-Otaku/Anime 🀄",
		rows: [{
			title: "Random-Anime",
			description: "~ᴬˢˢᵒʳᵗᵉᵈ ᴼᵗᵃᵏᵘ/ᴬⁿᶦᵐᵉ ᶜᵒᵐᵐᵃⁿᵈˢ~",
			rowId: `${clave}mianime`
		}]
	}, {
		title: "Menu-Hentai/Anime 🥵",
		rows: [{
			title: "The-Bible",
			description: "~ᶜᵒᵐᵐᵃⁿᵈᵒˢ ᴴᵉⁿᵗᵃᶦ⁻ᶜᵃʳᵗᵒᵒⁿˢ ⁺¹⁸~",
			rowId: `${clave}labiblia`
		}]
	}, {
		title: "Menu-Complete ♻️",
		rows: [{
			title: "Major",
			description: "~ᶠᵘˡˡ ˡᶦˢᵗ ᵒᶠ ᵃˡˡ ᶜᵒᵐᵐᵃⁿᵈˢ~",
			rowId: `${clave}menucompleto`
		}]
	}],
	Mlti: (n = "") => ["Automatic language change", `*[NK-BOT MULTI-LANGUAGE]*\n \n🇵🇪\n*┣⊱ Available language Spanish ☰*\n*┣━⊱* _How to activate?, Example:_ \n*┗━━⊱* ${clave+n} es\n🇺🇸\n*┣⊱ English language available ☰*\n*┣━⊱* _How to activate?, Example:_\n*┗━━ ⊱* ${clave+n} en\n🇧🇷\n*┣⊱ Available language português ☰*\n*┣━⊱* _How to activate?, Example:_\n*┗━━⊱* ${clave+n} pt\n🇮🇩\n*┣⊱ Tersedia Bahasa Indonesia ☰*\n*┣━⊱* _Bagaimana cara mengaktifkannya?, Contoh:_\n*┗━━⊱* ${clave+n} id\n🌎\n*┣⊱ Automatic multi language ☰*\n*┣━⊱* _How to activate?, Example:_\n*┗━━⊱* ${clave+n} auto\n\n\`\`\` [NOTE] : This does not affect bot commands\n\`\`\`\n\n@NeKosmic`],
	Nwqr: (n = "") => [`\n_Do you want to generate a new QR code?, to generate a new QR code use the command_\n\n${clave+n} continuar\n`, "\n_The current session of the bot was successfully deleted, now you can generate a new one QR code from console to scan._\n"],
	Pntr: (e = "") => ["What image do you want to look for on pinterest?", `*[ PINTEREST ] ✓*\nResult for: _${e}_`],
	Pstr: (e = "", n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "") => ["What do you want to search in playstore?", `🔍 Result: ${e}\n🧬 Identifier: ${n}\n⛓️ Link: ${t}\n🖼️ Image: ${o}\n✍️ Developer: ${a}\n📜 Description: ${i||r}\n💲 Currency: ${s}\n🎭 Free: ${l}\n💸 Price: ${u}\n📈 Score: ${d}`],
	Rpga: (n = "", t = "", o = "", a = "") => [`Use format *${clave+n} [box] [value]*\nUsage example: \n\n${clave+n} ordinario 1\n\n📍List of boxes:`, `Your *box type ${n+t}* is not enough!, you have ${o} box type *${n+t}*\nuse the command:\n\n${clave}comprar ${t} ${a}\n`, `You have opened *${n}* box(es) of type ${t+o} and get:`, "Congratulations, you have a rare item, which is:", "Congratulations, you have an epic item, which is:"],
	Rpgv: (n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "", c = "", m = "", p = "", h = "") => [`Requires at least 80 ❤️Health for adventure!!\nplease buy ❤️Health first, use command:\n\n${clave}comprar elixir <amount>\n\n then:\n\n${clave}sanar <amount>\n`, `*[ ! ] You were already on an adventure, please wait*\n🕐${n}...*\n`, "End of your adventure 🎭", `\n\n🔖 _You were on ${n}, ${t} but you have:_\n`, `*[ ADVENTURE 🌎 ]*\n\n> *Country:* ${n}\n> *Country Code:* ${t}\n> *Building Number: * ${o} ${a}\n> *City Key:* ${i}\n> *City Suffix:* ${r}\n> *Community:* ${s}\n> * Location:* ${l}\n> *Id:* ${u}\n> *State:* ${d}\n> *Address:* ${$}\n> *Street:* ${c}\n> *Street Suffix:* ${m}\n> *Time Zone:* ${p}\n> *Zip Code:* ${h}`],
	Rpge: () => ["you fell asleep for a whole day", "you got food poisoning from eating in a poor quality restaurant", "you lost your belongings", "you had to fight a dragon", "you lost your belongings", "you were attacked by a gang", "you worked as a farmer all day", "you suffered an attack next to your horse", "you went to jail for a slander", "you paid your taxes", "you were attacked by a swarm of bees", "a step passed 10 magnitude earthquake", "you were lost in a nearby forest for 24 hours", "you were ripped off at a fair", "a full day of debauchery", "you lost at bets", "fought a dangerous battle", "you were enslaved"],
	Rpgr: (n = "", t = "", o = "", a = "", i = "") => [`Use format *${clave+n} [type] [page]*\nusage example: \n\n${clave+n} nkoins 1\n\n📍List of types:`, `• *${n} page rank ${t} of ${o}* •\nYou: *${a}* of *${i}*`],
	Rpgc: (n = "", t = "", o = "", a = "", i = "") => ["Your limits are full", `You have just exceeded the predefined limit of ${n} per user, what a hacker are you :0`, `You cannot buy more than ${n} limit, your current limit is: ${t} `, `Use format *${clave+n} [item] [quantity]*\nExample of usage: \n\n${clave+n} elixir 10\n \n📍List of items:`, "Cost", "Value", `You don't have enough ${n} to buy *${t}* ${o}. You need *${a}* ${i} to be able to buy`, `You bought *${n}* ${t} ✓`, `You don't have enough *${n}* to sell, you only have ${t} items`, `You sold *${n}* ${t} ✓`],
	Rpgd: (e = "") => `You've already claimed your daily reward! Please come back after *${e}.*`,
	Rpgi: (e = "", n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "") => `Inventory *${e}*\n\n${n}${t?`\n\n\n*📍Tools*\n${t}`:""}${o?`\n\n\n*📍 Items*\n${o}\n*🎒 Total items:* ${a} items`:""}${i?`\n\n\n*📍 Boxes*\n${i}\n*🎒 Total Boxes:* ${r} Boxes`:""}${s?`\n\n\n*📍 Pets*\n${s}`:""}${l?`\n\n*⌚ Cooldowns*\n${l}`:""}\n`,
	Rpgm: (e = "") => `You have already claimed your monthly gift, next claim in *${e}.*`,
	Rpgs: (n = "", t = "") => ["Please provide an amount...!", "Your ❤️health is full -.-", `Your 🥤elixir is not enough, you have *${n}*\nuse the command\n\n${clave}comprar elixir ${t}\n`, `You get *${n}* 🥤elixir(s)`],
	Rpgt: (n = "", t = "", o = "", a = "") => ["You are already making a transfer!", `Use format ${clave+n} [type] [amount] [number]\nexample of use:\n\n${clave+n} nkoins 9999 @51991378809\n\n 📍 Transferable Items:`, "Tag a user or enter the number!!!", `User *${n}* not found in the database -.-`, `Your *${n}${t}* is less than *${o}*`, `Are you sure you want to transfer *${n}* ${t}${o} to *@${a}*\n\n*Answer :*\nsip \n_to confirm _\n\n*Reply:*\nnop\n_to reject_\n\n\nYou have 60 seconds`, "Rejected", `Transfer successful *${n}* ${t}${o} a *@${a}*`, `Error transferring *${n}* ${t}${o} to *@${a}*`, "Time is up..."],
	Stke: (n = "") => ["Reply a sticker from the current chat...", `Send or Reply a sticker with the command ${clave+n}`, "Advice, remove your sticker for everyone ;v", "[ ! ] Reply a sticker to get metadata", "[ ! ] Reply to a sticker to give it a fake price :p", "Reply to a sticker to edit the EXIF ​​your way"],
	Stks: (n = "") => ["*[ ! ] Maximum video length is 8 seconds!*", `*[ ! ] Please Send or Reply a video or an image using the command ${clave+n}*\n_NOTE : video duration 1 to 8 seconds maximum_ ✓`, "[ ! ] Invalid url, try another ;3"],
	Stkf: (n = "", t = "") => [`*This command is to get stickers from ${n?"Telegram":"Line"}*\n\nUsage example:\n${clave+t} anime`, `*Results found for ~${n}~, total:* ${t}\n_Sending stickers. .._`],
	Stkw: (n = "") => [`Add the name of the package and name of the author, example: \n\n${clave+n} package|author\n`, "*[ ! ] The length of the video is 7 seconds maximum...!!! *", `*[ ! ] Please Send or Reply an image or video using the command ${clave+n}*`, "[ ! ] Invalid url, try another ;3"],
	Snvl: (e = "", n = "", t = "", o = "", a = "") => [`[ ! ] Your current XP is less than 0, you must ${e} XP to continue leveling up...`, `\n🪀 Current Level *${e} (${n}/${t})*\n🔥 You are missing *${o}* XP before you can level up to the next level\n`, `Congratulations!  ${e}\nYou just leveled up`, `\`\`\`${e}\`\`\`\n\n♻️ *Previous level* : ${n}\n🪀 *New level* : ${t}\n⚔️ *Customer role* : ${o}\n📆 *Date* : ${a}\n_The more you interact with the bot, the higher your level will be_`],
	Uact: (n = "", t = "", o = "") => ["*Which participant do you want to make an administrator?*", `Example of use:\n\n${clave+n} @+51995...\n`, "Who do you want to ban?", "[ ! ] Please tag the user you wish to ban", `User banned, ${n} will no longer be able to use the bot [ ! ]`, "*Which admin do you want to unban?*", "Who do you want to unban?", `User unbanned, ${n} can use the bot again [✓]`, `Please tag or mention someone!\n\nExample of use:\n${clave+n} @${t}`, `*${n}* stopped being premium`, "Please indicate the number of days", `Numbers only !\n\nExample of use:\n${clave+n} @${t} 51987...`, "[ ! ] Maximum 7 days", `*[ PREMIUM USER ]*\n🔖 *Name:* ${n}\n📆 *Days:* ${t} day(s)\n📉 *Remaining time:* ${o}MS`],
	Ureg: (n = "", t = "", o = "", a = "", i = "", r = "", s = "") => ["Please enter your registration code", "[ ! ] Wrong registration code", "[✓] Your registration was removed from the database successfully 🗑️", `*[ !  ] You were already registered in my database*\nDo you want to register again?\nUse the command: \n\n${clave}unreg <Registration Code>\n`, "Name and age!?", `*[ ! ] Please add a slash in between name and age*\n\n" | "\n`, "*[ ! ] In age only numbers are accepted -.-*", "*[ ! ] Bruh the name is too long ._.*", "*[ ! ] Maximum age 30 years* ", "*[ ! ] Minimum age 13 years*", "Pubescent", "Adolescent", "Young", "Adult", "Information:", `〘 *REGISTRATION* 〙\n \n*❥ Registration date* : \n_${n}._\n\n┏─━─━━─━─━━─━\n╠≽️ *User registration* : @${t} \n╠≽️ *Registered Name* : ${o}\n╠≽️ *Date of Birth* : ${a}\n╠≽️ *According to your age you are a(n)* : ${i}\n╠≽️ *Information* : ${r}\n╠≽️ *Number* : wa.me/${t}\n┗─━─━━─━─━━─━\n\n_Code of registration_: ${s}.py\n\nʸᵒᵘ ᶜᵃⁿ ᶜᵒᵖʸ ʸᵒᵘʳ ʳᵉᵍᶦˢᵗʳᵃᵗᶦᵒⁿ ᶜᵒᵈᵉ ᵇʸ ʳᵉᵐᵒᵛᶦⁿᵍ ᵗʰᵉ ˡᵃˢᵗ ³ ᵈᶦᵍᶦᵗˢ`],
	Uban: (e = "", n = "") => ["Do you hate me? :,c", `*Participant @${e} was removed from the group ✓*\n_Action executed by ${n}_`, "Which user do you want to remove!?\nPlease tag one"],
	Unvl: (n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "") => [`[ ! ] Your current XP is less than 0, you must ${n} XP to continue leveling up...`, `┏━━❉ *[ Level ]* ❉━━━\n┣⊱ *User* : @${n}\n┣⊱ *Registered* : ${t?"Yes ("+o+")":"No"} ${a>0?"\n┣⊱ *Last claim :* "+i:" "}\n┣⊱ *Name* : <${r}>\n┣⊱ *XP earned so far* : ${s}\n┣⊱ *Your current level is* : ${l} ${u?`<You can level up now, use the command ${clave}subirnivel>`:""}\n┣⊱ *According to the level it is* : ${d}\n┣⊱ *Level progress* : ${$}\n┗━━━━━━━━━━━━━\n\n_Use the ${clave}inventario command to view your RPG inventory_\n`],
	Ulpr: (e = "", n = "", t = "", o = "") => [`*[ LIST - PREMIUM ]*\n\n*🌟 Client* : @${e}\n${n?"*⏳ Premium time* : ∞":t?`*⏳ Premium time* : _${o}._`:"*🚫 No longer a premium user!"}`, "*⭐ User* :", "*⏳ Premium time* :", "🚫 Expired ---"],
	Upfl: (e = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "") => ["➢ Registration code :", `💻 <[ USER PROFILE]> 🌐\n\n⚡ |  USER INFO |\n➢ Name : ${e}\n${t?"➢ Premium user : Yes":"➢ Premium user : No"} ${o?"":`\n➢ Registered name : ${a}`} ${i<0?"":`\n➢ Age : ${i}`} ${r<0?"":`\n➢ Registration Date : ${s}`} ${l?u:""} ${d?"\n➢ Is administrator : [✓]":"\n➢ Is administrator : [X]"} ${$?"\n➢ Request from : A Group":"\n➢ Request from: Private chat"} ${masss}`, `➢ Country: ${e} \n➢ Country key: ${t} \n➢ Origin of number: ${o||" Not found u.u"}\n➢ Link Number : wa.me/${a} ${i?"\n➢ Valid Number : [✓]":"\n➢ Valid Number : [X]"} ${r?"\n➢ Mobile device : [✓]":"\n➢ Mobile device : [X]"} \n➢ Operator : ${s} \n➢ Line type : ${r} \n➢ Format local : ${l} \n➢ International format : ${u} \n➢ Country code : ${d}`, `➢ Number Link : wa.me/${e}`],
	Uwme: (e = "", n = "") => [`⚡ *LINKS OF YOUR NUMBER* ⚡\n\n*Requested by* : ${e} \n\n▪︎ *Your direct whatsapp link is* :\n\n▪︎ https://wa.me/${n}\n\n*Or you can use this one*\n\n▪︎ https://api.whatsapp.com/send?phone=${n}`, "Touch here to see a proof of the link", `https://wa.me/${e}?text=Hello+${n}%0D%0A%E1%B4%AE%CA%B8+%E1%B4%BA%E1%B4%B7`],
	Vrip: (e = "", n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "", $ = "", c = "", m = "", p = "", h = "", g = "", _ = "", y = "", v = "", w = "", f = "", b = "", A = "", I = "") => ["*[ ! ] Please enter an IP address*", "*[ ! ] Use a valid IP address of class (C) !*", "I couldn't find any information for this IP address ;-;", `🗺️ INFO OF IP ADDRESS\n🔖 Requested by: @${e}\n\n[ INFORMATION ]\n\`\`\`\n➢ IP address: ${n}\n➢ Mobile device: ${t?"[ ✓]":"[X]"}\n➢ Continent : ${o}\n➢ Continent code : ${a}\n➢ Country : ${i}\n➢ Country code : ${r} \n➢ Region Name : ${s}\n➢ Region Code : ${l}\n➢ City : ${u}\n➢ District : ${d||$}\n➢ Zip Code : ${c||$}\n➢ Latitude : ${m}\n➢ Longitude : ${p}\n➢ Time Zone : ${h}\n➢ Offset : ${g}\n➢ Local Currency : ${_}\n➢ Internet provider: ${y}\n➢ Organization: ${v}\n➢ Company: ${f||$} \n➢ DNS: ${b||$}\n➢ Proxy Server : ${A?"[✓]":"[X]"}\n➢ Web Hosting : ${I?"[✓]":"[X]"}\n\`\`\``],
	Wgps: (e = "", n = "") => ["ᴺᵒᵗᵉ⁻ ᶦᶠ ᶦⁿ ᵗʰᶦˢ ᵍʳᵒᵘᵖ ᶦᵗ ᶦˢ ᶠᵒʳᵇᶦᵈᵈᵉⁿ ᵗᵒ ˢʰᵃʳᵉ ˡᶦⁿᵏˢ• ᶦᶠ ⁿᵉᶜᵉˢˢᵃʳʸ, ᵗʰᵉ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳˢ ʰᵃᵛᵉ ᵃˡˡ ᵗʰᵉ ʳᶦᵍʰᵗ ᵗᵒ ᵉˡᶦᵐᶦⁿᵃᵗᵉ ᵗʰᵉ ᵇᵒᵗ", `${e} Do you want to add your group? :D?`, "Touch here ;3"],
	Wppr: (e = "", n = "") => ["What wallpaper do you want to search for?", `┏━⊱ Wallpaper : ${e}\n┗⊱ Requested by : @${n}`],
	Wkpd: (e = "", t = "") => ["What is your Wikipedia search?", "[ ! ] No results for your search ;-;", `||  *WIKIPEDIA* ||\n_~> Results for : ${e}_\n${masss}\n${t}`],
	Ytbd: (e = "", n = "", t = "", o = "", a = "", i = "", r = "", s = "", l = "", u = "", d = "") => [`What do you want to search on Youtube?, Usage example: \n\n${clave+e} what is 1 + 1`, `*[ > ] Youtube results for:* _${e}_\n\n `, `🔖 Title: ${e}\n🧬 ID: ${n}\n⛓️ URL: ${t}\n🗜️ Type: ${o}\n🖼️ Thumbnail: ${a}\n⌚ Duration : ${i}\n📜 Description: ${r}\n📆 Upload Date: ${s}\n👀 Views: ${l}\n||\n⚡Author: ${u}\n📺 Channel: ${d}\n\n*——————————*\n\n`]
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