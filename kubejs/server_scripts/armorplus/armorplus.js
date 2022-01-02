// priority: 0

console.info('AQM3 -- Modifying ArmorPlus)');

onEvent('recipes', event => {

// Soul Slayers
event.remove({output:'armorplus:soul_slayer'});
event.recipes.createCompacting('armorplus:soul_slayer', [
  'armorplus:soul_ender_dragon',
  'armorplus:soul_wither_boss',
  'armorplus:soul_elder_guardian']);

//end
});