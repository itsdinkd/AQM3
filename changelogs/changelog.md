## Another Quality Modpack 3 v1.4.3

_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.2hf.md)_

**Server Owners** due to flan auto claiming structures, you will need to delete a specfic file to remove these claims. While this aqm3 update will prevent flan from claiming structures automatically, it can not stop the ones already claimed.

Delete the Admin claim file to delete all structure claims -> 
`world/data/claims/!AdminClaims.json`

*Note: This will also delete any admin claims you set yourself. If you want to make sure they stay, open this file and find your claim. Delete everything in the file and then paste what you copied back*

Unrelated note; if you are having issues flying in creative, press the space bar three times

### ADDED
- Four mods added; Create slice and Dice, Totemic, Thermal Dynamics (Which most of you know what it is about), and Irons Spells n Spellbooks. 
- Totemic; Build totems that give a range of passive buffs / enemy debuffs, or have ceromonies which give you entirely different, unique effects for a period of time. Check out the **Totempedia** guide book by crafting it.
- Create Slice and Dice creates compatibility between Farmers Delight (and any other food mod) and Create by using the new **Slicer** machine which is similar to the Mechanical Press/Mixer. This mod is used for automating food creation
- Iron Spells and Spellbooks; Brings back the classic RPG of spells. Cast spells via 65 spell books, rune crafting, weapon imbuement, wizard sets, and more. To get started, find a scroll and either use it or place it in a inscription table. This is quite a content packed mod and i will be balancing it out over time.
```
Focus types of Iron Spells and Spellbooks

There are 9 schools of magic, and you require a magical focus to craft scrolls or gear pertaining to that school. The schools and their focus are:
Fire - Blaze Rods (Vanilla)
Ice - Frozen Bones (Dropped from Strays)
Lightning - Bottles o' Lightning - (Use empty bottle on charged creeper)
Holy - Divine Pearls (Crafted from gold and amethyst)
Blood - Blood Vials (Obtained by cooking mobs in a cauldron; put them (or yourself) into a cauldron with a lit campfire beneath them)
Ender - Ender Pearls (Vanilla)
Evocation - Emeralds (Vanilla)
Void - Echo Shards (Vanilla)
Poison - Poisonous Potatoes (Vanilla, with additional recipe)
```

Read more about the iron spells and spellbooks mod at https://www.curseforge.com/minecraft/mc-mods/irons-spells-n-spellbooks 

### FIXED
- Downgraded FLAN due to it being broken and setting admin claims on structures. Please read notes above
- Certain battle towers not spawning (ocean)
- Sophisticated Mods: Fixed pipes to be able to insert into full storages that just had void overflow upgrade applied to them without the need for world reload
- Sophisticated Mods: Fixed double clicking on tank upgrade with stack of upgrades with count > 1 on hand to properly stop before returning slots without removing the tank upgrade
- Sophisticated Mods: Fixed concurrent modification issue that could sometimes cause a crash when a lot of stacks are being inserted into controller in bulk
- Entangled: Fixed pipes sometimes disconnecting

### CHANGED
- "evilcraft", "ba_bt", "bloodmagic", "futurepack", "draconicevolution", "iceandfire", "nethers_exoticism", "stalwart_dungeons", "botania", "inventorypets", "cataclysm" added to cardboard blacklist

### REMOVED
- Create Stuff Additions (Not compatible with Create 0.5.1)

---

## Another Quality Modpack 3 v1.4.3-Hotfix

_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.2.md)_


### FIXED
- Fixed Remove kubejs file typo -- broke removed recipes
- Server pack not on correct forge modloader version
---

## Another Quality Modpack 3 v1.4.3    

_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.2.md)_

This update includes a lot of updated mods, including Tinkers, Create, Ice and Fire, Artifacts, and more (56 total)

### ADDED
- Ice and Fire adds terralith support
- Hostile Neural Network adds support to Thermal Mobs, and passive/neutral vanilla mobs

### CHANGED
- Disabled Inventory Pets; Flying Saddle, Slime, Quiver, Pingot, Lead, Anvil, Black Hole
- For bed pet all players must be in bed to prevent any grief in servers
- Disabled Auto Refill by default (Mod; Inventory Profiles Next. Feel free to change back)
- Items will no longer automatically be moved to Inventory instead of hotbar (another Inventory profiles next config option)
- Blacklisted Ice and Fire, Inventory Pets, Draconic Evolution, Blue Skies, and several others from having a chance to drop with Chance Globe

### FIXED
- Fixed crash when opening a loot chest
- Iron Stick recipe missing which is required for advancing in future pack
- dark items in inventory
- Artifacts drop rate bug
- Carry on not respecting Flan
- Tons of Ice and Fire bugs fixed in regards to Dragon movement, and Mob AI
- Simple Storage Network recipes not showing when pressing REI key
- Frost Maw will no longer be forced to be a infernal mob

### REMOVED
- Little Contraptions mod due to not supporting Create 0.5.1
- Fall Damage perk from Project MMO
---

## Another Quality Modpack 3 v1.4.1


_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.md)_

### ADDED
- Audio extension
- Relics
- Furnace MK2
- Battle Towers!

### REMOVED
- Iron Furnaces (Due to PMMO incompatibilities causing a crash when smelting in a iron furnace)

### CHANGED
- Rebalanced bosses, they are now harder since Draconic Evo is now in this pack
- Rebalanced Mowzie Mobs (Nerfed Frostmaw damage, increased HP), Rebalanced Ferrous Wrought


### FIXED
- Inventory Pets kubejs script
- Iron furnace crash (By removing iron furnaces)
- Menu BGM will now correctly play instead of vanilla menu bgm
- Gladiator damage in 2nd phase being set to 6. Its now 60
- Arch Maykr last phase was set to 110 damage. it now does 68 at last phase
---

## Another Quality Modpack 3 v1.4


_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.4.md)_

### ADDED
- Ice and Fire: Dragons (Mobs are have been buffed. dont just jump in)
- Draconic Evolution (will now require Mekanism and Thermal parts during progression of the mod, as well as Ice and Fire)
- Inventory Pets (95% are not craftable. can only be found in inventory pet dungeons)

### UPDATED
- Several mods
---
