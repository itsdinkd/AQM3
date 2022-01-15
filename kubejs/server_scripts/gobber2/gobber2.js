// priority: 0

console.info('AQM3 -- Modifying Gobber2)');

const gobberRemove = [
'gobber2:gobber2_boots_dragon',
'gobber2:gobber2_chestplate_dragon',
'gobber2:gobber2_helmet_dragon',
'gobber2:gobber2_leggings_dragon',
'gobber2:gobber2_medallion_glowing',
'gobber2:gobber2_ring_airwalking',
'gobber2:gobber2_ring_ascent',
'gobber2:gobber2_ring_blaze',
'gobber2:gobber2_ring_farmer',
'gobber2:gobber2_ring_husbandry',
'gobber2:gobber2_ring_pyro',
'gobber2:gobber2_ring_repair',
'gobber2:gobber2_ring_swiftness',
'gobber2:gobber2_ring_vision',
'gobber2:gobber2_staff_farmer',
'gobber2:gobber2_staff_harvest',
'gobber2:gobber2_sword_traveler'
];

onEvent('recipes', event => {
  gobberRemove.forEach(item => {
    event.remove({output: item})
  })

// Test
const multiCrushing = function(outputs, inputs, counts, chances, secondarys, andRemove) {
   if (andRemove) {
      event.remove({input: inputs});
   }
  // event.recipes.immersiveengineeringCrusher(outputs, inputs, {chance: chances, output: secondarys});
event.recipes.immersiveengineeringCrusher(
{
    "secondaries": [
    {
        "chance": chances,
        "output":
        {
            "item": secondarys
        }
    }],
    "result":
    {
        "item": outputs,
        "count": counts
    },
    "input":
    {
        "item": inputs
    },
    "energy": 6000
});
};

event.replaceInput(
  { id:"gobber2:gobber2_links_end" },
    "minecraft:nether_star",
    "gobber2:dragon_star"
);

// swimming
event.replaceInput(
  { id:"gobber2:gobber2_medallion_stepping" },
    "minecraft:feather",
    "cyclic:apple_lofty_stature"
);

// gobber2_medallion_breathing
event.remove({output: "gobber2:gobber2_medallion_breathing"})
event.shaped("gobber2:gobber2_medallion_breathing", [
[null, 'artifacts:snorkel', null],
['gobber2:gobber2_ingot_nether', 'gobber2:gobber2_medallion', 'gobber2:gobber2_ingot_nether'],
[null, 'aquaculture:catfish', null],
]);

// gobber2:gobber2_medallion_hero
event.remove({output: "gobber2:gobber2_medallion_hero"})
event.shaped("gobber2:gobber2_medallion_hero", [
[null, 'artifacts:villager_hat', null],
['minecraft:emerald', 'gobber2:gobber2_medallion', 'minecraft:emerald'],
[null, 'minecraft:emerald', null],
]);

// Gobber Ore
event.remove({input: "gobber2:gobber2_ore"})
event.recipes.immersiveengineeringCrusher(
{
    "secondaries": [
    {
        "chance": 0.055,
        "output":
        {
            "item": "gobber2:gobber2_glob"
        }
    }],
    "result":
    {
        "item": "gobber2:gobber2_globette",
        "count": 3
    },
    "input":
    {
        "item": "gobber2:gobber2_ore"
    },
    "energy": 6000
});

event.remove({input: "gobber2:gobber2_ore_deepslate"})
event.recipes.immersiveengineeringCrusher(
{
    "secondaries": [
    {
        "chance": 0.056,
        "output":
        {
            "item": "gobber2:gobber2_glob"
        }
    }],
    "result":
    {
        "item": "gobber2:gobber2_globette",
        "count": 3
    },
    "input":
    {
        "item": "gobber2:gobber2_ore_deepslate"
    },
    "energy": 6000
});

// Gobber Nether Ore
event.remove({input: "gobber2:gobber2_ore_nether"})
event.recipes.immersiveengineeringCrusher(
{
    "secondaries": [
    {
        "chance": 0.0575,
        "output":
        {
            "item": "gobber2:gobber2_glob_nether"
        }
    }],
    "result":
    {
        "item": "gobber2:gobber2_globette_nether",
        "count": 3
    },
    "input":
    {
        "item": "gobber2:gobber2_ore_nether"
    },
    "energy": 6000
});

// Gobber Nether Ore
event.remove({input: "gobber2:gobber2_ore_end"})
event.recipes.immersiveengineeringCrusher(
{
    "secondaries": [
    {
        "chance": 0.059999,
        "output":
        {
            "item": "gobber2:gobber2_glob_end"
        }
    }],
    "result":
    {
        "item": "gobber2:gobber2_globette_end",
        "count": 3
    },
    "input":
    {
        "item": "gobber2:gobber2_ore_end"
    },
    "energy": 6000
});
// Use Compacter for Dragonstar
event.remove({output: "gobber2:dragon_star"})
event.recipes.createCompacting('gobber2:dragon_star', [
  'gobber2:gobber2_block_end',
  'gobber2:gobber2_rod_end',
  'gobber2:gobber2_ore_end']).heated()
// event.recipes.immersiveengineeringCrusher('3x gobber2:gobber2_globette', 'gobber2:gobber2_ore', {chance:0.0509999, output:'gobber2:gobber2_glob'})

//multiCrushing('gobber2:gobber2_globette_nether', 'gobber2:gobber2_ore_nether', 3, 0.05555, 'gobber2:gobber2_glob_nether', true);

//end
});