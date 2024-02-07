import React from "react";
export const ProjectItem = ({ item }) => {
  const [opened, setOpened] = React.useState(false);

  const openProject = () => {
    setOpened(true);
  };

  return (
    <div className="wrapper">
      <h1>
        <strong>{item.name}</strong>
      </h1>
      <div className="project__wrapper">
        <div onClick={openProject} className="project__img-wrapper">
          <img src={item.img[0]} alt="" />
        </div>
      </div>
      {/* {opened && (
        <ProjectOpen item={item} setOpened={setOpened} opened={opened} />
      )} */}
    </div>
  );
};

const ProjectOpen = ({ item, opened, setOpened }) => {
  return (
    <>
      <div onClick={(e) => e.stopPropagation()} className="project__modal">
        <button onClick={() => setOpened(false)}>закрыть окно</button>
        <div className="project__modal-wrapper">
          {item.img.map((img) => (
            <div className="project__modal-wrapper-img">
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
