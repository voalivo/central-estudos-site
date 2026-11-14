import{c as r}from"./index-C9YUXbM0.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),u=()=>typeof window<"u"&&!!(window.SpeechRecognition||window.webkitSpeechRecognition);function v({aoTexto:c,aoFim:t,aoErro:e}){const i=window.SpeechRecognition||window.webkitSpeechRecognition;if(!i)return e==null||e("Este navegador não reconhece voz. Use o microfone do teclado do celular para ditar."),{parar(){}};const n=new i;n.lang="pt-BR",n.interimResults=!0,n.continuous=!1,n.onresult=o=>{let a="",s=!1;for(const d of o.results)a+=d[0].transcript,s=d.isFinal;c==null||c(a.trim(),s)},n.onerror=o=>e==null?void 0:e(o.error==="not-allowed"||o.error==="service-not-allowed"?"O microfone foi bloqueado. Libere o microfone para este site nas configurações do navegador (ícone de cadeado ao lado do endereço).":o.error==="no-speech"?"Não ouvi nada. Toque no microfone e fale de novo.":"Não foi possível usar o microfone agora."),n.onend=()=>t==null?void 0:t();try{n.start()}catch{e==null||e("Não foi possível usar o microfone agora.")}return{parar(){try{n.stop()}catch{}}}}export{f as M,p as S,v as o,u as v};
