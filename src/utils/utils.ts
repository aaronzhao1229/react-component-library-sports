import { Sport } from "../models/sports";

export function sortSportArrayAZ(sports: Sport[]) {
  sports.sort((a, b) => a.name.localeCompare(b.name))
}

export function sortSportArrayZA(sports: Sport[]) {
  sports.sort((a, b) => b.name.localeCompare(a.name))
}