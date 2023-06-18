/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/
import{createReadStream,promises,ReadStream}from"fs";import{join}from"path";import{spawn}from"child_process";import{Readable}from"stream";import Helper from"./helper.js";const __dirname=Helper.__dirname(import.meta.url);function ffmpeg(e,r=[],o="",t=""){return new Promise((async(a,n)=>{try{const i=join(__dirname,`../tmp/${Date.now()}.${o}`),s=`${i}.${t}`;Helper.isReadableStream(e)?await Helper.saveStreamToFile(e,i):await promises.writeFile(i,e),spawn("ffmpeg",["-y","-i",i,...r,s]).once("error",n).once("close",(async e=>{try{if(await promises.unlink(i),0!==e)return n(e);const r=createReadStream(s);a({data:r,filename:s,async toBuffer(){const e=[];for await(const o of r)e.push(o);return Buffer.concat(e)},async clear(){r.destroy(),await promises.unlink(s)}})}catch(e){n(e)}}))}catch(e){n(e)}}))}function toPTT(e,r){return ffmpeg(e,["-vn","-c:a","libopus","-b:a","128k","-vbr","on"],r,"ogg")}function toAudio(e,r){return ffmpeg(e,["-vn","-c:a","libopus","-b:a","128k","-vbr","on","-compression_level","10"],r,"opus")}function toVideo(e,r){return ffmpeg(e,["-c:v","libx264","-c:a","aac","-ab","128k","-ar","44100","-crf","32","-preset","slow"],r,"mp4")}export{toAudio,toPTT,toVideo,ffmpeg};
/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/