(this["webpackJsonpdownloadable-personal-website-as-cv"]=this["webpackJsonpdownloadable-personal-website-as-cv"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(1),s=n.n(l),c=n(17),i=n.n(c),o=(n(23),n(2)),r=n(3),d=n(5),b=n(4),h=(n.p,n(24),n(25),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={heading:{fontSize:"26px",textAlign:"left"},contact:{marginTop:"0",display:"block",fontSize:"14px"}},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return console.log("props",this.props),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsxs)("h1",{className:"title",style:this.props.didStyleChanged?this.downloadableStyle.heading:null,children:[Object(a.jsx)("b",{className:"name",children:this.props.content.name})," ",this.props.content.title]}),Object(a.jsxs)("div",{className:"contact-info",style:this.props.didStyleChanged?this.downloadableStyle.contact:null,children:[Object(a.jsxs)("span",{className:"contact-content",children:[Object(a.jsx)("b",{children:"Address:"})," Warschauer St. 1234 Berlin, 8855"]}),Object(a.jsxs)("label",{className:"contact-content",children:[Object(a.jsx)("b",{children:"Phone:"})," +49 333 5666 7733"]}),Object(a.jsxs)("label",{className:"contact-content",children:[Object(a.jsx)("b",{children:"Email:"})," alejandroantoniocamb@gmail.com"]}),Object(a.jsxs)("label",{className:"contact-content",children:[Object(a.jsx)("b",{children:"Date of Birth:"})," 14/10/1994 (dd/mm/yyyy)"]}),Object(a.jsxs)("label",{className:"contact-content",children:[Object(a.jsx)("b",{children:"Civil Status:"})," Single"]})]}),Object(a.jsx)("img",{src:"/CV-profile.png",className:"profile-pic",style:this.props.downloadableStyle?{display:"block"}:{display:"none"}}),Object(a.jsx)("div",{className:"languages",style:this.props.downloadableStyle?{display:"none"}:{display:"block"},children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{onClick:function(){return e.props.changeFileRoute("ES")},children:"ES"}),Object(a.jsx)("li",{onClick:function(){return e.props.changeFileRoute("EN")},children:"EN"}),Object(a.jsx)("li",{onClick:function(){return e.props.changeFileRoute("DE")},children:"DE"})]})})]})})}}]),n}(l.Component)),u=(n(26),n(37)),p=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadPdf=function(){navigator.vendor.match(/apple/i)?alert("Sorry, downloads on safari browsers are not supported. Please change to a different browser or write me an email requesting my CV and i'll gladly send it to you! "):a.props.changeDocumentStyle(!0).pipe(Object(u.a)()).subscribe((function(e){e&&window.print()}))},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"download-as-cv",onClick:this.downloadPdf,style:this.props.downloadableStyle?{display:"none"}:{display:"block"},children:"Download website as CV"})})}}]),n}(l.Component),j=n(38),f=(n(27),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={width:"496px",flex:"0 1"},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"contact-form",children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text"})}),Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{name:"textarea",rows:"10",cols:"50",placeholder:"Write something here"})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:Object(a.jsx)("b",{children:"SEND"})})})]})})}}]),n}(l.Component)),y=(n(28),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={container:{width:"400px",flex:"0 1",padding:"0 0",margin:"0",fontSize:"10px"}},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:Object(a.jsx)("ul",{className:"experience-list",children:this.props.list.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("label",{children:Object(a.jsx)("b",{children:Object(a.jsx)("a",{href:e.link,children:e.title})})}),Object(a.jsxs)("div",{className:"date",children:[Object(a.jsx)("span",{className:"date-specific",children:e.fromDate}),Object(a.jsx)("div",{className:"separator",children:"|"}),Object(a.jsx)("span",{className:"date-specific",children:e.toDate})]}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:e.place}),Object(a.jsx)("p",{children:e.body})]})}))})})}}]),n}(l.Component)),O=(n(29),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={container:{width:"496px",flex:"0 1",fontSize:"10px"}},a.showDescription=function(e){var t=a.state.showDescription;t[e]=!0,a.setState({showDescription:t})},a.removeDescription=function(e){var t=a.state.showDescription;t[e]=!1,a.setState({showDescription:t})},a.state={showDescription:[!1,!1,!1]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"container",style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:this.props.projects.map((function(t,n){return Object(a.jsxs)("div",{className:"projectContainer",onMouseEnter:function(){e.showDescription(n),e.forceUpdate()},onMouseLeave:function(){e.removeDescription(n),e.forceUpdate()},onClick:function(){return window.location.href=t.link},children:[Object(a.jsx)("img",{className:"githubLogo",src:"/github.png"}),Object(a.jsx)("p",{className:!1===e.state.showDescription[n]?"description hidden":"description",children:t.description}),Object(a.jsx)("span",{className:!0===e.state.showDescription[n]?"hidden":"",children:t.name}),Object(a.jsx)("div",{className:"projectFooter",children:Object(a.jsxs)("div",{className:"projectStars",children:["STARS: ",t.stars]})})]},n)}))})}}]),n}(l.Component)),x=(n(30),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={container:{width:"400px",flex:"0 1",fontSize:"8px",border:"1px solid blue"}},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{style:this.props.downloadableStyle?this.downloadableStyle.container:{width:"400px"},children:Object(a.jsx)("ul",{className:"skillList",children:this.props.skillList.map((function(e){return Object(a.jsxs)("li",{className:"skill",children:[Object(a.jsx)("span",{children:e.title}),Object(a.jsx)("div",{className:"skill-container",children:Object(a.jsxs)("div",{className:"skills skill-bar",style:{width:e.percentage+"%"},children:[e.percentage,"%"]})})]})}))})})}}]),n}(l.Component)),m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={container:{width:"450px",flex:"0 1",padding:"0 0",margin:"0",fontSize:"10px"},parragraph:{padding:"0px 20px",margin:"0px"}},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:Object(a.jsx)("p",{style:this.props.downloadableStyle?this.downloadableStyle.parragraph:null,children:this.props.parragraph})})}}]),n}(l.Component),v=(n(31),n(32),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={container:{width:"400px",flex:"0 1"},menu:{display:"none"}},a}return Object(r.a)(n,[{key:"changeSelection",value:function(e){this.selectedTab=[e],this.forceUpdate()}},{key:"componentDidMount",value:function(){this.selectedTab=[this.props.tabs[0]]}},{key:"render",value:function(){var e=this;return this.selectedTab=this.selectedTab?this.selectedTab:[this.props.tabs[0]],Object(a.jsxs)("div",{className:"menu-container",style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:[Object(a.jsx)("ul",{className:"menu",children:this.props.tabs.map((function(t){return Object(a.jsx)("li",{style:e.props.downloadableStyle?e.downloadableStyle.menu:null,className:-1!==e.selectedTab.indexOf(t)?"active":"",onClick:function(){return e.changeSelection(t)},children:t},t)}))}),Object(a.jsx)("div",{children:this.props.children[0][1].filter((function(t){return-1!==e.selectedTab.indexOf(t[1].props.value)||!1!==!!e.props.downloadableStyle}))})]})}}]),n}(l.Component)),w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var l;return Object(o.a)(this,n),(l=t.call(this,e)).downloadableStyle={display:"flex",flexDirection:"column",flexWrap:"wrap",height:"1087px",width:"943px",margin:"0",fontSize:"12px",cvTitle:{display:!0,marginBottom:"-2px"}},l.sectionRendererMap=new Map([["contactForm",function(e){return Object(a.jsx)(f,{})}],["list",function(e,t,n){return Object(a.jsx)(y,{list:e,value:n.key,downloadableStyle:t})}],["projects",function(e){return Object(a.jsx)(O,{projects:e})}],["skills",function(e,t,n){return Object(a.jsx)(x,{skillList:e,value:n.key,downloadableStyle:t})}],["menu",function(e,t,n){return Object(a.jsx)(v,{downloadableStyle:t,tabs:e.tabs,children:n.children})}],["text",function(e,t,n){return Object(a.jsx)(m,{parragraph:e,downloadableStyle:t,value:n.key})}]]),l.contentToRender=null,l.renderSections=function(e,t){return null===e||void 0===e?void 0:e.map((function(e){if(e&&e.structure)return console.log("SECTION",e),[Object(a.jsx)("h1",{style:l.props.downloadableStyle?l.downloadableStyle.cvTitle:null,children:"Profile"!==e.tabName&&"Profil"!==e.tabName&&"Perfil"!==e.tabName?e.tabName:""}),e.structure.map((function(e){return e.structure?l.sectionRendererMap.get(e.contentName)(e.content,t,{children:l.renderSections([e])}):[Object(a.jsx)("h1",{style:l.props.downloadableStyle?l.downloadableStyle.cvTitle:null,children:e.key}),l.sectionRendererMap.get(e.contentName)(e.content,t,{key:e.key})]}))]}))},l}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"content-body",style:this.props.downloadableStyle?this.downloadableStyle:null,children:this.renderSections(this.props.display,this.props.downloadableStyle)})}}]),n}(l.Component),S=(n(33),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).downloadableStyle={nav:{display:"none"},separationLine:{border:"3px solid black",backgroundColor:"black",marginRight:"25px"}},a.selectedTab=0,a.handleTabClick=function(e,t){a.props.selectTab(e),a.selectedTab=t},a.onMenuClick=function(e){var t="show"===e.navStyle.class?"hide":"show";a.setState({navStyle:{class:t}})},a.state={navStyle:{class:"show"}},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"menu-icon-container",onClick:function(){return e.onMenuClick(e.state)}}),Object(a.jsx)("div",{className:"menu-icon"}),Object(a.jsx)("div",{className:this.state.navStyle.class,style:this.props.downloadableStyle?this.downloadableStyle.nav:null,children:Object(a.jsx)("ul",{id:"profile-nav",children:this.props.tabs.map((function(t,n){return Object(a.jsx)("li",{className:e.selectedTab===n?"selected":"",onClick:function(){return e.handleTabClick(t.key,n)},children:t.tabName},n)}))})}),Object(a.jsx)("div",{className:"separtionLine",style:this.props.downloadableStyle?this.downloadableStyle.separationLine:null,children:Object(a.jsx)("span",{class:"traveler"})})]})}}]),n}(l.Component)),g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e,a){var l;return Object(o.a)(this,n),(l=t.call(this,e)).downloadableStyle={height:"1272px",width:"973px"},l.navBarOptions=[],l.fetchProfileJSON=function(){fetch(l.state.profileContentFile).then((function(e){return e.json()})).then((function(e){l.navBarOptions=Object.keys(e.sections).map((function(t){return{key:t,tabName:e.sections[t].tabName}})),l.setState({content:e,selectedPage:[e.sections[Object.keys(e.sections)[0]]]}),l.forceUpdate()}))},l.loadDownloadableStyle=function(e){if(e===l.state.style)l._styleChanged$.next(null);else{var t=[];Object.keys(l.state.content.sections).forEach((function(e,n){var a=l.state.content.sections[e];a.allowInCv&&t.push(a)})),l.setState({style:e,selectedPage:t})}return l._styleChanged$.asObservable()},l.changeSelectedTab=function(e){l.setState({selectedPage:[l.state.content.sections[e]]})},l.changeProfileFile=function(e){l.setState({selectedPage:[],content:{},profileContentFile:"cv-profile/".concat(e.toLowerCase(),".content.json")},(function(){l.fetchProfileJSON()}))},l.state={style:null,selectedPage:[],content:{},profileContentFile:"cv-profile/content.json"},l._styleChanged$=new j.a(null),l}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetchProfileJSON()}},{key:"componentDidUpdate",value:function(e,t,n){this.state.style&&(this._styleChanged$.next(!0),this.setState({style:null,selectedPage:[this.state.content.sections[Object.keys(this.state.content.sections)[0]]]}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{style:this.state.style?this.downloadableStyle:null,className:"App",id:"cvapp",children:[Object(a.jsx)(h,{didStyleChanged:this.state.style,changeFileRoute:this.changeProfileFile,content:this.state.content,downloadableStyle:this.state.style}),Object(a.jsx)(S,{tabs:this.navBarOptions,selectTab:this.changeSelectedTab,downloadableStyle:this.state.style}),Object(a.jsx)(w,{display:this.state.selectedPage,sections:this.state.content.sections,downloadableStyle:this.state.style}),Object(a.jsx)(p,{onClick:this.renderAllTabs,changeDocumentStyle:this.loadDownloadableStyle,downloadableStyle:this.state.style})]})}}]),n}(s.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),l(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.eafe9528.chunk.js.map