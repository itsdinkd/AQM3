// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

console.info('AQM3 -- Modifying Recipes)');

const gDragon = "gobber2:dragon_star";
const gEndIngot = "gobber2:gobber2_ingot_end";
const gNetherIngot = "gobber2:gobber2_ingot_nether";

onEvent('recipes', event => {

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
    "voidscape:tendril"
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
    "meetyourfight:phantoplasm"
);

event.replaceInput(
  { id:"cyclic:charm_magicdefense" },
    "cyclic:heart_empty",
    "ars_nouveau:drygmy_charm"
);

event.replaceInput(
  { id:"cyclic:charm_venom" },
    "minecraft:gold_nugget",
    "occultism:spirit_attuned_gem"
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
event.replaceInput(
  { id:"cyclic:prospector" },
    "minecraft:diamond",
    "gobber2:dragon_star"
);
var cycArrow = ['voidscape:tendril']
event.replaceInput(
  { id:"cyclic:quiver_damage" },
    "minecraft:arrow",
    cycArrow
);
event.replaceInput(
  { id:"cyclic:quiver_lightning" },
    "minecraft:arrow",
    cycArrow
);
event.replaceInput(
  { id:"cyclic:charm_magicdefense" },
    "#forge:nuggets/copper",
    "progressivebosses:nether_star_shard"
);
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

//mining gadgets - empty upgrade
event.replaceInput(
{ id: "mininggadgets:upgrade_empty"},
"minecraft:lapis_lazuli",
"gobber2:gobber2_links_end"
);

event.replaceInput(
{ id: "mininggadgets:upgrade_empty"},
"minecraft:diamond",
"immersiveengineering:ingot_uranium"
);

event.replaceInput(
{ id: "mininggadgets:upgrade_empty"},
"#forge:glass_panes",
"naturesaura:infused_iron"
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

event.replaceInput(
{ id: "wstweaks:lava_blade"},
"minecraft:lava_bucket",
"armorplus:block_infused_lava_crystal"
);
event.replaceInput(
{ id: "wstweaks:lava_blade"},
"minecraft:stick",
"gobber2:gobber2_sword_end"
);
event.replaceInput(
{ id: "wstweaks:lava_blade"},
"minecraft:nether_star",
"progressivebosses:nether_star_shard"
);

// wstweaks blaze blade
event.replaceInput(
{ id: "wstweaks:blaze_blade"},
"minecraft:nether_star",
"progressivebosses:nether_star_shard"
);

event.replaceInput(
{ id: "wstweaks:blaze_blade"},
"minecraft:stick",
"wstweaks:lava_blade"
);

event.replaceInput(
{ id: "wstweaks:blaze_blade"},
"minecraft:blaze_rod",
"create:blaze_cake"
);



// End Game -- Angel Ring
event.remove({output: 'angelring:itemring'});
event.recipes.create.mechanical_crafting(
{
  "pattern": [
    "1AGA2",
    "PAEAP",
    "QPSPQ",
    "PACAP",
    "3AGA4"
  ],
  "key": {
    "P": {
      "item": "gobber2:dragon_star"
    },
    "S": {
      "item": "armorplus:soul_slayer"
    },
    "A": {
      "item": "mysticalagradditions:insanium_gemstone_block"
    }
,    "C": {
      "item": "alexsmobs:dimensional_carver"
    },
    "E": {
      "item": "assemblylinemachines:entropy_reactor_upgrade_entropic_harnesser"
    },
    "1": {
      "item": "meetyourfight:phantoplasm"
    },
    "2": {
      "item": "meetyourfight:fortunes_favor"
    },
    "3": {
      "item": "meetyourfight:mossy_tooth"
    },
    "4": {
      "item": "assemblylinemachines:entropy_reactor_upgrade_entropic_harnesser"
    },
    "G": {
      "item": "refinedstorage:4096k_fluid_storage_disk"
    },
    "Q": {
      "item": "refinedstorage:4096k_fluid_storage_part"
    },
  },
  "result": {
    "item": "angelring:itemring",
    "count": 1
  },
  "acceptMirrored": false
});

});
onEvent('item.tags', event => {
// Get the #forge:cobblestone tag collection and add Diamond Ore to it
// event.get('forge:cobblestone').add('minecraft:diamond_ore')
// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})