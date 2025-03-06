import { hobbiesById } from './hobbiesById.data';
import { PlayHobbyId } from './PlayHobby';

export const hobbies = [
  hobbiesById[PlayHobbyId.DiscGolf],
  hobbiesById[PlayHobbyId.BoardGames],
  hobbiesById[PlayHobbyId.VideoGames],
  hobbiesById[PlayHobbyId.Reading],
];

export default {
  hobbies,
};
