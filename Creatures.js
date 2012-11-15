{
    "name": "Creatures",
    "author": [
        "Kurapika"
    ],
    "summary": "The mythical creatures are taking sides and raising a war for territories. Even The Peaceful Beings, particulary Nymphs, have no choice but to take part of the war against The Celestial Alliance, The Undead Horde, The Sea Creatures, The Millennium Foxes, The Naga, The Demonologist and The Shapeshifters.",
    "sides": [
        {
            "side": "village",
            "translation": "The Peaceful Beings",
            "winmsg": "±The Peaceful Beings: HURRAY!! ~Players~ succeeded to bring back the Peace to the lands!"
        },
        {
            "side": "conspirator",
            "translation": "The Shapeshifters",
            "winmsg": "±Game: Unbelievable!! ~Players~, the shapeshifter(s), is/are the last Creature(s) standing!"
        },
        {
            "side": "celestial",
            "translation": "The Celestial Alliance",
            "winmsg": "±Game: It's a bird... It's a cloud... It's ~Players~ flying with proud, the lands and skies both belong to the Celestial Alliance now!!"
        },
        {
            "side": "foxes",
            "translation": "The Millennium Foxes",
            "winmsg": "±Game: How beautiful! How fabulous! ~Players~ won this war, the lands are now under the control of the Millennium Foxes."
        },
        {
            "side": "undead",
            "translation": "The Undead Horde",
            "winmsg": "±Game: MUHAHAHAAA!! from now on, the lands belong to the Undead Horde, led by ~Players~!"
        },
        {
            "side": "undead2",
            "translation": "The Undead Horde",
            "winmsg": "±Game: MUHAHAHAAA!! from now on, the lands belong to the Undead Horde, led by ~Players~!"
        },
        {
            "side": "sea",
            "translation": "The Sea Creatures",
            "winmsg": "±Game: And the war is over! Now both lands and waters are under the control of the Sea Creatures, led by ~Players~!"
        },
        {
            "side": "demon",
            "translation": "The Demonologist",
            "winmsg": "±Game: ~Players~ eliminated all the other creatures. ''Dead Corpses! More material for my demonic experiences! HAHA!'' Said the Demonologist while the Summoned Demon is letting a terrifying roar!"
        },
        {
            "side": "naga",
            "translation": "The Naga",
            "winmsg": "±Game: S-s-s-s-s! ~Players~ succeeded to eliminate all the treats thanks to their deadly venom..."
        }
    ],
    "roles": [
        {
            "role": "consp",
            "translation": "Shapeshifter",
            "side": "conspirator",
            "help": "You're all by yourself, but you can also use your morphing ability to join a specific side. To do so, use one of these commands: /Unicorn (Peaceful Beings: Spy with 35% evasions), /Tengu (Celestial Alliance: -10 votes and evades nightkills), /Kitsune (Millennium Foxes: Inspector, -100 voteshield and 0 vote), /Ghoul (Undead Horde: Bodyguard who evades poison) or /Hydra (Sea Creatures: 0 vote and evades kills). You can't be zombified.",
            "info": "A Conspirator who can convert itself into one of these roles: Unicorn, Tengu, Kitsune, Ghoul or Hydra. Can ally and win with any side except The Demonologist and The Naga. Evades zombification. Sided with Shapeshifters.",
            "actions": {
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
				"copy": {
					"mode": "ignore"
				},
                "night": {
                    "unicorn": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "unicorn",
                        "silent": true,
                        "restrict": [
                            "tengu",
                            "kitsune",
                            "ghoul",
                            "hydra"
                        ]
                    },
                    "tengu": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "tengu",
                        "silent": true,
                        "restrict": [
                            "unicorn",
                            "kitsune",
                            "ghoul",
                            "hydra"
                        ]
                    },
                    "kitsune": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "kitsune",
                        "silent": true,
                        "restrict": [
                            "tengu",
                            "unicorn",
                            "ghoul",
                            "hydra"
                        ]
                    },
                    "ghoul": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "ghoul",
                        "silent": true,
                        "restrict": [
                            "tengu",
                            "kitsune",
                            "unicorn",
                            "hydra"
                        ]
                    },
                    "hydra": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "hydra",
                        "silent": true,
                        "restrict": [
                            "tengu",
                            "kitsune",
                            "ghoul",
                            "unicorn"
                        ]
                    }
                }
            }
        },
        {
            "role": "possessor",
            "translation": "Doppelganger",
            "side": "conspirator",
            "help": "None knows your true nature, not even the Shapeshifter. You can't be poisoned. During the night, you can either use /inspect, but only once, or use /possess to take control of any creature's body letting their soul roam as a Lost Spirit. However, for some long to explain reasons, you can't possess Shapeshifter (Your leader), Leviathan (Sleeping) nor Summoned Demon.",
            "info": "Can either inspect (single-use) or possess a creature's body. Evades poison. Sided with The Shapeshifters.",
            "actions": {
                "poison": {
                    "mode": "ignore"
                },
                "night": {
                    "possess": {
                        "command": [
                            "copy",
                            "convert"
                        ],
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 15,
                        "newRole": "possessor2",
                        "silent": false,
                        "copyAs": "*",
                        "copymsg": "The Doppelganger took possession of a creature's body. Now, ~Target~ is nothing but a Lost Spirit!",
						"restrict": ["inspect"]
                    },
                    "inspect": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 17,
						"restrict": ["possess"]
                    }
                }
            }
        },
        {
            "role": "possessor2",
            "translation": "Lost Spirit",
            "side": "conspirator",
            "winningSides": [
                "undead",
                "undead2"
            ],
            "help": "Your body has been stolen; now you’re just a lost soul. You can use /possess to steal a creature's body but your chances to succeed are very low. Your soul has been quite damaged it will shatter in about 2 days. Being nothing but a soul makes you immune to zombies. Your vote is 0 and you have a voteshield of -10.",
            "info": "Has 2 days to live. Can possess a creature with a very little success chance. Evades zombies. Vote counts as 0. Has a voteshield of -10. Sided with The Shapeshifters, Wins with The Undead Horde.",
            "actions": {
                "initialCondition": {
                    "poison": {
                        "count": 3,
                        "poisonDeadMessage": "You couldn't bear the burden without a vessel any longer and you shattered!"
                    }
                },
                "vote": 0,
                "voteshield": -10,
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "possess": {
                        "command": [
                            "copy",
                            "convert"
                        ],
                        "target": "AnyButSelf",
                        "common": "Self",
                        "failChance": 0.8,
						"priority": 15,
                        "newRole": "possessor2",
                        "silent": false,
                        "copyAs": "*",
                        "copymsg": "A Lost Spirit took possession of a creature's body, ~Target~ is nothing but another Lost Spirit!"
                    }
                }
            }
        },
        {
            "role": "villager",
            "translation": "Nymph",
            "side": "village",
            "help": "You're a young & peaceful Nymph with no special powers. Help your side by voting the enemies during the day.",
            "info": "Sided with The Peaceful Beings."
        },
        {
            "role": "miller",
            "translation": "Naiad",
            "side": "village",
            "help": "You're just a young water Nymph, unfortunately, everyone sees you as a Siren. You receive +1 votes if you get voted for at all, and if you're lynched you become a Siren (Sea Creatures' side).",
            "info": "Reveals as Siren. Receives 1 extra vote if voted for at all. When lynched, becomes a Siren. Sided with The Peaceful Beings.",
            "actions": {
				"voteshield": 1,
                "inspect": {
                    "revealAs": "siren"
                },
                "startup": {
                    "revealAs": "villager"
                },
				"lynch": {
                    "convertTo": "siren",
                    "convertmsg": "A Naiad (water Nymph) received ~Count~ votes and was chased to the sea, now ~Self~ is a Siren."
                }
            }
        },
        {
            "role": "safeguarder",
            "translation": "Dryad",
            "side": "village",
            "help": "You're a tree Nymph. Your nature makes you immune to zombification and grants you the power to safeguard your allies using /safequard every night and /safeguard2 every 2 nights. During the day, you have a little chance to find the killers. Note that safeguard will not protect from distractors, it prevents only from poisoners, zombies, possessors, inspectors and stalkers.",
            "info": "Can safeguard every night. Can safeguard a 2nd creature once every 2 nights. Can't be zombified. Gets hax on kill during the standby. Sided with The Peaceful Beings.",
            "actions": {
                "standbyHax": {
                    "kill": {
                        "revealPlayer": 0.05
                    }
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "safeguard": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 6
                    },
                    "safeguard2": {
                        "command": "safeguard",
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 6,
                        "recharge": 2
                    }
                }
            }
        },
        {
            "role": "prettylady",
            "translation": "Oread",
            "side": "village",
            "help": "You're a mountain Nymph. You can use /distract to prevent other creatures from performing their nocturnal actions, but be sure not to paralyze an ally.",
            "info": "Can distract during the night. Sided with The Peaceful Beings.",
            "actions": {
                "night": {
                    "distract": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 2,
                        "distractmsg": "The Oread used his powers and raised a wall from ground blocking you and preventing you from doing anything!",
                        "teammsg": "You and your partners were blocked by a wall the Oread raised from the ground, you couldn't perform your ~Action~..."
                    }
                }
            }
        },
        {
            "role": "prettylady2",
            "translation": "Orestiad",
            "side": "village",
            "help": "You're an expert mountain Nymph. You can /stalk a creature to discover if they visited someone during the night, you can also use /distract to prevent creatures from performing their nocturnal actions, but be sure not to paralyze an ally. You also know Lamia and you can share your findings with them.",
            "info": "Can distract and stalk during the night. Knows Lamia. Sided with The Peaceful Beings.",
            "actions": {
                "startup": {
                    "revealRole": [
                        "vigilante"
                    ]
                },
                "night": {
                    "distract": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 2,
                        "distractmsg": "The Orestiad used his powers and raised a wall from ground blocking you and preventing you from doing anything!",
                        "teammsg": "You and your partners were blocked by a wall the Orestiad raised from the ground, you couldn't perform your ~Action~..."
                    },
                    "stalk": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 19
                    }
                }
            }
        },
        {
            "role": "bodyguard",
            "translation": "Fairy",
            "side": "village",
            "help": "You're a supernatural and friendly creature, you can use your magical powers to /protect a creature every night. You can find Pegasus during the day.",
            "info": "Can protect every night. Gets hax on expose and reveal during the day. Sided with The Peaceful Beings.",
            "actions": {
                "standbyHax": {
                    "expose": {
                        "revealPlayer": 0.75
                    }
                },
                "night": {
                    "protect": {
                        "target": "AnyButSelf",
                        "common": "Role",
                        "priority": 8
                    }
                }
            }
        },
        {
            "role": "bodyguard2",
            "translation": "Sphinx",
            "side": "village",
            "help": "You're known as the guardian of temples and sacred lands, you can use /protect to defend up to 2 creatures. You can find Human, Lycanthrope or Pegasus during the day. You have a vote of 0.5.",
            "info": "Can protect up to 2 creatures per night. Gets hax on expose and reveal during the day. Vote count as 0.5. Sided with The Peaceful Beings.",
            "actions": {
                "vote": 0.5,
                "standbyHax": {
                    "expose": {
                        "revealPlayer": 0.40
                    },
                    "howl": {
                        "revealPlayer": 0.25
                    }
                },
                "night": {
                    "protect": {
                        "target": "AnyButSelf",
                        "common": "Role",
                        "priority": 8,
                        "limit": 2
                    }
                }
            }
        },
        {
            "role": "antimayor",
            "translation": "Lycanthrope",
            "side": "village",
            "help": "You're a werewolf, your beastial nature grants you immunity to zombification and a 50% evasion to daykills. Everyone fears you while you're in this form so your vote counts as -4. You can /howl during the day (You don't need to target anyone for this command). You can use /Human in order to take your human form (+2.5 votes and 50 % daykills evasion)",
            "info": "A misunderstood creature that can't be zombified and evades daykills 50% of the time. Can convert itself into Human. Vote counts as -4. Sided with The Peaceful Beings.",
            "actions": {
                "vote": -4,
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "daykill": {
                    "mode": {
                        "evadeChance": 0.5
                    }
                },
                "night": {
                    "human": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "mayor",
                        "silent": false,
                        "initialrecharge": 2,
                        "convertmsg": "The werewolf shifted into his Human form!"
                    }
                },
                "standby": {
                    "howl": {
                        "command": "reveal",
                        "revealmsg": "Deep in the forest, the werewolf let out a fearsome howl! AWOOOOH!!"
                    }
                }
            }
        },
        {
            "role": "mayor",
            "translation": "Human",
            "side": "village",
            "help": "You're a werewolf, but now you're in your human form, you lost your day evasion but now you have a 50% resistance to poison. You still have the werewolf blood so you can't be turned into a zombie. Your vote counts as 2.5 since everyone respects you. During the day, you can type /howl (without targeting anyone). You can go back to your bestial form by using the command /Lycan",
            "info": "A werewolf that can't be zombified and evades poison 50% of the time. Can howl during the day. Vote counts as 2.5. Sided with The Peaceful Beings.",
            "actions": {
                "vote": 2.5,
                "daykill": {
                    "mode": {
                        "evadeChance": 0.5
                    }
                },
                "night": {
                    "lycan": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "antimayor",
                        "silent": false,
                        "initialrecharge": 2,
                        "convertmsg": "The werewolf shifted into his bestial form, the Lycanthrope!"
                    }
                },
                "standby": {
                    "howl": {
                        "command": "reveal",
                        "revealmsg": "Deep in the forest, the werewolf let out a fearsome howl! AWOOOOH!!"
                    }
                }
            }
        },
        {
            "role": "vigilante",
            "translation": "Lamia",
            "side": "village",
            "winningSides": [
                "naga"
            ],
            "help": "You're half a woman and half a snake. You can /poison every other night. And, Starting from the second night, you can /kill every other night. Avoid harming creatures on your side! You know Orestiad, so cooperate and share you findings with them. Also, if all of your Peaceful allies are dead, you can win with the Naga.",
            "info": "Can poison and kill every 2 nights. Knows Orestiad. Sided with The Peaceful Beings, wins with The Naga.",
            "actions": {
                "hax": {
                    "defend": {
                        "revealTeam": 0.99
                    }
                },
                "startup": {
                    "revealRole": [
                        "prettylady2"
                    ]
                },
                "night": {
                    "poison": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 14,
                        "recharge": 2
                    },
                    "kill": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 14,
                        "recharge": 2,
                        "initialrecharge": 2
                    }
                },
                "kill": {
                    "mode": {
                        "ignore": [
                            "thenaga2"
                        ]
                    },
                    "msg": "±Game: You tried to kill Lamia, but she is immune to your venom!"
                }
            }
        },
        {
            "role": "inspector",
            "translation": "Pegasus",
            "side": "village",
            "help": "You're a beautiful winged horse who was born from Medusa's blood. You're rather peaceful but you had no choice other than joining this war to protect your home. During the standby phase, use /expose to reveal a creature, you won't be revealed. You also have a single-use /inspect (inspect+stalk) that allows you to find out the real identity of a creature and even gives you details about their nightly actions, use it wisely!",
            "info": "Can expose one creature during the standby. Can also inspect, but only once. Sided with The Peaceful Beings.",
            "actions": {
                "standby": {
                    "expose": {
                        "target": "AnyButSelf",
                        "msg": "You can type /expose [name] to reveal someone's role! (You will not be revealed)",
                        "exposemsg": "While the Pegasus was flying nearby he identified ~Target~ as the ~Role~!",
						"limit": 4
                    }
                },
                "night": {
                    "inspect": {
                        "command": [
                            "inspect",
                            "stalk"
                        ],
                        "target": "AnyButSelf",
                        "common": "Self",
                        "charges": 1,
                        "priority": 20,
                        "Sight": {
                            "true": 1
                        }
                    }
                }
            }
        },
        {
            "role": "samurai",
            "translation": "Centaur",
            "side": "village",
            "help": "You're a mighty Centaur, half a man and half a horse. Your strength and speed allow you to /kill one creature during the day, you will be revealed! You also reveal anyone who kills you during the day.",
            "info": "A daykiller. Revenge-reveals daykills. Sided with The Peaceful Beings.",
            "actions": {
                "avoidStandbyHax": [
                    "kill"
                ],
                "daykill": "revealkiller",
                "daykillrevengemsg": "±Game: Before dying, ~Self~ revealed that ~Target~ is the ~Role~!",
                "standby": {
                    "kill": {
                        "target": "AnyButSelf",
                        "msg": "Type /kill [name] to defeat a creature! (You'll be revealed)",
                        "killmsg": "~Self~ draws his huge spear and charges at ~Target~ who's instantly killed! THIS IS CENTAUR!!!"
                    }
                }
            }
        },
        {
            "role": "unicorn",
            "translation": "Unicorn",
            "side": "conspirator",
            "winningSides": [
                "village"
            ],
            "help": "You took the form of the most legendary and fabulous creature, sweet! You get hax on many night actions, use that to help the Peaceful Beings. You can't be zombified, and have 35% evasion to poison, kills & daykills. You can use /Original to convert into your original form (The Shapeshifter)",
            "info": "One of the Shapeshifter's forms, under this form he has 35% evasion to poison, nightkills & daykills; Can't be zombified. Gets hax during the night on most of the actions. Sided with Shapeshifters, wins with The Peaceful Beings.",
            "actions": {
                "onlist": "consp",
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
				"copy": {
					"mode": "ignore"
				},
                "kill": {
                    "mode": {
                        "evadeChance": 0.35
                    }
                },
                "daykill": {
                    "mode": {
                        "evadeChance": 0.35
                    }
                },
                "poison": {
                    "mode": {
                        "evadeChance": 0.35
                    }
                },
                "hax": {
                    "kill": {
                        "revealTeam": 0.15,
                        "revealPlayer": 0.1
                    },
                    "poison": {
                        "revealTeam": 0.15,
                        "revealPlayer": 0.1
                    },
                    "inspect": {
                        "revealTeam": 0.1,
                        "revealPlayer": 0.07
                    },
                    "stalk": {
                        "revealTeam": 0.1,
                        "revealPlayer": 0.07
                    },
                    "bite": {
                        "revealTeam": 0.1,
                        "revealPlayer": 0.07
                    },
                    "distract": {
                        "revealTeam": 0.05,
                        "revealPlayer": 0.07
                    }
                },
                "night": {
                    "original": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "consp",
                        "silent": true
                    }
                }
            }
        },
        {
            "role": "phoenix",
            "translation": "Phoenix",
            "side": "celestial",
            "help": "You're a fabulous bird associated with the fire. You can kill separate using /blast (one single-use). You ignore distractors and protectors. You can't be zombified. Every time you're lynched, you are reborn from your ashes and you can kill again! So, taunt the others into voting you. Your vote is 0.5 and you reveal as Dragon.",
            "info": "Can kill once only outspeeding protectors and ignoring distractors. When lynched, comes back and can kill again! Can't be zombified. Vote counts as 0.5. Reveals as Dragon. Sided with The Celestial Alliance.",
            "actions": {
                "lynch": {
                    "convertTo": "phoenix",
                    "convertmsg": "The Phoenix, ~Self~, received ~Count~ votes. But, from its ashes it reborn. He then shouted, a loud and proud roar! You fools, now he is able to kill... RAAAAWWR!!"
                },
                "vote": 0.5,
                "inspect": {
                    "revealAs": "dragon"
                },
                "distract": {
                    "mode": "ignore"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "blast": {
                        "command": "kill",
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 4,
                        "broadcast": "team",
                        "charges": 1,
                        "broadcastmsg": "±Broadcast: Your leader, ~Player~ (The Phoenix), is going after ~Target~! Choose a different target!",
                        "msg": "A winged beast killed you, blazing fire was the last thing your eyes saw!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "dragon",
            "translation": "Dragon",
            "side": "celestial",
            "help": "You're a Dragon, a mighty and quite rare creature. Use /kill (shared) to defeat one creature every night. Your vote counts as -2, don't vote for your leader, the Phoenix, though! You counter any daykiller.",
            "info": "Can kill every night (shared). Counters daykills. Vote counts as -2. Sided with The Celestial Alliance.",
            "actions": {
                "vote": -2,
                "night": {
                    "kill": {
                        "target": "AnyButTeam",
                        "common": "Team",
                        "priority": 12,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: Your allies are going after ~Target~!",
                        "msg": "A shadow is on you... Wait! A creature is flying above you and... and you're dead!"
                    }
                },
                "daykill": "revenge",
                "daykillrevengemsg": "~Target~ tried to attack the Dragon. But he dodged it in an extreme speed and he countered with a fierce and huge fire ball. ~Target~ was defeated instead!",
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "griffin",
            "translation": "Griffin",
            "side": "celestial",
            "help": "You're a legendary creature, half a lion and half an eagle! Use /kill (shared) to defeat a creature and /protect to defend one of your allies. Also, since everyone admires your beauty your vote counts as 1.5, use it to lynch your leader, the Phoenix, hehe!",
            "info": "Can kill (shared). Can protect an ally. Vote counts as 1.5. Sided with The Celestial Alliance.",
            "actions": {
                "vote": 1.5,
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "kill": {
                        "target": "AnyButTeam",
                        "common": "Team",
                        "priority": 12,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: Your allies are going after ~Target~!",
                        "msg": "A shadow is on you... Wait! A creature is flying above you and... and you're dead!"
                    },
                    "protect": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 8,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Griffin, will protect ~Target~!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "harpy",
            "translation": "Harpy",
            "side": "celestial",
            "help": "You're a beautiful yet merciless winged woman. You share a /kill with Dragon and Griffin. You can also use /stalk during the night to follow a creature and either identify them (20% chances) or find out who they visited (80% chances).",
            "info": "Can kill (Shared). Can stalk a creature with a chance to inspect the target instead. Sided with The Celestial Alliance.",
            "actions": {
                "night": {
                    "kill": {
                        "target": "AnyButTeam",
                        "common": "Team",
                        "priority": 12,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: Your allies are going after ~Target~!",
                        "msg": "A shadow is on you... Wait! A creature is flying above you and... and you're dead!"
                    },
                    "stalk": {
                        "command": {
                            "stalk": 0.8,
                            "inspect": 0.2
                        },
                        "target": "AnyButTeam",
                        "common": "Team",
                        "priority": 18,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Harpy, is going to stalk ~Target~!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "tengu",
            "translation": "Tengu",
            "side": "conspirator",
            "winningSides": [
                "celestial"
            ],
            "help": "You took the form of a Japanese mythical winged-beast. Under this form you evade nightkills and your vote counts as -5. And, of course, you can't be zombified. You can use /Original to convert into your original form (The Shapeshifter)",
            "info": "One of the Shapeshifter's forms, under this form he evades nightkills and zombification. Vote counts as -5. Sided with Shapeshifters, wins with The Celestial Alliance.",
            "actions": {
                "vote": -5,
                "onlist": "consp",
                "kill": {
                    "mode": "ignore"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
				"copy": {
					"mode": "ignore"
				},
                "night": {
                    "original": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "consp",
                        "silent": true
                    }
                }
            }
        },
        {
            "role": "fox",
            "translation": "Millennium Fox",
            "side": "foxes",
            "help": "You're a fox, but not an ordinary one, since you've lived for over 1000 years you have some supernatural powers. Every night, you can identify up to 2 creatures using /inspect. You ignore zombies. Starting from the 3rd night, you can release all your 9 tails with /unleash and become a Kumiho (You can't inspect the same night you unleash your tails).",
            "info": "Can inspect 2 creatures every night. Evades zombification. During the 3rd night, can convert into a Kumiho. Sided with The Millennium Foxes.",
            "actions": {
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "inspect": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 17,
                        "limit": 2,
                        "restrict": [
                            "unleash"
                        ]
                    },
                    "unleash": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "kumiho",
                        "silent": false,
                        "convertmsg": "Oh! Great! The Millennium Fox released all his tails and is now a majestic Kumiho!",
                        "initialrecharge": 3,
                        "restrict": [
                            "inspect"
                        ]
                    }
                }
            }
        },
        {
            "role": "kumiho",
            "translation": "Kumiho",
            "side": "foxes",
            "help": "Sweet! You released all your 9 tails. Now you have the highest vote power: 42. Why exactly 42? Because 42 is the answer! Your magical powers grant you an immunity to zombification and allow you to /protect yourself during the night.",
            "info": "Can protect itself during the night. Vote counts as 42. Evades zombification. Sided with The Millennium Foxes.",
            "actions": {
                "vote": 42,
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "protect": {
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 8
                    }
                }
            },
            "winIfDeadRoles": [
                "miller",
                "vigilante",
                "samurai",
                "consp",
				"possessor",
				"possessor2",
                "phoenix",
                "griffin",
                "dragon",
                "harpy",
                "fallen",
                "vampire1",
                "vampire2",
                "kraken",
                "leviathan2",
                "siren",
                "thenaga",
                "thenaga2",
                "sdemon"
            ]
        },
        {
            "role": "kitsune",
            "translation": "Kitsune",
            "side": "conspirator",
            "winningSides": [
                "foxes"
            ],
            "help": "You took the form of a magical fox. Under this form, you /inspect a creature every night. You have a voteshield of -100, which means you can't be lynched, and your vote counts as 0. You can't be zombified. Use /Original to convert back into your original form (The Shapeshifter)",
            "info": "One of the Shapeshifter's forms, under this form he evades zombification. Vote counts as 0. Has a -100 voteshield. Sided with Shapeshifters, wins with The Millennium Foxes.",
            "actions": {
                "vote": 0,
                "voteshield": -100,
                "onlist": "consp",
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
				"copy": {
					"mode": "ignore"
				},
                "night": {
                    "inspect": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 17
                    },
                    "original": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "consp",
                        "silent": true
                    }
                }
            }
        },
        {
            "role": "fallen",
            "translation": "Fallen Angel",
            "side": "undead",
            "help": "Also called a Banshee, you joined the Undead Horde in this war! Every 2 days, during the standby, you can use /kill to take a creature's soul. You can also provide day protection to the Vampire Lord and the Zombie Lord using the command /dayprotect on them. You can't be zombified.",
            "info": "a role that can daykill every other day. Can protect Vampire Lord and Zombie Lord from daykillers. Sided with The Undead Horde.",
            "actions": {
                "onDeath": {
                    "convertRoles": {
                        "vampire2": "vampire1",
                        "zombie2": "zombie1"
                    },
                    "convertmsg": "With the Fallen Angel's death, Vampire Lord and Zombie Lord are no longer protected during the day!"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "standby": {
                    "kill": {
                        "target": "AnyButTeam",
                        "msg": "Type /kill [name] to kill a creature! (you won't be revealed)",
                        "killmsg": "The Fallen Angel appeared in front of the ~Target~ who instantly met his/her demise!",
                        "recharge": 2
                    }
                },
                "night": {
                    "dayprotect": {
                        "command": "convert",
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 5,
                        "recharge": 3,
                        "newRole": {
                            "vampire1": [
                                "vampire2"
                            ],
                            "zombie1": [
                                "zombie2"
                            ]
                        },
                        "silent": true,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Fallen Angel, is going to grant ~Target~ a day protection!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "vampire1",
            "translation": "Vampire Lord",
            "side": "undead",
            "help": "You are a night creature that feeds on life essence, essentially, blood! You can /poison a creature during the night and you share a /distract with Dhampir. You can't be nightkilled and your vote counts as 2.",
            "info": "Can distract (shared with Dhampir). Can poison (separate). Evades nightkills. Vote counts as 2. Sided with The Undead Horde.",
            "actions": {
                "vote": 2,
                "kill": {
                    "mode": "ignore"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "poison": {
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 7,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Vampire Lord, is going to poison ~Target~!"
                    },
                    "distract": {
                        "target": "AnyButTeam",
                        "common": "Team",
                        "priority": 1,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: The vampires are going to distract ~Target~!",
                        "distractmsg": "Many bats surrounded you last night! You were too distracted by their annoyance.",
                        "teammsg": "Your ally was distracted by a bunch of bats, you weren't able to perform your ~Action~ this night."
                    }
                },
                "onDeath": {
                    "convertRoles": {
                        "dhampir": "vampire1"
                    },
                    "convertmsg": "With the death of the leader of the nosferatu horde, a Dhampir replaced him and became the new Vampire Lord!'"
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "vampire2",
            "translation": "Vampire Lord",
            "side": "undead",
            "help": "You are now under the Fallen Angel's protection, you can't be daykilled! You still can /poison a creature and share a /distract with Dhampir. You  still evade nightkills and your vote counts as 2.",
            "info": "Can distract (shared with Dhampir). Can poison (separate). Evades nightkills and is protected by the Fallen Angel during the day. Vote counts as 2. Sided with The Undead Horde.",
            "actions": {
                "vote": 2,
                "daykill": "evade",
                "kill": {
                    "mode": "ignore"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "poison": {
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 7,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Vampire Lord, is going to poison ~Target~!"
                    },
                    "distract": {
                        "target": "AnyButTeam",
                        "common": "Team",
                        "priority": 1,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: The vampires are going to distract ~Target~!",
                        "distractmsg": "Many bats surrounded you last night! You were too distracted by their annoyance.",
                        "teammsg": "Your ally was distracted by a bunch of bats, you weren't able to perform your ~Action~ this night."
                    }
                },
                "onDeath": {
                    "convertRoles": {
                        "dhampir": "vampire1"
                    },
                    "convertmsg": "With the death of the leader of the nosferatu horde, a Dhampir replaced him and became the new Vampire Lord!"
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "dhampir",
            "translation": "Dhampir",
            "side": "undead",
            "help": "You're the offspring of a human and a vampire, this is why you don't need the protection of the Fallen Angel and evade daykills by yourself. You share a /distract with Vampire Lord. You can also /poison a creature, they will die after 2 nights. You become Vampire Lord when the real one dies. You reveal as a Nymph because of your humanoid shape.",
            "info": "Can distract (shared with the Vampire Lord). Can poison (separate). Evades daykills. Reveals as Nymph. Converts into Vampire Lord when Vampire Lord dies.",
            "actions": {
                "daykill": "evade",
                "inspect": {
                    "revealAs": "villager"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "poison": {
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 7,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Dhampir, is going to poison ~Target~!",
                        "count": 2
                    },
                    "distract": {
                        "target": "AnyButTeam",
                        "common": "Team",
                        "priority": 1,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: The vampires are going to distract ~Target~!",
                        "distractmsg": "Many bats surrounded you last night! You were too distracted by their annoyance.",
                        "teammsg": "Your ally was distracted by a bunch of bats, you weren't able to perform your ~Action~ this night."
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "zombie1",
            "translation": "Zombie Lord",
            "side": "undead",
            "help": "You're the master of the living-dead creatures! Use /bite to convert a creature into a zombie under your command. You have a voteshield of -1.",
            "info": "Can convert a creature into a Zombie Creature every night. Has a voteshield of -1. Sided with The Undead Horde.",
            "actions": {
                "voteshield": -1,
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "bite": {
                        "command": "convert",
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 9,
                        "newRole": "zombie3",
                        "silent": false,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Zombie Lord, is going to zombify ~Target~!",
                        "convertmsg": "A player was bitten by the Zombie Lord and became a Zombie Creature!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "zombie2",
            "translation": "Zombie Lord",
            "side": "undead",
            "help": "You're now under the Fallen Angel's protection, you can't be daykilled! You're the master of the living-dead creatures! Use /bite to convert a creature into a zombie under your control. You have a voteshield of -1.",
            "info": "Can convert a creature into a Zombie Creature every night. Has a voteshield of -1. Evades daykills thanks to the Fallen Angel's protection. Sided with The Undead Horde.",
            "actions": {
                "voteshield": -1,
                "daykill": "evade",
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "bite": {
                        "command": "convert",
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 9,
                        "newRole": "zombie3",
                        "silent": false,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: ~Player~, the Zombie Lord, is going to zombify ~Target~!",
                        "convertmsg": "A creature was attacked by the Zombie Lord and turned into a Zombie Creature!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "zombie3",
            "translation": "Zombie Creature",
            "side": "undead2",
            "winningSides": [
                "undead"
            ],
            "help": "The Zombie Lord recruited you to his horde. You too can convert a creature into a zombie with /bite (Shared with other Zombie Creatures and has a 60% fail chance). Your vote is barely useful since it counts as 0.5 but you have a voteshield of -0.5! You know other Zombie Creatures.",
            "info": "Dies after 3 days. Can convert another creature (Shared and fails 60% of the time). Vote counts as 0.5. Has a voteshield of -0.5. Sided with The Undead Horde.",
            "actions": {
                "initialCondition": {
                    "poison": {
                        "count": 4,
                        "poisonDeadMessage": "Your rotten corpse is no longer able to contain your soul! You've finally been released from your curse, R.I.P.!"
                    }
                },
                "vote": 0.5,
                "voteshield": -0.5,
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "bite": {
                        "command": "convert",
                        "target": "AnyButSelf",
                        "common": "Role",
                        "broadcast": "role",
                        "broadcastmsg": "±Broadcast: You and your partner(s) are going after ~Target~!",
                        "newRole": "zombie3",
                        "failChance": 0.6,
                        "priority": 10,
                        "silent": false,
                        "convertmsg": "A creature has been turned into a Zombie Creature!"
                    }
                },
                "startup": {
                    "revealRole": [
                        "zombie3"
                    ]
                }
            }
        },
        {
            "role": "ghoul",
            "translation": "Ghoul",
            "side": "conspirator",
            "winningSides": [
                "undead"
            ],
            "help": "You took the form of an undead creature. Under this form, you can protect up to 2 creatures, including yourself, by using the command /protect. You evade poison and zombification. You can use /Original to convert into your original form (The Shapeshifter)",
            "info": "One of the Shapeshifter's forms, under this form he evades poison & zombification and can protect a creature every night. Sided with Shapeshifters, wins with The Undead Horde.",
            "actions": {
                "onlist": "consp",
                "poison": {
                    "mode": "ignore"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
				"copy": {
					"mode": "ignore"
				},
                "night": {
                    "protect": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 8
                    },
                    "original": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "consp",
                        "silent": true
                    }
                }
            }
        },
        {
            "role": "leviathan1",
            "translation": "Leviathan (Sleeping)",
            "side": "sea",
            "help": "You're a legendary sea serpent and the lord of the seas. But, for now, you have been sealed in a magical barrier and you sleep deep in the sea. The magical veil surrounding grants you a 80% evasion to poison, nightkills and daykills. When Kraken, Hydra or a Siren dies you will be disturbed and you will awaken from your sleep! You cannot be zombified. You have a voteshield of -2 and your vote counts as 0.",
            "info": "Can't be zombified. Has a 80% evasion to nightkills, daykills and poison. Reveals as Leviathan. Vote counts as 0. Has a voteshield of -2. When Hydra, Kraken or a Siren dies he awakens and becomes Leviathan. Sided with The Sea Creatures.",
            "actions": {
                "vote": 0,
                "voteshield": -2,
				"copy": {
					"mode": "ignore"
				},
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
                "kill": {
                    "mode": {
                        "evadeChance": 0.8
                    }
                },
                "poison": {
                    "mode": {
                        "evadeChance": 0.8
                    }
                },
                "daykill": {
                    "mode": {
                        "evadeChance": 0.8
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "leviathan2",
            "translation": "Leviathan (Awakened)",
            "side": "sea",
            "help": "You have been disturbed and awakened from your deep sleep, the magical seal is no longer protecting you. Now, you can either /protect or /safeguard (but not both) someone during the night, including yourself. During the day, you can /kill a creature. You still can't be zombified.",
            "info": "Can guard (protect+safeguard) anyone. Can kill during the day. Evades zombification. Sided with The Sea Creatures.",
            "actions": {
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "protect": {
                        "restrict": [
                            "safeguard"
                        ],
                        "target": "Any",
                        "common": "Self",
                        "priority": 8
                    },
                    "safeguard": {
                        "restrict": [
                            "protect"
                        ],
                        "target": "Any",
                        "common": "Self",
                        "priority": 6
                    }
                },
                "standby": {
                    "kill": {
                        "target": "AnyButTeam",
                        "msg": "Type /kill [name] to kill a creature! (You won't be revealed!)",
                        "killmsg": "The great Leviathan raised up from the water and assaulted ~Target~ who didn't stand a chance against the lord of seas! Now ~Target~ knows exactly why the ancestors sealed the Leviathan!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "kraken",
            "translation": "Kraken",
            "side": "sea",
            "help": "You're a legendary huge sea monster, you have so many tentacles that allow you to perform multiple actions. During the night, you can use /attack and /attack2, both these 2 commands can either fail (20%), kill (40%), inspect (20%) or stalk (20%). Your multiple tentacles grant you a random vote and voteshield both varying between -2 and 5.",
            "info": "Can randomly kill, inspect, stalk or miss his target(s), twice per night. Vote randomly counts between -2 and 5. Has a random voteshield between -2 and 5. Sided with The Sea Creatures.",
            "actions": {
                "vote": [
                    -2,
                    5
                ],
                "voteshield": [
                    -2,
                    5
                ],
                "night": {
                    "attack": {
                        "command": {
                            "kill": 0.5,
                            "inspect": 0.25,
                            "stalk": 0.25
                        },
                        "failChance": 0.2,
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 16
                    },
                    "attack2": {
                        "command": {
                            "kill": 0.5,
                            "inspect": 0.25,
                            "stalk": 0.25
                        },
                        "failChance": 0.2,
                        "target": "AnyButTeam",
                        "common": "Self",
                        "priority": 16
                    }
                },
                "onDeath": {
                    "convertRoles": {
                        "leviathan1": "leviathan2"
                    },
                    "convertmsg": "The Kraken has been killed. The seas were disturbed enough and the Leviathan woke up from its sleep. Soon, you will witness his power and his revenge!"
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "siren",
            "translation": "Siren",
            "side": "sea",
            "help": "You're half a woman and half a fish. You can use /distract (Shared with the other Sirens) to distract a creature with your beautiful voice. You can also use /kill (Shared with the other Sirens) to kill a creature during the night.",
            "info": "Shares both a distract and a kill with the other Sirens. Sided with The Sea Creatures.",
            "actions": {
                "hax": {
                    "control": {
                        "revealTeam": 0.04,
                        "revealPlayer": 0.02
                    }
                },
                "night": {
                    "distract": {
                        "target": "AnyButTeam",
                        "common": "Role",
                        "priority": 3,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: The Siren(s) is/are going to distract ~Target~!",
                        "distractmsg": "A charming voice coming from the shore distracted you!",
                        "teammsg": "Your ally was distracted by a charming voice singing! You couldn't perform your ~Action~!"
                    },
                    "kill": {
                        "target": "AnyButSelf",
                        "common": "Role",
                        "priority": 13,
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: The Siren(s) is/are going to kill ~Target~!"
                    }
                },
                "onDeath": {
                    "convertRoles": {
                        "leviathan1": "leviathan2"
                    },
                    "convertmsg": "A Siren has been killed. The seas were disturbed enough and the Leviathan woke up from its sleep. Soon, you will witness his power and his revenge!"
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "hydra",
            "translation": "Hydra",
            "side": "conspirator",
            "winningSides": [
                "sea"
            ],
            "help": "You took the form of a mythological creature, the hydra. Under this form, you keep regenerating your heads, so you can only be killed by poison. You can use /safeguard on any creature once every other night. You evade zombification and your vote is 0, meaningless. You can use /Original to convert back into your original form (The Shapeshifter)",
            "info": "One of the Shapeshifter's forms, under this form he evades zombification, nightkills and daykills. Vote counts as 0. Sided with The Shapeshifters, wins with The Sea Creatures.",
            "actions": {
                "vote": 0,
                "onlist": "consp",
                "daykill": "evade",
                "kill": {
                    "mode": "ignore"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
				"copy": {
					"mode": "ignore"
				},
                "night": {
                    "safeguard": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 6,
                        "broadcast": "team",
                        "recharge": 2
                    },
                    "original": {
                        "command": "convert",
                        "target": "OnlySelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": "consp",
                        "broadcast": "team",
                        "silent": true
                    }
                },
                "onDeath": {
                    "convertRoles": {
                        "leviathan1": "leviathan2"
                    },
                    "convertmsg": "The Hydra has been killed. The seas were disturbed enough and the Leviathan woke up from its sleep. Soon, you will witness his power and his revenge!"
                }
            }
        },
        {
            "role": "demonologist",
            "translation": "Demonologist",
            "side": "demon",
            "help": "You're just a sorcerer who mastered some black magic spells, allowing you to summon a terrifying Demon. Use /control EVERY night to maintain the Summoned Demon under your magical control. You can also use /ward on yourself once every 3 nights, it's an alteration spell that grants you a total immunity to poison, kill, inspect, and stalk. Once you die, your magic powers' effects take an end, and the Summoned Demon returns to the Underworld. You also evade zombification.",
            "info": "Can protect and safeguard itself once every 3 night. Can control Summoned Demon every night. Evades zombification. When he dies, Summoned Demon dies as well. Sided with The Demonologist.",
            "actions": {
                "onDeath": {
                    "killRoles": [
                        "sdemon"
                    ],
                    "killmsg": "When the Demonologist died, there was no more magic source to keep the Summoned Demon alive. (~Target~) vanished and returned to the Underworld!"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "ward": {
                        "command": [
                            "protect",
                            "safeguard"
                        ],
                        "target": "Self",
                        "common": "Self",
                        "broadcast": "team",
                        "broadcastmsg": "±Broadcast: Your master ~Player~, the Demonologist, is going to protect himself/herself with a magical ward!",
                        "priority": 6,
                        "recharge": 4
                    },
                    "control": {
                        "command": "convert",
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 5,
                        "newRole": {
                            "sdemon": [
                                "sdemon"
                            ]
                        },
                        "silent": true
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "sdemon",
            "translation": "Summoned Demon",
            "side": "demon",
            "help": "You're an infernal demon with divine powers. You have been summoned from the Underworld by a Demonologist who mastered some unique spells. Use /kill to eliminate a creature during the day, you will be revealed, but it does not matter since NOBODY can harm you. You also have a voteshield of -9999 and your vote counts as 0. You can get hax on distractors, kill them when you can.",
            "info": "Can kill during the standby. Gets hax on distract. Evades everything (nightkills, daykills, poison, possession and zombification). Vote counts as 0. Has -9999 voteshield. Sided with The Demonologist.",
            "actions": {
                "avoidStandbyHax": [
                    "kill"
                ],
                "vote": 0,
                "voteshield": -9999,
                "initialCondition": {
                    "poison": {
                        "count": 4,
                        "poisonDeadMessage": "The Demonologist failed to keep you alive, so you returned to your world, the Underworld!"
                    }
                },
                "daykill": "evade",
                "kill": {
                    "mode": "ignore"
                },
                "poison": {
                    "mode": "ignore"
                },
				"copy": {
					"mode": "ignore"
				},
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3",
                            "possessor",
                            "possessor2"
                        ]
                    }
                },
                "safeguard": {
                    "mode": "ignore"
                },
                "hax": {
                    "distract": {
                        "revealTeam": 0.1,
                        "revealPlayer": 0.05
                    }
                },
                "standby": {
                    "kill": {
                        "target": "AnyButTeam",
                        "msg": "Type /kill [name] to slaughter a creature! (You'll be revealed but you just don't care!)",
                        "killmsg": "~Self~, The Summoned Demon, shouted a dark beam at ~Target~ who instantly died!"
                    }
                },
                "startup": "team-reveal-with-roles"
            }
        },
        {
            "role": "thenaga",
            "translation": "Naga",
            "side": "naga",
            "help": "You're a humanoid and venomous snake. You can use /kill to defeat a creature with your deadly poison. You also kill anyone who tries to distract you.",
            "info": "Can kill every night. Kills any distractors. Sided with The Naga.",
            "actions": {
                "night": {
                    "kill": {
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 11
                    }
                }
            }
        },
        {
            "role": "thenaga2",
            "translation": "Naga",
            "side": "naga",
            "help": "You're a humanoid and venomous snake. You can use /kill to defeat a creature, but if they survive they get poisoned instead (Can't be detected by spies). You evade poison and zombification, and you kill anyone who tries to distract you. Also, you don't give up easily, which is why you leave anyone who kills you to struggle with a deadly poison. You know Lamia and, since she can win with you, you can use /defend on her every other night. Your vote counts as 2.5.",
            "info": "Can kill and poison one same target (Can't be detected by spies). Can defend (safeguard + protect) another creature every other night. Kills any distractors. Revenge-poisons when killed during the night. Evades both zombification and poison. Knows Lamia. Vote counts as 2.5. Sided with The Naga.",
            "actions": {
                "vote": 2.5,
                "startup": {
                    "revealRole": [
                        "vigilante"
                    ]
                },
                "avoidHax": [
                    "kill"
                ],
                "kill": {
                    "mode": "poisonattacker",
                    "count": 1,
                    "msg": "You have won an intense fight against the Naga, but you cannot enjoy your victory because her deadly poison will kill you in about 1 day!",
                    "poisonDeadMessage": "You succumbed to Naga's deadly venom!"
                },
                "poison": {
                    "mode": "ignore"
                },
                "convert": {
                    "mode": {
                        "ignore": [
                            "zombie1",
                            "zombie2",
                            "zombie3"
                        ]
                    }
                },
                "night": {
                    "kill": {
                        "command": [
                            "kill",
                            "poison"
                        ],
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 11
                    },
                    "defend": {
                        "command": [
                            "protect",
                            "safeguard"
                        ],
                        "target": "AnyButSelf",
                        "common": "Self",
                        "priority": 6,
                        "recharge": 2
                    }
                }
            }
        }
    ],
	"roles1": [
        "inspector",
        "prettylady",
        "thenaga",
        "siren",
        "bodyguard",
        "villager",
        "miller"
    ],
    "roles2": [
        "inspector",
        "prettylady2",
        "harpy",
        "siren",
        "bodyguard",
        "miller",
        "dragon",
        "villager",
        "vampire1",
        "samurai",
        "possessor",
        "siren",
        "fallen",
        "thenaga2",
        "safeguarder",
        "phoenix",
        "vigilante"
    ],
    "roles3": [
        "inspector",
        "prettylady2",
        "harpy",
        "siren",
        "bodyguard2",
        "miller",
        "dragon",
        "villager",
        "vampire1",
        "samurai",
        "possessor",
        "siren",
        "fallen",
        "thenaga2",
        "safeguarder",
        "phoenix",
        "vigilante",
        "kraken",
        "mayor",
        "zombie1",
        "fox",
        "consp",
        "villager"
    ],
    "roles4": [
        "inspector",
        "prettylady2",
        "harpy",
        "siren",
        "bodyguard2",
        "miller",
        "dragon",
        "villager",
        "vampire1",
        "samurai",
        "possessor",
        "siren",
        "fallen",
        "thenaga2",
        "safeguarder",
        "phoenix",
        "vigilante",
        "kraken",
        "mayor",
        "zombie1",
        "fox",
        "consp",
        "demonologist",
        "sdemon",
        "griffin",
        "dhampir",
        "leviathan1",
        "villager",
        "miller",
        "dragon",
        "villager"
    ],
    "villageCantLoseRoles": [
        "mayor",
        "antimayor",
        "samurai",
        "miller",
        "vigilante"
    ],
    "lynchmsg": "±Game: ~Player~ (~Role~) has been chased away!",
    "killmsg": "±Game: ~Player~ (~Role~) has been killed!",
    "killusermsg": "±Game: Congratulations! You died...",
    "drawmsg": "The war now is over! But all the creatures died... How foolish!",
    "border": "*** = == = = === === = ==== == = = === = === == = = === = === = == = === = == == = = ***"
}