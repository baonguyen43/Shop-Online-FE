import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import FooterList from "./FooterList";
// import styles from "../../../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <FooterList>
            <h5> DANH MỤC </h5>
            <Link href="#"> Sách </Link> <br />
            <Link href="#"> Đồng hồ </Link>
            <br />
            <Link href="#"> Thời trang </Link>
            <br />
            <Link href="#"> Điện thoại </Link>
            <br />
            <Link href="#"> Sức khỏe </Link>
            <br />
            <Link href="#"> Thiết bị điện tử </Link>
            <br />
          </FooterList>

          <FooterList>
            {" "}
            <h5> DỊCH VỤ </h5>
            <Link href="#"> Chăm sóc khách hàng </Link>
            <br />
            <Link href="#"> Trung tâm trợ giúp </Link>
            <br />
            <Link href="#"> Chăm sóc khách hàng </Link>
            <br />
            <Link href="#"> Chính sách bảo hành </Link>
            <br />
            <Link href="#"> Hướng dẫn mua hàng </Link>
            <br />
          </FooterList>

          <FooterList>
            <h5>VỀ SHOP ONLINE</h5>
            <p className="mb-2">
              Ra mắt năm 2023, nền tảng thương mại Shop được xây dựng nhằm cung
              cấp cho người dùng những trải nghiệm dễ dàng, an toàn và nhanh
              chóng khi mua sắm trực tuyến. Niềm tin này truyền cảm hứng và thúc
              đẩy chúng tôi mỗi ngày tại Shop.
            </p>
            <p>
              <AiOutlineCopyrightCircle size={14} />
              2023, Shop online | All rows reserved.
            </p>
          </FooterList>

          <FooterList>
            <h5 style={{ width: "max-content" }}>THEO DÕI CHÚNG TÔI TRÊN</h5>
            <div style={{ display: "inline-flex", textAlign: "center" }}>
              <div style={{ marginRight: "10px" }}>
                <BsFacebook size={24} />
              </div>
              <div style={{ marginRight: "10px" }}>
                <BsInstagram size={24} />
              </div>
              <div style={{ marginRight: "10px" }}>
                <BsTwitter size={24} />
              </div>
              <div style={{ marginRight: "10px" }}>
                <BsYoutube size={24} />
              </div>
            </div>
          </FooterList>
        </div>
      </div>
    </div>
  );
};

export default Footer;
