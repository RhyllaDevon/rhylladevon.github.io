(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[275],{652:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var n=a(1943),r=a(7294),l=a(2391),i=a(3751),o=a(6187),m=a(994),c=a(7408),s=a(2623),d=a(1123),g=a(3636),u=a(9626),h=a(7502),f=a.p+"static/retreat_4-7449c1b60bbc8ed08507b3aa7331ff20.jpg",b=a.p+"static/retreat_0-a15c8657a5ec4e35b8179c8d3820c0a1.jpg",p=a.p+"static/retreat_14-697262636242a0c74d7862242c51ff48.jpg",E=a.p+"static/retreat_5-4a97fa41368cb224a7cc53cb21fd29ee.jpg",y=a.p+"static/retreat_1-c9e986035286fbcb2a285fe7e05a2897.jpg",w=a.p+"static/retreat_11-bb6b1e20e7aae25faef77ed775c1fa1b.jpg",v=a.p+"static/retreat_6-c3296302623a9c4d41d5fbf46060d0fb.jpg",Z=a.p+"static/retreat_7-127198d48c3f0039cbad64b1dc682940.jpg",D=a.p+"static/retreat_8-e5e40b783f034757417941ebfd9bf780.jpg",A=a.p+"static/retreat_10-ad53516abc87dff0bec8216b2ad471a4.jpg",I=a(1304),k=a(3201),x=a(6474),M=a.n(x),j=a(5444),L=a(1723);function R(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var F=[{original:f,originalAlt:"The entrance.",originalWidth:600,originalHeight:800},{original:b,originalAlt:"View from the garden room.",originalWidth:600,originalHeight:800},{original:p,originalAlt:"Inside the garden room.",originalWidth:600,originalHeight:800},{original:E,originalAlt:"Outside seating area.",originalWidth:600,originalHeight:800},{original:y,originalAlt:"King sized bed in the bedroom.",originalWidth:600,originalHeight:800},{original:w,originalAlt:"Ensuite bathroom",originalWidth:800,originalHeight:600},{original:v,originalAlt:"Lounge area with TV & ornamental stove.",originalWidth:800,originalHeight:600},{original:Z,originalAlt:"Lounge area sofas",originalWidth:600,originalHeight:800},{original:D,originalAlt:"Large kitchen area.",originalWidth:800,originalHeight:600},{original:A,originalAlt:"Kitchen area sign.",originalWidth:600,originalHeight:800}],S=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loaded:!1,dates:[],maxDate:void 0},a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=new Date,a=t.toISOString(),n=new Date(t.getFullYear(),t.getMonth()+10,0),r=n.toISOString(),l=[];return M()("https://content.googleapis.com/calendar/v3/calendars/shn42o6phu2oh51i950mbofktc@group.calendar.google.com/events?timeMax="+r+"&timeMin="+a+"&key=AIzaSyDm-4GgwIB-mfhDcnC_J6wTjxJFvVmBWLU").then((function(e){return e.json()})).then((function(t){for(var a,r=R(t.items);!(a=r()).done;){var i=a.value,o=void 0,m=void 0,c=void 0;i.start.date?o=new Date(i.start.date):(c=new Date(i.start.dateTime),o=new Date(c.getFullYear(),c.getMonth(),c.getDate())),i.end.date?m=new Date(i.end.date):(c=new Date(i.end.dateTime),m=new Date(c.getFullYear(),c.getMonth(),c.getDate())),l.push({start:o,end:m})}e.setState({dates:l,maxDate:n,loaded:!0})}))},a.render=function(){var e=this,t=r.createElement("p",null,"Loading calendar...");return this.state.loaded&&(t=r.createElement(I.ZP,{style:{width:"100%"},nextLabel:r.createElement(k.Dli,null),prevLabel:r.createElement(k.bUI,null),next2Label:null,prev2Label:null,minDate:new Date,maxDate:this.state.maxDate,showNeighboringMonth:!1,tileClassName:function(t){var a=t.date;if("month"===t.view){var n=a.getDate(),r=a.getMonth(),l=a.getFullYear(),i=new Date;if(a<=i)return"red";for(var o,m=R(e.state.dates);!(o=m()).done;){var c=o.value,s=c.start,d=s.getDate(),g=s.getMonth(),u=s.getFullYear(),h=c.end,f=h.getDate(),b=h.getMonth(),p=h.getFullYear();if(n==d&&r==g&&l==u)return-1==e.state.dates.findIndex((function(e){if(a.getDate()==e.end.getDate()&&a.getMonth()==e.end.getMonth()&&a.getFullYear()==e.end.getFullYear())return!0}))?"start":"red";if(n==f&&r==b&&l==p)return-1==e.state.dates.findIndex((function(e){if(a.getDate()==e.start.getDate()&&a.getMonth()==e.start.getMonth()&&a.getFullYear()==e.start.getFullYear())return!0}))?"end":"red";if(a>s&&a<h)return"red"}}},formatShortWeekday:function(e,t){return t.toLocaleString(e,{weekday:"narrow"})}})),r.createElement(l.Z,null,r.createElement(i.Z,{title:"Retreat"}),r.createElement("div",{className:"jumbotron"},r.createElement(o.Z,null,r.createElement(m.Z,{style:{marginBottom:24}},r.createElement(c.Z,null,r.createElement(m.Z,null,r.createElement(c.Z,{md:!0,sm:8},r.createElement("h1",null,"Rhylla Retreat")),r.createElement(c.Z,{md:!0,sm:8,className:"badges"},r.createElement("h2",null,r.createElement(s.Z,{className:"info-badge"},"From £75 / night")," ",r.createElement(s.Z,{className:"info-badge"},"2 Guests")))))),r.createElement(m.Z,{style:{marginBottom:16}},r.createElement(c.Z,null,r.createElement(m.Z,null,r.createElement(c.Z,null,r.createElement("h3",null,"About Rhylla Retreat"),r.createElement("p",null,"Rhylla Retreat has recently been renovated and modernised to a high standard, whilst retaining many of the original features."),r.createElement("p",null,"Rhylla Retreat comprises of a front porch where you can hang your coats & remove your well trodden walking boots & wellies; a large newly installed farmhouse style kitchen & dining area; a lounge with ornamental stove, original wooden window shutters and twin leather sofas & T.V; a bedroom with original wooden beams, king-size bed with quality bedding and amply hanging/storage space; a newly fitted modern en-suite shower room."),r.createElement("p",null,"In addition Rhylla Retreat benefits from a bright garden room with 2 comfy easy chairs, ideal for simply reading or taking in the view. There is an outdoor garden space with table & chairs accessed through the garden room patio doors."))))),r.createElement(m.Z,{style:{marginBottom:48}},r.createElement(c.Z,null,r.createElement(L.Z,{lazyLoad:!0,showThumbnails:!1,items:F}))),r.createElement(m.Z,{style:{marginBottom:48}},r.createElement(c.Z,null,r.createElement(d.Z,{variant:"pills",defaultActiveKey:"amenities",style:{paddingLeft:"1rem",fontWeight:500}},r.createElement(g.Z,{eventKey:"amenities",title:"Amenities"},r.createElement(m.Z,null,r.createElement(c.Z,null,r.createElement(u.Z,{variant:"flush"},r.createElement(u.Z.Item,null,"Modern kitchen"),r.createElement(u.Z.Item,null,"Dishwasher"),r.createElement(u.Z.Item,null,"Modern shower room"),r.createElement(u.Z.Item,null,"TV"),r.createElement(u.Z.Item,null,"Garden room"))),r.createElement(c.Z,null,r.createElement(u.Z,{variant:"flush"},r.createElement(u.Z.Item,null,"WiFi"),r.createElement(u.Z.Item,null,"King sized bed"),r.createElement(u.Z.Item,null,"Private parking"),r.createElement(u.Z.Item,null,"Private garden"),r.createElement(u.Z.Item,null,"Bed linen and shower room towels provided"))))),r.createElement(g.Z,{eventKey:"location",title:"Location"},r.createElement(m.Z,null,r.createElement(c.Z,{md:4},r.createElement("address",{style:{padding:"8px 16px 16px 16px"}},"Rhylla",r.createElement("br",null),"Townlake",r.createElement("br",null),"Tavistock",r.createElement("br",null),"Devon",r.createElement("br",null),"PL19 8PQ")),r.createElement(c.Z,{md:8},r.createElement("iframe",{width:"100%",height:"300",frameBorder:"0",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d896.2876886686203!2d-4.2545015584180135!3d50.551200232673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c8b3e96e1f555%3A0x774c5326e85069fb!2sRhylla%20Cottage%20%26%20Rhylla%20Retreat!5e0!3m2!1sen!2sus!4v1648585720357!5m2!1sen!2sus",allowFullScreen:!0}))))))),r.createElement(h.Z,null,r.createElement(h.Z.Header,{as:"h5"},"Availability"),r.createElement(h.Z.Body,null,r.createElement(m.Z,null,r.createElement(c.Z,{md:8,style:{textAlign:"center"}},t,r.createElement("i",null,"*3 night minimum stay")),r.createElement(c.Z,{md:4},r.createElement("h5",{style:{marginTop:"16px",marginBottom:"16px"}},"Interested in booking or have an enquiry?"),r.createElement("p",null,"Please contact us for up to date prices and late availability special offers."),r.createElement(j.Link,{to:"/contact-us",className:"btn btn-primary btn-lg"},"Contact Us"),r.createElement("br",null),r.createElement("br",null),r.createElement(j.Link,{to:"https://www.airbnb.co.uk/rooms/591845455211152976"},"Or view our Airbnb listing."))))))))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-accommodation-rhylla-retreat-js-5f5fb8d11143870fb081.js.map