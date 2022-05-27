// priority: 0
const conflictRemoveJei = [
'cyclic:gold_chain'
];

onEvent('recipes', event => {

conflictRemoveJei.forEach(item => {
  event.remove({output: item})
});

});

onEvent('tags.items', event => {
  event.remove('minecraft:coals', 'doom:argent_energy')
})