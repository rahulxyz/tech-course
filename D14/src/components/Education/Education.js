import Media from 'components/Media/Media';
import Content from 'components/Content/Content';
import Banner from 'components/Banner/Banner'
import university from 'assets/university.jpg';

const contentData = {
    title: "Education",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.",
    listTitle: "I am",
    list: ["Btech University: CGPA 7.8", "Higher Secondary: CBSE, 86% "]
}

const Education = () => {
    return ( 
        <div id="education">
        <Banner start={<Media imageSrc={university} />} end={<Content {...contentData}/>}/>
        </div>
     );
}
 
export default Education;