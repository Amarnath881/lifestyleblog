import React , { useEffect , useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const Home = (props) =>{

    useEffect(()=>{
       axios.get('https://mernblogdemo.herokuapp.com/api/homeTopFetch')
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
    },[])

    let [ datafetched , setdata  ] = useState([])

  

    return(
        <div className="home_content">
            <div className="container " >
                {datafetched.map((itm,k) =>{
                    return(
                        <Link to={`/viewblog/${itm.url}`}>
                            <div className="row card" key={k}>
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

export default Home