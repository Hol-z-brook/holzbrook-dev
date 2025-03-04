export enum InterestId {
  Baking = 'baking',
  Biking = 'biking',
  BoardGames = 'board-games',
  Coding = 'coding',
  ContentCreation = 'content-creation',
  Cooking = 'cooking',
  DiscGolf = 'disc-golf',
  Gardening = 'gardening',
  Hiking = 'hiking',
  Legos = 'legos',
  Minecraft = 'minecraft',
  Music = 'music',
  Organizing = 'organizing',
  Photography = 'photography',
  PlayingOutside = 'playing-outside',
  Puzzles = 'puzzles',
  Reading = 'reading',
  Science = 'science',
  Soccer = 'soccer',
  Swimming = 'swimming',
  Teaching = 'teaching',
  Tumbling = 'tumbling',
  VideoGames = 'video-games',
  Yoga = 'yoga',
}

export interface InterestData {
  id: InterestId;
  name: string;
  emoji: string;
  color: string;
}

export const interests: Record<InterestId, InterestData> = {
  [InterestId.Baking]: {
    id: InterestId.Baking,
    name: 'Baking',
    emoji: '🍪',
    color: 'bg-amber-100 text-amber-800',
  },
  [InterestId.Biking]: {
    id: InterestId.Biking,
    name: 'Biking',
    emoji: '🚲',
    color: 'bg-blue-100 text-blue-800',
  },
  [InterestId.BoardGames]: {
    id: InterestId.BoardGames,
    name: 'Board Games',
    emoji: '🎲',
    color: 'bg-blue-100 text-blue-800',
  },
  [InterestId.Coding]: {
    id: InterestId.Coding,
    name: 'Coding',
    emoji: '💻',
    color: 'bg-indigo-100 text-indigo-800',
  },
  [InterestId.ContentCreation]: {
    id: InterestId.ContentCreation,
    name: 'Content Creation',
    emoji: '📱',
    color: 'bg-cyan-100 text-cyan-800',
  },
  [InterestId.Cooking]: {
    id: InterestId.Cooking,
    name: 'Cooking',
    emoji: '🍳',
    color: 'bg-red-100 text-red-800',
  },
  [InterestId.DiscGolf]: {
    id: InterestId.DiscGolf,
    name: 'Disc Golf',
    emoji: '🥏',
    color: 'bg-green-100 text-green-800',
  },
  [InterestId.Gardening]: {
    id: InterestId.Gardening,
    name: 'Gardening',
    emoji: '🌱',
    color: 'bg-emerald-100 text-emerald-800',
  },
  [InterestId.Hiking]: {
    id: InterestId.Hiking,
    name: 'Hiking',
    emoji: '🏃',
    color: 'bg-orange-100 text-orange-800',
  },
  [InterestId.Legos]: {
    id: InterestId.Legos,
    name: 'Legos',
    emoji: '🧩',
    color: 'bg-yellow-100 text-yellow-800',
  },
  [InterestId.Minecraft]: {
    id: InterestId.Minecraft,
    name: 'Minecraft',
    emoji: '⛏️',
    color: 'bg-green-100 text-green-800',
  },
  [InterestId.Music]: {
    id: InterestId.Music,
    name: 'Music',
    emoji: '🎵',
    color: 'bg-violet-100 text-violet-800',
  },
  [InterestId.Organizing]: {
    id: InterestId.Organizing,
    name: 'Organizing',
    emoji: '📦',
    color: 'bg-slate-100 text-slate-800',
  },
  [InterestId.Photography]: {
    id: InterestId.Photography,
    name: 'Photography',
    emoji: '📸',
    color: 'bg-gray-100 text-gray-800',
  },
  [InterestId.PlayingOutside]: {
    id: InterestId.PlayingOutside,
    name: 'Playing Outside',
    emoji: '🌳',
    color: 'bg-emerald-100 text-emerald-800',
  },
  [InterestId.Puzzles]: {
    id: InterestId.Puzzles,
    name: 'Puzzles',
    emoji: '🧩',
    color: 'bg-blue-100 text-blue-800',
  },
  [InterestId.Reading]: {
    id: InterestId.Reading,
    name: 'Reading',
    emoji: '📚',
    color: 'bg-purple-100 text-purple-800',
  },
  [InterestId.Science]: {
    id: InterestId.Science,
    name: 'Science',
    emoji: '🔬',
    color: 'bg-cyan-100 text-cyan-800',
  },
  [InterestId.Soccer]: {
    id: InterestId.Soccer,
    name: 'Soccer',
    emoji: '⚽',
    color: 'bg-green-100 text-green-800',
  },
  [InterestId.Swimming]: {
    id: InterestId.Swimming,
    name: 'Swimming',
    emoji: '🏊',
    color: 'bg-blue-100 text-blue-800',
  },
  [InterestId.Teaching]: {
    id: InterestId.Teaching,
    name: 'Teaching',
    emoji: '👨‍🏫',
    color: 'bg-yellow-100 text-yellow-800',
  },
  [InterestId.Tumbling]: {
    id: InterestId.Tumbling,
    name: 'Tumbling',
    emoji: '🤸',
    color: 'bg-purple-100 text-purple-800',
  },
  [InterestId.VideoGames]: {
    id: InterestId.VideoGames,
    name: 'Video Games',
    emoji: '🎮',
    color: 'bg-indigo-100 text-indigo-800',
  },
  [InterestId.Yoga]: {
    id: InterestId.Yoga,
    name: 'Yoga',
    emoji: '🧘',
    color: 'bg-pink-100 text-pink-800',
  },
};

export enum FamilyMemberId {
  Andrew = 'andrew',
  Brooke = 'brooke',
  Oakley = 'oakley',
  Finn = 'finn',
  Leo = 'leo',
  Wren = 'wren',
}

export interface FamilyMember {
  id: FamilyMemberId;
  order: number;
  emoji: string;
  firstName: string;
  middleName: string;
  lastName: string;
  nickName?: string;
  role: string;
  bio: string;
  interests: InterestId[];
}

export const familyMembers: FamilyMember[] = [
  {
    id: FamilyMemberId.Andrew,
    firstName: 'Andrew',
    middleName: 'Steven',
    lastName: 'Holbrook',
    nickName: 'Holz',
    role: 'Chaos Wrangler',
    emoji: '🥏',
    bio: 'Software engineer, hobby enthusiast, and dedicated father who loves building things and spending time with family.',
    interests: [
      InterestId.BoardGames,
      InterestId.DiscGolf,
      InterestId.Reading,
      InterestId.Hiking,
      InterestId.VideoGames,
      InterestId.Biking,
      InterestId.Organizing,
      InterestId.Coding,
    ],
    order: 1,
  },
  {
    id: FamilyMemberId.Brooke,
    firstName: 'Brooke',
    middleName: 'Durfee',
    lastName: 'Holbrook',
    role: 'Nurturer',
    emoji: '🏃‍♀️',
    bio: "Creative force of the family, bringing beauty and organization to our home while nurturing our children's growth.",
    interests: [
      InterestId.Reading,
      InterestId.Teaching,
      InterestId.Yoga,
      InterestId.Gardening,
      InterestId.Cooking,
      InterestId.Hiking,
      InterestId.Photography,
    ],
    order: 2,
  },
  {
    id: FamilyMemberId.Oakley,
    firstName: 'Oakley',
    middleName: 'Amelia',
    lastName: 'Holbrook',
    role: 'Creative Explorer',
    emoji: '🐨',
    bio: 'The ambition of a Slytherin, the courage of a Gryffindor, the analytical mind of a Ravenclaw, and the determination of a Hufflepuff.',
    interests: [
      InterestId.ContentCreation,
      InterestId.Music,
      InterestId.Science,
      InterestId.Soccer,
      InterestId.Tumbling,
      InterestId.Hiking,
      InterestId.Baking,
    ],
    order: 3,
  },
  {
    id: FamilyMemberId.Finn,
    firstName: 'Finn',
    middleName: 'Wolfgang',
    lastName: 'Holbrook',
    role: 'Wise Old Man',
    emoji: '🐺',
    bio: "His gut was busted as a baby, and now he's busting all our guts with laughter. His kind and creative spirit shines through in everything he does, from his funny observations to his excitable discoveries.",
    interests: [
      InterestId.Minecraft,
      InterestId.Cooking,
      InterestId.Reading,
      InterestId.Hiking,
      InterestId.Baking,
    ],
    order: 4,
  },
  {
    id: FamilyMemberId.Leo,
    firstName: 'Leo',
    middleName: 'Arthur (Turtle)',
    lastName: 'Holbrook',
    role: 'Playful and Focused',
    emoji: '🐢',
    bio: 'This dude is a thinker and a mover. He is always on the go and has a lot of energy. His thoughtful and logical nature is balanced by his playful and sweet personality, though he can get easily distracted by his own curiosity.',
    interests: [
      InterestId.Legos,
      InterestId.Minecraft,
      InterestId.PlayingOutside,
      InterestId.Reading,
      InterestId.VideoGames,
    ],
    order: 5,
  },
  {
    id: FamilyMemberId.Wren,
    firstName: 'Wren',
    middleName: 'Aria',
    lastName: 'Holbrook',
    nickName: 'Wrenny',
    role: 'Energetic and Confident',
    emoji: '🐦',
    bio: 'Just what the family needed. A little spunk, a little daring, and a lot of energy. Her independent and adventurous spirit is matched by her prideful and curious nature, making her a force to be reckoned with.',
    interests: [
      InterestId.PlayingOutside,
      InterestId.Legos,
      InterestId.Music,
      InterestId.Tumbling,
      InterestId.Hiking,
    ],
    order: 6,
  },
];

export const pageTitle = 'Meet the Fam';
export const pageSubtitle = 'Get to know the wonderful people who shape my world.';

export default {
  pageTitle,
  pageSubtitle,
  familyMembers,
};
