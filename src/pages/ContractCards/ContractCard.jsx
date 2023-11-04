import React from 'react';
import './ContractCards.scss'
import {Link} from "react-router-dom";
import './ContractCards'

const ContractsCard = () => {
    return (
        <div className='ContractsCard'>
            <div className="title-container">
                <button onClick={() => window.history.back()}>Назад</button>
          <h2>Информация об организации</h2>
            </div>
        <div className="infor-container">
      <div className="top">
      Общие сведения
      </div>
      <div className="contractCards-container">
             
                
               
                <div className="left-section">
                    <div>
                        <h3>Наименование закупки</h3>
                        <p className="contractcards-maindetails">Поставка лекарственных препаратов для медицинского применения Инсулины</p>
                    </div>
                    
                    
                   <div className="bottom">
                    <div className="left">
                    Номер редакции извещения
                    </div>
                    <div className="right">
                    1
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Идентификационный код закупки
                    </div>
                    <div className="right">
                    232352801407835280
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Объект закупки
                    </div>
                    <div className="right">
                    Поставка лекарственных препаратов для медицинского применения Инсулины
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Номер закупки
                    </div>
                    <div className="right">
                    0330300002623000104
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Способ закупки
                    </div>
                    <div className="right">
                    Запрос котировок в электронной форме
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Текущая стадия
                    </div>
                    <div className="right">
                        <p className="contract-details, aplication" > Приём заявок </p>
                    </div>
                    
                   </div>
                   

                    </div>
                 
               
           
                <div className="right-section">
                    <h3>Начальная цена</h3>
                    <p className="contractcards-price">188 888,25 KGS</p>

                    <h3>Дата и время начала подачи заявок</h3>
                    <p className="contract-price__under">27.10.2023
                    19:08 | GMT+6</p>
                    
                    <h3>Дата и время начала подачи заявок</h3>
                    <p className="contract-price__under">06.11.2023
                    12:00 | GMT+6</p>
                    
                    <h3>Дата и время окончания подачи заявок</h3>
                    <p className="contract-price__under">08.11.2023
                    02:59| GMT+6</p>

                    


                </div>
             </div>
      
        </div>

        <div className="infor-container">
      <div className="top">
      Сведения об организаторе
      </div>
      
             
                
               
                <div className="about_organization">
  
                   <div className="bottom">
                    <div className="left">
                    Наименование организации
                    </div>
                    <div className="right">
                    БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ ВОЛОГОДСКОЙ ОБЛАСТИ "ВОЛОГОДСКАЯ ОБЛАСТНАЯ ДЕТСКАЯ БОЛЬНИЦА № 2"
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Тип организации

                    </div>
                    <div className="right">
                    Заказчик
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    ИНН
                    </div>
                    <div className="right">
                    3528014078
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    КПП
                    </div>
                    <div className="right">
                    352801001
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Место
                    </div>
                    <div className="right">
                    720084, Чуйская обл, Бишкек г, УЛ. КАДЖИСАЙ, Д.35
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Почтовый адрес
                    </div>
                    <div className="right">
                    72039594, УЛ. КАДЖИСАЙ, Бишкек г, Чуйская обл,  Д.35
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Контактный телефон
                    </div>
                    <div className="right">
                    +(999) 99-77-99
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Адрес электронной почты
                    </div>
                    <div className="right">
                    bigtech@mail.ru
                    </div>
                    
                   </div>

                   <div className="bottom">
                    <div className="left">
                    Ответственное должностное лицо
                    </div>
                    <div className="right">
                    Мазурак Арина Андреевна
                    </div>
                    
                   </div>
                   

                    </div>
                 
               
           

             </div>
      
       

<div className="wrapper">
          <section className="details-group">
            <details className="details" open>
              <summary className="details__summary">
                сведения о предмете закупки 
              </summary>
              <div className="details__content">
              <div className="about_organization">
  
  <div className="bottom">
   <div className="left">
   Наименование организации
   </div>
   <div className="right">
   БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ ВОЛОГОДСКОЙ ОБЛАСТИ "ВОЛОГОДСКАЯ ОБЛАСТНАЯ ДЕТСКАЯ БОЛЬНИЦА № 2"
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Тип организации

   </div>
   <div className="right">
   Заказчик
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   ИНН
   </div>
   <div className="right">
   3528014078
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   КПП
   </div>
   <div className="right">
   352801001
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Место
   </div>
   <div className="right">
   720084, Чуйская обл, Бишкек г, УЛ. КАДЖИСАЙ, Д.35
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Почтовый адрес
   </div>
   <div className="right">
   72039594, УЛ. КАДЖИСАЙ, Бишкек г, Чуйская обл,  Д.35
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Контактный телефон
   </div>
   <div className="right">
   +(999) 99-77-99
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Адрес электронной почты
   </div>
   <div className="right">
   bigtech@mail.ru
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Ответственное должностное лицо
   </div>
   <div className="right">
   Мазурак Арина Андреевна
   </div>
   
  </div>
  

   </div>
              </div>
            </details>
            <details className="details">
              <summary className="details__summary">Ограничения, преимущества, требования к участникам и документам для предоставления</summary>
              <div className="details__content">
              <div className="about_organization">
  
  <div className="bottom">
   <div className="left">
   Наименование организации
   </div>
   <div className="right">
   БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ ВОЛОГОДСКОЙ ОБЛАСТИ "ВОЛОГОДСКАЯ ОБЛАСТНАЯ ДЕТСКАЯ БОЛЬНИЦА № 2"
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Тип организации

   </div>
   <div className="right">
   Заказчик
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   ИНН
   </div>
   <div className="right">
   3528014078
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   КПП
   </div>
   <div className="right">
   352801001
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Место
   </div>
   <div className="right">
   720084, Чуйская обл, Бишкек г, УЛ. КАДЖИСАЙ, Д.35
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Почтовый адрес
   </div>
   <div className="right">
   72039594, УЛ. КАДЖИСАЙ, Бишкек г, Чуйская обл,  Д.35
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Контактный телефон
   </div>
   <div className="right">
   +(999) 99-77-99
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Адрес электронной почты
   </div>
   <div className="right">
   bigtech@mail.ru
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Ответственное должностное лицо
   </div>
   <div className="right">
   Мазурак Арина Андреевна
   </div>
   
  </div>
  

   </div>
              </div>
            </details>
            <details className="details">
              <summary className="details__summary">Требование заказчика МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ ПО РЕСПУБЛИКЕ ХАКАСИЯ</summary>
              <div className="details__content">
              <div className="about_organization">
  
  <div className="bottom">
   <div className="left">
   Наименование организации
   </div>
   <div className="right">
   БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ ВОЛОГОДСКОЙ ОБЛАСТИ "ВОЛОГОДСКАЯ ОБЛАСТНАЯ ДЕТСКАЯ БОЛЬНИЦА № 2"
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Тип организации

   </div>
   <div className="right">
   Заказчик
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   ИНН
   </div>
   <div className="right">
   3528014078
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   КПП
   </div>
   <div className="right">
   352801001
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Место
   </div>
   <div className="right">
   720084, Чуйская обл, Бишкек г, УЛ. КАДЖИСАЙ, Д.35
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Почтовый адрес
   </div>
   <div className="right">
   72039594, УЛ. КАДЖИСАЙ, Бишкек г, Чуйская обл,  Д.35
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Контактный телефон
   </div>
   <div className="right">
   +(999) 99-77-99
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Адрес электронной почты
   </div>
   <div className="right">
   bigtech@mail.ru
   </div>
   
  </div>

  <div className="bottom">
   <div className="left">
   Ответственное должностное лицо
   </div>
   <div className="right">
   Мазурак Арина Андреевна
   </div>
   
  </div>
  

   </div>
              </div>
            </details>
            </section>
</div>
     
 <div className="submit-button">
        <button>Подать заявку</button>
      </div>
      



        
        
</div>


      );
    };



export default ContractsCard;





