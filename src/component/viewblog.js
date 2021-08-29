import React , { useEffect , useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function Viewblog() {

    
    let [ datafetched , setdata  ] = useState([]);

    let { url } = useParams();

    useEffect(()=>{

        axios.get('https://mernblogdemo.herokuapp.com/api/view/'+url)
             .then((res) => {
                 console.log(res.data);
                 setdata(res.data);
             })
     },[])

  return (
    <div className="about">
        <div className="container">
            <div className="row">
            {datafetched.map((itm,k) =>{
                    return(
                        <div className="blogview" key={k}>
                            <h1>{itm.title}</h1>
                            <img className="imgview" src={itm.imgUrl}></img>
                            <p>{itm.blog}</p>
                            {itm.subPara.map((sub_item,s_k) => {
                                if(sub_item.SubHeading === 'para'){
                                    
                                return(
                                    <p key={s_k}>{sub_item.Content}</p>
                                )
                                }else if(sub_item.SubHeading === 'sub_img'){
                                    return(
                                        <img key={s_k} src={sub_item.Content} width="100%" height="400px"></img>
                                    )  
                                }
                            })
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  );
}

export default Viewblog;
