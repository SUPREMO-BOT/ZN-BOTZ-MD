/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/
import Helper from"./helper.js";import{promises as fs}from"fs";import{tmpdir,platform}from"os";import{join}from"path";const TIME=18e4,__dirname=Helper.__dirname(import.meta);export default async function clearTmp(){const t=[tmpdir(),join(__dirname,"../tmp")],a=[];return await Promise.allSettled(t.map((async t=>{const r=await fs.readdir(t);for(const i of r)a.push(join(t,i))}))),await Promise.allSettled(a.map((async t=>{const a=await fs.stat(t);if(a.isFile()&&Date.now()-a.mtimeMs>=TIME){if("win32"===platform()){let a;try{a=await fs.open(t,"r+")}catch(a){return console.error("[clearTmp]",a,"Skipping",t),a}finally{await(a?.close())}}await fs.unlink(t)}})))}
/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/
