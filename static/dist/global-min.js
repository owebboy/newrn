!function e(t,r,n){function o(a,s){if(!r[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=r[a]={exports:{}};t[a][0].call(f.exports,function(e){var r=t[a][1][e];return o(r||e)},f,f.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){(function(e,t,n,o,i,a,s,u,f){!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===d?62:t===a||t===l?63:t<s?-1:t<s+10?t-s+26+26:t<f+26?t-f:t<u+26?t-u+26:void 0}function r(e){function r(e){f[l++]=e}var n,i,a,s,u,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var d=e.length;u="="===e.charAt(d-2)?2:"="===e.charAt(d-1)?1:0,f=new o(3*e.length/4-u),a=u>0?e.length-4:e.length;var l=0;for(n=0,i=0;n<a;n+=4,i+=3)s=t(e.charAt(n))<<18|t(e.charAt(n+1))<<12|t(e.charAt(n+2))<<6|t(e.charAt(n+3)),r((16711680&s)>>16),r((65280&s)>>8),r(255&s);return 2===u?(s=t(e.charAt(n))<<2|t(e.charAt(n+1))>>4,r(255&s)):1===u&&(s=t(e.charAt(n))<<10|t(e.charAt(n+1))<<4|t(e.charAt(n+2))>>2,r(s>>8&255),r(255&s)),f}function n(e){function t(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}var r,n,o,i=e.length%3,a="";for(r=0,o=e.length-i;r<o;r+=3)n=(e[r]<<16)+(e[r+1]<<8)+e[r+2],a+=function(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}(n);switch(i){case 1:n=e[e.length-1],a+=t(n>>2),a+=t(n<<4&63),a+="==";break;case 2:n=(e[e.length-2]<<8)+e[e.length-1],a+=t(n>>10),a+=t(n>>4&63),a+=t(n<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),a="/".charCodeAt(0),s="0".charCodeAt(0),u="a".charCodeAt(0),f="A".charCodeAt(0),d="-".charCodeAt(0),l="_".charCodeAt(0);e.toByteArray=r,e.fromByteArray=n}(void 0===r?this.base64js={}:r)}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/base64-js/lib/b64.js","/../../node_modules/base64-js/lib")},{buffer:3,rH1JPG:5}],2:[function(e,t,r){(function(e,n,o,i,a,s,u,f,d){!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof r?t.exports=n():e.returnExports=n()}(this,function(){function e(o,i){if("function"!=typeof i)throw new Error("Bad callback given: "+i);if(!o)throw new Error("No options given");var s=o.onResponse;if(o="string"==typeof o?{uri:o}:JSON.parse(JSON.stringify(o)),o.onResponse=s,o.verbose&&(e.log=n()),o.url&&(o.uri=o.url,delete o.url),!o.uri&&""!==o.uri)throw new Error("options.uri is a required argument");if("string"!=typeof o.uri)throw new Error("options.uri must be a string");for(var u=["proxy","_redirectsFollowed","maxRedirects","followRedirect"],f=0;f<u.length;f++)if(o[u[f]])throw new Error("options."+u[f]+" is not supported");if(o.callback=i,o.method=o.method||"GET",o.headers=o.headers||{},o.body=o.body||null,o.timeout=o.timeout||e.DEFAULT_TIMEOUT,o.headers.host)throw new Error("Options.headers.host is not supported");o.json&&(o.headers.accept=o.headers.accept||"application/json","GET"!==o.method&&(o.headers["content-type"]="application/json"),"boolean"!=typeof o.json?o.body=JSON.stringify(o.json):"string"!=typeof o.body&&(o.body=JSON.stringify(o.body)));var d=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")};if(o.qs){var l="string"==typeof o.qs?o.qs:d(o.qs);-1!==o.uri.indexOf("?")?o.uri=o.uri+"&"+l:o.uri=o.uri+"?"+l}if(o.form){if("string"==typeof o.form)throw"form name unsupported";if("POST"===o.method){var c=(o.encoding||"application/x-www-form-urlencoded").toLowerCase();switch(o.headers["content-type"]=c,c){case"application/x-www-form-urlencoded":o.body=d(o.form).replace(/%20/g,"+");break;case"multipart/form-data":var h=function(e){var t={};t.boundry="-------------------------------"+Math.floor(1e9*Math.random());var r=[];for(var n in e)e.hasOwnProperty(n)&&r.push("--"+t.boundry+'\nContent-Disposition: form-data; name="'+n+'"\n\n'+e[n]+"\n");return r.push("--"+t.boundry+"--"),t.body=r.join(""),t.length=t.body.length,t.type="multipart/form-data; boundary="+t.boundry,t}(o.form);o.body=h.body,o.headers["content-type"]=h.type;break;default:throw new Error("unsupported encoding:"+c)}}}return o.onResponse=o.onResponse||r,!0===o.onResponse&&(o.onResponse=i,o.callback=r),!o.headers.authorization&&o.auth&&(o.headers.authorization="Basic "+a(o.auth.username+":"+o.auth.password)),t(o)}function t(t){function r(){l=!0;var r=new Error("ETIMEDOUT");return r.code="ETIMEDOUT",r.duration=t.timeout,e.log.error("Timeout",{id:d._id,milliseconds:t.timeout}),t.callback(r,d)}function n(r){if(l)return e.log.debug("Ignoring timed out state change",{state:d.readyState,id:d.id});if(e.log.debug("State change",{state:d.readyState,id:d.id,timed_out:l}),d.readyState===s.OPENED){e.log.debug("Request started",{id:d.id});for(var n in t.headers)d.setRequestHeader(n,t.headers[n])}else d.readyState===s.HEADERS_RECEIVED?o():d.readyState===s.LOADING?(o(),a()):d.readyState===s.DONE&&(o(),a(),f())}function o(){if(!g.response){if(g.response=!0,e.log.debug("Got response",{id:d.id,status:d.status}),clearTimeout(d.timeoutTimer),d.statusCode=d.status,c&&0==d.statusCode){var r=new Error("CORS request rejected: "+t.uri);return r.cors="rejected",g.loading=!0,g.end=!0,t.callback(r,d)}t.onResponse(null,d)}}function a(){g.loading||(g.loading=!0,e.log.debug("Response body loading",{id:d.id}))}function f(){if(!g.end){if(g.end=!0,e.log.debug("Request done",{id:d.id}),d.body=d.responseText,t.json)try{d.body=JSON.parse(d.responseText)}catch(e){return t.callback(e,d)}t.callback(null,d,d.body)}}var d=new s,l=!1,c=i(t.uri),h="withCredentials"in d;if(u+=1,d.seq_id=u,d.id=u+": "+t.method+" "+t.uri,d._id=d.id,c&&!h){var p=new Error("Browser does not support cross-origin request: "+t.uri);return p.cors="unsupported",t.callback(p,d)}d.timeoutTimer=setTimeout(r,t.timeout);var g={response:!1,loading:!1,end:!1};return d.onreadystatechange=n,d.open(t.method,t.uri,!0),c&&(d.withCredentials=!!t.withCredentials),d.send(t.body),d}function r(){}function n(){var e,t,n={},i=["trace","debug","info","warn","error"];for(t=0;t<i.length;t++)e=i[t],n[e]=r,"undefined"!=typeof console&&console&&console[e]&&(n[e]=o(console,e));return n}function o(e,t){function r(r,n){return"object"==typeof n&&(r+=" "+JSON.stringify(n)),e[t].call(e,r)}return r}function i(e){var t,r=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;try{t=location.href}catch(e){t=document.createElement("a"),t.href="",t=t.href}var n=r.exec(t.toLowerCase())||[],o=r.exec(e.toLowerCase());return!(!o||o[1]==n[1]&&o[2]==n[2]&&(o[3]||("http:"===o[1]?80:443))==(n[3]||("http:"===n[1]?80:443)))}function a(e){var t,r,n,o,i,a,s,u,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=0,l=0,c="",h=[];if(!e)return e;do{t=e.charCodeAt(d++),r=e.charCodeAt(d++),n=e.charCodeAt(d++),u=t<<16|r<<8|n,o=u>>18&63,i=u>>12&63,a=u>>6&63,s=63&u,h[l++]=f.charAt(o)+f.charAt(i)+f.charAt(a)+f.charAt(s)}while(d<e.length);switch(c=h.join(""),e.length%3){case 1:c=c.slice(0,-2)+"==";break;case 2:c=c.slice(0,-1)+"="}return c}var s=XMLHttpRequest;if(!s)throw new Error("missing XMLHttpRequest");e.log={trace:r,debug:r,info:r,warn:r,error:r};var u=0;return e.withCredentials=!1,e.DEFAULT_TIMEOUT=18e4,e.defaults=function(t,r){var n=function(e){return function(r,n){r="string"==typeof r?{uri:r}:JSON.parse(JSON.stringify(r));for(var o in t)void 0===r[o]&&(r[o]=t[o]);return e(r,n)}},o=n(e);return o.get=n(e.get),o.post=n(e.post),o.put=n(e.put),o.head=n(e.head),o},["get","put","post","head"].forEach(function(t){var r=t.toUpperCase();e[t.toLowerCase()]=function(t){"string"==typeof t?t={method:r,uri:t}:(t=JSON.parse(JSON.stringify(t)),t.method=r);var n=[t].concat(Array.prototype.slice.apply(arguments,[1]));return e.apply(this,n)}}),e.couch=function(t,n){function o(e,t,r){if(e)return n(e,t,r);if((t.statusCode<200||t.statusCode>299)&&r.error){e=new Error("CouchDB error: "+(r.error.reason||r.error.error));for(var o in r)e[o]=r[o];return n(e,t,r)}return n(e,t,r)}return"string"==typeof t&&(t={uri:t}),t.json=!0,t.body&&(t.json=t.body),delete t.body,n=n||r,e(t,o)},e})}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/browser-request/index.js","/../../node_modules/browser-request")},{buffer:3,rH1JPG:5}],3:[function(e,t,r){(function(t,n,o,i,a,s,u,f,d){function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var n=typeof e;if("base64"===t&&"string"===n)for(e=j(e);e.length%4!=0;)e+="=";var i;if("number"===n)i=J(e);else if("string"===n)i=o.byteLength(e,t);else{if("object"!==n)throw new Error("First argument needs to be a number, array or string.");i=J(e.length)}var a;o._useTypedArrays?a=o._augment(new Uint8Array(i)):(a=this,a.length=i,a._isBuffer=!0);var s;if(o._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(H(e))for(s=0;s<i;s++)o.isBuffer(e)?a[s]=e.readUInt8(s):a[s]=e[s];else if("string"===n)a.write(e,0,t);else if("number"===n&&!o._useTypedArrays&&!r)for(s=0;s<i;s++)a[s]=0;return a}function l(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a=t.length;V(a%2==0,"Invalid hex string"),n>a/2&&(n=a/2);for(var s=0;s<n;s++){var u=parseInt(t.substr(2*s,2),16);V(!isNaN(u),"Invalid hex string"),e[r+s]=u}return o._charsWritten=2*s,s}function c(e,t,r,n){return o._charsWritten=W(P(t),e,r,n)}function h(e,t,r,n){return o._charsWritten=W(R(t),e,r,n)}function p(e,t,r,n){return h(e,t,r,n)}function g(e,t,r,n){return o._charsWritten=W(F(t),e,r,n)}function y(e,t,r,n){return o._charsWritten=W(G(t),e,r,n)}function w(e,t,r){return 0===t&&r===e.length?Q.fromByteArray(e):Q.fromByteArray(e.slice(t,r))}function b(e,t,r){var n="",o="";r=Math.min(e.length,r);for(var i=t;i<r;i++)e[i]<=127?(n+=X(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return n+X(o)}function m(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;o++)n+=String.fromCharCode(e[o]);return n}function v(e,t,r){return m(e,t,r)}function E(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;i++)o+=D(e[i]);return o}function I(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function A(e,t,r,n){n||(V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return r?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function B(e,t,r,n){n||(V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return r?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function L(e,t,r,n){if(n||(V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+1<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=A(e,t,r,!0);return 32768&o?-1*(65535-o+1):o}}function C(e,t,r,n){if(n||(V("boolean"==typeof r,"missing or invalid endian"),V(void 0!==t&&null!==t,"missing offset"),V(t+3<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=B(e,t,r,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function S(e,t,r,n){return n||(V("boolean"==typeof r,"missing or invalid endian"),V(t+3<e.length,"Trying to read beyond buffer length")),Z.read(e,t,r,23,4)}function U(e,t,r,n){return n||(V("boolean"==typeof r,"missing or invalid endian"),V(t+7<e.length,"Trying to read beyond buffer length")),Z.read(e,t,r,52,8)}function T(e,t,r,n,o){o||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==r&&null!==r,"missing offset"),V(r+1<e.length,"trying to write beyond buffer length"),z(t,65535));var i=e.length;if(!(r>=i))for(var a=0,s=Math.min(i-r,2);a<s;a++)e[r+a]=(t&255<<8*(n?a:1-a))>>>8*(n?a:1-a)}function _(e,t,r,n,o){o||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==r&&null!==r,"missing offset"),V(r+3<e.length,"trying to write beyond buffer length"),z(t,4294967295));var i=e.length;if(!(r>=i))for(var a=0,s=Math.min(i-r,4);a<s;a++)e[r+a]=t>>>8*(n?a:3-a)&255}function k(e,t,r,n,o){o||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==r&&null!==r,"missing offset"),V(r+1<e.length,"Trying to write beyond buffer length"),Y(t,32767,-32768)),r>=e.length||(t>=0?T(e,t,r,n,o):T(e,65535+t+1,r,n,o))}function x(e,t,r,n,o){o||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==r&&null!==r,"missing offset"),V(r+3<e.length,"Trying to write beyond buffer length"),Y(t,2147483647,-2147483648)),r>=e.length||(t>=0?_(e,t,r,n,o):_(e,4294967295+t+1,r,n,o))}function N(e,t,r,n,o){o||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==r&&null!==r,"missing offset"),V(r+3<e.length,"Trying to write beyond buffer length"),K(t,3.4028234663852886e38,-3.4028234663852886e38)),r>=e.length||Z.write(e,t,r,n,23,4)}function M(e,t,r,n,o){o||(V(void 0!==t&&null!==t,"missing value"),V("boolean"==typeof n,"missing or invalid endian"),V(void 0!==r&&null!==r,"missing offset"),V(r+7<e.length,"Trying to write beyond buffer length"),K(t,1.7976931348623157e308,-1.7976931348623157e308)),r>=e.length||Z.write(e,t,r,n,52,8)}function j(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function q(e,t,r){return"number"!=typeof e?r:(e=~~e)>=t?t:e>=0?e:(e+=t,e>=0?e:0)}function J(e){return e=~~Math.ceil(+e),e<0?0:e}function O(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function H(e){return O(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function D(e){return e<16?"0"+e.toString(16):e.toString(16)}function P(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(e.charCodeAt(r));else{var o=r;n>=55296&&n<=57343&&r++;for(var i=encodeURIComponent(e.slice(o,r+1)).substr(1).split("%"),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}}return t}function R(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}function G(e){for(var t,r,n,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),r=t>>8,n=t%256,o.push(n),o.push(r);return o}function F(e){return Q.toByteArray(e)}function W(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);o++)t[o+r]=e[o];return o}function X(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function z(e,t){V("number"==typeof e,"cannot write a non-number as a number"),V(e>=0,"specified a negative value for writing an unsigned value"),V(e<=t,"value is larger than maximum value for type"),V(Math.floor(e)===e,"value has a fractional component")}function Y(e,t,r){V("number"==typeof e,"cannot write a non-number as a number"),V(e<=t,"value larger than maximum allowed value"),V(e>=r,"value smaller than minimum allowed value"),V(Math.floor(e)===e,"value has a fractional component")}function K(e,t,r){V("number"==typeof e,"cannot write a non-number as a number"),V(e<=t,"value larger than maximum allowed value"),V(e>=r,"value smaller than minimum allowed value")}function V(e,t){if(!e)throw new Error(t||"Failed assertion")}var Q=e("base64-js"),Z=e("ieee754");r.Buffer=o,r.SlowBuffer=o,r.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=P(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=F(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw new Error("Unknown encoding")}return r},o.concat=function(e,t){if(V(O(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var r;if("number"!=typeof t)for(t=0,r=0;r<e.length;r++)t+=e[r].length;var n=new o(t),i=0;for(r=0;r<e.length;r++){var a=e[r];a.copy(n,i),i+=a.length}return n},o.prototype.write=function(e,t,r,n){if(isFinite(t))isFinite(r)||(n=r,r=void 0);else{var o=n;n=t,t=r,r=o}t=Number(t)||0;var i=this.length-t;r?(r=Number(r))>i&&(r=i):r=i,n=String(n||"utf8").toLowerCase();var a;switch(n){case"hex":a=l(this,e,t,r);break;case"utf8":case"utf-8":a=c(this,e,t,r);break;case"ascii":a=h(this,e,t,r);break;case"binary":a=p(this,e,t,r);break;case"base64":a=g(this,e,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=y(this,e,t,r);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(e,t,r){var n=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(r=void 0!==r?Number(r):r=n.length)===t)return"";var o;switch(e){case"hex":o=E(n,t,r);break;case"utf8":case"utf-8":o=b(n,t,r);break;case"ascii":o=m(n,t,r);break;case"binary":o=v(n,t,r);break;case"base64":o=w(n,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=I(n,t,r);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,r,n){var i=this;if(r||(r=0),n||0===n||(n=this.length),t||(t=0),n!==r&&0!==e.length&&0!==i.length){V(n>=r,"sourceEnd < sourceStart"),V(t>=0&&t<e.length,"targetStart out of bounds"),V(r>=0&&r<i.length,"sourceStart out of bounds"),V(n>=0&&n<=i.length,"sourceEnd out of bounds"),n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var a=n-r;if(a<100||!o._useTypedArrays)for(var s=0;s<a;s++)e[s+t]=this[s+r];else e._set(this.subarray(r,r+a),t)}},o.prototype.slice=function(e,t){var r=this.length;if(e=q(e,r,0),t=q(t,r,r),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var n=t-e,i=new o(n,void 0,!0),a=0;a<n;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return A(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return B(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return B(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(V(void 0!==e&&null!==e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){return 128&this[e]?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return L(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return L(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return C(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return C(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return S(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return S(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return U(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return U(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,r){r||(V(void 0!==e&&null!==e,"missing value"),V(void 0!==t&&null!==t,"missing offset"),V(t<this.length,"trying to write beyond buffer length"),z(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,r){T(this,e,t,!0,r)},o.prototype.writeUInt16BE=function(e,t,r){T(this,e,t,!1,r)},o.prototype.writeUInt32LE=function(e,t,r){_(this,e,t,!0,r)},o.prototype.writeUInt32BE=function(e,t,r){_(this,e,t,!1,r)},o.prototype.writeInt8=function(e,t,r){r||(V(void 0!==e&&null!==e,"missing value"),V(void 0!==t&&null!==t,"missing offset"),V(t<this.length,"Trying to write beyond buffer length"),Y(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r))},o.prototype.writeInt16LE=function(e,t,r){k(this,e,t,!0,r)},o.prototype.writeInt16BE=function(e,t,r){k(this,e,t,!1,r)},o.prototype.writeInt32LE=function(e,t,r){x(this,e,t,!0,r)},o.prototype.writeInt32BE=function(e,t,r){x(this,e,t,!1,r)},o.prototype.writeFloatLE=function(e,t,r){N(this,e,t,!0,r)},o.prototype.writeFloatBE=function(e,t,r){N(this,e,t,!1,r)},o.prototype.writeDoubleLE=function(e,t,r){M(this,e,t,!0,r)},o.prototype.writeDoubleBE=function(e,t,r){M(this,e,t,!1,r)},o.prototype.fill=function(e,t,r){if(e||(e=0),t||(t=0),r||(r=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),V("number"==typeof e&&!isNaN(e),"value is not a number"),V(r>=t,"end < start"),r!==t&&0!==this.length){V(t>=0&&t<this.length,"start out of bounds"),V(r>=0&&r<=this.length,"end out of bounds");for(var n=t;n<r;n++)this[n]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=D(this[n]),n===r.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;t<r;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var $=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=$.get,e.set=$.set,e.write=$.write,e.toString=$.toString,e.toLocaleString=$.toString,e.toJSON=$.toJSON,e.copy=$.copy,e.slice=$.slice,e.readUInt8=$.readUInt8,e.readUInt16LE=$.readUInt16LE,e.readUInt16BE=$.readUInt16BE,e.readUInt32LE=$.readUInt32LE,e.readUInt32BE=$.readUInt32BE,e.readInt8=$.readInt8,e.readInt16LE=$.readInt16LE,e.readInt16BE=$.readInt16BE,e.readInt32LE=$.readInt32LE,e.readInt32BE=$.readInt32BE,e.readFloatLE=$.readFloatLE,e.readFloatBE=$.readFloatBE,e.readDoubleLE=$.readDoubleLE,e.readDoubleBE=$.readDoubleBE,e.writeUInt8=$.writeUInt8,e.writeUInt16LE=$.writeUInt16LE,e.writeUInt16BE=$.writeUInt16BE,e.writeUInt32LE=$.writeUInt32LE,e.writeUInt32BE=$.writeUInt32BE,e.writeInt8=$.writeInt8,e.writeInt16LE=$.writeInt16LE,e.writeInt16BE=$.writeInt16BE,e.writeInt32LE=$.writeInt32LE,e.writeInt32BE=$.writeInt32BE,e.writeFloatLE=$.writeFloatLE,e.writeFloatBE=$.writeFloatBE,e.writeDoubleLE=$.writeDoubleLE,e.writeDoubleBE=$.writeDoubleBE,e.fill=$.fill,e.inspect=$.inspect,e.toArrayBuffer=$.toArrayBuffer,e}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/buffer/index.js","/../../node_modules/buffer")},{"base64-js":1,buffer:3,ieee754:4,rH1JPG:5}],4:[function(e,t,r){(function(e,t,n,o,i,a,s,u,f){r.read=function(e,t,r,n,o){var i,a,s=8*o-n-1,u=(1<<s)-1,f=u>>1,d=-7,l=r?o-1:0,c=r?-1:1,h=e[t+l];for(l+=c,i=h&(1<<-d)-1,h>>=-d,d+=s;d>0;i=256*i+e[t+l],l+=c,d-=8);for(a=i&(1<<-d)-1,i>>=-d,d+=n;d>0;a=256*a+e[t+l],l+=c,d-=8);if(0===i)i=1-f;else{if(i===u)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,n),i-=f}return(h?-1:1)*a*Math.pow(2,i-n)},r.write=function(e,t,r,n,o,i){var a,s,u,f=8*i-o-1,d=(1<<f)-1,l=d>>1,c=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:i-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=d):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),t+=a+l>=1?c/u:c*Math.pow(2,1-l),t*u>=2&&(a++,u/=2),a+l>=d?(s=0,a=d):a+l>=1?(s=(t*u-1)*Math.pow(2,o),a+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,o),a=0));o>=8;e[r+h]=255&s,h+=p,s/=256,o-=8);for(a=a<<o|s,f+=o;f>0;e[r+h]=255&a,h+=p,a/=256,f-=8);e[r+h-p]|=128*g}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/ieee754/index.js","/../../node_modules/ieee754")},{buffer:3,rH1JPG:5}],5:[function(e,t,r){(function(e,r,n,o,i,a,s,u,f){function d(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var r=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),r.length>0)){r.shift()()}},!0),function(e){r.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=d,e.addListener=d,e.once=d,e.off=d,e.removeListener=d,e.removeAllListeners=d,e.emit=d,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/process/browser.js","/../../node_modules/process")},{buffer:3,rH1JPG:5}],6:[function(e,t,r){(function(t,r,n,o,i,a,s,u,f){var d=e("./requester"),l=e("./interface");const c=document.querySelector(".articles"),h=document.querySelector(".sidebar h1");document.querySelector(".loading");h.addEventListener("click",function(){c.innerHTML="",l.loader.show(),l.updateHeader("latest news"),d.listTopArticles(function(){l.loader.hide()})}),d.listSources(function(e){for(var t=0;t<e.length;t++)l.createListItem(e[t])}),l.updateHeader("latest news"),l.loader.show(),d.listTopArticles(function(){l.loader.hide()}),window.updateArticles=function(e){window.scrollTo(0,0),l.updateHeader(e),c.innerHTML="",l.loader.show(),d.listArticles(e,function(e){for(var t=0;t<e.articles.length;t++)l.article({article:e.articles[t],source:e.source}),t===e.articles.length-1&&l.loader.hide()})}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_b86e34c2.js","/")},{"./interface":7,"./requester":8,buffer:3,rH1JPG:5}],7:[function(e,t,r){(function(e,r,n,o,i,a,s,u,f){const d=document.querySelector(".sidebar"),l=document.querySelector(".articles"),c=document.querySelector("title");t.exports={createListItem:function(e){var t=document.createElement("p");t.innerHTML=e.name,t.classList.add("list-item"),t.addEventListener("click",function(){window.updateArticles(e.id)}),d.appendChild(t)},article:function(e){var t=e.article,r=(e.source,document.createElement("article")),n=document.createElement("a");n.classList.add("article"),n.href=t.url;var o=document.createElement("h3");o.textContent=t.title,n.appendChild(o);var i=document.createElement("p");i.classList.add("meta");var a=document.createElement("span");t.author&&(a.textContent=t.author+" - "),i.appendChild(a);var s=document.createElement("span");s.textContent=new Date(t.publishedAt).toLocaleDateString(),i.appendChild(s),n.appendChild(i);var u=document.createElement("p");u.textContent=t.description,n.appendChild(u),r.appendChild(n);var f=document.createElement("img");t.urlToImage&&(f.src=t.urlToImage,f.alt=t.description),r.appendChild(f),l.appendChild(r)},updateHeader:function(e){var t=document.querySelector("header");c.textContent="newrn | "+e,t.textContent=e,localStorage.currentSource=e},loader:{show:function(){var e=document.createElement("div");e.classList.add("loading");var t=document.createElement("img");t.src="static/img/radio.svg",e.appendChild(t),l.appendChild(e)},hide:function(){var e=document.querySelector(".loading");l.removeChild(e)}}}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/interface.js","/")},{buffer:3,rH1JPG:5}],8:[function(e,t,r){(function(r,n,o,i,a,s,u,f,d){var l=e("browser-request"),c=e("./interface");t.exports={listSources:function(e){l("https://newsapi.org/v1/sources?language=en",function(t,r){e(JSON.parse(r.body).sources)})},listArticles:function(e,t){l("https://newsapi.org/v1/articles?apiKey=0ef6be55c02645629c2ae9ffedd2a9b4&source="+e,function(e,r){t(JSON.parse(r.body))})},listTopArticles:function(e){var t=this;this.listSources(function(r){for(var n=0;n<r.length;n++)if(t.listArticles(r[n].id,function(e){c.article({article:e.articles[0],source:e.source})}),n===r.length-1)return e()})}}}).call(this,e("rH1JPG"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/requester.js","/")},{"./interface":7,"browser-request":2,buffer:3,rH1JPG:5}]},{},[6]);