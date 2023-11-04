import React from 'react';
import "./Plans.scss"

const FuturePlans = () => {
  const plans = [
    {
      title: 'План 1',
      summary: 'КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО "ЛІКАРНЯ СВЯТОГО МАРТИНА" ',
      description: '11. Примітки: Код за ДК 021:2015 – 33730000-6 Офтальмологічні вироби та коригувальні лінзи Одноразовий пристрій для введення інтраокулярної лінзи НК 024:2023 42367; Ніж безпечний для тунельного розрізу 2,65 мм, зігнутий НК 024:2023 32764; Ніж безпечний Sideport 1,4мм (19Ga),зігнутий НК 024:2023 32764; Інтраокулярна лінза акрилова гідрофільна м’яка НК 024:2023 16069; Віскоеластик 1.0 мл. , гіалуронат натрію 3% НК 024:2023 62885; Віскоеластик 2,0 мл. гідроксипропіл-метилцелюлоза НК 024:2023 62885; Інтракапсулярне кільце НК 024:2023 32758; Розчин офтальмологічний трипанового синього НК 024:2023 37207',
      amount: '$1000',
      date: '03.11.2023',
    },
    {
      title: 'План 2',
      summary: 'Краткое содержание плана 2',
      description: 'Подробное описание плана 2',
      amount: '$1500',
      date: '04.11.2023',
    },
    {
        title: 'План 1',
        summary: 'Краткое содержание плана 1',
        description: 'Подробное описание плана 1',
        amount: '$1000',
        date: '03.11.2023',
      },
      {
        title: 'План 2',
        summary: 'Краткое содержание плана 2',
        description: 'Подробное описание плана 2',
        amount: '$1500',
        date: '04.11.2023',
      },
      {
        title: 'План 1',
        summary: 'Краткое содержание плана 1',
        description: 'Подробное описание плана 1',
        amount: '$1000',
        date: '03.11.2023',
      },
    // Добавьте другие планы сюда
  ];

  return (
    <div className="future-plans">
      {plans.map((plan, index) => (
        <a href="/DetailedPlan" className="plan" key={index}>
          <div className="plan-title">
            <a href="#">{plan.title}</a>
          </div>
          <p className="plan-summary">{plan.summary}</p>
          <p className="plan-description">{plan.description}</p>
          <div className="plan-details">
            <p className="plan-amount">Плановая сумма: {plan.amount}</p>
            <p className="plan-date">Дата публикации: {plan.date}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FuturePlans;