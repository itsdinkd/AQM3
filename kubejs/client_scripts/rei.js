// priority: 0

console.info('AQM3 -- Removing Items.... v1.0');
const removeJei = [
'angelring:itemdiamondring',
'armorplus:soul_box',
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
'chancecubes:scanner',
'cyclic:crafter',
'cyclic:heart',
'cyclic:empty_heart',
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
'cyclic:gold_chain',
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
'cyclic:wireless_item',
'essentials:wither_cannon',
'extradisks:infinite_fluid_storage_block',
'extradisks:infinite_fluid_storage_disk',
'extradisks:infinite_fluid_storage_part',
'extradisks:infinite_storage_block',
'extradisks:infinite_storage_disk',
'extradisks:infinite_storage_part',
'gobber2:gobber2_boots_dragon',
'gobber2:gobber2_chestplate_dragon',
'gobber2:gobber2_helmet_dragon',
'gobber2:gobber2_leggings_dragon',
'gobber2:gobber2_medallion_glowing',
'gobber2:gobber2_ring_airwalking',
'gobber2:gobber2_ring_ascent',
'gobber2:gobber2_ring_blaze',
'gobber2:gobber2_ring_farmer',
'gobber2:gobber2_ring_husbandry',
'gobber2:gobber2_ring_pyro',
'gobber2:gobber2_ring_repair',
'gobber2:gobber2_ring_swiftness',
'gobber2:gobber2_ring_vision',
'gobber2:gobber2_staff_farmer',
'gobber2:gobber2_staff_harvest',
'gobber2:gobber2_sword_traveler',
'paraglider:goddess_statue',
'paraglider:kakariko_goddess_statue',
'paraglider:goron_goddess_statue',
'paraglider:rito_goddess_statue',
'paraglider:rito_goddess_statue',
'paraglider:horned_statue',
'tombstone:book_of_disenchantment',
'tombstone:book_of_magic_impregnation',
'tombstone:book_of_repairing',
'tombstone:dust_of_frost',
'tombstone:book_of_recycling',
'tombstone:dust_of_vanishing',
'tombstone:lost_tablet',
'tombstone:scroll_of_reach',
'tombstone:tablet_of_assistance',
'tombstone:tablet_of_home',
'tombstone:tablet_of_recall'
];

onEvent('jei.hide.items', event => {
  removeJei.forEach(item => {
    event.hide(item)
  })
})

onEvent('rei.add.items', event => {
  event.add('kubejs:star_of_icon');
  event.add('kubejs:demon_pearl');
  event.add('kubejs:corrupted_emerald');
});

onEvent('rei.information', event => {
  event.add('kubejs:star_of_icon', 'Boss Item', ['To Retrieve..', 'Kill Icon of Sin']);
  event.add('kubejs:demon_pearl', 'Boss Item', ['To Retrieve..', 'Kill Tyrant']);
  event.add('kubejs:corrupted_emerald', 'Boss Item', ['To Retrieve..', 'Kill Mother Demon']);
});