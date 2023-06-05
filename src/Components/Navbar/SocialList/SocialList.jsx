import { data } from "./data";

export default function SocialList() {
  const socialList = data.map((v) => {
    return (
      <li key={v.title}>
        <a href={v.link}>
          <img src={v.path} alt={v.title} />
        </a>
      </li>
    );
  });
  return socialList;
}
