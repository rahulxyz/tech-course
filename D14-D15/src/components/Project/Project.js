import Media from "components/Media/Media";
import Content from "components/Content/Content";
import Banner from "components/Banner/Banner";
import project from "assets/project.jpg";

const contentData = {
    title: "Project",
    subtitle: "Url Shortner was one of my first project in which I tried to solve a problem which I had faced myself. It revolves around shortening the Url to the extent it is easily shareable.",
    listTitle: "Technologies used",
    list: ["Html", "Css", "Javascript", "Node", "Mongodb"],
};

const Project = () => {
    return (
        <div id="project">
            <Banner end={<Media imageSrc={project} />} start={<Content {...contentData} />} />
        </div>
    );
};

export default Project;
