function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),c=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,s=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(S,t),s?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-l>=r}function S(){var e=v();if(O(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return c?m(n,r-(e-l)):n}(e))}function T(e){return u=void 0,g&&i?y(e):(i=o=void 0,a)}function h(){var e=v(),n=O(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(c)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=p(t)||0,b(n)&&(s=!!n.leading,r=(c="maxWait"in n)?d(p(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},h.flush=function(){return void 0===u?a:T(v())},h}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j=document.querySelector('button[type="submit"]');""===y.elements.email.value&&""===y.elements.message.value&&(j.disabled=!0);const O={email:"",message:""};function S(){const e=localStorage.getItem("feedback-form-state");JSON.parse(e);return JSON.parse(e)}y.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,""!=y.elements.email.value&&""!=y.elements.message.value?j.disabled=!1:j.disabled=!0;localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log("Entered Data: ",S()),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),""===y.elements.email.value&&""===y.elements.message.value&&(j.disabled=!0)})),function(){const e=S();e&&(y.elements.email.value=e.email,y.elements.message.value=e.message)}();
//# sourceMappingURL=03-feedback.6d11f600.js.map
