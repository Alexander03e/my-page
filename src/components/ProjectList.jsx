import { ProjectItem } from "./ProjectItem";
export const ProjectList = () => {
  const projects = [
    {
      name: "Pizzeria",
      tech: ["react", "typescript", "redux-toolkit", "css-modules + sass"],
      img: ["./pizza_main.png", "./pizza_cart.png", "./pizza_sort.png"],
    },
    {
      name: "Medical Service",
      tech: ["vanilla js", "css"],
      img: ["./medika_main.png", "./medika_2.png", "./medika_3.png"],
    },
    {
      name: "Online Cinema",
      tech: ["react", "typescript", "tailwind", "antd"],
      img: ["./cinema_main.png", "./cinema_films.png", "./cinema_signup.png"],
    },
    {
      name: "Cats Pinterest",
      tech: ["react", "typescript", "css-modules"],
      img: ["./cats.png"],
    },
  ];

  return (
    <div className="skills">
      {projects.map((item) => {
        return <ProjectItem item={item} />;
      })}
    </div>
  );
};
