import { bazaarRecipes, recipeList, magicSpells, technicks, espers } from '../data/recipes';
import ChecklistSection from './ChecklistSection';
import { FlaskConical } from 'lucide-react';

export default function RecipeBook() {
  const recipeGroups = [
    {
      title: 'Bazaar Recipes',
      items: bazaarRecipes,
      category: 'bazaar',
      searchPlaceholder: 'Search bazaar...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.effect} &middot; {item.ingredients.join(', ')}
          </span>
        </div>
      ),
    },
    {
      title: 'Synthesis Recipes',
      items: recipeList,
      category: 'recipes',
      searchPlaceholder: 'Search recipes...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.result} &middot; {item.ingredients.join(', ')} &middot; {item.location}
          </span>
        </div>
      ),
    },
    {
      title: 'Magic Spells',
      items: magicSpells,
      category: 'magic',
      searchPlaceholder: 'Search spells...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.type} &middot; MP {item.mp} &middot; {item.effect}
          </span>
        </div>
      ),
    },
    {
      title: 'Technicks',
      items: technicks,
      category: 'technicks',
      searchPlaceholder: 'Search technicks...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.effect} &middot; License: {item.license}
          </span>
        </div>
      ),
    },
    {
      title: 'Espers',
      items: espers,
      category: 'espers',
      searchPlaceholder: 'Search espers...',
      renderItem: (item) => (
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-xs text-ff-text-dim">
            {item.effect} &middot; {item.location}
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <FlaskConical size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">Recipes & Abilities</h1>
      </div>
      {recipeGroups.map((group) => (
        <ChecklistSection key={group.title} {...group} />
      ))}
    </div>
  );
}
