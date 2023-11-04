// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export interface Response {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
}

export const getTime = async (timeZone: string): Promise<Response> => {
  const res = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
    { next: { tags: ["time"] } }
  );
  if (!res.ok) throw new Error("시간 정보 불러올 수 없음.");
  return res.json();
};
