export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  tags: string[];
  icon: string;
  featured?: boolean;
}

export interface ProgramDay {
  day: string;
  title: string;
  activities: string[];
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface EventInfo {
  name: string;
  year: number;
  date: string;
  location: string;
  eventDate: Date;
}

