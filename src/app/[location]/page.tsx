import { getForecast } from "@/utils/getForecast";
import HomeButton from "../../components/homeButton";
import style from "../style.module.css";
import pageStyle from "./pageStyle.module.css";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name}의 날씨를 알려드립니다`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
  const res = await getForecast(params.location);

  return (
    <div className={style.container}>
      <h1 className={style.title}>{name}의 3일 예보</h1>
      <ul className={pageStyle.ul}>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date} className={pageStyle.li}>
            {day.date.slice(0, 4)}년 {day.date.slice(5, 7)}월{" "}
            {day.date.slice(8, 10)}일 - {day.day.avgtemp_c}도 -{" "}
            {day.day.condition.text} -{" "}
            {JSON.stringify(day.day.daily_chance_of_rain)}%
          </li>
        ))}
      </ul>
      <HomeButton></HomeButton>
    </div>
  );
}
