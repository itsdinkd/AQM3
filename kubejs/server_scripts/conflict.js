// priority: 0

console.info('AQM3 -- Removing Conflicts....)');

const conflictRemoveJei = [
'cyclic:gold_chain'
];

onEvent('recipes', event => {

conflictRemoveJei.forEach(item => {
  event.remove({output: item})
});

});