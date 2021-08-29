
import React , { useEffect , useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const Service = (props) =>{

    useEffect(()=>{
       axios.get('https://api.publicapis.org/entries')
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
    },[])

    let [ datafetched , setdata  ] = useState([])
    return(
        <div className="home_content">
            <div className="container " >
                {datafetched.map((itm,S) =>{
                    return(
                        <Link to={`/viewservice/${itm.url}`}>
                            <div className="row card" key={S}>
                                <div className="col-md-6 about_cont">
                                <img src={itm.imgUrl} width="100%" height="100%"></img>
                                </div>
                                <div className="col-md-6 about_img">
                                <h1>{ itm.title } </h1>
                                <p>{itm.preheading }</p>
                                </div>
                            </div>
                        </Link>
                        )
                    })
              }
            </div>
        </div>
    )
}

export default Service