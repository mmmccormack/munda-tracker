const as = {
    'Catfall' : {
        'description': `If a fighter with this skill falls then they take an Initiative test. If the test is passed then they land safely and don't suffer a hit from the fall. The fighter is also no longer restricted to jumping down from heights of no more than 3" - instead they can jump down from any height assuming they have enough movement to cover the fall.`,
        'type': 'agility',
        'roll': 1
    },
    'Dodge' : {
        'description': `A fighter with this skill receives a 6+ special save against hits from shooting or in hand-to-hand combat.`,
        'type': 'agility',
        'roll': 2
    },
    'Jump-Back' : {
        'description': `At the start of their turn the fighter may disengage from any hand-to-hand combat by jumping back. If you elect to do this then the fighter may immediately jump back up to 2" leaving any hand-to-hand opponents behind.`,
        'type': 'agility',
        'roll': 3
    },
    'Leap' : {
        'description': `The fighter may leap D6" during their movement phase in addition to their normal move if they run or charge. Note you can roll the D6 before deciding where to move but you must commit to a charge before the roll is made. If the fighter attempts to jump across a horizontal gap then the leap can be added to a jump.`,
        'type': 'agility',
        'roll': 4
    },
    'Quick-Witted' : {
        'description': `Before the first turn of the game begins, the fighter can make a special extra move, just as if it was their movement phase. So for example, the fighter can choose to run, charge, hide, go onto overwatch, etc. Note this skill cannot be used in scenarios that don't allow special deployment rules.`,
        'type': 'agility',
        'roll': 5
    },
    'Sprint' : {
        'description': `The fighter may triple their movement rate when they run or charge, rather than doubling it as normal.`,
        'type': 'agility',
        'roll': 6
    },
    'Combat-Master' : {
        'description': `Enemy fighters don't gain the usual Attack dice and Combat Score bonuses when fighting against you in a multiple combat. Instead, the Combat Master gets those bonuses.`,
        'type': 'combat',
        'roll': 1
    },
    'Disarm' : {
        'description': `The fighter may use this skill against one close combat opponent at the start of the hand-to-hand phase. The fighter must take an Initiative test. If the test is passed then they knock the opponent's weapons aside and they must fight the remainder of the turn using only a knife. It's assumed the fighter recovers their weapons in time for the next turn.`,
        'type': 'combat',
        'roll': 2
    },
    'Feint' : {
        'description': `During each hand-to-hand combat the first fumble the fighter rolls is instead treated as a critical hit. Therefore the fighter will receive a +1 bonus to their Combat Score instead of their opponent.`,
        'type': 'combat',
        'roll': 3
    },
    'Deflect' : {
        'description': `During each hand-to-hand combat the fighter can force their opponent to re-roll one of their Attack dice.`,
        'type': 'combat',
        'roll': 4
    },
    'Counter-Attack' : {
        'description': `Each hand-to-hand combat the fighter can re-roll one of their Attack dice.`,
        'type': 'combat',
        'roll': 5
    },
    'Step-Aside' : {
        'description': `The fighter receives a 4+ special save against any hits struck during hand-to-hand combat.`,
        'type': 'combat',
        'roll': 6
    },
    'Ambush' : {
        'description': `If the model goes on overwatch then they can also hide. Normally a fighter must expend their entire turn to go on overwatch, but a fighter with this skill can do both.`,
        'type': 'stealth',
        'roll': 1
    },
    'Dive' : {
        'description': `A model with this skill can run and hide in the same turn. Normally a fighter who runs cannot hide in the same turn, but a fighter with this skill can do both.`,
        'type': 'stealth',
        'roll': 2
    },
    'Escape-Artist' : {
        'description': `If the model is captured, such as from a serious injury or a bounty hunter, then the fighter will automatically escape and it is treated as a Full Recovery serious injury result instead.`,
        'type': 'stealth',
        'roll': 3
    },
    'Evade' : {
        'description': `The model ducks and weaves making him very hard to hit. Any enemy shooting from short range suffers a -2 to hit penalty, while any enemy shooting at long range suffers a -1 penalty. This penalty only applies if the fighter is not benefitting from a cover modifier.`,
        'type': 'stealth',
        'roll': 4
    },
    'Infiltration' : {
        'description': `A model with this skill can be deployed anywhere on the battlefield at the end of your first turn, though not within 8" of an enemy model.`,
        'type': 'stealth',
        'roll': 5
    },
    'Sneak-Up' : {
        'description': `If the model is targeted from overwatch and they count as a fleeting target then the shooter's Initiative characteristic is reduced to 1 when they take the Initiative test to see if they react in time.`,
        'type': 'stealth',
        'roll': 6
    },
    'Body-Slam' : {
        'description': `If the model charged that turn then they may take a Strength test at the start of the hand-to-hand phase. If the test is passed then an opponent's Weapon Skill is reduced to 1 for the duration of the turn.`,
        'type': 'muscle',
        'roll': 1
    },
    'Bulging-Biceps' : {
        'description': `The fighter's immense rippling muscles means they receive a +1 bonus to the Strength characteristic.`,
        'type': 'muscle',
        'roll': 2
    },
    'Hard-As-Nails' : {
        'description': `If the model goes out of action and the hit wasn't high impact, roll a D6. On 5+ the fighter doesn't roll for a serious injury, instead it's automatically assumed a Full Recovery result was rolled.`,
        'type': 'muscle',
        'roll': 3
    },
    'Juggernaut' : {
        'description': `If the model is running or charging and is hit by a shot from overwatch which isn't high impact, then they can take a Strength test. If the test is passed then they harmlessly shrug off the attack and won't suffer a hit, just as if they rolled a special save.`,
        'type': 'muscle',
        'roll': 4
    },
    'Hurl-Opponent' : {
        'description': `Once per turn, during the model's hand-to-hand phase, they may use this skill before or after fighting their opponent. The model must take a Strength test. If the test is passed then the opponent is thrown in a direction of your choice up to D6". The hurled model is unharmed but pinned.`,
        'type': 'muscle',
        'roll': 5
    },
    'Iron-Jaw' : {
        'description': `If a model with this skill is hit in hand-to-hand combat or shot at from within 12", reduce the Strength of each hit suffered by 1 point.`,
        'type': 'muscle',
        'roll': 6
    },
    'Berserk-Charge' : {
        'description': `If the model charged then he rolls +D3 Attack dice during any hand-to-hand combats that turn.`,
        'type': 'ferocity',
        'roll': 1
    },
    'Impetuous' : {
        'description': `Usually a fighter that is pinned, down or using a follow-up move can only move up to 2". However, a model with this skill can move up to 4" instead.`,
        'type': 'ferocity',
        'roll': 2
    },
    'Iron-Will' : {
        'description': `The model can re-roll any failed nerve tests. In addition, if the fighter's Leadership is being used for the Bottle roll then you can re-roll it if failed.`,
        'type': 'ferocity',
        'roll': 3
    },
    'Killer-Reputation' : {
        'description': `A model with this skill has such a reputation as a vicious and depraved killer that he causes fear.`,
        'type': 'ferocity',
        'roll': 4
    },
    'Nerves-of-Steel' : {
        'description': `The model can test to escape pinning early even if there are no friendly models within 2". If the fighter could already test to escape pinning early then he can re-roll the Initiative test if it is failed.`,
        'type': 'ferocity',
        'roll': 5
    },
    'True-Grit' : {
        'description': `You may choose to treat a roll of 1-2 as a flesh wound when rolling to see the extent of injuries the model suffers. If a special injury chart is used (eg needle gun) add 1 to the lowest result band in the same way.`,
        'type': 'ferocity',
        'roll': 6
    },
    'Armourer' : {
        'description': `If the model didn't go out of action last game then you ignore the first Ammo roll during a battle, just as if the gang had a Workshop.`,
        'type': 'techno',
        'roll': 1
    },
    'Fixer' : {
        'description': `If the model didn't go out of action last game and the gang is offered a rare item, then you can roll the rarity value of one item again and choose the lowest value.`,
        'type': 'techno',
        'roll': 2
    },
    'Inventor' : {
        'description': `As long as the model didn't go out of action, roll a D6 after each battle. On a roll of 6 the model has invented something! Roll an item from the Rare Trade Chart to see what he has invented.`,
        'type': 'techno',
        'roll': 3
    },
    'Medic' : {
        'description': `If the model didn't go out of action you can re-roll a result on the Serious Injury table for one fighter after the battle. This decision must be made as soon as the injury is rolled and a Medic cannot patch himself up.`,
        'type': 'techno',
        'roll': 4
    },
    'Specialist' : {
        'description': `This skill can only be taken by fighters who do not have access to special weapons. It allows the model to be armed with special weapons as well as basic weapons if they didn't already have access to them.`,
        'type': 'techno',
        'roll': 5
    },
    'Weaponsmith' : {
        'description': `A model with this skill can ignore failed Ammo rolls and weapon explosions on a D6 roll of 4+.`,
        'type': 'techno',
        'roll': 6
    },
    'Crack-Shot' : {
        'description': `If the model inflicts any damage when making a ranged attack and must make an injury roll, then the enemy model will be taken out of action on a roll of 5 or 6 instead of just a 6. When using special injury charts (eg needle guns or high impact) add 1 to the highest result band in the same way as above. Note this only applies when making the initial injury roll, not to injury rolls made in the recovery phase.`,
        'type': 'shooting',
        'roll': 1
    },
    'Fast-Shot' : {
        'description': `The model is allowed to go onto overwatch even if he moved in the same turn. However, he still cannot go onto overwatch if he ran or charged.`,
        'type': 'shooting',
        'roll': 2
    },
    'Gunfighter' : {
        'description': `The fighter is able to aim and fire a pistol from each hand. This enables him to make an extra ranged attack following the usual shooting rules if he fires two pistols. You must choose to fire the second pistol immediately after the shot from the first pistol has been resolved, or not at all.`,
        'type': 'shooting',
        'roll': 3
    },
    'Hip-Shooting' : {
        'description': `The model can shoot a pistol or basic weapon even if he ran in the same turn. However, if he does so he suffers a -1 to hit penalty when shooting a pistol, or a -2 to hit penalty when shooting a basic weapon.`,
        'type': 'shooting',
        'roll': 4
    },
    'Marksman' : {
        'description': `If the model can pass a Leadership test then he can ignore the normal restriction which obliges fighters to shoot at the nearest target that turn. Instead he can shoot at any target he can see.`,
        'type': 'shooting',
        'roll': 5
    },
    'Rapid-Fire' : {
        'description': `If the model doesn't move in his movement phase then he can re-roll any failed to hit dice when shooting. This skill can only be used when firing a pistol or basic weapon.`,
        'type': 'shooting',
        'roll': 6
    },
    'Multiple-Injuries' : {
        'description': `If the model doesn't move in his movement phase then he can re-roll any failed to hit dice when shooting. This skill can only be used when firing a pistol or basic weapon.`,
        'type': 'injury',
        'roll': [1,6]
    },
    'Infected-Wound' : {
        'description': `The fighter eventually recovers but it takes time for his agonising wounds to fully heal. The model must miss the next D3 games.`,
        'type': 'injury',
        'roll': [2,1]
    },
    'Chest-Wound' : {
        'description': `The fighter has been badly wounded in the chest. He recovers but is weakened by the injury and his Toughness characteristic is reduced by -1.`,
        'type': 'injury',
        'roll': [2,2]
    },
    'Leg-Wound' : {
        'description': `The fighter has smashed a leg. He recovers from his injuries but he can no longer move as quickly. The fighter’s Movement characteristic is reduced by -1. Randomly determine which leg has been hurt.`,
        'type': 'injury',
        'roll': [2,3]
    },
    'Arm-Wound' : {
        'description': `The fighter has smashed one of his arms. The fighter’s Strength characteristic is reduced by -1. Randomly determine which arm has been hit. Bear in mind some combat weapons use the fighter’s own Strength.`,
        'type': 'injury',
        'roll': [2,4]
    },
    'Head-Wound' : {
        'description': `A serious head injury leaves the fighter unhinged. At the start of every game roll a D6 for each Head Wound. On a 1-3 he is dazed and confused following the rules for stupidity. On a 4-6 he is enraged and uncontrollable following the rules for frenzy.`,
        'type': 'injury',
        'roll': [2,5]
    },
}