import { useState, useEffect } from "react";

let Base_Url = import.meta.env.VITE_URL;
let API_Key = import.meta.env.VITE_API_KEY;

const News = () => {
  // to store the News data ,loading and error state
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  console.log(news);

  // function for Fetching the news
  async function fetchData() {
    // setLoading(true);
    try {
      let data = fetch(
        `${Base_Url}top-headlines?category=general&apikey=${API_Key}`
      )
      data.then((n) => n.json()) //connverting the Normal object or array format
          .then((r) => setNews(r.articles)); // store the fetched api data into the useState
    //   setLoading(false); // updating the lodaing state
    } catch (error) {
      setIsError(error.name);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <section className="p-3">
    <div className="container">
        <div className="row">
            {
                news?.map(ele=>(
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="card" >
  <img src={ele.image} className="card-img-top" alt="..." width={"100%"} height={"150px"}/>
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className="card-text">{ele.description.slice(0,30)}...</p>
    <a href="#" className="btn btn-primary">ReadMore</a>
  </div>
</div>
                    </div>
                ))
            }
        </div>
    </div>
  </section>;
};

export default News;
