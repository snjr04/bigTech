import React from 'react';
import style from './News.module.scss';

const News = () => {
  const newsData = [
    {
      date: '2023-10-28',
      title: 'Заголовок новости 1',
      content: 'Содержание новости 1...',
    },
    {
      date: '2023-10-27',
      title: 'Заголовок новости 2',
      content: 'Содержание новости 2...',
    },
    {
      date: '2023-10-28',
      title: 'Заголовок новости 1',
      content: 'Содержание новости 1...',
    },
    {
      date: '2023-10-27',
      title: 'Заголовок новости 2',
      content: 'Содержание новости 2...',
    },
    {
      date: '2023-10-28',
      title: 'Заголовок новости 1',
      content: 'Содержание новости 1...',
    },
    {
      date: '2023-10-27',
      title: 'Заголовок новости 2',
      content: 'Содержание новости 2...',
    },
  ];


  return (
    <section className={style.news}>
      <div className={style['news-container']}>
        <div className={style['news-blocks']}>
          {newsData.map((news, index) => (
            <div key={index} className={style['news-block']}>
              <div className={style['news-header']}>
                <a href="#" className={style['news-title']}>{news.title}</a>
                <div className={style['news-date']}>{news.date}</div>
              </div>
              <div className={style['news-content']}>{news.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
