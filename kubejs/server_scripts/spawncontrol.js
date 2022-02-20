  onEvent('block.place', event => {
  if (event.block.id == 'minecraft:spawner') {
    event.block.set('cagedmobs:mobcage')
    // event.cancel()
  }
})