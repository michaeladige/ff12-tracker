export const bestiaryZones = [
  "The Dalmascan Sands",
  "Giza Plains",
  "Garamsythe Waterway",
  "Barheim Passage",
  "Lhusu Mines",
  "Yensan Sandsea",
  "Tomb of Raithwall",
  "Ozmone Plains",
  "Golmore Jungle",
  "Henne Mines",
  "Paramina Rift",
  "Stilshrine of Miriam",
  "Mosphoran Highwaste",
  "The Salikawood",
  "Phon Coast",
  "Tchita Uplands",
  "Sochen Cave Palace",
  "Feywood",
  "Giruvegan",
  "Ridorana Cataract",
  "The Pharos",
  "Zertinan Caverns",
  "Cerobi Steppe",
  "Nabreus Deadlands",
  "Necrohol of Nabudis",
  "Hunts",
  "Elite Hunts",
  "Espers",
  "Bosses",
  "Rare Games",
  "Humanoid",
  "Empire",
];

export const enemies = [
  // The Dalmascan Sands
  {
    id: "e-201", name: "Sleipnir", zone: "The Dalmascan Sands",
    level: { min: 30, max: 30 }, hp: { min: 18000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Pelt", rate: "100%" },
      { item: "Storm Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Quality Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Storm Crystal", type: "drop"}],
    abilities: ["Attack", "Lunge (1.5x)", "Ram (1.5x)"],
    notes: "Rare Game. Found in The Dalmascan Sands.",
  },
  {
    id: "e-202", name: "Cactuar (Dalmascan)", zone: "The Dalmascan Sands",
    level: { min: 1, max: 1 }, hp: { min: 3, max: 3 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Cactus Fruit", rate: "100%" },
      { item: "1000 Gil", rate: "100%" },
    ],
    steals: [
      { item: "Cactus Fruit", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Cactus Fruit", type: "drop"}, {item: "Cactus Fruit", type: "drop"}],
    abilities: ["1000 Needles"],
    notes: "Always deals 1000 damage with 1000 Needles. Runs away quickly.",
  },
  {
    id: "e-203", name: "Wolf (Alpha)", zone: "The Dalmascan Sands",
    level: { min: 5, max: 8 }, hp: { min: 500, max: 800 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Wolf Pelt", rate: "40%" },
      { item: "Wind Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Antidote", rate: "1%" },
    ],
    steals: [
      { item: "Wind Stone", rate: "55%" },
      { item: "Wolf Pelt", rate: "10%" },
      { item: "Potion", rate: "3%" },
    ],
    poach: [
      { item: "Wolf Pelt", rate: "95%" },
      { item: "Eye Drops", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Howl (ATK up)"],
    notes: "Alpha of the pack. All wolves attack if Alpha is engaged.",
  },
  {
    id: "e-204", name: "Cockatrice (Dalmascan)", zone: "The Dalmascan Sands",
    level: { min: 8, max: 12 }, hp: { min: 800, max: 1200 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Small Feather", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Phoenix Down", rate: "1%" },
    ],
    steals: [
      { item: "Small Feather", rate: "55%" },
      { item: "Potion", rate: "10%" },
      { item: "Phoenix Down", rate: "3%" },
    ],
    poach: [
      { item: "Small Feather", rate: "95%" },
      { item: "Chromed Leathers", rate: "5%" },
    ],
    abilities: ["Attack", "Poke (1.5x)"],
    notes: "Can inflict Petrify.",
  },
  {
    id: "e-205", name: "Dive Talon (Dalmascan)", zone: "The Dalmascan Sands",
    level: { min: 28, max: 30 }, hp: { min: 4500, max: 5500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Berserk"] },
    drops: [
      { item: "Wind Magicite", rate: "40%" },
      { item: "Handkerchief", rate: "25%" },
      { item: "Giant Feather", rate: "5%" },
      { item: "Burning Bow", rate: "1%" },
    ],
    steals: [
      { item: "Giant Feather", rate: "55%" },
      { item: "Large Feather", rate: "55%" },
      { item: "120 Gil", rate: "10%" },
    ],
    poach: [
      { item: "Giant Feather", rate: "95%" },
      { item: "Large Feather", rate: "95%" },
      { item: "Bundle of Feathers", rate: "5%" },
    ],
    abilities: ["Attack", "Kamikaze (Suicide)"],
    notes: "Enemy is flying. Can kill itself with Kamikaze.",
  },
  {
    id: "e-1", name: "Cactite", zone: "The Dalmascan Sands",
    level: { min: 1, max: 4 }, hp: { min: 2, max: 999 }, mp: { min: 4, max: 1759 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Cactus Fruit", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Stone", rate: "55%" },
      { item: "Cactus Fruit", rate: "10%" },
      { item: "Broadsword", rate: "3%" },
    ],
    poach: [
      { item: "Cactus Fruit", rate: "95%" },
      { item: "Bundle of Needles", rate: "5%" },
    ],
    abilities: ["Attack", "Ram (1.5x)"],
    notes: "50% Chance to be under Sleep. Can run away under 50% HP.",
  },
  {
    id: "e-2", name: "Ichthon", zone: "The Dalmascan Sands",
    level: { min: 9, max: 28 }, hp: { min: 130, max: 2787 }, mp: { min: 84, max: 848 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Fish Scale", rate: "40%" },
      { item: "Water Stone", rate: "25%" },
      { item: "Light Woven Shirt", rate: "5%" },
      { item: "Potion", rate: "1%" },
    ],
    steals: [
      { item: "Fish Scale", rate: "55%" },
      { item: "Eye Drops", rate: "10%" },
      { item: "Phoenix Down", rate: "3%" },
    ],
    poach: [
      { item: "Fish Scale", rate: "95%" },
      { item: "Potion", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Water Cannon"],
    notes: "Docile unless provoked.",
  },
  {
    id: "e-3", name: "Wolf", zone: "The Dalmascan Sands",
    level: { min: 2, max: 14 }, hp: { min: 94, max: 575 }, mp: { min: 30, max: 76 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Wolf Pelt", rate: "40%" },
      { item: "Wind Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Antidote", rate: "1%" },
    ],
    steals: [
      { item: "Wind Stone", rate: "55%" },
      { item: "Wolf Pelt", rate: "10%" },
      { item: "Pointy Hat", rate: "3%" },
    ],
    poach: [
      { item: "Wolf Pelt", rate: "95%" },
      { item: "Eye Drops", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Fangs (Knockback)"],
    notes: "Often appears in packs. Stays close to an Alpha if one is present.",
  },
  {
    id: "e-4", name: "Wild Saurian", zone: "The Dalmascan Sands",
    level: { min: 29, max: 30 }, hp: { min: 6001, max: 7566 }, mp: { min: 165, max: 270 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Earth Magicite", rate: "25%" },
      { item: "Chronos Tear", rate: "5%" },
      { item: "Bone Helm", rate: "1%" },
    ],
    steals: [
      { item: "Tanned Hide", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Tyrant Bone", rate: "5%" },
    ],
    abilities: ["Attack", "Ram (1.5x)", "Sonic Fangs (Knockback)", "Cannibalise"],
    notes: "Docile unless provoked. Can Cannibalise nearby Wolf to boost level.",
  },
  {
    id: "e-5", name: "Cockatrice", zone: "The Dalmascan Sands",
    level: { min: 3, max: 11 }, hp: { min: 136, max: 617 }, mp: { min: 40, max: 308 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Small Feather", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Phoenix Down", rate: "1%" },
    ],
    steals: [
      { item: "Small Feather", rate: "55%" },
      { item: "Potion", rate: "10%" },
      { item: "Phoenix Down", rate: "3%" },
    ],
    poach: [
      { item: "Small Feather", rate: "95%" },
      { item: "Chromed Leathers", rate: "5%" },
    ],
    abilities: ["Attack", "Poke (1.5x)"],
    notes: "",
  },
  {
    id: "e-6", name: "Gnoma Entite", zone: "The Dalmascan Sands",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Earth Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Gnoma Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Gnoma Halcyon", rate: "3%" },
    ],
    poach: [],
    lootItems: [{item: "Earth Crystal", type: "drop"}, {item: "Feystone", type: "drop"}, {item: "Gnoma Halcyon", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Feystone", type: "drop"}, {item: "Gnoma Halcyon", type: "drop"}],
    lootItems: [{item: "Small Feather", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Small Feather", type: "drop"}],
    lootItems: [{item: "Tanned Hide", type: "drop"}, {item: "Earth Magicite", type: "drop"}, {item: "Tanned Hide", type: "drop"}, {item: "Leo Gem", type: "steal"}],
    lootItems: [{item: "Wolf Pelt", type: "drop"}, {item: "Wind Stone", type: "drop"}, {item: "Wind Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}],
    lootItems: [{item: "Fish Scale", type: "drop"}, {item: "Water Stone", type: "drop"}, {item: "Fish Scale", type: "drop"}],
    lootItems: [{item: "Cactus Fruit", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Virgo Gem", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Cactus Fruit", type: "drop"}],
    lootItems: [{item: "Wind Magicite", type: "drop"}, {item: "Giant Feather", type: "drop"}, {item: "Giant Feather", type: "drop"}, {item: "Large Feather", type: "steal"}],
    lootItems: [{item: "Small Feather", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Small Feather", type: "drop"}],
    lootItems: [{item: "Wolf Pelt", type: "drop"}, {item: "Wind Stone", type: "drop"}, {item: "Wind Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}],
    abilities: ["Dispel", "Firaga", "Thundaga", "Blizzaga", "Reflect", "Protect", "Shell"],
    notes: "Docile unless provoked. Only appears during Sandstorms. Takes less damage from Guns/Measures.",
  },
  {
    id: "e-7", name: "Dive Talon", zone: "The Dalmascan Sands",
    level: { min: 27, max: 28 }, hp: { min: 4022, max: 4090 }, mp: { min: 480, max: 489 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Berserk"] },
    drops: [
      { item: "Wind Magicite", rate: "40%" },
      { item: "Handkerchief", rate: "25%" },
      { item: "Giant Feather", rate: "5%" },
      { item: "Burning Bow", rate: "1%" },
    ],
    steals: [
      { item: "Giant Feather", rate: "55%" },
      { item: "Large Feather", rate: "55%" },
      { item: "120 Gil", rate: "10%" },
    ],
    poach: [
      { item: "Giant Feather", rate: "95%" },
      { item: "Large Feather", rate: "95%" },
      { item: "Bundle of Feathers", rate: "5%" },
    ],
    abilities: ["Attack", "Kamikaze (Suicide)"],
    notes: "Enemy is flying. Can kill itself with Kamikaze (no EXP/LP if defeated this way).",
  },
  // Giza Plains
  {
    id: "e-8", name: "Hyena", zone: "Giza Plains",
    level: { min: 2, max: 19 }, hp: { min: 94, max: 960 }, mp: { min: 30, max: 110 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Fire Stone", rate: "40%" },
      { item: "Wolf Pelt", rate: "25%" },
      { item: "Cotton Cap", rate: "5%" },
      { item: "Potion", rate: "1%" },
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Wolf Pelt", rate: "10%" },
      { item: "Potion", rate: "3%" },
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Wolf Pelt", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)"],
    notes: "Patrols an Alpha if present, all attack if the Alpha is engaged.",
  },
  {
    id: "e-9", name: "Wooly Gator", zone: "Giza Plains",
    level: { min: 21, max: 22 }, hp: { min: 2233, max: 2253 }, mp: { min: 175, max: 180 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Berserk"] },
    drops: [
      { item: "Braid Wool", rate: "40%" },
      { item: "Wind Stone", rate: "25%" },
      { item: "Prince's Kiss", rate: "5%" },
      { item: "Hi-Potion", rate: "1%" },
    ],
    steals: [
      { item: "Braid Wool", rate: "55%" },
      { item: "Nu Khai Sand", rate: "10%" },
      { item: "Sirius", rate: "3%" },
    ],
    poach: [
      { item: "Braid Wool", rate: "95%" },
      { item: "Fine Wool", rate: "5%" },
    ],
    abilities: ["Attack", "Ram (1.5x)", "Sonic Fangs (1.5x, 100% counter to Magic)", "Flash (Blind)"],
    notes: "Can inflict Blind. Can cast Shell. Docile until provoked. Rain only.",
  },
  {
    id: "e-10", name: "Giza Rabbit", zone: "Giza Plains",
    level: { min: 1, max: 2 }, hp: { min: 19, max: 843 }, mp: { min: 0, max: 880 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Drab Wool", rate: "40%" },
      { item: "Water Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Phoenix Down", rate: "1%" },
    ],
    steals: [
      { item: "Water Stone", rate: "55%" },
      { item: "Drab Wool", rate: "10%" },
      { item: "Antidote", rate: "3%" },
    ],
    poach: [
      { item: "Drab Wool", rate: "95%" },
      { item: "Headgear", rate: "5%" },
    ],
    abilities: ["Attack", "Protect", "Lunge (1.5x)", "Cure", "Cura", "Potion"],
    notes: "Docile until provoked. Will run away often if attacked. Can heal and buff the player.",
  },
  {
    id: "e-11", name: "Great Tortoise", zone: "Giza Plains",
    level: { min: 20, max: 21 }, hp: { min: 3818, max: 3838 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow"] },
    drops: [
      { item: "Turtle Shell", rate: "40%" },
      { item: "Water Stone", rate: "25%" },
      { item: "Phoenix Down", rate: "5%" },
      { item: "Water Magicite", rate: "1%" },
    ],
    steals: [
      { item: "Water Stone", rate: "55%" },
      { item: "Aries Gem", rate: "10%" },
      { item: "Soldier's Cap", rate: "3%" },
    ],
    poach: [
      { item: "Turtle Shell", rate: "95%" },
      { item: "Nu Khai Sand", rate: "5%" },
    ],
    abilities: ["Attack", "Aqua", "Purify", "Focus (30% HP)", "Flash (Blind)", "Sonic Turn (1.5x)"],
    notes: "Immune to Water. Can inflict Blind. Small Aggro range. Rain only.",
  },
  {
    id: "e-12", name: "Werewolf", zone: "Giza Plains",
    level: { min: 19, max: 21 }, hp: { min: 2526, max: 2570 }, mp: { min: 210, max: 214 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Slasher", rate: "1%" },
    ],
    steals: [
      { item: "Quality Hide", rate: "55%" },
      { item: "Teleport Stone", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Tanned Giantskin", rate: "5%" },
    ],
    abilities: ["Attack", "Smite of Rage (1.5x)", "Ram (1.5x)", "Bacchus's Wine (Berserk)"],
    notes: "Always appears in a pair. Can apply Berserk to themselves.",
  },
  // Garamsythe Waterway
  {
    id: "e-13", name: "Dire Rat", zone: "Garamsythe Waterway",
    level: { min: 1, max: 37 }, hp: { min: 2, max: 3647 }, mp: { min: 10, max: 185 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Everything except Disable and Sap"] },
    drops: [
      { item: "Rat Pelt", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Antidote", rate: "5%" },
      { item: "Leather Shield", rate: "1%" },
    ],
    steals: [
      { item: "Rat Pelt", rate: "55%" },
      { item: "Fire Stone", rate: "10%" },
      { item: "1 Gil", rate: "10%" },
    ],
    poach: [
      { item: "Rat Pelt", rate: "95%" },
      { item: "Rat Tail", rate: "5%" },
    ],
    abilities: ["Attack"],
    notes: "Sometimes is under Confuse status.",
  },
  {
    id: "e-14", name: "Baritine Croc", zone: "Garamsythe Waterway",
    level: { min: 40, max: 42 }, hp: { min: 33526, max: 33526 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Stone", rate: "25%" },
      { item: "Wolf Pelt", rate: "5%" },
      { item: "Storm Magicite", rate: "1%" },
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Wolf Pelt", rate: "10%" },
      { item: "Storm Magicite", rate: "3%" },
    ],
    poach: [
      { item: "Wolf Pelt", rate: "95%" },
      { item: "Storm Magicite", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Jump (2x)"],
    notes: "Drained version only appears after completing Drained sidequest.",
  },
  {
    id: "e-51", name: "Slyt", zone: "Garamsythe Waterway",
    level: { min: 45, max: 45 }, hp: { min: 45000, max: 45000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Thunder"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Slyt's Gem", rate: "100%" },
      { item: "Storm Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "drop"}, {item: "Storm Crystal", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}, {item: "Storm Magicite", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}, {item: "Storm Magicite", type: "drop"}],
    lootItems: [{item: "Rat Pelt", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Rat Pelt", type: "drop"}, {item: "Fire Stone", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Teleport Stone", type: "steal"}, {item: "Gemini Gem", type: "steal"}],
    lootItems: [{item: "Turtle Shell", type: "drop"}, {item: "Water Stone", type: "drop"}, {item: "Water Magicite", type: "drop"}, {item: "Water Stone", type: "drop"}, {item: "Aries Gem", type: "steal"}],
    lootItems: [{item: "Drab Wool", type: "drop"}, {item: "Water Stone", type: "drop"}, {item: "Water Stone", type: "drop"}, {item: "Drab Wool", type: "drop"}],
    lootItems: [{item: "Braid Wool", type: "drop"}, {item: "Wind Stone", type: "drop"}, {item: "Braid Wool", type: "drop"}],
    lootItems: [{item: "Fire Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}],
    lootItems: [{item: "Wind Magicite", type: "drop"}, {item: "Giant Feather", type: "drop"}, {item: "Giant Feather", type: "drop"}, {item: "Large Feather", type: "steal"}],
    abilities: ["Attack", "Thundaga", "Waterga", "Blizzaga"],
    notes: "Esper boss. Found in Garamsythe Waterway.",
  },
  {
    id: "e-52", name: "Phoenix", zone: "Garamsythe Waterway",
    level: { min: 42, max: 42 }, hp: { min: 40000, max: 40000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: ["Fire"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Phoenix Pinion", rate: "100%" },
      { item: "Fire Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Fire Crystal", type: "drop"}, {item: "Fire Crystal", type: "drop"}],
    abilities: ["Attack", "Firaga", "Rebirth Flame", "Flame Burst"],
    notes: "Esper boss. Found in Garamsythe Waterway. Absorbs Fire.",
  },
  {
    id: "e-53", name: "Cactuar", zone: "Garamsythe Waterway",
    level: { min: 1, max: 1 }, hp: { min: 3, max: 3 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Cactus Fruit", rate: "100%" },
      { item: "1000 Gil", rate: "100%" },
    ],
    steals: [
      { item: "Cactus Fruit", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Cactus Fruit", type: "drop"}, {item: "Cactus Fruit", type: "drop"}],
    abilities: ["1000 Needles"],
    notes: "Always deals 1000 damage with 1000 Needles. Runs away quickly.",
  },
  // Barheim Passage
  {
    id: "e-198", name: "Dark Flan (Rare)", zone: "Barheim Passage",
    level: { min: 30, max: 30 }, hp: { min: 25000, max: 25000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Foul Flesh", rate: "100%" },
      { item: "Dark Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Foul Flesh", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Dark Crystal", type: "drop"}],
    abilities: ["Attack", "Darkness (Dark damage)"],
    notes: "Rare Game. Found in Barheim Passage.",
  },
  {
    id: "e-199", name: "Carrion Worm", zone: "Barheim Passage",
    level: { min: 15, max: 18 }, hp: { min: 3200, max: 4500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Rat Pelt", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Antidote", rate: "5%" },
      { item: "Potion", rate: "1%" },
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Rat Pelt", rate: "10%" },
      { item: "Antidote", rate: "3%" },
    ],
    poach: [
      { item: "Rat Pelt", rate: "95%" },
      { item: "Antidote", rate: "5%" },
    ],
    abilities: ["Attack"],
    notes: "Found in packs.",
  },
  {
    id: "e-54", name: "Gizamaluk", zone: "Barheim Passage",
    level: { min: 25, max: 25 }, hp: { min: 15000, max: 15000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Thunder"], absorbs: ["Water"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Gizamaluk's Gem", rate: "100%" },
      { item: "Water Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Water Crystal", type: "drop"}, {item: "Water Crystal", type: "drop"}],
    lootItems: [{item: "Rat Pelt", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Rat Pelt", type: "drop"}],
    abilities: ["Attack", "Aquaga", "Thundaga", "Blizzaga"],
    notes: "Esper boss. Found in Barheim Passage. Absorbs Water.",
  },
  {
    id: "e-55", name: "Iron Giant", zone: "Barheim Passage",
    level: { min: 30, max: 32 }, hp: { min: 20000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "Whirlwind Slash (1.5x)"],
    notes: "Powerful construct. High physical defense.",
  },
  {
    id: "e-56", name: "Dark Flan", zone: "Barheim Passage",
    level: { min: 15, max: 18 }, hp: { min: 3200, max: 4500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Foul Flesh", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "Foul Flesh", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Foul Flesh", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Darkness (Dark damage)"],
    notes: "Amorphous enemy. Absorbs Dark.",
  },
  {
    id: "e-57", name: "Reaver", zone: "Barheim Passage",
    level: { min: 20, max: 22 }, hp: { min: 8500, max: 9500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Slash (Dark damage)", "Sword Sweep (1.5x)"],
    notes: "Undead knight. Uses powerful dark attacks.",
  },
  {
    id: "e-58", name: "Zalera", zone: "Barheim Passage",
    level: { min: 35, max: 35 }, hp: { min: 35000, max: 35000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Zalera Gem", rate: "100%" },
      { item: "Dark Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "drop"}, {item: "Dark Crystal", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Foul Flesh", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Foul Flesh", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    abilities: ["Attack", "Death", "Darkga", "Scourge"],
    notes: "Esper boss. Found in Barheim Passage. Absorbs Dark.",
  },
  {
    id: "e-15", name: "Skeleton", zone: "Barheim Passage",
    level: { min: 6, max: 14 }, hp: { min: 291, max: 1140 }, mp: { min: 155, max: 180 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bone Fragment", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "Bone Fragment", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Bone Fragment", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)"],
    notes: "",
  },
  {
    id: "e-16", name: "Zombie", zone: "Barheim Passage",
    level: { min: 6, max: 15 }, hp: { min: 288, max: 1430 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Foul Flesh", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "Foul Flesh", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Foul Flesh", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Tackle (1.5x)"],
    notes: "",
  },
  {
    id: "e-17", name: "Ghost", zone: "Barheim Passage",
    level: { min: 7, max: 16 }, hp: { min: 310, max: 1490 }, mp: { min: 160, max: 190 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "Glass Jewel", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Glass Jewel", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Darkness (Dark damage)"],
    notes: "Flying enemy.",
  },
  // Lhusu Mines
  {
    id: "e-200", name: "Silver Lobo", zone: "Lhusu Mines",
    level: { min: 15, max: 18 }, hp: { min: 3200, max: 4500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Wolf Pelt", rate: "40%" },
      { item: "Wind Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Antidote", rate: "1%" },
    ],
    steals: [
      { item: "Wind Stone", rate: "55%" },
      { item: "Wolf Pelt", rate: "10%" },
      { item: "Potion", rate: "3%" },
    ],
    poach: [
      { item: "Wolf Pelt", rate: "95%" },
      { item: "Eye Drops", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Fangs (Knockback)"],
    notes: "Found in packs.",
  },
  {
    id: "e-59", name: "Lamia", zone: "Lhusu Mines",
    level: { min: 25, max: 28 }, hp: { min: 8500, max: 10000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Scratch (1.5x)", "Song (Party-wide damage)"],
    notes: "Found in packs. Uses area-of-effect songs.",
  },
  {
    id: "e-60", name: "Golem", zone: "Lhusu Mines",
    level: { min: 30, max: 32 }, hp: { min: 25000, max: 28000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: ["Earth"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Lumber", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Quality Lumber", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Lumber", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Earthquake (Earth damage)", "Harden (DEF up)"],
    notes: "Immune to Earth. Uses powerful physical attacks.",
  },
  {
    id: "e-61", name: "Silvermob", zone: "Lhusu Mines",
    level: { min: 20, max: 22 }, hp: { min: 5500, max: 6500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Stone", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Iron Shell (DEF up)", "Crush (1.5x)"],
    notes: "Defensive enemy with high physical defense.",
  },
  {
    id: "e-18", name: "Slaven", zone: "Lhusu Mines",
    level: { min: 4, max: 11 }, hp: { min: 280, max: 802 }, mp: { min: 80, max: 82 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Stone", rate: "40%" },
      { item: "Tanned Hide", rate: "25%" },
      { item: "Shortbow", rate: "5%" },
      { item: "Eye Drops", rate: "1%" },
    ],
    steals: [
      { item: "Earth Stone", rate: "55%" },
      { item: "Tanned Hide", rate: "10%" },
      { item: "50 Gil", rate: "3%" },
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Tanned Hide", rate: "5%" },
    ],
    abilities: ["Attack", "Stomp (1.5x)", "Gnaw (1.5x)"],
    notes: "50% chance to be under the Sleep status.",
  },
  {
    id: "e-19", name: "Ironshell", zone: "Lhusu Mines",
    level: { min: 13, max: 15 }, hp: { min: 1760, max: 2020 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Carapace", rate: "40%" },
      { item: "Storm Stone", rate: "25%" },
      { item: "Iron Ore", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Iron Carapace", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Carapace", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Flatten (1.5x)", "Iron Shell (defense up)"],
    notes: "Defensive enemy with high physical defense.",
  },
  // Ozmone Plains
  {
    id: "e-195", name: "Thextera (Ozmone)", zone: "Ozmone Plains",
    level: { min: 35, max: 35 }, hp: { min: 20000, max: 20000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Pelt", rate: "100%" },
      { item: "Storm Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Quality Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Storm Crystal", type: "drop"}],
    lootItems: [{item: "Iron Carapace", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Iron Carapace", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Earth Stone", type: "drop"}, {item: "Tanned Hide", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Tanned Hide", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Lumber", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Quality Lumber", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Wolf Pelt", type: "drop"}, {item: "Wind Stone", type: "drop"}, {item: "Wind Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}],
    lootItems: [{item: "Glass Jewel", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Glass Jewel", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Foul Flesh", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Foul Flesh", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Bone Fragment", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Stone", type: "drop"}, {item: "Bone Fragment", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    abilities: ["Attack", "Electrify (Thunder damage)", "Pounce (1.5x)"],
    notes: "Rare Game. Found in Ozmone Plains.",
  },
  {
    id: "e-62", name: "Mu", zone: "Ozmone Plains",
    level: { min: 15, max: 18 }, hp: { min: 3200, max: 4500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Antidote", rate: "1%" },
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Tanned Hide", rate: "10%" },
      { item: "Antidote", rate: "3%" },
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Potion", rate: "5%" },
    ],
    abilities: ["Attack", "Ram (1.5x)", "Lunge (1.5x)"],
    notes: "Docile unless provoked. Found in packs.",
  },
  {
    id: "e-63", name: "Thunderbug", zone: "Ozmone Plains",
    level: { min: 12, max: 14 }, hp: { min: 2500, max: 3200 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Thunder"], weaknesses: ["Water"], absorbs: ["Thunder"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Storm Stone", rate: "40%" },
      { item: "Quality Hide", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Hi-Potion", rate: "1%" },
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Hi-Potion", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Storm Stone", rate: "5%" },
    ],
    abilities: ["Attack", "Thunder (Thunder damage)"],
    notes: "Absorbs Thunder. Flying enemy.",
  },
  {
    id: "e-64", name: "Cerberus", zone: "Ozmone Plains",
    level: { min: 40, max: 42 }, hp: { min: 22000, max: 25000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Ice"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Hell-Gate's Flame", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fire Breath (Fire damage)", "Triple Attack", "Bacchus's Wine (Berserk)"],
    notes: "Powerful fire dog. Absorbs Fire.",
  },
  {
    id: "e-65", name: "Humbaba", zone: "Ozmone Plains",
    level: { min: 50, max: 50 }, hp: { min: 80000, max: 80000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Humbaba's Hide", rate: "100%" },
      { item: "Earth Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Earth Crystal", type: "drop"}, {item: "Earth Crystal", type: "drop"}],
    lootItems: [{item: "Prime Pelt", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Hell-Gate's Flame", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Storm Stone", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Quality Hide", type: "drop"}],
    lootItems: [{item: "Tanned Hide", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Tanned Hide", type: "drop"}],
    abilities: ["Attack", "Earthquake (Earth damage)", "Boulder (Earth damage)"],
    notes: "Rare Game. Found in Ozmone Plains.",
  },
  {
    id: "e-20", name: "Adamantoise", zone: "Ozmone Plains",
    level: { min: 27, max: 30 }, hp: { min: 12852, max: 14243 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow"] },
    drops: [
      { item: "Aged Turtle Shell", rate: "40%" },
      { item: "Water Crystal", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Aries Gem", rate: "1%" },
    ],
    steals: [
      { item: "Aged Turtle Shell", rate: "55%" },
      { item: "Aries Gem", rate: "10%" },
      { item: "Officer's Hat", rate: "3%" },
    ],
    poach: [
      { item: "Aged Turtle Shell", rate: "95%" },
      { item: "Ancient Turtle Shell", rate: "5%" },
    ],
    abilities: ["Attack", "Aquara", "Fira", "Blizzara", "Thundara", "Flatten (1.5x)", "Purify", "Flash (Blind)"],
    notes: "Immune to Water. Can inflict Blind. Small Aggro leash.",
  },
  {
    id: "e-21", name: "Zaghnal", zone: "Ozmone Plains",
    level: { min: 22, max: 25 }, hp: { min: 5600, max: 6200 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Storm Stone", rate: "25%" },
      { item: "Wolf Pelt", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Slash (1.5x)", "War Cry (ATK up)"],
    notes: "Often found in packs.",
  },
  // Golmore Jungle
  {
    id: "e-194", name: "Tonnberry (Golmore)", zone: "Golmore Jungle",
    level: { min: 35, max: 35 }, hp: { min: 25000, max: 25000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Tonberry Knife", rate: "100%" },
    ],
    steals: [
      { item: "Tonberry Knife", rate: "3%" },
    ],
    poach: [],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Wolf Pelt", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Aged Turtle Shell", type: "drop"}, {item: "Water Crystal", type: "drop"}, {item: "Teleport Stone", type: "drop"}, {item: "Aries Gem", type: "drop"}, {item: "Aged Turtle Shell", type: "drop"}, {item: "Aries Gem", type: "drop"}],
    abilities: ["Attack", "Everyone's Grudge", "Chef's Knife"],
    notes: "Rare Game. Uses Everyone's Grudge for massive damage.",
  },
  {
    id: "e-66", name: "Elder Treant", zone: "Golmore Jungle",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Lumber", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Quality Lumber", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Lumber", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Root (1.5x)", "Entangle (Immobilise)", "Thorn (poison)"],
    notes: "Immune to Earth. Uses entangling vines.",
  },
  {
    id: "e-67", name: "Flowering Cactoid", zone: "Golmore Jungle",
    level: { min: 10, max: 12 }, hp: { min: 1500, max: 2000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Cactus Fruit", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Bundle of Needles", rate: "1%" },
    ],
    steals: [
      { item: "Earth Stone", rate: "55%" },
      { item: "Cactus Fruit", rate: "10%" },
      { item: "Bundle of Needles", rate: "3%" },
    ],
    poach: [
      { item: "Cactus Fruit", rate: "95%" },
      { item: "Bundle of Needles", rate: "5%" },
    ],
    abilities: ["Attack", "Needle (1.5x)"],
    notes: "Can inflict Poison.",
  },
  {
    id: "e-68", name: "Tonberry", zone: "Golmore Jungle",
    level: { min: 40, max: 40 }, hp: { min: 30000, max: 30000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Tonberry Knife", rate: "100%" },
    ],
    steals: [
      { item: "Tonberry Knife", rate: "3%" },
    ],
    poach: [],
    lootItems: [{item: "Cactus Fruit", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Bundle of Needles", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Cactus Fruit", type: "drop"}, {item: "Bundle of Needles", type: "drop"}],
    lootItems: [{item: "Quality Lumber", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Quality Lumber", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    abilities: ["Attack", "Everyone's Grudge", "Chef's Knife"],
    notes: "Rare Game. Uses Everyone's Grudge for massive damage.",
  },
  {
    id: "e-69", name: "Chaos", zone: "Golmore Jungle",
    level: { min: 35, max: 35 }, hp: { min: 35000, max: 35000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Chaos Gem", rate: "100%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "steal"}],
    abilities: ["Attack", "Doom", "Flare", "Scourge"],
    notes: "Esper boss. Found in Golmore Jungle. Absorbs Dark.",
  },
  {
    id: "e-22", name: "Gnoll", zone: "Golmore Jungle",
    level: { min: 27, max: 30 }, hp: { min: 5400, max: 6100 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Club Smash (1.5x)", "War Cry (ATK up)"],
    notes: "",
  },
  {
    id: "e-23", name: "Treant", zone: "Golmore Jungle",
    level: { min: 28, max: 32 }, hp: { min: 7200, max: 8500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Lumber", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Lumber", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Quality Lumber", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Lumber", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Root (1.5x)", "Entangle (Immobilise)"],
    notes: "Immune to Earth damage.",
  },
  // Henne Mines
  {
    id: "e-197", name: "Slyt (Henne)", zone: "Henne Mines",
    level: { min: 45, max: 45 }, hp: { min: 45000, max: 45000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Thunder"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Slyt's Gem", rate: "100%" },
      { item: "Storm Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "drop"}, {item: "Storm Crystal", type: "drop"}],
    lootItems: [{item: "Quality Lumber", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Lumber", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Quality Lumber", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    abilities: ["Attack", "Thundaga", "Waterga", "Blizzaga"],
    notes: "Rare Game. Found in Henne Mines.",
  },
  {
    id: "e-70", name: "Coeurl", zone: "Henne Mines",
    level: { min: 35, max: 38 }, hp: { min: 12000, max: 14000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Thunder"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Pelt", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Pelt", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Pelt", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Electrify (Thunder damage)", "Pounce (1.5x)", "Bolt (Thunder damage)"],
    notes: "Can inflict Thunder. Uses electric attacks.",
  },
  {
    id: "e-71", name: "Oglop", zone: "Henne Mines",
    level: { min: 15, max: 18 }, hp: { min: 3200, max: 4500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Antidote", rate: "1%" },
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Antidote", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Antidote", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Ram (1.5x)"],
    notes: "Docile unless provoked.",
  },
  {
    id: "e-72", name: "Fafnir", zone: "Henne Mines",
    level: { min: 55, max: 55 }, hp: { min: 200000, max: 200000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice"], weaknesses: ["Fire"], absorbs: ["Ice"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Fafnir's Horn", rate: "100%" },
      { item: "Ice Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Ice Crystal", type: "drop"}, {item: "Ice Crystal", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Fire Stone", type: "drop"}, {item: "Quality Hide", type: "drop"}],
    lootItems: [{item: "Quality Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Pelt", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    abilities: ["Attack", "Ice Breath (Ice damage)", "Blizzaga", "White Breath (Stop)"],
    notes: "Rare Game. Absorbs Ice. Uses powerful ice breath.",
  },
  {
    id: "e-24", name: "Zombie Warlock", zone: "Henne Mines",
    level: { min: 35, max: 38 }, hp: { min: 8900, max: 9500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Forbidden Flesh", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Blood-darkened Bone", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Forbidden Flesh", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Forbidden Flesh", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Darkga (Dark damage)", "Blindga"],
    notes: "Casts powerful Dark magic.",
  },
  // Paramina Rift
  {
    id: "e-73", name: "Zu", zone: "Paramina Rift",
    level: { min: 20, max: 22 }, hp: { min: 6500, max: 7500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Giant Feather", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Charger Narding", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Giant Feather", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Giant Feather", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Gust (Wind damage)", "Wing Buffet (Knockback)"],
    notes: "Flying enemy. Uses wind attacks.",
  },
  {
    id: "e-74", name: "Bandercoeurl", zone: "Paramina Rift",
    level: { min: 38, max: 40 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Pelt", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Prime Pelt", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Pelt", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Pelt", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Electrify (Thunder damage)", "Pounce (1.5x)"],
    notes: "Rare Game. Uses thunder-based attacks.",
  },
  {
    id: "e-75", name: "Deathclaw", zone: "Paramina Rift",
    level: { min: 45, max: 48 }, hp: { min: 30000, max: 35000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Claw (1.5x)", "Rend (DEF down)"],
    notes: "Powerful undead. Uses rending attacks.",
  },
  {
    id: "e-25", name: "Yeti", zone: "Paramina Rift",
    level: { min: 33, max: 36 }, hp: { min: 10200, max: 11500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Ice"], weaknesses: ["Fire"], absorbs: ["Ice"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Arctic Wind", rate: "40%" },
      { item: "Ice Crystal", rate: "25%" },
      { item: "Ice Magicite", rate: "5%" },
      { item: "Aquarius Gem", rate: "1%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Arctic Wind", rate: "10%" },
      { item: "Aquarius Gem", rate: "3%" },
    ],
    poach: [
      { item: "Arctic Wind", rate: "95%" },
      { item: "Aquarius Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Blizzard (Ice damage)", "Heavy Swing (1.5x)"],
    notes: "Absorbs Ice damage.",
  },
  // Stilshrine of Miriam
  {
    id: "e-196", name: "Avenger (Stilshrine)", zone: "Stilshrine of Miriam",
    level: { min: 35, max: 38 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Slash (Dark damage)", "Sword Sweep (1.5x)", "Bacchus's Wine (Berserk)"],
    notes: "Undead knight. Uses dark attacks and self-buffs.",
  },
  {
    id: "e-76", name: "White Mousse", zone: "Stilshrine of Miriam",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Ice"], weaknesses: ["Fire"], absorbs: ["Ice"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Arctic Wind", rate: "40%" },
      { item: "Ice Crystal", rate: "25%" },
      { item: "Aquarius Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Arctic Wind", rate: "10%" },
      { item: "Aquarius Gem", rate: "3%" },
    ],
    poach: [
      { item: "Arctic Wind", rate: "95%" },
      { item: "Aquarius Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Blizzard (Ice damage)", "Blizzara"],
    notes: "Amorphous enemy. Absorbs Ice.",
  },
  {
    id: "e-77", name: "Carrot", zone: "Stilshrine of Miriam",
    level: { min: 40, max: 40 }, hp: { min: 25000, max: 25000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Carrot's Eye", rate: "100%" },
    ],
    steals: [
      { item: "Carrot's Eye", rate: "3%" },
    ],
    poach: [],
    lootItems: [{item: "Arctic Wind", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Aquarius Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Arctic Wind", type: "drop"}, {item: "Aquarius Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Arctic Wind", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Ice Magicite", type: "drop"}, {item: "Aquarius Gem", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Arctic Wind", type: "drop"}, {item: "Aquarius Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Quality Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Pelt", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Giant Feather", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Giant Feather", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    lootItems: [{item: "Forbidden Flesh", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Forbidden Flesh", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    abilities: ["Attack", "1000 Needles", "Flap (Knockback)"],
    notes: "Rare Game. Found in Stilshrine of Miriam.",
  },
  {
    id: "e-78", name: "Ultima", zone: "Stilshrine of Miriam",
    level: { min: 50, max: 50 }, hp: { min: 80000, max: 80000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Holy"], weaknesses: ["Dark"], absorbs: ["Holy"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Ultima Gem", rate: "100%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Holy Crystal", type: "steal"}],
    abilities: ["Attack", "Holy", "Arise", "Protectga", "Shellga"],
    notes: "Esper boss. Found in Stilshrine of Miriam. Absorbs Holy.",
  },
  {
    id: "e-26", name: "Dark Skeleton", zone: "Stilshrine of Miriam",
    level: { min: 30, max: 35 }, hp: { min: 8200, max: 9800 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Slash (Dark damage)", "Sword Sweep (1.5x)"],
    notes: "Powerful undead enemy.",
  },
  // Yensan Sandsea
  {
    id: "e-79", name: "Sand Lion", zone: "Yensan Sandsea",
    level: { min: 15, max: 18 }, hp: { min: 3500, max: 4800 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Earth"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Stone", rate: "55%" },
      { item: "Tanned Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sandstorm (Earth damage)", "Lunge (1.5x)"],
    notes: "Found in the desert. Uses sand-based attacks.",
  },
  {
    id: "e-80", name: "Antlion", zone: "Yensan Sandsea",
    level: { min: 20, max: 22 }, hp: { min: 5500, max: 6500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Earth"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Tanned Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sand Breath (Earth damage)", "Burrow", "Pit (Instant Death)"],
    notes: "Can bury underground. Watch for its pit attack.",
  },
  {
    id: "e-81", name: "Dustia", zone: "Yensan Sandsea",
    level: { min: 12, max: 12 }, hp: { min: 2400, max: 2400 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Wind"], weaknesses: ["Fire"], absorbs: ["Wind"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Dustia's Gem", rate: "100%" },
      { item: "Wind Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Wind Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Wind Crystal", type: "drop"}, {item: "Wind Crystal", type: "drop"}],
    lootItems: [{item: "Tanned Hide", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Tanned Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Tanned Hide", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Earth Stone", type: "drop"}, {item: "Tanned Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    abilities: ["Attack", "Wind Blast (Wind damage)"],
    notes: "Rare Game. Found in Yensan Sandsea. Absorbs Wind.",
  },
  // Phon Coast
  {
    id: "e-27", name: "Aeronite", zone: "Phon Coast",
    level: { min: 35, max: 38 }, hp: { min: 12000, max: 14000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Ice Magicite", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Charger Narding", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Ice Magicite", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Ice Magicite", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Ice Breath (Ice damage)", "Wing Buffet (Knockback)"],
    notes: "Flying enemy. Uses Ice Breath.",
  },
  {
    id: "e-175", name: "Zu (Phon)", zone: "Phon Coast",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Giant Feather", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Charger Narding", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Giant Feather", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Giant Feather", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Gust (Wind damage)", "Wing Buffet (Knockback)"],
    notes: "Flying enemy. Found in packs.",
  },
  {
    id: "e-176", name: "Sahagin", zone: "Phon Coast",
    level: { min: 25, max: 28 }, hp: { min: 6000, max: 7500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Fish Scale", rate: "40%" },
      { item: "Water Crystal", rate: "25%" },
      { item: "Aquarius Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
      { item: "Fish Scale", rate: "10%" },
      { item: "Aquarius Gem", rate: "3%" },
    ],
    poach: [
      { item: "Fish Scale", rate: "95%" },
      { item: "Aquarius Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Aquara", "Lunge (1.5x)"],
    notes: "Found near water.",
  },
  {
    id: "e-177", name: "Carry Arm", zone: "Phon Coast",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Laser (Thunder damage)", "Tackle (1.5x)"],
    notes: "Construct enemy. Uses ranged attacks.",
  },
  // Mosphoran Highwaste
  {
    id: "e-82", name: "BombsAway", zone: "Mosphoran Highwaste",
    level: { min: 20, max: 22 }, hp: { min: 5000, max: 6000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Bomb Fragment", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Bomb Fragment", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Bomb Fragment", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fira", "Fireball (Fire damage)", "Self-Destruct"],
    notes: "Absorbs Fire. Can self-destruct for massive damage.",
  },
  {
    id: "e-83", name: "Flamebound", zone: "Mosphoran Highwaste",
    level: { min: 25, max: 28 }, hp: { min: 8000, max: 9500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Bomb Shell", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Bomb Shell", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Bomb Shell", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Firaga", "Fire Breath (Fire damage)"],
    notes: "Absorbs Fire. Evolved form of Bomb.",
  },
  {
    id: "e-84", name: "Etherpot", zone: "Mosphoran Highwaste",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Ice"], weaknesses: ["Fire"], absorbs: ["Ice"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Aquarius Gem", rate: "40%" },
      { item: "Ice Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Aquarius Gem", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Aquarius Gem", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Blizzaga", "Ice Breath (Ice damage)"],
    notes: "Absorbs Ice. Uses ice-based attacks.",
  },
  // The Salikawood
  {
    id: "e-85", name: "Tyrant", zone: "The Salikawood",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Ice"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Tyrant Bone", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Hell-Gate's Flame", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Tyrant Bone", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Tyrant Bone", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fire Breath (Fire damage)", "Tail Sweep (1.5x)"],
    notes: "Absorbs Fire. Powerful fire-breathing dragon.",
  },
  {
    id: "e-86", name: "Dark Steel", zone: "The Salikawood",
    level: { min: 38, max: 40 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Slash (Dark damage)", "Sword Sweep (1.5x)"],
    notes: "Undead knight. Uses powerful dark attacks.",
  },
  {
    id: "e-87", name: "Diabolos", zone: "The Salikawood",
    level: { min: 45, max: 45 }, hp: { min: 50000, max: 50000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Diabolos Gem", rate: "100%" },
      { item: "Dark Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "drop"}, {item: "Dark Crystal", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Tyrant Bone", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Hell-Gate's Flame", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Tyrant Bone", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Aquarius Gem", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Aquarius Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Bomb Shell", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Bomb Shell", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Bomb Fragment", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Bomb Fragment", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Fish Scale", type: "drop"}, {item: "Water Crystal", type: "drop"}, {item: "Aquarius Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Water Crystal", type: "drop"}, {item: "Fish Scale", type: "drop"}, {item: "Aquarius Gem", type: "drop"}],
    lootItems: [{item: "Giant Feather", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Giant Feather", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    lootItems: [{item: "Ice Magicite", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Ice Magicite", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    abilities: ["Attack", "Darkga", "Gravity", "Flare"],
    notes: "Esper boss. Found in The Salikawood. Absorbs Dark.",
  },
  // Tchita Uplands
  {
    id: "e-180", name: "Facer", zone: "Tchita Uplands",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Ram (1.5x)"],
    notes: "Found in packs.",
  },
  {
    id: "e-181", name: "Orcatoad (Tchita)", zone: "Tchita Uplands",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Water (Water damage)", "Tongue (1.5x)"],
    notes: "Found near water.",
  },
  {
    id: "e-88", name: "Wild Snake", zone: "Tchita Uplands",
    level: { min: 25, max: 28 }, hp: { min: 6000, max: 7500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Tanned Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Lunge (1.5x)", "Poison (Poison)"],
    notes: "Can inflict Poison. Found in packs.",
  },
  {
    id: "e-89", name: "Lindwyrm", zone: "Tchita Uplands",
    level: { min: 40, max: 42 }, hp: { min: 25000, max: 28000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Ice"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Hell-Gate's Flame", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fire Breath (Fire damage)", "Tail Sweep (1.5x)"],
    notes: "Absorbs Fire. Uses fire breath and tail attacks.",
  },
  // Sochen Cave Palace
  {
    id: "e-182", name: "Dark Flan (Sochen)", zone: "Sochen Cave Palace",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Foul Flesh", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Foul Flesh", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Foul Flesh", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Darkness (Dark damage)"],
    notes: "Amorphous enemy. Absorbs Dark.",
  },
  {
    id: "e-183", name: "Iron Giant (Sochen)", zone: "Sochen Cave Palace",
    level: { min: 38, max: 40 }, hp: { min: 22000, max: 25000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "Whirlwind Slash (1.5x)"],
    notes: "Powerful construct. High physical defense.",
  },
  {
    id: "e-90", name: "Dragon Lich", zone: "Sochen Cave Palace",
    level: { min: 40, max: 42 }, hp: { min: 28000, max: 32000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Breath (Dark damage)", "Sword Sweep (1.5x)", "Darkga"],
    notes: "Undead dragon. Uses dark breath and magic.",
  },
  {
    id: "e-91", name: "Ishteen", zone: "Sochen Cave Palace",
    level: { min: 38, max: 40 }, hp: { min: 22000, max: 25000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Bomb Shell", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Bomb Shell", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Bomb Shell", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Firaga", "Fire Breath (Fire damage)", "Self-Destruct"],
    notes: "Absorbs Fire. Can self-destruct.",
  },
  // Feywood
  {
    id: "e-153", name: "Iron Giant (Feywood)", zone: "Feywood",
    level: { min: 45, max: 47 }, hp: { min: 40000, max: 45000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "Whirlwind Slash (1.5x)"],
    notes: "Powerful construct. High physical defense.",
  },
  {
    id: "e-192", name: "Reaper (Feywood)", zone: "Feywood",
    level: { min: 45, max: 47 }, hp: { min: 35000, max: 40000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Death", "Dark Slash (Dark damage)", "Sword Sweep (1.5x)"],
    notes: "Undead reaper. Can inflict instant death.",
  },
  {
    id: "e-193", name: "Banshee (Feywood)", zone: "Feywood",
    level: { min: 45, max: 47 }, hp: { min: 30000, max: 35000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Glass Jewel", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Glass Jewel", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Scream (Silence)", "Darkness (Dark damage)"],
    notes: "Flying enemy. Can inflict Silence.",
  },
  {
    id: "e-107", name: "Ancient Dragon", zone: "Feywood",
    level: { min: 45, max: 48 }, hp: { min: 40000, max: 45000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Ice"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Tanned Hide", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Hell-Gate's Flame", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Prime Tanned Hide", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Tanned Hide", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fire Breath (Fire damage)", "Tail Sweep (1.5x)", "Wing Buffet (Knockback)"],
    notes: "Ancient dragon. Uses fire breath and tail attacks.",
  },
  {
    id: "e-108", name: "Tiamat", zone: "Feywood",
    level: { min: 45, max: 45 }, hp: { min: 55000, max: 55000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Emperor Scale", rate: "100%" },
      { item: "Charger Narding", rate: "100%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Emperor Scale", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Emperor Scale", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Ice Crystal", type: "steal"}, {item: "Emperor Scale", type: "drop"}],
    lootItems: [{item: "Prime Tanned Hide", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Hell-Gate's Flame", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Prime Tanned Hide", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Glass Jewel", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Glass Jewel", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Bomb Shell", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Bomb Shell", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Foul Flesh", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Foul Flesh", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Prime Pelt", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Hell-Gate's Flame", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Tanned Hide", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Tanned Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    abilities: ["Attack", "Ice Breath (Ice damage)", "Dark Breath (Dark damage)", "Tail Sweep", "Flight"],
    notes: "Hunt target. Flying dragon. Uses ice and dark breath.",
  },
  {
    id: "e-109", name: "Rafaga", zone: "Feywood",
    level: { min: 42, max: 44 }, hp: { min: 30000, max: 35000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: ["Wind"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Wind Crystal", rate: "25%" },
      { item: "Charger Narding", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Wind Crystal", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Gust (Wind damage)", "Wing Buffet (Knockback)"],
    notes: "Absorbs Wind. Flying enemy.",
  },
  {
    id: "e-151", name: "Behemoth King", zone: "Feywood",
    level: { min: 48, max: 50 }, hp: { min: 60000, max: 70000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Behemoth Steak", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Behemoth Steak", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Behemoth Steak", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Meteor (massive damage)", "Darkga", "Blizzaga"],
    notes: "Powerful demon. Uses meteor and dark magic.",
  },
  {
    id: "e-152", name: "Avenger", zone: "Feywood",
    level: { min: 45, max: 47 }, hp: { min: 40000, max: 45000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Slash (Dark damage)", "Sword Sweep (1.5x)", "Bacchus's Wine (Berserk)"],
    notes: "Undead knight. Uses dark attacks and self-buffs.",
  },
  {
    id: "e-153", name: "Iron Giant (Feywood)", zone: "Feywood",
    level: { min: 45, max: 47 }, hp: { min: 40000, max: 45000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "Whirlwind Slash (1.5x)"],
    notes: "Powerful construct. High physical defense.",
  },
  // Giruvegan
  {
    id: "e-92", name: "Ahriman", zone: "Giruvegan",
    level: { min: 35, max: 38 }, hp: { min: 12000, max: 14000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Glass Jewel", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Glass Jewel", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Darkga", "Death", "Omniscient"],
    notes: "Flying enemy. Absorbs Dark. Uses dark magic.",
  },
  {
    id: "e-93", name: "Mindflayer", zone: "Giruvegan",
    level: { min: 40, max: 42 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Blink (Doom)", "Mind Blast (MP damage)", "Thundaga"],
    notes: "Uses mental attacks. Can inflict Doom.",
  },
  {
    id: "e-178", name: "Dragon Knight", zone: "Giruvegan",
    level: { min: 42, max: 44 }, hp: { min: 25000, max: 28000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Tanned Hide", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Prime Tanned Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Tanned Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Thunderbolt (Thunder damage)", "Jump (2x)"],
    notes: "Dragon-type enemy. Uses thunder attacks.",
  },
  {
    id: "e-179", name: "Golem (Giruvegan)", zone: "Giruvegan",
    level: { min: 40, max: 42 }, hp: { min: 30000, max: 35000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: ["Earth"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Lumber", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Quality Lumber", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Lumber", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Earthquake (Earth damage)", "Harden (DEF up)"],
    notes: "Immune to Earth. Uses powerful physical attacks.",
  },
  {
    id: "e-29", name: "Giruveganus", zone: "Giruvegan",
    level: { min: 40, max: 43 }, hp: { min: 28000, max: 32000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Tanned Hide", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Broken Greataxe", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Prime Tanned Hide", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Tanned Hide", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Thunderbolt (Thunder damage)", "Tail Swipe (1.5x)"],
    notes: "Dragon-type enemy. Powerful thunder attacks.",
  },
  // Ridorana Cataract
  {
    id: "e-94", name: "Famfrit", zone: "Ridorana Cataract",
    level: { min: 40, max: 40 }, hp: { min: 40000, max: 40000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Thunder"], absorbs: ["Water"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Famfrit Gem", rate: "100%" },
      { item: "Water Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Water Crystal", type: "drop"}, {item: "Water Crystal", type: "drop"}],
    lootItems: [{item: "Prime Tanned Hide", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Broken Greataxe", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Prime Tanned Hide", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    lootItems: [{item: "Quality Lumber", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Quality Lumber", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Prime Tanned Hide", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Prime Tanned Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Glass Jewel", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Glass Jewel", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Behemoth Steak", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Behemoth Steak", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Prime Pelt", type: "drop"}, {item: "Wind Crystal", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Wind Crystal", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    abilities: ["Attack", "Waterga", "Thundaga", "Blizzaga", "Tidal Wave"],
    notes: "Esper boss. Found in Ridorana Cataract. Absorbs Water.",
  },
  {
    id: "e-95", name: "Yiazmat", zone: "Ridorana Cataract",
    level: { min: 70, max: 70 }, hp: { min: 5017230, max: 5017230 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Cloudstone", rate: "100%" },
      { item: "Yiazmat's Horn", rate: "100%" },
    ],
    steals: [
      { item: "Yiazmat's Tail", rate: "3%" },
    ],
    poach: [],
    abilities: ["Attack", "Meteor (massive damage)", "White Breath (Stop)", "Tail Sweep", "Storm Breath"],
    notes: "Superboss. Over 5 million HP. Hunt target. Found in Ridorana Cataract.",
  },
  {
    id: "e-96", name: "Dread Wyrm", zone: "Ridorana Cataract",
    level: { min: 45, max: 48 }, hp: { min: 35000, max: 40000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Breath (Dark damage)", "Tail Sweep (1.5x)", "Wing Buffet (Knockback)"],
    notes: "Flying dragon. Uses dark breath.",
  },
  // The Pharos
  {
    id: "e-30", name: "Forbidden", zone: "The Pharos",
    level: { min: 45, max: 50 }, hp: { min: 35000, max: 42000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Holy"], weaknesses: ["Dark"], absorbs: ["Holy"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Forbidden Flesh", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "High Arcana", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Forbidden Flesh", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Forbidden Flesh", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Holy (Holy damage)", "Dispel", "Reflect"],
    notes: "Absorbs Holy. Uses powerful Holy magic.",
  },
  {
    id: "e-154", name: "Gargoyle", zone: "The Pharos",
    level: { min: 40, max: 42 }, hp: { min: 22000, max: 25000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Breath (Dark damage)", "Wing Buffet (Knockback)"],
    notes: "Flying gargoyle. Absorbs Dark.",
  },
  {
    id: "e-155", name: "Acheron", zone: "The Pharos",
    level: { min: 48, max: 50 }, hp: { min: 50000, max: 55000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Darkga", "Death", "Scourge"],
    notes: "Powerful undead. Uses dark magic and death.",
  },
  {
    id: "e-156", name: "Pandemonium", zone: "The Pharos",
    level: { min: 50, max: 50 }, hp: { min: 60000, max: 60000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Flare", "Holy", "Meteor", "Dispel"],
    notes: "Powerful demon. Uses all elements.",
  },
  {
    id: "e-157", name: "Zodiark", zone: "The Pharos",
    level: { min: 60, max: 60 }, hp: { min: 150000, max: 150000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["All"], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Zodiark Gem", rate: "100%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Holy Crystal", type: "steal"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Forbidden Flesh", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "High Arcana", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Forbidden Flesh", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Prime Pelt", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    abilities: ["Attack", "Firaja", "Blizzaja", "Thundaja", "Holy", "Flare", "Scourge"],
    notes: "Superboss. Found in Pharos Lighthouse. Uses all elements.",
  },
  // Zertinan Caverns
  {
    id: "e-184", name: "Coeurl (Zertinan)", zone: "Zertinan Caverns",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Thunder"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Pelt", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Pelt", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Pelt", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Electrify (Thunder damage)", "Pounce (1.5x)"],
    notes: "Uses thunder attacks.",
  },
  {
    id: "e-185", name: "Ogre (Zertinan)", zone: "Zertinan Caverns",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Smite of Rage (1.5x)", "Club Smash (1.5x)"],
    notes: "Found in packs.",
  },
  {
    id: "e-97", name: "Adamantoise", zone: "Zertinan Caverns",
    level: { min: 40, max: 42 }, hp: { min: 28000, max: 32000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow"] },
    drops: [
      { item: "Aged Turtle Shell", rate: "40%" },
      { item: "Water Crystal", rate: "25%" },
      { item: "Aries Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
      { item: "Aged Turtle Shell", rate: "10%" },
      { item: "Aries Gem", rate: "3%" },
    ],
    poach: [
      { item: "Aged Turtle Shell", rate: "95%" },
      { item: "Ancient Turtle Shell", rate: "5%" },
    ],
    abilities: ["Attack", "Aquaga", "Fira", "Thundara", "Flatten (1.5x)", "Flash (Blind)"],
    notes: "Immune to Water. Uses magic and physical attacks.",
  },
  {
    id: "e-98", name: "Antares", zone: "Zertinan Caverns",
    level: { min: 38, max: 40 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Scorpio Gem", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Scorpio Gem", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Scorpio Gem", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fire Breath (Fire damage)", "Claw (1.5x)"],
    notes: "Absorbs Fire. Scorpion-type enemy.",
  },
  // Cerobi Steppe
  {
    id: "e-186", name: "Zu (Cerobi)", zone: "Cerobi Steppe",
    level: { min: 40, max: 42 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Giant Feather", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Charger Narding", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Giant Feather", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Giant Feather", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Gust (Wind damage)", "Wing Buffet (Knockback)"],
    notes: "Flying enemy.",
  },
  {
    id: "e-187", name: "Antares (Cerobi)", zone: "Cerobi Steppe",
    level: { min: 40, max: 42 }, hp: { min: 20000, max: 24000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Scorpio Gem", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Scorpio Gem", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Scorpio Gem", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fire Breath (Fire damage)", "Claw (1.5x)"],
    notes: "Absorbs Fire. Scorpion-type enemy.",
  },
  {
    id: "e-99", name: "Fenrir", zone: "Cerobi Steppe",
    level: { min: 50, max: 55 }, hp: { min: 65000, max: 75000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Ice Crystal", rate: "25%" },
      { item: "Beastlord Horn", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Ice Breath (Ice damage)", "Howl (party-wide damage)", "Charge (2x damage)"],
    notes: "Hunt target. Extremely powerful ice wolf.",
  },
  {
    id: "e-100", name: "Humbaba", zone: "Cerobi Steppe",
    level: { min: 50, max: 50 }, hp: { min: 80000, max: 80000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Humbaba's Hide", rate: "100%" },
      { item: "Earth Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Earth Crystal", type: "drop"}, {item: "Earth Crystal", type: "drop"}],
    lootItems: [{item: "Prime Pelt", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Beastlord Horn", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    lootItems: [{item: "Scorpio Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Scorpio Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Giant Feather", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Giant Feather", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    lootItems: [{item: "Scorpio Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Scorpio Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Aged Turtle Shell", type: "drop"}, {item: "Water Crystal", type: "drop"}, {item: "Aries Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Water Crystal", type: "drop"}, {item: "Aged Turtle Shell", type: "drop"}, {item: "Aries Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Pelt", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    abilities: ["Attack", "Earthquake (Earth damage)", "Boulder (Earth damage)"],
    notes: "Rare Game. Uses earth-based attacks.",
  },
  {
    id: "e-101", name: "Deathscythe", zone: "Cerobi Steppe",
    level: { min: 45, max: 48 }, hp: { min: 35000, max: 40000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Dark Slash (Dark damage)", "Warp", "Oblivion"],
    notes: "Undead reaper. Uses dark magic and instant death.",
  },
  // Nabreus Deadlands
  {
    id: "e-188", name: "Imp (Nabreus)", zone: "Nabreus Deadlands",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Bomb Fragment", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Bomb Fragment", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Bomb Fragment", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fira", "Fireball (Fire damage)"],
    notes: "Fire-based demon.",
  },
  {
    id: "e-102", name: "Banshee", zone: "Nabreus Deadlands",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Glass Jewel", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Glass Jewel", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Scream (Silence)", "Darkness (Dark damage)"],
    notes: "Flying enemy. Can inflict Silence.",
  },
  {
    id: "e-103", name: "Reaper", zone: "Nabreus Deadlands",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Death", "Dark Slash (Dark damage)", "Sword Sweep (1.5x)"],
    notes: "Undead reaper. Can inflict instant death.",
  },
  {
    id: "e-104", name: "Behemoth", zone: "Nabreus Deadlands",
    level: { min: 45, max: 48 }, hp: { min: 35000, max: 40000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Behemoth Steak", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Behemoth Steak", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Behemoth Steak", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Meteor (massive damage)", "Darkga", "Blizzaga"],
    notes: "Powerful demon. Uses meteor and dark magic.",
  },
  // Necrohol of Nabudis
  {
    id: "e-189", name: "Mindflayer (Necrohol)", zone: "Necrohol of Nabudis",
    level: { min: 40, max: 42 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Blink (Doom)", "Mind Blast (MP damage)", "Thundaga"],
    notes: "Uses mental attacks. Can inflict Doom.",
  },
  {
    id: "e-105", name: "Demon Wall", zone: "Necrohol of Nabudis",
    level: { min: 40, max: 42 }, hp: { min: 30000, max: 35000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Death's-Head", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Blood-darkened Bone", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Stop", "Slow", "Doom", "Death"],
    notes: "Stationary enemy. Uses status ailments.",
  },
  {
    id: "e-106", name: "Hell Wyrm", zone: "Necrohol of Nabudis",
    level: { min: 50, max: 50 }, hp: { min: 100000, max: 100000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Ice"], absorbs: ["Fire"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Hell Wyrm's Scale", rate: "100%" },
      { item: "Fire Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Fire Crystal", type: "drop"}, {item: "Fire Crystal", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Behemoth Steak", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Behemoth Steak", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Glass Jewel", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Glass Jewel", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Bomb Fragment", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Bomb Fragment", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    lootItems: [{item: "Blood-darkened Bone", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Death's-Head", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Blood-darkened Bone", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    abilities: ["Attack", "Hellfire (Fire damage)", "Fire Breath", "Tail Sweep"],
    notes: "Superboss. Absorbs Fire. Uses powerful fire attacks.",
  },
  // Rare Games
  {
    id: "e-31", name: "Bandercoeurl", zone: "Rare Games",
    level: { min: 38, max: 40 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Pelt", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Libra Gem", rate: "5%" },
      { item: "Prime Pelt", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Pelt", rate: "10%" },
      { item: "Libra Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Pelt", rate: "95%" },
      { item: "Libra Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Electrify (Thunder damage)", "Pounce (1.5x)"],
    notes: "Rare enemy found in Paramina Rift.",
  },
  {
    id: "e-32", name: "Fenrir", zone: "Rare Games",
    level: { min: 50, max: 55 }, hp: { min: 65000, max: 75000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Ice Crystal", rate: "25%" },
      { item: "Beastlord Horn", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Leo Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Leo Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Ice Breath (Ice damage)", "Howl (party-wide damage)", "Charge (2x damage)"],
    notes: "Hunt target. Extremely powerful ice wolf. Found in Golmore Jungle.",
  },
  {
    id: "e-33", name: "Yiazmat", zone: "Rare Games",
    level: { min: 70, max: 70 }, hp: { min: 5017230, max: 5017230 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Cloudstone", rate: "100%" },
      { item: "Yiazmat's Horn", rate: "100%" },
    ],
    steals: [
      { item: "Yiazmat's Tail", rate: "3%" },
    ],
    poach: [],
    lootItems: [{item: "Prime Pelt", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Beastlord Horn", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Ice Crystal", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Leo Gem", type: "drop"}],
    lootItems: [{item: "Quality Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Pelt", type: "drop"}, {item: "Libra Gem", type: "drop"}],
    abilities: ["Attack", "Meteor (massive damage)", "White Breath (Stop)", "Tail Sweep", "Storm Breath"],
    notes: "Superboss. Over 5 million HP. Hunt target. Found in Ridorana Cataract.",
  },
  {
    id: "e-135", name: "King Behemoth", zone: "Rare Games",
    level: { min: 50, max: 50 }, hp: { min: 100000, max: 100000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Behemoth Steak", rate: "100%" },
      { item: "Dark Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Behemoth Steak", type: "drop"}, {item: "Dark Crystal", type: "drop"}, {item: "Dark Crystal", type: "drop"}],
    abilities: ["Attack", "Meteor", "Darkga", "Blizzaga"],
    notes: "Rare Game. Uses powerful dark magic.",
  },
  {
    id: "e-136", name: "Orcatoad", zone: "Rare Games",
    level: { min: 35, max: 35 }, hp: { min: 25000, max: 25000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Water (Water damage)", "Tongue (1.5x)"],
    notes: "Rare Game. Found in Ozmone Plains.",
  },
  {
    id: "e-137", name: "Antlion (Rare)", zone: "Rare Games",
    level: { min: 40, max: 40 }, hp: { min: 30000, max: 30000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Earth"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Prime Tanned Hide", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Prime Tanned Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Prime Tanned Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sand Breath (Earth damage)", "Pit (Instant Death)"],
    notes: "Rare Game. Found in Yensan Sandsea.",
  },
  {
    id: "e-138", name: "Vorpal Bunny", zone: "Rare Games",
    level: { min: 40, max: 40 }, hp: { min: 25000, max: 25000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Vorpal Bunny Tail", rate: "100%" },
    ],
    steals: [
      { item: "Vorpal Bunny Tail", rate: "3%" },
    ],
    poach: [],
    lootItems: [{item: "Prime Tanned Hide", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Earth Crystal", type: "drop"}, {item: "Prime Tanned Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Prime Pelt", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Prime Pelt", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    abilities: ["Attack", "1000 Needles", "Flap (Knockback)"],
    notes: "Rare Game. Found in Golmore Jungle.",
  },
  {
    id: "e-158", name: "Ironman", zone: "Rare Games",
    level: { min: 45, max: 45 }, hp: { min: 60000, max: 60000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "100%" },
      { item: "Storm Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Storm Crystal", type: "drop"}],
    abilities: ["Attack", "Sword Sweep (1.5x)", "Whirlwind Slash (1.5x)"],
    notes: "Rare Game. Found in Barheim Passage.",
  },
  {
    id: "e-159", name: "Mindflayer (Rare)", zone: "Rare Games",
    level: { min: 50, max: 50 }, hp: { min: 45000, max: 45000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "100%" },
      { item: "Holy Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Holy Crystal", type: "drop"}],
    abilities: ["Attack", "Blink (Doom)", "Mind Blast (MP damage)", "Thundaga"],
    notes: "Rare Game. Found in Giruvegan.",
  },
  {
    id: "e-160", name: "Crystal Bug", zone: "Rare Games",
    level: { min: 40, max: 40 }, hp: { min: 30000, max: 30000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Crystal Bug Husk", rate: "100%" },
    ],
    steals: [
      { item: "Crystal Bug Husk", rate: "3%" },
    ],
    poach: [],
    abilities: ["Attack", "Thundaga", "Blizzaga", "Firaga"],
    notes: "Rare Game. Found in Henne Mines.",
  },
  {
    id: "e-161", name: "Thextera", zone: "Rare Games",
    level: { min: 35, max: 35 }, hp: { min: 20000, max: 20000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Pelt", rate: "100%" },
      { item: "Storm Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Quality Pelt", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Storm Crystal", type: "drop"}],
    abilities: ["Attack", "Electrify (Thunder damage)", "Pounce (1.5x)"],
    notes: "Rare Game. Found in Giza Plains.",
  },
  {
    id: "e-162", name: "Vyral", zone: "Rare Games",
    level: { min: 40, max: 40 }, hp: { min: 30000, max: 30000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: ["Fire"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Bomb Shell", rate: "100%" },
      { item: "Fire Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Bomb Shell", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Fire Crystal", type: "drop"}],
    abilities: ["Attack", "Firaga", "Fire Breath (Fire damage)"],
    notes: "Rare Game. Found in Mosphoran Highwaste.",
  },
  {
    id: "e-163", name: "Trickler", zone: "Rare Games",
    level: { min: 30, max: 30 }, hp: { min: 18000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Water"], weaknesses: ["Thunder"], absorbs: ["Water"] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Water Crystal", rate: "100%" },
      { item: "Fish Scale", rate: "55%" },
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Water Crystal", type: "drop"}, {item: "Fish Scale", type: "drop"}, {item: "Water Crystal", type: "drop"}],
    abilities: ["Attack", "Aquaga", "Water (Water damage)"],
    notes: "Rare Game. Found in Garamsythe Waterway.",
  },
  // Humanoid
  {
    id: "e-164", name: "Viera Warrior", zone: "Humanoid",
    level: { min: 35, max: 38 }, hp: { min: 12000, max: 15000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "War Cry (ATK up)", "Smite of Rage (1.5x)"],
    notes: "Found in Golmore Jungle.",
  },
  {
    id: "e-165", name: "Viera Mage", zone: "Humanoid",
    level: { min: 35, max: 38 }, hp: { min: 12000, max: 15000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Firaga", "Blizzaga", "Thundaga"],
    notes: "Found in Golmore Jungle.",
  },
  {
    id: "e-166", name: "Bangaa White Mage", zone: "Humanoid",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Cura", "Curaga", "Protect", "Shell"],
    notes: "Found in Mosphoran Highwaste.",
  },
  {
    id: "e-167", name: "Bangaa Black Mage", zone: "Humanoid",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Firaga", "Blizzaga", "Thundaga"],
    notes: "Found in Mosphoran Highwaste.",
  },
  {
    id: "e-168", name: "Nu Mou Beastmaster", zone: "Humanoid",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fira", "Blizzara", "Thundara", "Dispel"],
    notes: "Found in Paramina Rift.",
  },
  {
    id: "e-169", name: "Nu Mou Time Mage", zone: "Humanoid",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Slow", "Haste", "Protect", "Shell"],
    notes: "Found in Paramina Rift.",
  },
  {
    id: "e-139", name: "Viera Assassin", zone: "Humanoid",
    level: { min: 40, max: 42 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Poison (Poison)", "Blind (Blind)"],
    notes: "Found in Golmore Jungle.",
  },
  {
    id: "e-140", name: "Viera Hunter", zone: "Humanoid",
    level: { min: 35, max: 38 }, hp: { min: 12000, max: 15000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Silence (Silence)", "Blind (Blind)"],
    notes: "Found in Golmore Jungle.",
  },
  {
    id: "e-141", name: "Bangaa Thief", zone: "Humanoid",
    level: { min: 25, max: 28 }, hp: { min: 8000, max: 10000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Steal", "Poison (Poison)"],
    notes: "Found in Mosphoran Highwaste.",
  },
  {
    id: "e-142", name: "Bangaa Warrior", zone: "Humanoid",
    level: { min: 25, max: 28 }, hp: { min: 8000, max: 10000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "War Cry (ATK up)", "Smite of Rage (1.5x)"],
    notes: "Found in Mosphoran Highwaste.",
  },
  {
    id: "e-143", name: "Nu Mou Sage", zone: "Humanoid",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Firaga", "Blizzaga", "Thundaga", "Dispel"],
    notes: "Found in Paramina Rift.",
  },
  {
    id: "e-144", name: "Nu Mou White Mage", zone: "Humanoid",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Libra Gem", rate: "1%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Capricorn Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Cura", "Curaga", "Protect", "Shell"],
    notes: "Found in Paramina Rift.",
  },
  // Empire
  {
    id: "e-170", name: "Imperial Knight", zone: "Empire",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "Helmet Break"],
    notes: "Found in Nalbina Fortress.",
  },
  {
    id: "e-171", name: "Imperial Black Mage", zone: "Empire",
    level: { min: 25, max: 28 }, hp: { min: 8000, max: 10000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fira", "Blizzara", "Thundara"],
    notes: "Found in Nalbina Fortress.",
  },
  {
    id: "e-172", name: "Imperial White Mage", zone: "Empire",
    level: { min: 25, max: 28 }, hp: { min: 8000, max: 10000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Cura", "Curaga", "Protect", "Shell"],
    notes: "Found in Nalbina Fortress.",
  },
  {
    id: "e-173", name: "Imperial Hoplite", zone: "Empire",
    level: { min: 35, max: 38 }, hp: { min: 15000, max: 18000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "War Cry (ATK up)", "Helmet Break"],
    notes: "Found in Draklor Laboratory.",
  },
  {
    id: "e-174", name: "Imperial Swordsman (Draklor)", zone: "Empire",
    level: { min: 45, max: 47 }, hp: { min: 25000, max: 30000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "War Cry (ATK up)", "Helmet Break"],
    notes: "Found in Draklor Laboratory.",
  },
  {
    id: "e-145", name: "Imperial Soldier", zone: "Empire",
    level: { min: 15, max: 18 }, hp: { min: 3200, max: 4500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Thunder (Thunder damage)"],
    notes: "Found in Nalbina Fortress.",
  },
  {
    id: "e-146", name: "Imperial Archer", zone: "Empire",
    level: { min: 15, max: 18 }, hp: { min: 3200, max: 4500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Silence (Silence)", "Blind (Blind)"],
    notes: "Found in Nalbina Fortress.",
  },
  {
    id: "e-147", name: "Imperial Mage", zone: "Empire",
    level: { min: 20, max: 22 }, hp: { min: 5500, max: 6500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fira", "Blizzara", "Thundara"],
    notes: "Found in Nalbina Fortress.",
  },
  {
    id: "e-148", name: "Imperial Swordsman", zone: "Empire",
    level: { min: 25, max: 28 }, hp: { min: 8000, max: 10000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "War Cry (ATK up)"],
    notes: "Found in Nalbina Fortress.",
  },
  {
    id: "e-149", name: "Imperial Pilot", zone: "Empire",
    level: { min: 30, max: 32 }, hp: { min: 10000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Thunder (Thunder damage)"],
    notes: "Found in Leviathan.",
  },
  {
    id: "e-150", name: "Imperial Swordsman (Elite)", zone: "Empire",
    level: { min: 40, max: 42 }, hp: { min: 18000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Sword Sweep (1.5x)", "War Cry (ATK up)", "Helmet Break"],
    notes: "Found in Draklor Laboratory.",
  },
  {
    id: "e-190", name: "Imperial Archer (Draklor)", zone: "Empire",
    level: { min: 45, max: 47 }, hp: { min: 25000, max: 30000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Silence (Silence)", "Blind (Blind)"],
    notes: "Found in Draklor Laboratory.",
  },
  {
    id: "e-191", name: "Imperial Mage (Draklor)", zone: "Empire",
    level: { min: 45, max: 47 }, hp: { min: 25000, max: 30000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sorcery Mark", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Gemini Gem", rate: "5%" },
      { item: "Leo Gem", rate: "1%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Sorcery Mark", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" },
    ],
    poach: [
      { item: "Sorcery Mark", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" },
    ],
    abilities: ["Attack", "Fira", "Blizzara", "Thundara"],
    notes: "Found in Draklor Laboratory.",
  },
  // Hunts
  {
    id: "e-34", name: "Rogue Tomato", zone: "Hunts",
    level: { min: 5, max: 5 }, hp: { min: 450, max: 450 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Rogue Tomato", rate: "100%" },
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Eye Drops", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Storm Stone", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Iron Ore", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Iron Ore", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Fire Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}, {item: "Libra Gem", type: "drop"}, {item: "Holy Crystal", type: "drop"}, {item: "Capricorn Gem", type: "drop"}],
    lootItems: [{item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    lootItems: [{item: "Quality Hide", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Gemini Gem", type: "drop"}, {item: "Leo Gem", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Quality Hide", type: "drop"}, {item: "Gemini Gem", type: "drop"}],
    abilities: ["Attack", "Ram (1.5x)"],
    notes: "First Hunt target. Found in Estersand.",
  },
  {
    id: "e-35", name: "Ring Wyrm", zone: "Hunts",
    level: { min: 15, max: 15 }, hp: { min: 8500, max: 8500 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Ring Wyrm Scale", rate: "100%" },
      { item: "Ring Wyrm Liver", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Moon Ring", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Ring Wyrm Scale", type: "drop"}, {item: "Ring Wyrm Liver", type: "drop"}, {item: "Storm Crystal", type: "steal"}, {item: "Moon Ring", type: "steal"}],
    abilities: ["Attack", "Fire Breath (Fire damage)", "Tail Sweep (1.5x)", "Flame Bow"],
    notes: "Hunt target. Found in Estersand.",
  },
  {
    id: "e-36", name: "Garuda", zone: "Hunts",
    level: { min: 20, max: 20 }, hp: { min: 12000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Giant Feather", rate: "100%" },
      { item: "Charger Narding", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Giant Feather", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Giant Feather", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Storm Crystal", type: "steal"}, {item: "Giant Feather", type: "drop"}],
    abilities: ["Attack", "Wing Buffet (Knockback)", "Gust (Wind damage)", "Flight"],
    notes: "Hunt target. Flying enemy. Found in Garamsythe Waterway.",
  },
  {
    id: "e-37", name: "Tiamat", zone: "Hunts",
    level: { min: 45, max: 45 }, hp: { min: 55000, max: 55000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Emperor Scale", rate: "100%" },
      { item: "Charger Narding", rate: "100%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Emperor Scale", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Emperor Scale", type: "drop"}, {item: "Charger Narding", type: "drop"}, {item: "Ice Crystal", type: "steal"}, {item: "Emperor Scale", type: "drop"}],
    abilities: ["Attack", "Ice Breath (Ice damage)", "Dark Breath (Dark damage)", "Tail Sweep", "Flight"],
    notes: "Hunt target. Flying dragon. Found in Stilshrine of Miriam.",
  },
  {
    id: "e-38", name: "Brainpan", zone: "Hunts",
    level: { min: 42, max: 42 }, hp: { min: 42000, max: 42000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Aquarius Gem", rate: "100%" },
      { item: "Quality Stone", rate: "100%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Aquarius Gem", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Aquarius Gem", type: "drop"}, {item: "Quality Stone", type: "drop"}, {item: "Holy Crystal", type: "steal"}, {item: "Aquarius Gem", type: "drop"}],
    abilities: ["Attack", "Holy (Holy damage)", "Dispel", "Reflect", "Protect"],
    notes: "Hunt target. Found in Salikawood.",
  },
  {
    id: "e-110", name: "Wyvern", zone: "Hunts",
    level: { min: 25, max: 25 }, hp: { min: 15000, max: 15000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Thunder"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Wyvern Wing", rate: "100%" },
      { item: "Storm Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Wyvern Wing", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Wyvern Wing", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Storm Crystal", type: "drop"}, {item: "Wyvern Wing", type: "drop"}],
    abilities: ["Attack", "Gust (Wind damage)", "Wing Buffet (Knockback)", "Flight"],
    notes: "Hunt target. Flying enemy.",
  },
  {
    id: "e-111", name: "Deadly Nightshade", zone: "Hunts",
    level: { min: 30, max: 30 }, hp: { min: 22000, max: 22000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: ["Poison"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Sageling Branch", rate: "100%" },
      { item: "Earth Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "Sageling Branch", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Earth Crystal", type: "drop"}, {item: "Earth Crystal", type: "drop"}],
    abilities: ["Attack", "Poison (Poison)", "Blind (Blind)", "Sleep (Sleep)"],
    notes: "Hunt target. Uses status ailments.",
  },
  {
    id: "e-112", name: "Chocobo Eater", zone: "Hunts",
    level: { min: 20, max: 20 }, hp: { min: 12000, max: 12000 }, mp: { min: 0, max: 0 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow"] },
    drops: [
      { item: "Giant Feather", rate: "100%" },
      { item: "Chocobo Feather", rate: "100%" },
    ],
    steals: [
      { item: "Chocobo Feather", rate: "55%" },
      { item: "Giant Feather", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Giant Feather", type: "drop"}, {item: "Chocobo Feather", type: "drop"}, {item: "Chocobo Feather", type: "drop"}, {item: "Giant Feather", type: "drop"}],
    abilities: ["Attack", "Chomp (1.5x)", "Slam (Knockback)"],
    notes: "Hunt target. Found in Giza Plains.",
  },
  {
    id: "e-113", name: "Fafnir", zone: "Hunts",
    level: { min: 55, max: 55 }, hp: { min: 200000, max: 200000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice"], weaknesses: ["Fire"], absorbs: ["Ice"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Fafnir's Horn", rate: "100%" },
      { item: "Ice Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Ice Crystal", type: "drop"}, {item: "Ice Crystal", type: "drop"}],
    abilities: ["Attack", "Ice Breath (Ice damage)", "Blizzaga", "White Breath (Stop)"],
    notes: "Hunt target. Absorbs Ice. Uses powerful ice breath.",
  },
  {
    id: "e-39", name: "Omega Mark XII", zone: "Elite Hunts",
    level: { min: 60, max: 60 }, hp: { min: 300000, max: 300000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Omega Badge", rate: "100%" },
    ],
    steals: [
      { item: "Omega Badge", rate: "100%" },
    ],
    poach: [],
    lootItems: [{item: "Omega Badge", type: "drop"}, {item: "Omega Badge", type: "drop"}],
    abilities: ["Attack", "Omega Beam (massive damage)", "Reflect", "Haste", "Protect"],
    notes: "Superboss. Found in Henne Mines. Immune to all status effects.",
  },
  {
    id: "e-40", name: "The Undying", zone: "Elite Hunts",
    level: { min: 65, max: 65 }, hp: { min: 600000, max: 600000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Empyreal Soul", rate: "100%" },
      { item: "Serpentarius", rate: "100%" },
    ],
    steals: [
      { item: "Empyreal Soul", rate: "100%" },
    ],
    poach: [],
    lootItems: [{item: "Empyreal Soul", type: "drop"}, {item: "Serpentarius", type: "drop"}, {item: "Empyreal Soul", type: "drop"}],
    abilities: ["Attack", "Flare", "Holy", "Meteor", "Dispel", "Reflect"],
    notes: "Final superboss. Found in Sky Fortress Bahamut.",
  },
  {
    id: "e-114", name: "Zeromus", zone: "Elite Hunts",
    level: { min: 60, max: 60 }, hp: { min: 500000, max: 500000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Zeromus's Gem", rate: "100%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "steal"}],
    abilities: ["Attack", "Flare", "Darkga", "Meteor", "Gravity"],
    notes: "Superboss. Absorbs Dark. Uses powerful dark magic.",
  },
  {
    id: "e-115", name: "Humbaba Mature", zone: "Elite Hunts",
    level: { min: 55, max: 55 }, hp: { min: 250000, max: 250000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Humbaba Mature's Hide", rate: "100%" },
      { item: "Earth Crystal", rate: "55%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Earth Crystal", type: "drop"}, {item: "Earth Crystal", type: "drop"}],
    abilities: ["Attack", "Earthquake (Earth damage)", "Boulder (Earth damage)"],
    notes: "Elite Hunt. Uses powerful earth attacks.",
  },
  {
    id: "e-116", name: "Ergo", zone: "Elite Hunts",
    level: { min: 50, max: 50 }, hp: { min: 150000, max: 150000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Ergo's Gem", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Flare", "Holy", "Thundaga"],
    notes: "Elite Hunt. Uses powerful magic.",
  },
  // Espers
  {
    id: "e-41", name: "Belias", zone: "Espers",
    level: { min: 25, max: 25 }, hp: { min: 15000, max: 15000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Ice"], absorbs: ["Fire"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Belias Gem", rate: "100%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Fire Crystal", type: "steal"}],
    abilities: ["Attack", "Hellfire (Fire damage)", "Crimsonity (Fire damage)"],
    notes: "Esper. Found in Tomb of Raithwall.",
  },
  {
    id: "e-42", name: "Chaos", zone: "Espers",
    level: { min: 35, max: 35 }, hp: { min: 35000, max: 35000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: ["Dark"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Chaos Gem", rate: "100%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "steal"}],
    abilities: ["Attack", "Doom", "Flare", "Scourge"],
    notes: "Esper. Found in Golmore Jungle.",
  },
  {
    id: "e-43", name: "Zodiark", zone: "Espers",
    level: { min: 60, max: 60 }, hp: { min: 150000, max: 150000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["All"], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Zodiark Gem", rate: "100%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Holy Crystal", type: "steal"}],
    abilities: ["Attack", "Firaja", "Blizzaja", "Thundaja", "Holy", "Flare", "Scourge"],
    notes: "Strongest Esper. Found in Pharos Lighthouse.",
  },
  {
    id: "e-44", name: "Ultima", zone: "Espers",
    level: { min: 50, max: 50 }, hp: { min: 80000, max: 80000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Holy"], weaknesses: ["Dark"], absorbs: ["Holy"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Ultima Gem", rate: "100%" },
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Holy Crystal", type: "steal"}],
    abilities: ["Attack", "Holy", "Arise", "Protectga", "Shellga"],
    notes: "Esper. Found in Stilshrine of Miriam. Absorbs Holy.",
  },
  {
    id: "e-117", name: "Adrammelech", zone: "Espers",
    level: { min: 35, max: 35 }, hp: { min: 35000, max: 35000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Thunder"], weaknesses: ["Water"], absorbs: ["Thunder"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Adrammelech Gem", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Thundaga", "Thunderbolt (Thunder damage)"],
    notes: "Esper. Found in Barheim Passage. Absorbs Thunder.",
  },
  {
    id: "e-118", name: "Hashmal", zone: "Espers",
    level: { min: 35, max: 35 }, hp: { min: 35000, max: 35000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: ["Earth"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Hashmal Gem", rate: "100%" },
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Earth Crystal", type: "steal"}],
    abilities: ["Attack", "Flare", "Rockslide (Earth damage)"],
    notes: "Esper. Found in Golmore Jungle. Absorbs Earth.",
  },
  {
    id: "e-119", name: "Exodus", zone: "Espers",
    level: { min: 40, max: 40 }, hp: { min: 45000, max: 45000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Ice"], absorbs: ["Fire"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Exodus Gem", rate: "100%" },
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Fire Crystal", type: "steal"}],
    abilities: ["Attack", "Firaja", "Flare"],
    notes: "Esper. Found in Henne Mines. Absorbs Fire.",
  },
  {
    id: "e-120", name: "Mateus", zone: "Espers",
    level: { min: 30, max: 30 }, hp: { min: 25000, max: 25000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice"], weaknesses: ["Fire"], absorbs: ["Ice"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Mateus Gem", rate: "100%" },
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Ice Crystal", type: "steal"}],
    abilities: ["Attack", "Blizzaga", "Ice Storm (Ice damage)"],
    notes: "Esper. Found in Tomb of Raithwall. Absorbs Ice.",
  },
  {
    id: "e-121", name: "Shemhazai", zone: "Espers",
    level: { min: 40, max: 40 }, hp: { min: 40000, max: 40000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: ["Wind"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Shemhazai Gem", rate: "100%" },
    ],
    steals: [
      { item: "Wind Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Wind Crystal", type: "steal"}],
    abilities: ["Attack", "Silencega", "Blindga", "Bio"],
    notes: "Esper. Found in Henne Mines. Absorbs Wind.",
  },
  {
    id: "e-122", name: "Cuchulainn", zone: "Espers",
    level: { min: 30, max: 30 }, hp: { min: 20000, max: 20000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Poison"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Cuchulainn Gem", rate: "100%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "steal"}],
    abilities: ["Attack", "Bio", "Silence", "Blind", "Slow"],
    notes: "Esper. Found in Barheim Passage. Inflicts status ailments.",
  },
  {
    id: "e-123", name: "Famfrit", zone: "Espers",
    level: { min: 40, max: 40 }, hp: { min: 40000, max: 40000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Thunder"], absorbs: ["Water"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Famfrit Gem", rate: "100%" },
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Water Crystal", type: "steal"}],
    abilities: ["Attack", "Waterga", "Thundaga", "Tidal Wave"],
    notes: "Esper. Found in Ridorana Cataract. Absorbs Water.",
  },
  {
    id: "e-124", name: "Krjn", zone: "Espers",
    level: { min: 35, max: 35 }, hp: { min: 30000, max: 30000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Thunder"], weaknesses: ["Water"], absorbs: ["Thunder"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Krjn Gem", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Thundaga", "Thunderbolt (Thunder damage)"],
    notes: "Esper. Found in Barheim Passage. Absorbs Thunder.",
  },
  // Bosses
  {
    id: "e-45", name: "Judge Ghis", zone: "Bosses",
    level: { min: 15, max: 15 }, hp: { min: 8500, max: 8500 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Broad Sword", rate: "100%" },
      { item: "Hi-Potion", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Spear", rate: "10%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Darkness (Dark damage)", "Sword Sweep (1.5x)"],
    notes: "Story Boss. Found in Leviathan.",
  },
  {
    id: "e-46", name: "Vayne Solidor", zone: "Bosses",
    level: { min: 55, max: 55 }, hp: { min: 120000, max: 120000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Sword of Kings", rate: "100%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "steal"}],
    abilities: ["Attack", "Power Stone", "Gravity", "Flare"],
    notes: "Final Boss. Found in Sky Fortress Bahamut.",
  },
  {
    id: "e-125", name: "Vayne Novus", zone: "Bosses",
    level: { min: 60, max: 60 }, hp: { min: 200000, max: 200000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Sword of Kings", rate: "100%" },
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Dark Crystal", type: "steal"}],
    abilities: ["Attack", "Flare", "Holy", "Meteor", "Graviga"],
    notes: "Final Boss (second form). Found in Sky Fortress Bahamut.",
  },
  {
    id: "e-126", name: "Judge Bergan", zone: "Bosses",
    level: { min: 45, max: 45 }, hp: { min: 65000, max: 65000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Runeblade", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Darkness", "Sword Sweep (1.5x)"],
    notes: "Story Boss. Found in Mt Bur-Omisace.",
  },
  {
    id: "e-130", name: "Judge Zargabaath", zone: "Bosses",
    level: { min: 50, max: 50 }, hp: { min: 75000, max: 75000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Tournesol", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Sword technique", "Jump (2x)"],
    notes: "Story Boss. Found in Sky Fortress Bahamut.",
  },
  {
    id: "e-133", name: "Rasler", zone: "Bosses",
    level: { min: 20, max: 20 }, hp: { min: 15000, max: 15000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Ensanguined Shield", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Holy", "Jump (2x)"],
    notes: "Boss. Found in Tomb of Raithwall.",
  },
  {
    id: "e-134", name: "Famfrit (Boss)", zone: "Bosses",
    level: { min: 40, max: 40 }, hp: { min: 40000, max: 40000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Thunder"], absorbs: ["Water"] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Famfrit Gem", rate: "100%" },
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Water Crystal", type: "steal"}],
    abilities: ["Attack", "Waterga", "Thundaga", "Tidal Wave"],
    notes: "Boss. Found in Ridorana Cataract. Absorbs Water.",
  },
  {
    id: "e-47", name: "Gabranth", zone: "Bosses",
    level: { min: 50, max: 50 }, hp: { min: 80000, max: 80000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Danjuro", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Sword technique", "Helmet Break"],
    notes: "Story Boss. Found in Sky Fortress Bahamut.",
  },
  {
    id: "e-48", name: "Drace", zone: "Bosses",
    level: { min: 45, max: 45 }, hp: { min: 60000, max: 60000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Karkata", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Jump (2x)", "Holy Lance"],
    notes: "Story Boss. Found in Pharos Lighthouse.",
  },
  {
    id: "e-49", name: "Gramis", zone: "Bosses",
    level: { min: 40, max: 40 }, hp: { min: 50000, max: 50000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Runeblade", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Fire", "Blizzard", "Thunder"],
    notes: "Story Boss. Found in Draklor Laboratory.",
  },
  {
    id: "e-50", name: "Cidolfus Demen Bunansa", zone: "Bosses",
    level: { min: 45, max: 45 }, hp: { min: 70000, max: 70000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: ["All"], weak: [] },
    drops: [
      { item: "Tournesol", rate: "100%" },
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
    ],
    poach: [],
    lootItems: [{item: "Storm Crystal", type: "steal"}],
    abilities: ["Attack", "Gun", "Fira", "Blizzaga", "Thundaga"],
    notes: "Story Boss. Found in Pharos Lighthouse.",
  },


  // Barheim Passage
  {
    id: "e-300", name: "Steeling", zone: "Barheim Passage",
    level: { min: 2, max: 3 }, hp: { min: 94, max: 110 }, mp: { min: 50, max: 54 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Berserk"] },
    drops: [
      { item: "Wind Stone", rate: "40%" },
      { item: "Eye Drops", rate: "40%" },
      { item: "Antidote", rate: "25%" },
      { item: "Bat Fang", rate: "25%" }
    ],
    steals: [
      { item: "Bat Fang", rate: "55%" },
      { item: "Wind Stone", rate: "55%" },
      { item: "Teleport Stone", rate: "10%" }
    ],
    poach: [
      { item: "Bat Fang", rate: "95%" },
      { item: "Bat Fang", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Joyous Soundwave"],
    notes: "During Ba\'Gamnan fight in Lhusu, 7-8LV variant slightly weaker",
  },
  {
    id: "e-301", name: "Suriander", zone: "Barheim Passage",
    level: { min: 8, max: 9 }, hp: { min: 410, max: 430 }, mp: { min: 195, max: 200 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Storm Stone", rate: "40%" },
      { item: "Storm Magicite", rate: "40%" },
      { item: "Horn", rate: "25%" },
      { item: "Pointed Horn", rate: "25%" }
    ],
    steals: [
      { item: "Storm Stone", rate: "55%" },
      { item: "Storm Magicite", rate: "55%" },
      { item: "Horn", rate: "10%" }
    ],
    poach: [
      { item: "Horn", rate: "95%" },
      { item: "Pointed Horn", rate: "95%" }
    ],
    abilities: ["Attack", "Gnaw", "Angelsong"],
    notes: "Often found asleep",
  },
  {
    id: "e-302", name: "Mimic", zone: "Barheim Passage",
    level: { min: 7, max: 8 }, hp: { min: 334, max: 340 }, mp: { min: 105, max: 108 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Stone", rate: "40%" },
      { item: "Eye Drops", rate: "25%" },
      { item: "Iron Scraps", rate: "5%" },
      { item: "Dark Mote", rate: "1%" }
    ],
    steals: [
      { item: "Iron Scraps", rate: "55%" },
      { item: "20 Gil", rate: "10%" },
      { item: "Iron Sword", rate: "3%" }
    ],
    poach: [
      { item: "Iron Scraps", rate: "95%" },
      { item: "Iron Scraps", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Leech"],
    notes: "Disguised as Treasure Urns - difficult to identify",
  },
  {
    id: "e-303", name: "Tiny Mimic", zone: "Barheim Passage",
    level: { min: 7, max: 8 }, hp: { min: 211, max: 217 }, mp: { min: 45, max: 48 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Eye Drops", rate: "40%" },
      { item: "Iron Scraps", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Iron Scraps", rate: "55%" }
    ],
    steals: [
      { item: "Earth Stone", rate: "55%" },
      { item: "1 Gil", rate: "10%" },
      { item: "Antidote", rate: "3%" }
    ],
    poach: [
      { item: "Iron Scraps", rate: "95%" },
      { item: "Iron Scraps", rate: "5%" }
    ],
    abilities: ["Attack"],
    notes: "Only spawns in Dalmasca Eastersand after leaving Barheim Passage",
  },
  {
    id: "e-304", name: "Battery Mimic", zone: "Barheim Passage",
    level: { min: 7, max: 7 }, hp: { min: 520, max: 520 }, mp: { min: 130, max: 130 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Eye Drops", rate: "40%" },
      { item: "Iron Scraps", rate: "25%" },
      { item: "Storm Stone", rate: "5%" },
      { item: "Mage\'s Habit", rate: "1%" }
    ],
    steals: [
      { item: "Iron Scraps", rate: "55%" },
      { item: "Storm Stone", rate: "10%" },
      { item: "Prince\'s Kiss", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Charge", "Discharge"],
    notes: "Drains power in the dungeon - causing Undead to spawn if below 30%\n\nDoes not respawn\n\nDoes not reappear after finishing the events of Barheim Passage - power permanently stays at 100% after this.",
  },
  {
    id: "e-305", name: "Specter", zone: "Barheim Passage",
    level: { min: 8, max: 9 }, hp: { min: 402, max: 408 }, mp: { min: 300, max: 320 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Dark Stone (40%) (LV36-39)", rate: "?" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Dark Magicite (25%) (LV36-39)", rate: "?" }
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "Dark Magicite (55%) (LV36-39)", rate: "?" },
      { item: "Glass Jewel", rate: "10%" }
    ],
    poach: [
      { item: "Glass Jewel", rate: "95%" },
      { item: "Glass Jewel", rate: "5%" }
    ],
    abilities: ["Attack", "Fire", "Fira (LV 36-39)", "Thunder", "Thundara (LV36-39)", "Blizzard", "Blizzara (LV36-39)", "Blind", "Dark", "Darkra (LV36-39)", "Boon", "Poison Touch", "Sleep Touch", "Stone Touch", "Divide"],
    notes: "Spawns in Barheim Passage when power is lower then 30% - LV36-39 variant is much tougher and spawns in West Annex\n\nCan teleport around and can split into copies",
  },
  {
    id: "e-306", name: "Tiny Battery", zone: "Barheim Passage",
    level: { min: 6, max: 7 }, hp: { min: 120, max: 120 }, mp: { min: 75, max: 75 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Everything"] },
    drops: [
      
    ],
    steals: [
      { item: "Pebble", rate: "55%" },
      { item: "Knot of Rust", rate: "10%" },
      { item: "Potion", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Knot of Rust", rate: "5%" }
    ],
    abilities: ["Attack"],
    notes: "Spawns only during the Boss fight\n\nDoesn\'t attack unless attacked first\n\nCan deal Lightning damage on their attacks",
  },
  {
    id: "e-307", name: "Mimeo", zone: "Barheim Passage",
    level: { min: 39, max: 40 }, hp: { min: 6446, max: 6686 }, mp: { min: 665, max: 672 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Reverse", "Oil", "Slow", "Berserk"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Francisca", rate: "5%" },
      { item: "Zeus Mace (5%) (LV46-48)", rate: "?" }
    ],
    steals: [
      { item: "Iron Ore", rate: "55%" },
      { item: "500 Gil", rate: "10%" },
      { item: "Cancer Gem", rate: "3%" }
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Hastega Mote", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Leech"],
    notes: "Disguised as Treasure Urns - easy to identify\n\n50% chance to appear under Protect or Shell\n\nHigh counter and high evade rate (evade rate increase only below 50% HP)",
  },
  {
    id: "e-308", name: "Skull Defender", zone: "Barheim Passage",
    level: { min: 7, max: 8 }, hp: { min: 322, max: 328 }, mp: { min: 165, max: 185 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bone Fragment", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Antidote (5%) (LV8-9, 10-11))", rate: "?" }
    ],
    steals: [
      { item: "Bone Fragment", rate: "55%" },
      { item: "Aquara Mote", rate: "10%" },
      { item: "20 Gil (10%) (LV8-9,10-11)", rate: "?" }
    ],
    poach: [
      { item: "Bone Fragment", rate: "95%" },
      { item: "Bone Fragment", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Dark", "Slow", "Bone Toss"],
    notes: "Spawns in Barheim Passage only when power is below 30%\n\nAnimates from the ground when nearby",
  },
  {
    id: "e-309", name: "Dead Bones", zone: "Barheim Passage",
    level: { min: 38, max: 39 }, hp: { min: 6786, max: 6966 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop (LV38-39", "44-45)", "Doom", "Confuse", "Blind (LV49-50)", "Poison", "Silence", "Oil", "Disable (LV38-39)", "Immobilize (LV44-45)", "Sap (LV49-50) Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Eye Drops", rate: "25%" },
      { item: "Blood-darkened Bone", rate: "5%" },
      { item: "Ancient Bone", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Blood-darkened Bone", rate: "10%" },
      { item: "Sturdy Bone (10%) (LV44-45)", rate: "?" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Fira", "Thundara", "Blizzara", "Reflectga", "Darkra", "Flash", "Hawk Glare"],
    notes: "50% chance to spawn under Protect or Haste or Shell\n\nAnimates from the ground when nearby",
  },

  // Bosses
  {
    id: "e-310", name: "Firemane", zone: "Bosses",
    level: { min: 7, max: 7 }, hp: { min: 3571, max: 3571 }, mp: { min: 720, max: 720 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Phoenix Down", rate: "10%" },
      { item: "Grimoire Togail", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Fire", "Rush", "Kick", "Bushfire"],
    notes: "Weakened while in water - cannot cast Fire\n\nCan inflict Poison through Bushfire\n\nCan teleport around the arena",
  },
  {
    id: "e-311", name: "Rafflesia", zone: "Bosses",
    level: { min: 43, max: 43 }, hp: { min: 73393, max: 73393 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth\n\nHalf to all elements except Wind"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Silence", "Sap", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Screamroot", rate: "55%" },
      { item: "X-Potion", rate: "10%" },
      { item: "Putrid Liquid", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Nectar Volley", "Cry for Help", "Pollen Dance", "Curse", "Disablega", "Sleep", "Toxify", "Syphon", "Drain"],
    notes: "Will spawn under the Shell status\n\nCan spawn under the Haste status\n\nCan spawn under the Regen status\n\nCan spawn under the Reflect status\n\nEnemy has a paling effect",
  },
  {
    id: "e-312", name: "Mimic Queen", zone: "Bosses",
    level: { min: 10, max: 10 }, hp: { min: 4073, max: 4073 }, mp: { min: 315, max: 315 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Blind", "Silence", "Disable", "Oil", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Knot of Rust", rate: "55%" },
      { item: "Storm Magicite", rate: "10%" },
      { item: "Rose Corsage", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Thunder", "Breath of Life", "Ground Shaker", "Spawn", "Shockstorm"],
    notes: "Can\'t move\n\nSpawns Tiny Batteries to drain power - does nothing during the fight\n\nDeals Lightning damage on most attacks",
  },
  {
    id: "e-313", name: "Daedalus", zone: "Bosses",
    level: { min: 42, max: 42 }, hp: { min: 65644, max: 65644 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Silence"] },
    drops: [
      
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Forbidden Flesh", rate: "10%" },
      { item: "Damascus Steel", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Smite of Rage", "Pulsar Wave", "Rage", "Ice Break", "Tri Attack", "Tremor", "Haste", "Darkra"],
    notes: "-",
  },
  {
    id: "e-314", name: "Ba\'gamnan", zone: "Bosses",
    level: { min: 12, max: 49 }, hp: { min: 3983, max: 115659 }, mp: { min: 420, max: 999 },
    elemental: { strengths: ["Fire\n\nHalf to all elements except Water\n\nGijuk", "Bwagi and Rinok has no elemental strengths"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Silence", "Sap", "Slow\n\nNam Yensa version is immune to Stop\n\nGijuk", "Bwagi and Rinok is weak to Stop", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow\n\nGijuk", "Bwagi and Rinok Nam Yensa version is immune to Stop", "Disease and Disable"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Elixir (10% (Nam Yensa)", rate: "?" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Kick", "Lunge", "Water Spout", "High Jump", "Shining Ray", "Eviscerator (Nam Yensa)", "Cure (Gijuk)", "Shell (Gijuk)", "Vox (Gijuk)", "Fire (Gijuk)", "Thunder (Gijuk)", "Blizzard (Gijuk)", "Firaga (Gijuk Nam Yensa)", "Thundaga (Gijuk Nam Yensa)", "Blizzaga (Gijuk Nam Yensa)", "Ram (Bwagi)", "Soleil Fang (Bwagi Nam Yensa)", "Rime Fang (Bwagi Nam Yensa)", "Lightning Fang (Bwagi Nam Yensa)", "Jump (Rinok)", "Hi-Potion (Rinok)", "Sandstorm (Rinok, Nam Yensa)"],
    notes: "Will spawn under the Protect status\n\nWill spawn under the Haste status\n\nCan inflict Silence on it physical attacks\n\nEnemy isn\'t meant to be defeated at this stage - can be killed at this stage (Lhusu Mines)\n\nGijuk spawns under the Protect status\n\nBwagi spawns under the Protect status\n\nBwagi spawns under the Haste status\n\nRinok spawns under the Protect status",
  },
  {
    id: "e-315", name: "Hydro", zone: "Bosses",
    level: { min: 47, max: 47 }, hp: { min: 203800, max: 203800 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Oil", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Maggoty Flesh", rate: "55%" },
      { item: "Corpse Fly", rate: "10%" },
      { item: "Wyrm Bone", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Bile", "Countdown", "Crushing Fangs", "Sonic Fangs", "Lunge", "Fireball", "Bio", "Immobilizega", "Darkra", "Fearga", "Curse"],
    notes: "Can spawn under the Haste status\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-316", name: "Elder Wyrm", zone: "Bosses",
    level: { min: 23, max: 23 }, hp: { min: 71692, max: 71692 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Silence"] },
    drops: [
      
    ],
    steals: [
      { item: "Succulent Fruit", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Emperor Scale", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Rake", "Sporefall", "Fireball", "Slow", "Break", "Blind", "Silence", "Sleep", "Confuse"],
    notes: "Will spawn under the Shell status\n\nEnemy spawns with additional enemies",
  },
  {
    id: "e-317", name: "Fury", zone: "Bosses",
    level: { min: 46, max: 46 }, hp: { min: 69710, max: 69710 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Silence", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Blood Wool", rate: "55%" },
      { item: "Moondust", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Bunny Slam", "Hero\'s March", "Time Requiem", "Bacchus\'s Wine"],
    notes: "Will spawn under the Bravery status\n\nWill spawn under the Haste status\n\nCan inflict Berserk on its physical attacks",
  },
  {
    id: "e-318", name: "Vinuskar", zone: "Bosses",
    level: { min: 27, max: 27 }, hp: { min: 15138, max: 15138 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Knot of Rust", rate: "55%" },
      { item: "Thief\'s Cuffs", rate: "10%" },
      { item: "Damascus Steel", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Lunge", "Crown", "Sword Dance", "Slow", "Break"],
    notes: "Can inflict Sap on its physical attacks\n\nEnemy has a paling effect",
  },
  {
    id: "e-319", name: "King Bomb", zone: "Bosses",
    level: { min: 34, max: 34 }, hp: { min: 37596, max: 37596 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire\n\nHalf to all elements except Water"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Bomb Shell", rate: "55%" },
      { item: "Fire Crystal", rate: "10%" },
      { item: "Bomb Fragment", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Renew", "Cry For Help", "Chain Reaction", "Chain Magick", "Fira"],
    notes: "Will spawn under the Haste status\n\nDeals Fire damage on its physical attacks\n\nSpawns with additional enemies",
  },
  {
    id: "e-320", name: "Vossler", zone: "Bosses",
    level: { min: 20, max: 20 }, hp: { min: 9318, max: 9318 }, mp: { min: 693, max: 693 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Sleep", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Black Belt", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Enrage", "Reflect"],
    notes: "Will spawn under the Shell status\n\nWill spawn under the Haste status\n\nEnemy is accompanied by other enemies\n\nDo not need to reduce the entire HP bar to win the fight",
  },

  // Cerobi Steppe
  {
    id: "e-321", name: "Speartongue", zone: "Cerobi Steppe",
    level: { min: 16, max: 17 }, hp: { min: 1508, max: 2112 }, mp: { min: 390, max: 570 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow", "Berserk\n\nOgir Yensa version is immune to Disable and Sap"] },
    drops: [
      { item: "Water Stone", rate: "40%" },
      { item: "Horn", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Water Stone", rate: "55%" },
      { item: "Horn", rate: "10%" },
      { item: "Potion", rate: "3%" }
    ],
    poach: [
      { item: "Horn", rate: "95%" },
      { item: "Frog Oil", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Angelsong", "Magick Ballad"],
    notes: "Certain Zertinan Caverns versions can be tougher as you progress",
  },
  {
    id: "e-322", name: "Grenade", zone: "Cerobi Steppe",
    level: { min: 35, max: 38 }, hp: { min: 4819, max: 5299 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Fire Crystal", rate: "40%" },
      { item: "Chronos Tear", rate: "25%" },
      { item: "Bomb Shell", rate: "5%" },
      { item: "Scorpio Gem", rate: "1%" }
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Scorpio Gem", rate: "10%" },
      { item: "Opal Ring", rate: "3%" }
    ],
    poach: [
      { item: "Bomb Shell", rate: "95%" },
      { item: "Bomb Fragment", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Self Destruct", "Mass Destruct", "Chain Reaction", "Fira", "Protect"],
    notes: "No EXP, Loot or LP will be awarded if enemy uses either Destruct abilities",
  },
  {
    id: "e-323", name: "Scythe Mantis", zone: "Cerobi Steppe",
    level: { min: 36, max: 39 }, hp: { min: 8835, max: 9315 }, mp: { min: 425, max: 439 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Iron Carapace", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Nu Khai Sand", rate: "5%" },
      { item: "Kiku-ichimonji", rate: "1%" }
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Iron Carapace", rate: "10%" },
      { item: "Cancer Gem", rate: "3%" }
    ],
    poach: [
      { item: "Iron Carapace", rate: "95%" },
      { item: "Tattered Garment", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Shock Wave", "Cannibalize"],
    notes: "Can reach max level if it uses Cannibalize too often\n\nBalamka Fault has slightly modified stats compared to Hourglass Basin version",
  },
  {
    id: "e-324", name: "Slime", zone: "Cerobi Steppe",
    level: { min: 15, max: 17 }, hp: { min: 1629, max: 2119 }, mp: { min: 390, max: 680 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Green Liquid", rate: "40%" },
      { item: "Wind Stone", rate: "25%" },
      { item: "Aquara Mote", rate: "5%" },
      { item: "Winged Helm", rate: "1%" }
    ],
    steals: [
      { item: "Green Liquid", rate: "55%" },
      { item: "Wind Stone", rate: "10%" },
      { item: "Sagittarius Gem", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Yellow Liquid", rate: "5%" }
    ],
    abilities: ["Attack", "Slap", "Divide", "Aero", "Sleep", "Blind"],
    notes: "Enemy has different stats in certain zones",
  },
  {
    id: "e-325", name: "Archaeoaevis", zone: "Cerobi Steppe",
    level: { min: 59, max: 99 }, hp: { min: 161622, max: 961622 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Blind", "Berserk"] },
    drops: [
      { item: "Battlewyrm Carapace", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Leo Gem", rate: "5%" },
      { item: "Cameo Belt", rate: "1%" }
    ],
    steals: [
      { item: "Battlewyrm Carapace", rate: "55%" },
      { item: "Teleport Stone", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Curse", "Crushing Fangs", "Enrage", "Battle Cry", "Dispelga"],
    notes: "Can spawn at max level\n\nAlong with the Magick Pot, arguably the hardest enemy in the game\n\nOnly two spawn in the whole game",
  },
  {
    id: "e-326", name: "Bogey", zone: "Cerobi Steppe",
    level: { min: 38, max: 39 }, hp: { min: 6426, max: 6606 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Slow", "Berserk"] },
    drops: [
      { item: "Sky Jewel", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Nu Khai Sand", rate: "5%" },
      { item: "Iga Blade", rate: "1%" }
    ],
    steals: [
      { item: "Gold Needle", rate: "55%" },
      { item: "Vanishga Mote", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" }
    ],
    poach: [
      { item: "Sky Jewel", rate: "95%" },
      { item: "Death Powder", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Bleed", "Phantasmal Gaze", "Hawk Glare", "Divide", "Doom", "Fira", "Thundara", "Blizzara", "Darkra", "Curse"],
    notes: "Can spawn under the Faith status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-327", name: "Mallicant", zone: "Cerobi Steppe",
    level: { min: 37, max: 38 }, hp: { min: 6158, max: 6318 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Reverse", "Sleep", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Crystal", rate: "40%" },
      { item: "Eye Drops", rate: "25%" },
      { item: "Grimoire Aidhed", rate: "5%" },
      { item: "Gaia Hat", rate: "1%" }
    ],
    steals: [
      { item: "Phoenix Down", rate: "55%" },
      { item: "Grimoire Aidhed", rate: "10%" },
      { item: "Scorpio Gem", rate: "3%" }
    ],
    poach: [
      { item: "Grimoire Aidhed", rate: "95%" },
      { item: "Magick Lamp", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Snake Lash", "Fira", "Thundara", "Blizzara", "Aquara", "Aerora", "Slow", "Stop", "Bleed", "Toxify"],
    notes: "-",
  },
  {
    id: "e-328", name: "Shambling Corpse", zone: "Cerobi Steppe",
    level: { min: 37, max: 38 }, hp: { min: 4338, max: 4518 }, mp: { min: 833, max: 873 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Slow", "Berserk"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Foul Flesh", rate: "25%" },
      { item: "Lightning Fang", rate: "5%" },
      { item: "Platinum Dagger", rate: "1%" }
    ],
    steals: [
      { item: "Foul Flesh", rate: "55%" },
      { item: "Dark Crystal", rate: "10%" },
      { item: "Blood Stained Necklace", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Scream", "Cloying Breath", "Fira", "Thundara", "Aerora", "Blizzara", "Aquara"],
    notes: "Animates from the ground\n\nSpawns in a large amount",
  },
  {
    id: "e-329", name: "Buer", zone: "Cerobi Steppe",
    level: { min: 37, max: 39 }, hp: { min: 5622, max: 5942 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Sap", "Slow"] },
    drops: [
      { item: "Demon Tail", rate: "40%" },
      { item: "Ice Crystal", rate: "25%" },
      { item: "Phoenix Down", rate: "5%" },
      { item: "Gaia Hat", rate: "1%" }
    ],
    steals: [
      { item: "Ice Stone", rate: "55%" },
      { item: "Scorpio Gem", rate: "10%" },
      { item: "Vanishga Mote", rate: "3%" }
    ],
    poach: [
      { item: "Demon Tail", rate: "95%" },
      { item: "Demon\'s Sigh", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Jump", "Leech", "Shock Wave", "Blizzara", "Haste"],
    notes: "-",
  },
  {
    id: "e-330", name: "Adamantitan", zone: "Cerobi Steppe",
    level: { min: 40, max: 41 }, hp: { min: 14704, max: 15024 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Turtle Shell (40%) (Barheim)", rate: "?" },
      { item: "Earth Crystal", rate: "40%" },
      { item: "Water Stone (25%) (Barheim)", rate: "?" },
      { item: "Hi-Potion", rate: "25%" }
    ],
    steals: [
      { item: "Water Stone (55%) (Barheim)", rate: "?" },
      { item: "200 Gil", rate: "55%" },
      { item: "Aries Gem (10%) (Barheim)", rate: "?" }
    ],
    poach: [
      { item: "Turtle Shell (95%) (Barheim)", rate: "?" },
      { item: "Aged Turtle Shell", rate: "95%" }
    ],
    abilities: ["Attack", "Flatten", "Stone Stomp", "Stone Gaze", "Restore", "Meditate", "Purify", "Fira", "Thundara", "Blizzara", "Aquara", "Protect", "Shell"],
    notes: "-",
  },
  {
    id: "e-331", name: "Charybterix", zone: "Cerobi Steppe",
    level: { min: 38, max: 40 }, hp: { min: 21219, max: 21459 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Sap", "Berserk"] },
    drops: [
      { item: "Wind Crystal", rate: "40%" },
      { item: "Antidote", rate: "25%" },
      { item: "Windslicer Pinion", rate: "5%" },
      { item: "Taurus Gem", rate: "1%" }
    ],
    steals: [
      { item: "Windslicer Pinion", rate: "55%" },
      { item: "Taurus Gem", rate: "10%" },
      { item: "Chaos Mace", rate: "3%" }
    ],
    poach: [
      { item: "Windslicer Pinion", rate: "95%" },
      { item: "Split Armour", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Kamikaze"],
    notes: "Enemy is flying - can only be hit by ranged weapons, magic or long weapons\n\nNo EXP, Loot or LP awarded if enemy uses Kamikaze",
  },
  {
    id: "e-332", name: "Shield Wyrm", zone: "Cerobi Steppe",
    level: { min: 42, max: 44 }, hp: { min: 59679, max: 61039 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Poison", "Silence", "Oil", "Slow\n\nNabreus Deadlands version is also weak to Sap"] },
    drops: [
      { item: "Ring Wyrm Scale", rate: "40%" },
      { item: "Wyrm Carapace (40%) (Nabreus)", rate: "?" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Chronos Tear", rate: "5%" }
    ],
    steals: [
      { item: "Ring Wyrm Scale", rate: "55%" },
      { item: "Wyrm Carapace (55%) (Nabreus)", rate: "?" },
      { item: "Hi-Potion", rate: "10%" }
    ],
    poach: [
      { item: "Ring Wyrm Scale", rate: "95%" },
      { item: "Wyrm Carapace (95%) (Nabreus)", rate: "?" }
    ],
    abilities: ["Attack", "Rake", "Restore", "Greater Barrier", "Fireball", "Breath", "Firaga", "Blizzaga", "Thundaga"],
    notes: "Can spawn under the Sleep status\n\nCan inflict Petrify on physical attacks",
  },
  {
    id: "e-333", name: "Emeralditan", zone: "Cerobi Steppe",
    level: { min: 44, max: 47 }, hp: { min: 20270, max: 20590 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Sleep", "Silence", "Oil", "Immobilize", "Slow\n\nUrutan Eater is weak to Reverse", "Blind", "Disease", "Immobilize", "Slow"] },
    drops: [
      { item: "Aged Turtle Shell", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Aeroga Mote", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Aged Turtle Shell", rate: "55%" },
      { item: "800 Gil", rate: "10%" },
      { item: "Turtleshell Choker", rate: "3%" }
    ],
    poach: [
      { item: "Aged Turtle Shell", rate: "95%" },
      { item: "Scarletite", rate: "5%" }
    ],
    abilities: ["Attack", "Flatten", "Purify", "Stone Stomp", "Stone Gaze", "Renew", "Meditate", "Fira", "Thundara", "Blizzara", "Aquaga", "Reflect", "Darkra", "Fire (Urutan)", "Thunder (Urutan)", "Blizzard (Urutan)", "Protect (Urutan)", "Sonic Turn (Urutan)"],
    notes: "Can spawn under the Protect status\n\nUrutan Eater does Wind damage on its physical attacks\n\nUrutan Eater is fought as a boss/mark\n\nAccompanied by several Urutan Yensa to help defeat the Urutan Eater",
  },
  {
    id: "e-334", name: "Leynir", zone: "Cerobi Steppe",
    level: { min: 45, max: 48 }, hp: { min: 10135, max: 11095 }, mp: { min: 630, max: 720 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Silence", "Oil", "Slow"] },
    drops: [
      { item: "Storm Crystal", rate: "40%" },
      { item: "Charger Barding", rate: "25%" },
      { item: "Destrier Barding", rate: "5%" },
      { item: "Defender", rate: "1%" }
    ],
    steals: [
      { item: "Iron Carapace", rate: "55%" },
      { item: "Reflectga Mote", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Iron Carapace", rate: "95%" },
      { item: "Wargod\'s Band", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Flatten"],
    notes: "Can spawn under the Haste status",
  },
  {
    id: "e-335", name: "Leamonde Entite", zone: "Cerobi Steppe",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nImmune to all others except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Leamonde Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Leamonder Halcyon", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Firaga", "Blizzaga", "Thundaga", "Aquaga", "Aeroga", "Darkra", "Darkga", "Fearga"],
    notes: "Only appears in heavy fog conditions\n\nDamage is dealt back to attacker when hit\n\nDocile unless provoked or magick is cast in its vicinity - Pharos version is aggressive on sight\n\nCasts magick faster when near death",
  },
  {
    id: "e-336", name: "Foobar", zone: "Cerobi Steppe",
    level: { min: 43, max: 44 }, hp: { min: 6315, max: 6545 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Sleep", "Blind", "Poison", "Oil", "Disable", "Immobilize", "Slow\n\nNabreus Version is weak to Doom", "Blind", "Oil"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Silver Liquid", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Holy Mote (1%) (Garamsythe)", rate: "?" }
    ],
    steals: [
      { item: "Echo Herbs", rate: "55%" },
      { item: "Sagittarius Gem", rate: "10%" },
      { item: "Minerva Bustier (3%) (Garamsythe)", rate: "?" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Phantasmal Gaze", "Lunge", "Mythril Bubbles", "Flash", "Sleep", "Darkra", "Toxify"],
    notes: "Can spawn under the Shell status\n\nCan spawn under the Regen status\n\nDrops from the sky\n\nGaramsythe version only spawns during the Boss fight",
  },
  {
    id: "e-337", name: "Oversoul", zone: "Cerobi Steppe",
    level: { min: 47, max: 49 }, hp: { min: 20117, max: 20477 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Grimoire Togail", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Staff of the Magi", rate: "1%" }
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "Grimoire Togail", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Aquaga", "Aeroga", "Stop", "Blindga", "Silencega", "Darkra", "Death", "Doom", "Ram", "Dimensional Rift", "Annul"],
    notes: "Can spawn under the Shell status\n\nCan spawn under the Faith status\n\nCan teleport around the area\n\nCan only spawn six times per visit, 1st after 20 kills, 2nd after 15 kills, 3rd after 10 kills, 4th after 5 kills, 5th after 3 kills and 6th after 1 kill.\n\nEnemy has less health on recurring spawns after the first spawn\n\nEnemy can move between zones if not killed\n\nNo EXP, Loot or LP awarded if enemy uses Dimensional Rift",
  },
  {
    id: "e-338", name: "Babil", zone: "Cerobi Steppe",
    level: { min: 47, max: 48 }, hp: { min: 24647, max: 24887 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Holy"], weaknesses: ["Dark"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Oil", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Quality Stone", rate: "40%" },
      { item: "Holy Crystal", rate: "25%" },
      { item: "Runeblade", rate: "5%" },
      { item: "Holy Mote", rate: "1%" }
    ],
    steals: [
      { item: "Holy Stone", rate: "55%" },
      { item: "X-Potion", rate: "10%" },
      { item: "Einherjarium", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Wild Charge", "Focus", "Aquaga", "Aeroga", "Haste", "Gravity"],
    notes: "Can spawn under the Protect status",
  },
  {
    id: "e-339", name: "Elvoret", zone: "Cerobi Steppe",
    level: { min: 46, max: 48 }, hp: { min: 10351, max: 10671 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Silence", "Oil", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Demon Eyeball", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Serum", rate: "5%" },
      { item: "Maximillian", rate: "1%" }
    ],
    steals: [
      { item: "Demon Eyeball", rate: "55%" },
      { item: "500 Gil", rate: "10%" },
      { item: "Reverse Mote", rate: "3%" }
    ],
    poach: [
      { item: "Demon Eyeball", rate: "95%" },
      { item: "Demon Drink", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Pulsar Wave", "Leech", "Fira", "Thundara", "Blizzara", "Darkra", "Syphon", "Breakart Pentagram"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Faith status\n\nCan spawn under the Shell status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-340", name: "Dark Elemental", zone: "Cerobi Steppe",
    level: { min: 25, max: 25 }, hp: { min: 14830, max: 14830 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nImmune to all elements other the Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Dark Magicite", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Dark Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Dark Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Fira", "Blizzara", "Thundara", "Aquara", "Aerora", "Darkra"],
    notes: "Docile unless magick is used near it or is attacked",
  },

  // Elite Hunts
  {
    id: "e-341", name: "Chickatrice", zone: "Elite Hunts",
    level: { min: 13, max: 13 }, hp: { min: 3067, max: 3067 }, mp: { min: 338, max: 338 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Small Feather", rate: "10%" },
      { item: "Large Feather", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Poke"],
    notes: "3 spawn during the hunt",
  },
  {
    id: "e-342", name: "Cluckatrice", zone: "Elite Hunts",
    level: { min: 15, max: 15 }, hp: { min: 7509, max: 7509 }, mp: { min: 563, max: 563 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Reverse", "Blind", "Silence", "Disease", "Disable", "Immobilize", "Sap"] },
    drops: [
      
    ],
    steals: [
      { item: "Small Feather", rate: "55%" },
      { item: "Wind Stone", rate: "10%" },
      { item: "Taurus Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Poke", "Purify", "Stone Gaze", "Mucus"],
    notes: "Can inflict Slow on its physical attacks",
  },
  {
    id: "e-343", name: "Rocktoise", zone: "Elite Hunts",
    level: { min: 16, max: 16 }, hp: { min: 17548, max: 17548 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Sleep", "Blind", "Silence", "Disease", "Immobilize", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Turtle Shell", rate: "10%" },
      { item: "Aged Turtle Shell", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Stone Stomp", "Sonic Spin", "Purify", "Focus", "Flash", "Fire", "Thunder", "Blizzard", "Dark"],
    notes: "Will spawn under the Haste status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-344", name: "Orthros", zone: "Elite Hunts",
    level: { min: 34, max: 34 }, hp: { min: 87141, max: 87141 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water\n\nHalf to all elements except Fire"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Disease"] },
    drops: [
      
    ],
    steals: [
      { item: "Phoenix Down", rate: "55%" },
      { item: "Caramel", rate: "10%" },
      { item: "Slime Oil", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Slap", "Mythril Bubbles", "Phantasmal Gaze", "Flash", "Bleed", "Thundaga", "Slowga", "Break", "Immobilizega", "Disablega", "Darkra"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Faith status\n\nCan spawn under the Protect status\n\nWill spawn under the Shell status\n\nWill spawn under the Haste status",
  },
  {
    id: "e-345", name: "Gil Snapper", zone: "Elite Hunts",
    level: { min: 37, max: 37 }, hp: { min: 86956, max: 86956 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice\n\nHalf to all elements except Lightning"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Silence", "Disease", "Immobilize", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "1000 Gil", rate: "55%" },
      { item: "2000 Gil", rate: "10%" },
      { item: "4000 Gil", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Flatten", "Purify", "Flash", "Meditate", "Blizzara", "Blizzaga", "Disablega"],
    notes: "Will spawn under the Protect status\n\nWill spawn under the Shell status\n\nWill spawn under the Haste status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-346", name: "Trickster", zone: "Elite Hunts",
    level: { min: 44, max: 44 }, hp: { min: 61321, max: 61321 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Changes elements through the battle"], weaknesses: ["Changes elements through the battle"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence"] },
    drops: [
      
    ],
    steals: [
      { item: "Chocobo Feather", rate: "55%" },
      { item: "Gysahl Greens", rate: "10%" },
      { item: "Hastega Mote", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Choco Comet", "Shift"],
    notes: "Can spawn under the Protect status\n\nWill spawn under the Haste status\n\nCan inflict Doom on its physical attacks",
  },
  {
    id: "e-347", name: "Gilgamesh", zone: "Elite Hunts",
    level: { min: 45, max: 1 }, hp: { min: 123103, max: 1 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Half to all elements"], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Slow\n\nPhase 2 is immune to all status effects"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion (55%) (Above 40% HP) (Phase 1)", rate: "?" },
      { item: "Hi-Potion (55%) (Above 60% HP) (Phase 2)", rate: "?" },
      { item: "Hi-Potion (10%) (Above 40% HP) (Phase 1)", rate: "?" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Fly, Enkidu", "Now, Enkidu", "Ultimate Illusion", "Kick", "Slice Thrice", "Perfect Defence", "LV2 Sleep", "LV3 Disable", "LV4 Break", "Monarch Sword", "Bitter End"],
    notes: "Will appear under the Protect status\n\nWill appear under the Shell status\n\nWill appear under the Haste status\n\nWill appear under the Regen status\n\nWill appear under the Reflect status\n\nCan inflict Slow on its physical attacks (only above 40% HP) (Phase 1)\n\nCan inflict Silence on its physical attacks (only below 40% HP) (Phase 1)\n\nCan inflict Sleep on its physical attacks (only below 20% HP) (Phase 1)\n\nCan inflict Stop on its physical attacks (only above 60% HP) (Phase 2)\n\nCan inflict Petrify on its physical attacks (only above 40% HP) (Phase 2)\n\nCan inflict Sap on its physical attacks (only below 40% HP) (Phase 2)",
  },
  {
    id: "e-348", name: "Enkidu", zone: "Elite Hunts",
    level: { min: 43, max: 1 }, hp: { min: 33052, max: 1 }, mp: { min: 429, max: 1 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Poison", "Silence", "Oil", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Wolf Pelt", rate: "55%" },
      { item: "Beastlord Hide", rate: "10%" },
      { item: "Hell-gates Flame", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Dash", "Growl", "Crushing Fangs"],
    notes: "Will spawn under the Protect status\n\nCan spawn under the Shell status\n\nWill spawn under the Haste status\n\nCan inflict Petrify on its physical attacks",
  },
  {
    id: "e-349", name: "Ixion", zone: "Elite Hunts",
    level: { min: 58, max: 58 }, hp: { min: 166559, max: 306559 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Silence", "Oil", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Grimoire Aidhed", rate: "10%" },
      { item: "Magick Lamp", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Kick", "Rush", "Snake Lash", "Purify", "Firaga", "Blizzaga", "Thundaga", "Aquaga", "Aeroga", "Darkra", "Dispelga", "Silencega", "Sleepga", "Fearga", "Curse"],
    notes: "Will spawn under the Faith status\n\nCan spawn under the Protect status\n\nWill spawn under the Shell status\n\nWill spawn under the Haste status\n\nCan deal Lightning damage on its physical attacks\n\nStats are weaker if enemy spawns in Abyssal Interior zone",
  },
  {
    id: "e-350", name: "Pandaemonium", zone: "Elite Hunts",
    level: { min: 45, max: 55 }, hp: { min: 116678, max: 115849 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth\n\nImmune to all elements except Wind"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Silence", "Oil\n\nHunt version is immune to Confuse but weak to Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Ancient Turtle Shell", rate: "55%" },
      { item: "Aries Gem", rate: "10%" },
      { item: "Scarletite", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Flatten", "Power Spin", "Stone Gaze", "Perfect Defence", "Flash"],
    notes: "Can spawn under the Shell status\n\nWill spawn under the Protect status\n\nIs treated as a Boss on first encounter and a Hunt on second encounter",
  },
  {
    id: "e-351", name: "Shadowseer", zone: "Elite Hunts",
    level: { min: 67, max: 67 }, hp: { min: 278078, max: 278078 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil"] },
    drops: [
      
    ],
    steals: [
      { item: "Foul Flesh", rate: "55%" },
      { item: "Maggoty Flesh", rate: "10%" },
      { item: "Forbidden Flesh", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Breakart Pentagram", "Shining Ray", "Meditate", "Curse", "Darkness", "Dispelga", "Holy", "Flare", "Scathe", "Slowga", "Immobilizega", "Darkga", "Fearga", "Shock", "Scourge", "Invert"],
    notes: "Will spawn under the Faith status\n\nWill spawn under the Shell status\n\nWill spawn under the Haste status",
  },

  // Empire
  {
    id: "e-352", name: "Imperial Marksman", zone: "Empire",
    level: { min: 7, max: 7 }, hp: { min: 264, max: 264 }, mp: { min: 79, max: 79 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Weak to everything except Reverse"] },
    drops: [
      { item: "Potion", rate: "25%" },
      { item: "Phoenix Down", rate: "5%" }
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Phoenix Down", rate: "10%" },
      { item: "150 Gil", rate: "5%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack"],
    notes: "-",
  },
  {
    id: "e-353", name: "Imperial Magus", zone: "Empire",
    level: { min: 3, max: 4 }, hp: { min: 110, max: 114 }, mp: { min: 120, max: 130 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Weak to everything except Reverse"] },
    drops: [
      { item: "Potion", rate: "25%" },
      { item: "Dark Mote (5%) (Nalbina Dungeon)", rate: "?" },
      { item: "Warp Mote (5%) (Dreadnought)", rate: "?" },
      { item: "Aero Mote (1%) (Dreadnought)", rate: "?" }
    ],
    steals: [
      { item: "Potion (55%) (Nalbina Dungeon)", rate: "?" },
      { item: "Antidote (55%) (Dreadnought)", rate: "?" },
      { item: "Antidote (10%) (Nalbina Dungeon)", rate: "?" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Cure", "Fire", "Thunder", "Blizzard", "Blind", "Poison"],
    notes: "Can spawn under the Shell status (Dreadnought version)",
  },
  {
    id: "e-354", name: "Mastiff", zone: "Empire",
    level: { min: 11, max: 12 }, hp: { min: 535, max: 555 }, mp: { min: 60, max: 65 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Weak to everything except Doom and Sap\n\nBahamut version is weak to Confuse", "Reverse", "Sleep", "Silence", "Oil", "Immobilize", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Phoenix Down", rate: "10%" },
      { item: "Hi-Potion (10%) (Draklor)", rate: "?" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Fangs", "Sonic Fangs", "Screech", "Eerie Soundwave"],
    notes: "-",
  },
  {
    id: "e-355", name: "Imperial Gunner", zone: "Empire",
    level: { min: 9, max: 47 }, hp: { min: 647, max: 4219 }, mp: { min: 132, max: 726 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Weak to everything except Petrify", "Reverse", "Disable\n\nBahamut version is weak to Disable"] },
    drops: [
      { item: "Potion", rate: "25%" },
      { item: "Phoenix Down (25%) (Bahamut)", rate: "?" },
      { item: "Phoenix Down", rate: "5%" },
      { item: "Hi-Potion (5%) (Bahamut)", rate: "?" }
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "80 Gil", rate: "10%" },
      { item: "230 Gil", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack"],
    notes: "Can spawn under the Faith status (Bahamut version)\n\nCan spawn under the Protect status (Bahamut version)",
  },
  {
    id: "e-356", name: "Imperial Beastmaster", zone: "Empire",
    level: { min: 49, max: 50 }, hp: { min: 3458, max: 3698 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Weak to everything except Petrify", "Stop", "Reverse", "Disable"] },
    drops: [
      { item: "Phoenix Down", rate: "25%" },
      { item: "Hi-Potion", rate: "5%" },
      { item: "Reflectga Mote", rate: "1%" }
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Ether", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Wild Charge", "Blindga", "Toxify"],
    notes: "Can spawn under the Protect status\n\nCan spawn under the Shell status",
  },
  {
    id: "e-357", name: "Air Cutter Remora", zone: "Empire",
    level: { min: 10, max: 10 }, hp: { min: 2200, max: 2200 }, mp: { min: 50, max: 50 },
    elemental: { strengths: [], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Immobilize"] },
    drops: [
      
    ],
    steals: [
      
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Remora Strike"],
    notes: "Impossible to lose against\n\nServes as a tutorial fight",
  },
  {
    id: "e-358", name: "Spinner Rook", zone: "Empire",
    level: { min: 47, max: 47 }, hp: { min: 13286, max: 13286 }, mp: { min: 770, max: 770 },
    elemental: { strengths: ["Half to all elements"], weaknesses: ["Half to all elements"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Oil", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Knot of Rust", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "X-Potion", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Oil", "Slow", "Immobilize", "Disable", "Stop", "Blind", "Silence", "Sleep", "Poison", "Gravity", "Pox"],
    notes: "-",
  },
  {
    id: "e-359", name: "Sphere Rook", zone: "Empire",
    level: { min: 47, max: 47 }, hp: { min: 10286, max: 10286 }, mp: { min: 770, max: 770 },
    elemental: { strengths: ["Half to all elements"], weaknesses: ["Half to all elements"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Oil", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Knot of Rust", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "X-Potion", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Haste", "Reflect", "Protect", "Shell"],
    notes: "-",
  },
  {
    id: "e-360", name: "Helm Rook", zone: "Empire",
    level: { min: 47, max: 47 }, hp: { min: 12286, max: 12286 }, mp: { min: 770, max: 770 },
    elemental: { strengths: ["Half to all elements"], weaknesses: ["Half to all elements"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Oil", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Knot of Rust", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "X-Potion", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Fira", "Thundara", "Blizzara", "Aquara", "Aerora", "Firaga", "Thundaga", "Blizzaga", "Aquaga", "Aeroga", "Dark", "Darkra"],
    notes: "-",
  },
  {
    id: "e-361", name: "Rook", zone: "Empire",
    level: { min: 38, max: 38 }, hp: { min: 9859, max: 9859 }, mp: { min: 441, max: 441 },
    elemental: { strengths: ["Half to all elements"], weaknesses: ["Half to all elements"], absorbs: [] },
    status: { immune: [], weak: ["Doom"] },
    drops: [
      
    ],
    steals: [
      { item: "Knot of Rust", rate: "55%" },
      { item: "Potion", rate: "10%" },
      { item: "Hi-Potion", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Curaga", "Regen", "Reflect", "Protect", "Shell", "Drain", "Syphon"],
    notes: "Must be killed first",
  },
  {
    id: "e-362", name: "Doctor Cid", zone: "Empire",
    level: { min: 40, max: 50 }, hp: { min: 72989, max: 82093 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Half to all elements"], weaknesses: ["Half to all elements"], absorbs: [] },
    status: { immune: [], weak: ["Silence", "Berserk\n\nPharos version is weak to Oil"] },
    drops: [
      
    ],
    steals: [
      { item: "Knot of Rust", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "X-Potion", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Haste", "Greater Barrier", "S-27 Tomahawk", "S-85 Cyclotrone", "Gatling Gun", "Protect", "Shell"],
    notes: "Must first kill the enemies in the fight before damaging enemy\n\nAccompanied by other enemies\n\nWill spawn under the Protect status (Pharos version)\n\nWill spawn under the Shell status (Pharos version)\n\nWill spawn under the Haste status (Pharos version)",
  },
  {
    id: "e-363", name: "Sephira", zone: "Empire",
    level: { min: 50, max: 50 }, hp: { min: 12121, max: 12121 }, mp: { min: 613, max: 613 },
    elemental: { strengths: ["Varies depending on the colour"], weaknesses: ["Varies depending on the colour"], absorbs: [] },
    status: { immune: [], weak: [] },
    drops: [
      
    ],
    steals: [
      { item: "Hi-Ether", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack"],
    notes: "Spawns 5 in total - 5 different colours with minor stat changes\n\nCan inflict Immobilize on their physical attacks",
  },

  // Espers
  {
    id: "e-364", name: "Feral Retriever", zone: "Espers",
    level: { min: 28, max: 28 }, hp: { min: 22559, max: 22559 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Wind\n\nHalf to all elements except Earth"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Blind", "Silence", "Disease", "Immobilize", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Pebble", rate: "55%" },
      { item: "Quality Pelt", rate: "10%" },
      { item: "Prime Pelt", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Rake", "Mind Lash", "Blaster", "Purify", "Stone Gaze", "Balance", "White Wind"],
    notes: "Can spawn under the Faith status\n\nWill spawn under the Shell status\n\nCan inflict Sap on its physical attacks",
  },
  {
    id: "e-365", name: "Wild Malboro", zone: "Espers",
    level: { min: 50, max: 50 }, hp: { min: 110842, max: 110842 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Silence", "Oil", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Malboro Flower", rate: "55%" },
      { item: "Foul Liquid", rate: "10%" },
      { item: "Virgo Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Cloying Breath", "Hero\'s March", "Purify", "Bad Breath", "Soul Etude", "Putrid Breath", "Magick Wall"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Faith status\n\nWill spawn under the Shell status\n\nWill spawn under the Protect status\n\nWill spawn under the Haste status\n\nCan inflict Confuse on its physical attacks\n\nIs accompanied by other enemies",
  },
  {
    id: "e-366", name: "Catoblepas", zone: "Espers",
    level: { min: 46, max: 46 }, hp: { min: 187991, max: 187991 }, mp: { min: 990, max: 990 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Hi-Potion", rate: "55%" },
      { item: "Beastlord Hide", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Smite of Rage", "Tail Swipe", "Wail", "Haste", "Protect"],
    notes: "Can spawn under the Bravery status\n\nWill spawn under the Shell status\n\nCan spawn under the Protect status\n\nCan spawn under the Reflect status",
  },
  {
    id: "e-367", name: "Bloodwing", zone: "Espers",
    level: { min: 37, max: 37 }, hp: { min: 41171, max: 41171 }, mp: { min: 713, max: 713 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Blind", "Silence", "Disease", "Immobilize"] },
    drops: [
      
    ],
    steals: [
      { item: "Pebble", rate: "55%" },
      { item: "Bat Fang", rate: "10%" },
      { item: "Spiral Incisor", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Eerie Soundwave", "Leech"],
    notes: "Can spawn under the Bravery status\n\nWill spawn under the Haste status\n\nEnemy is flying - can only be hit by magic, ranged weapons or long weapons\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-368", name: "Pylraster", zone: "Espers",
    level: { min: 63, max: 63 }, hp: { min: 493513, max: 493513 }, mp: { min: 675, max: 675 },
    elemental: { strengths: ["Water\n\nHalf to all elements except Fire"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Tyrant Hide", rate: "55%" },
      { item: "Tyrant Bone", rate: "10%" },
      { item: "Hastega Mote", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Crushing Fangs", "Screwtail", "Growing Threat", "Rage"],
    notes: "Will spawn under the Bravery status\n\nWill spawn under the Protect status\n\nWill spawn under the Protect status\n\nCan inflict Confuse on its physical attacks",
  },

  // Feywood
  {
    id: "e-369", name: "Great Malboro", zone: "Feywood",
    level: { min: 22, max: 23 }, hp: { min: 1630, max: 1750 }, mp: { min: 630, max: 642 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Malboro Vine", rate: "40%" },
      { item: "Earth Magicite", rate: "25%" },
      { item: "Bacchus\'s Wine", rate: "5%" },
      { item: "Iron Pole", rate: "1%" }
    ],
    steals: [
      { item: "Earth Magicite", rate: "55%" },
      { item: "Malboro Vine", rate: "10%" },
      { item: "Virgo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Malboro Vine", rate: "95%" },
      { item: "Foul Liquid", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Bad Breath", "Cloying Breath", "Purify"],
    notes: "Darker variation of the Malboro - slightly tougher with new drop table",
  },

  // Garamsythe Waterway
  {
    id: "e-370", name: "Gigantoad", zone: "Garamsythe Waterway",
    level: { min: 19, max: 20 }, hp: { min: 1469, max: 1489 }, mp: { min: 455, max: 460 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Water Stone", rate: "40%" },
      { item: "Horn", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Eye Drops", rate: "1%" }
    ],
    steals: [
      { item: "Horn", rate: "55%" },
      { item: "50 Gil", rate: "10%" },
      { item: "Lambent Hat", rate: "3%" }
    ],
    poach: [
      { item: "Horn", rate: "95%" },
      { item: "Horn", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Angelsong"],
    notes: "Often found under the sleep status (50%)\n\nIn Giza Plains, usually jump from the water",
  },
  {
    id: "e-371", name: "Malboro Overking", zone: "Garamsythe Waterway",
    level: { min: 38, max: 39 }, hp: { min: 6503, max: 6743 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Malboro Fruit", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Dark Magicite (25%) (Tchita)", rate: "?" },
      { item: "Vanishga Mote", rate: "5%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Malboro Flower", rate: "10%" },
      { item: "Virgo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Malboro Fruit", rate: "95%" },
      { item: "Putrid Liquid", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Purify", "Cloying Breath", "Bad Breath"],
    notes: "-",
  },
  {
    id: "e-372", name: "Garchimacera", zone: "Garamsythe Waterway",
    level: { min: 4, max: 6 }, hp: { min: 287, max: 317 }, mp: { min: 180, max: 240 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilise", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Demon Eyeball", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Fire Magicite (25%) (LV37-40)", rate: "?" },
      { item: "Bronze Armour", rate: "5%" }
    ],
    steals: [
      { item: "Demon Eyeball", rate: "55%" },
      { item: "10 Gil", rate: "10%" },
      { item: "Dark Mote", rate: "3%" }
    ],
    poach: [
      { item: "Demon Eyeball", rate: "95%" },
      { item: "Demon Eyeball", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Fire", "Leech"],
    notes: "Can inflict Blind on physical hits\n\nDifficult to spawn on re-visits after the story",
  },
  {
    id: "e-373", name: "Gespenst", zone: "Garamsythe Waterway",
    level: { min: 41, max: 42 }, hp: { min: 7917, max: 8097 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Blind", "Poison", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Book of Orgain", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Reflectga Mote", rate: "10%" },
      { item: "Ninja Gear", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Aquara", "Aerora", "Darkra", "Silence", "Death", "Dimensional Rift", "Annul", "Doom", "Ram"],
    notes: "Often spawns outside map and teleports in\n\nProvides no EXP or LP if died by Dimensional Rift\n\nDifficult to spawn, requires several gates to be closed\n\nImmune to several Technicks eg. Sight Unseeing, Achilles, Charm, Syphon\n\nCab warp to other areas",
  },
  {
    id: "e-374", name: "Water Elemental", zone: "Garamsythe Waterway",
    level: { min: 25, max: 25 }, hp: { min: 14830, max: 14830 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Water Magicite", rate: "40%" },
      { item: "Water Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Water Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Water Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Water Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Aquara", "Protect", "Shell", "Silence", "Sleep"],
    notes: "Immune to several Technicks eg. Sight Unseeing, Achilles, Charm, Syphon\n\nWon\'t attack unless provoked or magic is cast in the vicinity\n\nSpawns every ten minutes after its killed",
  },

  // Giruvegan
  {
    id: "e-375", name: "Onion Queen", zone: "Giruvegan",
    level: { min: 37, max: 42 }, hp: { min: 9069, max: 3959 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Silence", "Disease", "Berserk (Boss)\n\nSleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Screamroot", rate: "40%" },
      { item: "Wind Crystal", rate: "25%" },
      { item: "Remedy", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Wind Crystal", rate: "55%" },
      { item: "Screamroot", rate: "10%" },
      { item: "Agate Ring", rate: "3%" }
    ],
    poach: [
      { item: "Screamroot", rate: "95%" },
      { item: "Onion", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Pollen", "Vespersong", "Curaga", "Haste", "Protect", "Shell"],
    notes: "(Boss) always spawns under the Haste status\n\nWill only spawn in the Feywood once all other enemies in the zone are killed\n\nPhysical attacks can inflict the Silence status",
  },
  {
    id: "e-376", name: "Preying Mantis", zone: "Giruvegan",
    level: { min: 43, max: 44 }, hp: { min: 7465, max: 7705 }, mp: { min: 475, max: 482 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Slow", "Berserk"] },
    drops: [
      { item: "Insect Husk", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Reflectga Mote", rate: "5%" },
      { item: "Cancer Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Cancer Gem", rate: "10%" },
      { item: "Bowline Sash", rate: "3%" }
    ],
    poach: [
      { item: "Insect Husk", rate: "95%" },
      { item: "Sickle-Blade", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Shock Wave", "Cannibalize"],
    notes: "Can reach max level if it uses Cannibalize too much",
  },
  {
    id: "e-377", name: "Pumpkin Star", zone: "Giruvegan",
    level: { min: 37, max: 42 }, hp: { min: 9069, max: 3959 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Disease", "Slow", "Berserk (Boss)\n\nSleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Storm Crystal", rate: "40%" },
      { item: "Screamroot", rate: "25%" },
      { item: "Traitor\'s Bow", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Screamroot", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Virgo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Screamroot", rate: "95%" },
      { item: "Jack-o-Lantern", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Scream", "Mystery Waltz", "Blind", "Silence", "Sleep", "Toxify", "Bleed"],
    notes: "(Boss) always spawns under the Haste status\n\nWill only spawn in the Feywood once all other enemies in the zone are killed\n\nPhysical attacks can inflict the Confuse status",
  },
  {
    id: "e-378", name: "Topstalk", zone: "Giruvegan",
    level: { min: 37, max: 42 }, hp: { min: 9069, max: 3959 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Disease", "Sap", "Berserk (Boss)\n\nSleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Fire Crystal", rate: "40%" },
      { item: "Screamroot", rate: "25%" },
      { item: "Echo Herbs", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Screamroot", rate: "55%" },
      { item: "Virgo Gem", rate: "10%" },
      { item: "Jade Gown", rate: "3%" }
    ],
    poach: [
      { item: "Screamroot", rate: "95%" },
      { item: "Tomato Stalk", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Toxify", "Mystery Waltz", "Bleed", "Scream", "Blind", "Silence", "Sleep"],
    notes: "(Boss) always spawns under the Haste status\n\nWill only spawn in the Feywood once all other enemies in the zone are killed\n\nPhysical attacks can inflict the Disable status",
  },
  {
    id: "e-379", name: "Mirrorknight", zone: "Giruvegan",
    level: { min: 40, max: 42 }, hp: { min: 5202, max: 5842 }, mp: { min: 760, max: 820 },
    elemental: { strengths: ["Half resistant to all except Earth"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Windslicer Pinion", rate: "40%" },
      { item: "Wind Crystal", rate: "25%" },
      { item: "Mirror Mail", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Wind Crystal", rate: "55%" },
      { item: "X-Potion", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Windslicer Pinion", rate: "95%" },
      { item: "Mirror Scale", rate: "5%" }
    ],
    abilities: ["Attack", "Slap", "Screech", "Aeroga", "Curaga", "Reflect"],
    notes: "Can appear under the Haste Status",
  },
  {
    id: "e-380", name: "Holy Elemental", zone: "Giruvegan",
    level: { min: 25, max: 25 }, hp: { min: 14830, max: 14830 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Holy\n\nImmune to all elements other the Dark"], weaknesses: ["Dark"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Holy Magicite", rate: "40%" },
      { item: "Holy Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Holy Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Holy Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Holy Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Fira", "Blizzara", "Thundara", "Aquara", "Holy"],
    notes: "Docile unless magick is used near it or is attacked",
  },
  {
    id: "e-381", name: "Tartarus", zone: "Giruvegan",
    level: { min: 38, max: 40 }, hp: { min: 3619, max: 4259 }, mp: { min: 285, max: 345 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "X-Potion", rate: "5%" },
      { item: "Libra Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Libra Gem", rate: "10%" },
      { item: "Power Vest", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Sonic Fangs", "Screech"],
    notes: "Can spawn under the Haste status",
  },
  {
    id: "e-382", name: "Ose", zone: "Giruvegan",
    level: { min: 44, max: 45 }, hp: { min: 6739, max: 7059 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Sleep", "Blind", "Poison", "Silence", "Oil", "Sap", "Slow"] },
    drops: [
      { item: "Prime Pelt", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Morning Star", rate: "5%" },
      { item: "Libra Gem", rate: "1%" }
    ],
    steals: [
      { item: "Chronos Tear", rate: "55%" },
      { item: "Prime Pelt", rate: "10%" },
      { item: "Libra Gem", rate: "3%" }
    ],
    poach: [
      { item: "Prime Pelt", rate: "95%" },
      { item: "Coeurl Whisker", rate: "5%" }
    ],
    abilities: ["Attack", "Rake", "Stone Gaze", "Hawk Glare", "Hell Blaster", "Blaster", "Mind Lash", "Thundaga", "Haste", "Sleep", "Darkra"],
    notes: "Can spawn under the Shell status\n\nCan inflict Sap on physical attacks",
  },
  {
    id: "e-383", name: "Shadonir", zone: "Giruvegan",
    level: { min: 59, max: 60 }, hp: { min: 25544, max: 25864 }, mp: { min: 870, max: 900 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Confuse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Charger Barding", rate: "40%" },
      { item: "Storm Crystal", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Storm Crystal", rate: "55%" },
      { item: "Charger Barding", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Charger Barding", rate: "95%" },
      { item: "Spica", rate: "5%" }
    ],
    abilities: ["Attack", "Rage", "Flatten", "Kick"],
    notes: "Can spawn under the Shell status",
  },
  {
    id: "e-384", name: "Skulwyrm", zone: "Giruvegan",
    level: { min: 38, max: 40 }, hp: { min: 14895, max: 16255 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Poison", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Battlewyrm Carapace", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Hi-Potion", rate: "5%" },
      { item: "Bastard Sword (1%) (Zertinan)", rate: "?" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Charger Barding (10%) (Zertinan)", rate: "?" },
      { item: "Wyrm Bone", rate: "10%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Crushing Fangs", "Sonic Fangs", "Dispel", "Fira", "Thundara", "Blizzara", "Bio", "Firaga", "Thundaga", "Blizzaga", "Break", "Disablega", "Toxify", "Darkra", "Curse"],
    notes: "Can spawn under the Bravery status",
  },
  {
    id: "e-385", name: "Vivian", zone: "Giruvegan",
    level: { min: 42, max: 44 }, hp: { min: 6529, max: 7006 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Sleep", "Poison", "Silence", "Oil", "Disease", "Disable", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Malboro Flower", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Soleil Fang", rate: "10%" },
      { item: "Virgo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Malboro Flower", rate: "95%" },
      { item: "Cleric\'s Robes", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Cloying Breath", "Purify", "Bad Breath", "Soul Etude", "Time Requiem", "Putrid Breath"],
    notes: "Can spawn under the Protect status\n\nCan spawn under the Haste status",
  },
  {
    id: "e-386", name: "Mom Bomb", zone: "Giruvegan",
    level: { min: 45, max: 62 }, hp: { min: 6384, max: 18164 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Sleep", "Poison", "Silence", "Oil", "Disable", "Sap", "Slow"] },
    drops: [
      { item: "Bomb Shell", rate: "40%" },
      { item: "Fire Crystal", rate: "25%" },
      { item: "Diamond Armlet", rate: "5%" },
      { item: "Scorpio Gem", rate: "1%" }
    ],
    steals: [
      { item: "Bomb Shell", rate: "55%" },
      { item: "Soleil Fang", rate: "10%" },
      { item: "Scorpio Gem", rate: "3%" }
    ],
    poach: [
      { item: "Bomb Shell", rate: "95%" },
      { item: "Scorpio Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Self-Destruct", "Chain Reaction", "Mass Destruct", "Firaga", "Protect", "Shell"],
    notes: "Can spawn under the Shell status\n\nCan inflict Sap on physical attacks\n\nAppears both the first time and on subsequent visits which is why there is a big difference between HP and Levels",
  },
  {
    id: "e-387", name: "Necrophobe", zone: "Giruvegan",
    level: { min: 46, max: 60 }, hp: { min: 8511, max: 23939 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Sap", "Slow\n\nDifferent areas will have different weaknesses"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Bacchus\'s Wine", rate: "25%" },
      { item: "Sky Jewel", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" }
    ],
    steals: [
      { item: "Sky Jewel", rate: "55%" },
      { item: "Teleport Stone", rate: "10%" },
      { item: "Hermes Sandals", rate: "3%" }
    ],
    poach: [
      { item: "Sky Jewel", rate: "95%" },
      { item: "Ambrosia", rate: "5%" }
    ],
    abilities: ["Attack", "Divide", "Darkra", "Death", "Doom"],
    notes: "Can spawn under the Faith status\n\nCan spawn under the Shell status\n\nTeleports around the area\n\nAppears the first time and on subsequent visits which is why the HP and Levels have a big difference",
  },
  {
    id: "e-388", name: "Diakon Entite", zone: "Giruvegan",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nImmunene to all others"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Holy Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Daikon Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" }
    ],
    steals: [
      { item: "Holy Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Diakon Halcyon", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Dispelga", "Firaga", "Blizzaga", "Thundaga", "Aquaga", "Holy"],
    notes: "Only appears in heavy mist conditions\n\nDamage is dealt back to attacker when hit\n\nDocile unless provoked or magick is cast in its vicinity\n\nCasts magick faster when near death",
  },

  // Giza Plains
  {
    id: "e-389", name: "Silicon Tortoise", zone: "Giza Plains",
    level: { min: 36, max: 37 }, hp: { min: 12852, max: 13172 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Slow\n\nZertinan Caverns variant same as Giza but immune to Petrify"] },
    drops: [
      { item: "Aged Turtle Shell", rate: "40%" },
      { item: "Water Crystal", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "100 Gil", rate: "55%" },
      { item: "Aged Turtle Shell (10%) (Zertinan)", rate: "?" },
      { item: "Aries Gem", rate: "10%" }
    ],
    poach: [
      { item: "Aged Turtle Shell", rate: "95%" },
      { item: "Ancient Turtle Shell", rate: "5%" }
    ],
    abilities: ["Attack", "Aquara", "Fira", "Blizzara", "Thundara", "Flatten", "Purify", "Flash", "Meditate"],
    notes: "Immune to Water\n\nCan inflict Blind\n\nSmall Aggro leash",
  },

  // Golmore Jungle
  {
    id: "e-390", name: "Panther", zone: "Golmore Jungle",
    level: { min: 21, max: 23 }, hp: { min: 1299, max: 1519 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Coeurl Pelt", rate: "40%" },
      { item: "Storm Magicite", rate: "25%" },
      { item: "Warp Mote", rate: "5%" },
      { item: "Coeurl Pelt", rate: "1%" }
    ],
    steals: [
      { item: "Coeurl Pelt", rate: "55%" },
      { item: "Storm Magicite", rate: "10%" },
      { item: "Libra Gem", rate: "3%" }
    ],
    poach: [
      { item: "Coeurl Pelt", rate: "95%" },
      { item: "Quality Pelt", rate: "5%" }
    ],
    abilities: ["Attack", "Rake", "Stone Gaze", "Blaster", "Mind Lash"],
    notes: "",
  },
  {
    id: "e-391", name: "Hellhound", zone: "Golmore Jungle",
    level: { min: 37, max: 39 }, hp: { min: 3570, max: 3790 }, mp: { min: 270, max: 300 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Fire Magicite", rate: "25%" },
      { item: "Dark Mote", rate: "5%" },
      { item: "Red Cap", rate: "1%" }
    ],
    steals: [
      { item: "Prince\'s Kiss", rate: "55%" },
      { item: "Tanned Hide", rate: "10%" },
      { item: "Remedy", rate: "3%" }
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Libra Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Sonic Fangs"],
    notes: "",
  },
  {
    id: "e-392", name: "Diresaur", zone: "Golmore Jungle",
    level: { min: 27, max: 28 }, hp: { min: 5281, max: 5621 }, mp: { min: 165, max: 255 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Tyrant Hide", rate: "40%" },
      { item: "Earth Magicite", rate: "25%" },
      { item: "Hi-Potion", rate: "5%" },
      { item: "Float Mote", rate: "1%" }
    ],
    steals: [
      { item: "Tyrant Hide", rate: "55%" },
      { item: "Earth Magicite", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Tyrant Hide", rate: "95%" },
      { item: "Brigandine", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Sonic Fangs"],
    notes: "Has a high combo rate\n\nVersion in the Rustling Chapel has more health",
  },
  {
    id: "e-393", name: "Malboro", zone: "Golmore Jungle",
    level: { min: 37, max: 38 }, hp: { min: 8157, max: 8277 }, mp: { min: 999, max: 560 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Crystal", rate: "40%" },
      { item: "Earth Magicite (40%) (Golmore)", rate: "?" },
      { item: "Malboro Fruit", rate: "25%" },
      { item: "Nu Khai Sand (25%) (Golmore)", rate: "?" }
    ],
    steals: [
      { item: "Earth Magicite", rate: "55%" },
      { item: "Serum", rate: "10%" },
      { item: "Malboro Vine (10%) (Golmore)", rate: "?" }
    ],
    poach: [
      { item: "Malboro Fruit", rate: "95%" },
      { item: "Pebble (95%) (Golmore)", rate: "?" }
    ],
    abilities: ["Attack", "Lunge", "Cloying Breath", "Bad Breath", "Purify"],
    notes: "Feywood version only appears during Wild Malboro Hunt",
  },

  // Henne Mines
  {
    id: "e-394", name: "Jelly", zone: "Henne Mines",
    level: { min: 24, max: 25 }, hp: { min: 1913, max: 2018 }, mp: { min: 810, max: 850 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Oil", "Disease", "Slow", "Berserk"] },
    drops: [
      { item: "Water Magicite", rate: "40%" },
      { item: "Yellow Liquid", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Float Mote", rate: "1%" }
    ],
    steals: [
      { item: "Water Magicite", rate: "55%" },
      { item: "Yellow Liquid", rate: "10%" },
      { item: "500 Gil", rate: "3%" }
    ],
    poach: [
      { item: "Yellow Liquid", rate: "95%" },
      { item: "Flametongue", rate: "5%" }
    ],
    abilities: ["Attack", "Slap", "Aqua", "Phantasmal Gaze", "Divide"],
    notes: "Spawns from the ceiling\n\nSpawns in high quantites\n\nHeavily resistant to Gun weapons",
  },
  {
    id: "e-395", name: "Tyranorox", zone: "Henne Mines",
    level: { min: 26, max: 27 }, hp: { min: 4073, max: 4413 }, mp: { min: 135, max: 225 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Magicite", rate: "40%" },
      { item: "Prince\'s Kiss", rate: "25%" },
      { item: "Tyrant Hide", rate: "5%" },
      { item: "Sledgehammer", rate: "1%" }
    ],
    steals: [
      { item: "Earth Magicite", rate: "55%" },
      { item: "60 Gil", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Tyrant Hide", rate: "95%" },
      { item: "Tanned Tyrant Hide", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Sonic Fangs"],
    notes: "Can spawn under the Confuse status",
  },
  {
    id: "e-396", name: "Hecteyes", zone: "Henne Mines",
    level: { min: 62, max: 65 }, hp: { min: 34633, max: 35323 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Blind", "Oil", "Immobilize", "Slow"] },
    drops: [
      { item: "Yellow Liquid", rate: "40%" },
      { item: "Silver Liquid", rate: "25%" },
      { item: "Slime Oil", rate: "5%" },
      { item: "Sagittarius Gem", rate: "1%" }
    ],
    steals: [
      { item: "Chronos Tear", rate: "55%" },
      { item: "200 Gil", rate: "10%" },
      { item: "X-Potion", rate: "3%" }
    ],
    poach: [
      { item: "Silver Liquid", rate: "95%" },
      { item: "Unpurified Ether", rate: "5%" }
    ],
    abilities: ["Attack", "Slap", "Thundaga", "Bleed", "Pox", "Phantasmal Gaze", "Flash", "Mythril Bubbles"],
    notes: "Drops from the ceiling\n\nHeavily resistant to Gun weapons",
  },
  {
    id: "e-397", name: "Etem", zone: "Henne Mines",
    level: { min: 64, max: 65 }, hp: { min: 35916, max: 36096 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Confuse", "Poison", "Silence", "Oil", "Disable", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Book of Orgain-Mille", rate: "25%" },
      { item: "Ivory Pole", rate: "5%" },
      { item: "X-Potion", rate: "1%" }
    ],
    steals: [
      { item: "Book of Orgain-Mille", rate: "55%" },
      { item: "Capricorn Gem", rate: "10%" },
      { item: "Soul Powder", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Dimensional Rift", "Annul", "Firaga", "Blizzaga", "Thundaga", "Darkga", "Stop", "Death", "Doom"],
    notes: "Can appear invisible\n\nCan spawn under the Protect, Shell, Haste and Bravery statuses\n\nCan sometimes spawn a Necrofiend after death\n\n(I hate this thing :)",
  },
  {
    id: "e-398", name: "Nightmare", zone: "Henne Mines",
    level: { min: 24, max: 25 }, hp: { min: 1630, max: 1688 }, mp: { min: 900, max: 980 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Poison", "Silence", "Oil", "Disable", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Grimoire Togail", rate: "40%" },
      { item: "Dark Magicite", rate: "25%" },
      { item: "Nu Khai Sand", rate: "5%" },
      { item: "Remedy", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Grimoire Togail", rate: "10%" },
      { item: "Hi-Potion", rate: "3%" }
    ],
    poach: [
      { item: "Grimoire Togail", rate: "95%" },
      { item: "Snowfly", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Dark", "Slow", "Blind", "Poison"],
    notes: "Can teleport around the area",
  },
  {
    id: "e-399", name: "Necrofiend", zone: "Henne Mines",
    level: { min: 63, max: 65 }, hp: { min: 30785, max: 31145 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Sleep", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Slow\n\nSecond Ascent is immune to Sleep and Poison\n\nThird Ascent is the same as Henne Mines but now weak to Doom and Blind\n\nSubterra is weak to Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Sky Jewel", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Capricorn Gem", rate: "5%" },
      { item: "Bubble Mote", rate: "1%" }
    ],
    steals: [
      { item: "Sky Jewel", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Lifewick", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Phantasmal Gaze", "Hawk Glare", "Maser Eye", "Firaga", "Thundaga", "Blizzaga", "Darkra", "Curse"],
    notes: "Can spawn under the Faith and Shell status\n\nCan teleport around the area",
  },

  // Humanoid
  {
    id: "e-400", name: "Seeq Cateran", zone: "Humanoid",
    level: { min: 32, max: 34 }, hp: { min: 3770, max: 3920 }, mp: { min: 300, max: 336 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Water Stone", rate: "25%" },
      { item: "Phoenix Down", rate: "5%" },
      { item: "Six Fluted Pole", rate: "1%" }
    ],
    steals: [
      { item: "Pebble", rate: "55%" },
      { item: "200 Gil", rate: "10%" },
      { item: "Hi-Potion", rate: "5%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Heave", "Lunge", "Provoke"],
    notes: "-",
  },
  {
    id: "e-401", name: "Seeq Thief", zone: "Humanoid",
    level: { min: 36, max: 39 }, hp: { min: 5932, max: 6652 }, mp: { min: 375, max: 495 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Dagger", rate: "25%" },
      { item: "Echo Herbs", rate: "5%" },
      { item: "Ice Crystal", rate: "1%" }
    ],
    steals: [
      { item: "80 Gil", rate: "55%" },
      { item: "Gold Needle", rate: "10%" },
      { item: "Aquara Mote", rate: "5%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Heave", "Lunge"],
    notes: "-",
  },
  {
    id: "e-402", name: "Seeq Explorer", zone: "Humanoid",
    level: { min: 41, max: 42 }, hp: { min: 26778, max: 27018 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Sleep", "Silence", "Oil", "Slow", "Berserk"] },
    drops: [
      { item: "Water Crystal", rate: "25%" },
      { item: "Nu Khai Sand", rate: "5%" },
      { item: "Tumulus", rate: "1%" }
    ],
    steals: [
      { item: "160 Gil", rate: "55%" },
      { item: "Teleport Stone", rate: "10%" },
      { item: "X-Potion", rate: "5%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Heave", "Lunge", "Ice Break", "Haste", "Protect"],
    notes: "Enemy is docile - will not attack unless provoked\n\nWill spawn under the Bravery status\n\nWill spawn under the Shell status\n\nWill spawn under the Haste status",
  },
  {
    id: "e-403", name: "Daguza", zone: "Humanoid",
    level: { min: 8, max: 7 }, hp: { min: 232, max: 142 }, mp: { min: 90, max: 70 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion (55%) (Daguza and Gwitch)", rate: "?" },
      { item: "5 Gil (55%) (Galeedo)", rate: "?" },
      { item: "200 Gil (10%) (Daguza)", rate: "?" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Cure (Gwitch)"],
    notes: "Treated as a special encounter\n\nWill spawn under the Protect status (Daguza and Galeedo)",
  },
  {
    id: "e-404", name: "Urutan Yensa", zone: "Humanoid",
    level: { min: 12, max: 15 }, hp: { min: 702, max: 718 }, mp: { min: 150, max: 156 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Stone", rate: "25%" },
      { item: "Phoenix Down", rate: "5%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Potion", rate: "5%" }
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Pebble", rate: "55%" },
      { item: "Echo Herbs", rate: "10%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Tri Attack", "Blindna", "Poisona", "Silence", "Sleep"],
    notes: "Can spawn under the Haste status\n\nDifferent Variations of enemy have slightly different drop and steal pools",
  },
  {
    id: "e-405", name: "Garif Adventurer", zone: "Humanoid",
    level: { min: 21, max: 21 }, hp: { min: 7049, max: 7049 }, mp: { min: 840, max: 840 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Oil", "Sap"] },
    drops: [
      { item: "Ice Magicite", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Hi-Potion", rate: "1%" }
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "500 Gil", rate: "5%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Smite of Rage", "Lunge", "Scream", "Silence", "Soleil Fang", "Rime Fang"],
    notes: "Enemy is docile - will not attack unless provoked\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status\n\nWill spawn under the Haste status",
  },
  {
    id: "e-406", name: "Baknamy", zone: "Humanoid",
    level: { min: 35, max: 36 }, hp: { min: 4501, max: 4576 }, mp: { min: 805, max: 823 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Disease", "Sap", "Berserk"] },
    drops: [
      { item: "Storm Magicite (25%) (Salikawood)", rate: "?" },
      { item: "Storm Crystal (25%) (Nabreus)", rate: "?" },
      { item: "Diamond Armour (5%) (Salikawood)", rate: "?" },
      { item: "Hi-Potion (5%) (Nabreus)", rate: "?" }
    ],
    steals: [
      { item: "Antidote (55%) (Salikawood)", rate: "?" },
      { item: "Nu Khai Sand (55%) (Nabreus)", rate: "?" },
      { item: "Remedy (55%) (Nabudis)", rate: "?" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Goblin Attack", "Lunge", "Sandstorm", "Pyromania", "Angelsong", "Magick Ballad", "Slow", "Silence", "Death", "Soleil Fang", "Lightning Fang", "Rime Fang"],
    notes: "Can spawn under the Haste status",
  },
  {
    id: "e-407", name: "Bangaa Pirate", zone: "Humanoid",
    level: { min: 35, max: 37 }, hp: { min: 5381, max: 5531 }, mp: { min: 490, max: 526 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Reverse", "Sleep", "Poison", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow"] },
    drops: [
      { item: "Fire Magicite", rate: "25%" },
      { item: "Remedy", rate: "5%" },
      { item: "Aldebaran", rate: "1%" }
    ],
    steals: [
      { item: "80 Gil", rate: "55%" },
      { item: "Bacchus\'s Wine", rate: "10%" },
      { item: "Hi-Potion", rate: "5%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Jump", "Lunge", "Ram", "Tempest", "Provoke"],
    notes: "-",
  },
  {
    id: "e-408", name: "Bangaa Pugilist", zone: "Humanoid",
    level: { min: 31, max: 32 }, hp: { min: 13825, max: 13833 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Silence", "Oil", "Sap", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "10 Gil", rate: "10%" },
      { item: "Phoenix Down", rate: "5%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Jump", "Lunge", "Ram", "Sandstorm", "Tempest"],
    notes: "Enemy is docile - will not attack unless provoked\n\nWill spawn under the Bravery status\n\nWill spawn under the Protect status\n\nWill spawn under the Haste status\n\nWill spawn under the Regen status",
  },

  // Hunts
  {
    id: "e-409", name: "Atomos", zone: "Hunts",
    level: { min: 33, max: 33 }, hp: { min: 40020, max: 40020 }, mp: { min: 360, max: 360 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Silence", "Disease", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Tanned Giantskin", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Power Stun", "Spin Kick", "Purify", "Restore", "Regen", "Protect", "Shell", "White Wind"],
    notes: "Can spawn under the Haste status\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status",
  },
  {
    id: "e-410", name: "Roblon", zone: "Hunts",
    level: { min: 43, max: 43 }, hp: { min: 177365, max: 177365 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire\n\nHalf to all elements except Water"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Sap", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Fire Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Smite of Rage", "Tri Attack", "Focus", "Fira", "Blizzara", "Thundara", "Fear"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Shell status\n\nWill spawn under the Protect status\n\nAccessed past an out-of-bound area\n\nA ton of Dead Bones will spawn during the fight",
  },
  {
    id: "e-411", name: "Braegh", zone: "Hunts",
    level: { min: 35, max: 35 }, hp: { min: 43283, max: 43283 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning\n\nImmune to all elements except Ice"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Sleep", "Silence", "Disease", "Disable", "Immobilize", "Sap"] },
    drops: [
      
    ],
    steals: [
      { item: "Storm Magicite", rate: "55%" },
      { item: "Storm Crystal", rate: "10%" },
      { item: "Grimoire Aidhed", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Rush", "Snake Lash", "Thundara", "Bleed", "Immobilizega", "Berserk", "Invert"],
    notes: "Can spawn under the Haste status",
  },
  {
    id: "e-412", name: "Wraith", zone: "Hunts",
    level: { min: 9, max: 9 }, hp: { min: 5146, max: 5146 }, mp: { min: 600, max: 600 },
    elemental: { strengths: ["Ice"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Reverse", "Blind", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Glass Jewel", rate: "55%" },
      { item: "Dark Magicite", rate: "10%" },
      { item: "Hi-Potion", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Blizzard", "Blind", "Dark", "Doom", "Sleep Touch", "Poison Touch"],
    notes: "Inflicts Doom on a target\n\nCan teleport and warp around the arena\n\nDespite being an Undead, it is weak to Thunder",
  },
  {
    id: "e-413", name: "Darksteel", zone: "Hunts",
    level: { min: 38, max: 38 }, hp: { min: 111331, max: 111331 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nHalf to all elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Poison", "Disease", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Eye Drops", rate: "55%" },
      { item: "Aged Turtle Shell", rate: "10%" },
      { item: "Ancient Turtle Shell", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Flatten", "Power Spin", "Restore", "Stone Gaze", "Meditate", "Purify", "Protect", "Darkra"],
    notes: "Will spawn under the Bravery status\n\nWill spawn under the Shell status\n\nWill spawn under the Protect status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-414", name: "Nidhogg", zone: "Hunts",
    level: { min: 10, max: 10 }, hp: { min: 6079, max: 6079 }, mp: { min: 120, max: 120 },
    elemental: { strengths: ["Water\n\nHalf to all elements except Fire"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Disease", "Immobilize", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Antidote", rate: "55%" },
      { item: "Tanned Hide", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Tail Spear", "Saber"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Shell status\n\nCan spawn under the Haste status\n\nWill spawn under the Protect status\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-415", name: "Vyraal", zone: "Hunts",
    level: { min: 41, max: 41 }, hp: { min: 106616, max: 106616 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth\n\nHalf to all elements except Wind"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Silence", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Spiral Incisor", rate: "55%" },
      { item: "Charger Barding", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Sonic Fangs", "Fireball", "Restore", "Magick Barrier", "Haste", "Immobilizega"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Shell status\n\nWill spawn under the Protect status\n\nCan inflict Confuse on its physical attacks",
  },
  {
    id: "e-416", name: "Overlord", zone: "Hunts",
    level: { min: 42, max: 42 }, hp: { min: 64325, max: 64325 }, mp: { min: 713, max: 713 },
    elemental: { strengths: ["Fire\n\nHalf to all elements except Water"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Blind", "Silence", "Disease", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Forbidden Flesh", rate: "55%" },
      { item: "Fire Crystal", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Smite of Rage", "Tri Attack", "Pyromania", "Rage", "Bravery"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Shell status\n\nWill spawn under the Protect status",
  },
  {
    id: "e-417", name: "Goliath", zone: "Hunts",
    level: { min: 48, max: 48 }, hp: { min: 224294, max: 224294 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Holy\n\nHalf to all elements except Dark"], weaknesses: ["Dark"], absorbs: [] },
    status: { immune: [], weak: ["Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Holy Magicite", rate: "55%" },
      { item: "Iron Ore", rate: "10%" },
      { item: "Holy Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Smite of Rage", "Magick Barrier", "Focus", "Gravity", "Aeroga", "Aquaga"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Shell status\n\nWill spawn under the Protect status\n\nCan inflict Disable on its physical attacks\n\nCan spawn as Level 47 - no major stat changes",
  },
  {
    id: "e-418", name: "Marilith", zone: "Hunts",
    level: { min: 38, max: 38 }, hp: { min: 54921, max: 54921 }, mp: { min: 540, max: 540 },
    elemental: { strengths: ["Fire\n\nImmune to all elements except Water"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Blind", "Silence", "Disease", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Prime Tanned Hide", rate: "10%" },
      { item: "Fire Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Tail Spear"],
    notes: "Will spawn under the Bravery status\n\nWill spawn under the Shell status\n\nWill spawn under the Protect status\n\nCan inflict Sap and Slow on its physical attacks\n\nDeals Fire damage on its elemental attacks",
  },
  {
    id: "e-419", name: "Enkelados", zone: "Hunts",
    level: { min: 22, max: 22 }, hp: { min: 18709, max: 18709 }, mp: { min: 210, max: 210 },
    elemental: { strengths: ["Earth\n\nHalf to all elements except Dark"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Earth Magicite", rate: "10%" },
      { item: "Slaven Harness", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Spin Kick", "Purify", "Restore", "Protect", "Shell"],
    notes: "Can spawn under the Shell status\n\nWill spawn under the Protect status",
  },
  {
    id: "e-420", name: "Deathgaze", zone: "Hunts",
    level: { min: 50, max: 50 }, hp: { min: 184000, max: 184000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Silence", "Sap"] },
    drops: [
      
    ],
    steals: [
      { item: "Phoenix Down", rate: "55%" },
      { item: "Charger Barding", rate: "10%" },
      { item: "Emperor Scale", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Crushing Fangs", "Renew", "Restore", "Fireball", "Bio", "Firaga", "Blizzaga", "Thundaga", "Reverse", "Scourge", "Curse", "Magick Wall"],
    notes: "Will spawn under the Bravery status\n\nWill spawn under the Shell status\n\nWill spawn under the Protect status\n\nWill spawn under the Haste status\n\nWill spawn under the Regen status\n\nCan inflict Disease on its physical attacks",
  },
  {
    id: "e-421", name: "Croakadile", zone: "Hunts",
    level: { min: 24, max: 24 }, hp: { min: 19449, max: 19449 }, mp: { min: 780, max: 780 },
    elemental: { strengths: ["Water\n\nHalf to all elements except Dark"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Blind", "Silence", "Disease", "Immobilize", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Horn", rate: "55%" },
      { item: "Pointed Horn", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Angelsong", "Growing Threat", "Aqua Bubbles", "Renew"],
    notes: "Will spawn under the Shell status\n\nWill spawn under the Protect status\n\nLeaps out of the water\n\nCan inflict Sleep on its physical attacks",
  },
  {
    id: "e-422", name: "Ixtab", zone: "Hunts",
    level: { min: 24, max: 24 }, hp: { min: 22562, max: 22562 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Reverse", "Blind", "Silence", "Immobilize", "Sap", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Book of Orgain-Mille", rate: "10%" },
      { item: "Flame Shield", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Annul", "Doom", "Aquara", "Aerora", "Dark"],
    notes: "Can inflict Stop on its physical attacks",
  },
  {
    id: "e-423", name: "Piscodaemon", zone: "Hunts",
    level: { min: 46, max: 46 }, hp: { min: 49660, max: 49660 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Half to all elements"], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize", "Slow"] },
    drops: [
      
    ],
    steals: [
      { item: "Potion", rate: "55%" },
      { item: "Reflectga Mote", rate: "10%" },
      { item: "White Robes", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Pulsar Wave", "Hero\'s March", "Dark Shock", "Soul Etude", "Mystery Waltz", "Bio", "Darkra", "Death", "Fog", "Invert", "Pox", "Breakart Pentagram"],
    notes: "Can spawn under the Faith status\n\nCan spawn under the Shell status\n\nWill spawn under the Haste status",
  },

  // Lhusu Mines
  {
    id: "e-424", name: "Vampyr", zone: "Lhusu Mines",
    level: { min: 41, max: 44 }, hp: { min: 5675, max: 5915 }, mp: { min: 500, max: 528 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Blind", "Poison", "Silence", "Oil", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Spiral Incisor", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Antidote", rate: "5%" },
      { item: "Zwill Crossblade", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Spiral Incisor", rate: "10%" },
      { item: "Taurus Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Leech", "Eerie Soundwave", "Self-Sacrifice"],
    notes: "Can self destruct - no EXP or LP rewarded if killed this way",
  },
  {
    id: "e-425", name: "Headless", zone: "Lhusu Mines",
    level: { min: 39, max: 41 }, hp: { min: 8867, max: 9707 }, mp: { min: 500, max: 510 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Silence", "Oil", "Immobilize", "Slow"] },
    drops: [
      { item: "Earth Crystal", rate: "40%" },
      { item: "Festering Flesh", rate: "25%" },
      { item: "Forbidden Flesh", rate: "5%" },
      { item: "Phoenix Down", rate: "1%" }
    ],
    steals: [
      { item: "Foul Flesh", rate: "55%" },
      { item: "Earth Crystal", rate: "10%" },
      { item: "500 Gil", rate: "3%" }
    ],
    poach: [
      { item: "Festering Flesh", rate: "95%" },
      { item: "Forbidden Flesh", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Fira", "Thundara", "Blizzara", "Protect", "Shockwave", "Tremor"],
    notes: "Deals more damage below 50% HP",
  },
  {
    id: "e-426", name: "Killer Mantis", zone: "Lhusu Mines",
    level: { min: 43, max: 44 }, hp: { min: 11703, max: 11943 }, mp: { min: 500, max: 507 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Poison", "Silence", "Oil", "Slow", "Berserk"] },
    drops: [
      { item: "Insect Husk", rate: "40%" },
      { item: "Earth Crystal", rate: "25%" },
      { item: "Echo Herbs", rate: "5%" },
      { item: "Cancer Gem", rate: "1%" }
    ],
    steals: [
      { item: "Earth Crystal", rate: "55%" },
      { item: "X-Potion", rate: "10%" },
      { item: "Gigas Hat", rate: "3%" }
    ],
    poach: [
      { item: "Insect Husk", rate: "95%" },
      { item: "Charger Barding", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Shockwave", "Cannibalize"],
    notes: "Increase Defence when low on HP\n\nCan potentially reach max level if it uses Cannibalize too much",
  },
  {
    id: "e-427", name: "Dullahan", zone: "Lhusu Mines",
    level: { min: 39, max: 41 }, hp: { min: 9100, max: 9940 }, mp: { min: 500, max: 510 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Silence", "Oil", "Immobilize", "Slow"] },
    drops: [
      { item: "Forbidden Flesh", rate: "40%" },
      { item: "Fire Magicite", rate: "25%" },
      { item: "Fire Crystal", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" }
    ],
    steals: [
      { item: "Fire Magicite", rate: "55%" },
      { item: "Fire Crystal", rate: "10%" },
      { item: "540 Gil", rate: "3%" }
    ],
    poach: [
      { item: "Festering Flesh", rate: "95%" },
      { item: "Forbidden Flesh", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Fira", "Thundara", "Blizzara", "Shell", "Tri-Attack", "Pyromania"],
    notes: "Increase Defence when low on HP",
  },
  {
    id: "e-428", name: "Dark Lord", zone: "Lhusu Mines",
    level: { min: 58, max: 59 }, hp: { min: 16375, max: 16555 }, mp: { min: 999, max: 770 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Sleep", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Blood-darkened Bone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" }
    ],
    steals: [
      { item: "200 Gil", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Dragon Mail", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Pyromania", "Sandstorm", "Ice Break", "Stop", "Toxify", "Darkra"],
    notes: "Animates from the ground when approached\n\nUses Soleil, Rime and Lightning Fang to deal Fire, Water and Lightning damage",
  },
  {
    id: "e-429", name: "Pandora", zone: "Lhusu Mines",
    level: { min: 60, max: 62 }, hp: { min: 15557, max: 16037 }, mp: { min: 980, max: 994 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Reverse", "Oil", "Slow"] },
    drops: [
      { item: "Storm Crystal", rate: "40%" },
      { item: "Hi-Potion", rate: "25%" },
      { item: "Iron Ore", rate: "5%" },
      { item: "Cancer Gem", rate: "1%" }
    ],
    steals: [
      { item: "Iron Ore", rate: "55%" },
      { item: "Storm Stone (55%) (Necrohol)", rate: "?" },
      { item: "Cancer Gem", rate: "10%" }
    ],
    poach: [
      { item: "Iron Ore", rate: "95%" },
      { item: "Wrath of the Gods", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Leech"],
    notes: "Disguised as a Treasure Chest - easy to identify",
  },

  // Mosphoran Highwaste
  {
    id: "e-430", name: "Worgen", zone: "Mosphoran Highwaste",
    level: { min: 25, max: 26 }, hp: { min: 2011, max: 2121 }, mp: { min: 180, max: 195 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Fire Magicite", rate: "40%" },
      { item: "Nu Khai Sand", rate: "25%" },
      { item: "Quality Pelt", rate: "5%" },
      { item: "Libra Gem", rate: "1%" }
    ],
    steals: [
      { item: "Fire Magicite", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Steel Poleyns", rate: "3%" }
    ],
    poach: [
      { item: "Quality Pelt", rate: "95%" },
      { item: "Throat Wolf Blood", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Screech", "Eerie Soundwave"],
    notes: "Worgens in the Mosphoran Highwaste can appear under the Berserk Status\n\nOccasionally encountered with an Alpha Worgen",
  },
  {
    id: "e-431", name: "Python", zone: "Mosphoran Highwaste",
    level: { min: 29, max: 32 }, hp: { min: 3016, max: 3346 }, mp: { min: 240, max: 285 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Wind Magicite", rate: "25%" },
      { item: "Gold Needle", rate: "5%" },
      { item: "Quality Hide", rate: "1%" }
    ],
    steals: [
      { item: "Wind Magicite", rate: "55%" },
      { item: "400 Gil", rate: "10%" },
      { item: "Bone Helm", rate: "3%" }
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Great Serpent\'s Fang", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Spiral Cut"],
    notes: "Appears off-screen when approached by the player\n\nPhysical attacks can inflict Poison on hit",
  },
  {
    id: "e-432", name: "Ash Wyrm", zone: "Mosphoran Highwaste",
    level: { min: 44, max: 47 }, hp: { min: 31919, max: 33959 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Ring Wyrm Scale", rate: "40%" },
      { item: "Wind Crystal", rate: "25%" },
      { item: "Koga Blade", rate: "5%" },
      { item: "Leo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Wind Crystal", rate: "55%" },
      { item: "800 Gil", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Rake", "Stone Breath", "Restore", "Firaga", "Blizzaga", "Thundaga", "Aquaga", "Aeroga", "Darkra"],
    notes: "Can spawn under the Protect Status\n\nMosphoran Highwaste version can only be killed after defeating Exodus - need to leave the Highwaste to respawn it",
  },
  {
    id: "e-433", name: "Vulture", zone: "Mosphoran Highwaste",
    level: { min: 30, max: 32 }, hp: { min: 4022, max: 4158 }, mp: { min: 480, max: 498 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Giant Feather", rate: "40%" },
      { item: "Wind Magicite", rate: "25%" },
      { item: "Black Cowl", rate: "5%" },
      { item: "Bundle of Feathers", rate: "1%" }
    ],
    steals: [
      { item: "Wind Magicite", rate: "55%" },
      { item: "Soleil Fang", rate: "10%" },
      { item: "Bundle of Feathers", rate: "3%" }
    ],
    poach: [
      { item: "Giant Feather", rate: "95%" },
      { item: "Eye of the Hawk", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Kamikaze"],
    notes: "Enemy is Flying - can only be hit with Magick, Ranged Weapons and Spears/Poles\n\nNo EXP, LP or Items dropped if enemy uses Kamikaze",
  },
  {
    id: "e-434", name: "Fire Elemental", zone: "Mosphoran Highwaste",
    level: { min: 25, max: 45 }, hp: { min: 14830, max: 4079 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire\n\nImmune to all elements other the Lightning"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize\n\nBlind", "Oil", "Sap", "Slow (Chaosjet)"] },
    drops: [
      { item: "Fire Magicite", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Fire Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Fire Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Fire Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Fira", "Protect", "Shell", "Silence", "Sleep"],
    notes: "Docile unless magick is used near it or is attacked\n\nFire Chaosjet is a unique version in Nabudis - weaker with different weaknesses",
  },

  // Necrohol of Nabudis
  {
    id: "e-435", name: "Gazer", zone: "Necrohol of Nabudis",
    level: { min: 44, max: 45 }, hp: { min: 9931, max: 10111 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Poison", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Serum", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Dark Crystal", rate: "10%" },
      { item: "Book of Oragain-Mille", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Fira", "Blizzara", "Thundara", "Darkra", "Doom", "Annul", "Dimensional Rift"],
    notes: "Can appear under the Vanish effect\n\nNo EXP or LP awarded if it used Dimensional Rift\n\nCan appear under the Invisible effect\n\nGazer spawns after waiting 7 minutes in the zone\n\nOnly spawns once per visit",
  },

  // Ozmone Plains
  {
    id: "e-436", name: "Mesmenir", zone: "Ozmone Plains",
    level: { min: 20, max: 22 }, hp: { min: 1528, max: 1568 }, mp: { min: 210, max: 220 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Slow", "Berserk"] },
    drops: [
      { item: "Iron Carapace", rate: "40%" },
      { item: "Storm Magicite", rate: "25%" },
      { item: "Bronze Mace", rate: "5%" },
      { item: "Echo Herbs", rate: "1%" }
    ],
    steals: [
      { item: "Iron Carapace", rate: "55%" },
      { item: "Storm Magicite", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Iron Carapace", rate: "95%" },
      { item: "Destrier Mane", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Spike Cutter"],
    notes: "Only one spawns in Haulo Green on first visit",
  },
  {
    id: "e-437", name: "Red Chocobo", zone: "Ozmone Plains",
    level: { min: 19, max: 23 }, hp: { min: 1116, max: 1180 }, mp: { min: 385, max: 401 },
    elemental: { strengths: [], weaknesses: ["Lightning\n\nWater\n\nHoly"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Fire Magicite", rate: "40%" },
      { item: "Chocobo Feather", rate: "25%" },
      { item: "Gysahl Greens", rate: "5%" },
      { item: "Taurus Gem", rate: "1%" }
    ],
    steals: [
      { item: "Fire Magicite", rate: "55%" },
      { item: "Taurus Gem", rate: "10%" },
      { item: "Feathered Cap", rate: "3%" }
    ],
    poach: [
      { item: "Chocobo Feather", rate: "95%" },
      { item: "Gysahl Greens", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Spin Kick"],
    notes: "HP is 279 higher in Field of Light Winds\n\nCan appear under the Sleep status",
  },
  {
    id: "e-438", name: "Black Chocobo", zone: "Ozmone Plains",
    level: { min: 19, max: 23 }, hp: { min: 1116, max: 1180 }, mp: { min: 385, max: 401 },
    elemental: { strengths: [], weaknesses: ["Lightning\n\nWater\n\nHoly"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Dark Magicite", rate: "40%" },
      { item: "Chocobo Feather", rate: "25%" },
      { item: "Gysahl Greens", rate: "5%" },
      { item: "Chocobo Feather", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Chocobo Feather", rate: "10%" },
      { item: "Chocobo Feather", rate: "3%" }
    ],
    poach: [
      { item: "Chocobo Feather", rate: "95%" },
      { item: "Gysahl Greens", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Spin Kick"],
    notes: "HP is 279 higher in Field of Light Winds\n\nCan appear under the Sleep status",
  },
  {
    id: "e-439", name: "White Chocobo", zone: "Ozmone Plains",
    level: { min: 36, max: 37 }, hp: { min: 3718, max: 3786 }, mp: { min: 770, max: 779 },
    elemental: { strengths: [], weaknesses: ["Lightning\n\nWater\n\nHoly"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Chocobo Feather", rate: "40%" },
      { item: "Ice Magicite", rate: "25%" },
      { item: "Gysahl Greens", rate: "5%" },
      { item: "Echo Herbs", rate: "1%" }
    ],
    steals: [
      { item: "Chocobo Feather", rate: "55%" },
      { item: "Taurus Gem", rate: "10%" },
      { item: "Adamant Vest", rate: "3%" }
    ],
    poach: [
      { item: "Chocobo Feather", rate: "95%" },
      { item: "Gysahl Greens", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Wild Charge", "Choco-Comet"],
    notes: "Can appear under the Sleep status\n\nCan appear under the Haste Status",
  },

  // Paramina Rift
  {
    id: "e-440", name: "Twintania", zone: "Paramina Rift",
    level: { min: 27, max: 28 }, hp: { min: 4917, max: 5257 }, mp: { min: 500, max: 590 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Ice Magicite", rate: "40%" },
      { item: "Antidote", rate: "25%" },
      { item: "Wyrm Carapace", rate: "5%" },
      { item: "Nu Khai Sand", rate: "1%" }
    ],
    steals: [
      { item: "Ice Stone", rate: "55%" },
      { item: "Soleil Fang", rate: "10%" },
      { item: "Platinum Sword", rate: "3%" }
    ],
    poach: [
      { item: "Wyrm Carapace", rate: "95%" },
      { item: "Ice Magicite", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Bile", "Shell"],
    notes: "Only two appear in the game",
  },
  {
    id: "e-441", name: "Lizard", zone: "Paramina Rift",
    level: { min: 39, max: 40 }, hp: { min: 7069, max: 7179 }, mp: { min: 999, max: 650 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Pointed Horn", rate: "40%" },
      { item: "Horn", rate: "40%" },
      { item: "Fire Magicite", rate: "25%" },
      { item: "Pointed Horn", rate: "5%" }
    ],
    steals: [
      { item: "Fire Magicite", rate: "55%" },
      { item: "Pointed Horn", rate: "10%" },
      { item: "Float Mote", rate: "10%" }
    ],
    poach: [
      { item: "Pointed Horn", rate: "95%" },
      { item: "Taurus Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Angelsong", "Magick Ballad"],
    notes: "Can sometimes be found asleep\n\nUsually jumps from outside the map",
  },
  {
    id: "e-442", name: "Emperor Aevis", zone: "Paramina Rift",
    level: { min: 27, max: 28 }, hp: { min: 5900, max: 6240 }, mp: { min: 550, max: 640 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Wyrm Carapace", rate: "40%" },
      { item: "Ice Magicite", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Hornito", rate: "1%" }
    ],
    steals: [
      { item: "Ice Stone", rate: "55%" },
      { item: "Wyrm Carapace", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Wyrm Carapace", rate: "95%" },
      { item: "Battlewyrm Carapace", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Bile"],
    notes: "Only one spawns in the entire game",
  },
  {
    id: "e-443", name: "Skull Knight", zone: "Paramina Rift",
    level: { min: 25, max: 26 }, hp: { min: 1873, max: 1933 }, mp: { min: 550, max: 580 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Sturdy Bone", rate: "40%" },
      { item: "Dark Magicite", rate: "25%" },
      { item: "Hi-Potion", rate: "5%" },
      { item: "Remedy", rate: "1%" }
    ],
    steals: [
      { item: "Sturdy Bone", rate: "55%" },
      { item: "Capricorn Gem", rate: "10%" },
      { item: "Jujitsu Gi", rate: "3%" }
    ],
    poach: [
      { item: "Sturdy Bone", rate: "95%" },
      { item: "Sturdy Bone", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Bone Toss", "Flash", "Tremor", "Slow", "Dark"],
    notes: "Unlike most Undead, they can be found already animated",
  },
  {
    id: "e-444", name: "Ice Elemental", zone: "Paramina Rift",
    level: { min: 25, max: 25 }, hp: { min: 14830, max: 2708 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice\n\nImmune to all elements other the Lightning"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize\n\nSleep", "Blind", "Oil", "Immobilize", "Sap (Azer)"] },
    drops: [
      { item: "Ice Magicite", rate: "40%" },
      { item: "Ice Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Ice Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Ice Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Ice Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Blizzara", "Protect", "Shell", "Silence", "Sleep", "Blizzard (Azer)", "Curaga (Azer)"],
    notes: "Docile unless magick is used near it or is attacked\n\nIce Azer is a unique version in Stilshrine - weaker with different weaknesses",
  },
  {
    id: "e-445", name: "Wild Onion", zone: "Paramina Rift",
    level: { min: 25, max: 27 }, hp: { min: 1496, max: 1736 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Succulent Fruit", rate: "40%" },
      { item: "Wind Magicite", rate: "25%" },
      { item: "Antidote", rate: "5%" },
      { item: "Dispel Mote", rate: "1%" }
    ],
    steals: [
      { item: "Wind Magicite", rate: "55%" },
      { item: "Phoenix Down", rate: "10%" },
      { item: "Succulent Fruit", rate: "3%" }
    ],
    poach: [
      { item: "Succulent Fruit", rate: "95%" },
      { item: "Healing Rod", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Vespersong", "Warsong", "Cura", "Protect", "Shell"],
    notes: "Docile unless provoked",
  },
  {
    id: "e-446", name: "Leshach Entite", zone: "Paramina Rift",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice\n\nImmune to all others"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Immobilize"] },
    drops: [
      { item: "Ice Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Leshach Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" }
    ],
    steals: [
      { item: "Ice Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Leshach Halcyon", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Dispel", "Blizzaga", "Reflect", "Protect", "Shell", "Silencega", "Sleepga", "Fear"],
    notes: "Only appears in snowstorm weather conditions\n\nDamage is dealt back to attacker when hit\n\nDocile unless provoked or magick is cast in its vicinity\n\nCasts magick faster when near death\n\nCan appear with Protect, Shell and Reflect active\n\nUnlike the other Entites, Blizzaga does more damage due to the weather effect",
  },

  // Phon Coast
  {
    id: "e-447", name: "Brown Chocobo", zone: "Phon Coast",
    level: { min: 31, max: 32 }, hp: { min: 3141, max: 3211 }, mp: { min: 715, max: 724 },
    elemental: { strengths: [], weaknesses: ["Lightning\n\nWater\n\nHoly"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison (Salikawood)", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Fire Stone", rate: "40%" },
      { item: "Chocobo Feather (40%) (Salikawood)", rate: "?" },
      { item: "Chocobo Feather", rate: "25%" },
      { item: "Earth Magicite (25%) (Salikawood)", rate: "?" }
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Chocobo Feather (55%) (Salikawood)", rate: "?" },
      { item: "Taurus Gem", rate: "10%" }
    ],
    poach: [
      { item: "Chocobo Feather", rate: "95%" },
      { item: "Gysahl Greens", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Spin Kick"],
    notes: "Can appear under the Sleep status",
  },
  {
    id: "e-448", name: "Green Chocobo", zone: "Phon Coast",
    level: { min: 32, max: 25 }, hp: { min: 3143, max: 3922 }, mp: { min: 770, max: 797 },
    elemental: { strengths: [], weaknesses: ["Lightning\n\nWater\n\nHoly"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Chocobo Feather", rate: "40%" },
      { item: "Wind Magicite", rate: "25%" },
      { item: "Gysahl Greens", rate: "5%" },
      { item: "Chocobo Feather", rate: "1%" }
    ],
    steals: [
      { item: "Wind Magicite", rate: "55%" },
      { item: "Nu Khai Sand", rate: "10%" },
      { item: "Taurus Gem", rate: "3%" }
    ],
    poach: [
      { item: "Chocobo Feather", rate: "95%" },
      { item: "Gysahl Greens", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Spin Kick"],
    notes: "Can appear under the Sleep status",
  },
  {
    id: "e-449", name: "LV 99 Red Chocobo", zone: "Phon Coast",
    level: { min: 99, max: 99 }, hp: { min: 239686, max: 239686 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Lightning\n\nWater\n\nHoly"], absorbs: [] },
    status: { immune: [], weak: ["Berserk"] },
    drops: [
      { item: "Ribbon", rate: "100%" }
    ],
    steals: [
      { item: "Elixir", rate: "55%" },
      { item: "Megalixir", rate: "10%" },
      { item: "Empyreal Soul", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Choco - Comet"],
    notes: "Has a 1/256 Chance of appearing instead of a Red Chocobo",
  },
  {
    id: "e-450", name: "Wu", zone: "Phon Coast",
    level: { min: 20, max: 22 }, hp: { min: 1689, max: 1729 }, mp: { min: 280, max: 290 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Large Feather", rate: "40%" },
      { item: "Earth Magicite", rate: "25%" },
      { item: "Eye Drops", rate: "5%" },
      { item: "Kogarasumaru", rate: "1%" }
    ],
    steals: [
      { item: "40 Gil", rate: "55%" },
      { item: "Large Feather", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Large Feather", rate: "95%" },
      { item: "Mage\'s Hat", rate: "5%" }
    ],
    abilities: ["Attack", "Protect", "Shell", "Slap", "Wing Spear"],
    notes: "",
  },
  {
    id: "e-451", name: "Viper", zone: "Phon Coast",
    level: { min: 20, max: 21 }, hp: { min: 1410, max: 1430 }, mp: { min: 140, max: 145 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Dark Magicite", rate: "25%" },
      { item: "Quality Hide", rate: "5%" },
      { item: "Serpent Rod", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Prince\'s Kiss", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Tanned Hide", rate: "95%" },
      { item: "Hi-Potion", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Spiral Cut"],
    notes: "Has rather high evasion\n\nOften approaches the player instead of just appearing",
  },
  {
    id: "e-452", name: "Hybrid Gator", zone: "Phon Coast",
    level: { min: 21, max: 23 }, hp: { min: 2233, max: 2273 }, mp: { min: 175, max: 185 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Fire Magicite", rate: "40%" },
      { item: "Gold Needle", rate: "25%" },
      { item: "Braid Wool", rate: "5%" },
      { item: "Fine Wool", rate: "1%" }
    ],
    steals: [
      { item: "Bacchus\'s Wine", rate: "55%" },
      { item: "Aries Gem", rate: "10%" },
      { item: "War Hammer", rate: "3%" }
    ],
    poach: [
      { item: "Braid Wool", rate: "95%" },
      { item: "Fine Wool", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Fangs", "Sonic Fangs"],
    notes: "Area it spawns in is related to the game clock\n\n\n1-15min = Switchback\n\n16-30min = Dagan Flats\n\n31-45min = Field of Light Winds\n\n46-60min = Greensnake",
  },
  {
    id: "e-453", name: "Sylphi Entite", zone: "Phon Coast",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Wind\n\nImmune to all others"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Wind Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Sylphi Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" }
    ],
    steals: [
      { item: "Wind Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Sylphi Halcyon", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Dispel", "Aeroga", "Reflect", "Protect", "Shell", "Silencega", "Sleepga", "Fear"],
    notes: "Only appears in cloudy weather conditions\n\nDamage is dealt back to attacker when hit\n\nDocile unless provoked or magick is cast in its vicinity\n\nCasts magick faster when near death\n\nCan appear with Protect, Shell and Reflect active",
  },

  // Rare Games
  {
    id: "e-454", name: "Aspidochelon", zone: "Rare Games",
    level: { min: 42, max: 43 }, hp: { min: 63226, max: 63546 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Adamantine Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Hi-Potion", rate: "10%" },
      { item: "Scarletite", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Flatten", "Restore", "Stone Gaze", "Purify", "Meditate", "Firaga", "Blizzaga", "Thundaga", "Aquaga", "Aeroga", "Protect", "Shell"],
    notes: "Spawn Effect: 40% spawn chance, zone two zones away and return to spawn\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-455", name: "Aerieel", zone: "Rare Games",
    level: { min: 12, max: 13 }, hp: { min: 3017, max: 3033 }, mp: { min: 163, max: 167 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Bat Fang", rate: "40%" },
      { item: "Golden Armour", rate: "5%" }
    ],
    steals: [
      { item: "Bat Wing", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Taurus Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Leech"],
    notes: "Spawn Effect: 20% spawn chance. zone two zones away and come back\n\nCan spawn under the Bravery status\n\nCan spawn under the Haste status\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-456", name: "Thalassinon", zone: "Rare Games",
    level: { min: 38, max: 39 }, hp: { min: 59868, max: 60188 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Shelled Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Adamantite", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Sonic Turn", "Restore", "Stone Gaze", "Purify", "Meditate", "Fira", "Blizzara", "Thundara", "Aerora", "Aquara", "Reflect"],
    notes: "Location Effect: Spawns after waiting in a set location\n\nWill spawn under the Protect status",
  },
  {
    id: "e-457", name: "Anubys", zone: "Rare Games",
    level: { min: 38, max: 39 }, hp: { min: 19194, max: 19314 }, mp: { min: 585, max: 599 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Silence", "Oil", "Disease"] },
    drops: [
      { item: "Ensanguined Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Vampyr Fang", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Eerie Soundwave", "Gnaw", "Leech"],
    notes: "Puzzle Effect: Complete the puzzle in Sochen Cave Palace to access the location - will always spawn\n\nWill spawn under the Bravery status\n\nWill spawn under the Protect status\n\nWill spawn under the Haste status",
  },
  {
    id: "e-458", name: "Greeden", zone: "Rare Games",
    level: { min: 31, max: 32 }, hp: { min: 7171, max: 7281 }, mp: { min: 163, max: 178 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Braid Wool", rate: "40%" },
      { item: "Blood Wool", rate: "5%" }
    ],
    steals: [
      { item: "Wind Crystal", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Blood Wool", rate: "5%" }
    ],
    abilities: ["Attack", "Fangs", "Ram", "Flash", "Shell"],
    notes: "Wait Effect: Only spawns after three minutes. No Cactoid\'s must be killed in that time\n\nWill spawn under the Haste status\n\nCan spawn under the Protect status\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-459", name: "Barmuu", zone: "Rare Games",
    level: { min: 19, max: 20 }, hp: { min: 9158, max: 9178 }, mp: { min: 319, max: 339 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Slow"] },
    drops: [
      { item: "Solid Stone", rate: "40%" },
      { item: "Betelgeuse", rate: "5%" }
    ],
    steals: [
      { item: "Lamia\'s Tiara", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Quality Stone", rate: "5%" }
    ],
    abilities: ["Attack", "Flash", "Lunge", "Aerora", "Aqua", "Dark"],
    notes: "Chain Effect: Spawns after reaching a certain chain\n\nCan spawn under the Shell status\n\nCan spawn under the Regen status\n\nCan inflict Petrify on its physical attacks\n\nEnemy cannot move",
  },
  {
    id: "e-460", name: "Bull Croc", zone: "Rare Games",
    level: { min: 23, max: 24 }, hp: { min: 13968, max: 14078 }, mp: { min: 260, max: 275 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Braid Wool", rate: "40%" },
      { item: "Demon Mail", rate: "5%" }
    ],
    steals: [
      { item: "Blood Wool", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Broken Sword", rate: "5%" }
    ],
    abilities: ["Attack", "Screwtail", "Ram", "Sonic Fangs", "Flash", "Reflect"],
    notes: "Spawn Effect: 20% Spawn Chance\n\nWill spawn under the Haste status\n\nWill spawn under the Bravery status\n\nCan inflict Poison on is physical attacks",
  },
  {
    id: "e-461", name: "Vishno", zone: "Rare Games",
    level: { min: 57, max: 58 }, hp: { min: 79249, max: 79489 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Slow"] },
    drops: [
      { item: "Solid Stone", rate: "40%" },
      { item: "Ribbon", rate: "5%" }
    ],
    steals: [
      { item: "Orichalcum", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Flash", "Lunge", "Stone Gaze", "Firaga", "Blizzaga", "Thundaga", "Aeroga", "Aquaga", "Darkra"],
    notes: "Kill Effect: Only spawns after killing several Deidars\n\nWill spawn under the Regen status\n\nCan spawn under the Protect status\n\nCan spawn under the Shell status",
  },
  {
    id: "e-462", name: "Gavial", zone: "Rare Games",
    level: { min: 46, max: 47 }, hp: { min: 80551, max: 80871 }, mp: { min: 748, max: 778 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Silence", "Oil", "Slow"] },
    drops: [
      { item: "Fur-scaled Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Antarctic Wind", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Screwtail", "Ram", "Flatten", "Crushing Fangs"],
    notes: "Location Effect: Spawns after waiting for a set period of time\n\nWill spawn under the Bravery status\n\nWill spawn under the Reflect status\n\nCan inflict Disease on its physical attacks",
  },
  {
    id: "e-463", name: "Etherian", zone: "Rare Games",
    level: { min: 42, max: 43 }, hp: { min: 32826, max: 33056 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Blind", "Oil"] },
    drops: [
      { item: "Green Liquid", rate: "40%" },
      { item: "Silver Liquid", rate: "25%" },
      { item: "Eight Fluted Pole", rate: "5%" }
    ],
    steals: [
      { item: "Ame-no-Murakumo", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Unpurified Ether", rate: "5%" }
    ],
    abilities: ["Attack", "Flash", "Slap", "Mythril Bubbles", "Phantasmal Gaze", "Aquaga", "Toxify"],
    notes: "Kill Effect: Only spawns after killing all enemies\n\nCan spawn under the Bravery status\n\nCan spawn under the Protect status\n\nCan spawn under the Shell status\n\nCan inflict Sleep on its physical attacks\n\nWill drop from the sky",
  },
  {
    id: "e-464", name: "Melt", zone: "Rare Games",
    level: { min: 48, max: 49 }, hp: { min: 61481, max: 61711 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Oil"] },
    drops: [
      { item: "Slime Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Hastega Mote", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Slap", "Mythril Bubbles", "Phantasmal Gaze", "Thundaga", "Silence", "Bleed"],
    notes: "Spawn Effect: Can spawn after the gate switch is pressed in the area\n\nWill spawn under the Faith status\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status\n\nCan inflict Sleep on its physical attacks",
  },
  {
    id: "e-465", name: "Cubus", zone: "Rare Games",
    level: { min: 37, max: 38 }, hp: { min: 32386, max: 32616 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Poison", "Oil", "Slow"] },
    drops: [
      { item: "Green Liquid", rate: "40%" },
      { item: "Holy Mote", rate: "5%" }
    ],
    steals: [
      { item: "Silver Liquid", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Mythril Bubbles", "Phantasmal Gaze", "Flash", "Fira", "Silence", "Oil"],
    notes: "Kill/Enemy Effect: Can spawn after the killing all enemies in the area - only spawns if Pit Fiends and Wendigos are in the zone (25% spawn chance) - zone two zones away to respawn\n\nCan spawn under the Protect status\n\nCan spawn under the Haste status\n\nCan inflict Oil on its physical attacks\n\nDrops from the ceiling",
  },
  {
    id: "e-466", name: "Pineapple", zone: "Rare Games",
    level: { min: 16, max: 18 }, hp: { min: 4668, max: 4698 }, mp: { min: 780, max: 840 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bomb Ashes", rate: "40%" },
      { item: "Storm Staff", rate: "5%" }
    ],
    steals: [
      { item: "Bomb Shell", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Bomb Fragment", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Reflect"],
    notes: "Spawn Effect: Can spawn in 6 different spots - zone out to respawn\n\nCan spawn under the Shell status\n\nCan inflict Oil on its physical attacks",
  },
  {
    id: "e-467", name: "Dreadguard", zone: "Rare Games",
    level: { min: 46, max: 47 }, hp: { min: 35074, max: 35394 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Silence", "Oil", "Slow"] },
    drops: [
      { item: "Feathered Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Mirror Scale", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Slap", "Gale", "Screech", "Aerora", "Aeroga", "Reflect"],
    notes: "Replacement Effect: Replaces a Mirrorknight in the zone - kill all Mirrorknights then zone two zones to respawn\n\nWill spawn under the Bravery status\n\nCan spawn under the Haste status",
  },
  {
    id: "e-468", name: "Bombshell", zone: "Rare Games",
    level: { min: 60, max: 61 }, hp: { min: 76042, max: 76202 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Sap", "Slow"] },
    drops: [
      { item: "Bomb Ashes", rate: "40%" },
      { item: "Yagyu Darkblade", rate: "5%" }
    ],
    steals: [
      { item: "Mallet", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Greater Barrier"],
    notes: "Spawn Effect: 20% Spawn Chance - leave and re-enter to respawn\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status\n\nCan spawn under the Faith status\n\nCan inflict Oil on is physical attacks",
  },
  {
    id: "e-469", name: "Crypt Bunny", zone: "Rare Games",
    level: { min: 45, max: 46 }, hp: { min: 21348, max: 21668 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Drab Wool", rate: "40%" },
      { item: "Muramasa", rate: "5%" }
    ],
    steals: [
      { item: "Holy Mote", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Bunny Slam", "Lunge", "Hero\'s March", "Time Requiem", "Mach Punch", "Aeroga", "Aquaga", "Firaga", "Thundaga", "Blizzaga", "Darkra"],
    notes: "Spawn Effect: 20% Spawn Chance - defeat 6+ of both Cerberus and Tartarus or until they spawn - 6 spots where enemy can spawn\n\nEnemy is docile - will not attack unless provoked\n\nWill spawn under the Shell status\n\nCan spawn under the Protect status\n\nCan inflict Petrify on is physical attacks",
  },
  {
    id: "e-470", name: "Megabomb", zone: "Rare Games",
    level: { min: 18, max: 19 }, hp: { min: 4668, max: 4683 }, mp: { min: 780, max: 810 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bomb Ashes", rate: "40%" },
      { item: "Bomb Shell", rate: "5%" }
    ],
    steals: [
      { item: "Bomb Fragment", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Scorpio Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Fire", "Protect"],
    notes: "Chain Effect: Spawns after getting a chain of 21 or more\n\nCan spawn under the Protect status\n\nCan inflict Oil on is physical attacks",
  },
  {
    id: "e-471", name: "Spee", zone: "Rare Games",
    level: { min: 36, max: 37 }, hp: { min: 14725, max: 14835 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Drab Wool", rate: "40%" },
      { item: "Blood Wool", rate: "5%" }
    ],
    steals: [
      { item: "Stardust", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Claymore", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Mach Punch", "Hero\'s March", "Fira", "Berserk", "Confuse"],
    notes: "Kill Effect: 15% Spawn Chance - need to kill at least 1 Wyrdhare - has 3 zones to spawn but player must get close - zone two zones to reset\n\nWill spawn under the Shell status\n\nCan spawn under the Faith status\n\nCan inflict Confuse on is physical attacks",
  },
  {
    id: "e-472", name: "Matriarch Bomb", zone: "Rare Games",
    level: { min: 31, max: 32 }, hp: { min: 12156, max: 12214 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Reverse", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bomb Ashes", rate: "40%" },
      { item: "Bomb Shell", rate: "5%" }
    ],
    steals: [
      { item: "Scorpio Gem", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Bomb Fragment", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Greater Barrier", "Fira"],
    notes: "Spawn Effect: 20% Spawn Chance - zone out to reset\n\nCan spawn under the Bravery status\n\nCan spawn under the Protect status\n\nCan spawn under the Shell status\n\nCan inflict Oil on is physical attacks",
  },
  {
    id: "e-473", name: "Rain Dancer", zone: "Rare Games",
    level: { min: 23, max: 24 }, hp: { min: 8084, max: 8166 }, mp: { min: 728, max: 738 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Fish Scale", rate: "40%" },
      { item: "Ichthon Scale", rate: "5%" }
    ],
    steals: [
      { item: "Miter", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Dorsal Fin", rate: "5%" }
    ],
    abilities: ["Attack", "Sonic Turn", "Lunge", "Water Cannon"],
    notes: "Spawn Effect: 20% Spawn Chance - can appear anywhere near the water\n\nCan spawn under the Haste status",
  },
  {
    id: "e-474", name: "Ripe Rampager", zone: "Rare Games",
    level: { min: 4, max: 5 }, hp: { min: 357, max: 369 }, mp: { min: 455, max: 458 },
    elemental: { strengths: ["Water"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Pebble", rate: "40%" },
      { item: "Calot Hat", rate: "5%" }
    ],
    steals: [
      { item: "Screamroot", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Four-leaf Clover", rate: "5%" }
    ],
    abilities: ["Attack", "Cure", "Ram", "Blindna", "Protect", "Vespersong", "Warsong", "Mystery Waltz"],
    notes: "Kill Effect: Only spawns after killing an enemy. If not present, kill all enemy type then go two zones away and come back\n\nCan inflict Blind on hit\n\nAppears from the ground\n\nCan boost its level by 20%",
  },
  {
    id: "e-475", name: "Razorfin", zone: "Rare Games",
    level: { min: 4, max: 5 }, hp: { min: 156, max: 167 }, mp: { min: 154, max: 158 },
    elemental: { strengths: ["Water"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Fish Scale", rate: "40%" },
      { item: "Iron Sword", rate: "5%" }
    ],
    steals: [
      { item: "Water Crystal", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Ichthon Scale", rate: "5%" }
    ],
    abilities: ["Attack"],
    notes: "Replacement Effect: If not present, kill all Ichthons then go two zones away and come back\n\nCan inflict Poison on its physical attacks\n\nCan cause nearby Ichthons to attack if provoked",
  },
  {
    id: "e-476", name: "Killbug", zone: "Rare Games",
    level: { min: 44, max: 45 }, hp: { min: 28976, max: 29216 }, mp: { min: 910, max: 917 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Metallic Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Knot of Rust", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Leech"],
    notes: "Clock Effect: Only spawns between certain minutes on the in-game clock. Return when the timer is between the respected times.\n\nWill spawn under the Protect status\n\nCan spawn under the Haste status",
  },
  {
    id: "e-477", name: "Apsara", zone: "Rare Games",
    level: { min: 37, max: 38 }, hp: { min: 23381, max: 23501 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Immobilize", "Slow"] },
    drops: [
      { item: "Fish Scale", rate: "40%" },
      { item: "Pisces Gem", rate: "5%" }
    ],
    steals: [
      { item: "Empyrean Rod", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Dorsal Fin", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Power Spin", "Water Ray"],
    notes: "Kill Effect: Only spawns after killing an amount of enemies. Then go to the area\n\nWill spawn under the Protect status\n\nCan spawn under the Haste status",
  },
  {
    id: "e-478", name: "Minibug", zone: "Rare Games",
    level: { min: 46, max: 47 }, hp: { min: 16052, max: 16292 }, mp: { min: 371, max: 378 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Zeus Mace", rate: "1%" }
    ],
    steals: [
      { item: "Wrath of the Gods", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack"],
    notes: "Spawn Effect: 20% spawn chance. If not present, go two zones away and come back\n\nWill spawn under the Protect status\n\nCan spawn under the Haste status\n\nCan inflict Sap on its physical attacks",
  },
  {
    id: "e-479", name: "Rageclaw", zone: "Rare Games",
    level: { min: 36, max: 37 }, hp: { min: 39586, max: 39696 }, mp: { min: 585, max: 590 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Sickle Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Sickle Blade", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Pulsar Wave", "Cannibalize"],
    notes: "Pacifist Effect: Do not kill anything for 1 minute to spawn. This also includes Cannibalize.\n\nWill spawn under the Protect status\n\nCan spawn under the Bravery status\n\nCan spawn under the Haste status\n\nCan inflict Disable on its physical attacks\n\nCan reach max level if it uses Cannibalize too often",
  },
  {
    id: "e-480", name: "Ithuno", zone: "Rare Games",
    level: { min: 41, max: 42 }, hp: { min: 23101, max: 23341 }, mp: { min: 865, max: 872 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Iron Scraps", rate: "40%" },
      { item: "Iron Ore", rate: "5%" }
    ],
    steals: [
      { item: "Deathbringer", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Leech"],
    notes: "Spawn Effect: 20% spawn chance. If not present, leave and re-enter\n\nWill spawn under the Haste status\n\nCan spawn under the Bravery status",
  },
  {
    id: "e-481", name: "Biding Mantis", zone: "Rare Games",
    level: { min: 47, max: 48 }, hp: { min: 68170, max: 68280 }, mp: { min: 715, max: 720 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Oil", "Slow"] },
    drops: [
      { item: "Scythe Trophy (100%", rate: "?" }
    ],
    steals: [
      { item: "Tattered Garments", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Cannibalize"],
    notes: "Clock Effect: Only spawns between the designated times on the game clock. Return when you are between the clock times.\n\nWill spawn under the Bravery status\n\nWill spawn under the Haste status\n\nCan reach max level if it uses Cannibalize too often",
  },
  {
    id: "e-482", name: "Kris", zone: "Rare Games",
    level: { min: 36, max: 38 }, hp: { min: 27515, max: 47755 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Odiferous Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Putrid Liquid", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Cloying Breath", "Hero\'s March", "Purify", "Bad Breath", "Putrid Breath"],
    notes: "Spawn Effect: 40% spawn chance. If not present, zone two zones away and return\n\nWill spawn under the Protect status\n\nWill spawn under the Haste status\n\nCan spawn under the Bravery status\n\nCan spawn under the Shell status\n\nCan inflict Confuse on its physical attacks",
  },
  {
    id: "e-483", name: "Wood Toad", zone: "Rare Games",
    level: { min: 35, max: 36 }, hp: { min: 51642, max: 51752 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Slow"] },
    drops: [
      { item: "Horn", rate: "40%" },
      { item: "Platinum Helm", rate: "5%" }
    ],
    steals: [
      { item: "Solid Horn", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Frogspawn", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Aqua Bubbles", "Angelsong"],
    notes: "Spawn Effect: 20% spawn chance. If not present, leave and re-enter\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status\n\nWill spawn Invisible\n\nEnemy is docile - will not attack unless provoked",
  },
  {
    id: "e-484", name: "Dheed", zone: "Rare Games",
    level: { min: 49, max: 50 }, hp: { min: 77420, max: 78100 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Oil"] },
    drops: [
      { item: "Leathern Trophy", rate: "?" }
    ],
    steals: [
      { item: "Mirage Vest", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Gale", "Crushing Fangs", "Poison Breath", "Aeroga", "Firaga"],
    notes: "Spawn Effect: 40% spawn chance. If not present, leave and re-enter\n\nWill spawn under the Protect status\n\nCan spawn under the Bravery status\n\nCan spawn under the Shell status\n\nCan inflict Petrify on its physical attacks\n\nEnemy is flying - can only be hit with Magick, ranged weapons or long weapons",
  },
  {
    id: "e-485", name: "Tarasque", zone: "Rare Games",
    level: { min: 37, max: 38 }, hp: { min: 27566, max: 27886 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Horn", rate: "40%" },
      { item: "Solid Horn", rate: "5%" }
    ],
    steals: [
      { item: "Hunting Crossbow", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Frog Oil", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Aqua Bubbles", "Blitz Tongue", "Angelsong", "Magick Ballad"],
    notes: "Chain Effect: Kill 22+ of the same enemy to spawn\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status",
  },
  {
    id: "e-486", name: "Aeros", zone: "Rare Games",
    level: { min: 23, max: 24 }, hp: { min: 12497, max: 12837 }, mp: { min: 832, max: 922 },
    elemental: { strengths: ["Ice"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Sleep", "Blind", "Silence", "Oil", "Immobilize", "Slow"] },
    drops: [
      { item: "Crooked Fang", rate: "40%" },
      { item: "Wyvern Fang", rate: "5%" }
    ],
    steals: [
      { item: "Wyvern Wing", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Ashura", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Sonic Fangs", "Breath", "Aerora"],
    notes: "Kill/Wait Effect: Kill Bull Croc first then wait for Aeros to spawn\n\nCan spawn under the Protect status\n\nCan spawn under the Shell status\n\nCan inflict Petrify on its physical attacks\n\nEnemy is flying - can only be hit by magick, ranged weapons or long weapons",
  },
  {
    id: "e-487", name: "Grimalkin", zone: "Rare Games",
    level: { min: 38, max: 39 }, hp: { min: 23101, max: 23421 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Whiskered Trophy (100%", rate: "?" }
    ],
    steals: [
      { item: "Coeurl Whisker", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Rake", "Stone Gaze", "Hawk Glare", "Blaster", "Hell Blaster", "Thundaga"],
    notes: "Replacement Effect: 10% to replace a Coeurl enemy. If not present, move two zones away and re-enter\n\nWill spawn under the Faith status\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status\n\nCan inflict Sap on its physical attacks",
  },
  {
    id: "e-488", name: "Nekhbet", zone: "Rare Games",
    level: { min: 5, max: 6 }, hp: { min: 3963, max: 3979 }, mp: { min: 488, max: 492 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Small Feather", rate: "40%" },
      { item: "Wizard\'s Hat", rate: "5%" }
    ],
    steals: [
      { item: "Rainbow Egg", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Small Feather", rate: "5%" }
    ],
    abilities: ["Attack", "Purify", "Poke", "Mucus"],
    notes: "Replacement Effect: If not present, kill all Cockatrices then go two zones away and come back\n\nInflicts Slow on hit\n\nCan remove status effects\n\nCan spawn under Bravery, Faith and Protect",
  },
  {
    id: "e-489", name: "Abelisk", zone: "Rare Games",
    level: { min: 49, max: 50 }, hp: { min: 104744, max: 105424 }, mp: { min: 468, max: 588 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: [] },
    drops: [
      { item: "Reptilian Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Eight Fluted Pole", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Screwtail", "Ram", "Crushing Fangs"],
    notes: "Spawn Effect: 30% spawn chance. If not present, leave and re-enter\n\nWill spawn under the Protect status\n\nCan spawn under the Regen status\n\nCan spawn under the Bravery status\n\nCan spawn under the Faith status",
  },
  {
    id: "e-490", name: "Glaring Eye", zone: "Rare Games",
    level: { min: 64, max: 65 }, hp: { min: 175195, max: 175375 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Scorpion Tail", rate: "5%" }
    ],
    steals: [
      { item: "Ambrosia", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Doom", "Sleep Touch", "Maser Eye"],
    notes: "Spawn Effect: If not present, kill all Hecteyes then go two zones away and come back\n\nWill spawn under the Shell status\n\nCan spawn under the Faith status",
  },
  {
    id: "e-491", name: "Cultsworn Lich", zone: "Rare Games",
    level: { min: 20, max: 21 }, hp: { min: 7578, max: 7584 }, mp: { min: 910, max: 930 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Sky Jewel", rate: "5%" }
    ],
    steals: [
      { item: "Loxley Bow", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Death Powder", rate: "5%" }
    ],
    abilities: ["Attack", "Fire", "Fira", "Dark", "Oil"],
    notes: "Replacement Effect: 20% chance to replace a Lich after a Lich uses the Divide ability\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-492", name: "Evil Spirit", zone: "Rare Games",
    level: { min: 61, max: 62 }, hp: { min: 121672, max: 121852 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Glass Jewel", rate: "40%" },
      { item: "Vrsabha", rate: "5%" }
    ],
    steals: [
      { item: "Lifewick", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Maser Eye", "Hawk Glare", "Firaga", "Thundaga", "Blizzaga", "Death"],
    notes: "Replacement Effect: Can spawn instead of a Forbidden.\n\nWill spawn under the Shell status\n\nCan spawn under the Faith status\n\nCan inflict Confuse on its physical attacks",
  },
  {
    id: "e-493", name: "Vorres", zone: "Rare Games",
    level: { min: 49, max: 50 }, hp: { min: 63758, max: 63938 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Slow"] },
    drops: [
      { item: "Gravesoil Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Soul Powder", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Doom", "Ram", "Annul", "Firaga", "Blizzaga", "Thundaga", "Blindga", "Silencega", "Darkra", "Death"],
    notes: "Movement Effect: Spawns after leading an enemy to a set spot\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status\n\nCan spawn under the Faith status\n\nCan spawn under the Haste status\n\nCan spawn under the Reflect status\n\nCan inflict Disable on its physical attacks",
  },
  {
    id: "e-494", name: "Negalmuur", zone: "Rare Games",
    level: { min: 31, max: 32 }, hp: { min: 18910, max: 18970 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Book of Orgain", rate: "40%" },
      { item: "Vanishga Mote", rate: "5%" }
    ],
    steals: [
      { item: "Capricorn Gem", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Book of Orgain Mille", rate: "5%" }
    ],
    abilities: ["Attack", "Doom", "Ram", "Annul", "Necromancy", "Fira", "Thundara", "Blizzaga", "Confuse"],
    notes: "Wait Effect: Wait a set time to spawn\n\nCan inflict Disable on its physical attacks",
  },
  {
    id: "e-495", name: "Molen", zone: "Rare Games",
    level: { min: 38, max: 39 }, hp: { min: 59976, max: 60216 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Slow"] },
    drops: [
      { item: "Iron Ore", rate: "40%" },
      { item: "Gigas Chestplate", rate: "5%" }
    ],
    steals: [
      { item: "Mythril", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Wild Charge", "Lunge", "Tri Attack", "Focus", "Smite of Rage", "Regen", "Fira", "Thundara", "Blizzara", "Aquaga", "Aeroga", "Haste"],
    notes: "Wait Effect: Wait for a set time in a set spot to spawn\n\nWill spawn under the Shell status\n\nWill spawn under the Protect status\n\nCan spawn under the Bravery status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-496", name: "Larva Eater", zone: "Rare Games",
    level: { min: 47, max: 62 }, hp: { min: 108486, max: 108646 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Sap", "Slow"] },
    drops: [
      { item: "Demon Eyeball", rate: "40%" },
      { item: "Mina", rate: "5%" }
    ],
    steals: [
      { item: "Scorpio Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Leech", "Gnaw", "Dark Shock", "Pulsar Wave", "Sandstorm", "Dispel", "Invert"],
    notes: "Kill Effect: Kill 256 enemies in the area without touching a waystone between kills\n\nWill spawn under the Bravery status\n\nWill spawn under the Faith status\n\nCan spawn under the Shell status",
  },
  {
    id: "e-497", name: "Tower", zone: "Rare Games",
    level: { min: 59, max: 60 }, hp: { min: 136638, max: 136878 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Holy"], weaknesses: ["Dark"], absorbs: [] },
    status: { immune: [], weak: [] },
    drops: [
      { item: "Solid Stone", rate: "40%" },
      { item: "Grand Helm", rate: "1%" }
    ],
    steals: [
      { item: "Einherjarium", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Mana Spring", "Fira", "Thundara", "Blizzara", "Aquaga", "Aeroga", "Firaga", "Thundaga", "Blizzaga", "Graviga"],
    notes: "Spawn Effect: 20% chance. If not present, go back and forth between the waystone to spawn it\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status",
  },
  {
    id: "e-498", name: "Arioch", zone: "Rare Games",
    level: { min: 47, max: 48 }, hp: { min: 43380, max: 43540 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Oil", "Sap", "Slow"] },
    drops: [
      { item: "Vengeful Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Sage\'s Ring", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Pulsar Wave", "Shock Wave", "Dark Shock", "Leech"],
    notes: "Spawn Effect: 40% chance. If not present, zone in and out to respawn\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status\n\nWill spawn under the Haste status",
  },
  {
    id: "e-499", name: "Grey Molter", zone: "Rare Games",
    level: { min: 34, max: 35 }, hp: { min: 21342, max: 21452 }, mp: { min: 338, max: 353 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Slow"] },
    drops: [
      { item: "Snake Skin", rate: "40%" },
      { item: "Prime Tanned Hide", rate: "5%" }
    ],
    steals: [
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Serpent Eye", rate: "5%" }
    ],
    abilities: ["Attack", "Spiral Cut"],
    notes: "Clock Effect: Spawns when the game clock is between a certain time\n\nWill spawn under the Haste status\n\nCan spawn under the Protect status\n\nCan inflict Confuse on its physical attacks",
  },
  {
    id: "e-500", name: "Fideliant", zone: "Rare Games",
    level: { min: 18, max: 19 }, hp: { min: 5189, max: 5195 }, mp: { min: 429, max: 449 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bone Fragment", rate: "40%" },
      { item: "Heavy Lance", rate: "5%" }
    ],
    steals: [
      { item: "Capricorn Gem", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Broken Spear", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Flash", "Tremor", "Bone Toss", "Poison", "Dark"],
    notes: "Spawn Effect: 20% chance. If not present, zone in and out to respawn\n\nCan spawn under the Shell status",
  },
  {
    id: "e-501", name: "Midgardsormr", zone: "Rare Games",
    level: { min: 24, max: 25 }, hp: { min: 9139, max: 9249 }, mp: { min: 234, max: 249 },
    elemental: { strengths: ["Ice"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Snake Skin", rate: "40%" },
      { item: "Sakura-saezuri", rate: "5%" }
    ],
    steals: [
      { item: "Great Serpent\'s Sang", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Prime Tanned Hide", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Tail Spear"],
    notes: "Spawn Effect: 20% chance. If not present, zone in and out to respawn\n\nCan spawn under the Haste status\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-502", name: "Crystal Knight", zone: "Rare Games",
    level: { min: 61, max: 62 }, hp: { min: 101390, max: 101570 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Silence", "Oil"] },
    drops: [
      { item: "Skull Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Glimmering Robes", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Shining Ray", "Immobilizega", "Darkga"],
    notes: "Position Effect: Run between two points to spawn the enemy\n\nWill spawn under the Bravery status\n\nWill spawn under the Haste status\n\nCan spawn under the Shell status\n\nCan inflict Slow on its physical attacks",
  },
  {
    id: "e-503", name: "Nazarnir", zone: "Rare Games",
    level: { min: 45, max: 46 }, hp: { min: 39652, max: 39972 }, mp: { min: 780, max: 810 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Maned Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Destrier Mane", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Flatten", "Kick"],
    notes: "Spawn Effect: 20% chance. If not present, zone in and out to respawn\n\nWill spawn under the Shell status\n\nCan spawn under the Haste status",
  },
  {
    id: "e-504", name: "Grave Lord", zone: "Rare Games",
    level: { min: 24, max: 25 }, hp: { min: 41316, max: 41376 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bone Fragment", rate: "40%" },
      { item: "Diamond Helm", rate: "5%" }
    ],
    steals: [
      { item: "Death\'s Head", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Blood Darkened Bone", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Pyromania", "Ice Break", "Sandstorm", "Darkness"],
    notes: "Chain Effect: Kill 21 of the same enemy in a row to spawn the enemy\n\nWill spawn under the Protect status",
  },
  {
    id: "e-505", name: "Victanir", zone: "Rare Games",
    level: { min: 46, max: 47 }, hp: { min: 55114, max: 55434 }, mp: { min: 897, max: 927 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Maverick Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Wargod\'s Band", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Kick", "Flatten", "Rage"],
    notes: "Spawn Effect: 20% chance. If not present, zone in and out to respawn\n\nWill spawn under the Bravery status\n\nWill spawn under the Protect status\n\nCan inflict Immobilize on its physical attacks\n\nEnemy appears semi invisible",
  },
  {
    id: "e-506", name: "Gemhorn", zone: "Rare Games",
    level: { min: 45, max: 46 }, hp: { min: 42701, max: 43121 }, mp: { min: 520, max: 525 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Tanned Hide", rate: "40%" },
      { item: "Greataxe", rate: "5%" }
    ],
    steals: [
      { item: "Slaven Harness", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Spinkick", "Power Stun", "Purify"],
    notes: "Kill Effect: Spawns after defeating all enemies in the area\n\nCan spawn under the Bravery status\n\nCan spawn under the Protect status",
  },
  {
    id: "e-507", name: "Drowned", zone: "Rare Games",
    level: { min: 40, max: 41 }, hp: { min: 21886, max: 22066 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Blind", "Poison", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Foul Flesh", rate: "40%" },
      { item: "Scathe Mote", rate: "5%" }
    ],
    steals: [
      { item: "Forbidden Flesh", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Leech", "Wail", "Stone Touch"],
    notes: "Wait Effect: Wait in the area for a set period of time\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status\n\nCan spawn under the Protect status\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-508", name: "Luxollid", zone: "Rare Games",
    level: { min: 52, max: 53 }, hp: { min: 342179, max: 342179 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Holy\n\nImmune to all other elements except Dark"], weaknesses: ["Dark"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Pebble", rate: "40%" },
      { item: "Elixir", rate: "5%" }
    ],
    steals: [
      { item: "Sagittarius", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Dispelga", "Holy", "Firaga", "Blizzaga", "Thundaga", "Aquaga", "Aeroga", "Anti Magick", "Magick Wall", "White Wind"],
    notes: "Kill Effect: Kill another enemy and enter the zone\n\nWill spawn under the Faith status\n\nWill spawn under the Shell status",
  },
  {
    id: "e-509", name: "Velelu", zone: "Rare Games",
    level: { min: 46, max: 47 }, hp: { min: 37189, max: 37369 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil"] },
    drops: [
      { item: "Foul Flesh", rate: "40%" },
      { item: "Durandal", rate: "1%" }
    ],
    steals: [
      { item: "Capricorn Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Leech", "Wail", "Blindga", "Toxify"],
    notes: "HP Effect: Be below a certain threshold of HP to spawn the enemy\n\nWill spawn under the Protect status\n\nCan spawn under the Faith status\n\nCan spawn under the Shell status\n\nCan inflict Stop on its physical attacks",
  },
  {
    id: "e-510", name: "Vagrant Soul", zone: "Rare Games",
    level: { min: 52, max: 53 }, hp: { min: 342179, max: 342179 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark\n\nImmune to all other elements except Holy"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Pebble", rate: "40%" },
      { item: "Elixir", rate: "5%" }
    ],
    steals: [
      { item: "Shikari Nagasa", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Firaga", "Thundaga", "Blizzaga", "Aquaga", "Darkra", "Darkga", "Fearga", "Anti Magick", "Magick Wall", "White Wind"],
    notes: "Spawn/Kill Effect: 25% after defeating an enemy in the area\n\nWill spawn under the Faith status\n\nWill spawn under the Shell status",
  },
  {
    id: "e-511", name: "Disma", zone: "Rare Games",
    level: { min: 59, max: 60 }, hp: { min: 198572, max: 198752 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil"] },
    drops: [
      { item: "Accursed Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Mirage Vest", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Shining Ray", "Darkness", "Firaga", "Thundaga", "Blizzaga", "Darkra", "Darkga"],
    notes: "Replacement Effect: 5% to replace a Dark Lord. If not present, kill all Dark Lords, zone tow zones and return\n\nWill spawn under the Bravery status\n\nWill spawn under the Haste status\n\nCan spawn under the Faith status\n\nCan inflict Stop on its physical attacks",
  },
  {
    id: "e-512", name: "Imdugud", zone: "Rare Games",
    level: { min: 17, max: 18 }, hp: { min: 8302, max: 8318 }, mp: { min: 312, max: 316 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap"] },
    drops: [
      { item: "Large Feather", rate: "40%" },
      { item: "Windslicer Pinion", rate: "5%" }
    ],
    steals: [
      { item: "Shielded Armour", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "White Incense", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge"],
    notes: "Wait Effect: Wait for a set period of time in the area\n\nWill spawn under the Shell status\n\nCan spawn under the Protect status\n\nCan inflict Slow on its physical attacks\n\nEnemy is flying - can only be killed with Magic, ranged weapons or long weapons",
  },
  {
    id: "e-513", name: "Ancbolder", zone: "Rare Games",
    level: { min: 29, max: 30 }, hp: { min: 14022, max: 14142 }, mp: { min: 358, max: 361 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Mind Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Forbidden Flesh", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Tremor", "Rage", "Protect"],
    notes: "Kill Effect: Kill all the enemies in the zone\n\nCan spawn under the Haste status",
  },
  {
    id: "e-514", name: "Bull Chocobo", zone: "Rare Games",
    level: { min: 47, max: 48 }, hp: { min: 43263, max: 43383 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Varies throughout the battle"], weaknesses: ["Varies throughout the battle"], absorbs: [] },
    status: { immune: [], weak: ["Sleep", "Blind", "Oil"] },
    drops: [
      { item: "Beaked Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Hi-Ether", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Choco Comet"],
    notes: "Spawn Effect: 40% spawn chance. If not present, leave and re-enter\n\nWill spawn under the Haste status\n\nCan spawn under the Protect status\n\nCan spawn under the Sleep status\n\nCan inflict Doom on its physical attacks\n\nEnemy is docile - will not attack unless provoked",
  },
  {
    id: "e-515", name: "Wendice", zone: "Rare Games",
    level: { min: 38, max: 39 }, hp: { min: 29988, max: 30408 }, mp: { min: 585, max: 590 },
    elemental: { strengths: ["Ice"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Frigid Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Gemini Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Tri-Attack", "Ice Break", "Blizzara", "Haste", "Protect"],
    notes: "Kill Effect: Kill all of a certain enemy to spawn the enemy\n\nWill spawn under the Protect status\n\nCan spawn under the Shell status",
  },
  {
    id: "e-516", name: "Skullash", zone: "Rare Games",
    level: { min: 37, max: 38 }, hp: { min: 51065, max: 51745 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Ice"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Clawed Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Charger Barding", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Sonic Fangs", "Fireball", "Firaga", "Blizzaga", "Thundaga", "Haste"],
    notes: "Spawn Effect: 40% spawn chance to appear. If not present, leave and re-enter\n\nWill spawn under the Bravery status\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status\n\nCan spawn under the Haste status\n\nCan inflict Petrify on its physical attacks",
  },
  {
    id: "e-517", name: "Anchag", zone: "Rare Games",
    level: { min: 29, max: 30 }, hp: { min: 30395, max: 30515 }, mp: { min: 618, max: 621 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Festering Flesh", rate: "40%" },
      { item: "Obelisk", rate: "5%" }
    ],
    steals: [
      { item: "Damascus Steel", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Forbidden Flesh", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Smite of Rage", "Rage"],
    notes: "Kill Effect: Kill all the enemies in the area\n\nCan spawn under the Shell status\n\nCan spawn under the Haste status\n\nAppears alongside Ancbolder as they have same spawn condition",
  },
  {
    id: "e-518", name: "Myath", zone: "Rare Games",
    level: { min: 42, max: 43 }, hp: { min: 51065, max: 51745 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Eternal Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Fireball", "Firaga", "Blizzaga", "Thundaga", "Berserk"],
    notes: "Kill Effect: Kill all the enemies in the area to spawn the enemy\n\nWill spawn under the Bravery status\n\nWill spawn under the Protect status\n\nWill spawn under the Shell status\n\nCan spawn under the Haste status\n\nCan inflict Confuse on its physical attacks",
  },
  {
    id: "e-519", name: "Bluesang", zone: "Rare Games",
    level: { min: 42, max: 43 }, hp: { min: 30395, max: 30815 }, mp: { min: 618, max: 623 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Reverse", "Blind", "Silence", "Oil", "Slow"] },
    drops: [
      { item: "Cruel Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Damascus Steel", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Pyromania", "Rage", "Protect"],
    notes: "Spawn Effect: 40% spawn chance to appear. If not present, leave and re-enter\n\nWill spawn under the Shell status\n\nCan spawn under the Bravery status\n\nCan spawn under the Faith status",
  },
  {
    id: "e-520", name: "Helvinek", zone: "Rare Games",
    level: { min: 48, max: 49 }, hp: { min: 104752, max: 104912 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Slow"] },
    drops: [
      { item: "Grimoire Togail", rate: "40%" },
      { item: "Grand Armour", rate: "1%" }
    ],
    steals: [
      { item: "Magick Lamp", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Rush", "Snake Lash", "Firaga", "Blizzaga", "Thundaga", "Slowga", "Disablega", "Blindga", "Darkra", "Toxify"],
    notes: "Kill Effect: Kill 6 of a certain enemy to spawn\n\nCan follow the player to another area\n\nCan spawn under the Protect status",
  },
  {
    id: "e-521", name: "Pallicant", zone: "Rare Games",
    level: { min: 48, max: 49 }, hp: { min: 52376, max: 52536 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Sap", "Slow"] },
    drops: [
      { item: "Grimoire Togail", rate: "40%" },
      { item: "Scorpio Gem", rate: "5%" }
    ],
    steals: [
      { item: "Gastrophetes", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Snowfly", rate: "5%" }
    ],
    abilities: ["Attack", "Kick", "Snake Lash", "Firaga", "Blizzaga", "Thundaga", "Aquaga", "Aeroga", "Slow", "Stop", "Blindga", "Toxify"],
    notes: "Kill Effect: Kill every enemy in the zone to spawn\n\nWill spawn under the Faith status\n\nWill spawn under the Shell status\n\nCan spawn under the Protect status",
  },
  {
    id: "e-522", name: "Alteci", zone: "Rare Games",
    level: { min: 41, max: 42 }, hp: { min: 52281, max: 52701 }, mp: { min: 741, max: 746 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Blind", "Poison", "Silence", "Disease", "Sap"] },
    drops: [
      { item: "Fell Trophy", rate: "100%" }
    ],
    steals: [
      { item: "Behemoth Steak", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Smite of Rage", "Tail Swipe", "Haste", "Darkness"],
    notes: "Chain Effect: Kill 12 of the same enemy in a row to spawn the enemy\n\nWill spawn under the Bravery status\n\nWill spawn under the Haste status",
  },
  {
    id: "e-523", name: "Phyllo", zone: "Rare Games",
    level: { min: 24, max: 25 }, hp: { min: 6092, max: 6160 }, mp: { min: 293, max: 302 },
    elemental: { strengths: ["Wind"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Bat Fang", rate: "40%" },
      { item: "Spiral Incisor", rate: "5%" }
    ],
    steals: [
      { item: "Taurus Gem", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Ras Algethi", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Leech", "Eerie Soundwave"],
    notes: "Spawn Effect: 20% spawn chance to appear. If not present, leave and re-enter\n\nCan spawn under the Bravery status\n\nCan spawn under the Haste status\n\nCan inflict Poison on its physical attacks",
  },
  {
    id: "e-524", name: "Urutan Exile", zone: "Rare Games",
    level: { min: 17, max: 18 }, hp: { min: 4153, max: 4161 }, mp: { min: 234, max: 237 },
    elemental: { strengths: ["Earth"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Blind", "Silence", "Oil", "Disease", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Stone", rate: "40%" },
      { item: "Magoroku", rate: "5%" }
    ],
    steals: [
      { item: "Hi-Potion", rate: "3%" }
    ],
    poach: [
      { item: "Pebble", rate: "95%" },
      { item: "Pebble", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Tri Attack", "Water Spout"],
    notes: "Kill Effect: Kill a certain amount of a specified enemy to spawn\n\nWill spawn under the Haste status\n\nCan spawn under the Protect status",
  },

  // Ridorana Cataract
  {
    id: "e-525", name: "Cassie", zone: "Ridorana Cataract",
    level: { min: 46, max: 47 }, hp: { min: 8840, max: 9080 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Sleep", "Blind", "Silence", "Oil", "Disable", "Slow"] },
    drops: [
      { item: "Earth Crystal", rate: "40%" },
      { item: "Bacchus\'s Wine", rate: "25%" },
      { item: "Malboro Flower", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Malboro Flower", rate: "55%" },
      { item: "Virgo Gem", rate: "10%" },
      { item: "Chaperon", rate: "3%" }
    ],
    poach: [
      { item: "Malboro Flower", rate: "95%" },
      { item: "Ketu Board", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Cloying Breath", "Bad Breath", "Purify", "Soul Etude", "Time Requiem", "Putrid Breath"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Haste status",
  },

  // Stilshrine of Miriam
  {
    id: "e-526", name: "Redmaw", zone: "Stilshrine of Miriam",
    level: { min: 23, max: 24 }, hp: { min: 1134, max: 1202 }, mp: { min: 225, max: 234 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Crooked Fang", rate: "40%" },
      { item: "Wind Magicite", rate: "25%" },
      { item: "Soleil Fang", rate: "5%" },
      { item: "Ice Shield", rate: "1%" }
    ],
    steals: [
      { item: "Crooked Fang", rate: "55%" },
      { item: "100 Gil", rate: "10%" },
      { item: "Taurus Gem", rate: "3%" }
    ],
    poach: [
      { item: "Crooked Fang", rate: "95%" },
      { item: "Remedy", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Leech", "Joyous Soundwave", "Self-Sacrifice"],
    notes: "Can inflict Poison on their physical attacks\n\nNo EXP, LP or Items awarded if used Self-Sacrifice",
  },
  {
    id: "e-527", name: "Blood Gigas", zone: "Stilshrine of Miriam",
    level: { min: 27, max: 29 }, hp: { min: 2609, max: 2849 }, mp: { min: 275, max: 281 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Magicite", rate: "40%" },
      { item: "Antidote", rate: "25%" },
      { item: "Festering Flesh", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" }
    ],
    steals: [
      { item: "Earth Magicite", rate: "55%" },
      { item: "Phoenix Down", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" }
    ],
    poach: [
      { item: "Festering Flesh", rate: "95%" },
      { item: "Viking Coat", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Blast Wave", "Tri-Attack", "Protect"],
    notes: "Usually encountered in pairs throughout the area",
  },
  {
    id: "e-528", name: "Nightwalker", zone: "Stilshrine of Miriam",
    level: { min: 58, max: 60 }, hp: { min: 18568, max: 18928 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Oil", "Slow\n\nStop", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk (Claw + Mage)"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Book of Orgain-Mille", rate: "25%" },
      { item: "Renewing Morion", rate: "5%" },
      { item: "Capricorn Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Book of Orgain-Mille", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Ram", "Annul", "Dimensional Rift", "Firaga", "Blizzaga", "Thundaga", "Darkra", "Doom", "Death", "Stop"],
    notes: "Can spawn with Shell, Reflect or Faith active\n\nClaw and Mage appear alongside each other",
  },
  {
    id: "e-529", name: "Dragon Aevis", zone: "Stilshrine of Miriam",
    level: { min: 29, max: 31 }, hp: { min: 5479, max: 6159 }, mp: { min: 550, max: 730 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Confuse", "Reverse", "Sleep", "Blind", "Silence", "Oil", "Disable", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Wyrm Carapace", rate: "40%" },
      { item: "Storm Magicite", rate: "25%" },
      { item: "Antidote", rate: "5%" },
      { item: "Goggle Mask", rate: "1%" }
    ],
    steals: [
      { item: "30 Gil", rate: "55%" },
      { item: "Echo Herbs", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Wyrm Carapace", rate: "95%" },
      { item: "Battlewyrm Carapace", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Bile"],
    notes: "Appears as a trio in the zone",
  },
  {
    id: "e-530", name: "Ghoul", zone: "Stilshrine of Miriam",
    level: { min: 27, max: 29 }, hp: { min: 1984, max: 2104 }, mp: { min: 770, max: 830 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Festering Flesh", rate: "40%" },
      { item: "Dark Magicite", rate: "25%" },
      { item: "Enchanter\'s Habit", rate: "5%" },
      { item: "Hi-Potion", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Rime Fang", rate: "10%" },
      { item: "Capricorn Gem", rate: "3%" }
    ],
    poach: [
      { item: "Foul Flesh", rate: "95%" },
      { item: "Festering Flesh", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Leech", "Scream", "Poison Touch", "Protect", "Shell"],
    notes: "Can apply Poison on their physical attacks",
  },
  {
    id: "e-531", name: "Darkmare", zone: "Stilshrine of Miriam",
    level: { min: 30, max: 31 }, hp: { min: 14040, max: 14098 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Grimoire Togail", rate: "40%" },
      { item: "Dark Magicite", rate: "25%" },
      { item: "Demon Mail", rate: "5%" },
      { item: "Chronos Tear", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Grimoire Togail", rate: "10%" },
      { item: "Scorpio Gem", rate: "3%" }
    ],
    poach: [
      { item: "Grimoire Togail", rate: "95%" },
      { item: "Grimoire Aidhed", rate: "5%" }
    ],
    abilities: ["Attack", "Rush", "Snake Lash", "Slow", "Blind", "Poison", "Dark"],
    notes: "Only one spawns in the whole game\n\nExtremely difficult to farm\n\nCan teleport around the area",
  },
  {
    id: "e-532", name: "Balloon", zone: "Stilshrine of Miriam",
    level: { min: 28, max: 29 }, hp: { min: 1878, max: 1936 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bomb Ashes", rate: "40%" },
      { item: "Fire Magicite", rate: "25%" },
      { item: "Eye Drops", rate: "5%" },
      { item: "Scorpio Gem", rate: "1%" }
    ],
    steals: [
      { item: "Handkerchief", rate: "55%" },
      { item: "Chronos Tear", rate: "10%" },
      { item: "Recurve Crossbow", rate: "3%" }
    ],
    poach: [
      { item: "Bomb Ashes", rate: "95%" },
      { item: "Bomb Ashes", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Self-Destruct", "Chain Reaction", "Mass-Destruct", "Protect"],
    notes: "No EXP, LP or Items gained if used any Destruct ability",
  },
  {
    id: "e-533", name: "Miriam Guardian", zone: "Stilshrine of Miriam",
    level: { min: 28, max: 28 }, hp: { min: 6827, max: 6827 }, mp: { min: 55, max: 55 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Blind", "Oil", "Slow"] },
    drops: [
      
    ],
    steals: [
      
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Dark"],
    notes: "Unique enemies\n\nStop spawning after the story event\n\nComes out of the walls",
  },
  {
    id: "e-534", name: "Oiling", zone: "Stilshrine of Miriam",
    level: { min: 27, max: 28 }, hp: { min: 2818, max: 2923 }, mp: { min: 990, max: 999 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Oil", "Disease", "Berserk"] },
    drops: [
      { item: "Yellow Liquid", rate: "40%" },
      { item: "Handkerchief", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Golden Staff", rate: "1%" }
    ],
    steals: [
      { item: "Fire Magicite", rate: "55%" },
      { item: "Yellow Liquid", rate: "10%" },
      { item: "Sagittarius Gem", rate: "3%" }
    ],
    poach: [
      { item: "Silver Liquid", rate: "95%" },
      { item: "Slime Oil", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Phantasmal Gaze", "Divide", "Fire", "Silence"],
    notes: "Drops from the ceiling",
  },
  {
    id: "e-535", name: "Ghast", zone: "Stilshrine of Miriam",
    level: { min: 27, max: 29 }, hp: { min: 2348, max: 2468 }, mp: { min: 770, max: 830 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Dark Magicite", rate: "40%" },
      { item: "Festering Flesh", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Float Mote", rate: "1%" }
    ],
    steals: [
      { item: "Festering Flesh", rate: "55%" },
      { item: "Nu Khai Sand", rate: "10%" },
      { item: "Gold Needle", rate: "3%" }
    ],
    poach: [
      { item: "Foul Flesh", rate: "95%" },
      { item: "Festering Flesh", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Scream", "Stone Touch", "Reflect"],
    notes: "Animates from the ground\n\nCan be spawned by the Negalmuur Rare Game - infinite amount",
  },
  {
    id: "e-536", name: "Crystalbug (Green)", zone: "Stilshrine of Miriam",
    level: { min: 26, max: 38 }, hp: { min: 3489, max: 7178 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Half damage from all elements"], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Immune to all status effects"] },
    drops: [
      
    ],
    steals: [
      { item: "Feystone", rate: "10%" },
      { item: "Ether", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Dark (Green)", "Aquara (Green)", "Aerora (Green)", "Fira (Blue)", "Thundara (Blue)", "Blizzara (Blue)", "Firaga (Orange)", "Thundaga (Orange)", "Blizzaga (Orange)", "Aquaga (Orange)", "Aeroga (Orange)", "Darkra (Orange)", "Renew (Orange)", "Restore"],
    notes: "Becomes a Save Crystal after being defeated - Orange becomes a Teleport Crystal after being defeated\n\nAttacks after activating the crystal",
  },

  // Tchita Uplands
  {
    id: "e-537", name: "Salamand Entite", zone: "Tchita Uplands",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Fire\n\nImmune to all others"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Fire Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Salamand Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" }
    ],
    steals: [
      { item: "Fire Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Salamand Halcyon", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Dispel", "Firaga", "Reflect", "Protect", "Shell", "Silencega", "Sleepga", "Fear"],
    notes: "Only appears in sunny weather conditions\n\nDamage is dealt back to attacker when hit\n\nDocile unless provoked or magick is cast in its vicinity\n\nCasts magick faster when near death\n\nCan appear with Protect, Shell and Reflect active",
  },

  // The Pharos
  {
    id: "e-538", name: "Abaddon", zone: "The Pharos",
    level: { min: 47, max: 49 }, hp: { min: 13239, max: 13879 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Poison", "Silence", "Oil", "Slow\n\nSubterra Version is weak to Stop", "Doom", "Confuse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disable", "Sap", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Serum", rate: "25%" },
      { item: "Solid Horn", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Solid Horn", rate: "55%" },
      { item: "Teleport Stone", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Solid Horn", rate: "95%" },
      { item: "Rubber Suit", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Aqua Bubbles", "Angelsong", "Blitz Tongue"],
    notes: "Large group of them spawn in Subterra\n\nBull Abaddon only spawns in Subterra",
  },
  {
    id: "e-539", name: "Chimera Brain", zone: "The Pharos",
    level: { min: 45, max: 46 }, hp: { min: 9992, max: 10112 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Confuse", "Blind", "Silence", "Oil", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Hi-Potion", rate: "25%" },
      { item: "Windslicer Pinion", rate: "5%" },
      { item: "Taurus Gem", rate: "1%" }
    ],
    steals: [
      { item: "60 Gil", rate: "55%" },
      { item: "Taurus Gem", rate: "10%" },
      { item: "Celebrant\'s Miter", rate: "3%" }
    ],
    poach: [
      { item: "Windslicer Pinion", rate: "95%" },
      { item: "Chimera Head", rate: "5%" }
    ],
    abilities: ["Attack", "Poke", "Flurry Kick", "Purify", "Stone Gaze", "Hawk Glare", "Ember Breath"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Faith status",
  },
  {
    id: "e-540", name: "Bune", zone: "The Pharos",
    level: { min: 48, max: 49 }, hp: { min: 13239, max: 13659 }, mp: { min: 600, max: 605 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Oil", "Slow\n\nSubterra is additionally weak to Poison and Sap"] },
    drops: [
      { item: "Fire Crystal", rate: "40%" },
      { item: "Forbidden Flesh", rate: "25%" },
      { item: "Gungnir", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" }
    ],
    steals: [
      { item: "Gold Needle", rate: "55%" },
      { item: "Forbidden Flesh", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" }
    ],
    poach: [
      { item: "Forbidden Flesh", rate: "95%" },
      { item: "Damascus Steel", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Tri-Attack", "Smite of Rage", "Pulsar Wave", "Haste", "Protect", "Darkra"],
    notes: "Can spawn under the Bravery status\n\nCan spawn under the Protect status",
  },
  {
    id: "e-541", name: "Magick Pot", zone: "The Pharos",
    level: { min: 60, max: 60 }, hp: { min: 30000, max: 30000 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Absorbs all elements"], weaknesses: [], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Berserk"] },
    drops: [
      { item: "Ether", rate: "100%" },
      { item: "Megalixir", rate: "1%" }
    ],
    steals: [
      { item: "Elixir", rate: "10%" },
      { item: "Baltoro Seed", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Flare"],
    notes: "Can perform a 12-hit combo\n\nIf given an Elixir it will run away from the player, can be stolen from the enemy afterwards\n\nArguably the joint hardest enemy in the game if fought without giving an Elixir",
  },
  {
    id: "e-542", name: "Crusader", zone: "The Pharos",
    level: { min: 47, max: 48 }, hp: { min: 10592, max: 10772 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Confuse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Blood Darkened Bone", rate: "40%" },
      { item: "Sturdy Bone (40%) (Nabreus)", rate: "?" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Crown of Laurels", rate: "5%" }
    ],
    steals: [
      { item: "Blood Darkened Bone", rate: "55%" },
      { item: "Sturdy Bone (40%) Nabreus)", rate: "?" },
      { item: "X-Potion", rate: "10%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Lunge", "Smite of Rage", "Tremor", "Slowga", "Blindga", "Darkra"],
    notes: "Can spawn under the Protect status\n\nCan spawn under the Shell status\n\nCan spawn under the Haste status",
  },
  {
    id: "e-543", name: "Cataract Aevis", zone: "The Pharos",
    level: { min: 50, max: 51 }, hp: { min: 23241, max: 23921 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Poison", "Oil", "Slow"] },
    drops: [
      { item: "Charger Barding", rate: "40%" },
      { item: "Ice Crystal", rate: "25%" },
      { item: "Cura Mote", rate: "5%" },
      { item: "Caldera", rate: "1%" }
    ],
    steals: [
      { item: "Charger Barding", rate: "55%" },
      { item: "50 Gil", rate: "10%" },
      { item: "Leo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Charger Barding", rate: "95%" },
      { item: "Leo Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Crushing Fangs", "Fireball", "Firaga", "Thundaga", "Blizzaga"],
    notes: "Can spawn under the Protect status\n\nCan spawn under the Haste status\n\nCan inflict Disease on physical attacks",
  },
  {
    id: "e-544", name: "Purobolos", zone: "The Pharos",
    level: { min: 49, max: 50 }, hp: { min: 9531, max: 9691 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Sleep", "Blind", "Poison", "Oil", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Bomb Shell", rate: "25%" },
      { item: "Handkerchief", rate: "5%" },
      { item: "Scorpio Gem", rate: "1%" }
    ],
    steals: [
      { item: "Bomb Shell", rate: "55%" },
      { item: "Dark Crystal", rate: "10%" },
      { item: "Scathe Mote", rate: "3%" }
    ],
    poach: [
      { item: "Bomb Shell", rate: "95%" },
      { item: "Mallet", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Self Destruct", "Mass Destruct", "Chain Reaction", "Darkra"],
    notes: "Can spawn under the Haste status\n\nCan spawn under the Faith status\n\nNo EXP, LP or Loot awarded if enemy uses Self Destruct, Mass Destruct or Chain Reaction",
  },
  {
    id: "e-545", name: "Deidar", zone: "The Pharos",
    level: { min: 46, max: 46 }, hp: { min: 15358, max: 15358 }, mp: { min: 840, max: 840 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Poison", "Silence", "Oil", "Sap", "Slow"] },
    drops: [
      { item: "Quality Stone", rate: "40%" },
      { item: "Dark Crystal", rate: "25%" },
      { item: "Antares", rate: "5%" },
      { item: "Aquarius Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Crystal", rate: "55%" },
      { item: "Quality Stone", rate: "10%" },
      { item: "Aquarius Gem", rate: "3%" }
    ],
    poach: [
      { item: "Quality Stone", rate: "95%" },
      { item: "Orichalcum", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Screech", "Eerie Soundwave", "Self Destruct", "Stone Gaze", "Flash", "Firaga", "Blizzaga", "Thundaga", "LV 3 Disable", "LV 4 Break"],
    notes: "Can spawn under the Protect status\n\nCan spawn under the Reflect status\n\nKilling a Deidar will create a bridge to treasure - killing a Brainpan creates a separate bridge and removes a Deidar bridge\n\nNo EXP, LP or Loot awarded if enemy uses Self Destruct",
  },
  {
    id: "e-546", name: "Mistmare", zone: "The Pharos",
    level: { min: 45, max: 47 }, hp: { min: 12180, max: 12500 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Poison", "Oil", "Disable", "Sap", "Slow"] },
    drops: [
      { item: "Water Crystal", rate: "40%" },
      { item: "Chronos Tear", rate: "25%" },
      { item: "Grimoire Aidhed", rate: "5%" },
      { item: "Scorpio Gem", rate: "1%" }
    ],
    steals: [
      { item: "Grimoire Aidhed", rate: "55%" },
      { item: "Water Crystal", rate: "10%" },
      { item: "Reflectga Mote", rate: "3%" }
    ],
    poach: [
      { item: "Gromoire Aidhed", rate: "95%" },
      { item: "Black Robes", rate: "5%" }
    ],
    abilities: ["Attack", "Rush", "Snake Lash", "Aquaga", "Slow", "Stop", "Blindga", "Toxify"],
    notes: "Can spawn under the Shell status\n\nCan spawn under the Faith status\n\nCan teleport around the area",
  },
  {
    id: "e-547", name: "Undin Entite", zone: "The Pharos",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Water\n\nImmune to all others except Fire"], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Water Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Undin Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" }
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Undin Halcyon", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Dispelga", "Aquaga", "Reflect", "Protect", "Shell", "Silencega", "Sleepga", "Fear"],
    notes: "Only appears in rainy conditions in Cerobi Steppe\n\nDamage is dealt back to attacker when hit\n\nDocile unless provoked or magick is cast in its vicinity - Pharos version is aggressive on sight\n\nCasts magick faster when near death",
  },

  // The Salikawood
  {
    id: "e-548", name: "Wyrdhare", zone: "The Salikawood",
    level: { min: 33, max: 35 }, hp: { min: 2739, max: 2959 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Fine Wool", rate: "40%" },
      { item: "Water Magicite", rate: "25%" },
      { item: "Aries Gem", rate: "5%" },
      { item: "Loxley Bow", rate: "1%" }
    ],
    steals: [
      { item: "Water Magicite", rate: "55%" },
      { item: "Echo Herbs", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Fine Wool", rate: "95%" },
      { item: "Stardust", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Flank Attack", "Vespersong", "Warsong", "Cura", "Regen", "Protect", "Shell"],
    notes: "Enemy is docile - will not attack unless provoked",
  },
  {
    id: "e-549", name: "Pumpkin Head", zone: "The Salikawood",
    level: { min: 32, max: 33 }, hp: { min: 2739, max: 2859 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Succulent Fruit", rate: "40%" },
      { item: "Storm Magicite", rate: "25%" },
      { item: "Handkerchief", rate: "5%" },
      { item: "Balance Mote", rate: "1%" }
    ],
    steals: [
      { item: "Storm Magicite", rate: "55%" },
      { item: "Screamroot", rate: "10%" },
      { item: "Black Garb", rate: "3%" }
    ],
    poach: [
      { item: "Succulent Fruit", rate: "95%" },
      { item: "Succulent Fruit", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Vespersong", "Warsong", "Blind", "Silence", "Sleep", "Poison"],
    notes: "Physical attacks can inflict Confuse\n\nCan appear under the Sleep status",
  },
  {
    id: "e-550", name: "Sprinter", zone: "The Salikawood",
    level: { min: 33, max: 34 }, hp: { min: 4070, max: 4138 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Bundle of Feathers", rate: "40%" },
      { item: "Fire Magicite", rate: "25%" },
      { item: "Rime Fang", rate: "5%" },
      { item: "Astrakhan Hat", rate: "1%" }
    ],
    steals: [
      { item: "Bundle of Feathers", rate: "55%" },
      { item: "Lightning Fang", rate: "10%" },
      { item: "Taurus Gem", rate: "3%" }
    ],
    poach: [
      { item: "Bundle of Feathers", rate: "95%" },
      { item: "Chronos Tear", rate: "5%" }
    ],
    abilities: ["Attack", "Poke", "Sonic Spin", "Stone Gaze"],
    notes: "-",
  },
  {
    id: "e-551", name: "Malboro King", zone: "The Salikawood",
    level: { min: 34, max: 35 }, hp: { min: 4501, max: 4621 }, mp: { min: 980, max: 992 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Malboro Fruit", rate: "40%" },
      { item: "Dark Magicite", rate: "25%" },
      { item: "Vanishga Mote", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Dark Magicite", rate: "55%" },
      { item: "Malboro Fruit", rate: "10%" },
      { item: "Virgo Gem", rate: "3%" }
    ],
    poach: [
      { item: "Malboro Fruit", rate: "95%" },
      { item: "Thorned Mace", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Cloying Breath", "Bad Breath", "Purify"],
    notes: "-",
  },
  {
    id: "e-552", name: "Mandragora", zone: "The Salikawood",
    level: { min: 34, max: 37 }, hp: { min: 2739, max: 3099 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Fire"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Succulent Fruit", rate: "40%" },
      { item: "Water Magicite", rate: "25%" },
      { item: "Vanishga Mote", rate: "5%" },
      { item: "Platinum Sword", rate: "1%" }
    ],
    steals: [
      { item: "Water Magicite", rate: "55%" },
      { item: "Succulent Fruit", rate: "10%" },
      { item: "380 Gil", rate: "3%" }
    ],
    poach: [
      { item: "Succulent Fruit", rate: "95%" },
      { item: "Virgo Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Scream", "Vespersong", "Warsong", "Cura", "Esuna"],
    notes: "Can appear under the Sleep status\n\nPhysical attacks have a chance of applying Sleep",
  },
  {
    id: "e-553", name: "Iguion", zone: "The Salikawood",
    level: { min: 35, max: 36 }, hp: { min: 4892, max: 5002 }, mp: { min: 910, max: 925 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Pointed Horn", rate: "40%" },
      { item: "Ice Magicite", rate: "25%" },
      { item: "Eye Drops", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Phoenix Down", rate: "55%" },
      { item: "Aries Gem", rate: "10%" },
      { item: "Survival Vest", rate: "3%" }
    ],
    poach: [
      { item: "Pointed Horn", rate: "95%" },
      { item: "Frogspawn", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Aqua Bubbles", "Angelsong", "Magick Ballad"],
    notes: "Enemy is docile - will not attack unless provoked\n\nCan appear under the Sleep status - Phon Coast only\n\nCan appear under the Confuse status - Sochen Cave Palace only",
  },
  {
    id: "e-554", name: "Archaeosaur", zone: "The Salikawood",
    level: { min: 37, max: 38 }, hp: { min: 12251, max: 12591 }, mp: { min: 210, max: 300 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Storm Magicite", rate: "40%" },
      { item: "Gold Needle", rate: "25%" },
      { item: "Tanned Tyrant Hide", rate: "5%" },
      { item: "Leo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Storm Magicite", rate: "55%" },
      { item: "Tanned Tyrant Hide", rate: "10%" },
      { item: "Fumarole", rate: "3%" }
    ],
    poach: [
      { item: "Tanned Tyrant Hide", rate: "95%" },
      { item: "Prime Tanned Hide", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Screwtail", "Sonic Fangs"],
    notes: "Can appear under the Regen status",
  },
  {
    id: "e-555", name: "Pyrolisk", zone: "The Salikawood",
    level: { min: 36, max: 37 }, hp: { min: 6262, max: 6330 }, mp: { min: 560, max: 569 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Bundle of Feathers", rate: "40%" },
      { item: "Storm Magicite", rate: "25%" },
      { item: "Lightning Fang", rate: "5%" },
      { item: "Taurus Gem", rate: "1%" }
    ],
    steals: [
      { item: "Bundle of Feathers", rate: "55%" },
      { item: "Gold Needle", rate: "10%" },
      { item: "Balance Mote", rate: "3%" }
    ],
    poach: [
      { item: "Bundle of Feathers", rate: "95%" },
      { item: "Murasame", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Kamikaze"],
    notes: "Enemy is flying - can only be hit with magic, ranged weapons and poles/spears\n\nNo EXP, LP or items is awarded if Kamikaze is used",
  },
  {
    id: "e-556", name: "Piranha", zone: "The Salikawood",
    level: { min: 35, max: 37 }, hp: { min: 4305, max: 4469 }, mp: { min: 980, max: 999 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Water Magicite", rate: "40%" },
      { item: "Eye Drops", rate: "25%" },
      { item: "Ichthon Scale", rate: "5%" },
      { item: "Pisces Gem", rate: "1%" }
    ],
    steals: [
      { item: "Chronos Tear", rate: "55%" },
      { item: "Remedy", rate: "10%" },
      { item: "Steel Mask", rate: "3%" }
    ],
    poach: [
      { item: "Ichthon Scale", rate: "95%" },
      { item: "Pisces Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Power Spin", "Water Ray"],
    notes: "Physical attacks can inflict Poison",
  },
  {
    id: "e-557", name: "Bagoly", zone: "The Salikawood",
    level: { min: 14, max: 16 }, hp: { min: 1010, max: 1230 }, mp: { min: 200, max: 230 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Wind Stone (40%) (Sandsea)", rate: "?" },
      { item: "Wind Magicte", rate: "40%" },
      { item: "Large Feather (25%) (Sandsea)", rate: "?" },
      { item: "Bundle of Feathers", rate: "25%" }
    ],
    steals: [
      { item: "Large Feather (55%) (Sandsea)", rate: "?" },
      { item: "Bundle of Feathers", rate: "55%" },
      { item: "Echo Herbs (10%) (Sandsea)", rate: "?" }
    ],
    poach: [
      { item: "Large Feather (95%) (Sandsea)", rate: "?" },
      { item: "Bundle of Feathers", rate: "95%" }
    ],
    abilities: ["Attack", "Slap", "Protect", "Shell", "Screech", "Gust", "Aerora"],
    notes: "Enemy is flying - can only be hit with magic, ranged weapons and poles/spears\n\nNo EXP, LP or items is awarded if Kamikaze is used",
  },
  {
    id: "e-558", name: "Air Elemental", zone: "The Salikawood",
    level: { min: 25, max: 45 }, hp: { min: 14830, max: 4079 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Wind\n\nImmune to all elements other the Earth"], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize\n\nBlind", "Oil", "Immobilize", "Sap", "Slow (Chaosjet)"] },
    drops: [
      { item: "Wind Magicite", rate: "40%" },
      { item: "Wind Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Wind Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Wind Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Wind Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Aerora", "Protect", "Shell", "Silence", "Sleep"],
    notes: "Docile unless magick is used near it or is attacked\n\nAir Chaosjet is a unique version in Nabudis - weaker with different weaknesses",
  },
  {
    id: "e-559", name: "Feral Croc", zone: "The Salikawood",
    level: { min: 38, max: 39 }, hp: { min: 9393, max: 9713 }, mp: { min: 375, max: 405 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Blood Wool", rate: "40%" },
      { item: "Wind Magicite", rate: "25%" },
      { item: "Lightning Fang", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Blood Wool", rate: "55%" },
      { item: "Aries Gem", rate: "10%" },
      { item: "Orichalcum Dirk", rate: "3%" }
    ],
    poach: [
      { item: "Blood Wool", rate: "95%" },
      { item: "Antartic Wind", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Sonic Fangs", "Screwtail", "Phantasmal Gaze", "Flash", "Reflect"],
    notes: "Can appear under the Protect status",
  },
  {
    id: "e-560", name: "Serpent", zone: "The Salikawood",
    level: { min: 35, max: 36 }, hp: { min: 4982, max: 5302 }, mp: { min: 300, max: 330 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Quality Hide", rate: "40%" },
      { item: "Wind Magicite", rate: "25%" },
      { item: "Bacchus\'s Wine", rate: "5%" },
      { item: "Aries Gem", rate: "1%" }
    ],
    steals: [
      { item: "Wind Magicite", rate: "55%" },
      { item: "Quality Hide", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Quality Hide", rate: "95%" },
      { item: "Carmagnole", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Tail Spear"],
    notes: "-",
  },
  {
    id: "e-561", name: "Earth Elemental", zone: "The Salikawood",
    level: { min: 25, max: 45 }, hp: { min: 14830, max: 4079 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Earth\n\nImmune to all elements other the Wind"], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize\n\nBlind", "Oil", "Immobilize", "Sap", "Slow (Chaosjet)"] },
    drops: [
      { item: "Earth Magicite", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Earth Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Earth Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Earth Crystal", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Fira", "Blizzara", "Thundara", "Protect", "Shell", "Silence", "Sleep", "Curaga (Chaosjet)"],
    notes: "Docile unless magick is used near it or is attacked\n\nEarth Chaosjet is a unique version in Nabudis - weaker with different weaknesses",
  },
  {
    id: "e-562", name: "Abysteel", zone: "The Salikawood",
    level: { min: 57, max: 59 }, hp: { min: 13099, max: 13339 }, mp: { min: 700, max: 720 },
    elemental: { strengths: [], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Doom", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disable", "Slow\n\nHenne Mines version is immune to Doom but weak to Sap in addition to the rest.\n\nSochen version is weak to Stop and immune to Sap in addition to the rest"] },
    drops: [
      { item: "Dark Crystal", rate: "40%" },
      { item: "Spiral Incisor", rate: "25%" },
      { item: "Soleil Fang", rate: "5%" },
      { item: "Vampyr Fang", rate: "1%" }
    ],
    steals: [
      { item: "Spiral Incisor", rate: "55%" },
      { item: "Teleport Stone", rate: "10%" },
      { item: "Demon Shield", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Attack", "Gnaw", "Leech", "Self-Sacrifice"],
    notes: "Can inflict Poison on its physical attacks\n\nNo EXP, LP or Loot gained if enemy uses Self-Sacrifice",
  },
  {
    id: "e-563", name: "Striker", zone: "The Salikawood",
    level: { min: 37, max: 38 }, hp: { min: 5129, max: 5549 }, mp: { min: 400, max: 405 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Maggoty Flesh", rate: "40%" },
      { item: "Earth Magicite", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Kagenui", rate: "1%" }
    ],
    steals: [
      { item: "Maggoty Flesh", rate: "55%" },
      { item: "Earth Magicite", rate: "10%" },
      { item: "Gemini Gem", rate: "3%" }
    ],
    poach: [
      { item: "Maggoty Flesh", rate: "95%" },
      { item: "Gemini Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Tri-Attack", "Tremor", "Fira", "Thundara", "Blizzara", "Protect"],
    notes: "Striker and Wendigo are mutually exclusive - if one spawns, the other does not",
  },
  {
    id: "e-564", name: "Pit Fiend", zone: "The Salikawood",
    level: { min: 37, max: 39 }, hp: { min: 4390, max: 4710 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Doom", "Reverse", "Poison", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow"] },
    drops: [
      { item: "Wind Magicite", rate: "40%" },
      { item: "Remedy", rate: "25%" },
      { item: "Demon Feather", rate: "5%" },
      { item: "Scorpio Gem", rate: "1%" }
    ],
    steals: [
      { item: "Eye Drops", rate: "55%" },
      { item: "Rime Fang", rate: "10%" },
      { item: "Scorpio Gem", rate: "3%" }
    ],
    poach: [
      { item: "Demon Feather", rate: "95%" },
      { item: "Demon Tail", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Fear", "Aerora", "Leech", "Sleep", "Drain", "Toxify"],
    notes: "Pit Fiend and Imp are mutually exclusive - if one spawns, the other does not",
  },
  {
    id: "e-565", name: "Wendigo", zone: "The Salikawood",
    level: { min: 37, max: 38 }, hp: { min: 5458, max: 5878 }, mp: { min: 300, max: 305 },
    elemental: { strengths: ["Ice"], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Sleep", "Blind", "Silence", "Oil", "Disease", "Immobilize", "Slow", "Berserk"] },
    drops: [
      { item: "Maggoty Flesh", rate: "40%" },
      { item: "Ice Magicite", rate: "25%" },
      { item: "Hi-Potion", rate: "5%" },
      { item: "Gemini Gem", rate: "1%" }
    ],
    steals: [
      { item: "Ice Magicite", rate: "55%" },
      { item: "Forbidden Flesh", rate: "10%" },
      { item: "Gokuu Pole", rate: "3%" }
    ],
    poach: [
      { item: "Maggoty Flesh", rate: "95%" },
      { item: "Vanishga Mote", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Tri-Attack", "Ice Break", "Blizzara", "Watera", "Aerora", "Haste"],
    notes: "Wendigo and Striker are mutually exclusive - if one spawns, the other does not",
  },
  {
    id: "e-566", name: "Gorgimera", zone: "The Salikawood",
    level: { min: 36, max: 37 }, hp: { min: 5385, max: 5505 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Berserk"] },
    drops: [
      { item: "Bundle of Feathers", rate: "40%" },
      { item: "Fire Magicite", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Hammerhead (1%) (Zertinan)", rate: "?" }
    ],
    steals: [
      { item: "Fire Magicite", rate: "55%" },
      { item: "Gold Needle", rate: "10%" },
      { item: "Taurus Gem (3%) (Zertinan)", rate: "?" }
    ],
    poach: [
      { item: "Bundle of Feathers", rate: "95%" },
      { item: "Taurus Gem", rate: "5%" }
    ],
    abilities: ["Attack", "Poke", "Purify", "Stone Gaze", "Ember Breath"],
    notes: "-",
  },
  {
    id: "e-567", name: "Focalor", zone: "The Salikawood",
    level: { min: 36, max: 37 }, hp: { min: 4513, max: 4684 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Poison", "Silence", "Oil", "Disease", "Disable", "Sap", "Slow", "Berserk\n\nNabreus version is immune to Poison", "Disable and Sap"] },
    drops: [
      { item: "Ichthon Scale", rate: "40%" },
      { item: "Storm Magicite", rate: "25%" },
      { item: "(Storm Crystal (25%) (Nabreus)", rate: "?" },
      { item: "Power Rod", rate: "5%" }
    ],
    steals: [
      { item: "Ichthon Scale", rate: "55%" },
      { item: "Balance Mote", rate: "10%" },
      { item: "Pisces Gem", rate: "3%" }
    ],
    poach: [
      { item: "Ichthon Scale", rate: "95%" },
      { item: "Dorsal Fin", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Power Spin", "Water Ray"],
    notes: "Enemy is Docile - will not attack unless provoked",
  },
  {
    id: "e-568", name: "Mandragora Prince", zone: "The Salikawood",
    level: { min: 37, max: 42 }, hp: { min: 9069, max: 3959 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Disease", "Slow", "Berserk (Boss)\n\nStop", "Sleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Water Crystal", rate: "40%" },
      { item: "Screamroot", rate: "25%" },
      { item: "Teleport Stone", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Water Crystal", rate: "55%" },
      { item: "Hi-Potion", rate: "10%" },
      { item: "Indigo Pendant", rate: "3%" }
    ],
    poach: [
      { item: "Screamroot", rate: "95%" },
      { item: "Four Leaf Clover", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Pollen", "Warsong", "Cura", "Esuna"],
    notes: "(Boss) always spawns under the Haste status\n\nWill only spawn in the Feywood once all other enemies in the zone are killed\n\nPhysical attacks can inflict the Sleep status",
  },
  {
    id: "e-569", name: "Basilisk", zone: "The Salikawood",
    level: { min: 42, max: 43 }, hp: { min: 5429, max: 5749 }, mp: { min: 380, max: 410 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Confuse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilize", "Slow"] },
    drops: [
      { item: "Ice Crystal", rate: "40%" },
      { item: "Chronos Tear", rate: "25%" },
      { item: "Prime Tanned Hide", rate: "5%" },
      { item: "Serpent Eye", rate: "1%" }
    ],
    steals: [
      { item: "Antidote", rate: "55%" },
      { item: "80 Gil", rate: "10%" },
      { item: "Aries Gem", rate: "3%" }
    ],
    poach: [
      { item: "Prime Tanned Hide", rate: "95%" },
      { item: "Serpent Eye", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Tail Spear"],
    notes: "Physical attacks can inflict the Poison status",
  },
  {
    id: "e-570", name: "Alraune King", zone: "The Salikawood",
    level: { min: 37, max: 42 }, hp: { min: 9069, max: 3959 }, mp: { min: 999, max: 999 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Oil", "Disease", "Berserk (Boss)\n\nSleep", "Blind", "Silence", "Oil", "Disease", "Slow"] },
    drops: [
      { item: "Earth Crystal", rate: "40%" },
      { item: "Screamroot", rate: "25%" },
      { item: "Gold Needle", rate: "5%" },
      { item: "Virgo Gem", rate: "1%" }
    ],
    steals: [
      { item: "Scream Crystal", rate: "55%" },
      { item: "Virgo Gem", rate: "10%" },
      { item: "Cross Scale", rate: "3%" }
    ],
    poach: [
      { item: "Screamroot", rate: "95%" },
      { item: "Gimble Stalk", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Pollen", "Mystery Waltz"],
    notes: "(Boss) always spawns under the Haste status\n\nWill only spawn in the Feywood once all other enemies in the zone are killed\n\nPhysical attacks can inflict the Sap status",
  },

  // Tomb of Raithwall
  {
    id: "e-571", name: "Seeker", zone: "Tomb of Raithwall",
    level: { min: 6, max: 7 }, hp: { min: 535, max: 551 }, mp: { min: 110, max: 114 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Wind Stone", rate: "40%" },
      { item: "Antidote", rate: "25%" },
      { item: "Crooked Fang", rate: "5%" },
      { item: "Nu Khai Sand", rate: "1%" }
    ],
    steals: [
      { item: "Wind Stone", rate: "55%" },
      { item: "Iron Sword", rate: "10%" },
      { item: "Taurus Gem (10%) (Raithwall)", rate: "?" }
    ],
    poach: [
      { item: "Crooked Fang", rate: "95%" },
      { item: "Bat Wing", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw", "Leech", "Joyous Soundwave", "Self-Sacrifice"],
    notes: "No EXP, LP or Item rewarded if used Self Sacrifice",
  },
  {
    id: "e-572", name: "Lost Soul", zone: "Tomb of Raithwall",
    level: { min: 17, max: 18 }, hp: { min: 966, max: 972 }, mp: { min: 330, max: 350 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Bone Fragment", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Antidote", rate: "5%" },
      { item: "Teleport Stone", rate: "1%" }
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "60 Gil", rate: "10%" },
      { item: "Blazer Gloves", rate: "3%" }
    ],
    poach: [
      { item: "Bone Fragment", rate: "95%" },
      { item: "Bone Fragment", rate: "5%" }
    ],
    abilities: ["Attack", "Protect", "Shell", "Dark"],
    notes: "-",
  },
  {
    id: "e-573", name: "Lesser Chimera", zone: "Tomb of Raithwall",
    level: { min: 15, max: 18 }, hp: { min: 1014, max: 1062 }, mp: { min: 450, max: 462 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Fire Stone", rate: "40%" },
      { item: "Handkerchief", rate: "25%" },
      { item: "Small Feather", rate: "5%" },
      { item: "Hi-Potion", rate: "1%" }
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Gold Needle", rate: "10%" },
      { item: "Taurus Gem", rate: "3%" }
    ],
    poach: [
      { item: "Small Feather", rate: "95%" },
      { item: "Main Gauche", rate: "5%" }
    ],
    abilities: ["Attack", "Poke", "Mucus", "Purify", "Stone Gaze"],
    notes: "-",
  },
  {
    id: "e-574", name: "Skull Warrior", zone: "Tomb of Raithwall",
    level: { min: 17, max: 18 }, hp: { min: 876, max: 882 }, mp: { min: 330, max: 350 },
    elemental: { strengths: ["Dark"], weaknesses: ["Holy"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Blind", "Poison", "Silence", "Oil", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Bone Fragment", rate: "40%" },
      { item: "Dark Stone", rate: "25%" },
      { item: "Prince\'s Kiss", rate: "5%" },
      { item: "Golden Shield", rate: "1%" }
    ],
    steals: [
      { item: "Dark Stone", rate: "55%" },
      { item: "Bone Fragment", rate: "10%" },
      { item: "200 Gil", rate: "3%" }
    ],
    poach: [
      { item: "Bone Fragment", rate: "95%" },
      { item: "Broken Spear", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Dark", "Blind", "Bone Toss", "Water Spout"],
    notes: "Will occasionally appear with Lost Soul",
  },
  {
    id: "e-575", name: "Ragoh", zone: "Tomb of Raithwall",
    level: { min: 16, max: 18 }, hp: { min: 1400, max: 1440 }, mp: { min: 210, max: 250 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Confuse", "Sleep", "Silence", "Oil", "Immobilize", "Sap", "Slow"] },
    drops: [
      { item: "Solid Stone", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Eye Drops", rate: "5%" },
      { item: "Winged Helm", rate: "1%" }
    ],
    steals: [
      { item: "Earth Stone", rate: "55%" },
      { item: "90 Gil", rate: "10%" },
      { item: "Hi-Potion", rate: "3%" }
    ],
    poach: [
      { item: "Solid Stone", rate: "95%" },
      { item: "Solid Stone", rate: "5%" }
    ],
    abilities: ["Attack", "Fire", "Blizzard", "Thunder", "Protect", "Lunge", "Flash", "Self-Destruct"],
    notes: "No LP, EXP or Items rewarded if used Self Destruct\n\nImmobile",
  },
  {
    id: "e-576", name: "Tallow", zone: "Tomb of Raithwall",
    level: { min: 16, max: 17 }, hp: { min: 1303, max: 1317 }, mp: { min: 540, max: 560 },
    elemental: { strengths: ["Fire"], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Oil", "Disease", "Disable", "Berserk"] },
    drops: [
      { item: "Green Liquid", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Echo Herbs", rate: "5%" },
      { item: "Broadaxe", rate: "1%" }
    ],
    steals: [
      { item: "Green Liquid", rate: "55%" },
      { item: "Fire Stone", rate: "10%" },
      { item: "Hi-Potion", rate: "3%" }
    ],
    poach: [
      { item: "Green Liquid", rate: "95%" },
      { item: "Yellow Liquid", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Fire"],
    notes: "Can inflict Oil on physical attacks\n\nDrops from the ceiling when approached\n\nCan only be fought after defeating Demon Wall #1",
  },

  // Yensan Sandsea
  {
    id: "e-577", name: "Alraune", zone: "Yensan Sandsea",
    level: { min: 10, max: 11 }, hp: { min: 615, max: 627 }, mp: { min: 875, max: 878 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Succulent Fruit", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Prince\'s Kiss", rate: "1%" }
    ],
    steals: [
      { item: "Succulent Fruit", rate: "55%" },
      { item: "Handkerchief", rate: "10%" },
      { item: "Bowgun", rate: "3%" }
    ],
    poach: [
      { item: "Succulent Fruit", rate: "95%" },
      { item: "Succulent Fruit", rate: "5%" }
    ],
    abilities: ["Attack", "Ram", "Warsong"],
    notes: "-",
  },
  {
    id: "e-578", name: "Danbania", zone: "Yensan Sandsea",
    level: { min: 10, max: 13 }, hp: { min: 966, max: 999 }, mp: { min: 350, max: 362 },
    elemental: { strengths: [], weaknesses: ["Lightning"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Fish Scale", rate: "40%" },
      { item: "Water Stone", rate: "25%" },
      { item: "Echo Herbs", rate: "5%" },
      { item: "Aquara Mote", rate: "1%" }
    ],
    steals: [
      { item: "Water Stone", rate: "55%" },
      { item: "Fish Scale", rate: "10%" },
      { item: "Bacchus\'s Wine", rate: "3%" }
    ],
    poach: [
      { item: "Fish Scale", rate: "95%" },
      { item: "Argyle Armlet", rate: "5%" }
    ],
    abilities: ["Attack", "Lunge", "Water Cannon"],
    notes: "Appears docile unless provoked\n\nOften jumps out of the water\n\nUsually appear in pairs\n\nBull Danbanias are aggressive\n\nBull Danbanias Appear larger in size",
  },
  {
    id: "e-579", name: "Axebeak", zone: "Yensan Sandsea",
    level: { min: 13, max: 15 }, hp: { min: 922, max: 954 }, mp: { min: 375, max: 383 },
    elemental: { strengths: [], weaknesses: ["Water"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Doom", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Berserk"] },
    drops: [
      { item: "Small Feather", rate: "40%" },
      { item: "Fire Stone", rate: "25%" },
      { item: "Vega", rate: "5%" },
      { item: "Warp Mote", rate: "1%" }
    ],
    steals: [
      { item: "Fire Stone", rate: "55%" },
      { item: "Prince\'s Kiss", rate: "10%" },
      { item: "Dark Mote", rate: "3%" }
    ],
    poach: [
      { item: "Small Feather", rate: "95%" },
      { item: "Rainbow Egg", rate: "5%" }
    ],
    abilities: ["Attack", "Poke", "Mucus", "Purify"],
    notes: "-",
  },
  {
    id: "e-580", name: "Yensa", zone: "Yensan Sandsea",
    level: { min: 13, max: 15 }, hp: { min: 1010, max: 1032 }, mp: { min: 100, max: 108 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Stop", "Doom", "Confuse", "Reverse", "Sleep", "Silence", "Oil", "Disease", "Disable", "Immobilize", "Sap", "Slow", "Berserk"] },
    drops: [
      { item: "Earth Stone", rate: "40%" },
      { item: "Gold Needle", rate: "25%" },
      { item: "Yensa Scale", rate: "5%" },
      { item: "Dark Mote", rate: "1%" }
    ],
    steals: [
      { item: "Yensa Scale", rate: "55%" },
      { item: "Pisces Gem", rate: "10%" },
      { item: "Barbut", rate: "3%" }
    ],
    poach: [
      { item: "Yensa Scale", rate: "95%" },
      { item: "Yensa Fin", rate: "5%" }
    ],
    abilities: ["Attack"],
    notes: "Often pops out of the water\n\nCan inflict Poison on hit\n\nBull Danbania appear larger then normal",
  },

  // Zertinan Caverns
  {
    id: "e-581", name: "Wildsnake", zone: "Zertinan Caverns",
    level: { min: 3, max: 5 }, hp: { min: 210, max: 250 }, mp: { min: 40, max: 50 },
    elemental: { strengths: [], weaknesses: ["Earth"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Snake Skin", rate: "40%" },
      { item: "Wind Stone", rate: "25%" },
      { item: "Snake Skin", rate: "5%" },
      { item: "Teleport Stone", rate: "1%" }
    ],
    steals: [
      { item: "Snake Skin", rate: "55%" },
      { item: "Wind Stone", rate: "10%" },
      { item: "Leather Breastplate", rate: "3%" }
    ],
    poach: [
      { item: "Snake Skin", rate: "95%" },
      { item: "Tanned Hide", rate: "5%" }
    ],
    abilities: ["Attack", "Gnaw"],
    notes: "Only one spawns in the entire game\n\nNot visible until spawn point is approached",
  },
  {
    id: "e-582", name: "Urstrix", zone: "Zertinan Caverns",
    level: { min: 3, max: 4 }, hp: { min: 170, max: 190 }, mp: { min: 60, max: 65 },
    elemental: { strengths: [], weaknesses: ["Wind"], absorbs: [] },
    status: { immune: [], weak: ["Petrify", "Stop", "Confuse", "Reverse", "Sleep", "Blind", "Poison", "Silence", "Oil", "Disease", "Immobilise", "Slow", "Berserk"] },
    drops: [
      { item: "Large Feather", rate: "40%" },
      { item: "Earth Stone", rate: "25%" },
      { item: "Potion", rate: "5%" },
      { item: "Headguard", rate: "1%" }
    ],
    steals: [
      { item: "Earth Stone", rate: "55%" },
      { item: "Large Feather", rate: "10%" },
      { item: "Echo Herbs", rate: "3%" }
    ],
    poach: [
      { item: "Large Feather", rate: "95%" },
      { item: "Large Feather", rate: "5%" }
    ],
    abilities: ["Attack", "Protect", "Gust", "Slap"],
    notes: "Tends to approach the player whilst engaged in battle",
  },
  {
    id: "e-583", name: "Storm Elemental", zone: "Zertinan Caverns",
    level: { min: 25, max: 25 }, hp: { min: 14830, max: 14830 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Storm Magicite", rate: "40%" },
      { item: "Storm Stone", rate: "25%" },
      { item: "Feystone", rate: "5%" },
      { item: "Storm Crystal", rate: "1%" }
    ],
    steals: [
      { item: "Storm Magicite", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Storm Crysta", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Thundara", "Protect", "Shell", "Silence", "Sleep", "Anti-Magick"],
    notes: "Absorbs Lightning\n\nOnly appears in heavy rain\n\nImmune to several Technicks eg. Sight Unseeing, Achilles, Charm, Syphon",
  },
  {
    id: "e-584", name: "Mardu Entite", zone: "Zertinan Caverns",
    level: { min: 45, max: 45 }, hp: { min: 48042, max: 48042 }, mp: { min: 999, max: 999 },
    elemental: { strengths: ["Lightning"], weaknesses: ["Ice"], absorbs: [] },
    status: { immune: [], weak: ["Blind", "Immobilize"] },
    drops: [
      { item: "Storm Crystal", rate: "40%" },
      { item: "Feystone", rate: "25%" },
      { item: "Mardu Halcyon", rate: "5%" },
      { item: "Ether", rate: "1%" }
    ],
    steals: [
      { item: "Strom Crystal", rate: "55%" },
      { item: "Feystone", rate: "10%" },
      { item: "Mardu Halcyon", rate: "3%" }
    ],
    poach: [
      
    ],
    abilities: ["Thundaga", "Dispel", "Reflect", "Protect", "Shell", "Silencega", "Sleepga", "Fear"],
    notes: "Inflicts minor damage back to the attacker\n\nResistent to guns/measures\n\nAbsorbs Lightning\n\nOnly appears during Heavy rain",
  },];
