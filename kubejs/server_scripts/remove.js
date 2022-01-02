// priority: 0

console.info('AQM3 -- Removing Recipes....)');

const recipeRemoveJei = [
'angelring:itemdiamondring',
'buildinggadgets:gadget_destruction',
'chanceglobe:chance_globe',
'cyclic:antigravity',
'cyclic:apple_chocolate',
'cyclic:apple_chorus',
'cyclic:apple_diamond',
'cyclic:apple_emerald',
'cyclic:apple_ender',
'cyclic:apple_honey',
'cyclic:apple_iron',
'cyclic:apple_lapis',
'cyclic:apple_prismarine',
'cyclic:apple_sprout_emerald',
'cyclic:beacon',
'cyclic:build_scepter',
'cyclic:charm_antipotion',
'cyclic:charm_attack_speed',
'cyclic:charm_fire',
'cyclic:charm_home',
'cyclic:charm_knockback_resistance',
'cyclic:charm_longfall',
'cyclic:charm_speed',
'cyclic:charm_ultimate',
'cyclic:charm_void',
'cyclic:charm_water',
'cyclic:charm_wither',
'cyclic:chorus_flight',
'cyclic:chorus_spectral',
'cyclic:elevation_wand',
'cyclic:empty_heart',
'cyclic:ender_book',
'cyclic:ender_pearl_mounted',
'cyclic:ender_pearl_reuse',
'cyclic:experience_food',
'cyclic:eye_teleport',
'cyclic:fire_scepter',
'cyclic:glowing_helmet',
'cyclic:heart',
'cyclic:heart_empty',
'cyclic:ice_scepter',
'cyclic:lightning_scepter',
'cyclic:mattock',
'cyclic:mattock_nether',
'cyclic:mattock_stone',
'cyclic:offset_scepter',
'cyclic:randomize_scepter',
'cyclic:replace_scepter',
'cyclic:spawner_seeker',
'cyclic:teleport',
'cyclic:teleport_wand',
'cyclic:uncrafter',
'cyclic:water_candle',
'cyclic:wireless_item'
];

onEvent('recipes', event => {

recipeRemoveJei.forEach(item => {
  event.remove({output: item})
});


// Assembly Lines Enchantments
event.remove({id: 'assemblylinemachines:enchanted_book/mending'});


// Armor Plus
armorPMats = [
"helmet",
"chestplate",
"leggings",
"boots"
]

armorPMatsWeapons = [
'sword',
'battle_axe',
'mace',
'bow',
'pickaxe'
]

armorPMats.forEach(item => {
  event.remove({id: 'armorplus:redstone_'});
  armorPMatsWeapons.forEach(item => {
    event.remove({id: 'armorplus:obsidian_'});
  });
});


});

onEvent('item.tags', event => {
// Get the #forge:cobblestone tag collection and add Diamond Ore to it
// event.get('forge:cobblestone').add('minecraft:diamond_ore')
// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})