import { Sport } from "./Sport";

export interface SportModel {
  name: string
  description: string
}

export class ContentRepository {
  getFeaturedSports() {
    return new Promise<SportModel[]>((resolve) => {
      setTimeout(() => {
        resolve(Sport.createMockedSports());
      }, 5000);
    });
  }
}