(this.webpackJsonpBelei=this.webpackJsonpBelei||[]).push([[0],{106:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34),D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(25),D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(121),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(107),react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(127),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(197),_material_ui_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(196),_material_ui_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(198),_material_ui_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(199),_material_ui_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(36),_material_ui_core__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(88),_material_ui_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(200),_material_ui_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(201),_material_ui_core__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(204),_material_ui_core__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(126),_material_ui_core__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(203),_material_ui_core__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(90),_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(59),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(19),_API__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(39),_utils_styles__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(40),_line_chart_section__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(71),_histogram_chart_section__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(72),_box_chart_section__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(73),_terrestrial_heatmap_chart__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(111),_cart_panel__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__(120),INIT_MENUS=[{id:"as_needed_handoff",name:"Power below threshold handoff"},{id:"maximum_powee_handoff",name:"Maximum power immediate handoff"}],TabPanel=function(e){var _=e.children,t=e.value,a=e.index,r=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.a)(e,["children","value","index"]);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},r),t===a&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{p:3},_))};function a11yProps(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function ChartPanel(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),_useState2=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),traces=_useState2[0],setTraces=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1),_useState4=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState3,2),isOpen=_useState4[0],setIsOpen=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)("none"),_useState6=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState5,2),selected=_useState6[0],setSelected=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),_useState8=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState7,2),tab=_useState8[0],setTab=_useState8[1],theme=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__.a)(),classes=Object(_utils_styles__WEBPACK_IMPORTED_MODULE_23__.a)();return Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){"none"!==selected&&Object(_API__WEBPACK_IMPORTED_MODULE_22__.b)(selected).then((function(res){var data=eval("["+res.data+"]")[0];Object.keys(data).map((function(e){var _=data[e].type,t=[],a=[],r=[];"line"===_?(data[e].data.map((function(e,_){t.push(_+1),a.push(e[3]),r.push(e[4])})),setTraces((function(n){return Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},n),{},Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)({},e,{xTraces:t,yTraces:a,avgTraces:r,type:_,title:data[e].title}))}))):"histogram"===_&&setTraces((function(t){return Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},t),{},Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)({},e,{xTraces:data[e].data,type:_,title:data[e].title}))}))}))})).catch((function(){setTraces({})}))}),[selected]),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{container:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{component:"main",maxWidth:"lg"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,null),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.a,{className:classes.chartCard},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.a,{title:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.a,{component:"h1",variant:"h5",className:"m-3"},"CART Data Statistics Dashboard (Prototype)"),action:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.a,{variant:"contained",color:"primary",onClick:function(){return setIsOpen(!0)}},"Open Chart")}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.a,{className:"ml-3 mr-3"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.a,{position:"static",color:"default"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.a,{value:tab,onChange:function(e,_){return setTab(_)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.a,Object.assign({label:"Data Statistics Dashboard"},a11yProps(0))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.a,Object.assign({label:"Heat Map"},a11yProps(1))))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default.a,{axis:"rtl"===theme.direction?"x-reverse":"x",index:tab,onChangeIndex:function(e){return setTab(e)}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPanel,{value:tab,index:0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:4},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.a,{name:"",value:selected,onChange:function(e){return setSelected(e.target.value)},className:classes.searchSelect,style:"none"===selected?{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_20__.a[500]}:{},fullWidth:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__.a,{value:"none",style:{opacity:.87},disabled:!0},"Select Data Set\u2026"),INIT_MENUS.map((function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__.a,{value:e.id,key:e.id},e.name)})))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:8}),Object.keys(traces).map((function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:6,key:e},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{container:!0,spacing:3},"line"===traces[e].type&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:12},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_line_chart_section__WEBPACK_IMPORTED_MODULE_24__.a,traces[e])),"histogram"===traces[e].type&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:12},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_histogram_chart_section__WEBPACK_IMPORTED_MODULE_25__.a,traces[e])),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:12},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_box_chart_section__WEBPACK_IMPORTED_MODULE_26__.a,traces[e])))))})))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPanel,{value:tab,index:1},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{container:!0,justify:"center",alignItems:"center"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{item:!0,md:12},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_terrestrial_heatmap_chart__WEBPACK_IMPORTED_MODULE_27__.a,null))))))))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_cart_panel__WEBPACK_IMPORTED_MODULE_28__.a,{isOpen:isOpen,onClose:function(){return setIsOpen(!1)}}))}__webpack_exports__.a=ChartPanel},111:function(e,_,t){"use strict";var a=t(10),r=t(0),n=t.n(r),c=t(21),i=t.n(c),l=t(11),s=t(127),o=t(88),u=t(39),E={heatmap:{},intrpl:{}};_.a=function(){var e=Object(r.useState)("heatmap"),_=Object(a.a)(e,2),t=_[0],c=_[1],m=Object(r.useState)(E),d=Object(a.a)(m,2),p=d[0],O=d[1];return Object(r.useEffect)((function(){Object(u.c)().then((function(e){O(e.data)})).catch((function(){return O(E)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{container:!0,justify:"center",alignItems:"center"},"heatmap"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{item:!0,md:6},n.a.createElement(i.a,{data:[{x:p.heatmap.x,y:p.heatmap.y,z:p.heatmap.z,type:"heatmap"}],layout:{width:500,height:500,title:"",xaxis:{title:"Longitude (deg)",zeroline:!1,range:[-180,180],tickmode:"linear",tick0:-180,dtick:40},yaxis:{title:"Latitude (deg)",zeroline:!1,range:[-90,90],tickmode:"linear",tick0:-90,dtick:30}}})),n.a.createElement(l.a,{item:!0,md:6},n.a.createElement(i.a,{data:[{lat:p.heatmap.x,lon:p.heatmap.y,z:p.heatmap.z,type:"densitymapbox"}],layout:{width:500,height:500,title:"",mapbox:{center:{lon:60,lat:30},style:"outdoors",zoom:2}},config:{mapboxAccessToken:"pk.eyJ1IjoicmxhZm9udGFpbmUiLCJhIjoiY2tpMG82ZjNiMHZ3NjJxcDV1cjAzaTJ4eCJ9.VJSnQNJxiJK-jixU6KaFYQ"}}))):n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{item:!0,md:6},n.a.createElement(i.a,{data:[{x:p.intrpl.x,y:p.intrpl.y,z:p.intrpl.z,type:"heatmap"}],layout:{width:500,height:500,title:"",xaxis:{title:"Longitude (deg)",zeroline:!1,range:[-180,180],tickmode:"linear",tick0:-180,dtick:40},yaxis:{title:"Latitude (deg)",zeroline:!1,range:[-90,90],tickmode:"linear",tick0:-90,dtick:30}}})),n.a.createElement(l.a,{item:!0,md:6},n.a.createElement(i.a,{data:[{lat:p.intrpl.x,lon:p.intrpl.x,z:p.intrpl.z,type:"densitymapbox",hoverinfo:"skip"}],layout:{width:500,height:500,title:"",mapbox:{center:{lon:60,lat:30},style:"outdoors",zoom:2}},config:{mapboxAccessToken:"pk.eyJ1IjoicmxhZm9udGFpbmUiLCJhIjoiY2tpMG82ZjNiMHZ3NjJxcDV1cjAzaTJ4eCJ9.VJSnQNJxiJK-jixU6KaFYQ"}})))),n.a.createElement(l.a,{item:!0,md:6},n.a.createElement(s.a,{borderColor:"primary.main",border:2,borderRadius:5,padding:2,style:{zIndex:1e3}},n.a.createElement(o.a,{name:"heatmap",variant:"contained",size:"small",color:"primary",onClick:function(e){return c(e.currentTarget.name)},style:{width:"48%",marginRight:"4%"}},"Non-Interpolated"),n.a.createElement(o.a,{name:"intrpl",variant:"contained",size:"small",color:"primary",onClick:function(e){return c(e.currentTarget.name)},style:{width:"48%"}},"Interpolated"))))}},112:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54),D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(34),D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25),D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_API__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(39),_add_on_minusAddon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(113),_add_on_plusAddon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(84),_add_on_contentAddon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(116),_chart_panel_line_chart_section__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(71),_chart_panel_histogram_chart_section__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(72),_chart_panel_box_chart_section__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(73),MENU_ITEMS=[{id:1,dataset:"coverage",name:"Running Average"},{id:2,dataset:"coverage_histogram",name:"Distribution"},{id:3,dataset:"coverage",name:"Statistics Chart"}];function ChartsLibsSection(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),_useState2=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState,2),traces=_useState2[0],setTraces=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState4=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState3,2),selected=_useState4[0],setSelected=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),_useState6=Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState5,2),anchorEl=_useState6[0],setAnchorEl=_useState6[1];Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){selected.length>0&&Object(_API__WEBPACK_IMPORTED_MODULE_6__.b)("as_needed_handoff").then((function(res){var data=eval("["+res.data+"]")[0];Object.keys(data).map((function(e){var _=data[e].type,t=[],a=[],r=[];"line"===_?(data[e].data.map((function(e,_){t.push(_+1),a.push(e[3]),r.push(e[4])})),setTraces((function(n){return Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},n),{},Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)({},e,{xTraces:t,yTraces:a,avgTraces:r,type:_,title:data[e].title}))}))):"histogram"===_&&setTraces((function(t){return Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},t),{},Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)({},e,{xTraces:data[e].data,type:_,title:data[e].title}))}))}))})).catch((function(){setTraces({})}))}),[selected]);var handleSelected=function(e,_){selected.includes(e)||"add"!==_?"remove"===_&&setSelected(selected.filter((function(_){return _!==e}))):setSelected((function(_){return[].concat(Object(D_Teltrium_Data_Statistics_Source_data_statistics_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_),[e])})),setAnchorEl(null)};return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,0===selected.length&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_add_on_plusAddon__WEBPACK_IMPORTED_MODULE_8__.a,{selected:selected,anchorEl:anchorEl,onAnchorEl:function(e){return setAnchorEl(e)},onSelected:function(e){return handleSelected(e,"add")}}),MENU_ITEMS.map((function(e){return Object.keys(traces).includes(e.dataset)&&selected.includes(e.id)&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,{key:e.id},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_add_on_minusAddon__WEBPACK_IMPORTED_MODULE_7__.a,{id:e.id,selected:selected,anchorEl:anchorEl,onAnchorEl:function(e){return setAnchorEl(e)},onSelected:function(e){return handleSelected(e,"remove")}}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{item:!0,md:9},1===e.id&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_chart_panel_line_chart_section__WEBPACK_IMPORTED_MODULE_10__.a,traces[e.dataset]),2===e.id&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_chart_panel_histogram_chart_section__WEBPACK_IMPORTED_MODULE_11__.a,traces[e.dataset]),3===e.id&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_chart_panel_box_chart_section__WEBPACK_IMPORTED_MODULE_12__.a,traces[e.dataset])),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_add_on_contentAddon__WEBPACK_IMPORTED_MODULE_9__.a,null),selected.sort()[selected.length-1]===e.id&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_add_on_plusAddon__WEBPACK_IMPORTED_MODULE_8__.a,{selected:selected,anchorEl:anchorEl,onAnchorEl:function(e){return setAnchorEl(e)},onSelected:function(e){return handleSelected(e,"add")}}))})))}__webpack_exports__.a=ChartsLibsSection},113:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(11),c=t(123),i=t(124),l=t(114),s=t.n(l);_.a=function(e){return r.a.createElement(n.a,{item:!0,md:12},r.a.createElement(n.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(n.a,{item:!0,style:{width:"4%"}},r.a.createElement(c.a,{onClick:function(){return e.onSelected(e.id)}},r.a.createElement(s.a,null))),r.a.createElement(n.a,{item:!0,md:11,style:{width:"96%"}},r.a.createElement(i.a,null))))}},116:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(11),c=t(36);_.a=function(e){return r.a.createElement(n.a,{item:!0,md:3},r.a.createElement(n.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(n.a,{item:!0,md:12},r.a.createElement(c.a,{component:"strong",variant:"body1"},"Options")),r.a.createElement(n.a,{item:!0,md:12},r.a.createElement(c.a,{component:"strong",variant:"body1"},"Metrics"))))}},120:function(e,_,t){"use strict";var a=t(10),r=t(0),n=t.n(r),c=t(235),i=t(241),l=t(196),s=t(236),o=t(36),u=t(123),E=t(238),m=t(11),d=t(237),p=t(39),O=t(40),D=t(34),b=t(25),M=t(83),P=t.n(M),h=t(127),f=t(88),T=t(124),A=t(234),C=t(240),I=t(242),y=t(118),L=t.n(y),U=t(117),R=t.n(U),W=t(21),B=t.n(W);var K=function(e){var _=Object(r.useState)(e.checked),t=Object(a.a)(_,2),c=t[0],i=t[1],l=Object(r.useState)([]),s=Object(a.a)(l,2),u=s[0],E=s[1],d=e.plot_rows,p=e.surface_rows;Object(r.useEffect)((function(){i(e.checked)}),[e.checked]);var O=function(e,_){return e.map((function(e){return e[_]}))};return Object(r.useEffect)((function(){var _=[],t=parseInt(e.inc),a=d.filter((function(e){return e.inclination===t})),r=p.filter((function(e){return e.inclination===t}));!0===c.show_surface&&!0===c.show_scatter?_=[{x:O(a,"altitude"),y:O(a,"value"),name:"Model data",mode:"markers",type:"scatter",color:"rgb(23, 190, 207)"},{x:O(r,"altitude"),y:O(r,"value"),name:"Model curve",mode:"lines",line:{color:"rgb(252, 154, 7)"}},{x:[e.alt],y:[e.value],name:"User",mode:"markers",type:"scatter",marker:{color:"red",size:10}}]:!1===c.show_surface&&!0===c.show_scatter?_=[{x:O(a,"altitude"),y:O(a,"value"),name:"Model data",mode:"markers",type:"scatter",color:"rgb(23, 190, 207)"},{x:[],y:[],mode:"markers",type:"scatter"},{x:[e.alt],y:[e.value],name:"User",mode:"markers",type:"scatter",marker:{color:"red",size:10}}]:!0===c.show_surface&&!1===c.show_scatter?_=[{x:O(r,"altitude"),y:O(r,"value"),name:"Model curve",mode:"lines",line:{color:"rgb(252, 154, 7)"}},{x:[],y:[],mode:"markers",type:"scatter"},{x:[e.alt],y:[e.value],name:"User",mode:"markers",type:"scatter",marker:{color:"red",size:10}}]:!1===c.show_surface&&!1===c.show_scatter&&(_=[{x:[],y:[],mode:"lines"},{x:[],y:[],mode:"markers",type:"scatter"},{x:[e.alt],y:[e.value],name:"User",mode:"markers",type:"scatter",marker:{color:"red",size:10}}]),E(_)}),[c,d,p,e.inc]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{item:!0,md:9},n.a.createElement(B.a,{data:u,layout:{autosize:!0,showlegend:!1,hovermode:"closest",width:550,height:400,margin:{l:60,r:15,b:35,t:15},xaxis:{title:"Altitude (km), Inclination=".concat(e.inc," deg"),type:"linear",zeroline:!1},yaxis:{title:e.yAxisLabel,type:"linear",zeroline:!1}},onClick:function(e){e.points}})),n.a.createElement(m.a,{item:!0,md:3},n.a.createElement(m.a,{container:!0,alignItems:"center",justify:"center"},n.a.createElement(m.a,{item:!0,md:12},n.a.createElement(o.a,{component:"strong",variant:"body1"},"Options")),n.a.createElement(m.a,{item:!0,md:12},n.a.createElement(o.a,{component:"strong",variant:"body1"},"Metrics")))))},g=t(54);var w=function(e){var _=Object(r.useState)(e.checked),t=Object(a.a)(_,2),c=t[0],i=t[1],l=Object(r.useState)(!1),s=Object(a.a)(l,2),u=s[0],E=s[1],d=Object(r.useState)([]),p=Object(a.a)(d,2),O=p[0],D=p[1],b=e.plot_rows,M=e.surface_rows;Object(r.useEffect)((function(){E(!u)}),[e.reset]),Object(r.useEffect)((function(){i(e.checked)}),[e.checked]);var P=function(e,_){return e.map((function(e){return e[_]}))};return Object(r.useEffect)((function(){var _=[];!0===c.show_surface&&!0===c.show_scatter?_=[{x:P(b,"altitude"),y:P(b,"inclination"),z:P(b,"value"),name:"Model data",mode:"markers",type:"scatter3d",opacity:1,marker:{color:"rgb(23, 190, 207)",size:2}},{x:P(M,"altitude"),y:P(M,"inclination"),z:P(M,"value"),name:"Model surface",opacity:.3,type:"mesh3d",color:"rgb(252, 154, 7)"},{x:[e.alt],y:[e.inc],z:[e.value],name:"User",mode:"markers",type:"scatter3d",opacity:1,marker:{color:"red",size:5}}]:!1===c.show_surface&&!0===c.show_scatter?_=[{x:P(b,"altitude"),y:P(b,"inclination"),z:P(b,"value"),name:"Model data",mode:"markers",type:"scatter3d",opacity:1,marker:{color:"rgb(23, 190, 207)",size:2}},{x:[e.alt],y:[e.inc],z:[e.value],name:"User",mode:"markers",type:"scatter3d",opacity:1,marker:{color:"red",size:5}}]:!0===c.show_surface&&!1===c.show_scatter?_=[{x:P(M,"altitude"),y:P(M,"inclination"),z:P(M,"value"),name:"Model surface",opacity:.3,type:"mesh3d",color:"rgb(252, 154, 7)"},{x:[e.alt],y:[e.inc],z:[e.value],name:"User",mode:"markers",type:"scatter3d",opacity:1,marker:{color:"red",size:5}}]:!1===c.show_surface&&!1===c.show_scatter&&(_=[{x:[],y:[],z:[],type:"mesh3d"},{x:[],y:[],z:[],mode:"markers",type:"scatter3d"},{x:[parseFloat(e.alt)],y:[parseFloat(e.inc)],z:[parseFloat(e.value)],name:"User",mode:"markers",type:"scatter3d",opacity:1,marker:{color:"red",size:5}}]),D(_)}),[c,b,M,u]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{item:!0,md:9},n.a.createElement(B.a,{data:O,layout:{autosize:!0,width:.4*window.innerWidth,margin:{l:0,r:0,b:0,t:0},scene:{aspectratio:{x:.6,y:.6,z:.6},camera:{center:{x:0,y:0,z:0},eye:{x:.9,y:.9,z:.9},up:{x:0,y:0,z:1}},xaxis:{title:"Altitude (km)",type:"linear",range:[Math.max.apply(Math,Object(g.a)(P(M,"altitude"))),0],zeroline:!1},yaxis:{title:"Inclination (deg)",type:"linear",range:[90,0],zeroline:!1},zaxis:{title:e.zAxisLabel,type:"linear",range:[Math.min.apply(Math,Object(g.a)(P(M,"value"))),Math.max.apply(Math,Object(g.a)(P(M,"value")))],zeroline:!1}},showlegend:!1}})),n.a.createElement(m.a,{item:!0,md:3},n.a.createElement(m.a,{container:!0,alignItems:"center",justify:"center"},n.a.createElement(m.a,{item:!0,md:12},n.a.createElement(o.a,{component:"strong",variant:"body1"},"Options")),n.a.createElement(m.a,{item:!0,md:12},n.a.createElement(o.a,{component:"strong",variant:"body1"},"Metrics")))))},S=t(112),v={show_surface:!0,show_scatter:!0};var x=function(e){var _=Object(r.useState)("2d_view"),t=Object(a.a)(_,2),c=t[0],i=t[1],l=Object(r.useState)(v),s=Object(a.a)(l,2),E=s[0],d=s[1],p=Object(r.useState)(!1),M=Object(a.a)(p,2),y=M[0],U=M[1],W=Object(r.useState)(!1),B=Object(a.a)(W,2),g=B[0],x=B[1],j=e.data.plot_value,k=[],z=e.data.label,q=Object(O.a)(),N=function(e){var _=e.currentTarget.name;i(_)},J=function(e){var _=e.currentTarget,t=_.name,a=_.checked;d((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(D.a)({},t,a))}))};return n.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center",spacing:2,style:{height:"500px"}},n.a.createElement(m.a,{item:!0,md:8}),n.a.createElement(m.a,{item:!0,md:4},n.a.createElement(o.a,{component:"p",variant:"body1",style:{textAlign:"end"}},n.a.createElement(u.a,{size:"small",onClick:function(){return U(!y)},className:"mt-2 mb-2"},"Graph Options",y?n.a.createElement(R.a,null):n.a.createElement(L.a,null)))),y&&n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{item:!0,md:12},n.a.createElement(h.a,{borderColor:"primary.main",border:2,borderRadius:5,padding:2,style:{zIndex:1e3}},n.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center"},n.a.createElement(m.a,{item:!0,md:3},n.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center",spacing:2},n.a.createElement(m.a,{item:!0,md:12},n.a.createElement(f.a,{id:e.type,name:"2d_view",variant:"outlined",size:"small",onClick:N,style:{width:"48%",marginRight:"4%"},className:"mb-2"},"2D")),n.a.createElement(m.a,{item:!0,md:12},n.a.createElement(f.a,{name:"3d_view",variant:"outlined",size:"small",onClick:N,style:{width:"48%"}},"3D")))),n.a.createElement(T.a,{orientation:"vertical",flexItem:!0}),n.a.createElement(m.a,{item:!0,md:6,style:{marginLeft:"2vw"}},n.a.createElement(A.a,{control:n.a.createElement(C.a,{name:"show_surface",checked:E.show_surface,size:"small",onChange:J,color:"primary"}),label:"Show Regression Model Surface"}),n.a.createElement(A.a,{control:n.a.createElement(C.a,{name:"show_scatter",checked:E.show_scatter,size:"small",onChange:J,color:"primary"}),label:"Show Underlying Data"})),n.a.createElement(T.a,{orientation:"vertical",flexItem:!0}),n.a.createElement(m.a,{item:!0,md:2,style:{marginLeft:"2vw"}},n.a.createElement(I.a,{title:n.a.createElement(o.a,{gutterBottom:!0,component:"p",variant:"body1",dangerouslySetInnerHTML:{__html:"Reset 3D plot"}}),placement:"top-start",classes:{tooltip:q.tooltip}},n.a.createElement("span",null,n.a.createElement(f.a,{id:e.type,name:"Reset",variant:"outlined",size:"small",disabled:"2d_view"===c,onClick:function(){x(!g)},fullWidth:!0},"Reset")))))))),n.a.createElement(m.a,{item:!0,md:12,style:{zIndex:1e3}},n.a.createElement(P.a.Provider,null,n.a.createElement(P.a.Node,{formula:e.text}))),"3d_view"===c?n.a.createElement(w,{data:e.data,equation:e.equation,maxAltitude:e.maxAltitude,alt:e.alt,inc:e.inc,value:e.value,reset:g,isLegend:!1,isSub:!0,plot_rows:j,surface_rows:k,zAxisLabel:z,checked:E}):n.a.createElement(K,{data:e.data,equation:e.equation,maxAltitude:e.maxAltitude,alt:e.alt,inc:e.inc,value:e.value,isLegend:!1,isSub:!0,plot_rows:j,surface_rows:k,yAxisLabel:z,checked:E}),n.a.createElement(S.a,null))},j=300,k=30,z=100,q=n.a.forwardRef((function(e,_){return n.a.createElement(c.a,Object.assign({direction:"left",ref:_},e))}));_.a=function(e){var _=Object(r.useState)({}),t=Object(a.a)(_,2),c=t[0],D=t[1],b=Object(r.useState)(!0),M=Object(a.a)(b,2),P=M[0],h=M[1],f=Object(r.useState)({}),T=Object(a.a)(f,2),A=(T[0],T[1]),C=Object(r.useState)(0),I=Object(a.a)(C,2),y=I[0],L=I[1],U=Object(r.useState)({}),R=Object(a.a)(U,2),W=(R[0],R[1]),B=Object(r.useState)(""),K=Object(a.a)(B,2),g=K[0],w=K[1],S="system1/coverage".split("/")[1],v=Object(O.a)();return Object(r.useEffect)((function(){w(""),Object(p.a)({type:"orbital"}).then((function(e){A(e.data.terrestrial),D(e.data.data),L(e.data.maxAltitude),W(e.data.coefficients),w(e.data.text)})).then((function(){h(!1)}))}),[]),n.a.createElement(i.a,{open:e.isOpen,TransitionComponent:q,onClose:function(){return e.onClose()},classes:{paper:v.dialogDeep}},n.a.createElement(l.a,null),n.a.createElement(s.a,null,n.a.createElement(o.a,{component:"strong",variant:"h6"},"Cart Integration Panel"),n.a.createElement(u.a,{"aria-label":"Close",className:v.dialogCloseBtn,onClick:function(){return e.onClose()}},n.a.createElement(d.a,null))),n.a.createElement(E.a,{dividers:!0},n.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center"},n.a.createElement(m.a,{item:!0,md:12},!P&&n.a.createElement(x,{equation:function(e,_,t){return e},maxAltitude:y,alt:j,inc:k,value:z,data:c,selectedItem:S,text:g})))))}},139:function(e,_,t){e.exports=t(192)},144:function(e,_,t){},192:function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(12),c=t.n(n),i=(t(144),t(75)),l=t(14),s=t(106),o=t(197),u=t(196),E=t(198),m=t(199),d=t(36),p=t(200),O=t(40);var D=function(){var e=Object(O.a)();return r.a.createElement(o.a,{component:"main",maxWidth:"md"},r.a.createElement(u.a,null),r.a.createElement(E.a,{className:e.authcard},r.a.createElement(m.a,{title:r.a.createElement(d.a,{component:"h1",variant:"h5"},"404 | Page not found :(")}),r.a.createElement(p.a,null,r.a.createElement("p",null,"Maybe the page you are looking for has been removed, or you typed in the wrong URL")),r.a.createElement(i.b,{to:"/",className:e.link},"Back To Home")))},b=function(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:s.a}),r.a.createElement(l.a,{path:"*",component:D})))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))},39:function(e,_,t){"use strict";t.d(_,"b",(function(){return l})),t.d(_,"c",(function(){return s})),t.d(_,"a",(function(){return o}));var a=t(45),r=t.n(a),n=t(76),c=t(77),i=t.n(c),l=function(){var e=Object(n.a)(r.a.mark((function e(_){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={selected:_},e.prev=1,e.next=4,i.a.get("/get-items",{params:t});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_){return e.apply(this,arguments)}}(),s=function(){var e=Object(n.a)(r.a.mark((function e(){var _;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/get-plot");case 3:return _=e.sent,e.abrupt("return",_);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(n.a)(r.a.mark((function e(_){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/get-cart",_);case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(_){return e.apply(this,arguments)}}()},40:function(e,_,t){"use strict";var a=t(194),r=Object(a.a)((function(e){return{authcard:{marginTop:"10vh",minWidth:"30vw",padding:e.spacing(3)},link:{paddingRight:e.spacing(2),color:"#3385ff",textDecoration:"none"},chartCard:{padding:e.spacing(3)},searchSelect:{textAlignLast:"center"},tooltip:{maxWidth:"500px"},dialogDeep:{minWidth:"1000px !important",height:"90vh !important",maxWidth:"1000px !important"},dialogCloseBtn:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500],zIndex:100}}}));_.a=r},49:function(e,_,t){"use strict";t.d(_,"a",(function(){return n}));var a=t(10),r=t(0);function n(){var e=Object(r.useState)({width:void 0,height:void 0}),_=Object(a.a)(e,2),t=_[0],n=_[1];return Object(r.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},71:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(21),c=t.n(n),i=t(49);_.a=function(e){var _=Object(i.a)();return r.a.createElement(c.a,{data:[{x:e.xTraces,y:e.yTraces,name:"Gap Event Duration",type:"scatter",mode:"lines+markers",marker:{color:"red"}},{x:e.xTraces,y:e.avgTraces,name:"Running Average",type:"scatter",marker:{color:"blue"}}],layout:{title:e.title.toUpperCase(),width:.35*_.width,showlegend:!0,legend:{orientation:"h",xanchor:"center",font:{family:"sans-serif",size:12,color:"#000"}},margin:{l:60,b:0,r:30,t:30,pad:5},xaxis:{title:"Gap Event (Sequence)",titlefont:{size:12,color:"#212529"},showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},yaxis:{title:"Gap Duration (seconds)",titlefont:{size:12,color:"#212529"},showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1}},config:{displayModeBar:!1}})}},72:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(21),c=t.n(n),i=t(49);_.a=function(e){var _=Object(i.a)();return r.a.createElement(c.a,{data:[{x:e.xTraces,name:"Duration",type:"histogram"}],layout:{title:e.title.toUpperCase().split("_").join(" "),width:.35*_.width,showlegend:!0,legend:{orientation:"h",xanchor:"center",font:{family:"sans-serif",size:12,color:"#000"}},margin:{l:60,b:0,r:30,t:30,pad:5},xaxis:{title:"Duration",titlefont:{size:12,color:"#212529"},showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},yaxis:{title:"Occurances",titlefont:{size:12,color:"#212529"},showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1}},config:{displayModeBar:!1}})}},73:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(21),c=t.n(n),i=t(49);_.a=function(e){var _=Object(i.a)();return r.a.createElement(c.a,{data:[{y:e.xTraces,name:"",type:"box"}],layout:{title:"".concat(e.title.toUpperCase().split(" ")[0]," STATISTICS"),width:.35*_.width,margin:{l:60,b:0,r:30,t:30,pad:5},yaxis:{title:"Duration",titlefont:{size:12,color:"#212529"},showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1}},config:{displayModeBar:!1}})}},84:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(11),c=t(123),i=t(87),l=t(90),s=t(124),o=t(115),u=t.n(o),E=[{id:1,dataset:"coverage",name:"Running Average"},{id:2,dataset:"coverage_histogram",name:"Distribution"},{id:3,dataset:"coverage",name:"Statistics Chart"}];_.a=function(e){return r.a.createElement(n.a,{item:!0,md:12},r.a.createElement(n.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(n.a,{item:!0,style:{width:"4%"}},r.a.createElement(c.a,{onClick:function(_){return e.onAnchorEl(_.currentTarget)}},r.a.createElement(u.a,null)),r.a.createElement(i.a,{anchorEl:e.anchorEl,keepMounted:!0,open:Boolean(e.anchorEl),onClose:function(){return e.onAnchorEl(null)}},E.map((function(_){return r.a.createElement(l.a,{id:_.id,key:_.id,onClick:function(){return e.onSelected(_.id)}},_.name)})))),r.a.createElement(n.a,{item:!0,md:11,style:{width:"96%"}},r.a.createElement(s.a,null))))}}},[[139,1,2]]]);
//# sourceMappingURL=main.36e8eb5b.chunk.js.map