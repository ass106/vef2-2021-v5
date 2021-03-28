import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { News } from '../news/News';
import s from './NewsList.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      let json;
      try {
        const result = await fetch(apiUrl);
        if (!result.ok) {
          throw new Error('result not ok');
        }
        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt fréttir');
        return;
      } finally {
        setLoading(false);
      }
      setData(json);
    }
    fetchData();
  }, []);   

  const headlines = [];
  for (let i = 0; i < data.length; i+=1){
    const article = {id: data[i].id, title: data[i].title, url: data[i].url};
    headlines.push(article);
  }

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }
  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  return (
    <div>
        <div className={s.articles}>
          {data && headlines.map((article, index) => (
            <div key={index} className={s.categories}>
              <div className={s.news}>
                <News articleId={article.id} total={5}/>
              </div>
              <p><NavLink
                className={s.navlink}
                to={`/frett/${article.id}`}>Allar fréttir
              </NavLink></p>
            </div>
          ))}
        </div>
    </div>
  );
}