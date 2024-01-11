// priority: 0
console.info('AQM3 -- Balancing Mystical Agr.. Recipes)');
onEvent('recipes', event => {

////////////////////////// Mystical Agriculture
// Infusion Crystal
event.replaceInput(
{ id: "mysticalagriculture:infusion_crystal" },
"minecraft:diamond",
"tombstone:impregnated_diamond"
);
// Master Infusion Crystal
event.remove({output: "mysticalagriculture:master_infusion_crystal"})
event.shaped("mysticalagriculture:master_infusion_crystal", [
  ["mysticalagradditions:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_essence"],
  ["mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_gemstone_block","mysticalagriculture:prosperity_gemstone"],
  ["mysticalagradditions:insanium_essence","mysticalagriculture:prosperity_gemstone","mysticalagradditions:insanium_essence"],
]);

// steel
event.custom(
  {
    "type":"minecraft:crafting_shaped",
    "pattern":
    [
      "EEE","E E","EEE"
    ],
    "key":
    {
      "E":
      {
        "item":"mysticalagriculture:steel_essence"
      }
    },
    "result":
    {
      "item": "assemblylinemachines:steel_ingot",
      "count":3
    }
  }
)

// lead
event.custom(
  {
    "type":"minecraft:crafting_shaped",
    "pattern":
    [
      "EEE","E E","EEE"
    ],
    "key":
    {
      "E":
      {
        "item":"mysticalagriculture:lead_essence"
      }
    },
    "result":
    {
      "item": "thermal:lead_ingot",
      "count":4
    }
  }
)

// zinc
event.custom(
  {
    "type":"minecraft:crafting_shaped",
    "pattern":
    [
      "EEE","E E","EEE"
    ],
    "key":
    {
      "E":
      {
        "item":"mysticalagriculture:zinc_essence"
      }
    },
    "result":
    {
      "item": "create:zinc_ingot",
      "count":4
    }
  }
)

// sulfur
event.custom(
  {
    "type":"minecraft:crafting_shaped",
    "pattern":
    [
      "EEE","   ","   "
    ],
    "key":
    {
      "E":
      {
        "item":"mysticalagriculture:sulfur_essence"
      }
    },
    "result":
    {
      "item": "thermal:sulfur_dust",
      "count":4
    }
  }
)

// tin
event.custom(
  {
    "type":"minecraft:crafting_shaped",
    "pattern":
    [
      "EEE","E E","EEE"
    ],
    "key":
    {
      "E":
      {
        "item":"mysticalagriculture:tin_essence"
      }
    },
    "result":
    {
      "item": "thermal:tin_ingot",
      "count":4
    }
  }
)

// bronze
event.custom(
  {
    "type":"minecraft:crafting_shaped",
    "pattern":
    [
      "EEE","E E","EEE"
    ],
    "key":
    {
      "E":
      {
        "item":"mysticalagriculture:bronze_essence"
      }
    },
    "result":
    {
      "item": "thermal:bronze_ingot",
      "count":4
    }
  }
)

// aluminum
event.custom(
  {
    "type":"minecraft:crafting_shaped",
    "pattern":
    [
      "EEE","E E","EEE"
    ],
    "key":
    {
      "E":
      {
        "item":"mysticalagriculture:aluminum_essence"
      }
    },
    "result":
    {
      "item": "futurepack:ingot_aluminium",
      "count":8
    }
  }
)
// onEvent('item.modification', event => {
//   event.modify('minecraft:ender_pearl', item => {
//     item.maxStackSize = 64
//     item.fireResistant = true
//   })
// })

const mystTools = [
'sword',
'bow',
'crossbow',
'pickaxe',
'shovel',
'axe',
'hoe',
'staff',
'watering_can',
'helmet',
'chestplate',
'leggings',
'boots',
];

mystTools.forEach(function (item) {
// Supremium Tools
  event.remove({output: "mysticalagriculture:supremium_" + item})
  event.shaped("mysticalagriculture:supremium_" + item, [
    ["assemblylinemachines:novasteel_ingot", "mysticalagriculture:supremium_gemstone", "assemblylinemachines:novasteel_ingot"],
    ["mysticalagriculture:supremium_ingot","mysticalagriculture:imperium_" + item, "mysticalagriculture:supremium_ingot"],
    ["assemblylinemachines:novasteel_ingot","mysticalagriculture:supremium_gemstone", "assemblylinemachines:novasteel_ingot"],
  ]);
//Imperium Tools
  event.remove({output: "mysticalagriculture:imperium_" + item})
  event.shaped("mysticalagriculture:imperium_" + item, [
    ["assemblylinemachines:raw_novasteel_compound", "mysticalagriculture:imperium_gemstone", "assemblylinemachines:raw_novasteel_compound"],
    ["mysticalagriculture:imperium_ingot","mysticalagriculture:tertium_" + item, "mysticalagriculture:imperium_ingot"],
    ["assemblylinemachines:raw_novasteel_compound","mysticalagriculture:imperium_gemstone", "assemblylinemachines:raw_novasteel_compound"],
  ]);
//Tertium Tools
  event.remove({output: "mysticalagriculture:tertium_" + item})
  event.shaped("mysticalagriculture:tertium_" + item, [
    ["assemblylinemachines:mystium_ingot", "mysticalagriculture:tertium_gemstone", "assemblylinemachines:mystium_ingot"],
    ["mysticalagriculture:tertium_ingot","mysticalagriculture:prudentium_" + item, "mysticalagriculture:tertium_ingot"],
    ["assemblylinemachines:mystium_ingot","mysticalagriculture:tertium_gemstone", "assemblylinemachines:mystium_ingot"],
  ]);
})

event.shaped("4x gobber2:gobber2_globette_end" ['iii','i i', 'iii'],
{
  i: 'mysticalagriculture:globette_end_essence'
});


// Mystical Agriculture Flight Augment
event.remove({id:'mysticalagriculture:augment/flight'})

});