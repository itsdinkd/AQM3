// priority: 0
console.info('AQM3 -- Removing Items.... v1.0');
const removeJei = [
  "angelring:itemdiamondring",
  "armorplus:ender_dragon_boots_base",
  "armorplus:ender_dragon_chestplate_base",
  "armorplus:ender_dragon_helmet_base",
  "armorplus:ender_dragon_leggings_base",
  "armorplus:ender_dragon_boots",
  "armorplus:ender_dragon_chestplate",
  "armorplus:ender_dragon_helmet",
  "armorplus:ender_dragon_leggings",
  "armorplus:slayer_boots_base",
  "armorplus:slayer_chestplate_base",
  "armorplus:slayer_helmet_base",
  "irons_spellbooks:fireward_ring",
  "armorplus:slayer_leggings_base",
  "armorplus:slayer_boots",
  "armorplus:slayer_helmet",
  "armorplus:slayer_chestplate",
  "armorplus:slayer_leggings",
  "ob_core:lance_of_northern_star",
  "armorplus:soul_box",
  "assemblylinemachines:enhanced_mystium_chestplate",
  "assemblylinemachines:mystium_flight_harness",
  "botania:balance_cloak",
  "botania:blood_pendant",
  "botania:cocoon",
  "cyclic:sponge_lava",
  "botania:diving_rod",
  "ob_core:prospectors_pick",
  "evilcraft:blook",
  "botania:fel_pumpkin",
  "botania:flight_tiara_0",
  "botania:flight_tiara",
  "botania:laputa_shard",
  "botania:missile_rod",
  "iceandfire:silver_ore",
  "botania:smelt_rod",
  "botania:spawner_claw",
  "botania:super_lava_pendant",
  "botania:terraform_rod",
  "botania:tornado_rod",
  "botania:water_ring",
  "buildinggadgets:gadget_destruction",
  "chancecubes:scanner",
  "chanceglobe:chance_globe",
  "create_stuff_additions:crushed_tungsten",
  "create_stuff_additions:tungsten_nugget",
  "cyclic:antigravity",
  "cyclic:apple_chocolate",
  "cyclic:apple_chorus",
  "cyclic:apple_diamond",
  "cyclic:apple_emerald",
  "cyclic:apple_ender",
  "cyclic:apple_honey",
  "cyclic:apple_iron",
  "cyclic:apple_lapis",
  "cyclic:apple_prismarine",
  "cyclic:apple_sprout_emerald",
  "cyclic:beacon",
  "cyclic:build_scepter",
  "cyclic:charm_antipotion",
  "cyclic:charm_attack_speed",
  "cyclic:charm_fire",
  "cyclic:charm_home",
  "cyclic:charm_knockback_resistance",
  "cyclic:charm_longfall",
  "cyclic:charm_speed",
  "reliquary:angelheart_vial",
  "reliquary:angelic_feather",
  "reliquary:emperor_chalice",
  "reliquary:infernal_chalice",
  "cyclic:charm_ultimate",
  "cyclic:charm_void",
  "cyclic:charm_water",
  "cyclic:charm_wither",
  "cyclic:chorus_flight",
  "cyclic:chorus_spectral",
  "cyclic:crafter",
  "cyclic:elevation_wand",
  "cyclic:empty_heart",
  "cyclic:empty_heart",
  "cyclic:ender_book",
  "cyclic:ender_controller",
  "cyclic:ender_pearl_mounted",
  "cyclic:ender_pearl_reuse",
  "cyclic:ender_shelf",
  "cyclic:experience_food",
  "cyclic:experience_food",
  "cyclic:eye_teleport",
  "cyclic:fire_scepter",
  "cyclic:forester",
  "cyclic:generator_fluid",
  "cyclic:generator_food",
  "cyclic:generator_fuel",
  "cyclic:generator_item",
  "cyclic:glowing_helmet",
  "cyclic:gold_chain",
  "cyclic:heart",
  "cyclic:ice_scepter",
  "cyclic:lightning_scepter",
  "cyclic:mattock_nether",
  "cyclic:mattock_stone",
  "cyclic:mattock",
  "cyclic:miner",
  "cyclic:offset_scepter",
  "cyclic:randomize_scepter",
  "cyclic:replace_scepter",
  "cyclic:spawner_seeker",
  "cyclic:sprinkler",
  "cyclic:teleport_wand",
  "cyclic:teleport",
  "cyclic:terra_preta",
  "cyclic:tile_transporter_empty",
  "cyclic:tile_transporter",
  "cyclic:uncrafter",
  "cyclic:water_candle",
  "cyclic:flight",
  "cyclic:wireless_item",
  "cyclic:stirrups",
  "cyclic:stirrups_reverse",
  "enigmaticlegacy:ultimate_potion_lingering",
  "enigmaticlegacy:ultimate_potion_splash",
  "enigmaticlegacy:ultimate_potion",
  "evilcraft:broom",
  "evilcraft:spirit_reanimator",
  "extradisks:infinite_fluid_storage_block",
  "extradisks:infinite_fluid_storage_disk",
  "extradisks:infinite_fluid_storage_part",
  "extradisks:infinite_storage_block",
  "extradisks:infinite_storage_disk",
  "extradisks:infinite_storage_part",
  "futurepack:ore_tin_deepslate",
  "futurepack:ore_tin",
  "reliquary:ender_staff",
  "reliquary:alkahestry_tome",
  "cyclic:apple_sprout_diamond",
  "gardentools:irrigation_core",
  "gobber2:gobber2_hammer_end",
  "gobber2:gobber2_hammer_nether",
  "gobber2:gobber2_medallion_glowing",
  "gobber2:gobber2_ring_airwalking",
  "gobber2:gobber2_ring_ascent",
  "gobber2:gobber2_ring_blaze",
  "gobber2:gobber2_ring_farmer",
  "gobber2:gobber2_ring_husbandry",
  "gobber2:gobber2_ring_pyro",
  "gobber2:gobber2_ring_repair",
  "gobber2:gobber2_ring_swiftness",
  "gobber2:gobber2_ring_vision",
  "gobber2:gobber2_ring_stealth",
  "gobber2:gobber2_staff_ensnarement",
  "gobber2:gobber2_staff_farmer",
  "gobber2:gobber2_staff_harvest",
  "gobber2:gobber2_sword_traveler",
  "gobber2:gobber2_tree_axe_end",
  "gobber2:gobber2_tree_axe_nether",
  "gobber2:gobber2_hammer",
  "gobber2:gobber2_tree_axe",
  "gobber2:gobber2_ring_sunshine",
  "mekanism:creative_fluid_tank",
  "paraglider:goddess_statue",
  "paraglider:goron_goddess_statue",
  "paraglider:horned_statue",
  "paraglider:kakariko_goddess_statue",
  "paraglider:rito_goddess_statue",
  "paraglider:rito_goddess_statue",
  "prefab:item_swift_blade_bronze",
  "prefab:item_swift_blade_copper",
  "prefab:item_swift_blade_diamond",
  "prefab:item_swift_blade_gold",
  "prefab:item_swift_blade_iron",
  "prefab:item_swift_blade_netherite",
  "prefab:item_swift_blade_obsidian",
  "prefab:item_swift_blade_osmium",
  "prefab:item_swift_blade_steel",
  "prefab:item_swift_blade_stone",
  "prefab:item_swift_blade_wood",
  "reliquary:ender_staff",
  "reliquary:wraith_node",
  "reliquary:rod_of_lyssa",
  "reliquary:rending_gale",
  "reliquary:alkahestry_tome",
  "reliquary:infernal_tear",
  "reliquary:mob_charm",
  "reliquary:mob_charm_fragment",
  "reliquary:mob_charm_belt",
  "reliquary:infernal_chalice",
  "reliquary:midas_touchstone",
  "reliquary:void_tear",
  "tinkers_reforged:aluminum_ore",
  "tinkers_reforged:deepslate_aluminum_ore",
  "tinkers_reforged:raw_aluminum_block",
  "tinkers_reforged:raw_aluminum",
  "tombstone:book_of_disenchantment",
  "tombstone:book_of_magic_impregnation",
  "tombstone:book_of_recycling",
  "tombstone:book_of_repairing",
  "tombstone:dust_of_frost",
  "tombstone:dust_of_vanishing",
  "tombstone:lost_tablet",
  "tombstone:scroll_of_reach",
  "tombstone:tablet_of_assistance",
  "tombstone:tablet_of_home",
  "tombstone:tablet_of_recall",
  "reliquary:infernal_tear",
  "futurepack:timemanipulator",
  "cyclic:flute_summoning",
  "cyclic:harvester",
  "cyclic:crusher",
  "cyclic:user",
  'gobber2:gobber2_ring_phoenix',
  "productivebees:nether_gobber",
  "productivebees:end_gobber",
  "productivebees:gobber",
  "productivebees:ice_dragonsteel",
  "productivebees:fire_dragonsteel",
  "productivebees:lightning_dragonsteel",
  "productivebees:ice_dragonsteel_incubation",
  "productivebees:fire_dragonsteel_incubation",
  "productivebees:lightning_dragonsteel_incubation",
  "productivebees:nether_gobber_incubation",
  "productivebees:gobber_incubation",
  "productivebees:end_gobber_incubation"
  ];

onEvent('rei.hide.items', event => {
  removeJei.forEach(item => {
    event.hide(item)
  })

  event.hide(Item.of('reliquary:mob_charm').ignoreNBT())
  event.hide(Item.of('reliquary:mob_charm').ignoreNBT())

  const rebornStorageDisksandPartsREI = [
    "large_",
    "larger_",
    "small_",
    "medium_"
  ];
  rebornStorageDisksandPartsREI.forEach((item) => {
    event.hide("rebornstorage:" + item + "fluid_disk")
    event.hide("rebornstorage:" + item + "item_disk")
    event.hide("rebornstorage:" + item + "fluid_disk_part")
    event.hide("rebornstorage:" + item + "item_disk_part")
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

  event.hide('botania:flight_tiara')
  event.hide('botania:flight_tiara_0')
  event.hide('botania:flight_tiara_1')
  event.hide('botania:flight_tiara_2')
  event.hide('botania:flight_tiara_3')
  event.hide('botania:flight_tiara_4')
  event.hide('botania:flight_tiara_5')
  event.hide('botania:flight_tiara_6')
  event.hide('botania:flight_tiara_7')
  event.hide('botania:flight_tiara_8')

})

onEvent('rei.add.items', event => {
  event.add('kubejs:star_of_icon');
  event.add('kubejs:demon_pearl');
  event.add('kubejs:corrupted_emerald');
});

onEvent('rei.information', event => {
  event.add('kubejs:star_of_icon', 'Boss Item', ['To Retrieve..', 'Kill Icon of Sin']);
  event.add('kubejs:demon_pearl', 'Boss Item', ['To Retrieve..', 'Kill Arch Maykr']);
  event.add('kubejs:corrupted_emerald', 'Boss Item', ['To Retrieve..', 'Kill Mother Demon']);
  event.add('enigmaticlegacy:oblivion_stone', 'How to Use', [
  'In it\'s initial state, keystone does nothing due to having it\'s list empty. You will have to combine it in a crafting grid with any item or block in order to add it to that list',
  '',
  'Combining Keystone',
  '',
  'The process can be repeated until all desired items are added. The list itself, however, has some limitations:',
  '',
  '- After adding 25 or more items to the list, it will be fixed at displaying exactly 25 items in Ctrl tooltip. Those items will be chosen randomly from whole list and constantly shuffled, making it basically unreadable for human\'s eyes;',
  '- After adding 100 items to the list, it will be impossible to add more via crafting grid. Technically, keystones with larger lists still could be obtained by using commands or NBT editors;',
  '- List completely ignores damage, enchants and NBT of added items. Therefore, it\'s not possible to specify seperate item types that are divided by those parameters (for instance - if any vanilla Splash Potion is combined with the keystone, it will consume any Splash Potions regardless of effects);'
  ]);
});