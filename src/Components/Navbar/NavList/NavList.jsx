import { content } from "./data";

export default function NavBarList() {
  const NavList = content.map((v) => {
    return (
      <li className={v.class} key={v.title}>
        <h2>{v.title}</h2>
      </li>
    );
  });
  return (
    <div className="navList">
      <ul>{NavList}</ul>
    </div>
  );
}
