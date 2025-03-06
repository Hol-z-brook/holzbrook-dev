export enum PlayHobbyId {
  DiscGolf = 'disc-golf',
  BoardGames = 'board-games',
  VideoGames = 'video-games',
  Reading = 'reading',
}

export interface PlayHobby {
  id: PlayHobbyId;
  name: string;
  description: string;
  icon?: string;
  startedYear?: number;
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
