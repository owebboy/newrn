!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e,t,r,o,i,a,s,u,f){!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===d?62:t===a||t===l?63:t<s?-1:t<s+10?t-s+26+26:t<f+26?t-f:t<u+26?t-u+26:void 0}function n(e){function n(e){f[l++]=e}var r,i,a,s,u,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var d=e.length;u="="===e.charAt(d-2)?2:"="===e.charAt(d-1)?1:0,f=new o(3*e.length/4-u),a=u>0?e.length-4:e.length;var l=0;for(r=0,i=0;r<a;r+=4,i+=3)s=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&s)>>16),n((65280&s)>>8),n(255&s);return 2===u?(s=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&s)):1===u&&(s=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(s>>8&255),n(255&s)),f}function r(e){function t(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}var n,r,o,i=e.length%3,a="";for(n=0,o=e.length-i;n<o;n+=3)r=(e[n]<<16)+(e[n+1]<<8)+e[n+2],a+=function(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}(r);switch(i){case 1:r=e[e.length-1],a+=t(r>>2),a+=t(r<<4&63),a+="==";break;case 2:r=(e[e.length-2]<<8)+e[e.length-1],a+=t(r>>10),a+=t(r>>4&63),a+=t(r<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),a="/".charCodeAt(0),s="0".charCodeAt(0),u="a".charCodeAt(0),f="A".charCodeAt(0),d="-".charCodeAt(0),l="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}(void 0===n?this.base64js={}:n)}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/base64-js/lib/b64.js","/../../node_modules/base64-js/lib")},{buffer:3,rH1JPG:5}],2:[function(e,t,n){(function(e,r,o,i,a,s,u,f,d){!function(e,r){"function"==typeof define&&define.amd?define([],r):"object"==typeof n?t.exports=r():e.returnExports=r()}(this,function(){function e(o,i){if("function"!=typeof i)throw new Error("Bad callback given: "+i);if(!o)throw new Error("No options given");var s=o.onResponse;if(o="string"==typeof o?{uri:o}:JSON.parse(JSON.stringify(o)),o.onResponse=s,o.verbose&&(e.log=r()),o.url&&(o.uri=o.url,delete o.url),!o.uri&&""!==o.uri)throw new Error("options.uri is a required argument");if("string"!=typeof o.uri)throw new Error("options.uri must be a string");for(var u=["proxy","_redirectsFollowed","maxRedirects","followRedirect"],f=0;f<u.length;f++)if(o[u[f]])throw new Error("options."+u[f]+" is not supported");if(o.callback=i,o.method=o.method||"GET",o.headers=o.headers||{},o.body=o.body||null,o.timeout=o.timeout||e.DEFAULT_TIMEOUT,o.headers.host)throw new Error("Options.headers.host is not supported");o.json&&(o.headers.accept=o.headers.accept||"application/json","GET"!==o.method&&(o.headers["content-type"]="application/json"),"boolean"!=typeof o.json?o.body=JSON.stringify(o.json):"string"!=typeof o.body&&(o.body=JSON.stringify(o.body)));var d=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")};if(o.qs){var l="string"==typeof o.qs?o.qs:d(o.qs);-1!==o.uri.indexOf("?")?o.uri=o.uri+"&"+l:o.uri=o.uri+"?"+l}if(o.form){if("string"==typeof o.form)throw"form name unsupported";if("POST"===o.method){var c=(o.encoding||"application/x-www-form-urlencoded").toLowerCase();switch(o.headers["content-type"]=c,c){case"application/x-www-form-urlencoded":o.body=d(o.form).replace(/%20/g,"+");break;case"multipart/form-data":var h=function(e){var t={};t.boundry="-------------------------------"+Math.floor(1e9*Math.random());var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push("--"+t.boundry+'\nContent-Disposition: form-data; name="'+r+'"\n\n'+e[r]+"\n");return n.push("--"+t.boundry+"--"),t.body=n.join(""),t.length=t.body.length,t.type="multipart/form-data; boundary="+t.boundry,t}(o.form);o.body=h.body,o.headers["content-type"]=h.type;break;default:throw new Error("unsupported encoding:"+c)}}}return o.onResponse=o.onResponse||n,!0===o.onResponse&&(o.onResponse=i,o.callback=n),!o.headers.authorization&&o.auth&&(o.headers.authorization="Basic "+a(o.auth.username+":"+o.auth.password)),t(o)}function t(t){function n(){l=!0;var n=new Error("ETIMEDOUT");return n.code="ETIMEDOUT",n.duration=t.timeout,e.log.error("Timeout",{id:d._id,milliseconds:t.timeout}),t.callback(n,d)}function r(n){if(l)return e.log.debug("Ignoring timed out state change",{state:d.readyState,id:d.id});if(e.log.debug("State change",{state:d.readyState,id:d.id,timed_out:l}),d.readyState===s.OPENED){e.log.debug("Request started",{id:d.id});for(var r in t.headers)d.setRequestHeader(r,t.headers[r])}else d.readyState===s.HEADERS_RECEIVED?o():d.readyState===s.LOADING?(o(),a()):d.readyState===s.DONE&&(o(),a(),f())}function o(){if(!g.response){if(g.response=!0,e.log.debug("Got response",{id:d.id,status:d.status}),clearTimeout(d.timeoutTimer),d.statusCode=d.status,c&&0==d.statusCode){var n=new Error("CORS request rejected: "+t.uri);return n.cors="rejected",g.loading=!0,g.end=!0,t.callback(n,d)}t.onResponse(null,d)}}function a(){g.loading||(g.loading=!0,e.log.debug("Response body loading",{id:d.id}))}function f(){if(!g.end){if(g.end=!0,e.log.debug("Request done",{id:d.id}),d.body=d.responseText,t.json)try{d.body=JSON.parse(d.responseText)}catch(e){return t.callback(e,d)}t.callback(null,d,d.body)}}var d=new s,l=!1,c=i(t.uri),h="withCredentials"in d;if(u+=1,d.seq_id=u,d.id=u+": "+t.method+" "+t.uri,d._id=d.id,c&&!h){var p=new Error("Browser does not support cross-origin request: "+t.uri);return p.cors="unsupported",t.callback(p,d)}d.timeoutTimer=setTimeout(n,t.timeout);var g={response:!1,loading:!1,end:!1};return d.onreadystatechange=r,d.open(t.method,t.uri,!0),c&&(d.withCredentials=!!t.withCredentials),d.send(t.body),d}function n(){}function r(){var e,t,r={},i=["trace","debug","info","warn","error"];for(t=0;t<i.length;t++)e=i[t],r[e]=n,"undefined"!=typeof console&&console&&console[e]&&(r[e]=o(console,e));return r}function o(e,t){function n(n,r){return"object"==typeof r&&(n+=" "+JSON.stringify(r)),e[t].call(e,n)}return n}function i(e){var t,n=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;try{t=location.href}catch(e){t=document.createElement("a"),t.href="",t=t.href}var r=n.exec(t.toLowerCase())||[],o=n.exec(e.toLowerCase());return!(!o||o[1]==r[1]&&o[2]==r[2]&&(o[3]||("http:"===o[1]?80:443))==(r[3]||("http:"===r[1]?80:443)))}function a(e){var t,n,r,o,i,a,s,u,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=0,l=0,c="",h=[];if(!e)return e;do{t=e.charCodeAt(d++),n=e.charCodeAt(d++),r=e.charCodeAt(d++),u=t<<16|n<<8|r,o=u>>18&63,i=u>>12&63,a=u>>6&63,s=63&u,h[l++]=f.charAt(o)+f.charAt(i)+f.charAt(a)+f.charAt(s)}while(d<e.length);switch(c=h.join(""),e.length%3){case 1:c=c.slice(0,-2)+"==";break;case 2:c=c.slice(0,-1)+"="}return c}var s=XMLHttpRequest;if(!s)throw new Error("missing XMLHttpRequest");e.log={trace:n,debug:n,info:n,warn:n,error:n};var u=0;return e.withCredentials=!1,e.DEFAULT_TIMEOUT=18e4,e.defaults=function(t,n){var r=function(e){return function(n,r){n="string"==typeof n?{uri:n}:JSON.parse(JSON.stringify(n));for(var o in t)void 0===n[o]&&(n[o]=t[o]);return e(n,r)}},o=r(e);return o.get=r(e.get),o.post=r(e.post),o.put=r(e.put),o.head=r(e.head),o},["get","put","post","head"].forEach(function(t){var n=t.toUpperCase();e[t.toLowerCase()]=function(t){"string"==typeof t?t={method:n,uri:t}:(t=JSON.parse(JSON.stringify(t)),t.method=n);var r=[t].concat(Array.prototype.slice.apply(arguments,[1]));return e.apply(this,r)}}),e.couch=function(t,r){function o(e,t,n){if(e)return r(e,t,n);if((t.statusCode<200||t.statusCode>299)&&n.error){e=new Error("CouchDB error: "+(n.error.reason||n.error.error));for(var o in n)e[o]=n[o];return r(e,t,n)}return r(e,t,n)}return"string"==typeof t&&(t={uri:t}),t.json=!0,t.body&&(t.json=t.body),delete t.body,r=r||n,e(t,o)},e})}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/browser-request/index.js","/../../node_modules/browser-request")},{buffer:3,rH1JPG:5}],3:[function(e,t,n){(function(t,r,o,i,a,s,u,f,d){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=N(e);e.length%4!=0;)e+="=";var i;if("number"===r)i=q(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=q(e.length)}var a;o._useTypedArrays?a=o._augment(new Uint8Array(i)):(a=this,a.length=i,a._isBuffer=!0);var s;if(o._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(H(e))for(s=0;s<i;s++)o.isBuffer(e)?a[s]=e.readUInt8(s):a[s]=e[s];else if("string"===r)a.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(s=0;s<i;s++)a[s]=0;return a}function l(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var a=t.length;Q(a%2==0,"Invalid hex string"),r>a/2&&(r=a/2);for(var s=0;s<r;s++){var u=parseInt(t.substr(2*s,2),16);Q(!isNaN(u),"Invalid hex string"),e[n+s]=u}return o._charsWritten=2*s,s}function c(e,t,n,r){return o._charsWritten=z(P(t),e,n,r)}function h(e,t,n,r){return o._charsWritten=z(G(t),e,n,r)}function p(e,t,n,r){return h(e,t,n,r)}function g(e,t,n,r){return o._charsWritten=z(F(t),e,n,r)}function m(e,t,n,r){return o._charsWritten=z(R(t),e,n,r)}function y(e,t,n){return 0===t&&n===e.length?V.fromByteArray(e):V.fromByteArray(e.slice(t,n))}function w(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=W(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+W(o)}function b(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function v(e,t,n){return b(e,t,n)}function E(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=D(e[i]);return o}function I(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function C(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function A(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function L(e,t,n,r){if(r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+1<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=C(e,t,n,!0);return 32768&o?-1*(65535-o+1):o}}function B(e,t,n,r){if(r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+3<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=A(e,t,n,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function S(e,t,n,r){return r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(t+3<e.length,"Trying to read beyond buffer length")),Z.read(e,t,n,23,4)}function T(e,t,n,r){return r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(t+7<e.length,"Trying to read beyond buffer length")),Z.read(e,t,n,52,8)}function U(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+1<e.length,"trying to write beyond buffer length"),X(t,65535));var i=e.length;if(!(n>=i))for(var a=0,s=Math.min(i-n,2);a<s;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function x(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"trying to write beyond buffer length"),X(t,4294967295));var i=e.length;if(!(n>=i))for(var a=0,s=Math.min(i-n,4);a<s;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function M(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+1<e.length,"Trying to write beyond buffer length"),K(t,32767,-32768)),n>=e.length||(t>=0?U(e,t,n,r,o):U(e,65535+t+1,n,r,o))}function k(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"Trying to write beyond buffer length"),K(t,2147483647,-2147483648)),n>=e.length||(t>=0?x(e,t,n,r,o):x(e,4294967295+t+1,n,r,o))}function _(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"Trying to write beyond buffer length"),Y(t,3.4028234663852886e38,-3.4028234663852886e38)),n>=e.length||Z.write(e,t,n,r,23,4)}function O(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+7<e.length,"Trying to write beyond buffer length"),Y(t,1.7976931348623157e308,-1.7976931348623157e308)),n>=e.length||Z.write(e,t,n,r,52,8)}function N(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function j(e,t,n){return"number"!=typeof e?n:(e=~~e)>=t?t:e>=0?e:(e+=t,e>=0?e:0)}function q(e){return e=~~Math.ceil(+e),e<0?0:e}function J(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function H(e){return J(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function D(e){return e<16?"0"+e.toString(16):e.toString(16)}function P(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}}return t}function G(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function R(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function F(e){return V.toByteArray(e)}function z(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function W(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function X(e,t){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e>=0,"specified a negative value for writing an unsigned value"),Q(e<=t,"value is larger than maximum value for type"),Q(Math.floor(e)===e,"value has a fractional component")}function K(e,t,n){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e<=t,"value larger than maximum allowed value"),Q(e>=n,"value smaller than minimum allowed value"),Q(Math.floor(e)===e,"value has a fractional component")}function Y(e,t,n){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e<=t,"value larger than maximum allowed value"),Q(e>=n,"value smaller than minimum allowed value")}function Q(e,t){if(!e)throw new Error(t||"Failed assertion")}var V=e("base64-js"),Z=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=P(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=F(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(Q(J(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(r,i),i+=a.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n))>i&&(n=i):n=i,r=String(r||"utf8").toLowerCase();var a;switch(r){case"hex":a=l(this,e,t,n);break;case"utf8":case"utf-8":a=c(this,e,t,n);break;case"ascii":a=h(this,e,t,n);break;case"binary":a=p(this,e,t,n);break;case"base64":a=g(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=m(this,e,t,n);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):n=r.length)===t)return"";var o;switch(e){case"hex":o=E(r,t,n);break;case"utf8":case"utf-8":o=w(r,t,n);break;case"ascii":o=b(r,t,n);break;case"binary":o=v(r,t,n);break;case"base64":o=y(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=I(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){Q(r>=n,"sourceEnd < sourceStart"),Q(t>=0&&t<e.length,"targetStart out of bounds"),Q(n>=0&&n<i.length,"sourceStart out of bounds"),Q(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var a=r-n;if(a<100||!o._useTypedArrays)for(var s=0;s<a;s++)e[s+t]=this[s+n];else e._set(this.subarray(n,n+a),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=j(e,n,0),t=j(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),a=0;a<r;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(Q(void 0!==e&&null!==e,"missing offset"),Q(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return C(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return C(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return A(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(Q(void 0!==e&&null!==e,"missing offset"),Q(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){return 128&this[e]?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return L(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return L(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return B(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return B(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return S(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return S(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return T(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return T(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(Q(void 0!==e&&null!==e,"missing value"),Q(void 0!==t&&null!==t,"missing offset"),Q(t<this.length,"trying to write beyond buffer length"),X(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){U(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){U(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(Q(void 0!==e&&null!==e,"missing value"),Q(void 0!==t&&null!==t,"missing offset"),Q(t<this.length,"Trying to write beyond buffer length"),K(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){_(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){_(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){O(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){O(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),Q("number"==typeof e&&!isNaN(e),"value is not a number"),Q(n>=t,"end < start"),n!==t&&0!==this.length){Q(t>=0&&t<this.length,"start out of bounds"),Q(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=D(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var $=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=$.get,e.set=$.set,e.write=$.write,e.toString=$.toString,e.toLocaleString=$.toString,e.toJSON=$.toJSON,e.copy=$.copy,e.slice=$.slice,e.readUInt8=$.readUInt8,e.readUInt16LE=$.readUInt16LE,e.readUInt16BE=$.readUInt16BE,e.readUInt32LE=$.readUInt32LE,e.readUInt32BE=$.readUInt32BE,e.readInt8=$.readInt8,e.readInt16LE=$.readInt16LE,e.readInt16BE=$.readInt16BE,e.readInt32LE=$.readInt32LE,e.readInt32BE=$.readInt32BE,e.readFloatLE=$.readFloatLE,e.readFloatBE=$.readFloatBE,e.readDoubleLE=$.readDoubleLE,e.readDoubleBE=$.readDoubleBE,e.writeUInt8=$.writeUInt8,e.writeUInt16LE=$.writeUInt16LE,e.writeUInt16BE=$.writeUInt16BE,e.writeUInt32LE=$.writeUInt32LE,e.writeUInt32BE=$.writeUInt32BE,e.writeInt8=$.writeInt8,e.writeInt16LE=$.writeInt16LE,e.writeInt16BE=$.writeInt16BE,e.writeInt32LE=$.writeInt32LE,e.writeInt32BE=$.writeInt32BE,e.writeFloatLE=$.writeFloatLE,e.writeFloatBE=$.writeFloatBE,e.writeDoubleLE=$.writeDoubleLE,e.writeDoubleBE=$.writeDoubleBE,e.fill=$.fill,e.inspect=$.inspect,e.toArrayBuffer=$.toArrayBuffer,e}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/buffer/index.js","/../../node_modules/buffer")},{"base64-js":1,buffer:3,ieee754:4,rH1JPG:5}],4:[function(e,t,n){(function(e,t,r,o,i,a,s,u,f){n.read=function(e,t,n,r,o){var i,a,s=8*o-r-1,u=(1<<s)-1,f=u>>1,d=-7,l=n?o-1:0,c=n?-1:1,h=e[t+l];for(l+=c,i=h&(1<<-d)-1,h>>=-d,d+=s;d>0;i=256*i+e[t+l],l+=c,d-=8);for(a=i&(1<<-d)-1,i>>=-d,d+=r;d>0;a=256*a+e[t+l],l+=c,d-=8);if(0===i)i=1-f;else{if(i===u)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,r),i-=f}return(h?-1:1)*a*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var a,s,u,f=8*i-o-1,d=(1<<f)-1,l=d>>1,c=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=d):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),t+=a+l>=1?c/u:c*Math.pow(2,1-l),t*u>=2&&(a++,u/=2),a+l>=d?(s=0,a=d):a+l>=1?(s=(t*u-1)*Math.pow(2,o),a+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,o),a=0));o>=8;e[n+h]=255&s,h+=p,s/=256,o-=8);for(a=a<<o|s,f+=o;f>0;e[n+h]=255&a,h+=p,a/=256,f-=8);e[n+h-p]|=128*g}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/ieee754/index.js","/../../node_modules/ieee754")},{buffer:3,rH1JPG:5}],5:[function(e,t,n){(function(e,n,r,o,i,a,s,u,f){function d(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){n.shift()()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=d,e.addListener=d,e.once=d,e.off=d,e.removeListener=d,e.removeAllListeners=d,e.emit=d,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/process/browser.js","/../../node_modules/process")},{buffer:3,rH1JPG:5}],6:[function(e,t,n){(function(e,t,n,r,o,i,a,s,u){!function(e){e.fn.animatedModal=function(t){function n(){u.css({"z-index":i.zIndexOut}),i.afterClose()}function r(){i.afterOpen()}var o=e(this),i=e.extend({modalTarget:"animatedModal",position:"fixed",width:"100%",height:"100%",top:"0px",left:"0px",zIndexIn:"9999",zIndexOut:"-9999",color:"#39BEB9",opacityIn:"1",opacityOut:"0",animatedIn:"zoomIn",animatedOut:"zoomOut",animationDuration:".6s",overflow:"auto",beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){}},t),a=e(".close-"+i.modalTarget),s=e(o).attr("href"),u=e("body").find("#"+i.modalTarget),f="#"+u.attr("id");u.addClass("animated"),u.addClass(i.modalTarget+"-off");var d={position:i.position,width:i.width,height:i.height,top:i.top,left:i.left,"background-color":i.color,"overflow-y":i.overflow,"z-index":i.zIndexOut,opacity:i.opacityOut,"-webkit-animation-duration":i.animationDuration,"-moz-animation-duration":i.animationDuration,"-ms-animation-duration":i.animationDuration,"animation-duration":i.animationDuration};u.css(d),o.click(function(t){t.preventDefault(),e("body, html").css({overflow:"hidden"}),s==f&&(u.hasClass(i.modalTarget+"-off")&&(u.removeClass(i.animatedOut),u.removeClass(i.modalTarget+"-off"),u.addClass(i.modalTarget+"-on")),u.hasClass(i.modalTarget+"-on")&&(i.beforeOpen(),u.css({opacity:i.opacityIn,"z-index":i.zIndexIn}),u.addClass(i.animatedIn),u.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",r)))}),a.click(function(t){t.preventDefault(),e("body, html").css({overflow:"auto"}),i.beforeClose(),u.hasClass(i.modalTarget+"-on")&&(u.removeClass(i.modalTarget+"-on"),u.addClass(i.modalTarget+"-off")),u.hasClass(i.modalTarget+"-off")&&(u.removeClass(i.animatedIn),u.addClass(i.animatedOut),u.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",n))})}}(jQuery)}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/animatedModal.js","/")},{buffer:3,rH1JPG:5}],7:[function(e,t,n){(function(t,n,r,o,i,a,s,u,f){var d=(e("./animatedModal"),e("./requester")),l=e("./interface");$("#mobileSourcesButton").animatedModal({modalTarget:"mobileSources",color:"hsla(211, 94%, 54%, .9)"}),l.weather.loader.show(),navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){d.getCurrentWeather(e.coords.latitude,e.coords.longitude)},function(e){l.weather.loader.hide(),l.weather.error("denied")}):(l.weather.loader.hide(),l.weather.error("not supported"));const c=document.querySelector(".articles"),h=document.querySelector(".sidebar h1");document.querySelector(".loading");h.addEventListener("click",function(){c.innerHTML="",l.loader.show(),l.updateHeader("latest news"),d.listTopArticles(function(){l.loader.hide()})}),d.listSources(function(e){for(var t=0;t<e.length;t++)l.createListItem(e[t])}),l.updateHeader("latest news"),l.loader.show(),d.listTopArticles(function(){l.loader.hide()}),window.updateArticles=function(e){window.scrollTo(0,0),l.updateHeader(e),c.innerHTML="",l.loader.show(),d.listArticles(e,function(e){for(var t=0;t<e.articles.length;t++)l.article({article:e.articles[t],source:e.source}),t===e.articles.length-1&&l.loader.hide()})}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_6e546959.js","/")},{"./animatedModal":6,"./interface":8,"./requester":9,buffer:3,rH1JPG:5}],8:[function(e,t,n){(function(e,n,r,o,i,a,s,u,f){const d=document.querySelector(".sidebar"),l=document.querySelector(".modal-content"),c=document.querySelector(".articles"),h=document.querySelector("title"),p=document.querySelector(".mobileWeather");d.addEventListener("click",function(e){e.target&&e.target.classList.contains("list-item")&&window.updateArticles(e.target.id)}),l.addEventListener("click",function(e){e.target&&e.target.classList.contains("list-item")&&window.updateArticles(e.target.id)}),t.exports={createListItem:function(e,t){var n=document.createElement("p");n.innerHTML=e.name,n.classList.add("list-item"),n.id=e.id,d.appendChild(n.cloneNode(!0)),l.appendChild(n.cloneNode(!0))},article:function(e,t){console.log(e);var n=e.article,r=e.article.source.name,o=document.createElement("article"),i=document.createElement("a");if(i.classList.add("article"),i.href=n.url,t){var t=document.createElement("p");t.classList.add("article-source"),t.textContent=r,i.appendChild(t)}var a=document.createElement("h3");a.innerHTML=n.title,i.appendChild(a);var s=document.createElement("p");s.classList.add("meta");var u=document.createElement("span");n.author&&(u.textContent=n.author+" - "),s.appendChild(u);var f=document.createElement("span");f.textContent=new Date(n.publishedAt).toLocaleDateString(),s.appendChild(f),i.appendChild(s);var d=document.createElement("p");d.textContent=n.description,i.appendChild(d),o.appendChild(i);var l=document.createElement("img");n.urlToImage&&(l.src=n.urlToImage,l.alt=n.description),o.appendChild(l),c.appendChild(o)},updateHeader:function(e){var t=document.querySelector("header");h.textContent="newrn | "+e,t.textContent=e.replace(/-/g," "),localStorage.currentSource=e},setMobileHeader:function(e,t){p.innerHTML="<h3>"+e.toFixed(0)+"&deg; F </h3>"+t},weather:{loader:{show:function(){var e=document.createElement("img");e.classList.add("mobileLoader"),e.src="/static/img/radio.svg",e.width=32,e.height=32,p.appendChild(e)},hide:function(){p.removeChild(document.querySelector(".mobileLoader"))}}},loader:{show:function(){var e=document.createElement("div");e.classList.add("loading");var t=document.createElement("img");t.src="static/img/radio.svg",e.appendChild(t),c.appendChild(e)},hide:function(){var e=document.querySelector(".loading");c.removeChild(e)}}}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/interface.js","/")},{buffer:3,rH1JPG:5}],9:[function(e,t,n){(function(n,r,o,i,a,s,u,f,d){var l=e("browser-request"),c=e("./interface");t.exports={listSources:function(e){l("http://beta.newsapi.org/v2/sources?apiKey=0ef6be55c02645629c2ae9ffedd2a9b4&language=en&country=us",function(t,n){
e(JSON.parse(n.body).sources)})},listArticles:function(e,t){l("http://beta.newsapi.org/v2/top-headlines?apiKey=0ef6be55c02645629c2ae9ffedd2a9b4&sources="+e,function(e,n){t(JSON.parse(n.body))})},listTopArticles:function(e){var t=this;this.listSources(function(n){for(var r=0;r<n.length;r++)if(t.listArticles(n[r].id,function(e){c.article({article:e.articles[0],source:e.source},!0)}),r===n.length-1)return e()})},getCurrentWeather:function(e,t){l("http://api.openweathermap.org/data/2.5/find?lat="+e+"&lon="+t+"&cnt=1&appid=9780ce9c26ea752c06e528c843918540&units=imperial",function(e,t){return c.setMobileHeader(JSON.parse(t.body).list[0].main.temp,JSON.parse(t.body).list[0].name)})}}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/requester.js","/")},{"./interface":8,"browser-request":2,buffer:3,rH1JPG:5}]},{},[7]);