import React from "react";
import authimg from "../../assets/auth.jpg";
import firbase1 from "../../assets/firbase1.webp";
import parse from "../../assets/parse.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blogs container d-flex flex-column align-items-center justify-content-center my-5">
      <div className="blog d-flex align-items-center mb-5">
        <div className="b-content  shadow-lg">
          <h3>
            What is the difference between authorization and authentication?
          </h3>
          <p>
            web security systems are based on a two-step process. The first step
            is authentication, which ensures the user identity second step is
            authorization, which allows the user to access the various resources
            based on the user's identity.
          </p>
        </div>
        <div className="b-img ">
          <img src={authimg} alt="" />
        </div>
      </div>
      <div className="blog d-flex mb-5">
        <div className="b-content shadow-lg">
          <h3>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p>
            <span className="text-info">why?</span> Firebase helps to develop
            high-quality apps, grow user base, and earn more money. Each feature
            works independently, and they work even better together. <br />
            <span className="text-info">other options</span>
            Parse. Parse is a complete open-source application stack and backend
            framework that offers a collection of tools and features to help us
            develop our apps. ... Back4App. ... AWS Amplify. ... Kuzzle. ...
            Couchbase. ... NativeScript. ... RxDB. ... Flutter. etc
          </p>
        </div>
        <div className="b-img ">
          <img src={firbase1} alt="" />
        </div>
      </div>
      <div className="blog d-flex mb-5">
        <div className="b-content  shadow-lg">
          <h3>
            What other services does firebase provide other than authentication?
          </h3>
          <p>
            There are many services which Firebase provides, Most useful of them
            are:Cloud Firestore. Cloud Functions. Authentication. Hosting. Cloud
            Storage. Google Analytics. Predictions. Cloud Messaging.
          </p>
        </div>
        <div className="b-img ">
          <img src={parse} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
