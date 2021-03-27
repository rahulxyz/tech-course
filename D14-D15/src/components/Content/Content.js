import './Content.scss'


const Content = (props) => {
    const {title, subtitle, listTitle, list} = props;
    return (
        <div className="skill-content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {list && <ul>
                <h4>{listTitle}</h4>
                {
                    list.map((value, index)=>{
                        return (<li key={index}>{value}</li>)
                    })
                }
            </ul>}
        </div>
    );
};

export default Content;
