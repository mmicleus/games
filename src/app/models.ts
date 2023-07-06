export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  platforms: Array<Platform>;
  ratings: Array<Rating>;
  released: string;
  short_screenshots: Array<string>;
  slug: string;
  updated: string;
}

export interface GameDetails {
  id: number;
  name: string;
  background_image: string;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  platforms: Array<Platform>;
  ratings: Array<Rating>;
  released: string;
  short_screenshots: Array<string>;
  slug: string;
  updated: string;
  description_raw: string;
  publishers: Array<Publisher>;
  website: string;
}

export interface ApiResponse<T> {
  results: Array<T>;
}

export interface Genre {
  id: number;
  //   image_background: string;
  name: string;
  slug: string;
}

export interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Platform {
  platform: {
    // games_count: number;
    id: number;
    image: string;
    // image_background: string;
    name: string;
    slug: string;
    // year_end: string;
    // year_start: 2020;
  };
  //   release_at: string;
}

export interface Rating {
  count: number;
  id: number;
  percent: number;
  title: string;
}

export interface Publisher {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}
