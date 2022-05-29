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
  "evilcraft:werewolf_bone"
);

event.replaceInput(
  { id: "botania:mana_gun" },
  "botania:mana_diamond",
  "evilcraft:primed_pendant"
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
    e: "mna:fire_rune"
  }
);

})