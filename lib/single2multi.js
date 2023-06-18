/**
</> Original base BochilGaming 
**/
import e from"fs";import r from"path";import t from"./store.js";const{BufferJSON:s}=(await import("@whiskeysockets/baileys")).default;export default async function i(i,o,a){const f=JSON.parse(await e.promises.readFile(i,"utf8"),s.reviver),m=f.creds||{},n=f.keys||{},c=(e,r)=>Object.keys(e).find((t=>e[t]===r)),l=Object.fromEntries(Object.entries(n).map((([e,r])=>r&&[c(t.KEY_MAP,e),r])).filter(Boolean));var p,y;await Promise.all([(p=m,y="creds.json",e.promises.writeFile(r.join(o,t.fixFileName(y)),JSON.stringify(p,t.JSONreplacer))),a.state.keys.set(l)])}