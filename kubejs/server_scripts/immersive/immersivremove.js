// priority: 0
console.info('AQM3 -- Removing Immersive Recipes)');
const ieEnchantRemove = [
"mending",
"infinity",
"unbreaking"
];

onEvent('recipes', event => {
ieEnchantRemove.forEach(item => {
  event.remove({output: 'minecraft:' + item, type: 'assemblylinemachines:enchantment_book'})
})

});