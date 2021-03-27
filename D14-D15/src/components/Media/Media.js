

const Media = (props) => {
    const {imageSrc} = props;
    return ( 
        <div className="image-wrapper">
            <img src={imageSrc} style={{width:'100%'}}/>
        </div>
     );
}
 
export default Media;