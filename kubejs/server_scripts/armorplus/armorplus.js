// priority: 0

console.info('AQM3 -- Modifying ArmorPlus)');

onEvent('recipes', event => {

// Soul Slayers
event.remove({output:'armorplus:soul_slayer'});
event.recipes.createCompacting('armorplus:soul_slayer', [
  'armorplus:soul_ender_dragon',
  'armorplus:soul_wither_boss',
  'armorplus:soul_elder_guardian',
  'kubejs:demon_pearl',
  'kubejs:corrupted_emerald',
  'kubejs:star_of_icon']).heated();

  event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_chestplate_base'})
  event.shaped('armorplus:slayer_chestplate_base', ['1a2', 'm3m', 'mmm'],
  {
    1: 'armorplus:super_star_chestplate_base',
    2: 'armorplus:guardian_chestplate_base',
    3: 'armorplus:ender_dragon_chestplate_base',
    a: 'angelring:itemring',
    m: 'armorplus:the_ultimate_material'
  });

//end
});