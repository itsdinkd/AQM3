onEvent('recipes', event => {

    event.remove({output: "compressium:cobblestone_1"});
    event.shaped('compressium:cobblestone_1', ['111','111','111'],
    {
      1: "minecraft:cobblestone"
    });
    event.shaped('compressium:cobblestone_1', ['111','111','111'],
    {
      1: "cyclic:compressed_cobblestone"
    });
    event.shaped('compressium:cobblestone_1', ['111','111','111'],
    {
      1: "minecraft:cobbled_deepslate"
    });
    event.shaped('9x compressium:cobblestone_1', ['1'],
    {
      1: "compressium:cobblestone_2"
    });

    event.shaped('compressium:cobblestone_2', ['111','111','111'],
    {
      1: "compressium:cobblestone_1"
    });
    
});