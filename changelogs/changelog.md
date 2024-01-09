## Another Quality Modpack 3 v1.7

_Forge Loader 40.2.7_ | [Mod Changes](https://github.com/itsdinkd/AQM3/blob/master/changelogs/changelog_mods_1.7.md) |  [Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.7.md)

## HIGHLIGHTS
- Ceiling Torch compatibility with Ice and Fire
- Placing water has been fixed
- New permission added for flan; INTERACTSIGN, If true players can edit signs, e.g. via dyeing them etc
- New content for macaws windows
- Updated ice and fire with a beta build from their github which contains tons of bug fixes
- Anvil Upgrade added (Sophisticated X)
- Nether crashing / slow chunk loading has been fixed
- Removed productive bee ice and fire compatibility
- Backpack open keybind now works in all container screens if the backpack in player's inventory is hovered. That also means that from backpack screen another backpack in player's inventory can be open without the need to go back to player's inventory and open from there (Sophisticated Backpacks)

## ADDED
- Biomancy
  - Bio-Organic-Tech-Magic mod which was inspired by putting concepts of Bio-Manipulation (Biomancy), Biopunk and Flesh Magic into a blender. This mod tries to be the opposite of vile things such as Necromancy and other practices related to harnessing death, instead Biomancy wants to exploit the energy of the living and create new life.
  - Great full showcase video to get started https://youtu.be/Geeo7KTK3Qg
- Wesleys Roguelike Dungeons
   - Adds uniquely generated dungeons throughout the overworld and nether that are themed to biomes where one dungeon will never look like another, with linear progression, at the end of the dungeon you will fight 1 of the 12 dungeon bosses. Featuring key and chest system similar to Treasure2 to distribute loot with some keys only obtainable in special challenges
   - I have configured the mod to allow natural generation (disabled by default) but it is incredibly rare in Overworld, with Nether being much more common. The main way to generate dungeons is by crafting and using a vessel of vision. These dungeons are mid game
- Tinkers Leveling Addon
  - Adds a 'Improveable' trait to tinkers which essentially allows you to upgrade your tool/armor piece that this is applied to via XP that is now gained from said tool and doing that tools job ie; mining, slaying mobs (if sword), etc etc. Each level gives a attribute. 
  - This is a end game trait and has a pricy recipe cost
- Tinkers Planner
  - Adds a client side full scale GUI to allow the player to plan their blueprint for tinkers
  - This can be accessed via the new Planner icon (looks like a blueprint) in Tinkers Station UI and Tinkers Anvil UI
  - You can bookmark saved plans, and when you are ready to actually craft it you would star a bookmark which will pin it to the station/anvil ui, clicking on the tools icon will automatically place all that is needed into the correct slots as well as tell you whats missing if you do not have it
 
## FIXED
- Forge mod loader updated to 40.2.8 to fix fluid issue from 40.2.7
- issue where ‘counting’ advancements were not working on Server. Be prepared, you may get a lot of advancements on login (inventory pets)
- Inventory book mixin being unable to apply (BYG)
- Nether chunks loading very very slow due to infernal expansion and amplified nether
- Durability will now show on equipment in REI / when durability is full
- Amethyst Ore not smelting Amethyst and Black Opal Ore smithing amethyst. this is now corrected.
- serverstart.sh not working for linux
- Broken recipes (BYG)
- Ether Grass crash (BYG)
- Fixed Double Chest Pets not opening (inventory pets)
- Chest Pet(s) Dupe exploit (inventory pets)
- Mod updates to fix rare crash instances
- Dislocators vanishing when dropped (Draconnic Evolution)
- Stacks of items being attached to Eccentric Tome
- Temple generation hanging in void worlds
- Several issues where chunks would unintentionally be loaded by RS (Refined Storage)
- JEI transfer crash for larger processing recipes (Refined Storage)
- Rare autocrafting crash (Refined Storage)
- Duplication bug with the Crafting Grid (Refined Storage)
- Fluid duplication bug with the Importer in certain situations (Refined Storage)
- Reduced block updates when a controller is turning on and off constantly (Refined Storage)
- Attempted to fix issue where Grid doesn't load items and requires a client restart (Refined Storage)
- Improve block breaking prevention (Flan)
- Item collectors trying to collect empty item entities
- World lockup with entity data handlers (Structure Gel API)
- Buckets not having any effect on waterlogged waystones (Waystones)
- Warp stone cooldown getting corrupted into millions of seconds (Waystones)
- Removed ice and fire silver ore as there is thermal silver ore

## REMOVED
- SeedDrops due to causing incompatibility issues and preventing seeds naturally dropping from other mods that are not added into the config
- Infernal Expansion conflicts with Amplified Nether causing very slow chunk generation 
---

## Another Quality Modpack 3 v1.6.1

_Forge Loader 40.2.7_ | [Mod Changes](https://github.com/itsdinkd/AQM3/blob/master/changelogs/changelog_mods_1.6.1.md) |  [Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.6.1.md)

## REMOVED
- Steam and Rails (Due to incompatibility on server end with Create. I apologize for any inconvenience this may have caused.)

## CHANGED
- Fixed BCC config to reflect latest version
---


## Another Quality Modpack 3 v1.6

_Forge Loader 40.2.7_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.6.md)_

## ADDED
- Observable (scans the world for mspt on tile entities. helps with finding laggy bases) 

## REMOVED
- Advanced Chimneys -- Lag issues, and crashes
- Spirit (This was accidently added into 1.5 on accident. This was never balanced. You may add back if you'd like though) 

## CHANGES/HIGHLIGHTS
- Reduced frequency of Inventory Pet dungeons
- Enlightend has been remade from the ground up, porting its 1.19 version to 1.18.2. I unfortunately do not have a list of changes as none was actually provided anywhere
- **BlockCarpentry**
  - Added guide book, 5 new modifiers, new signs, and more.
- **Corail Tombstone**
  - Prevents to use exorcism with bad alignment
  - Prevents to find familiar Receptacle with 'mounted undead'
- Flan provides better protection support
- Thermal now has built in support with Mekanism
- Kobolds had a 1.20.1 backport to 1.18.2 which means new features / changes
- Macaws Windows updates with windows being able to be opened again, and as well as fixes, changes, and additions

## FIXED
- Fixed potential crash from unexpectedly large health/absorption values **(AppleSkin)**
- Lot of bug fixes for Botany pots **(Botany Pots)**
- Crash confliction with Jade and Saturn **(Jade)**
- Remove unnecessary Vec2 optimization which fixes incompatibility with a lot of mods. **(Saturn)**
- Fixed some blocks not visually connecting to the entangled block **(Entangled)**
- Fixed poorly-balanced Create crushing recipes for warped nether brick **(Bygone Nether)**
- Fixed crash with Create copycat blocks **(Connected Glass)**
- Fixed tesseract resource transferring with neighboring blocks sometimes breaking **Tesseract)**
- Fix wrong wool sometimes being dropped for specific modded items **(Energetic Sheep)**
- Fixed Book of Recycling **(Corails Tombstone)**
- **EvilCraft**
  - Fix Spirit Furnace not always producing player drops
  - Add Farming for Blockheads merchant to spirit blacklist due to a rendering issue crash
  - Fix crash when reanimating mobs without spawn egg
- **Create**
  - Fixed Deployers not able to interact with blocks using block-like items
  - Fixed Elevator Contraptions sometimes powering multiple contacts upon arrival
  - Fixed rollers in fill mode consuming blocks from a train without placing any
  - Fixed crash when applying trapdoors to copycat panels
  - Fixed unlit campfires providing boiler heat
  - Fixed pipe-based cobblestone generation not working correctly
  - Fixed Turntable handler causing a crash during world shutdown
  - Fixed Schematics failing to load when containing items with sensitive nbt
  - plus more fixes.
- Fixed minor rendering bug with energy core particles. **(Draconic Evolution)**
---


## Another Quality Modpack 3 v1.5

_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.5.md)_

## REMOVED
- Create Deco due to not being compatible with Create 0.5.1c causing init crashes

## ADDED
- Better Fishing Rods (Great showcase; https://www.youtube.com/watch?v=ZoYod1gefGg&t=1s)
  * Adds new fishing system overriding the vanilla one
  * You can now increase fishing levels which increase loot chances such as looting rare enchantments.
    * These levels appear as enchantments on the rod.
  * This mod also provides new rods with abilities.
- Blood Smeltery
  - Adds more tinker construct integration (And is compatible with Thermal and Create) into Blood Magic, featuring new runes, tools, modifiers, fluids, and blocks.
  - View the mod page for more information on what this adds and how to use it https://www.curseforge.com/minecraft/mc-mods/blood-smeltery
- Infernal Expansion
  - Overhauls Nether adding biomes, mobs, foods, structures, blocks, and more.

## CHANGES/HIGHLIGHTS
- New Macaw Doors from latest update
- Enabled Armor inventory hud by default
- Added Cataclysm Boss obtainables to the boss quest chapter
- Latest graveyard update fixes a lot of past issues, along with having better terralith compatibility
- Blacklisted boss and unique mobs from being disarmed and caught in balls
- Lowered disarm percent per level
- Tinkers Construct Integrations mod now supports Ice and Fire

## FIXED
- Fixed Crashing in Nether **(Bygone Nether)**
- Prevent villager bosses from filling in trades during worldgen **(Brutal Bosses)**
- Fixed 32 signed integer overflow with RS Bridge functions when too many  external storages(Or high sized storages) or too many disks were used. **(Advanced Peripherals)**
- Hordes of mobs will no longer spawn in light level > 1 **(Graveyard)**
- Fixed Tesla Coil crash **(Create Additions)**
- Fixed Barbed Wires crash **(Create Additions)**
- Fixed Roling Mill JEI crash **(Create Additions)**
- Fixed blocks not being able to be mined by Pickaxe **(Create Additions)**
- Fixed LevelMixin crash **(Create Slice n Dice)**
- Errors from rendering blocks inside entangled blocks will now be reported instead of crashing the game **(Entangled)**
- Fix Envir Acc crash when degrading biome **(Evilcraft)**
- Fixed crash with certain mods when transferring items **(Item Collectors)**
- Fixed storage tier upgrade recipes JEI integration to not crash when additional alternatives to upgrade materials exist and by extension stop this from breaking the whole Storage JEI integration **(Sophisticated Storage)**
- Life Leech no longer refills hunger **(Cyclic)**
- Fix items that use RF not charging items on servers **(Cyclic)**
- Fixed tesseracts getting stuck not transferring **(Tesseract)**
- Fixed player skins inside the tesseract screen not rendering sometimes **(Tesserect)**
---

## Another Quality Modpack 3 v1.4.3hf

_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.3hf.md)_

## Hotfix Change
- Updated ModernFix and REI to prevent a failed mod crash

---

## Another Quality Modpack 3 v1.4.3

_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.3.md)_

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

## Another Quality Modpack 3 v1.4.2-Hotfix

_Forge Loader 40.2.2_  _[Modlist](https://github.com/itsdinkd/AQM3/blob/master/changelogs/modlist_1.4.2.md)_


### FIXED
- Fixed Remove kubejs file typo -- broke removed recipes
- Server pack not on correct forge modloader version
---

## Another Quality Modpack 3 v1.4.2    

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
