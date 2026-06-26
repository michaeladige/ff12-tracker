export const bazaarItems = [
  // Potions
  { id: "bz-1", name: "Potion", category: "Potion", ingredients: ["Goblin Scrap x2"], effect: "Restore 300 HP", cost: 50 },
  { id: "bz-2", name: "Hi-Potion", category: "Potion", ingredients: ["Potion x2"], effect: "Restore 1000 HP", cost: 200 },
  { id: "bz-3", name: "Elixir", category: "Potion", ingredients: ["Hi-Potion x2"], effect: "Restore All HP", cost: 500 },
  { id: "bz-4", name: "Megalixir", category: "Potion", ingredients: ["Elixir x2"], effect: "Restore All HP/MP", cost: 5000 },
  // Ethers
  { id: "bz-5", name: "Ether", category: "Ether", ingredients: ["Eye Drops x3"], effect: "Restore 100 MP", cost: 100 },
  { id: "bz-6", name: "Hi-Ether", category: "Ether", ingredients: ["Ether x2"], effect: "Restore 300 MP", cost: 400 },
  { id: "bz-7", name: "Elixir (MP)", category: "Ether", ingredients: ["Hi-Ether x2"], effect: "Restore All MP", cost: 2000 },
  // Revive
  { id: "bz-8", name: "Phoenix Down", category: "Revive", ingredients: ["Corpse Branch x2"], effect: "Revive with 25% HP", cost: 80 },
  { id: "bz-9", name: "Phoenix Pinion", category: "Revive", ingredients: ["Phoenix Down x3"], effect: "Revive with Full HP", cost: 3000 },
  // Status
  { id: "bz-10", name: "Antidote", category: "Status", ingredients: ["Antidote Materials x2"], effect: "Cure Poison", cost: 30 },
  { id: "bz-11", name: "Eye Drops", category: "Status", ingredients: ["Eye Drops Materials x2"], effect: "Cure Blind", cost: 30 },
  { id: "bz-12", name: "Smelling Salts", category: "Status", ingredients: ["Smelling Salts Materials x2"], effect: "Cure Sleep", cost: 30 },
  { id: "bz-13", name: "Echo Herbs", category: "Status", ingredients: ["Echo Herbs Materials x2"], effect: "Cure Silence", cost: 30 },
  { id: "bz-14", name: "Remedy", category: "Status", ingredients: ["Antidote x2", "Eye Drops x2"], effect: "Cure All Status", cost: 500 },
  { id: "bz-15", name: "Gold Needle", category: "Status", ingredients: ["Gold Needle Materials x3"], effect: "Cure Petrify", cost: 300 },
  // Equipment
  { id: "bz-16", name: "Hermes Sandals", category: "Accessory", ingredients: ["Hermes Materials x5", "Gold Needle x3"], effect: "Haste", cost: 50000 },
  { id: "bz-17", name: "Ribbon", category: "Accessory", ingredients: ["Empyreal Soul x3", "Serpentarius x3"], effect: "Status Immunity", cost: 8000 },
  { id: "bz-18", name: "Genji Glove", category: "Accessory", ingredients: ["Damascus Steel x2", "Orichalcum x5"], effect: "Attack x2", cost: 25000 },
  // Weapons
  { id: "bz-19", name: "Karkata", category: "Weapon", ingredients: ["Damascus Steel x2", "Adamantite x3"], effect: "Powerful Sword", cost: 30000 },
  { id: "bz-20", name: "Masamune", category: "Weapon", ingredients: ["Orichalcum x5", "Damascus Steel x2"], effect: "Powerful Katana", cost: 18000 },
  { id: "bz-21", name: "Tournesol", category: "Weapon", ingredients: ["Gemsteel x5", "Orichalcum x5", "Damascus Steel x2"], effect: "Ultimate Sword", cost: 100000 },
  // Armor
  { id: "bz-22", name: "Genji Armor", category: "Armor", ingredients: ["Damascus Steel x2", "Orichalcum x5"], effect: "Powerful Armor", cost: 65000 },
  { id: "bz-23", name: "Grand Armor", category: "Armor", ingredients: ["Damascus Steel x2", "Adamantite x3"], effect: "Best Armor", cost: 150000 },
  // Arcana
  { id: "bz-24", name: "Arcana", category: "Magical", ingredients: ["High Arcana x1"], effect: "Rare Magical Material", cost: 10 },
  { id: "bz-25", name: "High Arcana", category: "Magical", ingredients: ["Arcana x5"], effect: "Very Rare Material", cost: 20 },
  // Motes
  { id: "bz-26", name: "Teleport Mote", category: "Mote", ingredients: ["Teleport Stone x2"], effect: "Teleport to Town", cost: 100 },
  { id: "bz-27", name: "Reflect Mote", category: "Mote", ingredients: ["Feystone x2"], effect: "Cast Reflect", cost: 500 },
  { id: "bz-28", name: "Barrier Mote", category: "Mote", ingredients: ["Feystone x2"], effect: "Cast Barrier", cost: 500 },
];

export const bazaarCategories = [
  "Potion", "Ether", "Revive", "Status", "Accessory", "Weapon", "Armor", "Magical", "Mote"
];
