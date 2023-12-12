import axiosClient from "@/#@/libraries/axiosClient";
import { Kanit, Lobster } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "../../../styles/Navbar.module.css";
const kanit = Kanit({ subsets: ["latin"], weight: ["700", "400"] });
const lob = Lobster({ subsets: ["latin"], weight: ["400"] });
import { ShoppingCartOutlined } from "@ant-design/icons";
const NavBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    try {
      const res = await axiosClient.get("/products/search", {
        params: {
          name: search,
        },
      });
      console.log("result :>> ", res.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className="py-4  border-b-[1px] ">
        <div
          className={styles.container}
          style={{ fontSize: "30px", paddingBottom: "5px" }}
        >
          <Link href="/" className={`${lob.className} ml-3 font-bold text-2xl`}>
            Shop Online
          </Link>
          <div className="searchWrap">
            <div className="input-container">
              <div className="input-search ">
                {" "}
                <input
                  placeholder="Nhập từ khóa cần tìm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="icon" onClick={handleSearch}>
                {" "}
                <BsSearch size={24} />{" "}
              </div>
            </div>
          </div>
          <div className={styles.right} style={{ paddingBottom: "15px" }}>
            <Link href="/cart">
              {" "}
              <ShoppingCartOutlined style={{ fontSize: "40px" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
