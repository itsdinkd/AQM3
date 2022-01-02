// priority: 0
console.info('AQM3 -- Balancing Ars Nouveau Recipes)');
onEvent('recipes', event => {


// event.replaceInput(
// { id: "mysticalagriculture:infusion_crystal" },
// "minecraft:diamond",
// "tombstone:impregnated_diamond"
// );
// // Master Infusion Crystal
// event.remove({output: "mysticalagriculture:master_infusion_crystal"})
// event.shaped("mysticalagriculture:master_infusion_crystal", [
//   ["mysticalagradditions:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_essence"],
//   ["mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_gemstone_block","mysticalagriculture:prosperity_gemstone"],
//   ["mysticalagradditions:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_essence"],
// ]);

const curiosArsDiamond = [
"ars_nouveau:ring_of_lesser_discount",
"ars_nouveau:ring_of_greater_discount",
"ars_nouveau:amulet_of_mana_boost",
"ars_nouveau:amulet_of_mana_regen"
];

curiosArsDiamond.forEach(item => {
  event.replaceInput({id: item},
  "minecraft:diamond",
  "tombstone:impregnated_diamond"
  )
});

//end
});