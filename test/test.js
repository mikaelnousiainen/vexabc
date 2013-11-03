/*
 * VexABC - ABC notation parser and renderer for VexFlow
 *
 * Copyright (c) 2012 Mikael Nousiainen
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

VexAbc.TestSuite = function(parserDefinitionText, testOutputSelector) {
  this.parserDefinitionText = parserDefinitionText;
  this.pegParser = PEG.buildParser(parserDefinitionText);
  this.testOutputSelector = testOutputSelector;
  this.modules = [];
  this.tests = [];
  this.testId = 0;
}

VexAbc.TestSuite.prototype.registerModule = function(moduleDefinition) {
  this.modules.push(moduleDefinition);
}

VexAbc.TestSuite.prototype.registerTest = function(tests) {
  this.tests.push(tests);
}

VexAbc.TestSuite.prototype.run = function() {
  var i,j;

  for (i = 0; i < this.tests.length; i++) {
    var testDefinition = this.tests[i];
    
    this.testId++;
    VexAbc.Util.fractionDurationToVexFlowDuration
    var subTests = testDefinition.tests;
    for (j = 0; j < subTests.length; j++) {
      test(testDefinition.name + ": " + subTests[j].name, subTests[j].test);    
    }
  }

  for (i = 0; i < this.modules.length; i++) {
    var moduleDefinition = this.modules[i];
    this.runModule(moduleDefinition);
  }
}

VexAbc.TestSuite.prototype.runModule = function(moduleDefinition) {
  var i;

  module(moduleDefinition.name);

  for (i = 0; i < moduleDefinition.tests.length; i++) {
    var testDefinition = moduleDefinition.tests[i];
    this.runTest(moduleDefinition, testDefinition);
  }
}

VexAbc.TestSuite.prototype.runTest = function(moduleDefinition, testDefinition) {
  this.testId++;

  var self = this;

  test(testDefinition.name, function() {
    var name = testDefinition.name;
    var vexAbcSettings = testDefinition.settings;
    var abcTextInput = testDefinition.input;

    var vexAbcData;
    
    try {
      vexAbcData = self.pegParser.parse(abcTextInput);
    } catch (e) {
      throw {
        name: "VexABCParserException",
        message: "At line " + e.line + ", column " + e.column +
          " (offset " + e.offset + "): Expected \"" + e.expected +
          "\", but found: " + e.found
      };
    }

    var testDiv = $("<div></div>").addClass("vexabc-test")
    var testContentDiv = $("<div></div>").addClass("vexabc-test-content");

    var testCanvas = $("<canvas></canvas>").addClass("vexabc-test-canvas");

    testContentDiv.append($("<div></div>").addClass("vexabc-test-name").addClass("vexabc-test-content-title").text(moduleDefinition.name + ": " + name));

    testContentDiv.append($("<h5></h5>").text("ABC notation text"));
    testContentDiv.append($("<pre></pre>").addClass("vexabc-test-input").text(abcTextInput));

    testContentDiv.append($("<h5></h5>").text("Rendered music notation"));
    testContentDiv.append($("<div></div>").addClass("vexabc-test-notation").addClass("well").append(testCanvas));

    var accordionHeadingElement = $("<div></div>").addClass("accordion-heading");
    var toggleOutputElement = $("<a></a>").attr("href", "#testOutput" + self.testId).
      addClass("accordion-toggle").attr("data-toggle", "collapse").text("Parser output data (JSON)");
    accordionHeadingElement.append(toggleOutputElement);

    var accordionBodyElement = $("<div></div>").addClass("accordion-body").addClass("collapse").attr("id", "testOutput" + self.testId);
    accordionBodyElement.append($("<pre></pre>").addClass("vexabc-test-parser-output").addClass("accordion-inner").text(JSON.stringify(vexAbcData, null, 4)));

    testContentDiv.append(accordionHeadingElement);
    testContentDiv.append(accordionBodyElement);

    testDiv.append(testContentDiv);
    $(self.testOutputSelector).append(testDiv);

    var vexAbcRenderer = new VexAbc.Renderer(vexAbcSettings);

    vexAbcRenderer.transform(vexAbcData);
    vexAbcRenderer.render(testCanvas[0]);

    ok(true, "Passed");
  });
}

