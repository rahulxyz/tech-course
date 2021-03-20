import Media from './partials/Media';
import Content from './partials/Content/Content';
import Banner from 'components/Banner/Banner'

const Skill = () => {
    return ( 
        <Banner start={<Media />} end={<Content />}/>
     );
}
 
export default Skill;