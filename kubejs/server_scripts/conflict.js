// priority: 0
const conflictRemoveJei = [
'cyclic:gold_chain',
'compressium:cobblestone_1'
];

onEvent('recipes', event => {

conflictRemoveJei.forEach(item => {
  event.remove({output: item})
});

event.replaceInput({id:'compressium:cobblestone_2'}, 'compressium:cobblestone_1', 'cyclic:compressed_cobblestone')

});

onEvent('tags.items', event => {
  event.remove('minecraft:coals', 'doom:argent_energy')
  event.add('forge:dirt', 'minecraft:dirt')
  event.add('forge:compressed/cobblestone', 'cyclic:compressed_cobblestone')
})