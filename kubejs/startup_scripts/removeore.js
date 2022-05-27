// onEvent('worldgen.remove', event => {
//   event.removeOres(ores => {
//     ores.blocks = [ 'scalinghealth:deepslate_heart_crystal_ore', 'scalinghealth:deepslate_power_crystal_ore', 'scalinghealth:heart_crystal_ore', 'scalinghealth:power_crystal_ore' ] // Removes coal and iron ore
//   })
// });tinkers_reforged:aluminum_ore

 onEvent('worldgen.remove', event => {
   event.removeOres(ores => {
    //Remove ore generation
     ores.blocks = [ 
         "tinkers_reforged:aluminum_ore",
         "futurepack:ore_tin",
         "futurepack:ore_tin_deepslate",
         "futurepack:ore_zinc",
         "futurepack:ore_zinc_deepslate",
         "tinkers_reforged:deepslate_aluminum_ore",
         "create:deepslate_zinc_ore",
        "futurepack:ore_tin",
        "futurepack:ore_tin_deepslate",
        "futurepack:ore_zinc",
        "futurepack:ore_zinc_deepslate",
        "mekanism:deepslate_lead_ore",
        "mekanism:deepslate_osmium_ore",
        "mekanism:deepslate_tin_ore",
        "mekanism:deepslate_uranium_ore",
        "mekanism:lead_ore",
        "mekanism:tin_ore",
        "tinkers_reforged:deepslate_aluminum_ore"
        ];
   })
 });