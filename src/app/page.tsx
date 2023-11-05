// import Image from 'next/image'
// import styles from './page.module.css'
import style from "./style.module.css";
import Link from "next/link";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "@/components/revalidateButton";

export default async function Home() {
  const res = await getCurrentWeather("Seoul");
  const resNYC = await getCurrentWeather("NYC");
  const resLon = await getCurrentWeather("London");
  const time = await getTime(res.location.tz_id);
  // console.log("respond is ", res.current.condition.text);
  return (
    <div className={style.container}>
      <h1 className={style.title}>날씨 앱</h1>
      <h3 className={style.date}>
        {time.dateTime.slice(0, 4)}년 {time.dateTime.slice(5, 7)}월{" "}
        {time.dateTime.slice(8, 10)}일 {time.dateTime.slice(11, 13)}시{" "}
        {time.dateTime.slice(14, 16)}분 {time.dateTime.slice(17, 19)}초 기준
      </h3>
      <div className={style.description}>
        날씨가 궁금한 지역을 눌러보세요! 향후 3일간의 일기예보를 보여드립니다.
      </div>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울" className={style.listItem}>
            서울
          </Link>
          <span className={style.condition}>{res.current.condition.text}</span>
        </li>
        <li>
          <Link href="/NYC?name=뉴욕" className={style.listItem}>
            뉴욕
          </Link>
          <span className={style.condition}>
            {resNYC.current.condition.text}
          </span>
        </li>
        <li>
          <Link href="/london?name=런던" className={style.listItem}>
            런던
          </Link>
          <span className={style.condition}>
            {resLon.current.condition.text}
          </span>
        </li>
      </ul>
      <RevalidateButton tag={"time"}></RevalidateButton>
    </div>
  );
}
