(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r=c(n("q1tI")),a=c(n("Xuae")),o=n("lwAK"),u=n("FYa8"),i=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=l.length;i<c;i++){var f=l[i];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var s=a.props[f],d=r[f]||new Set;d.has(s)?o=!1:(d.add(s),r[f]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function v(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}v.rewind=p.rewind;var h=v;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),u=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(f(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){u(f,i);var c=s(f);function f(e){var o;return r(this,f),o=c.call(this,e),d&&(t.add(a(o)),n(a(o))),o}return o(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component))}},cha2:function(e,t,n){"use strict";n.r(t);var r=n("h4VS"),a=n("8Kt/"),o=n.n(a),u=n("q1tI"),i=n.n(u),c=n("vOnD"),f=n("veiF"),s=i.a.createElement;function l(){var e=Object(r.a)(["\n      font-size: 18px;\n    "]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n      font-size: 17px;\n    "]);return d=function(){return e},e}function p(){var e=Object(r.a)(["\n      font-size: 16px;\n    "]);return p=function(){return e},e}function v(){var e=Object(r.a)(["\n      font-size: 15px;\n    "]);return v=function(){return e},e}function h(){var e=Object(r.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Josefin Sans', sans-serif;\n    font-size: 14px;\n    font-weight: 300;\n    ",";\n    ",";\n    ",";\n    ",";\n  }\n"]);return h=function(){return e},e}var m=Object(c.a)(h(),Object(f.a)(4)(v()),Object(f.a)(7)(p()),Object(f.a)(9)(d()),Object(f.a)(12)(l()));t.default=function(e){var t=e.Component,n=e.pageProps;return s(i.a.Fragment,null,s(o.a,null,s("link",{href:"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap",rel:"stylesheet"})),s(t,n),s(m,null))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[[0,0,1,2,3]]]);