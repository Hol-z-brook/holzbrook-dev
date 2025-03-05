import type { AppPageData } from '../../../lib/app';

export enum PlaySkillLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export enum PlayHobbyId {
  DiscGolf = 'disc-golf',
  BoardGames = 'board-games',
  VideoGames = 'video-games',
  Reading = 'reading',
}

export enum PlayProjectId {
  PersonalBest = 'personal-best',
  PersonalWebsite = 'personal-website',
}

export interface PlayProject {
  id: string;
  name: string;
  description: string;
  date?: string;
  imageUrl?: string;
  link?: string;
  achievements?: string[];
}

export interface PlayHobby {
  id: PlayHobbyId;
  name: string;
  description: string;
  icon?: string;
  startedYear?: number;
  skillLevel?: PlaySkillLevel;
  projects?: PlayProject[];
  relatedSkills?: string[];
  favoriteThings?: string[];
  content: {
    title: string;
    subtitle: string;
    sections: Array<{
      title?: string;
      content: string[];
    }>;
  };
}

export interface PlayPageData extends AppPageData {
  title: string;
  subtitle: string;
  hobbies: PlayHobby[];
}

export const pageData: PlayPageData = {
  id: 'play',
  title: 'My Hobbies',
  subtitle: 'Explore the things I enjoy doing in my free time.',
  hobbies: [
    {
      id: PlayHobbyId.BoardGames,
      name: 'Board Games',
      description: 'Dice, cards, strategic? I love it all.',
      icon: '🎲',
      content: {
        title: 'Board Games',
        subtitle: 'Dice, cards, strategic? I love it all.',
        sections: [
          {
            content: [
              "I've always loved gaming of any kind. Board games take a special place in my life though.",
              'The variety of gameplay, the tactile feel, the shared triumph.',
              "Some of the games we've enjoyed playing are Gloomhaven, Mansions of Madness, Decrypted, Marvel Champions LCG, Arkham Horror LCG, Moon, Vast, Root, and more.",
            ],
          },
        ],
      },
    },
    {
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
    {
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
    {
      id: PlayHobbyId.VideoGames,
      name: 'Video Games',
      description: 'The Last of Us, Subnautica, God of War, and More!',
      icon: '🎮',
      content: {
        title: 'Video Games',
        subtitle: 'The Last of Us, Subnautica, God of War, and More!',
        sections: [
          {
            content: [
              "I've been playing video games since I was a child. My PokeMon cartridge on the original GameBoy was the Blue version with Blastoise on the cartridge artwork.",
            ],
          },
        ],
      },
    },
  ],
};

export default {
  pageData,
};
