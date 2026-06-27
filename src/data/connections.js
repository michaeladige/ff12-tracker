import { enemies } from './bestiary';
import { lootItems } from './loot';
import { bazaarItems } from './bazaarItems';

// Build connections at runtime

// 1. Enemy -> Loot items (what does this enemy drop/steal?)
export function getEnemyLoot(enemyId) {
  const enemy = enemies.find(e => e.id === enemyId);
  if (!enemy) return [];
  
  const lootConnections = [];
  const allItems = [...(enemy.drops || []), ...(enemy.steals || [])];
  
  for (const item of allItems) {
    const lootItem = lootItems.find(l => l.name.toLowerCase() === item.item.toLowerCase());
    if (lootItem) {
      lootConnections.push({
        lootId: lootItem.id,
        lootName: lootItem.name,
        type: enemy.drops?.some(d => d.item === item.item) ? 'drop' : 'steal',
        rate: item.rate
      });
    }
  }
  
  return lootConnections;
}

// 2. Loot item -> Enemies (which enemies drop this?)
export function getLootEnemies(lootId) {
  const loot = lootItems.find(l => l.id === lootId);
  if (!loot) return [];
  
  const enemyConnections = [];
  
  for (const source of loot.sources || []) {
    // Parse source string like "Sleipnir (drop)" or "Multiple Enemies"
    const match = source.match(/^(.+?)\s*\((\w+)\)$/);
    if (match) {
      const enemyName = match[1].trim();
      const sourceType = match[2];
      
      // Find matching enemy
      const enemy = enemies.find(e => e.name.toLowerCase() === enemyName.toLowerCase());
      if (enemy) {
        // Find the rate from the enemy's drops/steals
        let rate = null;
        if (sourceType === 'drop' && enemy.drops) {
          const drop = enemy.drops.find(d => d.item.toLowerCase() === loot.name.toLowerCase());
          rate = drop?.rate;
        } else if (sourceType === 'steal' && enemy.steals) {
          const steal = enemy.steals.find(s => s.item.toLowerCase() === loot.name.toLowerCase());
          rate = steal?.rate;
        }
        
        enemyConnections.push({
          enemyId: enemy.id,
          enemyName: enemy.name,
          type: sourceType,
          rate
        });
      }
    }
  }
  
  return enemyConnections;
}

// 3. Loot item -> Bazaar items (what bazaar recipes use this?)
export function getLootBazaar(lootId) {
  const loot = lootItems.find(l => l.id === lootId);
  if (!loot) return [];
  
  const bazaarConnections = [];
  
  for (const bz of bazaarItems) {
    for (const ing of bz.ingredients || []) {
      // Parse ingredient like "Fine Wool x3"
      const ingName = ing.replace(/\s*x\d+$/, '').trim();
      if (ingName.toLowerCase() === loot.name.toLowerCase()) {
        bazaarConnections.push({
          bazaarId: bz.id,
          bazaarName: bz.name,
          quantity: ing
        });
      }
    }
  }
  
  return bazaarConnections;
}

// 4. Bazaar item -> Loot items (what ingredients are needed?)
export function getBazaarIngredients(bazaarId) {
  const bz = bazaarItems.find(b => b.id === bazaarId);
  if (!bz) return [];
  
  const ingredients = [];
  
  for (const ing of bz.ingredients || []) {
    // Parse ingredient like "Fine Wool x3"
    const match = ing.match(/^(.+?)(?:\s*x(\d+))?$/);
    if (match) {
      const ingName = match[1].trim();
      const quantity = match[2] ? parseInt(match[2]) : 1;
      
      // Find matching loot item
      const lootItem = lootItems.find(l => l.name.toLowerCase() === ingName.toLowerCase());
      if (lootItem) {
        ingredients.push({
          lootId: lootItem.id,
          lootName: lootItem.name,
          quantity
        });
      }
    }
  }
  
  return ingredients;
}
