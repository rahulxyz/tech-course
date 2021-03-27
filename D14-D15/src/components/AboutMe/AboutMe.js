import Media from 'components/Media/Media';
import Content from 'components/Content/Content';
import Banner from 'components/Banner/Banner'
import person from 'assets/person.jpg';

const contentData = {
    title: "About Me",
    subtitle: "Currently pursuing Btech from University and skilled in UI/ux, html react, mongodb, node js or in simple words Full stack developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor nunc, sit amet ultricies massa. Morbi quis finibus ligula. Mauris nec lectus sit amet diam condimentum rutrum ut accumsan turpis. Nullam blandit sapien sit amet massa aliquet porttitor.",
}

const AboutMe = () => {
    return ( 
        <div id="aboutMe">
        <Banner start={<Media imageSrc={person} />} end={<Content {...contentData}/>}/>
        </div>
     );
}
 
export default AboutMe;