import Link from "next/link";
import { Kanit, Lobster } from "next/font/google";
import styles from "../../../styles/Navbar.module.css";
import { BsSearch } from "react-icons/bs";
const kanit = Kanit({ subsets: ["latin"], weight: ["700", "400"] });
const lob = Lobster({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className="py-4  border-b-[1px] ">
        <div className={styles.container}>
          <Link href="/" className={`${lob.className} ml-3 font-bold text-2xl`}>
            Shop Online
          </Link>
          <div className="searchWrap">
            <div className="input-container">
              <div className="input-search ">
                {" "}
                <input placeholder="Nhập từ khóa cần tìm" />
              </div>
              <div className="icon">
                {" "}
                <BsSearch size={24} />{" "}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <Link href="/"> Cart</Link>
            </div>
            <div>
              <Link href="/"> UserMenu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
