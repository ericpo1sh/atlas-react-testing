import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
    () => {
      return HttpResponse.json([
        {
          "id": 1,
          "title": "Heart To Heart",
          "artist": "Mac Demarco",
          "genre": "Jazz",
          "duration": "3:30",
          "cover": "https://meteamedia.org/wp-content/uploads/2023/02/macdemarco.jpg"
        },
        {
          "id": 2,
          "title": "Could You Be Loved",
          "artist": "Bob Marley",
          "genre": "Reggae",
          "duration": "3:57",
          "cover": "https://i.scdn.co/image/ab67616d0000b2731c40418d1c37d727e8e91b04"
        }
      ]);
    }
  ),
];

export const server = setupServer(...handlers);
