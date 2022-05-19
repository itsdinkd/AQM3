// Another Quality Modpack 3

onEvent('recipes', event => {

event.replaceInput(
  { id: "botania:cloud_pendant" },
  "botania:manasteel_ingot",
  "botania:terrasteel_ingot"
);
event.replaceInput(
  { id: "botania:thunder_sword" },
  "botania:mana_diamond",
  "gobber2:dragon_star"
);
event.replaceInput(
  { id: "botania:clip" },
  "botania:dreamwood",
  "ars_nouveau:end_fiber"
);

event.replaceInput(
  { id: "botania:mana_gun" },
  "botania:mana_diamond",
  "ars_nouveau:archmage_spell_book"
);

event.replaceInput(
  { id: "botania:reach_ring" },
  "botania:elementium_ingot",
  "botania:gaia_ingot"
);

event.remove({id: 'mythicbotany:fire_ring'})
event.shaped('mythicbotany:fire_ring', ['rie', 'i i', ' i '],
  {
    i: "mythicbotany:alfsteel_ingot",
    r: "mythicbotany:muspelheim_rune",
    e: "ars_nouveau:fire_essence"
  }
);

})