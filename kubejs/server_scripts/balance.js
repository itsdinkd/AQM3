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

event.replaceInput(
  { id:"cyclic:apple_sprout_emerald" },
    "cyclic:apple_chocolate",
    "mysticalagriculture:insanium_essence"
);

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

////////////////////////// Mystical Agriculture
// Infusion Crystal
event.replaceInput(
{ id: "mysticalagriculture:infusion_crystal" },
"minecraft:diamond",
"tombstone:impregnated_diamond"
);
// Master Infusion Crystal
event.remove({output: "mysticalagriculture:master_infusion_crystal"})
event.shaped("mysticalagriculture:master_infusion_crystal", [
["mysticalagriculture:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagriculture:insanium_essence"],
["mysticalagriculture:prosperity_gemstone","mysticalagriculture:insanium_gemstone_block","mysticalagriculture:prosperity_gemstone"],
["mysticalagriculture:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagriculture:insanium_essence"],
]);

});

onEvent('item.tags', event => {
// Get the #forge:cobblestone tag collection and add Diamond Ore to it
// event.get('forge:cobblestone').add('minecraft:diamond_ore')
// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})