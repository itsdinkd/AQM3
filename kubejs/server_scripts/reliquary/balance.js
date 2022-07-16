// Another Quality Modpack 3

const reliquaryYeeter =[
  "reliquary:ender_staff",
  "reliquary:wraith_node",
  "reliquary:rod_of_lyssa",
  "reliquary:rending_gale",
  "reliquary:alkahestry_tome",
  "reliquary:infernal_tear",
  "reliquary:mob_charm_fragment",
  "reliquary:mob_charm_belt",
  "reliquary:midas_touchstone",
  "reliquary:void_tear",
  "reliquary:mob_charm",
  "reliquary:infernal_tear"
]

onEvent('recipes', event => {

  reliquaryYeeter.forEach(function(item) {
    event.remove({output: "reliquary:" + item})
  });

  event.replaceInput(
    { id: "reliquary:twilight_cloak" },
      "minecraft:iron_ingot",
      "blue_skies:ventium_ingot"
  );

});


