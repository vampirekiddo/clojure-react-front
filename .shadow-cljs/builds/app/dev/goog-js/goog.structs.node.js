["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/node.js"],"~:js","goog.provide(\"goog.structs.Node\");\ngoog.structs.Node = function(key, value) {\n  this.key_ = key;\n  this.value_ = value;\n};\ngoog.structs.Node.prototype.getKey = function() {\n  return this.key_;\n};\ngoog.structs.Node.prototype.getValue = function() {\n  return this.value_;\n};\ngoog.structs.Node.prototype.clone = function() {\n  return new goog.structs.Node(this.key_, this.value_);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Generic immutable node object to be used in collections.\n */\n\n\ngoog.provide('goog.structs.Node');\n\n\n\n/**\n * A generic immutable node. This can be used in various collections that\n * require a node object for its item (such as a heap).\n * @param {K} key Key.\n * @param {V} value Value.\n * @constructor\n * @template K, V\n */\ngoog.structs.Node = function(key, value) {\n  'use strict';\n  /**\n   * The key.\n   * @private {K}\n   */\n  this.key_ = key;\n\n  /**\n   * The value.\n   * @private {V}\n   */\n  this.value_ = value;\n};\n\n\n/**\n * Gets the key.\n * @return {K} The key.\n */\ngoog.structs.Node.prototype.getKey = function() {\n  'use strict';\n  return this.key_;\n};\n\n\n/**\n * Gets the value.\n * @return {V} The value.\n */\ngoog.structs.Node.prototype.getValue = function() {\n  'use strict';\n  return this.value_;\n};\n\n\n/**\n * Clones a node and returns a new node.\n * @return {!goog.structs.Node<K, V>} A new goog.structs.Node with the same\n *     key value pair.\n */\ngoog.structs.Node.prototype.clone = function() {\n  'use strict';\n  return new goog.structs.Node(this.key_, this.value_);\n};\n","~:compiled-at",1634331941641,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.node.js\",\n\"lineCount\":15,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,mBAAb,CAAA;AAYAD,IAAKE,CAAAA,OAAQC,CAAAA,IAAb,GAAoBC,QAAQ,CAACC,GAAD,EAAMC,KAAN,CAAa;AAMvC,MAAKC,CAAAA,IAAL,GAAYF,GAAZ;AAMA,MAAKG,CAAAA,MAAL,GAAcF,KAAd;AAZuC,CAAzC;AAoBAN,IAAKE,CAAAA,OAAQC,CAAAA,IAAKM,CAAAA,SAAUC,CAAAA,MAA5B,GAAqCC,QAAQ,EAAG;AAE9C,SAAO,IAAKJ,CAAAA,IAAZ;AAF8C,CAAhD;AAUAP,IAAKE,CAAAA,OAAQC,CAAAA,IAAKM,CAAAA,SAAUG,CAAAA,QAA5B,GAAuCC,QAAQ,EAAG;AAEhD,SAAO,IAAKL,CAAAA,MAAZ;AAFgD,CAAlD;AAWAR,IAAKE,CAAAA,OAAQC,CAAAA,IAAKM,CAAAA,SAAUK,CAAAA,KAA5B,GAAoCC,QAAQ,EAAG;AAE7C,SAAO,IAAIf,IAAKE,CAAAA,OAAQC,CAAAA,IAAjB,CAAsB,IAAKI,CAAAA,IAA3B,EAAiC,IAAKC,CAAAA,MAAtC,CAAP;AAF6C,CAA/C;;\",\n\"sources\":[\"goog/structs/node.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Generic immutable node object to be used in collections.\\n */\\n\\n\\ngoog.provide('goog.structs.Node');\\n\\n\\n\\n/**\\n * A generic immutable node. This can be used in various collections that\\n * require a node object for its item (such as a heap).\\n * @param {K} key Key.\\n * @param {V} value Value.\\n * @constructor\\n * @template K, V\\n */\\ngoog.structs.Node = function(key, value) {\\n  'use strict';\\n  /**\\n   * The key.\\n   * @private {K}\\n   */\\n  this.key_ = key;\\n\\n  /**\\n   * The value.\\n   * @private {V}\\n   */\\n  this.value_ = value;\\n};\\n\\n\\n/**\\n * Gets the key.\\n * @return {K} The key.\\n */\\ngoog.structs.Node.prototype.getKey = function() {\\n  'use strict';\\n  return this.key_;\\n};\\n\\n\\n/**\\n * Gets the value.\\n * @return {V} The value.\\n */\\ngoog.structs.Node.prototype.getValue = function() {\\n  'use strict';\\n  return this.value_;\\n};\\n\\n\\n/**\\n * Clones a node and returns a new node.\\n * @return {!goog.structs.Node<K, V>} A new goog.structs.Node with the same\\n *     key value pair.\\n */\\ngoog.structs.Node.prototype.clone = function() {\\n  'use strict';\\n  return new goog.structs.Node(this.key_, this.value_);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"structs\",\"Node\",\"goog.structs.Node\",\"key\",\"value\",\"key_\",\"value_\",\"prototype\",\"getKey\",\"goog.structs.Node.prototype.getKey\",\"getValue\",\"goog.structs.Node.prototype.getValue\",\"clone\",\"goog.structs.Node.prototype.clone\"]\n}\n"]