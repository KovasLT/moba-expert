// data.js — MOBA Expert · Word Trial
// Term pool and mode configuration. Loaded before the game script.
// 101 terms drawn from the handbook — glossary entries plus the
// objective timers, lane mechanics, and composition types covered
// in the chapter bodies.

const WORDS = [

  /* ===== FUNDAMENTALS & MAP ===== */
  { w: 'MACRO', d: 'Decision-making that happens away from your own character: where to be on the map, when to take objectives, and how the five positions move together.' },
  { w: 'MICRO', d: 'Execution-level skill: last-hitting, ability combos, dodging skillshots, and positioning inside a single fight.' },
  { w: 'TRADING', d: 'Focusing damage on the enemy laner instead of on minions — taking last hits while hitting the enemy hero, so every time they step up to farm they lose health.' },
  { w: 'SPACING', d: 'Controlling the distance between you and your opponent so you can hit them while they cannot hit you. The whole skill is standing at the edge of your range.' },
  { w: 'GANK', d: 'A surprise attack on a lane, usually by the jungler or the roam, meant to create a numbers advantage and convert it into a kill or a summoner spell.' },
  { w: 'ROTATE', d: 'Moving from your assigned area to another part of the map to create or answer pressure. Doing it early is one of the strongest macro habits in the game.' },
  { w: 'FREEZE', d: 'Holding a wave just outside your own tower range so the enemy has to overextend to farm. Denies gold and makes you nearly impossible to gank.' },
  { w: 'ZONING', d: 'Using presence, threat range or skills to push the enemy out of a space without actually hitting them — most often an objective pit or a corridor.' },
  { w: 'PEEL', d: 'Using crowd control or damage to keep enemies off a teammate — usually the marksman. The opposite of engaging.' },
  { w: 'BURST', d: 'A very high amount of damage delivered in a very short window, usually meant to delete a target before they can react.' },
  { w: 'POKE', d: 'Chip damage from range that wears the enemy down before a fight starts, forcing them to recall or fight at low health.' },
  { w: 'SUSTAIN', d: 'Healing, shielding or lifesteal that lets a player stay on the map and in lane longer than their opponent.' },
  { w: 'ENGAGE', d: 'Starting a fight on your own terms — usually with hard crowd control or a dive onto the enemy backline.' },
  { w: 'FRONTLINE', d: 'The tanky members of the team who stand between the enemy and your damage dealers, absorbing cooldowns and creating space.' },
  { w: 'BACKLINE', d: 'The squishy, high-damage members of the team who position behind the frontline and deal damage from safety.' },
  { w: 'TEMPO', d: 'The pace at which a team can act. The team with the advantage here gets to choose when fights happen; the other is always reacting.' },
  { w: 'VISION', d: 'Information about enemy positions, gained through wards, hero abilities, minion waves and map awareness. Every macro decision depends on it.' },
  { w: 'OBJECTIVE', d: 'Neutral map goals worth fighting for — towers, dragons, tyrants, the enemy base. Kills only matter because they let you take these.' },
  { w: 'FARM', d: 'Collecting gold and experience from minions and jungle camps. Doing it efficiently is the most reliable advantage in the game.' },

  /* ===== ROLES ===== */
  { w: 'JUNGLER', d: 'The role that clears jungle camps instead of holding a lane, and uses that freedom to gank lanes and secure objectives.' },
  { w: 'COUNTER-JUNGLE', d: 'Invading the enemy jungle to steal their camps — denying them gold and tempo while gaining the same for yourself.' },
  { w: 'SPLIT-PUSH', d: 'Sending one player to pressure a side lane alone while the rest of the team applies pressure elsewhere, forcing the enemy to choose which threat to answer.' },
  { w: 'DIVE', d: 'Attacking an enemy underneath their own tower. High risk, high reward — it needs a clear plan for who tanks the tower and in what order.' },
  { w: 'KITE', d: 'Attacking while continuously moving — usually away from a pursuer — so you deal damage without being reached. The core mechanical skill of the marksman.' },
  { w: 'ROAM', d: 'The support role, named after the behaviour of moving between lanes to create pressure instead of staying in one place.' },

  /* ===== DRAFT & COMPOSITION ===== */
  { w: 'DRAFT', d: 'The hero selection phase before a match. A good one answers the enemy threats and gives every player a clear job.' },
  { w: 'TILT', d: 'A mental state where frustration leads to worse decisions than you are capable of. The most common reason teams lose games they should win.' },
  { w: 'WIN CONDITION', d: 'The specific way a team\u2019s five heroes beat the enemy\u2019s five heroes — the player, pairing or objective that, if secured, wins the game.' },
  { w: 'SMITE', d: 'A summoner spell that deals a large amount of true damage to a monster in a single instant. Objective contests come down to who lands it first.' },
  { w: 'FOG OF WAR', d: 'The parts of the map your team cannot currently see. A player inside it is someone the enemy has to guess about, and guessing costs attention.' },
  { w: 'BAITING', d: 'Offering the enemy something they want — a kill, a wave, an objective — so they commit to taking it and walk into a position where you can punish them.' },
  { w: 'MIRRORING', d: 'Matching the movement and pacing of another player — an opponent, to deny them a numbers advantage, or an ally, to move as a single unit.' },
  { w: 'PROXING', d: 'Walking behind the enemy tower to kill the minion wave before it reaches your own, forcing the enemy laner to choose between farming and stopping you.' },
  { w: 'AMBUSHING', d: 'Leaving something the enemy wants — a wave, an objective, a low-health teammate — waiting for them to commit, then killing them in seconds with the whole team.' },
  { w: 'BACKDOORING', d: 'Sneaking into the enemy base and attacking their structures without pushing the lane first. The enemy cannot defend two things at once.' },
  { w: 'UNIVERSAL PICK', d: 'A hero who can be played in two or more roles, and whose role the enemy cannot place until the draft is finished — so they cannot counter it.' },
  { w: 'FLEXIBLE PICK', d: 'A hero who adapts well to different situations, builds or playstyles, but who still plays a single role.' },

  /* ===== STAFF ===== */
  { w: 'COACH', d: 'The out-of-game role responsible for preparation and improvement between matches: draft plans, VOD review, practice schedules.' },
  { w: 'CAPTAIN', d: 'The team\u2019s anchor in the group — settles disputes, holds the standard, and represents the roster. Not the same thing as the IGL.' },
  { w: 'MANAGER', d: 'The out-of-game role responsible for logistics: schedules, scrims, roster changes, sign-ups, and admin.' },
  { w: 'ANALYST', d: 'The out-of-game role that turns matches into numbers and patterns. The team\u2019s memory — so the team stops relearning the same lesson.' },

  /* ===== GLOSSARY ADDITIONS ===== */
  { w: 'INVADE', d: 'Entering the enemy jungle during the opening to steal a camp, deny the enemy jungler their power spike, and gain a tempo lead.' },
  { w: 'COUNTER-PICK', d: 'A hero chosen specifically to beat an enemy hero already revealed in the draft. Strongest in the last two picks, where it cannot be answered.' },
  { w: 'SYNERGY', d: 'The extra winrate two heroes generate when played on the same team — above and beyond what each of them wins alone.' },
  { w: 'WAVE MANAGEMENT', d: 'Controlling where and when a minion wave meets so that you decide the pace of the lane — pushing, freezing, or slow-pushing to set up a play.' },
  { w: 'POWER SPIKE', d: 'A moment where a hero becomes significantly stronger — a key item, a level, or an ultimate unlock. Fight around yours and avoid the enemy\u2019s.' },
  { w: 'CC', d: 'Any effect that limits an enemy\u2019s actions: stuns, knock-ups, slows, silences. A chain of them creates the window where a kill becomes unavoidable.' },
  { w: 'IGL', d: 'The player who makes live calls during a match — when to fight, when to retreat, and which objective is next. One clear voice beats five opinions.' },
  { w: 'PARALLEL TRADING', d: 'Positioning alongside a teammate so both of you focus the same target at the same time — more damage, and much harder to punish than trading alone.' },
  { w: 'KITING', d: 'The marksman\u2019s core mechanic: auto-attack, step, auto-attack, step, always at the edge of your range so a pursuing assassin can never quite reach you.' },

  /* ===== OBJECTIVE TIMERS & RIVER ===== */
  { w: 'TYRANT', d: 'A river objective that grants a team-wide combat buff. A hard timing at 4:00, one of the three objectives the whole team must be grouped for.' },
  { w: 'OVERLORD', d: 'A river objective that spawns powerful Vanguards on every lane, which then push towers. A hard timing at 4:00, alongside the Tyrant.' },
  { w: 'SHADOW TYRANT', d: 'The upgraded Tyrant that spawns at 10:00, granting chain-lightning on attacks plus bonus movement speed. A hard timing the whole team must be ready for.' },
  { w: 'SHADOW OVERLORD', d: 'The upgraded Overlord that spawns at 10:00, granting the killer an active summon skill that calls a Shadow Vanguard down any lane of their choice.' },
  { w: 'TEMPEST DRAGON', d: 'The late-game objective that spawns at 20:00, granting a regenerating shield, a true-damage aura, and Vanguards that freeze towers. The objective that ends games.' },
  { w: 'PRIMAL BOND', d: 'A penalty mechanic that reduces your damage to one river pit for 90 seconds after you take the other. Exists to stop one team from chaining both objectives in one rotation.' },
  { w: 'HARD TIMING', d: 'An objective timer the whole team must be grouped and warded for in advance — 4:00, 10:00, and 20:00 in the current patch. Everything else on the objective chain is flexible.' },
  { w: 'TELEPORT SPRITE', d: 'A river creature that spawns around 1:20 and grants the killer a teleport summoner spell, letting them rotate across the map. Securing it is one of the strongest early plays a clash laner can make.' },
  { w: 'STEAL', d: 'Taking an objective from the enemy team at the last moment by out-damaging their Smite or CCing their jungler before they can cast it. High risk, high reward.' },
  { w: 'STALL', d: 'Keeping the enemy busy at an objective without committing to a fight, so the rest of your team can trade pressure somewhere else on the map.' },
  { w: 'COUNTER-INVADE', d: 'Invading the opposite side of the enemy jungle to trade for a camp they stole from you. The correct response when defending is not possible.' },

  /* ===== LANE MECHANICS ===== */
  { w: 'SLOW PUSH', d: 'Pushing a wave slowly so a large group of friendly minions builds up — a wave that can dive a tower or force the enemy laner to choose between farming and rotating.' },
  { w: 'WAVE CLEAR', d: 'The speed at which a hero can kill an entire minion wave. Fast wave clear is what lets a mid laner rotate first, and it is why mages are the standard mid pick.' },
  { w: 'RECALL', d: 'Returning to base to heal and buy items. A well-timed recall resets the lane; a badly-timed one gives the enemy a free wave and a free tower plate.' },
  { w: 'LANE PRIORITY', d: 'The ability of a laner to leave their wave and rotate without losing farm. Priority is the permission slip for every aggressive play on the map — an invade, a rotation, a gank.' },
  { w: 'LANE SWAP', d: 'A draft or opening tactic where two players trade lanes to avoid a losing matchup. It wins the matchup but costs you the natural vision pattern.' },
  { w: 'FAST CLASH START', d: 'An opening where the clash laner opens mid for a free push, then rotates to their own lane on the first rotation window.' },

  /* ===== PSYCHOLOGY & DECEPTION ===== */
  { w: 'FLANK', d: 'Arriving at a fight from an angle the enemy is not facing — usually the side or rear. A flank turns a losing fight into a winnable one.' },
  { w: 'FLANKER', d: 'A hero or player whose role is to arrive at fights from an angle the enemy cannot see, hunting the backline. The jungler is the most natural flanker in the game.' },
  { w: 'FEINT', d: 'Showing the enemy one thing — a dive, an objective, a rotation — and then doing something else entirely. The enemy reacts to the thing you showed them.' },
  { w: 'FAKE RETREAT', d: 'Retreating not to escape but to bait the enemy into chasing, then turning to fight when they have committed past the point where they can safely disengage.' },
  { w: 'LOW-HEALTH BAIT', d: 'Standing at low health in a lane to lure the enemy into committing to a kill you are prepared to punish. Only safe if you know where their jungler is.' },
  { w: 'COOLDOWN TRACKING', d: 'Knowing when the enemy key abilities and summoner spells are on cooldown, so you know when the window to fight is actually open.' },
  { w: 'ATTENTION', d: 'The limited focus a player has for the map. Every psychological play is a trade of enemy attention for your freedom to act somewhere else.' },

  /* ===== META & GAME PHASES ===== */
  { w: 'META', d: 'The current dominant strategy at the top of the ladder. It shifts every patch, which is why tier lists have a short shelf life.' },
  { w: 'TIER LIST', d: 'A ranking of heroes by strength on the current patch. Useful as a starting point, but always wrong within a month of being written.' },
  { w: 'PATCH', d: 'An update to the game that changes heroes, items, or rules. Every patch shifts the meta, and the strongest pick of last patch can become a joke on the next.' },
  { w: 'SCALING', d: 'How much a hero improves as the game goes on. A scaling comp wants to reach late game; an early-game comp does not.' },
  { w: 'EARLY GAME', d: 'The opening phase of a match, usually the first ten minutes. Tempo and invades decide this phase, and it belongs to whoever wins the first fight.' },
  { w: 'MID GAME', d: 'The phase between the opening and the late game, usually 10\u201320 minutes. The most common power spike window, and the phase most fights are fought in.' },
  { w: 'LATE GAME', d: 'The final phase of a match, usually after 20 minutes. Scaling heroes come online, Tempest Dragon spawns, and one fight can end the game.' },

  /* ===== TEAM STRUCTURE ===== */
  { w: 'ROSTER', d: 'The full set of players on a team, including substitutes. Managing it is one of the coach\u2019s hardest and most important jobs.' },
  { w: 'SCRIM', d: 'A practice match between two teams, played outside of official competition. Scrims are where drafts and plays are tested.' },
  { w: 'VOD', d: 'A recording of a game used for review. The coach and analyst watch these to find the repeated mistakes the players cannot see from inside the game.' },

  /* ===== MAP & VISION ===== */
  { w: 'WARD', d: 'A placed item that grants vision over an area for a limited time. The building block of all map information, and the reason vision control decides where fights happen.' },
  { w: 'CONTROL WARD', d: 'A ward that also reveals and disables enemy wards in its radius. Used to secure vision or deny it, and often the difference between a clean objective and a stolen one.' },
  { w: 'VISION CONTROL', d: 'The deliberate fight for who can see what on the map. The team with better vision control chooses where fights happen — the team without it is always reacting.' },
  { w: 'CHOKE POINT', d: 'A narrow part of the map that limits how many players can pass through at once. Good for ambushes, defensive stands, and forcing fights on your terms.' },

  /* ===== COMPOSITIONS ===== */
  { w: 'COMPOSITION', d: 'A pattern of five heroes that work together because they all serve the same plan. The five classic compositions are dive, poke, pick, teamfight, and split-push.' },
  { w: 'DIVE COMP', d: 'A team composition built around engaging the enemy backline with hard crowd control and follow-up burst. Wins mid-game; weak after 25 minutes if the game is not already over.' },
  { w: 'POKE COMP', d: 'A team composition built around long-range damage that wears the enemy down before any real fight. Wins by attrition; loses to hard engage.' },
  { w: 'PICK COMP', d: 'A team composition built around finding one enemy alone and killing them before their team can help. Wins around vision control and objective timers.' },
  { w: 'TEAMFIGHT COMP', d: 'A team composition built around area damage and crowd control, forcing a 5v5 on your terms. The classic mid-game composition.' },
  { w: 'SPLIT-PUSH COMP', d: 'A team composition built around one hero pressuring a side lane alone while the other four hold the map. Wins by dividing the enemy team.' },

  /* ===== ITEMS, SPELLS, STATUS ===== */
  { w: 'ANTIHEAL', d: 'An item or effect that reduces enemy healing. Almost always the mage\u2019s job to build when the enemy team has multiple sustain threats.' },
  { w: 'SUMMONER SPELL', d: 'A non-hero ability every player chooses before the game, like Flash or Smite. Two choices per player, and the choice is part of the draft.' },
  { w: 'FLASH', d: 'The universal summoner spell that teleports the hero a short distance. The most important cooldown to track — an enemy without Flash is gankable.' },
  { w: 'EXECUTE', d: 'A skill designed to deal extra damage to a low-health target. The finishing tool of an assassin or a marksman against a running enemy.' },
  { w: 'SHIELD', d: 'A temporary health buffer that absorbs incoming damage. The counter to burst, and the reason sustained damage matters against shield-heavy teams.' },
  { w: 'TANK', d: 'A hero built to absorb damage and control space rather than deal it. Tanks are safe first picks because there is rarely a hero who completely shuts them down.' },
  { w: 'PICK', d: 'A term with two meanings: the hero chosen in a draft, and a kill on an enemy who was out of position and alone. A pick comp wins by converting the second meaning.' },

  /* ===== COMBAT & EXECUTION ===== */
  { w: 'HARASS', d: 'Small, repeated damage in lane that costs the enemy health without committing to a kill. Harass is how a farm lead becomes a lane you control.' },
  { w: 'ALL-IN', d: 'Committing every cooldown and every summoner spell to a fight you intend to win outright. A failed all-in leaves you with nothing left to retreat with.' },
  { w: 'SKILLSHOT', d: 'An ability aimed at a position instead of locked onto a target. Landing yours is skill; making the enemy miss theirs is spacing.' },
  { w: 'JUKING', d: 'Moving unpredictably so an incoming skillshot misses. The cheapest form of outplay \u2014 you win the exchange without spending a cooldown.' },
  { w: 'OUTPLAY', d: 'Winning a fight you should have lost by using your kit better than the enemy used theirs. The reason people watch this game instead of playing it.' },
  { w: 'BODYBLOCK', d: 'Standing in the path of a skillshot or a chasing enemy to protect a teammate. Invisible, unrewarded, and the mark of a good frontline.' },
  { w: 'FOCUS FIRE', d: 'Every player hitting the same target in the same window. Damage spread across five heroes removes nobody; damage stacked on one removes them instantly.' },
  { w: 'TARGET PRIORITY', d: 'Knowing which enemy to hit first in a fight \u2014 usually whoever is the biggest threat and the easiest to reach. Those two are rarely the same hero.' },
  { w: 'AOE', d: 'Area of effect: damage or crowd control that hits everything inside a zone rather than one target. The reason teams do not stand close together against a mage.' },
  { w: 'COMBO', d: 'A fixed sequence of abilities that only works in order \u2014 stun, then burst, then execute. Missing the first link means the rest do nothing.' },
  { w: 'DOT', d: 'Damage over time: a debuff that keeps ticking health away after the hit lands. The natural counter to shields, and to heroes who want to recall.' },
  { w: 'CLEANSE', d: 'An effect that removes crowd control from yourself or a teammate. The one button that undoes an engage, which is exactly why it has to be tracked.' },
  { w: 'IMMUNITY', d: 'A short window where a hero cannot be targeted or damaged. Usually the last line of defence for a carry \u2014 and always worth baiting out before you commit.' },
  { w: 'DISENGAGE', d: 'Leaving a fight on purpose, in order, without losing anyone. The skill that separates teams who win one fight from teams who win the next one too.' },
  { w: 'OVEREXTEND', d: 'Standing further forward than your team or your vision can protect. Most deaths are not outplays \u2014 they are overextensions.' },
  { w: 'PINCER', d: 'Two groups closing on the enemy from opposite directions so there is no safe way to retreat. The team-fight version of a flank.' },
  { w: 'CHASE', d: 'Running down a retreating enemy. Worth it only when the kill is already guaranteed \u2014 otherwise it is how a winning fight becomes a losing one.' },
  { w: 'POSITIONING', d: 'Standing where you can deal damage and not take any. Every other combat skill is built on top of this one.' },

  /* ===== HERO CLASSES ===== */
  { w: 'MARKSMAN', d: 'The ranged, sustained-damage class that wins fights by staying alive longest, not by hitting hardest in one moment. Helpless alone, unstoppable behind a frontline.' },
  { w: 'MAGE', d: 'The ranged class built around area damage and crowd control. The standard mid pick because fast wave clear is what buys the first rotation.' },
  { w: 'ASSASSIN', d: 'The class built to delete one target and leave. Dominant in the mid game, and close to useless the moment the enemy groups and buys a defensive item.' },
  { w: 'SUPPORT', d: 'The class of heroes that enable rather than carry \u2014 vision, peel, engage, and the cooldowns nobody notices until they are missing.' },
  { w: 'BRUISER', d: 'Half tank, half damage: durable enough to dive, threatening enough to be worth diving. The most forgiving class to learn the game on.' },
  { w: 'CARRY', d: 'The player or hero the team funnels gold and protection into, because if they survive the fight, the fight is won.' },
  { w: 'HYPERCARRY', d: 'A carry who is weak for twenty minutes and then wins the game alone. Picking one is a promise to survive until then.' },

  /* ===== LANE MECHANICS II ===== */
  { w: 'LAST HIT', d: 'Landing the killing blow on a minion so the gold goes to you. The most basic skill in the game, and the first one players stop practising.' },
  { w: 'DENY', d: 'Preventing the enemy from collecting a minion\u2019s gold or experience \u2014 by freezing, by zoning, or by shoving a wave under their tower at the wrong moment for them.' },
  { w: 'MINION AGGRO', d: 'Minions attacking whatever is closest to them. Trading inside a big enemy wave means the wave hits back, which is why the bigger wave wins the trade.' },
  { w: 'WAVE CRASH', d: 'Pushing a wave all the way into the enemy tower so it dies there. The lane resets and you get a free window to recall or rotate.' },
  { w: 'BOUNCE', d: 'Letting a wave crash so it comes back toward you. A bounced wave is the safest farm in the game, and the setup for a freeze.' },
  { w: 'LEVEL ADVANTAGE', d: 'Being a level up on your lane opponent, usually from a wave you crashed and they did not. In the early game one level is worth more than one item.' },
  { w: 'TOWER PLATE', d: 'The temporary armour on a tower that expires at a set time. Plates are why early rotations pay, and why losing lane slowly still costs you something.' },
  { w: 'SIEGE', d: 'Pushing a wave into a tower with enough damage to take it down. Slow, safe and boring \u2014 which is precisely why teams lose to it.' },

  /* ===== JUNGLE & OBJECTIVE PLAY ===== */
  { w: 'JUNGLE CLEAR', d: 'The route a jungler takes through their camps at the start of the game. The route decides which lane gets the first gank, and therefore which lane gets to play.' },
  { w: 'COUNTER-GANK', d: 'Arriving at a lane at the same moment the enemy jungler does. Turns their gank into a 3v2, and is the single most valuable read a jungler can make.' },
  { w: 'OBJECTIVE SECURE', d: 'Killing an objective with your own damage before the enemy can contest \u2014 usually Smite and burst stacked into the same second.' },
  { w: 'CONTEST', d: 'Fighting over an objective instead of letting one team take it for free. Contesting from a numbers disadvantage is how objectives get stolen.' },
  { w: 'PIT', d: 'The river arena where Tyrant, Overlord and the late objectives spawn. Fighting in a pit means fighting with your back to a wall.' },
  { w: 'RIVER', d: 'The channel that splits the map and holds the objective pits. Control of the river is control of the game\u2019s tempo.' },
  { w: 'VISION DENIAL', d: 'Removing or blocking enemy wards so they cannot see what you are doing. The other half of vision control, and the half players forget.' },
  { w: 'SWEEPER', d: 'A tool that reveals and destroys enemy wards in an area. You buy it to make the enemy blind, not to find a ward.' },

  /* ===== DRAFT & MATCHUP ===== */
  { w: 'BAN', d: 'Removing a hero from the pool before picks begin. A ban is a statement about what you are afraid of, and it should never be spent on a hero you could simply counter.' },
  { w: 'BLIND PICK', d: 'Picking a hero before the enemy has revealed their answer, so you cannot be countered on purpose. Safe only on a hero with no hard counter.' },
  { w: 'LAST PICK', d: 'The final pick of the draft, made after the enemy team is fully revealed. The most valuable pick in the game, and usually saved for the counter.' },
  { w: 'HARD COUNTER', d: 'A hero whose kit beats another hero\u2019s kit regardless of skill. Worth roughly a full item in lane, and the reason draft order matters.' },
  { w: 'MATCHUP', d: 'The hero-versus-hero dynamic in a lane: who wins the trades, who wins the wave, who wins at level one. A draft is just a stack of matchups.' },
  { w: 'OFF-META', d: 'A pick or strategy outside the current dominant pool. It wins by surprise once, and loses the moment the enemy has seen it before.' },
  { w: 'ONE-TRICK', d: 'A player who plays a single hero at a very high level and little else. Predictable in draft, and genuinely dangerous anyway.' },
  { w: 'COMFORT PICK', d: 'A hero a player has played a thousand times, taken over a theoretically stronger one. Below the top level, familiarity beats the tier list every time.' },

  /* ===== MACRO & TEAM PLAY ===== */
  { w: 'SHOT CALL', d: 'A single decision announced and then followed by all five players. The call does not have to be perfect \u2014 it has to be shared.' },
  { w: 'COMMS', d: 'The voice channel where information moves. Good comms are short, factual and forward-looking: where the enemy is, and what we do next.' },
  { w: 'MAP AWARENESS', d: 'Knowing where everyone is on the map without being told. The cheapest skill in the game and the one that wins the most fights.' },
  { w: 'NUMBER ADVANTAGE', d: 'Having more players at a fight than the enemy does. Almost every macro decision is an attempt to create one.' },
  { w: 'COLLAPSE', d: 'Converging on one target or one area from several directions at once. The team-wide version of focus fire.' },
  { w: 'REGROUP', d: 'Stopping, resetting and getting all five players back together after a fight or a lost objective. The five seconds that prevent the next loss.' },
  { w: 'PRESSURE', d: 'Forcing the enemy to respond to something, so they cannot do what they want. Pressure is not the same as fighting, and it is often better.' },
  { w: 'OBJECTIVE TRADE', d: 'Giving up one objective to take another elsewhere on the map. Correct whenever you cannot contest, and the mark of a team that is thinking instead of reacting.' },
  { w: 'BASE RACE', d: 'Both teams hitting each other\u2019s structures with no time left to defend. Decided by who planned it first, not by who fights better.' },
  { w: 'CROSS-MAP', d: 'Playing on the opposite side of the map from the enemy\u2019s strength \u2014 taking a tower while they take a dragon.' },
  { w: 'RESET', d: 'Recalling, healing and re-entering the map as a group. A reset is not downtime; it is the preparation for the next fight.' },

  /* ===== ECONOMY & MOMENTUM ===== */
  { w: 'SNOWBALL', d: 'Turning a small early lead into a bigger one, then a bigger one, by never letting the enemy take a fair fight. Leads do not grow on their own \u2014 they are spent.' },
  { w: 'GOLD LEAD', d: 'The difference in total gold between two teams. Meaningful only once it is converted into objectives; an unspent lead is just a number.' },
  { w: 'ECONOMY', d: 'The total gold and experience a team generates from waves, camps and objectives. Winning the economy quietly is how most games are actually won.' },
  { w: 'ITEM TIMING', d: 'The moment a hero finishes a key item and is briefly stronger than everyone else on the map. Force the fight now, before the enemy finishes theirs.' },
  { w: 'COMEBACK', d: 'Winning from behind by taking one fight or one objective at the right moment. Comebacks are not luck \u2014 they are the enemy failing to close the game.' },
  { w: 'ITEM BUILD', d: 'The sequence of items a hero buys, chosen for the enemy team rather than copied from a guide. The right build answers what is actually killing you.' },

  /* ===== MENTAL & CULTURE ===== */
  { w: 'MORALE', d: 'The team\u2019s shared belief that the game is still winnable. It drains faster than any health bar, and one good fight refills it.' },
  { w: 'CLUTCH', d: 'Making a difficult play correctly at the exact moment it matters. Not the same as being good \u2014 clutch is being good while the pressure is on.' },
  { w: 'CHOKE', d: 'Failing a play you can normally make because the stakes got high. The fix is routine, not talent.' },
  { w: 'SCOUTING', d: 'Studying an opponent before you play them \u2014 their draft tendencies, their first-clear route, their captain\u2019s calling style.' },
  { w: 'REVIEW', d: 'Watching a game back to find the mistake that repeated. The difference between a team that improves and a team that simply plays a lot.' },
  { w: 'PING', d: 'A map marker that communicates without voice. In a game decided by attention, a ping is the cheapest way to move four people at once.' },
  { w: 'BURNOUT', d: 'Losing the ability to care about the game after playing too much of it. The most common way a promising roster quietly falls apart.' }
];

const MODES = {
  scramble: {
    label: 'Scramble',
    icon: '\u21C4',
    tagline: 'Unscramble the term from its definition.',
    rules: [
      'Read the definition, then tap the letter tiles in the order that spells the term.',
      'One wrong arrangement costs a life — lives start at five.',
      'Each hint places the next correct letter for 30 points.'
    ],
    base: 100
  },
  letters: {
    label: 'Guess the Letters',
    icon: '\u25A2',
    tagline: 'Reveal the term one letter at a time.',
    rules: [
      'Click the on-screen keys or type on your keyboard to reveal letters.',
      'Six wrong letters and the round is lost.',
      'Each hint reveals a random letter for 30 points.'
    ],
    base: 120
  },
  quiz: {
    label: 'Question & Answer',
    icon: '?',
    tagline: 'Pick the term that matches the definition.',
    rules: [
      'Four terms, one correct answer — choose carefully.',
      'One wrong pick costs a life.',
      'Each hint eliminates two wrong options for 30 points.'
    ],
    base: 100
  },
  crossword: {
    label: 'Word Search',
    icon: '\u25A6',
    tagline: 'Find every term in the grid, then read the pass code.',
    rules: [
      'Drag across adjacent cells to spell each listed term. Bends are allowed.',
      'Each correct drag crosses the term off the list.',
      'When every term is found, the remaining letters spell a pass code.',
      'Type the pass code to complete the puzzle.'
    ],
    base: 1000
  }
};
