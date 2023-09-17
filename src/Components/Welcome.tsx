import React from "react";
import logo from "../images/bulb.gif";

export const Welcome = () => {
  return (
    <section className="w-screen flex items-center justify-center m-10">
      <div className="welcome-container rounded-[25px] p-10 bg-[white] flex flex-col  w-[50vw] items-center justify-center">
        {" "}
        <section className="flex">
          <img alt="lightbulb gif" className="w-[50px]" src={logo} />{" "}
          <img alt="lightbulb gif" className="w-[50px]" src={logo} />{" "}
          <img alt="lightbulb gif" className="w-[50px]" src={logo} />{" "}
          <img alt="lightbulb gif" className="w-[50px]" src={logo} />{" "}
          <img alt="lightbulb gif" className="w-[50px]" src={logo} />{" "}
          <img alt="lightbulb gif" className="w-[50px]" src={logo} />{" "}
        </section>
        <h1 className="welcome-heading flex items-center">
          <b>Welcome to the Inspiration Board! </b>
        </h1>
        <br />
        <p>
          Are you ready to capture your creative spark and harness the power of
          inspiration? Our Inspiration Board is here to help you do just that!
          Whether you're planning your next project, collecting ideas, or simply
          looking for a daily dose of motivation, our platform is designed to
          ignite your imagination.
        </p>
        <h2>Getting Started</h2>
        <ol className="instructions-list">
          <li className="instruction">
            <b>Create Your Board:</b> Start by creating your own Inspiration
            Board. Give it a name that resonates with your goals and dreams.
          </li>
          <br />
          <li className="instruction">
            <b>Add Cards:</b> Think of each card as a canvas for your ideas.
            Click the "Add Card" button to create a new card. Write down your
            thoughts, goals, or motivational quotes.
          </li>
          <br />
          {/* <li className="instruction">
            Organize Your Cards: You can move your cards around, arrange them in
            any order you like, and group them by themes or projects. Our
            user-friendly interface makes it easy to stay organized.
          </li> */}
          {/* <li className="instruction">
            Edit and Customize: Click on a card to edit its content or customize
            its appearance. Change fonts, colors, and backgrounds to make your
            ideas truly shine.
          </li> */}
          <li className="instruction">
            Stay Inspired: Use your Inspiration Board as a daily source of
            motivation. It's the perfect place to keep your vision alive and
            track your progress.
          </li>
          {/* <li className="instruction">
            Collaborate: Feeling inspired with others? Invite friends or
            colleagues to collaborate on your board. Share your vision and watch
            it grow together.
          </li> */}
        </ol>
        <p>
          <b>Get Creative!</b>
        </p>
        <p>
          The Inspiration Board is your canvas, your vision board, and your
          creative playground. Let your ideas flow freely, and turn your dreams
          into reality.
        </p>
        <a href="/inspo" className="get-started-button">
          <button>Get Started!</button>
        </a>
      </div>
    </section>
  );
};
