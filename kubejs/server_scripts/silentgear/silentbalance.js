// priority: 0
console.info('AQM3 -- Balancing Silent Gear Recipes)');

onEvent('recipes', event => {

// Prospector Blueprint
event.replaceInput(
{ id: "silentgear:prospector_hammer_blueprint"},
"minecraft:iron_ingot",
"gobber2:gobber2_ingot_nether",
);

// Prospector Blueprint
event.replaceInput(
{ id: "silentgear:prospector_hammer_template"},
"minecraft:iron_ingot",
"gobber2:gobber2_ingot_nether",
);

event.replaceInput(
{ id: "silentgear:starlight_charger"},
"minecraft:polished_blackstone",
"gobber2:dragon_star",
);

});