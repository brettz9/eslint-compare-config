'use strict';

var MAX = 100;

module.exports = function(differences) {
  var totals = {
    rulesMissingFromLeft: getLength(differences.rulesMissingFromLeft),
    matchingRules: getLength(differences.matchingRules),
    rulesMissingFromRight: getLength(differences.rulesMissingFromRight),
    ruleDifferences: getLength(differences.ruleDifferences),
  };

  var totalRules = totals.rulesMissingFromLeft + totals.matchingRules
    + totals.rulesMissingFromRight + totals.ruleDifferences;
  if (totalRules === 0) {
    return MAX;
  }

  return Math.round(totals.matchingRules / totalRules * MAX);
};

function getLength(array) {
  if (array) {
    return array.length;
  }

  return 0;
}
