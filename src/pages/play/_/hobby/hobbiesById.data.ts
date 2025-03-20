import { PlayHobbyId, type PlayHobby } from './PlayHobby';

export const hobbiesById: Record<PlayHobbyId, PlayHobby> = {
  [PlayHobbyId.DiscGolf]: {
    id: PlayHobbyId.DiscGolf,
    name: 'Disc Golf',
    description: 'Chains and Chill',
    icon: '🥏',
    sections: [
      {
        title: 'Falling in Love with a Sport',
        content: [
          'This sport was invisible to me for many years. I knew that disc golf courses existed, but before I was introduced to disc golf when I was working at MasterControl I had no idea the quality and quantity of disc golf courses within driving distance.',
          'The first course I ever played was Creekside in Holliday.',
          'I was immediately hooked.',
          'That day, I looked up local courses and found a lot to pick from, so I chose Art Dye in American Fork to visit first. I drove my long commute from Cottonwood Heights back down to Utah County, stopped by Art Dye Park and went to find the disc golf course. Like magic, there it was. A huge course with 18 holes with baskets and everything.',
          'I was so excited about it, I called up my parents and confidently told them I found them a new sport. I knew my parents would love it too, based on their history with outdoor sports. I was right, they played daily/weekly for years.' +
            ' ' +
            "Since I started playing disc golf, I've racked up 3 Aces, which is less than both my mom and my dad.",
        ],
      },
    ],
  },
  [PlayHobbyId.BoardGames]: {
    id: PlayHobbyId.BoardGames,
    name: 'Board Games',
    description: 'From quick card games to epic campaigns.',
    icon: '🎲',
    sections: [
      {
        title: 'Favorites',
        content: [
          'Gloomhaven and beating most of the campaign was a top-tier gaming experience.',
          'Marvel Champions LCG and Arkham Horror LCG were a good time.',
          'Mansions of Madness was very streamlined and immersive.',
          'Root was mainly played digitally, but it was a great game.',
          'The Crew is probably the most tense game I have ever played.',
          'Cryptid is a fantastic logic deduction game that is very easy to pick up and play.',
        ],
      },
    ],
  },
  [PlayHobbyId.VideoGames]: {
    id: PlayHobbyId.VideoGames,
    name: 'Video Games',
    description: 'Started with Pokémon Blue, still going strong.',
    icon: '🎮',
    sections: [
      {
        title: 'The Start',
        content: [
          'First game was Pokémon Blue on GameBoy. That Blastoise cartridge started it all.',
          'Now I play everything from indie gems to AAA titles.',
        ],
      },
      {
        title: 'Standouts',
        content: [
          'The Last of Us - Never thought a game would hit that hard emotionally.',
          'Subnautica - Terror and curiosity in perfect balance. Every dive was a new story.',
          'God of War (2018) - Kratos grew up when I did. From rage monster to dad trying his best.',
          'The Witcher 3 - The best story in any video game I have ever played.',
        ],
      },
    ],
  },
  [PlayHobbyId.Reading]: {
    id: PlayHobbyId.Reading,
    name: 'Reading',
    description: "Wheel of Time, Game of Thrones, Hitchhiker's Guide.",
    icon: '📚',
    sections: [
      {
        title: 'Reading Aloud',
        content: [
          'I love to read.',
          "However, my mind wanders a lot, and, well... I love to let it wander. So I will often read out loud to keep myself on track. This has led me to really love acting out the dialogue, and it has helped keep me anchored to the book when I'm trying to read and can't focus.",
          "It can take me a long time to get through a book. Reading out loud just takes longer. As of this writing, I've been reading Ship of Magic by Robin Hobb for over a year, and that has made for a great year of reading for me. I've never related more to so many different characters. The world-building is phenomenal.",
          "I really enjoy living with a book for a long time, so it doesn't bother me that some books might take me a lot longer.",
          "Thanks to my habit of reading out loud to myself, I've found great joy in reading books to my boys every night before bed. We do this on a rotation, and every once in a while, Wren will take a turn in the rotation.",
          'Oakley has long since outgrown my read-aloud sessions and has taken off with reading on her own.',
        ],
      },
    ],
  },
};
