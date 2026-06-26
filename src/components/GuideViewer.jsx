import { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const guideSections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Welcome to Final Fantasy XII: The Zodiac Age! This is a comprehensive guide for the remastered version. The Zodiac Age introduces several key changes:

• Speed Multipliers (x2, x4) for faster gameplay
• Map Overlay for easier navigation
• Trial Mode - 100 floor dungeon
• Trophy system replacing Sky Pirate Den
• Job-specific License Boards
• New Ultimate Weapons (Seitengrat, Gendarme)
• Auto Saves on area transitions
• No damage limit (9999+)

Recommended starting setup:
- Vaan: Shikari/Monk
- Balthier: Machinist/Uhlan
- Fran: Archer/Black Mage
- Basch: Knight/Foebreaker
- Ashe: Red Battlemage/Bushi
- Penelo: White Mage/Time Battlemage`,
  },
  {
    id: 'abilities',
    title: 'Key Abilities',
    content: `Abilities to keep in mind for endgame:

• REVERSE - Trivializes many tough encounters
• EXPOSE - Lowers enemy DEF significantly
• WITHER - Lowers enemy STR significantly
• SCATHE - Non-elemental spell that freezes charge time
• HASTE - Essential for speed
• LIBRA - Always scan enemies

Technicks:
• Steal/Poach - For rare items
• First Aid - Emergency healing
• Focus - Critical hit boost
• Numerology - x99 damage potential
• Berserk - ATK x2 but lose control`,
  },
  {
    id: 'trial-mode',
    title: 'Trial Mode',
    content: `Trial Mode - 100 Floor Challenge

Floor rewards include:
• Floor 1: Diamond Armlet (Lightning Immunity)
• Floor 5: Thief's Cuffs (Steal Rate Up)
• Floor 10: Platinum Armlet
• Floor 20: Ribbon
• Floor 30: Hermes Sandals
• Floor 50: Genji Armor Set
• Floor 70: Grand Armor
• Floor 90: Zodiac Spear
• Floor 100: Seitengrat (Ultimate Weapon)

Tips:
• Save often in Trial Mode
• You can steal from bosses for rare items
• Access from Main Menu anytime
• Complete for Bestiary completion`,
  },
  {
    id: 'hunts',
    title: 'Hunt Guide',
    content: `Notable Hunts and Rewards:

Rank 1-3:
• Rogue Tomato (Estersand) - 500 gil
• Ring Wyrm (Estersand) - 1,500 gil
• Garuda (Garamsythe) - 2,500 gil

Rank 4-6:
• Stheno (Eruyt) - 4,000 gil
• Brainpan (Salikawood) - 10,000 gil
• Carrot (Golmore) - 8,500 gil

Rank 7-10:
• Tiamat (Stilshrine) - 12,000 gil
• Fenrir (Golmore) - 15,000 gil
• Yiazmat (Ridorana) - 50,000 gil

Elite Hunts:
• Cactoid Queen - 15,000 gil
• Fafnir - 30,000 gil
• Omega - 40,000 gil
• The Undying - 60,000 gil`,
  },
  {
    id: 'sidequests',
    title: 'Side Quests',
    content: `Complete Side Quest List:

1. Deliver the Package (Estersand)
2. Forging Suntones (Rabanastre)
3. The Desert Patient (Ogir-Yensa)
4. Conversations with Ktjn (Eruyt Village)
5. Pilika's Diary (Rabanastre)
6. The Urutan Eater (Golmore Jungle)
7. Bhujerban Madhu (Bhujerba)
8. July the Streetear (Rabanastre)
9. Ring of the Toad (Garamsythe Waterway)
10. Viera Matchmaking (Eruyt Village)
11. The Windvane (Nam-Yensa)
12. Jovy's Hero (Estersand)
13. Ann and her Sisters (Rabanastre)
14. The Three Medallions (Tomb of Raithwall)
15. The Cockatrice Escape (Estersand)
16. Fishing (Various)
17. Footrace in Balfonheim
18. The Wyrm Philosopher (Golmore Jungle)
19. The Ultimate Weapons
20. Farewell to a Legend (Balfonheim)`,
  },
  {
    id: 'ultimate-weapons',
    title: 'Ultimate Weapons',
    content: `Ultimate Weapons Guide:

1. SEITENGRAT - Strongest weapon in game
   • Location: Airship (extremely rare spawn)
   • Attack: 150
   • No license required

2. ZODIAC SPEAR - Classic ultimate weapon
   • Location: Hunt Club trophies or Henne Mines
   • Attack: 75
   • License: Knight

3. GENDARME - Ultimate shield
   • Location: Pharos Lighthouse
   • Defense: 150

4. GENJI SET - Rare equipment
   • Genji Armor, Helm, Shield, Armlet
   • Location: Trial Mode and endgame

Obtaining Seitengrat:
• Requires Airship travel
• 1/10,000 spawn rate
• Can use RNG manipulation on PC`,
  },
  {
    id: 'bazaar',
    title: 'Bazaar Items',
    content: `Bazaar Crafting Guide:

Potions:
• Potion: Goblin Scrap
• Hi-Potion: Potion x2
• Elixir: Hi-Potion x2
• Megalixir: Elixir x2

Status Cures:
• Antidote: Antidote Materials
• Eye Drops: Eye Drops Materials
• Smelling Salts: Smelling Salts Materials
• Remedy: Antidote x2 + Eye Drops x2

Revival:
• Phoenix Down: Corpse Branch x2
• Phoenix Pinion: Phoenix Down x3

Special:
• Gold Needle: Gold Needle Materials x3
• Hermes Sandals: Hermes Materials x5 + Gold Needle x3
• Echo Herbs: Echo Herbs Materials x2`,
  },
  {
    id: 'trophies',
    title: 'Trophy Guide',
    content: `Trophy List:

Story Trophies:
• The Dalmascan Resistance - Complete game
• The Headhunters - Complete Prologue
• The Battle of Nalbina - Defeat Judge Ghis
• The Leviathan - Escape the Leviathan
• The Tomb of Raithwall - Defeat Judge Ghis again
• The Stilshrine - Obtain Sword of Kings
• The Pharos Lighthouse - Defeat Judge Magisters
• The Final Battle - Defeat Vayne

Challenge Trophies:
• Bestiary Master - Complete bestiary
• Trial Mode - Clear all 100 floors
• The Zodiac Age - Complete on Zodiac Age difficulty

Tips for Platinum:
1. Complete all hunts
2. Clear Trial Mode
3. Fill bestiary
4. Get all equipment
5. No missable trophies!`,
  },
];

export default function GuideViewer() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = guideSections.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen size={24} className="text-ff-gold" />
        <h1 className="text-xl font-bold">FF12 Guide</h1>
        <a
          href="https://gamefaqs.gamespot.com/ps4/191202-final-fantasy-xii-the-zodiac-age/faqs/82302"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1 text-xs text-ff-text-dim hover:text-ff-gold transition-colors"
        >
          Full Guide <ExternalLink size={12} />
        </a>
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search guide sections..."
        className="w-full bg-ff-card border border-ff-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-ff-gold/50"
      />

      <div className="space-y-2">
        {filteredSections.map((section) => (
          <div
            key={section.id}
            className="bg-ff-card rounded-xl border border-ff-border overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedSection(expandedSection === section.id ? null : section.id)
              }
              className="w-full flex items-center justify-between p-4 hover:bg-ff-card-hover transition-colors"
            >
              <span className="font-medium text-ff-gold">{section.title}</span>
              {expandedSection === section.id ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {expandedSection === section.id && (
              <div className="px-4 pb-4 border-t border-ff-border/50">
                <pre className="text-sm text-ff-text whitespace-pre-wrap font-sans mt-3 leading-relaxed">
                  {section.content}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
