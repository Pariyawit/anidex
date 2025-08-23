export interface AnimeBase {
  id: number;
  title: string;
  image: string;
  description: string;
  episodes: number;
}

export interface Anime extends AnimeBase {
  bannerImage: string;
  genres: string[];
  averageScore: string;
}
