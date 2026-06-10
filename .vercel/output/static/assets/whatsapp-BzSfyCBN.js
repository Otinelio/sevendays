import{f as a}from"./index-DFCGlSnu.js";function i(s,n){const o=s.map(e=>`${e.name} x${e.qty} - ${a(e.price*e.qty)}`),r=s.reduce((e,t)=>e+t.price*t.qty,0);return["New Order - sevendays","----------------------",...o,"----------------------",`SUBTOTAL: ${a(r)}`,`Order type: ${n.orderType}`,`Name: ${n.name}`,n.note?`Note: ${n.note}`:""].filter(Boolean).join(`
`)}function $(s,n,o){return["Message via sevendays website",`From: ${s} - ${n}`,`Message: ${o}`].join(`
`)}function u(s,n){const o=[`${s==="Dine-in"?"Reservation Request":s+" Request"} - sevendays`];for(const[r,e]of Object.entries(n))e&&o.push(`${r}: ${e}`);return o.join(`
`)}export{u as a,$ as b,i as c};
