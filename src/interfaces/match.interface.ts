export interface IMatch {
  id: string;
  date: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
}

interface ITeam {
  name: string;
  code: string;
  goals: number;
}
