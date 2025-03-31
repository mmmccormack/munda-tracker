const ae = {
    'stubgun' : {
        'type' : 'pistol',
        'range' : {
            'short' : '0-8',
            'long' : '8-16'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '4+',
        'special' : '-',
        'cost' : 10
    },
    'autopistol' : {
        'type' : 'pistol',
        'range' : {
            'short' : '0-8',
            'long' : '8-16'
        },
        'hit' : {
            'short' : '+2',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '4+',
        'special' : '-',
        'cost' : 15
    },
    'laspistol' : {
        'type' : 'pistol',
        'range' : {
            'short' : '0-8',
            'long' : '8-16'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '2+',
        'special' : '-',
        'cost' : 15
    },
    'handflamer' : {
        'type' : 'pistol',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '5+',
        'special' : 'flamer, ammo roll, catch fire (5+)',
        'cost' : 25
    },
    'boltpistol' : {
        'type' : 'pistol',
        'range' : {
            'short' : '0-8',
            'long' : '8-16'
        },
        'hit' : {
            'short' : '+2',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '6+',
        'special' : '-',
        'cost' : 25
    },
    'plasmapistol' : {
        'type' : 'pistol',
        'range' : {
            'short' : '0-8',
            'long' : '8-16'
        },
        'hit' : {
            'short' : '+1/2',
            'long' : '-'
        },
        'strength' : '4/5',
        'damage' : '1',
        'saveMod' : '-1/2',
        'ammoRoll' : '4/6+',
        'special' : 'low/max (gets hot)',
        'cost' : 30
    },
    'needlepistol' : {
        'type' : 'pistol',
        'range' : {
            'short' : '0-8',
            'long' : '8-16'
        },
        'hit' : {
            'short' : '+2',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '6+',
        'special' : 'toxic dart, injuries, silent',
        'cost' : `${80 + 4 * Math.floor(Math.random() * 6)+ 1}`
    },
    'webpistol' : { 
        'type' : 'pistol',
        'range' : {
            'short' : '0-6',
            'long' : '6-9'
        },
        'hit' : {
            'short' : '-',
            'long' : '-1'
        },
        'strength' : '-',
        'damage' : '-',
        'saveMod' : '-',
        'ammoRoll' : '6+',
        'special' : 'web targets, solvent, capture',
        'cost' : `${120 + 4 * Math.floor(Math.random() * 6)+ 1}`
    },
    'autogun' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-12',
            'long' : '12-24'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '4+',
        'special' : '-',
        'cost' : 20
    },
    'shotgun(slug)' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-4',
            'long' : '4-18'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-1'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '4+',
        'special' : 'knock-back',
        'cost' : 20
    },
    'shotgun(scattershot)' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-4',
            'long' : '4-18'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-1'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '4+',
        'special' : 'pellets',
        'cost' : 20
    },
    'shotgun(manstopper)' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-4',
            'long' : '4-18'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '4+',
        'special' : 'knockback',
        'cost' : 15
    },
    'shotgun(hotshot)' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-4',
            'long' : '4-18'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-1'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '6+',
        'special' : 'knockback, catch fire (5+)',
        'cost' : 15
    },
    'shotgun(bolt)' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-4',
            'long' : '4-24'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '4+',
        'special' : '-',
        'cost' : 15
    },
    'huntingrifle' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-8',
            'long' : '8-32'
        },
        'hit' : {
            'short' : '-1',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '4+',
        'special' : 'critical shot',
        'cost' : 25
    },
    'lasgun' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-8',
            'long' : '8-24'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '2+',
        'special' : '-',
        'cost' : 25
    },
    'boltgun' : {
        'type' : 'basic',
        'range' : {
            'short' : '0-12',
            'long' : '12-24'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '6+',
        'special' : '-',
        'cost' : 35
    },
    'autoslugger' : {
        'type' : 'special',
        'range' : {
            'short' : '0-12',
            'long' : '12-24'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '5+',
        'special' : 'sustained fire (1)',
        'cost' : 45
    },
    'flamer' : {
        'type' : 'special',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-2',
        'ammoRoll' : '4+',
        'special' : 'flamer, ammo roll, catch fire (4+)',
        'cost' : 40
    },
    'grenadelauncher' : {
        'type' : 'special',
        'range' : {
            'short' : '0-14',
            'long' : '14-28'
        },
        'hit' : {
            'short' : '-',
            'long' : '-1'
        },
        'strength' : '-',
        'damage' : '-',
        'saveMod' : '-',
        'ammoRoll' : '6+',
        'special' : 'ammo',
        'cost' : 60
    },
    'plasmagun' : {
        'type' : 'special',
        'range' : {
            'short' : '0-8/12',
            'long' : '8/12-24'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '5/6',
        'damage' : '1',
        'saveMod' : '-2/3',
        'ammoRoll' : '4/6+',
        'special' : 'low/max, sustained fire (1), gets hot',
        'cost' : 80
    },
    'meltagun' : {
        'type' : 'special',
        'range' : {
            'short' : '0-6',
            'long' : '6-12'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '8',
        'damage' : 'D6',
        'saveMod' : '-5',
        'ammoRoll' : '4+',
        'special' : 'high impact',
        'cost' : 95
    },
    'needlerifle' : {
        'type' : 'special',
        'range' : {
            'short' : '0-16',
            'long' : '16-32'
        },
        'hit' : {
            'short' : '+1',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '6+',
        'special' : 'toxic dart, injuries, silent',
        'cost' : `${180 + 4 * Math.floor(Math.random() * 6)+ 1}`
    },
    'heavyflamer' : {
        'type' : 'heavy',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '5',
        'damage' : 'D3',
        'saveMod' : '-3',
        'ammoRoll' : '3+',
        'special' : 'flamer, ammo roll, catch fire (3+)',
        'cost' : 80
    },
    'heavystubber' : {
        'type' : 'heavy',
        'range' : {
            'short' : '0-20',
            'long' : '20-40'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '4+',
        'special' : 'sustained fire (2)',
        'cost' : 120
    },
    'heavybolter' : {
        'type' : 'heavy',
        'range' : {
            'short' : '0-20',
            'long' : '20-40'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '5',
        'damage' : 'D3',
        'saveMod' : '-2',
        'ammoRoll' : '6+',
        'special' : 'sustained fire (2)',
        'cost' : 180
    },
    'm-launcher(frag)' : {
        'type' : 'heavy',
        'range' : {
            'short' : '0-20',
            'long' : '20-72'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-2',
        'ammoRoll' : '6+',
        'special' : 'gas cloud',
        'cost' : 140
    },
    'm-launcher(krak)' : {
        'type' : 'heavy',
        'range' : {
            'short' : '0-20',
            'long' : '20-72'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '8',
        'damage' : 'D6',
        'saveMod' : '-5',
        'ammoRoll' : '6+',
        'special' : 'high impact',
        'cost' : 140
    },
    'heavyplasmagun' : {
        'type' : 'heavy',
        'range' : {
            'short' : '0-20',
            'long' : '20-40/72'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '7/8',
        'damage' : 'D3/D6',
        'saveMod' : '-4/5',
        'ammoRoll' : '4/6+',
        'special' : 'low/max, blast/gas cloud, high impact',
        'cost' : 240
    },
    'autocannon' : {
        'type' : 'heavy',
        'range' : {
            'short' : '0-20',
            'long' : '20-72'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '8',
        'damage' : 'D6',
        'saveMod' : '-5',
        'ammoRoll' : '4+',
        'special' : 'sustained fire (1), high impact',
        'cost' : 260
    },
    'lascannon' : {
        'type' : 'heavy',
        'range' : {
            'short' : '0-20',
            'long' : '20-60'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '9',
        'damage' : '2D6',
        'saveMod' : '-6',
        'ammoRoll' : '2+',
        'special' : 'high impact, terrifying force',
        'cost' : 300
    },
    'knife' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : '-',
        'cost' : 5
    },
    'flail' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user+1',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'nullify, clumsy',
        'cost' : 10
    },
    'club' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user+1',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : '-',
        'cost' : 10
    },
    'massive' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user+2',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : '2-hand, draw, m.blow',
        'cost' : 15
    },
    'sword' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'parry',
        'cost' : 15
    },
    'chainsword' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '4',
        'damage' : '1',
        'saveMod' : '-2',
        'ammoRoll' : '-',
        'special' : 'parry, noisy',
        'cost' : 25
    },
    'poweraxe' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user+3',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'dual-handed',
        'cost' : `${35 + 3 * Math.floor(Math.random() * 6)+ 1}`
    },
    'shockmaul' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '5',
        'damage' : '1',
        'saveMod' : '-2',
        'ammoRoll' : '-',
        'special' : 'out of action, injury',
        'cost' : `${35 + 3 * Math.floor(Math.random() * 6)+ 1}`
    },
    'powersword' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user+2',
        'damage' : '1',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'parry',
        'cost' : `${40 + 3 * Math.floor(Math.random() * 6)+ 1}`
    },
    'powerfist' : {
        'type' : 'hand-to-hand',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : 'user+5',
        'damage' : 'D3',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : '-',
        'cost' : `${85 + 3 * Math.floor(Math.random() * 6)+ 1}`
    },
    'smokebomb' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '-',
        'damage' : '-',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'gas cloud, smoke',
        'cost' : `${10 + 3 * Math.floor(Math.random() * 6)+ 1}`
    },
    'chokebomb' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '-',
        'damage' : '-',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'gas cloud, choke',
        'cost' : `${15 + 2 * Math.floor(Math.random() * 6)+ 1}`
    },
    'scarebomb' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '-',
        'damage' : '-',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'gas cloud, scare',
        'cost' : `${20 + 2 * Math.floor(Math.random() * 6)+ 1}`
    },
    'photonflare' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '-',
        'damage' : '-',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'blast, blind',
        'cost' : `${20 + 2 * Math.floor(Math.random() * 6)+ 1}`
    },
    'frag' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '3',
        'damage' : '1',
        'saveMod' : '-1',
        'ammoRoll' : '-',
        'special' : 'gas cloud',
        'cost' : 25
    },
    'plasma' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '5',
        'damage' : '1',
        'saveMod' : '-2',
        'ammoRoll' : '-',
        'special' : 'blast, plasma ball',
        'cost' : `${35 + 3 * Math.floor(Math.random() * 6)+ 1}`
    },
    'krak' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '6',
        'damage' : 'D6',
        'saveMod' : '-3',
        'ammoRoll' : '-',
        'special' : '-1 hit, demolition',
        'cost' : 40
    },
    'meltabomb' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '8',
        'damage' : '2D6',
        'saveMod' : '-5',
        'ammoRoll' : '-',
        'special' : 'demolition',
        'cost' : `${40 + 3 * Math.floor(Math.random() * 6)+ 1}`
    },
    'hallucbomb' : {
        'type' : 'grenade',
        'range' : {
            'short' : '-',
            'long' : '-'
        },
        'hit' : {
            'short' : '-',
            'long' : '-'
        },
        'strength' : '-',
        'damage' : '-',
        'saveMod' : '-',
        'ammoRoll' : '-',
        'special' : 'gas cloud, hallucinate',
        'cost' : `${40 + 4 * Math.floor(Math.random() * 6)+ 1}`
    },
};