/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/
import{spawn}from"child_process";import{join}from"path";const __dirname=global.__dirname(import.meta.url);export function levelup(n,o){return new Promise((async(t,i)=>{if(!(global.support.convert||global.support.magick||global.support.gm))return i("\n[!] No soportado!\n");const e=join(__dirname,"../multimedia/font");let a=join(e,"./level_c.otf"),l=join(e,"./texts.otf"),p=join(e,"./futur.ttf"),r=join(__dirname,"../multimedia/imagenes/lvlup_template.jpg"),s="+1420+245";o>2&&(s="+1415+245"),o>9&&(s="+1380+245"),o>19&&(s="+1370+245"),o>99&&(s="+1335+245");const[m,...c]=[...global.support.gm?["gm"]:global.support.magick?["magick"]:[],"convert",r,"-font",l,"-fill","#000000","-size","1024x784","-pointsize","68.5","-interline-spacing","-1.5","-annotate","+110+70",n,"-font",l,"-fill","#00f3a3","-size","1024x784","-pointsize","68","-interline-spacing","-7.5","-annotate","+110+70",n,"-font",a,"-fill","#00c3ff","-size","1024x784","-pointsize","100","-interline-spacing","-1.2","-annotate",s,o,"-font",p,"-fill","#c9d0db","-size","1024x784","-pointsize","30","-interline-spacing","-2.5","-annotate","+110+380",NombreDelBot,"-append","jpg:-"];let f=[];spawn(m,c).on("error",i).on("close",(()=>t(Buffer.concat(f)))).stdout.on("data",(n=>f.push(n)))}))}
/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/
