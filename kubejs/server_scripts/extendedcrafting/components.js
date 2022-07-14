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
"botania:elementium_ingot",
"botania:gaia_ingot",
"botania:manasteel_ingot",
"botania:terrasteel_ingot",
"blue_skies:falsite_ingot",
"blue_skies:ventium_ingot",
"blue_skies:horizonite_ingot",
"byg:pendorite_ingot",
"cataclysm:enderite_ingot",
"cataclysm:ignitium_ingot",
"cataclysm:witherite_ingot",
"create:brass_ingot",
"create:zinc_ingot",
"enigmaticlegacy:etherium_ingot",
"extendedcrafting:crystaltine_ingot",
"futurepack:ingot_bioterium",
"futurepack:ingot_bitripentium",
"futurepack:ingot_gadolinium",
"futurepack:ingot_glowtite",
"futurepack:ingot_lithium",
"futurepack:ingot_magnet",
"futurepack:ingot_neodymium",
"futurepack:ingot_neon",
"futurepack:ingot_quantanium",
"futurepack:ingot_rare_earth",
"futurepack:ingot_retium",
"futurepack:ingot_silicon",
"futurepack:ingot_wakurium",
"gobber2:gobber2_ingot",
"gobber2:gobber2_ingot_end",
"gobber2:gobber2_ingot_nether",
"graveyard:dark_iron_ingot",
"mekanism:ingot_osmium",
"mekanism:ingot_refined_glowstone",
"mekanism:ingot_refined_obsidian",
"mekanism:ingot_uranium",
"minecraft:netherite_ingot",
"mna:purified_vinteum_ingot",
"mna:superheated_purified_vinteum_ingot",
"mna:superheated_vinteum_ingot",
"mna:vinteum_ingot",
"mysticalagradditions:insanium_ingot",
"mysticalagriculture:imperium_ingot",
"mysticalagriculture:inferium_ingot",
"mysticalagriculture:prosperity_ingot",
"mysticalagriculture:prudentium_ingot",
"mysticalagriculture:soulium_ingot",
"mysticalagriculture:supremium_ingot",
"mysticalagriculture:tertium_ingot",
"mythicbotany:alfsteel_ingot",
"nourished_end:voidsteel_ingot",
"stalwart_dungeons:tungsten_ingot",
"piglin_expansion:divinity_netherite_ingot",
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
"tconstruct:hepatizon_ingot",
"thermal:bronze_ingot",
"thermal:constantan_ingot",
"thermal:electrum_ingot",
"thermal:enderium_ingot",
"thermal:invar_ingot",
"thermal:lead_ingot",
"thermal:lumium_ingot",
"thermal:nickel_ingot",
"thermal:signalum_ingot",
"thermal:silver_ingot",
"thermal:tin_ingot",
"undergarden:cloggrum_ingot",
"undergarden:forgotten_ingot",
"undergarden:froststeel_ingot"
]);

});