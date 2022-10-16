onEvent('recipes', event => {
  
    // Jetpack Require T4 Assembly
    event.replaceInput({id: "mekanism:jetpack"}, "mekanism:tin_ingot", "assemblylinemachines:raw_novasteel_compound");

    // Thermal Phyto Insolator require T4 Assembly
    event.replaceInput({output: "thermal:machine_insolator"}, "minecraft:dirt", "assemblylinemachines:energized_gold_ingot" )

    // Enchant giver - requiring T4 Thermal
    event.replaceInput({output: "assemblylinemachines:experience_mill"}, "assemblylinemachines:pure_steel_plate", "thermal:enderium_plate")
    event.replaceInput({output: "assemblylinemachines:experience_mill_upgrade_level"}, "assemblylinemachines:pure_steel_plate", "mekanism:advanced_control_circuit")
    // Mekanmism Charge Pad requiring T2 Charger
    event.remove({output: "mekanism:chargepad"})
    event.shaped("mekanism:chargepad", [' c ', 'ppp', 'ses'],
    {
        c: "thermal:charge_bench",
        p: "quark:obsidian_pressure_plate",
        s: "assemblylinemachines:strange_matter",
        e: "mekanism:energy_tablet"
    })
    // Thermal Chargepad requiring T1 charger
    event.replaceInput({output: "thermal:charge_bench"},"minecraft:redstone_block", "assemblylinemachines:tool_charger")


    
    // Tier 2 of thermal requiring Tier 1 of Assembly
    event.replaceInput({id: "thermal:parts/invar_gear"}, "minecraft:iron_nugget", "assemblylinemachines:steel_ingot");

    // Tier 1 of Mekanism requiring Tier 3/4ish of Assemblylines
    event.replaceInput({id: "mekanism:control_circuit/basic"}, "mekanism:ingot_osmium", "assemblylinemachines:attuned_titanium_ingot");
    // Tier 2 of Mekanism requiring Tier 4 of Assmembly Lines
    event.remove({id: "mekanism:control_circuit/advanced"})
    event.shaped("mekanism:advanced_control_circuit", [' c ', 'pup', ' P '],
    {
        p: "mekanism:alloy_infused",
        u: "mekanism:basic_control_circuit",
        c: "assemblylinemachines:raw_novasteel_compound",
        P: "oresabovediamonds:amethyst"
    })

    event.remove({id: "mekanism:control_circuit/elite"})
    event.shaped("mekanism:elite_control_circuit", ['ACA', ' D '],
    {
        A: "mekanism:advanced_control_circuit",
        C: "#mekanism:alloys/reinforced",
        D: "assemblylinemachines:novasteel_ingot",
    })

    event.remove({id: "mekanism:control_circuit/ultimate"})
    event.shaped("mekanism:ultimate_control_circuit", ['ACA', ' P '],
    {
      A: "mekanism:elite_control_circuit",
      C: "#mekanism:alloys/atomic",
      P: "oresabovediamonds:black_opal"
    })


    // Assembly Line Machines Reactor Core
    event.replaceInput({id:"mekanismgenerators:reactor/controller"}, "mekanism:basic_chemical_tank", "assemblylinemachines:entropy_reactor_core")


    // Tier 2 Assembly requiring T3 Thermal
    event.replaceInput({output: "assemblylinemachines:kinetic_grinder"}, "minecraft:redstone", "thermal:upgrade_augment_2")
    event.replaceInput({output: "assemblylinemachines:electric_upgrade_kit"}, "assemblylinemachines:basic_battery", "thermal:upgrade_augment_2")
    
    // Tier 3 Asssembly Requiring T4 Thermal
    event.replaceInput({output: "assemblylinemachines:crankmill"}, "assemblylinemachines:energy_pipe", "thermal:upgrade_augment_3")

    event.remove({output: "assemblylinemachines:mkii_upgrade_kit"})
    event.shaped("assemblylinemachines:mkii_upgrade_kit", ["aca","b1b","aca"],
    {
		a: "#forge:plates/attuned_titanium",
		b: "assemblylinemachines:enhanced_battery",
		c: "assemblylinemachines:empowered_conduction_component",
    1: "thermal:upgrade_augment_3"
		
    })


    // Tier 2 & 3 Assembly on Pure Iron Plate Requiring Thermal Press from TConstruct gold small plate 
    event.remove({output: 'assemblylinemachines:pure_iron_plate'})
    event.remove({id: 'assemblylinemachines:pneumatic/plates/pure_iron'})

    event.custom(
        {
            "type": "thermal:press",
            "ingredients": [
              {
                "item": "assemblylinemachines:pure_iron_ingot",
                "count": 3
              },
              {
                "item": "tconstruct:plate_cast"
              }
            ],
            "result": [
              {
                "item": "assemblylinemachines:pure_iron_plate",
                "count": 9
              }
            ],
            "energy": 2400
          }
    )
})