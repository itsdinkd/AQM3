// priority: 0
console.info('AQM3 -- Balancing Mystical Agr.. Recipes)');
onEvent('recipes', event => {

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
  ["mysticalagradditions:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_essence"],
  ["mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_gemstone_block","mysticalagriculture:prosperity_gemstone"],
  ["mysticalagradditions:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_essence"],
]);


// onEvent('item.modification', event => {
//   event.modify('minecraft:ender_pearl', item => {
//     item.maxStackSize = 64
//     item.fireResistant = true
//   })
// })

const mystTools = [
'sword',
'bow',
'crossbow',
'pickaxe',
'shovel',
'axe',
'hoe',
'staff',
'watering_can',
'helmet',
'chestplate',
'leggings',
'boots',
];

mystTools.forEach(function (item) {
// Supremium Tools
  event.remove({output: "mysticalagriculture:supremium_" + item})
  event.shaped("mysticalagriculture:supremium_" + item, [
    ["assemblylinemachines:novasteel_ingot", "mysticalagriculture:supremium_gemstone", "assemblylinemachines:novasteel_ingot"],
    ["mysticalagriculture:supremium_ingot","mysticalagriculture:imperium_" + item, "mysticalagriculture:supremium_ingot"],
    ["assemblylinemachines:novasteel_ingot","mysticalagriculture:supremium_gemstone", "assemblylinemachines:novasteel_ingot"],
  ]);
//Imperium Tools
  event.remove({output: "mysticalagriculture:imperium_" + item})
  event.shaped("mysticalagriculture:imperium_" + item, [
    ["assemblylinemachines:raw_novasteel_compound", "mysticalagriculture:imperium_gemstone", "assemblylinemachines:raw_novasteel_compound"],
    ["mysticalagriculture:imperium_ingot","mysticalagriculture:tertium_" + item, "mysticalagriculture:imperium_ingot"],
    ["assemblylinemachines:raw_novasteel_compound","mysticalagriculture:imperium_gemstone", "assemblylinemachines:raw_novasteel_compound"],
  ]);
//Tertium Tools
  event.remove({output: "mysticalagriculture:tertium_" + item})
  event.shaped("mysticalagriculture:tertium_" + item, [
    ["assemblylinemachines:mystium_ingot", "mysticalagriculture:tertium_gemstone", "assemblylinemachines:mystium_ingot"],
    ["mysticalagriculture:tertium_ingot","mysticalagriculture:prudentium_" + item, "mysticalagriculture:tertium_ingot"],
    ["assemblylinemachines:mystium_ingot","mysticalagriculture:tertium_gemstone", "assemblylinemachines:mystium_ingot"],
  ]);
})

// Mystical Agriculture Flight Augment
event.remove({id:'mysticalagriculture:augment/flight'})

});