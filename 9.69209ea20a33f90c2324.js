(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+JOa":function(n){n.exports={elems:["phys","gun","fire","ice","elec","wind","psy","nuke","bless","curse","ailment","healing"],inherits:["phys","fire","ice","elec","wind","psy","nuke","bless","curse","ailment","healing","almighty"],ratios:["OO--------OO","OOO-OOOOOOOO","OO-OOOOOOOOO","OOOOO-OOOOOO","OOOO-OOOOOOO","OOOOOOO-OOOO","OOOOOO-OOOOO","--OOOOOOO--O","--OOOOOO-OO-","OOOOOOOO-OO-","--OOOOOOO-OO","OOOOOOOOOOOO"]}},"1OJ1":function(n,l,e){"use strict";e.d(l,"a",function(){return u});var u=function(){function n(n,l){this.changeDetector2=n,this.fusionDataService2=l,this.subscriptions=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.fusionDataService2.compendium.subscribe(function(l){n.changeDetector2.markForCheck(),n.compendium=l,n._dlcDemons=Object.assign({},n.compendium.dlcDemons),n.dlcDemons=Object.entries(n._dlcDemons).map(function(n){return{name:n[0],included:n[1]}})}))},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n.prototype.toggleName=function(n){this._dlcDemons[n]=!this._dlcDemons[n],this.fusionDataService2.nextDlcDemons(this._dlcDemons)},n}()},"3ug7":function(n,l,e){"use strict";e.d(l,"a",function(){return i}),e.d(l,"b",function(){return u}),e.d(l,"c",function(){return t}),e("AnYp"),e("ejUt"),e("bqhy"),e("exTN"),e("OJ5D"),e("IdNb"),e("TVja"),e("GVDr");var u={fusionTool:"chart"},t={showShadows:!0},i=function(){return function(){}}()},"5i+Q":function(n,l,e){"use strict";var u=e("26FU"),t=e("QU2n"),i=e("mrSG"),o=e("QlaI"),r=function(n){function l(l,e){var u=n.call(this)||this;return u.lvlModifier=.5,u.initCharts(l,e),u}return i.c(l,n),l.prototype.initCharts=function(n,l){var e=n.races,u=n.table,t=l.elems,i=l.races,r=l.table;this.elementDemons=t,this.fusionChart=o.a.loadFusionTableJson(e,u),this.fissionChart=o.a.loadFissionTableJson(e,t,u),this.elementChart=o.a.loadElementTableJson(i,t,r),this.races=e},l}(o.a),s=e("qEb6"),a=e("WX6r"),c=e("cNXa"),p=e("/8Lz");function m(n,l,e){for(var u=[],t=l.getDemon(n),i=t.race,o=t.lvl,r=function(n){var t=l.getDemon(n),r=t.race,s=t.lvl,a=e.getRaceFusions(i)[r],c=l.getResultDemonLvls(a),p=c.reduce(function(n,l){return o+s>=2*l?n+1:n},0),m=l.reverseLookupDemon(a,p===c.length?c[c.length-1]:c[p]);u.push({name1:n,name2:m})},s=0,a=e.elementDemons.filter(function(l){return l!==n});s<a.length;s++)r(a[s]);return u}var f=e("lM8r"),b=e("yQ3a");e.d(l,"a",function(){return d});var d=function(){function n(n,l){this.fissionCalculator=new s.a([f.a,b.a],[]),this.fusionCalculator=new s.a([a.b,c.a,a.c],[p.b,p.c,m]),this.compConfig=n,this.appName=n.appTitle+" Fusion Calculator",this.fusionSettingsKey=n.settingsKey,this.fusionSettingsVersion=n.settingsVersion,this._compendium=new t.a(n),this._compendium$=new u.a(this._compendium),this.compendium=this._compendium$.asObservable(),this._fusionChart=new r(n.normalTable,n.elementTable),this._fusionChart$=new u.a(this._fusionChart),this.fusionChart=this._fusionChart$.asObservable();var e=JSON.parse(localStorage.getItem(this.fusionSettingsKey));e&&e.version&&e.version>=this.fusionSettingsVersion&&this.nextDlcDemons(e.dlcDemons),window.addEventListener("storage",this.onStorageUpdated.bind(this))}return n.prototype.nextDlcDemons=function(n){localStorage.setItem(this.fusionSettingsKey,JSON.stringify({version:this.fusionSettingsVersion,dlcDemons:n})),this._compendium.dlcDemons=n,this._compendium$.next(this._compendium)},n.prototype.onStorageUpdated=function(n){switch(n.key){case this.fusionSettingsKey:this._compendium.dlcDemons=JSON.parse(n.newValue).dlcDemons,this._compendium$.next(this._compendium)}},n}()},"62qN":function(n,l,e){"use strict";e.d(l,"a",function(){return m});var u=e("CcnG"),t=e("RBgs"),i=e("bZqG"),o=e("ZYjt"),r=e("OJ5D"),s=e("5i+Q"),a=u.nb({encapsulation:2,styles:[],data:{}});function c(n){return u.Jb(2,[(n()(),u.pb(0,0,null,null,1,"app-demon-dlc-settings",[],null,[[null,"toggledName"]],function(n,l,e){var u=!0;return"toggledName"===l&&(u=!1!==n.component.toggleName(e)&&u),u},t.b,t.a)),u.ob(1,49152,null,0,i.a,[o.h],{dlcDemons:[0,"dlcDemons"],dlcTitle:[1,"dlcTitle"],appTitle:[2,"appTitle"]},{toggledName:"toggledName"})],function(n,l){var e=l.component;n(l,1,0,e.dlcDemons,"Included DLC Personas",e.appTitle)},null)}function p(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-demon-dlc-settings-container",[],null,null,null,c,a)),u.ob(1,245760,null,0,r.a,[u.h,s.a],null,null)],function(n,l){n(l,1,0)},null)}var m=u.lb("app-demon-dlc-settings-container",r.a,p,{},{},[])},"8II2":function(n,l,e){"use strict";e.d(l,"a",function(){return b});var u=e("CcnG"),t=e("dXIv"),i=e("DUID"),o=e("h6dA"),r=e("Ip0R"),s=e("bqhy"),a=e("ZYjt"),c=e("5i+Q"),p=u.nb({encapsulation:2,styles:[],data:{}});function m(n){return u.Jb(2,[(n()(),u.pb(0,0,null,null,3,"app-smt-skill-list",[],null,null,null,t.c,t.a)),u.Eb(4608,null,i.a,i.a,[[3,i.a]]),u.ob(2,8503296,null,0,o.a,[],{rowData:[0,"rowData"],elemOrder:[1,"elemOrder"],hasRank:[2,"hasRank"],isPersona:[3,"isPersona"],transferTitle:[4,"transferTitle"]},null),u.Bb(131072,r.b,[u.h])],function(n,l){var e=l.component;n(l,2,0,u.Ib(l,2,0,u.zb(l,3).transform(e.skills)),e.compConfig.elemOrder,!1,!0,"Skill Card")},null)}function f(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-skill-list-container",[],null,null,null,m,p)),u.ob(1,245760,null,0,s.a,[a.h,u.h,c.a],null,null)],function(n,l){n(l,1,0)},null)}var b=u.lb("app-skill-list-container",s.a,f,{},{},[])},AnYp:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var u=function(){return function(){}}()},IdNb:function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e("5i+Q");var u=function(){function n(n,l){this.changeDetectorRef=n,this.fusionDataService=l,this.mitaTable=[],this.subscriptions=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.fusionDataService.fusionChart.subscribe(function(l){n.changeDetectorRef.markForCheck(),n.normChart=l,n.updateMitamas()})),this.subscriptions.push(this.fusionDataService.compendium.subscribe(function(l){n.changeDetectorRef.markForCheck(),n.compendium=l,n.updateMitamas()}))},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n.prototype.updateMitamas=function(){var n=this;if(this.compendium&&this.normChart){for(var l=this.normChart.elementDemons.map(function(l){return n.compendium.getDemon(l).race}),e=[],u=function(u){var t=l[u];e.push(l.slice(u+1,l.length).map(function(l){return n.normChart.getRaceFusion(t,l)}))},t=0;t<l.length;t++)u(t);this.mitaTable=e}},n}()},IlY5:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var u=function(){return function(){this.inheritHeaders=[],this.inherits=[],this.hasChance=!1,this.hasIcons=!0,this.hasLvls=!1}}()},OJ5D:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var u=e("mrSG"),t=e("1OJ1"),i=(e("5i+Q"),function(n){function l(l,e){var u=n.call(this,l,e)||this;return u.changeDetector=l,u.fusionDataService=e,u.appTitle=e.appName,u}return u.c(l,n),l}(t.a))},PZD9:function(n,l,e){"use strict";var u=e("CcnG"),t=e("ZYCi"),i=e("Ip0R"),o=e("cg0H"),r=e("0ZaJ"),s=e("secp"),a=e("d6X+"),c=e("gkkx"),p=e("IlY5"),m=e("rFU4"),f=e("wdG2"),b=e("LVD6"),d=e("DUID"),h=e("Hz2L"),g=e("exTN"),v=(e("QU2n"),function(){return function(){}}()),O=u.nb({encapsulation:2,styles:[],data:{}});function k(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.zb(n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.ob(1,671744,null,0,t.q,[t.o,t.a,i.h],{routerLink:[0,"routerLink"]},null),(n()(),u.Hb(2,null,[" "," "]))],function(n,l){n(l,1,0,u.rb(1,"../../personas/",l.component.demon.persona,""))},function(n,l){var e=l.component;n(l,0,0,u.zb(l,1).target,u.zb(l,1).href),n(l,2,0,e.demon.persona)})}function y(n){return u.Jb(2,[(n()(),u.pb(0,0,null,null,3,"app-demon-stats",[],null,null,null,o.b,o.a)),u.ob(1,49152,null,0,r.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"]},null),u.Ab(2,4),u.Ab(3,2),(n()(),u.pb(4,0,null,null,24,"table",[],null,null,null,null,null)),(n()(),u.pb(5,0,null,null,12,"thead",[],null,null,null,null,null)),(n()(),u.pb(6,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.pb(7,0,null,null,1,"th",[["colspan","4"]],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Negotiation"])),(n()(),u.pb(9,0,null,null,8,"tr",[],null,null,null,null,null)),(n()(),u.pb(10,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Persona"])),(n()(),u.pb(12,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Personality"])),(n()(),u.pb(14,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Areas"])),(n()(),u.pb(16,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Drops"])),(n()(),u.pb(18,0,null,null,10,"tbody",[],null,null,null,null,null)),(n()(),u.pb(19,0,null,null,9,"tr",[],null,null,null,null,null)),(n()(),u.pb(20,0,null,null,2,"td",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,k)),u.ob(22,16384,null,0,i.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(23,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(24,null,["",""])),(n()(),u.pb(25,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(26,null,["",""])),(n()(),u.pb(27,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(28,null,["",""])),(n()(),u.pb(29,0,null,null,1,"app-demon-resists",[],null,null,null,s.b,s.a)),u.ob(30,49152,null,0,a.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),u.pb(31,0,null,null,1,"app-demon-skills",[],null,null,null,m.b,m.a)),u.ob(32,638976,null,0,f.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null)],function(n,l){var e=l.component,u="Lvl "+e.demon.lvl+" "+e.demon.race+" "+e.demon.name,t=n(l,2,0,"EXP","Yen","HP","MP").concat(e.compConfig.baseStats),i=n(l,3,0,e.demon.exp,e.demon.price).concat(e.demon.stats,e.demon.estats);n(l,1,0,u,t,i),n(l,22,0,e.demon.persona&&"-"!=e.demon.persona),n(l,30,0,e.compConfig.resistElems,e.demon.resists),n(l,32,0,e.compendium,e.compConfig.elemOrder,e.demon.skills)},function(n,l){var e=l.component;n(l,24,0,e.demon.trait),n(l,26,0,e.demon.area),n(l,28,0,e.demon.drop)})}var D=e("ZYjt"),C=e("veAJ"),I=e("5i+Q");e.d(l,"a",function(){return P});var L=u.nb({encapsulation:2,styles:[],data:{}});function H(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.zb(n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.ob(2,671744,null,0,t.q,[t.o,t.a,i.h],{routerLink:[0,"routerLink"]},null),(n()(),u.Hb(3,null,[""," "]))],function(n,l){n(l,2,0,u.rb(1,"../",l.context.$implicit,""))},function(n,l){n(l,1,0,u.zb(l,2).target,u.zb(l,2).href),n(l,3,0,l.context.$implicit)})}function J(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.zb(n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.ob(2,671744,null,0,t.q,[t.o,t.a,i.h],{routerLink:[0,"routerLink"]},null),(n()(),u.Hb(3,null,[""," "]))],function(n,l){n(l,2,0,u.rb(1,"../",l.context.$implicit,""))},function(n,l){n(l,1,0,u.zb(l,2).target,u.zb(l,2).href),n(l,3,0,l.context.$implicit)})}function x(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,14,"tr",[],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(2,null,["",""])),(n()(),u.pb(3,0,null,null,3,"td",[],null,null,null,null,null)),(n()(),u.pb(4,0,null,null,2,"ul",[["class","comma-list"]],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,H)),u.ob(6,278528,null,0,i.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(8,null,["",""])),(n()(),u.pb(9,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(10,null,["",""])),(n()(),u.pb(11,0,null,null,3,"td",[],null,null,null,null,null)),(n()(),u.pb(12,0,null,null,2,"ul",[["class","comma-list"]],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,J)),u.ob(14,278528,null,0,i.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,6,0,l.context.$implicit.names1),n(l,14,0,l.context.$implicit.names2)},function(n,l){n(l,2,0,l.context.$implicit.price),n(l,8,0,l.context.$implicit.lvl1),n(l,10,0,l.context.$implicit.lvl2)})}function S(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,25,"table",[],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,24,"tbody",[],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.pb(3,0,null,null,1,"th",[["colspan","5"]],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Treasure Demon Reverse Fusions"])),(n()(),u.pb(5,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.pb(6,0,null,null,1,"th",[["colspan","5"]],null,null,null,null,null)),(n()(),u.Hb(7,null,["Ingredient 1 x Ingredient 2 = ",""])),(n()(),u.pb(8,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),u.pb(9,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Price"])),(n()(),u.pb(11,0,null,null,1,"th",[["colspan","3"]],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Ingredient 1"])),(n()(),u.pb(13,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Ingredient 2"])),(n()(),u.pb(15,0,null,null,8,"tr",[],null,null,null,null,null)),(n()(),u.pb(16,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Names"])),(n()(),u.pb(18,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["MinLvl"])),(n()(),u.pb(20,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["MaxLvl"])),(n()(),u.pb(22,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(-1,null,["Names"])),(n()(),u.gb(16777216,null,null,1,null,x)),u.ob(25,278528,null,0,i.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,25,0,l.parent.context.ngIf)},function(n,l){n(l,7,0,l.component.demon.name)})}function j(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,S)),u.ob(2,16384,null,0,i.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(0,null,null,0))],function(n,l){n(l,2,0,l.context.ngIf.length)},null)}function w(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,16,null,null,null,null,null,null,null)),(n()(),u.pb(1,0,null,null,4,"app-demon-stats",[],null,null,null,o.b,o.a)),u.ob(2,49152,null,0,r.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"],fusionHeaders:[3,"fusionHeaders"],inherit:[4,"inherit"],price:[5,"price"]},null),u.Ab(3,1),(n()(),u.pb(4,0,null,0,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(5,null,["",""])),(n()(),u.pb(6,0,null,null,1,"app-demon-resists",[],null,null,null,s.b,s.a)),u.ob(7,49152,null,0,a.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),u.pb(8,0,null,null,1,"app-demon-inherits",[],null,null,null,c.b,c.a)),u.ob(9,49152,null,0,p.a,[],{inheritHeaders:[0,"inheritHeaders"],inherits:[1,"inherits"]},null),(n()(),u.pb(10,0,null,null,1,"app-demon-skills",[],null,null,null,m.b,m.a)),u.ob(11,638976,null,0,f.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null),(n()(),u.gb(16777216,null,null,1,null,j)),u.ob(13,16384,null,0,i.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(14,0,null,null,2,"app-smt-fusions",[],null,null,null,b.b,b.a)),u.Eb(4608,null,d.a,d.a,[[3,d.a]]),u.ob(16,638976,null,0,h.a,[],{excludedDlc:[0,"excludedDlc"]},null)],function(n,l){var e=l.component,u="Lvl "+e.demon.lvl+" "+e.demon.race+" "+e.demon.name,t=e.compConfig.baseStats,i=e.demon.stats,o=n(l,3,0,"Electric Chair");n(l,2,0,u,t,i,o,e.demon.inherit,e.demon.price),n(l,7,0,e.compConfig.resistElems,e.demon.resists),n(l,9,0,e.compConfig.inheritElems,e.compendium.getInheritElems(e.demon.inherit)),n(l,11,0,e.compendium,e.compConfig.elemOrder,e.demon.skills),n(l,13,0,e.compendium.splitMultiFusion(e.name)),n(l,16,0,"excluded"===e.demon.fusion)},function(n,l){n(l,5,0,l.component.demon.item)})}function N(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,9,null,null,null,null,null,null,null)),(n()(),u.pb(1,0,null,null,8,"table",[],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,3,"thead",[],null,null,null,null,null)),(n()(),u.pb(3,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.pb(4,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(5,null,["Entry for ",""])),(n()(),u.pb(6,0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),u.pb(7,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.pb(8,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),u.Hb(9,null,["Error: Could not find entry in compendium for ",""]))],null,function(n,l){var e=l.component;n(l,5,0,e.name),n(l,9,0,e.name)})}function E(n){return u.Jb(2,[(n()(),u.gb(16777216,null,null,1,null,w)),u.ob(1,16384,null,0,i.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,N)),u.ob(3,16384,null,0,i.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.demon),n(l,3,0,!e.demon)},null)}var F=u.nb({encapsulation:2,styles:[],data:{}});function T(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-demon-entry",[],null,null,null,E,L)),u.ob(1,49152,null,0,g.a,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],function(n,l){var e=l.component;n(l,1,0,e.name,e.demon,e.compendium,e.compConfig)},null)}function R(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-enemy-entry",[],null,null,null,y,O)),u.ob(1,49152,null,0,v,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],function(n,l){var e=l.component;n(l,1,0,e.name,e.demon,e.compendium,e.compConfig)},null)}function $(n){return u.Jb(2,[(n()(),u.gb(16777216,null,null,1,null,T)),u.ob(1,16384,null,0,i.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,R)),u.ob(3,16384,null,0,i.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,!e.demon||!e.demon.isEnemy),n(l,3,0,e.demon&&e.demon.isEnemy)},null)}function _(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-demon-entry-container",[],null,null,null,$,F)),u.ob(1,245760,null,0,g.b,[t.a,D.h,C.a,I.a],null,null)],function(n,l){n(l,1,0)},null)}var P=u.lb("app-demon-entry-container",g.b,_,{},{},[])},QU2n:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var u=function(){function n(n){this.compConfig=n,this.initImportedData(),this.updateDerivedData()}return n.prototype.initImportedData=function(){for(var n=this,l={},e={},u={},t={},i={},o={},r={},s=0,a=this.compConfig.demonData;s<a.length;s++)for(var c=0,p=Object.entries(a[s]);c<p.length;c++){var m=p[c],f=m[0];l[f]={name:f,item:(N=m[1]).item||"",race:N.race,lvl:N.lvl,skills:N.skills,price:Math.pow(N.stats.reduce(function(n,l){return l+n},0),2)+2e3,stats:N.stats,resists:N.resists.split("").map(function(l){return n.compConfig.resistCodes[l]}),fusion:N.fusion||"normal",inherit:N.inherits,prereq:N.prereq||""},N.itemr&&(l[f].item+=", "+N.itemr)}for(var b=0,d=this.compConfig.enemyData;b<d.length;b++)for(var h=0,g=Object.entries(d[b]);h<g.length;h++){var v=g[h],O=v[0],k=v[1],y=[k.material||"-",k.armor||"-",k.card||"-"].filter(function(n){return"-"!==n});e[O]={name:O,persona:k.persona,trait:k.trait,exp:k.exp,race:k.race,lvl:k.lvl,price:k.yen,stats:k.stats.slice(0,2),estats:k.stats.slice(2),resists:k.resists.split("").map(function(l){return n.compConfig.resistCodes[l]}),fusion:"normal",skills:(k.skills||[]).reduce(function(n,l){return n[l]=0,n},{}),area:k.area.join(", "),drop:y.join(", ")||"-",isEnemy:!0}}for(var D=0,C=this.compConfig.skillData;D<C.length;D++)for(var I=0,L=Object.entries(C[D]);I<L.length;I++){var H=L[I],J=H[0];u[J]={name:J,element:(N=H[1]).element,effect:N.effect,rank:N.cost/100||0,cost:N.cost||0,transfer:[],learnedBy:[],level:0},N.card&&(u[J].transfer=[{demon:N.card,level:-100}]),N.unique&&(u[J].rank=99)}for(var x=0,S=Object.entries(this.compConfig.specialRecipes);x<S.length;x++){var j=S[x],w=j[0],N=j[1];(M=l[w]).fusion="special",t[w]=N,2===N.length&&(r[N[0]]=N[1],r[N[1]]=N[0]),0===N.length&&(M.fusion="recruit")}for(var E=0,F=this.compConfig.races;E<F.length;E++)i[F[E]]={};for(var T=0,R=Object.values(e);T<R.length;T++)if((M=R[T]).drop){var $=M.drop.split(", ");u[Q=$[$.length-1]]&&u[Q].transfer.unshift({demon:M.persona,level:4073})}for(var _=0,P=Object.entries(l);_<P.length;_++){var G=P[_],z=G[0];if((M=G[1]).item){var Q,Y=M.item.split(", "),U=Y[1];u[Q=Y[0]]&&u[Q].transfer.unshift({demon:z,level:3778}),u[U]&&u[U].transfer.unshift({demon:z,level:3765})}"party"!==M.fusion&&(i[M.race][M.lvl]=z)}for(var q=0,A=Object.values(l);q<A.length;q++)for(var M=A[q],Z=0,K=Object.keys(M.skills);Z<K.length;Z++){var V=K[Z];u[V].learnedBy.push({demon:M.name,level:M.skills[V]})}for(var B=0,X=this.compConfig.downloadedDemons;B<X.length;B++)o[X[B]]=!0;for(var W=0,nn=this.compConfig.dlcDemons;W<nn.length;W++)o[nn[W]]=!1;this.demons=l,this.enemies=e,this.skills=u,this.specialRecipes=t,this.invertedDemons=i,this._dlcDemons=o,this.normalExceptions=r},n.prototype.updateDerivedData=function(){for(var n=this,l=Object.assign({},this.demons),e=Object.keys(this.skills).map(function(l){return n.skills[l]}).filter(function(n){return 0!==n.learnedBy.length||0!==n.transfer.length}),u={},t={},i=0,o=this.compConfig.races;i<o.length;i++)u[b=o[i]]=[],t[b]=[];for(var r=0,s=Object.entries(this.demons);r<s.length;r++){var a=s[r],c=a[0],p=a[1];"party"!==p.fusion&&(this.isElementDemon(c)||u[p.race].push(p.lvl),this.specialRecipes.hasOwnProperty(c)||t[p.race].push(p.lvl))}for(var m=0,f=this.compConfig.races;m<f.length;m++){var b;u[b=f[m]].sort(function(n,l){return n-l}),t[b].sort(function(n,l){return n-l})}for(var d=0,h=Object.entries(this._dlcDemons);d<h.length;d++)for(var g=h[d],v=g[1],O=function(n){if(!v){var e=k.demons[n],i=e.race,o=e.lvl;delete l[n],u[i]=u[i].filter(function(n){return n!==o}),t[i]=t[i].filter(function(n){return n!==o})}k.demons[n].fusion=v?"normal":"excluded"},k=this,y=0,D=g[0].split(",");y<D.length;y++)O(D[y]);var C=Object.keys(l).map(function(n){return l[n]}),I=Object.keys(this.enemies).map(function(l){return n.enemies[l]});this._allDemons=I.concat(C),this._allSkills=e,this.allIngredients=u,this.allResults=t},Object.defineProperty(n.prototype,"dlcDemons",{get:function(){return this._dlcDemons},set:function(n){this._dlcDemons=n,this.updateDerivedData()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allDemons",{get:function(){return this._allDemons},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allSkills",{get:function(){return this._allSkills},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"specialDemons",{get:function(){var n=this;return Object.keys(this.specialRecipes).filter(function(l){return!n.isElementDemon(l)}).map(function(l){return n.demons[l]})},enumerable:!0,configurable:!0}),n.prototype.getDemon=function(n){return this.demons[n]||this.enemies[n]},n.prototype.getSkill=function(n){return this.skills[n]},n.prototype.getSkills=function(n){for(var l=this,e=[],u=0,t=Object.entries(n);u<t.length;u++){var i=t[u],o=i[0],r=i[1];e.push(this.skills[o]),this.skills[o].level=r}return e.sort(function(n,e){return 100*(n.level-e.level)+l.compConfig.elemOrder[n.element]-l.compConfig.elemOrder[e.element]}),e},n.prototype.getIngredientDemonLvls=function(n){return this.allIngredients[n]||[]},n.prototype.getResultDemonLvls=function(n){return this.allResults[n]||[]},n.prototype.getSpecialNameEntries=function(n){return this.specialRecipes[n]||[]},n.prototype.getSpecialNamePairs=function(n){return[]},n.prototype.getElementDemons=function(n){var l=this;return Object.keys(this.specialRecipes).filter(function(e){return l.isElementDemon(e)&&e!==n})},n.prototype.getNormalException=function(n){return this.normalExceptions[n]},n.prototype.getInheritElems=function(n){return this.compConfig.inheritTypes[n]},n.prototype.reverseLookupDemon=function(n,l){return this.invertedDemons[n][l]},n.prototype.reverseLookupSpecial=function(n){return[]},n.prototype.isElementDemon=function(n){return this.specialRecipes.hasOwnProperty(n)&&0===this.specialRecipes[n].length},n.prototype.isRecruitmentOnly=function(n){return this.isElementDemon(n)},n.prototype.isExcludedDemon=function(n){var l=this.getDemon(n);return-1===this.allIngredients[l.race].indexOf(l.lvl)},n.prototype.splitMultiFusion=function(n){var l=[],e={},u=this.getDemon(n),t=u.race,i=u.lvl,o=this.compConfig.elementTable,r=o.races.indexOf(t),s=this.getResultDemonLvls(t).concat([99]),a=s.indexOf(i),c=[i];if(-1===r||-1===a)return[];for(var p=0;p<o.table[r].length;p++){var m=o.table[r][p];e[m]||(e[m]=[]),e[m].push(o.elems[p])}a>1&&e[2]&&l.push({price:0,names1:[],lvl1:s[a-2],names2:e[2],lvl2:s[a-1]-1}),a>0&&e[1]&&l.push({price:0,names1:[],lvl1:s[a-1],names2:e[1],lvl2:i-1}),e[-1]&&l.push({price:0,names1:[],lvl1:i+1,names2:e[-1],lvl2:s[a+1]}),a<s.length-2&&e[-1]&&(c.push(s[a+1]),l.push({price:0,names1:[this.reverseLookupDemon(t,s[a+1])],lvl1:s[a+1],names2:e[-1],lvl2:s[a+2]})),a<s.length-2&&e[-2]&&l.push({price:0,names2:e[-2],lvl1:s[a+1]+1,lvl2:s[a+2],names1:[]}),a<s.length-3&&e[-2]&&(c.push(s[a+2]),l.push({price:0,names1:[this.reverseLookupDemon(t,s[a+2])],lvl1:s[a+2],names2:e[-2],lvl2:s[a+3]}),l.push({price:0,names1:[this.reverseLookupDemon(t,s[a+1])],lvl1:s[a+2]+1,names2:e[-2],lvl2:s[a+3]}));for(var f=0,b=l.filter(function(n){return 0===n.names1.length});f<b.length;f++)for(var d=b[f],h=0,g=this.getIngredientDemonLvls(t).filter(function(n){return!c.includes(n)});h<g.length;h++){var v=g[h];v<=d.lvl2&&d.names1.push(this.reverseLookupDemon(t,v))}for(var O=0,k=l;O<k.length;O++)(d=k[O]).price=Math.pow(3*d.lvl1+7,2)+2e3;return l.filter(function(n){return n.names1.length>0})},n}()},RBgs:function(n,l,e){"use strict";e.d(l,"a",function(){return i}),e.d(l,"b",function(){return r});var u=e("CcnG"),t=e("Ip0R"),i=(e("bZqG"),e("ZYjt"),u.nb({encapsulation:2,styles:[],data:{}}));function o(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,3,"td",[],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,2,"label",[],null,null,null,null,null)),(n()(),u.Hb(3,null,[""," "])),(n()(),u.pb(4,0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"change"]],function(n,l,e){var u=!0;return"change"===l&&(u=!1!==n.component.toggledName.emit(n.context.$implicit.name)&&u),u},null,null))],null,function(n,l){var e=l.context.$implicit.name.split(",").join(", ");n(l,3,0,e),n(l,4,0,l.context.$implicit.included)})}function r(n){return u.Jb(2,[(n()(),u.pb(0,0,null,null,7,"table",[],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,3,"thead",[],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.pb(3,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),u.Hb(4,null,["",""])),(n()(),u.pb(5,0,null,null,2,"tbody",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,o)),u.ob(7,278528,null,0,t.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,7,0,l.component.dlcDemons)},function(n,l){n(l,4,0,l.component.dlcTitle)})}},VCST:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var u=function(){function n(){}return n.forRoot=function(){return{ngModule:n}},n}()},bZqG:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var u=e("CcnG"),t=function(){function n(n){this.title=n,this.dlcTitle="Included DLC Demons",this.toggledName=new u.m}return Object.defineProperty(n.prototype,"appTitle",{set:function(n){this.title.setTitle("Fusion Settings - "+n)},enumerable:!0,configurable:!0}),n}()},bqhy:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var u=e("mrSG"),t=e("z0S9"),i=(e("5i+Q"),function(n){function l(l,e,u){var t=n.call(this,l,e,u)||this;return t.compConfig=u.compConfig,t.appName="List of Skills - "+u.appName,t.defaultSortFun=function(n,l){return 1e4*(t.compConfig.elemOrder[n.element]-t.compConfig.elemOrder[l.element])+n.rank-l.rank},t}return u.c(l,n),l}(t.a))},ejUt:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var u=e("mrSG"),t=e("i4tJ"),i=(e("5i+Q"),function(n){function l(l,e,u,t){var i=n.call(this,l,u,t)||this;return i.showAllies=!e.snapshot.data.showShadows,i.showEnemies=!i.showAllies,i.compConfig=t.compConfig,i.defaultSortFun=function(n,l){return 200*(i.compConfig.raceOrder[n.race]-i.compConfig.raceOrder[l.race])+l.lvl-n.lvl},i.appName="List of Personas - "+t.appName,i.statHeaders=i.compConfig.baseStats,i.resistHeaders=i.compConfig.resistElems,i.inheritOrder=i.compConfig.elemOrder,i.showEnemies&&(i.appName="List of Shadows - "+t.appName,i.statHeaders=["HP","MP"],i.resistHeaders=i.compConfig.enemyResists,i.inheritOrder=null),i}return u.c(l,n),l}(t.a))},exTN:function(n,l,e){"use strict";e.d(l,"a",function(){return i}),e.d(l,"b",function(){return o});var u=e("mrSG"),t=e("VNUm"),i=(e("QU2n"),e("veAJ"),e("5i+Q"),function(){return function(){}}()),o=function(n){function l(l,e,u,t){var i=n.call(this,l,e,u,t)||this;return i.route=l,i.title=e,i.currentDemonService=u,i.fusionDataService=t,i.appName=t.appName,i.compConfig=t.compConfig,i}return u.c(l,n),l}(t.a)},gkkx:function(n,l,e){"use strict";e.d(l,"a",function(){return o}),e.d(l,"b",function(){return v});var u=e("CcnG"),t=e("Ip0R"),i=e("b7/z"),o=(e("IlY5"),u.nb({encapsulation:2,styles:[],data:{}}));function r(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"th",[],[[1,"colspan",0]],null,null,null,null)),(n()(),u.Hb(-1,null,["Inheritable Skills"]))],null,function(n,l){n(l,0,0,l.component.inheritHeaders.length)})}function s(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"th",[],[[1,"colspan",0]],null,null,null,null)),(n()(),u.Hb(-1,null,["Skill Affinities"]))],null,function(n,l){n(l,0,0,l.component.inheritHeaders.length)})}function a(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,null,null,null,null,null,null,null)),(n()(),u.Hb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit)})}function c(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),u.Hb(1,null,["",""]))],null,function(n,l){n(l,0,0,u.rb(1,"element-icon ",l.parent.context.$implicit,"")),n(l,1,0,l.parent.context.$implicit)})}function p(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,4,"th",[],[[4,"width","%"]],null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,a)),u.ob(2,16384,null,0,t.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,c)),u.ob(4,16384,null,0,t.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,!e.hasIcons),n(l,4,0,e.hasIcons)},function(n,l){n(l,0,0,100/l.component.inheritHeaders.length)})}function m(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"td",[],[[4,"color",null]],null,null,null,null)),(n()(),u.Hb(1,null,[" "," "]))],null,function(n,l){n(l,0,0,l.context.$implicit?null:"transparent"),n(l,1,0,l.context.$implicit?"yes":"no")})}function f(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,m)),u.ob(2,278528,null,0,t.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.inherits)},null)}function b(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,2,"td",[],[[8,"className",0]],null,null,null,null)),u.Db(1,1),(n()(),u.Hb(2,null,[" ","% "]))],null,function(n,l){var e=u.rb(1,"affinity",u.Ib(l,0,0,n(l,1,0,u.zb(l.parent.parent,0),100*l.context.$implicit)),"");n(l,0,0,e),n(l,2,0,100*l.context.$implicit)})}function d(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,b)),u.ob(2,278528,null,0,t.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.inherits)},null)}function h(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,2,"td",[],[[8,"className",0]],null,null,null,null)),(n()(),u.Hb(1,null,[" "," "])),u.Db(2,1)],null,function(n,l){n(l,0,0,u.rb(1,"affinity",l.context.$implicit,""));var e=u.Ib(l,1,0,n(l,2,0,u.zb(l.parent.parent,1),l.context.$implicit));n(l,1,0,e)})}function g(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,h)),u.ob(2,278528,null,0,t.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.inherits)},null)}function v(n){return u.Jb(2,[u.Bb(0,i.d,[]),u.Bb(0,i.a,[]),(n()(),u.pb(2,0,null,null,16,"table",[],null,null,null,null,null)),(n()(),u.pb(3,0,null,null,8,"thead",[],null,null,null,null,null)),(n()(),u.pb(4,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,r)),u.ob(6,16384,null,0,t.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,s)),u.ob(8,16384,null,0,t.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(9,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,p)),u.ob(11,278528,null,0,t.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.pb(12,0,null,null,6,"tbody",[],null,null,null,null,null)),(n()(),u.gb(16777216,null,null,1,null,f)),u.ob(14,16384,null,0,t.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,d)),u.ob(16,16384,null,0,t.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,null,1,null,g)),u.ob(18,16384,null,0,t.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,6,0,!e.hasLvls),n(l,8,0,e.hasLvls),n(l,11,0,e.inheritHeaders),n(l,14,0,!e.hasLvls&&!e.hasChance),n(l,16,0,e.hasChance),n(l,18,0,e.hasLvls)},null)}},lJG5:function(n,l,e){"use strict";e.d(l,"a",function(){return f});var u=e("CcnG"),t=e("7gfQ"),i=e("Ck8i"),o=e("ZYjt"),r=e("ZYCi"),s=e("IdNb"),a=e("5i+Q"),c=u.nb({encapsulation:2,styles:[],data:{}});function p(n){return u.Jb(2,[(n()(),u.pb(0,0,null,null,1,"app-fusion-chart",[],null,null,null,t.b,t.a)),u.ob(1,770048,null,0,i.a,[o.h,r.a],{normChart:[0,"normChart"],mitaTable:[1,"mitaTable"],isPersona:[2,"isPersona"]},null)],function(n,l){var e=l.component;n(l,1,0,e.normChart,e.mitaTable,!0)},null)}function m(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-fusion-chart-container",[],null,null,null,p,c)),u.ob(1,245760,null,0,s.a,[u.h,a.a],null,null)],function(n,l){n(l,1,0)},null)}var f=u.lb("app-fusion-chart-container",s.a,m,{},{},[])},pSCT:function(n,l,e){"use strict";e.d(l,"a",function(){return b});var u=e("vajj"),t=e("CcnG"),i=e("aq7X"),o=e("DUID"),r=e("Ip0R"),s=e("Lx9e"),a=e("ZYCi"),c=e("AnYp"),p=t.nb({encapsulation:2,styles:[u.a],data:{}});function m(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,5,"app-demon-compendium",[],null,null,null,i.b,i.a)),t.Eb(4608,null,o.a,o.a,[[3,o.a]]),t.ob(2,278528,null,0,r.i,[t.s,t.t,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.ob(3,245760,null,0,s.a,[a.a],{mainList:[0,"mainList"],otherLinks:[1,"otherLinks"]},null),t.Cb(4,{title:0,link:1}),t.Ab(5,1)],function(n,l){n(l,2,0,"p5");var e=n(l,5,0,n(l,4,0,"Shadow List","shadows"));n(l,3,0,"persona",e)},null)}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-p5-compendium",[],null,null,null,m,p)),t.ob(1,49152,null,0,c.a,[],null,null)],null,null)}var b=t.lb("app-p5-compendium",c.a,f,{},{},[])},vajj:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var u=[".p5 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:center;color:transparent}.p5 div.element-icon.phys{background-image:url(/megaten-fusion-tool/assets/images/p5/phys.png)}.p5 div.element-icon.gun{background-image:url(/megaten-fusion-tool/assets/images/p5/gun.png)}.p5 div.element-icon.fire{background-image:url(/megaten-fusion-tool/assets/images/p5/fire.png)}.p5 div.element-icon.ice{background-image:url(/megaten-fusion-tool/assets/images/p5/ice.png)}.p5 div.element-icon.elec{background-image:url(/megaten-fusion-tool/assets/images/p5/elec.png)}.p5 div.element-icon.wind{background-image:url(/megaten-fusion-tool/assets/images/p5/wind.png)}.p5 div.element-icon.psy{background-image:url(/megaten-fusion-tool/assets/images/p5/psy.png)}.p5 div.element-icon.nuke{background-image:url(/megaten-fusion-tool/assets/images/p5/nuke.png)}.p5 div.element-icon.bless{background-image:url(/megaten-fusion-tool/assets/images/p5/bless.png)}.p5 div.element-icon.curse{background-image:url(/megaten-fusion-tool/assets/images/p5/curse.png)}.p5 div.element-icon.ailment{background-image:url(/megaten-fusion-tool/assets/images/p5/ailment.png)}.p5 div.element-icon.healing,.p5 div.element-icon.recovery{background-image:url(/megaten-fusion-tool/assets/images/p5/healing.png)}.p5 div.element-icon.almighty{background-image:url(/megaten-fusion-tool/assets/images/p5/almighty.png)}.p5 div.element-icon.support{background-image:url(/megaten-fusion-tool/assets/images/p5/support.png)}.p5 div.element-icon.passive{background-image:url(/megaten-fusion-tool/assets/images/p5/passive.png)}.p5 div.element-icon.trait{background-image:url(/megaten-fusion-tool/assets/images/p5/trait.png)}.p5 th{color:#fff;background-color:#f41000}.p5 th.sortable:hover{background-color:#f46e00}.p5 th.nav{background-color:#5f0503}.p5 th.nav.active,.p5 th.nav:hover{background-color:#f41000}.p5 th.nav.active a,.p5 th.nav:hover a{color:#fff}"]},"w4O/":function(n,l,e){"use strict";e.d(l,"a",function(){return d});var u=e("CcnG"),t=e("FAMI"),i=e("DUID"),o=e("cEcl"),r=e("Ip0R"),s=e("ejUt"),a=e("ZYjt"),c=e("ZYCi"),p=e("5i+Q"),m=u.nb({encapsulation:2,styles:[],data:{}});function f(n){return u.Jb(2,[(n()(),u.pb(0,0,null,null,3,"app-smt-demon-list",[],null,null,null,t.b,t.a)),u.Eb(4608,null,i.a,i.a,[[3,i.a]]),u.ob(2,8503296,null,0,o.a,[],{rowData:[0,"rowData"],raceOrder:[1,"raceOrder"],inheritOrder:[2,"inheritOrder"],statHeaders:[3,"statHeaders"],resistHeaders:[4,"resistHeaders"],isEnemy:[5,"isEnemy"]},null),u.Bb(131072,r.b,[u.h])],function(n,l){var e=l.component;n(l,2,0,u.Ib(l,2,0,u.zb(l,3).transform(e.demons)),e.compConfig.raceOrder,e.inheritOrder,e.statHeaders,e.resistHeaders,e.showEnemies)},null)}function b(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-demon-list-container",[],null,null,null,f,m)),u.ob(1,245760,null,0,s.a,[a.h,c.a,u.h,p.a],null,null)],function(n,l){n(l,1,0)},null)}var d=u.lb("app-demon-list-container",s.a,b,{},{},[])}}]);