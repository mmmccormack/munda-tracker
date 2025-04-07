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
}