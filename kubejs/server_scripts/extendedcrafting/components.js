// Another Quality Modpack 3

onEvent('recipes', event => {

const ecComps =[
'advanced_component',
'elite_component',
'ultimate_component',
'redstone_component',
'ender_component',
'enhanced_ender_component',
'crystaltine_component',
'the_ultimate_component'
]


event.replaceInput(
  { id: "extendedcrafting:advanced_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:basic_component"
);
event.replaceInput(
  { id: "extendedcrafting:elite_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:advanced_component"
);
event.replaceInput(
  { id: "extendedcrafting:ultimate_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:elite_component"
);
event.replaceInput(
  { id: "extendedcrafting:redstone_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:ultimate_component"
);
event.replaceInput(
  { id: "extendedcrafting:ender_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:redstone_component"
);
event.replaceInput(
  { id: "extendedcrafting:enhanced_ender_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:ender_component"
);
event.replaceInput(
  { id: "extendedcrafting:crystaltine_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:enhanced_ender_component"
);
event.replaceInput(
  { id: "extendedcrafting:the_ultimate_component" },
  "extendedcrafting:black_iron_slate",
  "extendedcrafting:crystaltine_component"
);

event.recipes.extendedcrafting.shapelessTable('extendedcrafting:the_ultimate_ingot', [
"aquaculture:neptunium_ingot",
"assemblylinemachines:attuned_titanium_ingot",
"assemblylinemachines:chromium_ingot",
"assemblylinemachines:energized_gold_ingot",
"assemblylinemachines:flerovium_ingot",
"assemblylinemachines:mystium_ingot",
"assemblylinemachines:novasteel_ingot",
"assemblylinemachines:titanium_ingot",
"blue_skies:falsite_ingot",
"blue_skies:horizonite_ingot",
"blue_skies:ventium_ingot",
"botania:elementium_ingot",
"botania:gaia_ingot",
"botania:manasteel_ingot",
"botania:terrasteel_ingot",
"create:brass_ingot",
"create:zinc_ingot",
"enigmaticlegacy:etherium_ingot",
"extendedcrafting:crystaltine_ingot",
"gobber2:gobber2_ingot",
"gobber2:gobber2_ingot_end",
"gobber2:gobber2_ingot_nether",
"immersiveengineering:ingot_aluminum",
"immersiveengineering:ingot_constantan",
"immersiveengineering:ingot_electrum",
"immersiveengineering:ingot_hop_graphite",
"immersiveengineering:ingot_lead",
"immersiveengineering:ingot_nickel",
"immersiveengineering:ingot_silver",
"immersiveengineering:ingot_steel",
"immersiveengineering:ingot_uranium",
"minecraft:copper_ingot",
"minecraft:gold_ingot",
"minecraft:iron_ingot",
"minecraft:netherite_ingot",
"mysticalagradditions:insanium_ingot",
"mysticalagriculture:imperium_ingot",
"mysticalagriculture:inferium_ingot",
"mysticalagriculture:prosperity_ingot",
"mysticalagriculture:prudentium_ingot",
"mysticalagriculture:soulium_ingot",
"mysticalagriculture:supremium_ingot",
"mysticalagriculture:tertium_ingot",
"mythicbotany:alfsteel_ingot",
"silentgear:azure_electrum_ingot",
"silentgear:azure_silver_ingot",
"silentgear:blaze_gold_ingot",
"silentgear:crimson_iron_ingot",
"silentgear:crimson_steel_ingot",
"silentgear:tyrian_steel_ingot",
"tconstruct:cobalt_ingot",
"tconstruct:manyullyn_ingot",
"tconstruct:pig_iron_ingot",
"tconstruct:queens_slime_ingot",
"tconstruct:rose_gold_ingot",
"tconstruct:slimesteel_ingot",
"tconstruct:tinkers_bronze_ingot",
"tconstruct:hepatizon_ingot"
]);

});