import React from 'react';
import "./Tender.scss"

const Tender = () => {
  return (
    <div className="tender">
      <div className="video-container">
        <div className="video-behind">
          <iframe
            src="https://www.youtube.com/embed/WhL0xMnacog"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe src="https://www.youtube.com/embed/skt8JWECO2I?si=ucA4Y6JMUFslHg-V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/Zhr6-uHBF3Q?si=x-gERlGaCVAYnZyj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

      <div className="contract-container">
        <div className="left-section">
          <div>
            <h3>Конкурс с неограниченным участием - № ИКЗ-2023-000560 </h3>
            <p className="contract-maindetails"><a href="#">Строительные, ремонтные и монтажные работы. Металлоконструкции. Сметы.</a></p>
          </div>
          <div>
            <h3>Организатор</h3>
            <p className="contract-details">Государственное предприятие "Кара-Балтинский спиртовый завод" </p>
          </div>
        </div>
        
        <div className="right-section">
          <h3>Начальная цена</h3>
          <p className="contract-price">660 104,50 KGS</p>

          <h3>Заключение контракта</h3>
          <p className="contract-price__under">5 дня </p>
        </div>
      </div>
      <div className="contract-container">
        <div className="left-section">
          <div>
            <h3>Простая закупка - № ИПЗ-2023-000106 </h3>
            <p className="contract-maindetails"><a href="#">Приобретение комплектующих материалов</a></p>
          </div>
          <div>
            <h3>Организатор</h3>
            <p className="contract-details">Государственное предприятие "Кыргызаэронавигация" </p>
          </div>
        </div>
        
        <div className="right-section">
          <h3>Начальная цена</h3>
          <p className="contract-price">4 948 293,00 KGS</p>

          <h3>Заключение контракта</h3>
          <p className="contract-price__under">4 дня </p>
        </div>
      </div>
      <div className="contract-container">
        <div className="left-section">
          <div>
            <h3>Простая закупка - № ИПЗ-2023-000102 </h3>
            <p className="contract-maindetails"><a href="#">Приобретение бытовой техники для Ошского филиала ГП "Кыргызаэронавигация"</a></p>
          </div>
          <div>
            <h3>Организатор</h3>
            <p className="contract-details">Государственное предприятие "Кыргызаэронавигация</p>
          </div>
        </div>
        
        <div className="right-section">
          <h3>Начальная цена</h3>
          <p className="contract-price">660 104,50 KGS</p>

          <h3>Заключение контракта</h3>
          <p className="contract-price__under">10 дня</p>
        </div>
      </div>
      <div className="contract-container">
        <div className="left-section">
          <div>
            <h3>Простая закупка - № ИПЗ-2023-000102 </h3>
            <p className="contract-maindetails"><a href="#">Приобретение бытовой техники для Ошского филиала ГП "Кыргызаэронавигация"</a></p>
          </div>
          <div>
            <h3>Организатор</h3>
            <p className="contract-details">Государственное предприятие "Кыргызаэронавигация" </p>
          </div>
        </div>
        
        <div className="right-section">
          <h3>Начальная цена</h3>
          <p className="contract-price">334 700,00 KGS</p>

          <h3>Заключение контракта</h3>
          <p className="contract-price__under">13 day</p>
        </div>
      </div>
      <div className="contract-container">
        <div className="left-section">
          <div>
            <h3>Конкурс с неограниченным участием - № ИКЗ-2023-000545 </h3>
            <p className="contract-maindetails"><a href="#">Закупка услуг "По обучению в области кибербезопасности.</a></p>
          </div>
          <div>
            <h3>Организатор</h3>
            <p className="contract-details">Муниципальное предприятие "Центр цифровых технологий" мэрии города Бишкек </p>
          </div>
        </div>
        
        <div className="right-section">
          <h3>Начальная цена</h3>
          <p className="contract-price">188 888,25 KGS</p>

          <h3>Заключение контракта</h3>
          <p className="contract-price__under">18 day</p>
        </div>
      </div>
      

      {/* Добавьте больше блоков с контрактами, если необходимо */}
    </div>
  );
};

export default Tender;