// function tryTag(tag) {
//     try {
//         return Ingredient.of("#"+tag)
//     } catch (err) {
//         return null
//     }
// }

// if (global["HIDE_UNIFIED_ITEMS"]) {
//     onEvent("jei.hide.items", event => {
//         try {
//             for (let tag of global["unifytags"]) {
//                 let ingr = tryTag(tag)
//                 if (ingr) {
//                     let stacks = ingr.getStacks().toArray()
//                     let tItem = global["tagitems"][tag]
//                     for (let s of stacks) {
//                         console.log(if (s.getId() != tItem && !global["unifyexclude"].has(s.getId())) event.hide(s.getId()))
//                     }
//                 }
//             }
//         } catch (err) {
//             console.error("Failure to hide unified items in JEI. Press F3+T to reload client and retry")
//         }
//     })
// }

const UNIFIED_REMOVAL = [
"assemblylinemachines:ground_copper",
"assemblylinemachines:ground_diamond",
"assemblylinemachines:ground_emerald",
"assemblylinemachines:ground_gold",
"assemblylinemachines:ground_netherite",
"assemblylinemachines:ground_lapis_lazuli",
"ob_core:deepslate_platinum_ore",
"ob_core:raw_platinum_block",
"ob_core:platinum_raw",
"ob_core:platinum_ingot",
"ob_core:platinum_nugget",
"createdeco:zinc_sheet",
"create:copper_nugget",
"create:copper_sheet",
"create:deepslate_zinc_ore",
"create:golden_sheet",
"thermal:steel_ingot",
"thermal:steel_nugget",
"create:iron_sheet",
"create:powdered_obsidian",
"createaddition:diamond_grit",
"cyclic:copper_nugget",
"futurepack:block_tin",
"futurepack:block_zinc",
"futurepack:dust_copper",
"futurepack:dust_gold",
"futurepack:dust_iron",
"futurepack:dust_obsidian",
"futurepack:dust_tin",
"futurepack:ingot_tin",
"futurepack:ingot_zinc",
"futurepack:ore_tin",
"futurepack:ore_tin_deepslate",
"futurepack:ore_zinc",
"futurepack:ore_zinc_deepslate",
"mekanism:block_bronze",
"mekanism:block_lead",
"mekanism:block_raw_lead",
"mekanism:block_raw_tin",
"mekanism:block_steel",
"mekanism:block_tin",
"mekanism:deepslate_lead_ore",
"mekanism:deepslate_osmium_ore",
"mekanism:deepslate_tin_ore",
"mekanism:deepslate_uranium_ore",
"mekanism:dust_bronze",
"mekanism:dust_charcoal",
"mekanism:dust_coal",
"mekanism:dust_copper",
"mekanism:dust_diamond",
"mekanism:dust_emerald",
"mekanism:dust_gold",
"mekanism:dust_iron",
"mekanism:dust_lapis_lazuli",
"mekanism:dust_lead",
"mekanism:dust_netherite",
"mekanism:dust_steel",
"mekanism:dust_sulfur",
"mekanism:dust_tin",
"mekanism:ingot_bronze",
"mekanism:ingot_lead",
"mekanism:ingot_steel",
"mekanism:ingot_tin",
"mekanism:lead_ore",
"mekanism:nugget_bronze",
"mekanism:nugget_lead",
"mekanism:nugget_steel",
"mekanism:nugget_tin",
"mekanism:raw_lead",
"mekanism:raw_tin",
"mekanism:tin_ore",
"minecraft:copper_ingot",
"tconstruct:copper_nugget",
"tinkers_reforged:aluminum_block",
"tinkers_reforged:aluminum_dust",
"tinkers_reforged:aluminum_ingot",
"tinkers_reforged:deepslate_aluminum_ore",
"assemblylinemachines:iron_rod",
"buildersaddition:iron_rod",
"silentgear:iron_rod",
"createaddition:gold_rod",
"assemblylinemachines:copper_rod",
"tconstruct:rose_gold_ingot",
"tconstruct:rose_gold_block",
"tconstruct:rose_gold_nugget",
"tcintegrations:bronze_ingot",
"tcintegrations:bronze_block",
"tcintegrations:bronze_nugget"
];
onEvent('rei.hide.items', event => {
UNIFIED_REMOVAL.forEach(item => {
    event.hide(item)
})
});