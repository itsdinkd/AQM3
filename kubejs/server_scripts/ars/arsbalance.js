// priority: 0
console.info('AQM3 -- Balancing Ars Nouveau Recipes)');
onEvent('recipes', event => {

// Ars Nouveau Apprentice

event.remove({id: 'ars_nouveau:apprentice_boots'})
event.shaped('ars_nouveau:apprentice_boots', ['bab', 'b b'],
  {
    b: 'ars_nouveau:blaze_fiber',
    a: 'ars_nouveau:novice_boots'
});

event.remove({id: 'ars_nouveau:apprentice_leggings'})
event.shaped('ars_nouveau:apprentice_leggings', ['bbb', 'bab', 'b b'],
  {
    b: 'ars_nouveau:blaze_fiber',
    a: 'ars_nouveau:novice_leggings'
});

event.remove({id: 'ars_nouveau:apprentice_robes'})
event.shaped('ars_nouveau:apprentice_robes', ['bab', 'bbb', 'bbb'],
  {
    b: 'ars_nouveau:blaze_fiber',
    a: 'ars_nouveau:novice_robes'
});

event.remove({id: 'ars_nouveau:apprentice_hood'})
event.shaped('ars_nouveau:apprentice_hood', ['bab', 'b b'],
  {
    b: 'ars_nouveau:blaze_fiber',
    a: 'ars_nouveau:novice_hood'
});

// Ars Nouveau Archmage

event.remove({id: 'ars_nouveau:archmage_boots'})
event.shaped('ars_nouveau:archmage_boots', ['bab', 'b b'],
  {
    b: 'ars_nouveau:end_fiber',
    a: 'ars_nouveau:apprentice_boots'
});

event.remove({id: 'ars_nouveau:archmage_leggings'})
event.shaped('ars_nouveau:archmage_leggings', ['bbb', 'bab', 'b b'],
  {
    b: 'ars_nouveau:end_fiber',
    a: 'ars_nouveau:apprentice_leggings'
});

event.remove({id: 'ars_nouveau:archmage_robes'})
event.shaped('ars_nouveau:archmage_robes', ['bab', 'bbb', 'bbb'],
  {
    b: 'ars_nouveau:end_fiber',
    a: 'ars_nouveau:apprentice_robes'
});

event.remove({id: 'ars_nouveau:archmage_hood'})
event.shaped('ars_nouveau:archmage_hood', ['bab', 'b b'],
  {
    b: 'ars_nouveau:end_fiber',
    a: 'ars_nouveau:apprentice_hood'
});

// ars nouveau apprentice spell book
event.replaceInput(
{ id: "ars_nouveau:apprentice_spell_book_upgrade"},
"minecraft:blaze_rod",
"ars_nouveau:blaze_fiber"
);

// ars nouveau apprentice spell book
event.replaceInput(
{ id: "ars_nouveau:archmage_spell_book_upgrade"},
"minecraft:emerald",
"ars_nouveau:end_fiber"
);

// ars nouveau apprentice spell book
event.replaceInput(
{ id: "ars_nouveau:archmage_spell_book_upgrade"},
"minecraft:nether_star",
"extendedcrafting:ender_star"
);

// ars nouveau gem block
event.remove({id: 'ars_nouveau:imbuement_amethyst_block'})
event.remove({id: 'ars_nouveau:source_gem_block'})
event.shaped('ars_nouveau:source_gem_block', ['ggg', 'ggg', 'ggg'],
  {
    g: 'ars_nouveau:source_gem'
  });

// ars nouveau source gem from block

event.remove({id: 'ars_nouveau:source_gem_block'});
event.remove({id: 'ars_nouveau:source_gem_block_2'});
event.shapeless('9x ars_nouveau:source_gem', 'ars_nouveau:source_gem_block')

// ars nouveau marvelous clay

event.replaceInput(
{ id: "ars_nouveau:mythical_clay"},
"minecraft:diamond",
"gobber2:gobber2_ingot_end"
);

// ars nouveau marvelous clay

event.replaceInput(
{ id: "ars_nouveau:marvelous_clay"},
"minecraft:lapis_lazuli",
"gobber2:gobber2_ingot_nether"
);

// ars nouveau marvelous clay

event.replaceInput(
{ id: "ars_nouveau:magic_clay"},
"minecraft:redstone",
"gobber2:gobber2_ingot"
);

// ars nouveau lesser and greater discount

// event.replaceInput(
// { id: "ars_nouveau:ring_of_lesser_discount"},
// "minecraft:ender_pearl",
// "naturesaura:infused_iron"
// );

// event.replaceInput(
// { id: "ars_nouveau:ring_of_greater_discount"},
// "minecraft:ender_pearl",
// "gobber2:gobber2_rod_nether"
// );
//end
});