//Another Quality Modpack 3

onEvent('item.modification', event => {
    event.modify("doom:argent_energy", item => {
      item.burnTime = 10000
    })
  })