(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1040:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(151).configure)([__webpack_require__(1041)],module,!1)}).call(this,__webpack_require__(96)(module))},1041:function(module,exports,__webpack_require__){var map={"./lesson4/stories/Cell.stories.tsx":1042,"./lesson4/stories/Field.stories.tsx":1059,"./lesson4/stories/Row.stories.tsx":1054};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1041},1042:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CellComponent",(function(){return CellComponent}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(88),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),_Cell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(153);__webpack_exports__.default={parameters:{storySource:{source:'\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = "import React from \'react\';\\nimport { Story, Meta } from \'@storybook/react/types-6-0\';\\nimport { withKnobs, text } from \'@storybook/addon-knobs\';\\nimport { action } from \'@storybook/addon-actions\';\\nimport { Cell, CellProps } from \'./Cell\';\\n\\nexport default {\\n    title: \'Components\',\\n    component: Cell,\\n    decorators: [withKnobs],\\n} as Meta;\\n\\n\\nconst Template: Story<CellProps> = () => <Cell showNumber={action(\'showNumber\')} cell={text(\'Значение\', \'1\')} />;\\n\\nexport const CellComponent = Template.bind({});\\n\\n";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {"CellComponent":{"startLoc":{"col":35,"line":14},"endLoc":{"col":112,"line":14},"startBody":{"col":35,"line":14},"endBody":{"col":112,"line":14}}};\nimport React from \'react\';\nimport { Story, Meta } from \'@storybook/react/types-6-0\';\nimport { withKnobs, text } from \'@storybook/addon-knobs\';\nimport { action } from \'@storybook/addon-actions\';\nimport { Cell, CellProps } from \'./Cell\';\n\nexport default {parameters: {"storySource":{"source":"import React from \'react\';\\nimport { Story, Meta } from \'@storybook/react/types-6-0\';\\nimport { withKnobs, text } from \'@storybook/addon-knobs\';\\nimport { action } from \'@storybook/addon-actions\';\\nimport { Cell, CellProps } from \'./Cell\';\\n\\nexport default {\\n    title: \'Components\',\\n    component: Cell,\\n    decorators: [withKnobs],\\n} as Meta;\\n\\n\\nconst Template: Story<CellProps> = () => <Cell showNumber={action(\'showNumber\')} cell={text(\'Значение\', \'1\')} />;\\n\\nexport const CellComponent = Template.bind({});\\n\\n","locationsMap":{"cell-component":{"startLoc":{"col":35,"line":14},"endLoc":{"col":112,"line":14},"startBody":{"col":35,"line":14},"endBody":{"col":112,"line":14}}}},},\n    title: \'Components\',\n    component: Cell,\n    decorators: [withKnobs],\n} as Meta;\n\n\nconst Template: Story<CellProps> = () => <Cell showNumber={action(\'showNumber\')} cell={text(\'Значение\', \'1\')} />;\n\nexport const CellComponent = Template.bind({});\n\n\n',locationsMap:{"cell-component":{startLoc:{col:35,line:21},endLoc:{col:112,line:21},startBody:{col:35,line:21},endBody:{col:112,line:21}}}},storySource:{source:"import React from 'react';\nimport { Story, Meta } from '@storybook/react/types-6-0';\nimport { withKnobs, text } from '@storybook/addon-knobs';\nimport { action } from '@storybook/addon-actions';\nimport { Cell, CellProps } from './Cell';\n\nexport default {\n    title: 'Components',\n    component: Cell,\n    decorators: [withKnobs],\n} as Meta;\n\n\nconst Template: Story<CellProps> = () => <Cell showNumber={action('showNumber')} cell={text('Значение', '1')} />;\n\nexport const CellComponent = Template.bind({});\n\n",locationsMap:{"cell-component":{startLoc:{col:35,line:14},endLoc:{col:112,line:14},startBody:{col:35,line:14},endBody:{col:112,line:14}}}}},title:"Components",component:_Cell__WEBPACK_IMPORTED_MODULE_3__.a,decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs]};const CellComponent=(()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cell__WEBPACK_IMPORTED_MODULE_3__.a,{showNumber:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("showNumber"),cell:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Значение","1")})).bind({})},1051:function(module,exports,__webpack_require__){var api=__webpack_require__(1052),content=__webpack_require__(300);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},update=api(content,options);if(!content.locals||module.hot.invalidate){var oldLocals=content.locals;module.hot.accept(300,(function(){"string"==typeof(content=(content=__webpack_require__(300)).__esModule?content.default:content)&&(content=[[module.i,content,""]]),function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b)return!1;var p;for(p in a)if((!isNamedExport||"default"!==p)&&a[p]!==b[p])return!1;for(p in b)if(!(isNamedExport&&"default"===p||a[p]))return!1;return!0}(oldLocals,content.locals)?(oldLocals=content.locals,update(content)):module.hot.invalidate()}))}module.hot.dispose((function(){update()})),module.exports=content.locals||{}},1054:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RowComponent",(function(){return RowComponent}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(88),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),_Row__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(154);__webpack_exports__.default={parameters:{storySource:{source:"\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = \"import React from 'react';\\nimport { Story } from '@storybook/react/types-6-0';\\nimport { withKnobs, array } from '@storybook/addon-knobs';\\nimport { action } from '@storybook/addon-actions';\\nimport { showNumber } from './Field';\\nimport { Row, RowProps } from './Row';\\n\\nexport default {\\n    title: 'Components',\\n    component: Row,\\n    decorators: [withKnobs]\\n}\\n\\nconst Template: Story<RowProps> = () => <Row row={array('Ячейки', ['', '', ''])} showNumber={action('showNumber')} />;\\n\\nexport const RowComponent = Template.bind({});\\n\";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {\"RowComponent\":{\"startLoc\":{\"col\":34,\"line\":14},\"endLoc\":{\"col\":117,\"line\":14},\"startBody\":{\"col\":34,\"line\":14},\"endBody\":{\"col\":117,\"line\":14}}};\nimport React from 'react';\nimport { Story } from '@storybook/react/types-6-0';\nimport { withKnobs, array } from '@storybook/addon-knobs';\nimport { action } from '@storybook/addon-actions';\nimport { showNumber } from './Field';\nimport { Row, RowProps } from './Row';\n\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\nimport { Story } from '@storybook/react/types-6-0';\\nimport { withKnobs, array } from '@storybook/addon-knobs';\\nimport { action } from '@storybook/addon-actions';\\nimport { showNumber } from './Field';\\nimport { Row, RowProps } from './Row';\\n\\nexport default {\\n    title: 'Components',\\n    component: Row,\\n    decorators: [withKnobs]\\n}\\n\\nconst Template: Story<RowProps> = () => <Row row={array('Ячейки', ['', '', ''])} showNumber={action('showNumber')} />;\\n\\nexport const RowComponent = Template.bind({});\\n\",\"locationsMap\":{\"row-component\":{\"startLoc\":{\"col\":34,\"line\":14},\"endLoc\":{\"col\":117,\"line\":14},\"startBody\":{\"col\":34,\"line\":14},\"endBody\":{\"col\":117,\"line\":14}}}},},\n    title: 'Components',\n    component: Row,\n    decorators: [withKnobs]\n}\n\nconst Template: Story<RowProps> = () => <Row row={array('Ячейки', ['', '', ''])} showNumber={action('showNumber')} />;\n\nexport const RowComponent = Template.bind({});\n\n",locationsMap:{"row-component":{startLoc:{col:34,line:21},endLoc:{col:117,line:21},startBody:{col:34,line:21},endBody:{col:117,line:21}}}},storySource:{source:"import React from 'react';\nimport { Story } from '@storybook/react/types-6-0';\nimport { withKnobs, array } from '@storybook/addon-knobs';\nimport { action } from '@storybook/addon-actions';\nimport { showNumber } from './Field';\nimport { Row, RowProps } from './Row';\n\nexport default {\n    title: 'Components',\n    component: Row,\n    decorators: [withKnobs]\n}\n\nconst Template: Story<RowProps> = () => <Row row={array('Ячейки', ['', '', ''])} showNumber={action('showNumber')} />;\n\nexport const RowComponent = Template.bind({});\n",locationsMap:{"row-component":{startLoc:{col:34,line:14},endLoc:{col:117,line:14},startBody:{col:34,line:14},endBody:{col:117,line:14}}}}},title:"Components",component:_Row__WEBPACK_IMPORTED_MODULE_3__.a,decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs]};const RowComponent=(()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.a,{row:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.array)("Ячейки",["","",""]),showNumber:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("showNumber")})).bind({})},1059:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FieldComponent",(function(){return FieldComponent}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(99),addon_knobs_dist=__webpack_require__(88),Row=__webpack_require__(154);const Field_showNumber=value=>{console.log("string",value)},Field=({cells:cells,showNumber:showNumber})=>react_default.a.createElement("div",null,cells.map((cell,index)=>react_default.a.createElement(Row.a,{key:index,row:cell,showNumber:showNumber})));try{Field_showNumber.displayName="showNumber",Field_showNumber.__docgenInfo={description:"",displayName:"showNumber",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lesson4/stories/Field.tsx#showNumber"]={docgenInfo:Field_showNumber.__docgenInfo,name:"showNumber",path:"src/lesson4/stories/Field.tsx#showNumber"})}catch(__react_docgen_typescript_loader_error){}try{Field.displayName="Field",Field.__docgenInfo={description:"",displayName:"Field",props:{cells:{defaultValue:null,description:"",name:"cells",required:!0,type:{name:"string[][]"}},showNumber:{defaultValue:null,description:"",name:"showNumber",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lesson4/stories/Field.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/lesson4/stories/Field.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:"\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = \"import React from 'react';\\nimport { Story } from '@storybook/react/types-6-0';\\nimport { action } from '@storybook/addon-actions';\\nimport { withKnobs, object } from '@storybook/addon-knobs';\\nimport { Field, FieldProps } from './Field';\\n\\nexport default {\\n    title: 'Components',\\n    component: Field,\\n    decorators: [withKnobs]\\n}\\n\\nexport const FieldComponent: Story<FieldProps> = () => <Field cells={object('Данные', [\\n    ['', '', '', '', ''], ['', '', '', '', ''], ['', '']\\n])} showNumber={action('showNumber')} />;\\n\\n\";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {\"FieldComponent\":{\"startLoc\":{\"col\":49,\"line\":13},\"endLoc\":{\"col\":40,\"line\":15},\"startBody\":{\"col\":49,\"line\":13},\"endBody\":{\"col\":40,\"line\":15}}};\nimport React from 'react';\nimport { Story } from '@storybook/react/types-6-0';\nimport { action } from '@storybook/addon-actions';\nimport { withKnobs, object } from '@storybook/addon-knobs';\nimport { Field, FieldProps } from './Field';\n\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\nimport { Story } from '@storybook/react/types-6-0';\\nimport { action } from '@storybook/addon-actions';\\nimport { withKnobs, object } from '@storybook/addon-knobs';\\nimport { Field, FieldProps } from './Field';\\n\\nexport default {\\n    title: 'Components',\\n    component: Field,\\n    decorators: [withKnobs]\\n}\\n\\nexport const FieldComponent: Story<FieldProps> = () => <Field cells={object('Данные', [\\n    ['', '', '', '', ''], ['', '', '', '', ''], ['', '']\\n])} showNumber={action('showNumber')} />;\\n\\n\",\"locationsMap\":{\"field-component\":{\"startLoc\":{\"col\":49,\"line\":13},\"endLoc\":{\"col\":40,\"line\":15},\"startBody\":{\"col\":49,\"line\":13},\"endBody\":{\"col\":40,\"line\":15}}}},},\n    title: 'Components',\n    component: Field,\n    decorators: [withKnobs]\n}\n\nexport const FieldComponent: Story<FieldProps> = () => <Field cells={object('Данные', [\n    ['', '', '', '', ''], ['', '', '', '', ''], ['', '']\n])} showNumber={action('showNumber')} />;\n\n\n",locationsMap:{"field-component":{startLoc:{col:49,line:20},endLoc:{col:40,line:22},startBody:{col:49,line:20},endBody:{col:40,line:22}}}},storySource:{source:"import React from 'react';\nimport { Story } from '@storybook/react/types-6-0';\nimport { action } from '@storybook/addon-actions';\nimport { withKnobs, object } from '@storybook/addon-knobs';\nimport { Field, FieldProps } from './Field';\n\nexport default {\n    title: 'Components',\n    component: Field,\n    decorators: [withKnobs]\n}\n\nexport const FieldComponent: Story<FieldProps> = () => <Field cells={object('Данные', [\n    ['', '', '', '', ''], ['', '', '', '', ''], ['', '']\n])} showNumber={action('showNumber')} />;\n\n",locationsMap:{"field-component":{startLoc:{col:49,line:13},endLoc:{col:40,line:15},startBody:{col:49,line:13},endBody:{col:40,line:15}}}}},title:"Components",component:Field,decorators:[addon_knobs_dist.withKnobs]};const FieldComponent=()=>react_default.a.createElement(Field,{cells:Object(addon_knobs_dist.object)("Данные",[["","","","",""],["","","","",""],["",""]]),showNumber:Object(dist.action)("showNumber")})},153:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Cell}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(1051);const Cell=({cell:cell,showNumber:showNumber})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"cell",onClick:()=>showNumber(cell)});try{Cell.displayName="Cell",Cell.__docgenInfo={description:"",displayName:"Cell",props:{cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"string"}},showNumber:{defaultValue:null,description:"",name:"showNumber",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lesson4/stories/Cell.tsx#Cell"]={docgenInfo:Cell.__docgenInfo,name:"Cell",path:"src/lesson4/stories/Cell.tsx#Cell"})}catch(__react_docgen_typescript_loader_error){}},154:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Row}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Cell__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(153);const Row=({row:row,showNumber:showNumber})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},row.map((cell,index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cell__WEBPACK_IMPORTED_MODULE_1__.a,{cell:""+(index+1),showNumber:showNumber})));try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"string[]"}},showNumber:{defaultValue:null,description:"",name:"showNumber",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lesson4/stories/Row.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/lesson4/stories/Row.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}},300:function(module,exports,__webpack_require__){(exports=__webpack_require__(1053)(!1)).push([module.i,".cell {\n    width: 25px;\n    height: 25px;\n    border: 1px solid;\n    display: inline-block;\n    border-radius: 50%;\n    margin: 5px;\n    cursor: pointer;\n}\n",""]),module.exports=exports},461:function(module,exports,__webpack_require__){__webpack_require__(462),__webpack_require__(626),__webpack_require__(627),__webpack_require__(786),__webpack_require__(798),__webpack_require__(800),__webpack_require__(805),module.exports=__webpack_require__(1040)},535:function(module,exports){},627:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(151)},805:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(63),_clientLogger=__webpack_require__(44),_configFilename=__webpack_require__(806);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},806:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(807);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(151),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(303);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({docs:{container:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsContainer,page:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsPage,controls:{expanded:!0}}})}},[[461,1,2]]]);
//# sourceMappingURL=main.a4beddb3467563ea9588.bundle.js.map