import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h2 className="text-center text-success my-5">My Blogs</h2>

      <div className="p-4 border border-2 border-success rounded-3 mb-5">
        <h4 className="text-success">
          Difference between authorization and authentication
        </h4>
        <p>
          Authentication is the process of identifying a user or telling the
          system who you are by providing proper credentials whereas
          authorization is the process of giving a user permission to access a
          specific function or role. Authentication can be verified by passwords
          or biometrics and Authentication can be provided by the system or
          admin. Authentication is visible to the user whereas authorization is
          not visible to the user. Authentication credentials can be changed by
          the user but the user cannot change the system's authorization.
          Authentication is based on user verification and authorization is
          based on user validation.
        </p>
      </div>

      <div className="p-4 border border-2 border-success rounded-3 mb-5">
        <h4 className="text-success">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          Firebase is the platform that used to build mobile and web
          application. It is developed by Google. There are many purpose of
          using firebase. Firebase has many functionalities such as database
          system, authentication, cloud messaging, hosting and many more. These
          functionalities make firebase popular in the world. As firebase is
          developed by Google, the authentication system is much more secured
          and also it is easy to use. There are many options for authentication
          in firebase. Also we can host our web application by using firebase
          easily. Firebase is like collection of functionalities that we need to
          build a application. That's why using firebase is always easy and
          helpful.
          <br />
          Other options to implement authentication:
          <ul>
            <li>Parse</li>
            <li>AWS Amplify</li>
            <li>Auth0</li>
          </ul>
        </p>
      </div>

      <div className="p-4 border border-2 border-success rounded-3 mb-5">
        <h4 className="text-success">
          What other services does firebase provide other than authentication?
        </h4>
        <p>
          Firebase is the most popular app development platform. Firebase
          provides many services besides authentication. For example realtime
          database, hosting, cloud storage, performance monitoring, cloud
          messaging, in-app messaging, A/B testing etc. Also by default,
          firebase has google analytics that is used to tract website traffic
          and generate other analytical reports. Also it can monitor app's
          performance, modify app without deploying a new version, run mobile
          backend code without managing servers. In firebase database we can
          store users data like users details, chat messages and other metadata.
          Firebase cloud messaging is another popular functionality that is used
          to send notifications.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
