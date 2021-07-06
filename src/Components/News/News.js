import React from 'react';
import '../../App.css';
import {NavLink,Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import RenderNews from "./RenderNews";
import style from "./News.module.css"


async function searchNews(q) {
    q = encodeURIComponent(q);
    const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&setLang=RU&safeSearch=Strict&q=${q}`, {
        "method": "GET",

        "headers": {
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "f3ee0b6ee2mshae648d46461b828p1dfe7fjsn6e044054ed15",
            "x-bingapis-sdk": "true"
        }
    });
    const body = await response.json();
    return body.value;
}

function News(props) {
    const [query, setQuery] = React.useState("дорога");
    const [list, setList] = React.useState(null);

    const search = (e) => {
        e.preventDefault();
        searchNews(query).then(setList);
    };

    return (
        <div className={style.formwrap}>
            <form onSubmit={search}>
                <input
                    autoFocus
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button>Search</button>
            </form>

            {!list
                ? null
                : list.length === 0
                    ? <p><i>No results</i></p>
                    : <ul>
                        {list.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </ul>
            }
        </div>
    );
}

function Item({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

    return (
        <li className="item">
            {item.image &&
            <img className="thumbnail"
                 alt=""
                 src={item.image?.thumbnail?.contentUrl}
            />
            }

            <h2 className="title">

<RenderNews url={item.url} name={item.name}/>
            </h2>

            <p className="description">
                {item.description}
            </p>

            <div className="meta">
                <span>{formatDate(item.datePublished)}</span>

                <span className="provider">
          {item.provider[0].image?.thumbnail &&
          <img className="provider-thumbnail"
               alt=""
               src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
          />
          }
                    {item.provider[0].name}
        </span>

                {item.category &&
                <span>{separateWords(item.category)}</span>
                }
            </div>
        </li>
    );
}

export default withRouter(News);