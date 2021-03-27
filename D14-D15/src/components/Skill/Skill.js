import Media from 'components/Media/Media';
import Content from 'components/Content/Content';
import Banner from 'components/Banner/Banner'
import skills from 'assets/skills.jpg';

const contentData = {
    title: "Skills",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.",
    listTitle: "I am",
    list: ["Team Player", "Adaptive", "Quick Learner"]
}

const Skill = () => {
    return ( 
        <div id="skills">
            <Banner end={<Media imageSrc={skills} />} start={<Content {...contentData}/>}/>
        </div>
     );
}
 
export default Skill;