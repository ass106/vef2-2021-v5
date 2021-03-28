import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ articleId, total  }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      let json;
      const url = `${apiUrl}/${articleId}`
      try {
        const result = await fetch(url);
        if (!result.ok) {
          throw new Error('result not ok');
        }
        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt flokk.');
        return;
      } finally {
        setLoading(false);
      }
      setData(json);
    }
    fetchData();
  }, [articleId]); 

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
  console.log(total ? s.category : null);
  return(
    <div className={!total ? s.category : null}>
      <div className={!total ? s.articles : null}>
        {data && (<h2>{data.title}</h2>)}
        {data && data.items.slice(0, total).map((article, index) => (
          <p key={index}>
            <a href={article.link}>{article.title}</a>
          </p>
        ))}
      </div>
      {!total &&
        <NavLink 
          className={s.navlink}
          to='/'>Til baka
        </NavLink>
      }
    </div>
  );
}