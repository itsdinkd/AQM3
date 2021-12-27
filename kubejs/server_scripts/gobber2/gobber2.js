// priority: 0

console.info('AQM3 -- Modifying Gobber2)');

onEvent('recipes', event => {
event.remove({output:'gobber2:gobber2_leggings_dragon'});
event.remove({output:'gobber2:gobber2_chestplate_dragon'});
event.remove({output:'gobber2:gobber2_helmet_dragon'});
event.remove({output:'gobber2:gobber2_boots_dragon'});
event.remove({output:'gobber2:gobber2_ring_repair'});

event.replaceInput(
  { id:"gobber2:gobber2_link_end" },
    "minecraft:nether_star",
    "gobber2:gobber2_star"
);
});