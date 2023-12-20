import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState, useEffect } from 'react';



export default function News(props) {

  let [data,setData]=useState({
    article:[],
    page:1,
    totalResults:0,
    loading:false
  })


  useEffect(()=>{
    update();
    // eslint-disable-line
  },[])


    let update=async()=>{
      props.setProgress(0)
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78bf9e6a488f49a78a661598846f4256&page=${data.page}&pageSize=${props.size}`
      props.setProgress(25)
      setData({...data,loading:true})
      props.setProgress(50)
      fetch(url).then((x)=>{
        x.json().then((y)=>{
          setData({
            article:y.articles,
            page:data.page+1,
            loading:false,
            totalResults:y.totalResults
            
          })
          props.setProgress(80)
        })
        props.setProgress(100)
      })   
    }

    let fetchData=async()=>{
      console.log(data.totalResults,data.article.length)
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=78bf9e6a488f49a78a661598846f4256&page=${data.page}&pageSize=${props.size}`
      fetch(url).then((x)=>{
        x.json().then((y)=>{
          setData({
            article:data.article.concat(y.articles),
            page:data.page+1,
            loading:false,
            totalResults:y.totalResults
          })
        })
      })  
     
    }


    return (
        <div>
          <center style={{marginBottom:"20px"}}><h4><b>NEWS MONKEY - TOP {props.category.toUpperCase()} HEADLINES</b></h4></center>
          {data.loading && <Spinner/>}
          <div className='container'>
            <InfiniteScroll dataLength={data.article.length} 
              next={fetchData}
              hasMore={data.totalResults > data.article.length}
              loader={<Spinner/>}>
              <div className='row'>
                {
                 
                  data.article.map((e)=>{
                    return(
                      <div className='col-md-3 my-3' key={e.url}>
                        <Newsitem title={e.title} desc={e.description} image={e.urlToImage} path={e.url} author={e.author} time={e.publishedAt} publisher={e.source.name}/>
                      </div> 
                    )
                  })
                }
              </div>
            </InfiniteScroll>
                 
          </div>  
        </div>
      
    )
  }
