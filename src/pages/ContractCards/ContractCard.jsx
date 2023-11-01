import React from 'react';
import './ContractCards.scss'

const ContractsCard = () => {
    return (
        <div>
            <div className="title-container">
                <button onClick={() => window.history.back()}>Назад</button>
          <h2>Информация об организации</h2>
            </div>
          
          <div className="info-container">
            <div className="info-section">
              <h3>Наименование организации</h3>
              <p>МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ ДОШКОЛЬНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ <br /> "ЦЕНТР РАЗВИТИЯ РЕБЁНКА-ДЕТСКИЙ САД № 73"</p>
            </div>
            <hr className="divider" />
            <div className="info-section">
              <h3>Форма собственности</h3>
              <p>МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ ДОШКОЛЬНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ</p>
            </div>
            <hr className="divider" />
            <div className="info-section">
              <h3>ИНН организации</h3>
              <p>02903201210019</p>
            </div><hr className="divider" />
            <div className="info-section">
              <h3>Населённый пункт</h3>
              <p>Сулюкта</p>
            </div><hr className="divider" />
            <div className="info-section">
              <h3>Фактический адрес</h3>
              <p>ул. Раззакова., д. 87</p>
            </div><hr className="divider" />
            <div className="info-section">
              <h3>Рабочий телефон</h3>
              <p>0365350074</p>
            </div><hr className="divider" />
            <div className="info-section">
              <h3>Банк</h3>
              <p>Центральное Казначейство</p>
            </div><hr className="divider" />
            <div className="info-section">
              <h3>Р/счет</h3>
              <p>4409051223000893</p>
            </div><hr className="divider" />
             <div className="info-section">
              <h3>Валюта контракта</h3>
              <p>Кыргызский сом (KGS)</p>
            </div>
            
            <hr className="divider" />
            <div className="info-section">
              <h3>Дата заключения контракта</h3>
              <p>22.09.2023</p>
            </div>
            <hr className="divider" />
           <div className="info-section">
              <h3>ФИО пользователя</h3>
              <p>Жумагулов Талантбек Абдыкулович</p>
              </div>
            <hr className="divider" />
            <div className="info-section">
              <h3>Должность</h3>
              <p>	Руководитель</p>
            </div>
            
          </div>
        </div>
      );
    };

export default ContractsCard;

