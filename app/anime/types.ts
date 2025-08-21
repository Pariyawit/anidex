// id
// title {
//   romaji
//   english
// }
// coverImage {
//   large
// }
// # 5. Number of episodes
// episodes

// bannerImage
//           # 5. The synopsis/description (requesting plain text)
//           description(asHtml: false)
//           # 6. A list of associated genres
//           genres
//           # 7. The average user score out of 100
//           averageScore
//           # 8. The main animation studio
//           studios(isMain: true) {
//             nodes {
//               name
//             }
//           }

export interface AnimeBase {
  id: number;
  title: string;
  image: string;
  episodes: number;
}

export interface Anime extends AnimeBase {
  banner: string;
  description: string;
  genres: string[];
  averageScore: number;
}
