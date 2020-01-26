export type Mission =  {
    mission_name : string;
    manufacturers: [string];
    wikipedia: string;
    description: string;
    website: string;
}

export const MissionAPI = "https://api.spacexdata.com/v3/missions";