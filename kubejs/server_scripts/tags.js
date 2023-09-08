// priority: 0
const soulcageBlacklist = [
"artifacts:mimic", 
"blue_skies:alchemist", 
"blue_skies:polargeist", 
"blue_skies:starlit_crusher", 
"blue_skies:arachnarch", 
"goblinsanddungeons:goblin_king", 
"goblinsanddungeons:ogre", 
"minecraft:elder_guardian", 
"minecraft:ender_dragon", 
"minecraft:wither", 
"undergarden:masticator", 
"undergarden:forgotten_guardian", 
"weaponthrow:weaponthrow", 
"orcz:bigorcboss"
]


onEvent('entity_type.tags', event => {

  soulcageBlacklist.forEach(entity => {
  event.add("spirit:entities/soul_cage_blacklisted", entity)
  });

  event.add("spirit:entities/soul_cage_blacklisted", ['artifacts:mimic','botania:doppleganger', /cataclysm:.+/, /productivebees:.+/, /doom:.+/, /evilcraft:.+/, /alexmobs:.+/, /stalwart_dungeons:+/, /mowziesmobs:.+/, /"pyromancer:.+/])

});

onEvent('tags.items', event => {
  event.remove('minecraft:coals', 'doom:argent_energy')
  event.add('forge:dirt', 'minecraft:dirt')
  event.add('forge:compressed/cobblestone', 'cyclic:compressed_cobblestone')
})