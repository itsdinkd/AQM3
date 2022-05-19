// priority: 0

console.info('AQM3 -- Removing Recipes....)');

const recipeRemoveJei = [
'angelring:itemdiamondring',
'armorplus:soul_box',
'assemblylinemachines:steel_ingot',
'botania:balance_cloak',
'botania:blood_pendant',
'botania:cocoon',
'botania:diving_rod',
'botania:fel_pumpkin',
'botania:flight_tiara',
'botania:flight_tiara_0',
'botania:laputa_shard',
'botania:missile_rod',
'botania:smelt_rod',
'botania:spawner_claw',
'botania:super_lava_pendant',
'botania:terraform_rod',
'botania:tornado_rod',
'botania:water_ring',
'buildinggadgets:gadget_destruction',
'chancecubes:chance_cube',
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
'cyclic:crafter',
'cyclic:elevation_wand',
'cyclic:empty_heart',
'cyclic:ender_book',
'cyclic:ender_controller',
'cyclic:ender_pearl_mounted',
'cyclic:ender_pearl_reuse',
'cyclic:ender_shelf',
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
'cyclic:tile_transporter_empty',
'cyclic:uncrafter',
'cyclic:water_candle',
'cyclic:wireless_item',
'electrodynamics:ingotsteel',
'extradisks:infinite_fluid_storage_block',
'extradisks:infinite_fluid_storage_disk',
'extradisks:infinite_fluid_storage_part',
'extradisks:infinite_storage_block',
'extradisks:infinite_storage_disk',
'extradisks:infinite_storage_part',
'paraglider:goddess_statue',
'paraglider:goron_goddess_statue',
'paraglider:horned_statue',
'paraglider:kakariko_goddess_statue',
'paraglider:rito_goddess_statue',
'paraglider:rito_goddess_statue',
'prefab:item_swift_blade_bronze',
'prefab:item_swift_blade_copper',
'prefab:item_swift_blade_diamond',
'prefab:item_swift_blade_gold',
'prefab:item_swift_blade_iron',
'prefab:item_swift_blade_netherite',
'prefab:item_swift_blade_obsidian',
'prefab:item_swift_blade_osmium',
'prefab:item_swift_blade_steel',
'prefab:item_swift_blade_stone',
'prefab:item_swift_blade_wood',
'tombstone:scroll_of_aquatic_life',
'tombstone:scroll_of_feather_fall',
'tombstone:scroll_of_frost_resistance',
'tombstone:scroll_of_knowledge',
'tombstone:scroll_of_lightning_resistance',
'tombstone:scroll_of_preservation',
'tombstone:scroll_of_purification',
'tombstone:scroll_of_reach',
'tombstone:scroll_of_true_sight',
'tombstone:scroll_of_unstable_intangibility'
];

onEvent('recipes', event => {

recipeRemoveJei.forEach(item => {
  event.remove({output: item})
});

event.remove({id: 'mysticalagriculture:mystical_fertilizer'})


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
  event.remove({id: 'armorplus:redstone_' + item});
  event.remove({id: 'armorplus:obsidian_' + item});
  });

armorPMatsWeapons.forEach(item => {
  event.remove({id: 'armorplus:obsidian_' + item});
});

// Assembly Lines Enchantments
const ieEnchantRemove = [
"mending",
"infinity",
"unbreaking",
];

ieEnchantRemove.forEach(item => {
  event.remove({id: 'assemblylinemachines:enchanted_book/' + item})
})


});