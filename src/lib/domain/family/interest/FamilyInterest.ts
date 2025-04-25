export enum FamilyInterestId {
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
  WobblyLife = 'wobbly-life',
  Yoga = 'yoga',
}

export interface FamilyInterest {
  id: FamilyInterestId;
  name: string;
  emoji: string;
  color: string;
}
