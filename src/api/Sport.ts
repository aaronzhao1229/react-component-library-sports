
import { sportList } from "./sportList";
export class Sport {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  static createMockedSports(): Sport[] {
    const listLength = sportList.length
    const randomNumbers = generateRandomNumbers(0, listLength -1, 3)
    const result : Sport[] = []
    randomNumbers.forEach(e => result.push(sportList[e]))
    return result
  }
}

// generate random number function
function generateRandomNumbers(min: number, max: number, count: number): number[] {
  if (max - min + 1 < count) {
    throw new Error("Range is too small to generate the specified count of random numbers");
  }

  const result: number[] = [];

  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;
}

// ContentRepository.js
