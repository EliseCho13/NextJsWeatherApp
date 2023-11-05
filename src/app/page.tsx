// import Image from 'next/image'
// import styles from './page.module.css'
import style from "./style.module.css";
import Link from "next/link";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "@/components/revalidateButton";

export default async function Home() {
  const res = await getCurrentWeather("Seoul");
  const time = await getTime(res.location.tz_id);
  // console.log("respond is ", res.current.condition.text);
  return (
    <>
      <h1>날씨 앱</h1>
      <h3>{time.dateTime}</h3>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
          <span>{res.current.condition.text}</span>
        </li>
        <li>
          <Link href="/NYC?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"time"}></RevalidateButton>
    </>
  );
}
