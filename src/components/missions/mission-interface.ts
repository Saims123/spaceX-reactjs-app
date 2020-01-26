export type Mission = {
  mission_name: string;
  manufacturers: [string];
  wikipedia: string;
  description: string;
  website: string;
};

export const MissionAPI = "https://api.spacexdata.com/v3/missions";

// Decided to use Ternary code since it's more cleaner
export function MissionSort(m1: Mission, m2: Mission) {
    return (m1.mission_name.toUpperCase() > m2.mission_name.toUpperCase() ? 1 : -1) | 0;
}
