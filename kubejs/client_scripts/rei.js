// priority: 0

console.info('AQM3 -- Removing Items.... v1.0');
const removeJei = [
'angelring:itemdiamondring',
'armorplus:soul_box',
'buildinggadgets:gadget_destruction',
'chanceglobe:chance_globe',
'cyclic:antigravity',
'cyclic:apple_chocolate',
'cagedmobs:dnasamplernetherite',
'cyclic:apple_chorus',
'cyclic:ender_shelf',
'cyclic:ender_controller',
'cyclic:apple_diamond',
'cyclic:apple_emerald',
'cyclic:apple_ender',
'cyclic:apple_honey',
'cyclic:apple_iron',
'cyclic:apple_lapis',
'cyclic:apple_prismarine',
'cyclic:apple_sprout_emerald',
'cyclic:beacon',
'enigmaticlegacy:ultimate_potion',
'enigmaticlegacy:ultimate_potion_splash',
'enigmaticlegacy:ultimate_potion_lingering',
'chancecubes:scanner',
'cyclic:tile_transporter_empty',
'cyclic:tile_transporter',
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

// refined storage colors removal
let rsColors = [
'white',
'orange',
'magenta',
'light_blue',
'yellow',
'blue',
'lime',
'pink',
'gray',
'light_gray',
'cyan',
'purple',
'brown',
'green',
'red',
'black'
];

rsColors.forEach(item => {
  event.hide('refinedstorage:' + item + '_grid')
  event.hide('refinedstorage:' + item + '_creative_controller')
  event.hide('refinedstorage:' + item + '_controller')
  event.hide('refinedstorage:' + item + '_crafting_grid')
  event.hide('refinedstorage:' + item + '_fluid_grid')
  event.hide('refinedstorage:' + item + '_pattern_grid')
  event.hide('refinedstorage:' + item + '_network_receiver')
  event.hide('refinedstorage:' + item + '_network_transmitter')
  event.hide('refinedstorage:' + item + '_relay')
  event.hide('refinedstorage:' + item + '_detector')
  event.hide('refinedstorage:' + item + '_detector')
  event.hide('refinedstorage:' + item + '_security_manager')
  event.hide('refinedstorage:' + item + '_wireless_transmitter')
  event.hide('refinedstorage:' + item + '_disk_manipulator')
  event.hide('refinedstorage:' + item + '_crafter_manager')
  event.hide('refinedstorage:' + item + '_crafter')
  event.hide('refinedstorage:' + item + '_crafting_monitor')
});


})

onEvent('rei.add.items', event => {
  event.add('kubejs:star_of_icon');
  event.add('kubejs:demon_pearl');
  event.add('kubejs:corrupted_emerald');
});

onEvent('rei.information', event => {
  event.add('minecraft:spawner', 'Spawning Disabled', ['Silktouch on spawners is only enabled so you can use it for the Caged Mob recipe', '', 'Placing this spawner down will only spawn pigs, meaning its disabled']);
  event.add('kubejs:star_of_icon', 'Boss Item', ['To Retrieve..', 'Kill Icon of Sin']);
  event.add('kubejs:demon_pearl', 'Boss Item', ['To Retrieve..', 'Kill Tyrant']);
  event.add('kubejs:corrupted_emerald', 'Boss Item', ['To Retrieve..', 'Kill Mother Demon']);
  event.add('enigmaticlegacy:oblivion_stone', 'How to Use', [
  "In it's initial state, keystone does nothing due to having it's list empty. You will have to combine it in a crafting grid with any item or block in order to add it to that list",
  "",
  "Combining Keystone",
  "",
  "The process can be repeated until all desired items are added. The list itself, however, has some limitations:",
  "",
  "- After adding 25 or more items to the list, it will be fixed at displaying exactly 25 items in Ctrl tooltip. Those items will be chosen randomly from whole list and constantly shuffled, making it basically unreadable for human's eyes;",
  "- After adding 100 items to the list, it will be impossible to add more via crafting grid. Technically, keystones with larger lists still could be obtained by using commands or NBT editors;",
  "- List completely ignores damage, enchants and NBT of added items. Therefore, it's not possible to specify seperate item types that are divided by those parameters (for instance - if any vanilla Splash Potion is combined with the keystone, it will consume any Splash Potions regardless of effects);"
  ]);
});