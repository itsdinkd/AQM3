// Another Quality Modpack 3

// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

console.info('AQM3 -- General Balancing Recipes)');

const gDragon = "gobber2:dragon_star";
const gEndIngot = "gobber2:gobber2_ingot_end";
const gNetherIngot = "gobber2:gobber2_ingot_nether";

onEvent('recipes', event => {

// Origins
event.shaped("origins:orb_of_origin", ['123'],
{
  1:"botania:mana_diamond",
  2:"hexerei:mandrake_root",
  3:"minecraft:netherite_ingot"
})

event.replaceInput({id: "ob_core:paladin_leggings"}, "ob_core:witchstone_shard", "undergarden:masticator_scales")
event.replaceInput({id: "ob_core:paladin_chestplate"}, "ob_core:witchstone_shard", "ob_aquamirae:abyssal_amethyst")
// Prefab

event.remove({ output: "prefab:item_starter_farm" });
event.shaped("prefab:item_starter_farm", [
["minecraft:wheat_seeds","croptopia:corn_seed", "minecraft:wheat_seeds"],
["prefab:item_bundle_of_timber", "prefab:block_compressed_dirt","prefab:item_bundle_of_timber"],
["minecraft:water_bucket","mysticalagriculture:inferium_seeds", "minecraft:white_wool"],
]);


// // Moderate Farm
 event.remove({ output: "prefab:item_moderate_farm" });
 event.shaped("prefab:item_moderate_farm", [
 ["prefab:item_compressed_chest","prefab:block_compressed_obsidian", "prefab:block_double_compressed_dirt"],
 ["prefab:item_heap_of_timber", "prefab:item_starter_farm","prefab:item_heap_of_timber"],
 ["prefab:item_pallet_of_bricks","mysticalagriculture:prudentium_block", "prefab:item_pallet_of_bricks"],
 ]);

// // Advance Farm
 event.remove({ output: "prefab:item_advanced_farm" });
 event.shaped("prefab:item_advanced_farm", [
 ["prefab:block_triple_compressed_stone","prefab:block_double_compressed_obsidian", "prefab:block_triple_compressed_stone"],
 ["prefab:item_ton_of_timber", "prefab:item_moderate_farm","prefab:item_ton_of_timber"],
 ["prefab:item_coil_of_lanterns","mysticalagriculture:tertium_block", "prefab:item_pallet_of_bricks"],
 ]);


///////////////////////// Cyclic
// Scaffold Replace
event.replaceInput(
  { id:"cyclic:scaffold_replace" },
    "minecraft:dirt",
    "compressium:dirt_2"
);
event.replaceInput(
  { id:"cyclic:scaffold_replace" },
    "minecraft:stick",
    "prefab:item_bundle_of_timber"
);
event.replaceInput(
  { id:"cyclic:scaffold_fragile" },
    "minecraft:stick",
    "prefab:item_bundle_of_timber"
);
event.replaceInput(
  { id:"cyclic:scaffold_responsive" },
    "minecraft:stick",
    "prefab:item_bundle_of_timber"
);
// Mattock
event.replaceInput(
  { id:"cyclic:mattock" },
    "minecraft:quartz_block",
    "gobber2:gobber2_ingot"
);
// Evoker Fang
event.replaceInput(
  { id:"cyclic:evoker_fang" },
    "minecraft:cobweb",
    "enigmaticlegacy:ender_rod"
);
event.replaceInput(
  { id:"cyclic:evoker_fang" },
    "minecraft:purple_stained_glass",
    "gobber2:dragon_star"
);

event.replaceInput(
  { id:"cyclic:charm_crit" },
    "minecraft:diamond",
    "mysticalagriculture:inferium_ingot"
);

event.replaceInput(
  { id:"cyclic:solidifier/solidifier_obsflower" },
    "minecraft:amethyst_block",
    "gobber2:gobber2_ingot_end"
);

event.replaceInput(
  { id:"cyclic:charm_creeper" },
    "cyclic:eye_teleport",
    "thermal:lightning_tnt"
);

event.replaceInput(
  { id:"cyclic:charm_magicdefense" },
    "cyclic:heart_empty",
    "mna:brimstone_charm"
);

event.replaceInput(
  { id:"cyclic:charm_venom" },
    "minecraft:gold_nugget",
    "evilcraft:poison_bottle"
);

event.replaceInput(
  { id:"cyclic:charm_wing" },
    "minecraft:copper_ingot",
    "gobber2:gobber2_glob"
);

event.replaceInput(
  { id:"cyclic:charm_world" },
    "minecraft:feather",
    "gobber2:gobber2_rod"
);

event.replaceInput(
  { id:"cyclic:apple_sprout_diamond" },
    "cyclic:apple_chocolate",
    "mysticalagriculture:supremium_essence"
);

// event.replaceInput(
//   { id:"cyclic:apple_sprout_emerald" },
//     "cyclic:apple_chocolate",
//     "mysticalagradditions:insanium_essence"
// );

event.replaceInput(
  { id:"cyclic:charm_luck" },
    "minecraft:flint_block",
    "alexsmobs:shark_tooth"
);
event.replaceInput(
  { id:"cyclic:carrot_ender" },
    "minecraft:cake",
    "alexsmobs:dropbear_claw"
);
event.replaceInput(
  { id:"cyclic:diamond_carrot_health" },
    "minecraft:diamond",
    "alexsmobs:warped_muscle"
);
event.replaceInput(
  { id:"cyclic:redstone_carrot_speed" },
    "minecraft:redstone",
    "alexsmobs:cachalot_whale_tooth"
);
event.replaceInput(
  { id:"cyclic:emerald_carrot_jump" },
    "minecraft:emerald",
    "alexsmobs:emu_feather"
);
// cyclic prospector
event.remove({output: 'cyclic:prospector'});
event.shaped('cyclic:prospector', ['  g', ' g ', 'gsc'],
  {
    g: 'gobber2:dragon_star',
    c: 'compressium:quartz_4',
    s: 'itemcollectors:basic_collector'
  });

event.replaceInput(
  { id:"cyclic:quiver_damage" },
    "minecraft:arrow",
    "armorplus:super_star_arrow"
);
event.replaceInput(
  { id:"cyclic:quiver_lightning" },
    "minecraft:arrow",
    "armorplus:guardian_arrow"
);
event.replaceInput(
  { id:"cyclic:charm_magicdefense" },
    "#forge:nuggets/copper",  
    "ars_nouveau:end_fiber"
);

// cyclic:collector - gets replaced by item collector basic
event.remove({output: 'cyclic:collector'})
event.shaped('cyclic:collector', [
[null, 'minecraft:ender_pearl', null],
[null, '#forge:obsidian', null],
['#forge:obsidian', '#forge:obsidian', '#forge:obsidian'],
]).replaceIngredient('cyclic:collector', 'itemcollectors:basic_collector')

////////////////////////// Doom
// Argent Tools
      var doom_tools = [
    "axe",
    "pickaxe",
    "paxel",
    ];

    doom_tools.forEach(function (item, index) {
      event.remove({output: "doom:argent_" + item});
    });

// Rainbow Linker furnace
event.replaceInput({output: "ironfurnaces:item_linker"}, "minecraft:netherite_nugget", "extendedcrafting:the_ultimate_ingot");

// Argent Plate
event.replaceInput(
{ id: "doom:argent_plate" },
"minecraft:iron_ingot",
"gobber2:gobber2_ingot_nether"
);

// waystones
event.replaceInput(
  { id:"waystones:warp_stone" },
    "minecraft:ender_pearl",
    "gobber2:gobber2_ingot"
);

event.replaceInput(
  { id:"waystones:warp_stone" },
    "minecraft:emerald",
    "hexerei:animal_fat"
);

//mining gadgets - empty upgrade
event.replaceInput(
{ id: "mininggadgets:upgrade_empty"},
"minecraft:lapis_lazuli",
"gobber2:gobber2_links_end"
);

event.replaceInput(
{ id: "mininggadgets:upgrade_empty"},
"minecraft:diamond",
"assemblylinemachines:novasteel_ingot"
);

event.replaceInput(
{ id: "mininggadgets:upgrade_empty"},
"minecraft:redstone",
"extendedcrafting:luminessence"
);

//mining gadgets - mk2
event.replaceInput(
{ id: "mininggadgets:mininggadget_fancy"},
"minecraft:redstone",
"mininggadgets:mininggadget_simple"
);

//mining gadgets - mk3
event.replaceInput(
{ id: "mininggadgets:mininggadget"},
"minecraft:redstone",
"mininggadgets:mininggadget_fancy"
);

// Waystone return scroll
event.replaceInput(
{ id: "waystones:return_scroll"},
"#forge:dyes/purple",
"gobber2:gobber2_globette"
);

// Mystical Agriculture
const banMaItems =  [
    'apatite',
    'chrome',
    'fluix',
    'graphite',
    'invar',
    'iridium',
    'mithril',
    'rubber',
    'ruby',
    'sapphire',
    'tungsten'
  ]

banMaItems.forEach(item => {
    ['seeds', 'essence'].forEach(itemType => {
      event.remove({output: `mysticalagriculture:${item}_${itemType}`})
      event.remove({input: `mysticalagriculture:${item}_${itemType}`})
    })
  });

// End Game -- Angel Ring
// event.recipes.create.mechanical_crafting(
// {
//   "pattern": [
//     "1AGA2",
//     "PAEAP",
//     "QPSPQ",
//     "PACAP",
//     "3AGA4"
//   ],
//   "key": {
//     "P": {
//       "item": "gobber2:dragon_star"
//     },
//     "S": {
//       "item": "extendedcrafting:ultimate_singularity"
//     },
//     "A": {
//       "item": "mysticalagradditions:insanium_gemstone_block"
//     }
// ,   "C": {
//       "item": "alexsmobs:dimensional_carver"
//     },
//     "E": {
//       "item": "assemblylinemachines:entropy_reactor_upgrade_entropic_harnesser"
//     },
//     "1": {
//       "item": "meetyourfight:phantoplasm"
//     },
//     "2": {
//       "item": "meetyourfight:fortunes_favor"
//     },
//     "3": {
//       "item": "meetyourfight:mossy_tooth"
//     },
//     "4": {
//       "item": "assemblylinemachines:entropy_reactor_upgrade_entropic_harnesser"
//     },
//     "G": {
//       "item": "armorplus:soul_slayer"
//     },
//     "Q": {
//       "item": "extradisks:1048576k_fluid_storage_part"
//     }
//   },
//   "result": {
//     "item": "angelring:itemring",
//     "count": 1
//   },
//   "acceptMirrored": false
// });
  // reliquary void tear to nebulous heart
  event.replaceInput({}, 'reliquary:void_tear', "reliquary:nebulous_heart")

  
  event.remove({output: 'angelring:itemring'});
  // event.recipes.extendedcrafting.shapedTable('angelring:itemring', [
  //  'diwf fMid',
  //  'Idi   idI',
  //  'c1 iXi 2c',
  //  'x ICiFI 8',
  //  '  Ei iE  ',
  //  '9 IFisI 0',
  //  'c3 izi Tc',
  //  'Idi   idI',
  //  'di65 57id'
  //  ],
  //  {
  //    d: 'gobber2:dragon_star',
  //    C: 'alexsmobs:dimensional_carver',
  //    i: 'mysticalagriculture:master_infusion_crystal',
  //    z: 'extendedcrafting:the_ultimate_ingot',
  //    F: 'extradisks:1048576k_fluid_storage_part',
  //    E: 'assemblylinemachines:entropy_reactor_upgrade_entropic_harnesser',
  //    1: 'minecraft:apple',
  //    2: 'minecraft:apple',
  //    3: 'minecraft:apple',
  //    s: 'armorplus:soul_slayer',
  //    X: 'extendedcrafting:the_ultimate_catalyst',
  //    I: 'botania:gaia_ingot',
  //    T: 'assemblylinemachines:novasteel_fluid_tank',
  //    f: 'assemblylinemachines:chaotic_fertilizer',
  //    c: 'minecraft:apple',
  //    w: 'mythicbotany:mjoellnir',
  //    5: 'ironfurnaces:million_furnace',
  //    6: '',
  //    7: '',
  //    x: 'blue_skies:summoner_trophy',
  //    8: 'blue_skies:alchemist_trophy',
  //    9: 'blue_skies:starlit_crusher_trophy',
  //    0: 'blue_skies:arachnarch_trophy',
  //    M: 'minecraft:apple'
  //  })

  event.remove({id: 'extradisks:part/1024k_storage_part'})
  event.shaped('extradisks:1024k_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:256k_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'refinedstorage:advanced_processor',
    t: 'minecraft:emerald_block'
  });

  event.remove({id: 'refinedstorage:4096k_fluid_storage_part'})
  event.shaped('refinedstorage:4096k_fluid_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'refinedstorage:1024k_fluid_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'minecraft:bucket',
    t: '#forge:ingots/netherite'
  });

  event.remove({id: 'extradisks:part/4096k_storage_part'})
  event.shaped('extradisks:4096k_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:1024k_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'refinedstorage:advanced_processor',
    t: '#forge:ingots/netherite'
  });

  event.remove({id: 'extradisks:part/16384k_fluid_storage_part'})
  event.shaped('extradisks:16384k_fluid_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'refinedstorage:4096k_fluid_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'minecraft:bucket',
    t: 'minecraft:netherite_block'
  });

  event.remove({id: 'extradisks:part/16384k_storage_part'})
  event.shaped('extradisks:16384k_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:4096k_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'refinedstorage:advanced_processor',
    t: 'minecraft:netherite_block'
  });

  event.remove({id: 'extradisks:part/65536k_fluid_storage_part'})
  event.shaped('extradisks:65536k_fluid_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:16384k_fluid_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'minecraft:bucket',
    t: '#forge:ingots/azure_electrum'
  });

  event.remove({id: 'extradisks:part/65536k_storage_part'})
  event.shaped('extradisks:65536k_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:16384k_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'refinedstorage:advanced_processor',
    t: '#forge:ingots/azure_electrum'
  });

  event.remove({id: 'extradisks:part/262144k_fluid_storage_part'})
  event.shaped('extradisks:262144k_fluid_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:65536k_fluid_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'minecraft:bucket',
    t: '#forge:ingots/mystium'
  });

  event.remove({id: 'extradisks:part/262144k_storage_part'})
  event.shaped('extradisks:262144k_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:65536k_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'refinedstorage:advanced_processor',
    t: '#forge:ingots/mystium'
  });

  event.remove({id: 'extradisks:part/1048576k_fluid_storage_part'})
  event.shaped('extradisks:1048576k_fluid_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:262144k_fluid_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'minecraft:bucket',
    t: 'gobber2:dragon_star'
  });

  event.remove({id: 'extradisks:part/1048576k_storage_part'})
  event.shaped('extradisks:1048576k_storage_part', ['ltl', 'grg', 'lgl'],
  {
    g: 'extradisks:262144k_storage_part',
    l: 'refinedstorage:advanced_processor',
    r: 'refinedstorage:advanced_processor',
    t: 'gobber2:dragon_star'
  });

// Chargers t1 - t3
event.replaceInput(
{ id: "chargers:charger_t1"},
"minecraft:iron_ingot",
"gobber2:gobber2_ingot"
);
event.replaceInput(
{ id: "chargers:charger_t2"},
"minecraft:gold_ingot",
"gobber2:gobber2_ingot_end"
);
event.replaceInput(
{ id: "chargers:charger_t3"},
"minecraft:diamond",
"gobber2:gobber2_ingot_end"
);
event.replaceInput(
{ id: "chargers:charger_t4"},
"minecraft:netherite_ingot",
"gobber2:dragon_star"
);

// wireless charger
event.replaceInput(
{ id: "chargers:wireless_charger"},
"minecraft:redstone_block",
"chargers:charger_t1"
);
event.replaceInput(
{ id: "chargers:wireless_charger"},
"minecraft:iron_ingot",
"gobber2:gobber2_ingot"
);

// Compact Machines
event.replaceInput(
{ id: "compactmachines:machine_tiny"},
"#minecraft:planks",
"refinedstorage:4k_storage_part"
);

event.replaceInput(
{ id: "compactmachines:machine_small"},
"minecraft:iron_block",
"refinedstorage:64k_storage_part"
);

event.replaceInput(
{ id: "compactmachines:machine_normal"},
"minecraft:gold_block",
"extradisks:256k_storage_part"
);

event.replaceInput(
{ id: "compactmachines:machine_large"},
"#chipped:obsidian",
"extradisks:1024k_storage_part"
);

event.replaceInput(
{ id: "compactmachines:machine_giant"},
"minecraft:diamond_block",
"extradisks:4096k_storage_part"
);

event.replaceInput(
{ id: "compactmachines:machine_maximum"},
"minecraft:emerald_block",
"extradisks:16384k_storage_part"
);

// Explorer Compass
 event.replaceInput(
 { id: "explorerscompass:explorers_compass"},
 "minecraft:compass",
 "naturescompass:naturescompass"
 );

// Simple Planes Propeller

// event.remove({ output: "simpleplanes:propeller" });
//   event.shaped('simpleplanes:propeller', ['i i',' g ', 'i i'],
//   {
//     i: 'minecraft:iron_ingot',
//     g: 'gobber2:gobber2_rod_nether'
//   });

// // Simple Planes Booster
// event.replaceInput(
//  { id: "simpleplanes:booster"},
//  "minecraft:iron_ingot",
//  "gobber2:gobber2_ingot_end"
//  );

// // Simple Planes Electric Engine
// event.replaceInput(
//  { id: "simpleplanes:electric_engine"},
//  "minecraft:blaze_rod",
//  "minecraft:elytra"
//  );

// // Simple Planes Booster
// event.replaceInput(
//  { id: "simpleplanes:furnace_engine"},
//  "minecraft:blast_furnace",
//  "ironfurnaces:obsidian_furnace"
//  );

// Chance Cubes Pendents
event.replaceInput(
 { id: "chancecubes:tier_1_pendant_crafting"},
 "minecraft:lapis_block",
 "mysticalagriculture:inferium_gemstone_block"
 );

event.replaceInput(
 { id: "chancecubes:tier_2_pendant_crafting"},
 "minecraft:lapis_block",
 "mysticalagriculture:prudentium_gemstone_block"
 );

event.replaceInput(
 { id: "chancecubes:tier_3_pendant_crafting"},
 "minecraft:lapis_block",
 "mysticalagriculture:tertium_gemstone_block"
 );

// Doggy Talents Bone doggytalents:master_treat
event.replaceInput(
 { id: "doggytalents:training_treat"},
 "minecraft:string",
 "gobber2:gobber2_globette"
 );

event.replaceInput(
 { id: "doggytalents:master_treat"},
 "minecraft:diamond",
 "tombstone:impregnated_diamond"
 );

event.replaceInput(
 { id: "doggytalents:dire_treat"},
 "minecraft:end_stone",
 "extendedcrafting:ender_star"
 );


event.replaceInput(
{ id: "enigmaticlegacy:the_infinitum" },
"minecraft:netherite_ingot",
"gobber2:dragon_star"
)

event.replaceInput(
{ id: "enigmaticlegacy:the_twist" },
"minecraft:netherite_ingot",
"gobber2:gobber2_ingot_end"
)

event.replaceInput(
{ id: "enigmaticlegacy:ender_slayer" },
"minecraft:obsidian",
"gobber2:gobber2_block_end"
)

event.replaceInput(
{ id: "enigmaticlegacy:ender_ring" },
"minecraft:ender_chest",
"gobber2:gobber2_ring_enderchest"
)

event.replaceInput(
{ id: "enigmaticlegacy:berserk_emblem" },
"minecraft:netherite_ingot",
"mysticalagriculture:imperium_ingot"
)

event.replaceInput(
{ id: "enigmaticlegacy:twisted_core" },
"minecraft:redstone",
"mythicbotany:exoblaze"
)

// Entangled

event.replaceInput(
{ id: "entangled:block"},
"minecraft:obsidian",
"oresabovediamonds:black_opal"
);

event.replaceInput(
{ id: "entangled:item"},
"minecraft:obsidian",
"oresabovediamonds:black_opal"
);

event.replaceInput(
{ id: "productivebees:upgrades/comb_block"},
"minecraft:item_frame",
"mysticalagriculture:prosperity_gemstone"
);

})