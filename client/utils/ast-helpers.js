import * as estraverse from 'estraverse';

export function countStatements(codetree, statementName) {
     var matches = 0;
    estraverse.traverse(codetree, {
      enter: function(node) {
        if (node.type === statementName) {
          matches++;
        }
      }
    });
    return matches;
}
