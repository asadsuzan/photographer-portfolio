import React from "react";
import w1 from "../../assets/w1.jpg";
import w2 from "../../assets/w2.jpg";
import w3 from "../../assets/w3.jpg";
import w4 from "../../assets/w4.jpg";
import w5 from "../../assets/w5.jpg";
import w6 from "../../assets/w6.jpg";
import "./Mywork.css";
const Mywork = () => {
  const myWorks = [
    {
      img: w1,
      title: "weeding photography",
    },
    {
      img: w2,
      title: "portraint photography",
    },
    {
      img: w3,
      title: "fashon photography",
    },
    {
      img: w4,
      title: "travell photography",
    },
    {
      img: w5,
      title: "anniversary photography",
    },
    {
      img: w6,
      title: "event photography",
    },
  ];
  return (
    <section className="container my-works">
      {/* section title here */}
      <div className="text-uppercase text-center my-5">
        <h3>my work</h3>
      </div>
      {/* work items here */}
      <div className="row gy-3 gx-5 mx-auto w-wraper">
        {myWorks.map((work, id) => {
          const { title, img } = work;
          return (
            <div className="col-lg-4 col-md-6  col-12 position-relative w-item overflow-hidden ">
              {/* img here */}
              <div className="w-100">
                <img src={img} alt={title} className="img-fluid w-img" />
              </div>
              {/* title here */}
              <div className="w-title position-absolute w-75 p-2 text-light text-uppercase">
                <span>{title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mywork;
