import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image
                  src="/image/error.png"
                  priority
                  height={350}
                  width={400}
                  style={{ objectFit: "cover" }}
                  alt="404"
                />
                <h3>Error 404: Không tìm thấy trang tin</h3>
                <p>
                  Trang thông tin bạn đang tìm có thể không còn tồn tại hoặc đã
                  thay đổi đường dẫn hoặc tạm thời không hoạt động.
                </p>

                <div className="btn-box">
                  <Link legacyBehavior href="/">
                    <a className="default-btn">
                      <i className="flaticon-history"></i> Quay lại{" "}
                      <span></span>
                    </a>
                  </Link>
                  <Link legacyBehavior href="/">
                    <a className="default-btn">
                      <i className="flaticon-home"></i> Về trang chủ{" "}
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
