import { PlayHobbyId, type PlayHobby } from './PlayHobby';

export const hobbiesById: Record<PlayHobbyId, PlayHobby> = {
  [PlayHobbyId.DiscGolf]: {
    id: PlayHobbyId.DiscGolf,
    name: 'Disc Golf',
    description: "3 Aces and 1 Faux Ace. Always chasin' the next one!",
    icon: '🥏',
    content: {
      title: 'Disc Golf',
      subtitle: "3 Aces and 1 Faux Ace. Always chasin' the next one!",
      sections: [
        {
          content: [
            'This sport was invisible to me for many years. I knew that disc golf courses existed, but before I was introduced to disc golf when I was working at MasterControl I had no idea the quality and quantity of disc golf courses within driving distance.',
            'The first course I ever played was Creekside in Holliday.',
            'I was immediately hooked.',
            'That day, I looked up local courses and found a lot to pick from, so I chose Art Dye in American Fork to visit first. I drove my long commute from Cottonwood Heights back down to Utah County, stopped by Art Dye Park and went to find the disc golf course. Like magic, there it was. A huge course with 18 holes with chain catchers and everything.',
            'I was so excited about it, I called up my parents and told them I found them a new sport.',
          ],
        },
      ],
    },
  },
  [PlayHobbyId.BoardGames]: {
    id: PlayHobbyId.BoardGames,
    name: 'Board Games',
    description: 'From quick card games to epic campaigns',
    icon: '🎲',
    startedYear: 2015,
    content: {
      title: 'Board Games',
      subtitle: 'Analog gaming at its finest',
      sections: [
        {
          title: 'Current Rotation',
          content: [
            "Gloomhaven's our main campaign. Perfect mix of tactics and progression.",
            'Marvel Champions LCG for quick setup, deep strategy. Spider-Woman deck is undefeated.',
            'Mansions of Madness when we want story and surprises. The app integration actually works.',
          ],
        },
        {
          title: 'Game Night Picks',
          content: [
            'Root - Different every time. The Woodland Alliance is harder than it looks.',
            "Decrypto - Best word game nobody's heard of. Better than Codenames.",
            "Vast - Everyone's playing a completely different game. Somehow it works.",
          ],
        },
      ],
    },
  },
  [PlayHobbyId.VideoGames]: {
    id: PlayHobbyId.VideoGames,
    name: 'Video Games',
    description: 'Started with Pokémon Blue, still going strong',
    icon: '🎮',
    startedYear: 1995,
    content: {
      title: 'Video Games',
      subtitle: 'Digital worlds, real experiences',
      sections: [
        {
          title: 'The Start',
          content: [
            'First game was Pokémon Blue on GameBoy. That Blastoise cartridge started it all.',
            'Link cable trades and flashlight-under-covers sessions were peak childhood gaming.',
            'Now I play everything from indie gems to AAA titles.',
          ],
        },
        {
          title: 'Standouts',
          content: [
            'The Last of Us - Never thought a game would hit that hard emotionally.',
            'Subnautica - Terror and curiosity in perfect balance. Every dive was a new story.',
            'God of War (2018) - Kratos grew up when I did. From rage monster to dad trying his best.',
            'Outer Wilds - No game has captured pure discovery better. Zero hints, just curiosity.',
          ],
        },
        {
          title: 'Gaming Now',
          content: [
            "Playing through Baldur's Gate 3. Every choice matters, and the writing is sharp.",
            'It Takes Two with the family. Co-op done right.',
          ],
        },
      ],
    },
  },
  [PlayHobbyId.Reading]: {
    id: PlayHobbyId.Reading,
    name: 'Reading',
    description: "Wheel of Time, Game of Thrones, Hitchhiker's Guide",
    icon: '📚',
    content: {
      title: 'Reading',
      subtitle: "Wheel of Time, Game of Thrones, Hitchhiker's Guide",
      sections: [
        {
          content: [
            'I love to read.',
            "However, my mind wanders a lot, and, well... I love to let it wander. So I will often read out loud to keep myself on track. This has lead me to really love acting out the dialog and it has helped keep me anchored to the book when I'm trying to read and can't focus.",
            "It can take me a long time to get through a book. Reading out loud just takes longer. As of this writing, I've been reading Ship of Magic by Robin Hobb for over a year, and that has made for a great year of reading for me. I've never related more to so many different characters. The world building is phenomenal.",
            "I really enjoy living with a book for a long time, so it doesn't bother me that some books might take me a lot longer.",
            "Thanks to my habit of reading out loud to myself, I've found great joy in reading books to my boys every night before bed. We do this on a rotation, and every once in a while Wren will take a turn in the rotation.",
            'Oakley has long since outgrown my reading out loud and has taken off with reading on her own.',
          ],
        },
      ],
    },
  },
};
