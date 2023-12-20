
import '../style/Newsitem.css'

export default function Newsitem(props) {

    let path1="https://www.investors.com/wp-content/uploads/2023/04/Stock-c3.ai-02-adobe.jpg";
    let{title,desc,image,path,author,time,publisher}=props;
    return (
        <div className="card" style={{width: '18rem', height:'25rem'}}>
          <div className='pill'>
            <span className="badge rounded-pill bg-success">
              {publisher}
            <span className="visually-hidden">unread messages</span>
            </span>
          </div>
            <img src={!image ? path1 : image} className="card-img-top" alt="..."  height="40%"/>
            <div className="card-body">
                <h4 className="card-title">{!title ? null :title.slice(0,45)}.... 
               </h4>
                <p className="card-text">{!desc ? null : desc.slice(0,60)}....</p>
                <p className="card-text desc">By {!author ? 'Unknown' : author} On {new Date(time).toISOString()}</p>
                <a href={path} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  }
