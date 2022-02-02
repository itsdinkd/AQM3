// priority: 0
console.info('AQM3 -- Removing Immersive Recipes)');
onEvent('recipes', event => {
event.remove({output: 'immersiveengineering:cloche'})
  event.shaped('immersiveengineering:cloche', ['GGG', 'E R', 'AGA'], {
    G: '#doom:glass',
    E: 'immersiveengineering:electron_tube',
    A: 'gobber2:gobber2_globette',
    R: 'immersiveengineering:logic_unit'
  })

});