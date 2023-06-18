/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/
//import db from"../lib/database.js";import macuin from"performance-now";import*as fs from"fs";let handler=async(n,{conn:e,command:o})=>{let{limit:a,banned:d}=db.data.users[n.sender];if(d)return;if(a<1)return;const i=macuin(),t=macuin()-i;"wlcrebotepin"==o?(e.sendMessage(n.chat,{text:pickRandom(["Pierde la partida*\nFong 🏓","🏓 Pong!!! 🏓","🏓 Pong!!! 🏓","Pong 🏓","Pong 🏓","Pong 🏓","Pong 🏓","Responde con un golpe a 160 kmh*\nPong 🏓","Pong 🏓","Pong 🏓","Le da un golpe en la cabeza*\nPong 🏓","Pong 🏓","Pong 🏓","Le rompe el craneo*\nPong!!!🏓","Pong 🏓","Pong 🏓","Pong 🏓","Pong 🏓","Le gana la partida*\n🏓 Pong!!! 🏓","Lo mata*\nPong!!! 🏓🏓🏓"])+`\n\nVelocidad de respuesta : ${t.toFixed(4)}MS Milisegundos\n`},{quoted:n}),n.limit=10):"wlcadiosdsp"==o&&(e.sendMessage(n.chat,{audio:fs.readFileSync("./multimedia/sonidos/adiu.m4a"),fileName:"c_va_alv.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:n}),n.limit=5)};handler.command=/^(wlcrebotepin|wlcadiosdsp)$/i,handler.group=!0;export default handler;
/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/