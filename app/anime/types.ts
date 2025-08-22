export interface AnimeBase {
  id: number;
  title: string;
  image: string;
  description: string;
  episodes: number;
}

export interface Anime extends AnimeBase {
  banner: string;
  description: string;
  genres: string[];
  averageScore: number;
}
