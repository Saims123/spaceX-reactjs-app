import moment from 'moment';
export type Launch = {
    mission_id: string[];
    flight_number: number;
    launch_date_utc: string;
    mission_name: string;
    launch_year: number;
    details: string;
    flickr_images : string[];
    launch_site: LaunchSite;
    launch_success: boolean;
    upcoming: boolean;
    links: Links
}

interface LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}
interface Links{
    mission_patch: string;
    wikipedia: string;
    video_link: string;
}

export const LaunchesAPI = "https://api.spacexdata.com/v3/launches";

export function LaunchSortByLatestDate(launch1: Launch, launch2: Launch) {
   return moment(launch1.launch_date_utc).isBefore(moment(launch2.launch_date_utc)) ? 1 : -1 || 0;
}