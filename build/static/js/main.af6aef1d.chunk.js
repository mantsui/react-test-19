(this["webpackJsonpreact-test-19"]=this["webpackJsonpreact-test-19"]||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r);a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(10),u=(a(19),a(4)),i=a(5),s=a(8),m=a(6),d=a(9),h=a(7),E=[{value:"alpha"},{value:"bravo"},{value:"charlie"},{value:"delta"},{value:"echo"}],b=function(e,t){return l.a.createElement("option",{disabled:e.disabled||e.separator,key:t,value:e.value},e.value)},p=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.DropdownSelect,{kind:"line"},(e="Please select dimension",l.a.createElement("option",{disabled:!0,selected:"selected"},e)),E.map(b)),l.a.createElement("br",null));var e}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={checkedValue:"one"},a.onChange=function(e){return a.setState({checkedValue:e.target.value})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.radioData,a=this.props.radioTitle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,a),l.a.createElement("br",null),t.map((function(t,a){return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement(h.Radio,{checked:e.state.checkedValue===t,onChange:e.onChange,name:"ordinal",value:t},t),l.a.createElement("br",null))})))}}]),t}(n.Component),v=a(1),g=window.tableau,O=["one","two","three"];var j=function(){var e=Object(n.useState)(void 0),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),u=Object(c.a)(o,2),i=u[0],s=u[1];return Object(n.useEffect)((function(){console.log("useFffect running"),g.extensions.initializeAsync().then((function(){var e=g.extensions.settings.get("sheet");r(e);g.extensions.dashboardContent.dashboard.worksheets.map((function(e){return e.name}));s(i)})),console.log("Console log output for tableau sheet"),console.log(a)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Tableau Extension D3 Sankey Diagram ConfigDialog.01"),l.a.createElement(v.d,null,l.a.createElement(v.b,null,l.a.createElement(v.a,null,"Main"),l.a.createElement(v.a,null,"Optional: Filter Actions"),l.a.createElement(v.a,null,"Optional: Formatting"),l.a.createElement(v.a,null,"About")),l.a.createElement(v.c,null,l.a.createElement("p",null,"Main, core options"),l.a.createElement("br",null),l.a.createElement(p,null)),l.a.createElement(v.c,null,l.a.createElement("p",null,"Optional features"),l.a.createElement("br",null),l.a.createElement(f,{radioData:O,radioTitle:"This is Radio Titlez"}),l.a.createElement("br",null)),l.a.createElement(v.c,null,l.a.createElement("p",null,"Optional formatting stuff")),l.a.createElement(v.c,null,l.a.createElement("p",null,"About"))))};o.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.af6aef1d.chunk.js.map