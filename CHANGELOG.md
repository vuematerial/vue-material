<a name="1.0.0-beta-10.2"></a>
# [1.0.0-beta-10.2](https://github.com/vuematerial/vue-material/compare/v1.0.0-beta-10.1...v1.0.0-beta-10.2) (2018-05-15)


### Bug Fixes

* **MdTable:** fix table rendering default slot twice ([#1731](https://github.com/vuematerial/vue-material/issues/1731)) ([3c61bcf](https://github.com/vuematerial/vue-material/commit/3c61bcf))


<a name="1.0.0-beta-10.1"></a>
# [1.0.0-beta-10.1](https://github.com/vuematerial/vue-material/compare/v1.0.0-beta-10...v1.0.0-beta-10.1) (2018-05-13)


### Bug Fixes

* **MdApp:** fix typo breaking MdApp on several scenarios ([#1728](https://github.com/vuematerial/vue-material/issues/1728)) ([8bdbaf3](https://github.com/vuematerial/vue-material/commit/8bdbaf3)), closes [#1727](https://github.com/vuematerial/vue-material/issues/1727)


<a name="1.0.0-beta-10"></a>
# [1.0.0-beta-10](https://github.com/vuematerial/vue-material/compare/v1.0.0-beta-9...v1.0.0-beta-10) (2018-05-13)


### Bug Fixes

* **Core:** inject SassScript value to CSS variables to fix libsass 3.5.0 ([#1620](https://github.com/vuematerial/vue-material/issues/1620)) ([4f180f6](https://github.com/vuematerial/vue-material/commit/4f180f6)), closes [/sass-lang.com/documentation/file.SASS_CHANGELOG.html#3_5_0__12_July_2017](https://github.com//sass-lang.com/documentation/file.SASS_CHANGELOG.html/issues/3_5_0__12_July_2017) [#1619](https://github.com/vuematerial/vue-material/issues/1619)
* **MdApp:** right drawer, fully reactive ([#1493](https://github.com/vuematerial/vue-material/issues/1493)) ([3ac16c7](https://github.com/vuematerial/vue-material/commit/3ac16c7)), closes [#1204](https://github.com/vuematerial/vue-material/issues/1204)
* **MdBadge:** custom class and style supported ([#1676](https://github.com/vuematerial/vue-material/issues/1676)) ([71b7afa](https://github.com/vuematerial/vue-material/commit/71b7afa))
* **MdBottomBarItem:** missing props to for router link ([#1531](https://github.com/vuematerial/vue-material/issues/1531)) ([6860d3a](https://github.com/vuematerial/vue-material/commit/6860d3a)), closes [#1412](https://github.com/vuematerial/vue-material/issues/1412)
* **MdButton:** change type of mdRippleActive prop to null to support SSR ([baf6a14](https://github.com/vuematerial/vue-material/commit/baf6a14))
* **MdButton:** fab-bottom-center style ([#1724](https://github.com/vuematerial/vue-material/issues/1724)) ([d1b296e](https://github.com/vuematerial/vue-material/commit/d1b296e)), closes [#1722](https://github.com/vuematerial/vue-material/issues/1722)
* **MdButton:** fix events when ripple is on ([#1532](https://github.com/vuematerial/vue-material/issues/1532)) ([e7f8f34](https://github.com/vuematerial/vue-material/commit/e7f8f34))
* **MdButton:** Ripple for firefox ([#1468](https://github.com/vuematerial/vue-material/issues/1468)) ([156506b](https://github.com/vuematerial/vue-material/commit/156506b)), closes [#1461](https://github.com/vuematerial/vue-material/issues/1461)
* **MdCard:** prevent showing scrollbars ([#1580](https://github.com/vuematerial/vue-material/issues/1580)) ([dc7892e](https://github.com/vuematerial/vue-material/commit/dc7892e))
* **MdChips:** improve alignment with other regular fields like md-input ([ce7e075](https://github.com/vuematerial/vue-material/commit/ce7e075))
* **MdCore:** remove all async/await from codebase ([5c3c208](https://github.com/vuematerial/vue-material/commit/5c3c208))
* **MdDialog:** remove md-primary from MdDialogConfirm's cancel button ([#1633](https://github.com/vuematerial/vue-material/issues/1633)) ([e125c0d](https://github.com/vuematerial/vue-material/commit/e125c0d)), closes [#1622](https://github.com/vuematerial/vue-material/issues/1622)
* **MdField:** fix font size for safari ([#1476](https://github.com/vuematerial/vue-material/issues/1476)) ([679f3d6](https://github.com/vuematerial/vue-material/commit/679f3d6))
* **MdField:** fix textarea and inline alignments ([#1646](https://github.com/vuematerial/vue-material/issues/1646)) ([dbeb7e9](https://github.com/vuematerial/vue-material/commit/dbeb7e9))
* **MdFile:** empty statement ([#1716](https://github.com/vuematerial/vue-material/issues/1716)) ([ae10127](https://github.com/vuematerial/vue-material/commit/ae10127)), closes [#1711](https://github.com/vuematerial/vue-material/issues/1711)
* **MdLayout:** remove breakpoint margins ([#1457](https://github.com/vuematerial/vue-material/issues/1457)) ([c568fe3](https://github.com/vuematerial/vue-material/commit/c568fe3))
* **MdMenu:** fix vertical alignment for menu items in IE ([#1615](https://github.com/vuematerial/vue-material/issues/1615)) ([5d3dfcf](https://github.com/vuematerial/vue-material/commit/5d3dfcf))
* **MdMenu:** preventDefault only for specific keys ([7c10a09](https://github.com/vuematerial/vue-material/commit/7c10a09))
* **MdMenuItem:** fix router ([#1474](https://github.com/vuematerial/vue-material/issues/1474)) ([eb6c8df](https://github.com/vuematerial/vue-material/commit/eb6c8df)), closes [#1471](https://github.com/vuematerial/vue-material/issues/1471)
* **MdProgressBar:** query style ([#1683](https://github.com/vuematerial/vue-material/issues/1683)) ([48453a1](https://github.com/vuematerial/vue-material/commit/48453a1)), closes [#1682](https://github.com/vuematerial/vue-material/issues/1682)
* **MdRipple:** clear immediately ([#1506](https://github.com/vuematerial/vue-material/issues/1506)) ([d52954a](https://github.com/vuematerial/vue-material/commit/d52954a))
* **MdSelect:** adjust position when body has margin ([#1551](https://github.com/vuematerial/vue-material/issues/1551)) ([c820b72](https://github.com/vuematerial/vue-material/commit/c820b72))
* **MdSelect:** dropdown icon align with input on botton line variant ([#1600](https://github.com/vuematerial/vue-material/issues/1600)) ([5c30f73](https://github.com/vuematerial/vue-material/commit/5c30f73))
* **MdSelect:** fix select position under md-dialog ([#1525](https://github.com/vuematerial/vue-material/issues/1525)) ([f7990c5](https://github.com/vuematerial/vue-material/commit/f7990c5)), closes [#1149](https://github.com/vuematerial/vue-material/issues/1149)
* **MdSelect:** pass props id and name as pure html attributes ([#1583](https://github.com/vuematerial/vue-material/issues/1583)) ([9fde310](https://github.com/vuematerial/vue-material/commit/9fde310))
* **MdSelect:** update the text if options are updated ([#1481](https://github.com/vuematerial/vue-material/issues/1481)) ([042e571](https://github.com/vuematerial/vue-material/commit/042e571)), closes [#1389](https://github.com/vuematerial/vue-material/issues/1389)
* **MdSteppers:** zero height in IE ([#1664](https://github.com/vuematerial/vue-material/issues/1664)) ([665732c](https://github.com/vuematerial/vue-material/commit/665732c))
* **MdTable:** emit selected/update event only when selected items really changed ([#1585](https://github.com/vuematerial/vue-material/issues/1585)) ([a591144](https://github.com/vuematerial/vue-material/commit/a591144)), closes [#1559](https://github.com/vuematerial/vue-material/issues/1559)
* **MdTable:** fix value condition for slot ([af0b89c](https://github.com/vuematerial/vue-material/commit/af0b89c))
* **MdTable:** make fixed header follow the horizontal scroll ([#1575](https://github.com/vuematerial/vue-material/issues/1575)) ([b14aac3](https://github.com/vuematerial/vue-material/commit/b14aac3))
* **MdTable:** reactive selection ([#1674](https://github.com/vuematerial/vue-material/issues/1674)) ([ddee303](https://github.com/vuematerial/vue-material/commit/ddee303)), closes [#1348](https://github.com/vuematerial/vue-material/issues/1348)
* **MdTableRow:** removeSelectableItem when empty ([#1616](https://github.com/vuematerial/vue-material/issues/1616)) ([6d787bd](https://github.com/vuematerial/vue-material/commit/6d787bd)), closes [#1610](https://github.com/vuematerial/vue-material/issues/1610)
* **MdTableRow:** update selectableItem while `mdItem` changed ([#1496](https://github.com/vuematerial/vue-material/issues/1496)) ([30c2f80](https://github.com/vuematerial/vue-material/commit/30c2f80)), closes [#1492](https://github.com/vuematerial/vue-material/issues/1492)
* build script ([0b4ffc3](https://github.com/vuematerial/vue-material/commit/0b4ffc3))
* **MdTabs:** correct indicator position on transition end ([#1467](https://github.com/vuematerial/vue-material/issues/1467)) ([bc3b611](https://github.com/vuematerial/vue-material/commit/bc3b611)), closes [#1432](https://github.com/vuematerial/vue-material/issues/1432)
* **MdTabs:** remove ResizeObserver to improve the size and position calculation ([#1552](https://github.com/vuematerial/vue-material/issues/1552)) ([ef0cd2f](https://github.com/vuematerial/vue-material/commit/ef0cd2f))
* **MdTabs:** transparent content ([#1725](https://github.com/vuematerial/vue-material/issues/1725)) ([a4e3619](https://github.com/vuematerial/vue-material/commit/a4e3619)), closes [#1713](https://github.com/vuematerial/vue-material/issues/1713)
* constructor name support for IE11 ([95614b6](https://github.com/vuematerial/vue-material/commit/95614b6))
* ios devices do not trigger click events on 'non-clickable' elements ([#1634](https://github.com/vuematerial/vue-material/issues/1634)) ([63b8ac0](https://github.com/vuematerial/vue-material/commit/63b8ac0)), closes [#1503](https://github.com/vuematerial/vue-material/issues/1503)
* make dev env works ([a8e3978](https://github.com/vuematerial/vue-material/commit/a8e3978))


### Components

* **MdBadge:** new md-badge component ([#1465](https://github.com/vuematerial/vue-material/issues/1465)) ([3c60a38](https://github.com/vuematerial/vue-material/commit/3c60a38))


### Features

* **MdBadge:** add prop validation ([a53aff6](https://github.com/vuematerial/vue-material/commit/a53aff6))
* **MdCheckbox:** add `indeterminate` variant ([#1597](https://github.com/vuematerial/vue-material/issues/1597)) ([e373857](https://github.com/vuematerial/vue-material/commit/e373857))
* **MdCheckbox:** add object to possible checkbox value ([#1556](https://github.com/vuematerial/vue-material/issues/1556)) ([05821e2](https://github.com/vuematerial/vue-material/commit/05821e2))
* **MdCheckBox:** True / false value supporting ([#1703](https://github.com/vuematerial/vue-material/issues/1703)) ([7cdcb66](https://github.com/vuematerial/vue-material/commit/7cdcb66)), closes [#1701](https://github.com/vuematerial/vue-material/issues/1701)
* **MdChips:** Support with field variants ([#1668](https://github.com/vuematerial/vue-material/issues/1668)) ([c502a16](https://github.com/vuematerial/vue-material/commit/c502a16))
* **MdDatepicker:** add close and open events ([#1577](https://github.com/vuematerial/vue-material/issues/1577)) ([5cb9b7b](https://github.com/vuematerial/vue-material/commit/5cb9b7b))
* **MdDatepicker:** add immediately option ([#1607](https://github.com/vuematerial/vue-material/issues/1607)) ([f62ec6a](https://github.com/vuematerial/vue-material/commit/f62ec6a)), closes [#1606](https://github.com/vuematerial/vue-material/issues/1606)
* **MdDatepicker:** Debounce the conversion into a date object ([#1666](https://github.com/vuematerial/vue-material/issues/1666)) ([a47ebe1](https://github.com/vuematerial/vue-material/commit/a47ebe1))
* **MdDialog:** add emit event when clicked outside of dialog ([#1567](https://github.com/vuematerial/vue-material/issues/1567)) ([b19f6f0](https://github.com/vuematerial/vue-material/commit/b19f6f0))
* **MdField:** add [@md](https://github.com/md)-clear event ([#1635](https://github.com/vuematerial/vue-material/issues/1635)) ([6ef5235](https://github.com/vuematerial/vue-material/commit/6ef5235))
* **MdField:** add prefixes and suffixes ([#1592](https://github.com/vuematerial/vue-material/issues/1592)) ([a30d84c](https://github.com/vuematerial/vue-material/commit/a30d84c))
* **MdField:** new field variants ([#1545](https://github.com/vuematerial/vue-material/issues/1545)) ([f2347f1](https://github.com/vuematerial/vue-material/commit/f2347f1))
* **MdFile:** Support with field variants ([#1662](https://github.com/vuematerial/vue-material/issues/1662)) ([fbf6d2a](https://github.com/vuematerial/vue-material/commit/fbf6d2a))
* **MdList:** expand only one option ([#1645](https://github.com/vuematerial/vue-material/issues/1645)) ([09b8573](https://github.com/vuematerial/vue-material/commit/09b8573)), closes [#1641](https://github.com/vuematerial/vue-material/issues/1641)
* **MdListItemExpand:** add expanded and collapsed events ([#1495](https://github.com/vuematerial/vue-material/issues/1495)) ([11c2785](https://github.com/vuematerial/vue-material/commit/11c2785)), closes [#1490](https://github.com/vuematerial/vue-material/issues/1490)
* **MdMenu:** new props mdCloseOnClick ([#1630](https://github.com/vuematerial/vue-material/issues/1630)) ([ecf5cb7](https://github.com/vuematerial/vue-material/commit/ecf5cb7))
* **MdSnackbar:** keep alive if its persistent ([#1561](https://github.com/vuematerial/vue-material/issues/1561)) ([33007b4](https://github.com/vuematerial/vue-material/commit/33007b4))
* **MdTable:** allow 2D array as the model value ([#1477](https://github.com/vuematerial/vue-material/issues/1477)) ([aed487a](https://github.com/vuematerial/vue-material/commit/aed487a))
* **MdTable:** allow custom value for mdHeight ([#1522](https://github.com/vuematerial/vue-material/issues/1522)) ([c63b757](https://github.com/vuematerial/vue-material/commit/c63b757))
* **MdTableCell:** add `md-id` prop ([#1584](https://github.com/vuematerial/vue-material/issues/1584)) ([7e7249a](https://github.com/vuematerial/vue-material/commit/7e7249a))


### Performance Improvements

* move universal selector from html tag ([#1652](https://github.com/vuematerial/vue-material/issues/1652)) ([2340eae](https://github.com/vuematerial/vue-material/commit/2340eae))


### BREAKING CHANGES

* **MdApp:** Replace useless props `mdLeft` with `!this.mdRight`
* **MdApp:** no more than one drawer in a MdApp
* **MdCheckBox:** checkbox without setting value is true / false as default



<a name="1.0.0-beta-8"></a>
# [1.0.0-beta-8](https://github.com/vuematerial/vue-material/compare/4521af6...v1.0.0-beta-8) (2018-01-29)


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
