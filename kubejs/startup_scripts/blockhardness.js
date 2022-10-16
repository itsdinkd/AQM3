onEvent('block.modification', event => {
    event.modify("gobber2:gobber2_ore", block => {
      block.setDestroySpeed(6.0)
    })
    event.modify("gobber2:gobber2_ore_nether", block => {
        block.setDestroySpeed(8.0)
      })
      event.modify("gobber2:gobber2_ore_end", block => {
        block.setDestroySpeed(10.0)
      })
  })