import React, { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";

const Page1 = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "SET_PAGE1",
      payload: {
        ...state.page1,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/page2");
  };

  // set scroll for long height image
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BackgroundContainer bgImage="/bg_page_111.png" titleImage="/title_farewell.png">
      <div className="grid grid-cols-1 mt-96 gap-4 px-12 max-sm:mt-36">
        <div className="col-span-1 md:col-span-1 flex items-center justify-center">
          <div
            className="bg-white p-8 rounded-xl shadow-md"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              boxShadow:
                "inset 50.0333px -50.0333px 50.0333px rgba(165, 165, 165, 0.065), inset -50.0333px 50.0333px 50.0333px rgba(255, 255, 255, 0.065)",
              backdropFilter: "blur(14.5097px)",
              borderRadius: "25px",
              opacity: "0.9",
            }}
          >
            <div className="opacity-100">
              <h5>
                Hugo Award 2023 sắp tới sẽ là nơi để vinh danh những cá nhân,
                tập thể có những đóng góp đặc biệt, xuất sắc trong nhiệm kỳ vừa
                qua. Giải thưởng của chúng ta sẽ bao gồm những hạng mục chính
                sau đây:
              </h5>
              <br />
              🎗The Best Member
              <br />
              🎗The Best Event
              <br />
              🎗The Perfect Duo
              <br />
              🎗The Rookie
              <br />
              -----------------------------------
              <br />
              ✅Sự kiện sẽ diễn ra từ ngày 16/7/2023 đến 28/7/2023, trong đó:
              <br />
              👉Vòng 1 (16/7 đến 21/7)
              <br />
              Các thành viên tham gia bình chọn 3 ứng cử viên yêu thích của mình
              tại mỗi hạng mục.
              <br />
              👉Vòng 2 (23/7 đến 28/7)
              <br />
              Sau khi có kết quả từ vòng 1, ban tổ chức sẽ tiến hành chọn ra 5
              ứng cử viên có số lượt bình chọn cao nhất ở vòng 1 và đáp ứng một
              số tiêu chí của BTC để bước đến đêm trao giải. Thành viên tiếp tục
              bình chọn các hạng mục để tìm ra các cá nhân xứng đáng nhất.
              <br />
              👉Đêm trao giải Hugo Award 2023 sẽ diễn ra vào tối Chủ nhật ngày
              30/07/2023, đi cùng với đó sẽ là một sự kiện vô cùng đặc biệt sẽ
              được công bố trong thời gian tới. Rất mong nhận được sự hưởng ứng
              nhiệt tình tham gia từ các thành viên.
              <br />
              🕘Deadline vòng 2: 23:59 (28/7/2023)
              <br />
            </div>
          </div>
        </div>
        <div
          className="col-span-1 md:col-span-1 flex items-center justify-center"
          style={{
            justifyContent: "flex-end",
          }}
        >
          <div
            id="button-next"
            className="flex justify-end mt-4 px-12 max-sm:mt-4"
          >
            <button
              onClick={handleSubmit}
              className="custom-button px-4 py-2 bg-transparent text-white font-semibold rounded transition-all duration-300"
            >
              <span>
                Got it!
              </span>
            </button>
          </div>
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default Page1;
