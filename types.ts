
export type ActivityType = 
  | "tinh_toan" 
  | "toan_loi_van" 
  | "dem_hinh_nang_cao" 
  | "noi_cap" 
  | "hinh_hoc_truc_quan" 
  | "so_do_doan_thang";

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  image_description?: string;
  data: any;
  answer: number | string | string[] | number[];
  hint: string;
  explanation?: string;
}

export interface Lesson {
  id: number;
  title: string;
  topic: string;
  icon: string;
  raw_html: string;
  activities: Activity[];
}

export type Mode = 'kid' | 'teacher';

export interface UserProgress {
  completedLessons: number[];
  activityScores: Record<string, number>; // activityId: score
}
