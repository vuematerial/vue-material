<a name="v1.0.0-beta-8"></a>
# [v1.0.0-beta-8](https://github.com/vuematerial/vue-material/compare/v1.0.7-beta-8...v1.0.0-beta-7) (2018-01-29)


### Bug Fixes

* **MdAutocomplete:** fix input emit when cleared ([#1295](https://github.com/vuematerial/vue-material/issues/1295)) ([8a055e8](https://github.com/vuematerial/vue-material/commit/8a055e8))
* **MdAutocomplete:** prevent show options twice ([#1410](https://github.com/vuematerial/vue-material/issues/1410)) ([6a719b5](https://github.com/vuematerial/vue-material/commit/6a719b5)), closes [#1408](https://github.com/vuematerial/vue-material/issues/1408)
* **MdChips:** add labels for static chips ([#1329](https://github.com/vuematerial/vue-material/issues/1329)) ([b7094cb](https://github.com/vuematerial/vue-material/commit/b7094cb)), closes [#1327](https://github.com/vuematerial/vue-material/issues/1327)
* **MdDatepicker:** avoid warning for duplicated keys ([#1379](https://github.com/vuematerial/vue-material/issues/1379)) ([70712d7](https://github.com/vuematerial/vue-material/commit/70712d7))
* **MdDialog:** IE not rendering Dialogs ([#1356](https://github.com/vuematerial/vue-material/issues/1356)) ([8115f32](https://github.com/vuematerial/vue-material/commit/8115f32))
* **MdField:** Consider number `0` as hasValue ([#1407](https://github.com/vuematerial/vue-material/issues/1407)) ([d026496](https://github.com/vuematerial/vue-material/commit/d026496)), closes [#1406](https://github.com/vuematerial/vue-material/issues/1406)
* **MdField:** disable clear button while field is disabled ([#1326](https://github.com/vuematerial/vue-material/issues/1326)) ([03a9425](https://github.com/vuematerial/vue-material/commit/03a9425)), closes [#1321](https://github.com/vuematerial/vue-material/issues/1321)
* **MdField:** preserve the name attribute on change ([#1385](https://github.com/vuematerial/vue-material/issues/1385)) ([0a83834](https://github.com/vuematerial/vue-material/commit/0a83834))
* **MdField:** prevent MdInput and MdTextarea from emit input events directly ([#1285](https://github.com/vuematerial/vue-material/issues/1285)) ([00832e9](https://github.com/vuematerial/vue-material/commit/00832e9)), closes [#1261](https://github.com/vuematerial/vue-material/issues/1261)
* **MdHighlightText:** avoid printing 'null' as a value ([#1352](https://github.com/vuematerial/vue-material/issues/1352)) ([4d906b6](https://github.com/vuematerial/vue-material/commit/4d906b6)), closes [#1351](https://github.com/vuematerial/vue-material/issues/1351)
* **MdLayout:** add xlarge and large classes to the layout component ([#1323](https://github.com/vuematerial/vue-material/issues/1323)) ([6c5fe65](https://github.com/vuematerial/vue-material/commit/6c5fe65))
* **MdMenu:** Close menu while another is opened ([#1266](https://github.com/vuematerial/vue-material/issues/1266)) ([ef720c4](https://github.com/vuematerial/vue-material/commit/ef720c4)), closes [#1255](https://github.com/vuematerial/vue-material/issues/1255)
* **MdMenu:** fix close-on-select props ([#1280](https://github.com/vuematerial/vue-material/issues/1280)) ([40406af](https://github.com/vuematerial/vue-material/commit/40406af)), closes [#1279](https://github.com/vuematerial/vue-material/issues/1279)
* **MdProgressSpinner:** undefined navigator on SSR ([#1441](https://github.com/vuematerial/vue-material/issues/1441)) ([4722dad](https://github.com/vuematerial/vue-material/commit/4722dad))
* **MdRipple:** clear ripples if called programatically ([#1431](https://github.com/vuematerial/vue-material/issues/1431)) ([9e6aa8a](https://github.com/vuematerial/vue-material/commit/9e6aa8a))
* **MdSelect:** emit `md-selected` event after `localValue` changed ([#1282](https://github.com/vuematerial/vue-material/issues/1282)) ([023723a](https://github.com/vuematerial/vue-material/commit/023723a)), closes [#1275](https://github.com/vuematerial/vue-material/issues/1275)
* **MdSelect:** fix dense layout not being rendered properly ([#1346](https://github.com/vuematerial/vue-material/issues/1346)) ([7110eab](https://github.com/vuematerial/vue-material/commit/7110eab)), closes [#1332](https://github.com/vuematerial/vue-material/issues/1332)
* **MdSelect:** make options in disabled groups un-selectable ([#1293](https://github.com/vuematerial/vue-material/issues/1293)) ([89138eb](https://github.com/vuematerial/vue-material/commit/89138eb)), closes [#1286](https://github.com/vuematerial/vue-material/issues/1286)
* **MdSelect:** prevent overflowing arrow icon ([#1373](https://github.com/vuematerial/vue-material/issues/1373)) ([637e914](https://github.com/vuematerial/vue-material/commit/637e914))
* **MdSelect:** Reactive options ([#1447](https://github.com/vuematerial/vue-material/issues/1447)) ([01dfdfb](https://github.com/vuematerial/vue-material/commit/01dfdfb)), closes [#1262](https://github.com/vuematerial/vue-material/issues/1262)
* **MdSteppers:** recalculate styles on window resize ([#1394](https://github.com/vuematerial/vue-material/issues/1394)) ([d3953f7](https://github.com/vuematerial/vue-material/commit/d3953f7))
* **MdTable:** fix error to sort by attribute of child object ([#1309](https://github.com/vuematerial/vue-material/issues/1309)) ([9134227](https://github.com/vuematerial/vue-material/commit/9134227))
* **MdTable:** fix height of fixed table for firefox ([#1384](https://github.com/vuematerial/vue-material/issues/1384)) ([e24f8dc](https://github.com/vuematerial/vue-material/commit/e24f8dc))
* **MdTable:** improve sort function on table for numbered columns ([#1353](https://github.com/vuematerial/vue-material/issues/1353)) ([18bb96c](https://github.com/vuematerial/vue-material/commit/18bb96c)), closes [#1349](https://github.com/vuematerial/vue-material/issues/1349)
* **MdTable:** remove table head when column removed ([#1354](https://github.com/vuematerial/vue-material/issues/1354)) ([b54eb10](https://github.com/vuematerial/vue-material/commit/b54eb10)), closes [#1347](https://github.com/vuematerial/vue-material/issues/1347)
* **MdTabs:** correct indicator position while alignment changed ([#1442](https://github.com/vuematerial/vue-material/issues/1442)) ([c5fc2f5](https://github.com/vuematerial/vue-material/commit/c5fc2f5)), closes [#1432](https://github.com/vuematerial/vue-material/issues/1432)
* **MdTabs:** fix indicator ([#1448](https://github.com/vuematerial/vue-material/issues/1448)) ([b33d0d6](https://github.com/vuematerial/vue-material/commit/b33d0d6)), closes [#1304](https://github.com/vuematerial/vue-material/issues/1304)
* **MdTextarea:** fix input event handler not triggering ([#1341](https://github.com/vuematerial/vue-material/issues/1341)) ([567e9a7](https://github.com/vuematerial/vue-material/commit/567e9a7)), closes [#1340](https://github.com/vuematerial/vue-material/issues/1340)
* **MdTextarea:** prevent emitting `inputEvent` object on `input` ([#1249](https://github.com/vuematerial/vue-material/issues/1249)) ([c83f2a6](https://github.com/vuematerial/vue-material/commit/c83f2a6)), closes [#1247](https://github.com/vuematerial/vue-material/issues/1247)
* **MdTooltip:** `mdActive` never updated to true using `.sync` modifier ([b1018fb](https://github.com/vuematerial/vue-material/commit/b1018fb))
* **MdTooltip:** overlaying in dialog ([#1446](https://github.com/vuematerial/vue-material/issues/1446)) ([8ade40f](https://github.com/vuematerial/vue-material/commit/8ade40f))
* menu compatibility with IE (node type statement) ([#1365](https://github.com/vuematerial/vue-material/issues/1365)) ([a4c03be](https://github.com/vuematerial/vue-material/commit/a4c03be)), closes [#1263](https://github.com/vuematerial/vue-material/issues/1263) [#1263](https://github.com/vuematerial/vue-material/issues/1263)
* upgrade vue-template-compiler in yarn.lock ([#1306](https://github.com/vuematerial/vue-material/issues/1306)) ([b1bc2e1](https://github.com/vuematerial/vue-material/commit/b1bc2e1))
* z-index issues ([#1264](https://github.com/vuematerial/vue-material/issues/1264)) ([843056d](https://github.com/vuematerial/vue-material/commit/843056d))


### Features

* **MdApp:** allow custom components with slot ([#1387](https://github.com/vuematerial/vue-material/issues/1387)) ([ff341a2](https://github.com/vuematerial/vue-material/commit/ff341a2))
* **MdApp:** custom class and style ([#1256](https://github.com/vuematerial/vue-material/issues/1256)) ([9073313](https://github.com/vuematerial/vue-material/commit/9073313))
* **MdChips:** add formatter for individual chips ([#1339](https://github.com/vuematerial/vue-material/issues/1339)) ([247a840](https://github.com/vuematerial/vue-material/commit/247a840)), closes [#1288](https://github.com/vuematerial/vue-material/issues/1288)
* **MdChips:** feedback for duplicated chip ([#1281](https://github.com/vuematerial/vue-material/issues/1281)) ([d15f63b](https://github.com/vuematerial/vue-material/commit/d15f63b)), closes [#1212](https://github.com/vuematerial/vue-material/issues/1212) [#1212](https://github.com/vuematerial/vue-material/issues/1212)
* **MdDatepicker:** add dateformat ([#1436](https://github.com/vuematerial/vue-material/issues/1436)) ([74aee23](https://github.com/vuematerial/vue-material/commit/74aee23))
* **MdDatepicker:** add support for labels ([#1265](https://github.com/vuematerial/vue-material/issues/1265)) ([9f61c0b](https://github.com/vuematerial/vue-material/commit/9f61c0b))
* **MdDatepicker:** custom first day of a week ([#1409](https://github.com/vuematerial/vue-material/issues/1409)) ([af0dc0a](https://github.com/vuematerial/vue-material/commit/af0dc0a)), closes [#1397](https://github.com/vuematerial/vue-material/issues/1397) [#1397](https://github.com/vuematerial/vue-material/issues/1397)
* **MdDatepicker:** emit date without confirming ([#1426](https://github.com/vuematerial/vue-material/issues/1426)) ([e4af731](https://github.com/vuematerial/vue-material/commit/e4af731))
* **MdDatepicker:** override browser native pickers ([#1270](https://github.com/vuematerial/vue-material/issues/1270)) ([1cfaf3c](https://github.com/vuematerial/vue-material/commit/1cfaf3c))
* **MdDatepicker:** remove fixed label position ([#1417](https://github.com/vuematerial/vue-material/issues/1417)) ([a2cbc98](https://github.com/vuematerial/vue-material/commit/a2cbc98))
* **MdListItemExpand:** reactive expansion ([#1435](https://github.com/vuematerial/vue-material/issues/1435)) ([0f7e28f](https://github.com/vuematerial/vue-material/commit/0f7e28f)), closes [#1425](https://github.com/vuematerial/vue-material/issues/1425)
* **MdListItemLink:** add all `<a>` attributes supported ([#1328](https://github.com/vuematerial/vue-material/issues/1328)) ([c9a2b9f](https://github.com/vuematerial/vue-material/commit/c9a2b9f)), closes [#1320](https://github.com/vuematerial/vue-material/issues/1320)
* **MdRipple:** multiple waves ([#1419](https://github.com/vuematerial/vue-material/issues/1419)) ([70b3aa2](https://github.com/vuematerial/vue-material/commit/70b3aa2))
* **MdTable:** reactive selection ([#1358](https://github.com/vuematerial/vue-material/issues/1358)) ([906a91d](https://github.com/vuematerial/vue-material/commit/906a91d)), closes [#1348](https://github.com/vuematerial/vue-material/issues/1348) [#1292](https://github.com/vuematerial/vue-material/issues/1292)
* **MdTableRow:** enable native browser events without the .native modifier ([#1393](https://github.com/vuematerial/vue-material/issues/1393)) ([edb484e](https://github.com/vuematerial/vue-material/commit/edb484e))


### BREAKING CHANGES

* **MdTable:** no more `md-selected` event from `MdTableRow`

* fix(MdTable): select event should be triggered after select update event

* fix(MdTableHeadSelection): select all only take effect on selectable items




