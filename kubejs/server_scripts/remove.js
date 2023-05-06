// priority: 0
const recipeRemoveJei = [
"advancedperipherals:chunk_controller",
"angelring:itemdiamondring",
"armorplus:ender_dragon_boots_base",
"armorplus:ender_dragon_boots",
"armorplus:ender_dragon_chestplate_base",
"armorplus:ender_dragon_chestplate",
"armorplus:ender_dragon_helmet_base",
"armorplus:ender_dragon_helmet",
"armorplus:ender_dragon_leggings_base",
"armorplus:ender_dragon_leggings",
"armorplus:slayer_boots_base",
"armorplus:slayer_boots",
"armorplus:slayer_chestplate_base",
"armorplus:slayer_chestplate",
"armorplus:slayer_helmet_base",
"armorplus:slayer_helmet",
"armorplus:slayer_leggings_base",
"armorplus:slayer_leggings",
"armorplus:soul_box",
"assemblylinemachines:copper_rod",
"assemblylinemachines:enhanced_mystium_chestplate",
"assemblylinemachines:iron_rod",
"assemblylinemachines:mystium_flight_harness",
"assemblylinemachines:quantum_link",
"botania:balance_cloak",
"botania:blood_pendant",
"botania:cocoon",
"botania:divining_rod",
"botania:fel_pumpkin",
"botania:flight_tiara_0",
"botania:flight_tiara",
"botania:laputa_shard",
"botania:missile_rod",
"botania:smelt_rod",
"botania:rod"
"botania:spawner_claw",
"botania:super_lava_pendant",
"botania:terraform_rod",
"botania:tornado_rod",
"botania:water_ring",
"buildersaddition:iron_rod",
"buildinggadgets:gadget_destruction",
"chancecubes:chance_cube",
"chanceglobe:chance_globe",
"create_stuff_additions:crushed_tungsten",
"create_stuff_additions:tungsten_nugget",
"createaddition:gold_rod",
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
"cyclic:charm_ultimate",
"cyclic:charm_void",
"cyclic:charm_water",
"cyclic:charm_wither",
"cyclic:chorus_flight",
"cyclic:chorus_spectral",
"cyclic:crafter",
"cyclic:crusher",
"cyclic:elevation_wand",
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
"cyclic:flight",
"cyclic:flute_summoning",
"cyclic:forester",
"cyclic:generator_fluid",
"cyclic:generator_food",
"cyclic:generator_fuel",
"cyclic:generator_item",
"cyclic:glowing_helmet",
"cyclic:harvester",
"cyclic:heart_empty",
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
"cyclic:sponge_lava",
"cyclic:sprinkler",
"cyclic:stirrups_reverse",
"cyclic:stirrups",
"cyclic:teleport_wand",
"cyclic:teleport",
"cyclic:terra_preta",
"cyclic:tile_transporter_empty",
"cyclic:uncrafter",
"cyclic:user",
"cyclic:water_candle",
"cyclic:wireless_item",
"evilcraft:blook",
"evilcraft:broom_part",
"evilcraft:broom",
"evilcraft:spirit_reanimator",
"extradisks:infinite_fluid_storage_block",
"extradisks:infinite_fluid_storage_disk",
"extradisks:infinite_fluid_storage_part",
"extradisks:infinite_storage_block",
"extradisks:infinite_storage_disk",
"extradisks:infinite_storage_part",
"futurepack:iron_stick",
"gardentools:irrigation_core",
"ob_core:lance_of_northern_star",
"ob_core:prospectors_pick",
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
"productivebees:end_gobber",
"productivebees:gobber",
"reliquary:mob_charm",
"silentgear:iron_rod",
"thermal:steel_dust",
"thermal:steel_ingot",
"thermal:steel_nugget",
"tombstone:scroll_of_aquatic_life",
"tombstone:scroll_of_feather_fall",
"tombstone:scroll_of_frost_resistance",
"tombstone:scroll_of_knowledge",
"tombstone:scroll_of_lightning_resistance",
"tombstone:scroll_of_preservation",
"tombstone:scroll_of_purification",
"tombstone:scroll_of_reach",
"tombstone:scroll_of_true_sight",
"tombstone:scroll_of_unstable_intangibility",
"productivebees:nether_gobber"
];

onEvent("recipes", event => {

recipeRemoveJei.forEach(item => {
  event.remove({output: item})
});

event.remove({ id: "mysticalagriculture:mystical_fertilizer"})
event.remove({ id: "mysticalagriculture:augment/flight" });
event.remove({ id: "productivebees:bee_breeding/gobber/end_gobber_bee" });
event.remove({ id: "productivebees:bee_breeding/gobber/nether_gobber_bee" });
event.remove({ id: "productivebees:bee_breeding/gobber/gobber_bee" });
// Armor Plus
const armorPMats = [
  "helmet",
  "chestplate",
  "leggings",
  "boots"
]

const armorPMatsWeapons = [
  "sword",
  "battle_axe",
  "mace",
  "bow",
  "pickaxe"
]

armorPMats.forEach(item => {
  event.remove({id: "armorplus:redstone_" + item});
  event.remove({id: "armorplus:obsidian_" + item});
  });

armorPMatsWeapons.forEach(item => {
  event.remove({id: "armorplus:obsidian_" + item});
});

// Assembly Lines Enchantments
const ieEnchantRemove = [
  "mending",
  "infinity",
  "unbreaking",
];

ieEnchantRemove.forEach(item => {
  event.remove({id: "assemblylinemachines:enchanted_book/" + item})
})

const rebornStorageDisksandParts = [
  "large_",
  "larger_",
  "small_",
  "medium_"
];
rebornStorageDisksandParts.forEach((item) => {
  event.remove({output: "rebornstorage:" + item + "fluid_disk"})
  event.remove({output: "rebornstorage:" + item + "item_disk"})
  event.remove({output: "rebornstorage:" + item + "fluid_disk_part"})
  event.remove({output: "rebornstorage:" + item + "item_disk_part"})
})

});