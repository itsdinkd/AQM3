// priority: 0

console.info('Modifying AQM3 Items...');

onEvent('item.modification', event => {
  event.modify('kubejs:star_of_icon', item => {
    item.fireResistant = true
  });
  event.modify('kubejs:demon_pearl', item => {
    item.fireResistant = true
  });
  event.modify('kubejs:corrupted_emerald', item => {
    item.fireResistant = true
  });

  event.modify('wstweaks:blaze_blade', item => {
    item.fireResistant = true
    tier = tierOptions => {
      tierOptions.attackDamageBonus = 3.0
    }
  });

  event.modify('wstweaks:lava_blade', item => {
    item.fireResistant = true
    tier = tierOptions => {
      tierOptions.attackDamageBonus = 1.0
    }
  });


});