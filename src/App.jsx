import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./css/style.css";
function App() {
  const [skills, setSkills] = React.useState([
    {
      skill: "React",
      describe: [
        "redux-toolkit",
        "react-hook-form",
        "styled-components",
        "react-chartjs-2",
      ],
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      skill: "JavaScript",
      describe: ["vanilla", "anime.js"],
      img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      skill: "Typescript",
      describe: ["just typescript"],
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      skill: "CSS",
      describe: ["scss, sass", "BEM", "css-modules", "ES6"],
      img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
      skill: "HTML",
      describe: ["RWD, AWD", "a11y", "mobile-first"],
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      skill: "Other",
      describe: ["Git, Postman", "Vite", "npm", "Figma"],
    },
  ]);

  const [theme, setTheme] = React.useState("dark");
  const startDate = new Date("2022-08-05");
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="nav__me me">
              <h1 className="me__name title">
                <strong>alexandr egorov</strong>
              </h1>
              <div className="me__info active">
                <p className="me__about subtitle">
                  student, 20 y.o.
                  <br />
                  frontend programmer
                  <br />
                  work experience:
                  <strong className="section-title">
                    {` ${Math.floor(
                      (Date.now() - startDate.getTime()) / (1000 * 3600 * 24)
                    )} days`}
                  </strong>
                </p>
                <a className="me__email link" href="mailto:cfifeg1@gmail.com">
                  cfifeg1@gmail.com
                </a>
              </div>
            </div>

            <img
              onClick={changeTheme}
              className="theme-switch"
              src={
                theme == "light"
                  ? "./src/assets/dark.png"
                  : "./src/assets/light.png"
              }
              alt="dark-mode "
            />
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          {/* <div className="skills wrapper">
            <h1 className="hidden skill">React</h1>
            <h1 className="hidden skill">Redux</h1>
            <h1 className="hidden skill">Javascript</h1>
          </div>
        </div>
        <div className="container">
          <h1 className="main__title title active"></h1> */}

          <h1 className="section-title">-- skills --</h1>
          <section className="skills">
            {skills.map((item) => (
              <div className="wrapper">
                <div className="skills__title-wrapper">
                  <h1 className="skills__title">
                    <strong>{item.skill}</strong>
                  </h1>
                  <div className="skills__img-wrapper">
                    <img className="skills__img" src={item.img} alt="" />
                  </div>
                </div>
                <p className="js__describe">
                  {item.describe.map((descItem) => (
                    <p>{descItem}</p>
                  ))}
                </p>
              </div>
            ))}

            {/* <div className="wrapper active skills__django django">
              <h1 className="django__title active-item title "></h1>
              <p className="django__describe "></p>
              </div>
              <div className="wrapper active skills_tailwind tailwind">
              <h1 className="tailwind__title active-item title"></h1>
              <p className="tailwind__describe hidden"></p>
              </div>
              <div className="wrapper active skills_react react hidden">
              <h1 className="title active-item">[React]</h1>
              <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components. <br />
              <br />I have been learning and programming in React since
              September 2023
              </p>
            </div> */}
          </section>
          <h1 className="section-title">-- works --</h1>
        </div>
      </main>
      <footer className="footer hidden">
        <p>Since 2023</p>
      </footer>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
