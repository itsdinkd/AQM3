// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('AQM3 -- Modifying)')

onEvent('recipes', event => {
event.remove({output:'gobber2:gobber2_leggings_dragon'});
event.remove({output:'gobber2:gobber2_chestplate_dragon');
event.remove({output:'gobber2:gobber2_helmet_dragon');
event.remove({output:'gobber2:gobber2_boots_dragon');
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})