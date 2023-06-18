/**
</> Original base BochilGaming 
**/
import{readFileSync as e,writeFileSync as t,existsSync as n,promises as s}from"fs";import{join as a}from"path";const{initAuthCreds:i,BufferJSON:o,proto:c,isJidBroadcast:r,isJidGroup:d,WAMessageStubType:u,updateMessageWithReceipt:f,updateMessageWithReaction:p,useMultiFileAuthState:m}=(await import("@whiskeysockets/baileys")).default,l=3e5;function g(e,t){if(null==t)return;return o.replacer(e,t)}const y=e=>e?.replace(/\//g,"__")?.replace(/:/g,"-"),h=m||async function(e){const t=(t,n)=>s.writeFile(a(e,y(n)),JSON.stringify(t,g)),n=async t=>{try{const n=await s.readFile(a(e,y(t)),{encoding:"utf-8"});return JSON.parse(n,o.reviver)}catch(e){return null}},r=async e=>{try{await s.unlink(y(e))}catch{}},d=await s.stat(e).catch((()=>{}));if(d){if(!d.isDirectory())throw new Error(`found something that is not a directory at ${e}, either delete it or specify a different location`)}else await s.mkdir(e,{recursive:!0});const u=await n("creds.json")||i();return{state:{creds:u,keys:{get:async(e,t)=>{const s={};return await Promise.all(t.map((async t=>{let a=await n(`${e}-${t}.json`);"app-state-sync-key"===e&&(a=c.AppStateSyncKeyData.fromObject(a)),s[t]=a}))),s},set:async e=>{const n=[];for(const s in e)for(const a in e[s]){const i=e[s][a],o=`${s}-${a}.json`;n.push(i?t(i,o):r(o))}await Promise.all(n)}}},saveCreds:()=>t(u,"creds.json")}},b={"pre-key":"preKeys",session:"sessions","sender-key":"senderKeys","app-state-sync-key":"appStateSyncKeys","app-state-sync-version":"appStateVersions","sender-key-memory":"senderKeyMemory"};export default{makeInMemoryStore:function(){let s={},a={},i={connection:"close"};function o(e,t=null){let n=null;if(e&&!t){t=e;const s=e=>e.key?.id==t,i=Object.entries(a).find((([,e])=>e.find(s)));n=i?.[1]?.find(s)}else{if(e=e?.decodeJid?.(),!(e in a))return null;n=a[e].find((e=>e.key.id==t))}return n||null}async function m(e,t){if(e=e?.decodeJid?.(),!d(e))return;if(!(e in s))return s[e]={id:e};if(!s[e].metadata||Date.now()-(s[e].lastfetch||0)>l){const n=await(t?.(e));n&&Object.assign(s[e],{subject:n.subject,lastfetch:Date.now(),metadata:n})}return s[e].metadata}const g=(e,t,n="append")=>{e=e?.decodeJid?.(),e in a||(a[e]=[]),delete t.message?.messageContextInfo,delete t.message?.senderKeyDistributionMessage;const s=o(e,t.key.id);s?Object.assign(s,t):"append"==n?a[e].push(t):a[e].splice(0,0,t)};return{chats:s,messages:a,state:i,loadMessage:o,fetchGroupMetadata:m,fetchMessageReceipts:function(e){const t=o(e);return t?t.userReceipt:null},fetchImageUrl:async function(e,t){if(e=e?.decodeJid?.(),!(e in s))return s[e]={id:e};if(!s[e].imgUrl){const n=await t(e,"image").catch((()=>"./multimedia/imagenes/avatar_contact.png"));n&&(s[e].imgUrl=n)}return s[e].imgUrl},getContact:function(e){return e=e?.decodeJid?.(),e in s?s[e]:null},bind:function(e,t={groupMetadata:()=>null}){e.on("connection.update",(e=>{Object.assign(i,e)})),e.on("chats.set",(function(e){for(const t of e.chats){const e=t.id?.decodeJid?.();e&&(e in s||(s[e]={...t,isChats:!0,...t.name?{name:t.name}:{}}),t.name&&(s[e].name=t.name))}})),e.on("contacts.set",(function(e){for(const t of e.contacts){const e=t.id?.decodeJid?.();e&&(s[e]=Object.assign(s[e]||{},{...t,isContact:!0}))}})),e.on("messages.set",(function(e){for(const t of e.messages){const e=t.key.remoteJid?.decodeJid?.();if(!e)continue;if(!e||r(e))continue;e in a||(a[e]=[]);o(e,t.key.id);g(e,c.WebMessageInfo.fromObject(t),"prepend")}})),e.on("contacts.update",(function(e){for(const t of e){const e=t.id?.decodeJid?.();e&&(s[e]=Object.assign(s[e]||{},{id:e,...t,isContact:!0}))}})),e.on("chats.upsert",(async function(e){await Promise.all(e.map((async e=>{const n=e.id?.decodeJid?.();if(!n||r(n))return;n in s||(s[n]={id:n,...e,isChats:!0});const a=d(n);Object.assign(s[n],{...e,isChats:!0}),a&&!s[n].metadata&&Object.assign(s[n],{metadata:await m(n,t.groupMetadata)})})))})),e.on("chats.update",(function(e){for(const t of e){const e=t.id?.decodeJid?.();e&&(e in s||(s[e]={id:e,...t,isChats:!0}),t.unreadCount&&(t.unreadCount+=s[e].unreadCount||0),Object.assign(s[e],{id:e,...t,isChats:!0}))}})),e.on("presence.update",(function(e){const t=e.id?.decodeJid?.();t&&(t in s||(s[t]={id:t,isContact:!0}),Object.assign(s[t],e))})),e.on("messages.upsert",(function(t){const{messages:n,type:i}=t;switch(i){case"append":case"notify":for(const t of n){const n=t.key.remoteJid?.decodeJid?.();if(!n||r(n))continue;if(t.messageStubType==u.CIPHERTEXT)continue;n in a||(a[n]=[]);o(n,t.key.id);g(n,c.WebMessageInfo.fromObject(t)),"notify"!==i||n in s||e.emit("chats.upsert",[{id:n,conversationTimestamp:t.messageTimestamp,unreadCount:1,name:t.pushName||t.verifiedBizName}])}}})),e.on("messages.update",(function(e){for(const t of e){const e=t.key.remoteJid?.decodeJid?.();if(!e)continue;const n=t.key.id;if(!e||r(e))continue;e in a||(a[e]=[]);if(!o(e,n))return;if(t.update.messageStubType==u.REVOKE)continue;const s=a[e].findIndex((e=>e.key.id===n));Object.assign(a[e][s],t.update)}})),e.on("groups.update",(async function(e){await Promise.all(e.map((async e=>{const n=e.id?.decodeJid?.();if(!n)return;d(n)&&(n in s||(s[n]={id:n,...e,isChats:!0}),s[n].metadata||Object.assign(s[n],{metadata:await m(n,t.groupMetadata)}),Object.assign(s[n].metadata,e))})))})),e.on("group-participants.update",(async function(e){const n=e.id?.decodeJid?.();if(!n||!d(n))return;n in s&&s[n].metadata||Object.assign(s[n],{metadata:await m(n,t.groupMetadata)});const a=s[n].metadata;if(!a)return console.log(`Try to update group ${n} but metadata not found in 'group-participants.update'`);switch(e.action){case"add":a.participants.push(...e.participants.map((e=>({id:e,admin:null}))));break;case"demote":case"promote":for(const t of a.participants)e.participants.includes(t.id)&&(t.admin="promote"===e.action?"admin":null);break;case"remove":a.participants=a.participants.filter((t=>!e.participants.includes(t.id)))}Object.assign(s[n],{metadata:a})})),e.on("message-receipt.update",(function(e){for(const{key:t,receipt:n}of e){const e=t.remoteJid?.decodeJid?.();if(!e)continue;const s=t.id;e in a||(a[e]=[]);const i=o(e,s);if(!i)return;f(i,n)}})),e.on("messages.reaction",(function(e){for(const{key:t,reaction:n}of e){const e=t.remoteJid?.decodeJid?.();if(!e)continue;const s=o(e,t.id);if(!s)return;p(s,n)}}))},writeToFile:function(e){t(e,JSON.stringify({chats:s,messages:a},((e,t)=>"isChats"==e?void 0:t),2))},readFromFile:function(t){if(n(t)){!function(e){Object.assign(s,e.chats);for(const t in e.messages)a[t]=e.messages[t].map((e=>e&&c.WebMessageInfo.fromObject(e))).filter((e=>e&&e.messageStubType!=u.CIPHERTEXT))}(JSON.parse(e(t,{encoding:"utf-8"})))}}}},useMultiFileAuthState:h,useMemoryAuthState:function(){const e=i(),t={};return{state:{creds:e,keys:{get:(e,n)=>{const s=b[e];return n.reduce(((n,a)=>{let i=t[s]?.[a];return i&&("app-state-sync-key"===e&&(i=c.AppStateSyncKeyData.fromObject(i)),n[a]=i),n}),{})},set:e=>{for(const n in e){const s=b[n];t[s]=t[s]||{},Object.assign(t[s],e[n])}}}},saveCreds:()=>{}}},fixFileName:y,JSONreplacer:g,KEY_MAP:b};