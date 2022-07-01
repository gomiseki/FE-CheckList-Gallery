import{r as l}from"./react.7202c590.js";import{c as m,a as k}from"./history.1843f9b0.js";import{u as R,a as d,b as y,c as b,R as v}from"./react-router.a441faa5.js";/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function h(){return h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function L(e,a){if(e==null)return{};var t={},r=Object.keys(e),o,n;for(n=0;n<r.length;n++)o=r[n],!(a.indexOf(o)>=0)&&(t[o]=e[o]);return t}const C=["onClick","reloadDocument","replace","state","target","to"];function E(e){let{basename:a,children:t,window:r}=e,o=l.exports.useRef();o.current==null&&(o.current=k({window:r}));let n=o.current,[s,c]=l.exports.useState({action:n.action,location:n.location});return l.exports.useLayoutEffect(()=>n.listen(c),[n]),l.exports.createElement(v,{basename:a,children:t,location:s.location,navigationType:s.action,navigator:n})}function S(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const K=l.exports.forwardRef(function(a,t){let{onClick:r,reloadDocument:o,replace:n=!1,state:s,target:c,to:i}=a,u=L(a,C),g=R(i),x=w(i,{replace:n,state:s,target:c});function P(f){r&&r(f),!f.defaultPrevented&&!o&&x(f)}return l.exports.createElement("a",h({},u,{href:g,onClick:P,ref:t,target:c}))});function w(e,a){let{target:t,replace:r,state:o}=a===void 0?{}:a,n=d(),s=y(),c=b(e);return l.exports.useCallback(i=>{if(i.button===0&&(!t||t==="_self")&&!S(i)){i.preventDefault();let u=!!r||m(s)===m(c);n(e,{replace:u,state:o})}},[s,n,c,r,o,t,e])}function B(e){let a=l.exports.useRef(p(e)),t=y(),r=l.exports.useMemo(()=>{let s=p(t.search);for(let c of a.current.keys())s.has(c)||a.current.getAll(c).forEach(i=>{s.append(c,i)});return s},[t.search]),o=d(),n=l.exports.useCallback((s,c)=>{o("?"+p(s),c)},[o]);return[r,n]}function p(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,t)=>{let r=e[t];return a.concat(Array.isArray(r)?r.map(o=>[t,o]):[[t,r]])},[]))}export{E as B,K as L,B as u};
