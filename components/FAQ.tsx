'use client';
import React, {useState} from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems = [
        {
            question: 'Есть ли у вас экскурсии или туры?',
            answer: 'Нет. Мы исключительно информационный проект. Мы не проводим экскурсии, не набираем группы, не бронируем отели и не продаём билеты. Наша задача — собрать проверенную информацию о достопримечательностях, маршрутах и культуре Самарской области, чтобы вы могли спланировать самостоятельное путешествие.'
        },
        {
            question: 'Можно ли заказать у вас индивидуального гида?',
            answer: 'Нет, мы не предоставляем услуги гидов и не рекомендуем конкретных частных лиц (чтобы сохранять объективность). Но в наших статьях и маршрутах вы найдёте контакты музеев, визит-центров заповедников — там часто можно нанять экскурсовода на месте.'
        },
        {
            question: 'А вы продаёте билеты в музеи или на мероприятия?',
            answer: 'Нет. Мы лишь указываем актуальные цены и режим работы (по данным официальных источников). Покупать билеты нужно самостоятельно — через сайты музеев или в кассах.'
        },
        {
            question: 'Насколько точна информация о достопримечательностях?',
            answer: 'Мы стараемся обновлять данные не реже раза в полгода, но рекомендуем перед поездкой уточнять часы работы и цены на официальных сайтах (ссылки мы даём). Если вы нашли ошибку — напишите нам, мы поправим.'
        },
        {
            question: 'Могу ли я предложить добавить новую достопримечательность или город/регион?',
            answer: 'Да! Мы открыты для предложений от местных жителей, краеведов и путешественников. Для этого напишите нам на почту: sight-seeing-rf@yandex.ru'
        },
        {
            question: 'Как пользоваться вашими маршрутами?',
            answer: 'Все маршруты можно посмотреть на сайте, а когда соберётесь в дорогу, то можете открыть маршрут на Яндекс.Картах и отправиться в путешествие.'
        },
        {
            question: 'Как сообщить о проблеме (неработающая ссылка, закрытый музей)?',
            answer: 'Чтобы сообщить нам об ошибке на сайте, напишите нам на электронную почту: sight-seeing-rf@yandex.ru'
        }
    ];

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mb-10 md:mb-[60px] lg:mb-[110px]">
            <div className="container mx-auto py-16 px-8 max-w-[1440px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
                    <div className="lg:col-span-6">
                        <h2 className="text-[32px] md:text-[40px] font-bold text-black leading-tight">
                            Часто задаваемые вопросы
                        </h2>
                    </div>
                    <div className="lg:col-span-6 space-y-8">
                        {faqItems.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full flex items-start text-left focus:outline-none group"
                                >
                                    <span className="w-5 h-5 mt-1 mr-4 shrink-0 flex items-center justify-center">
                                        {openIndex === index ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M13 1L1 13M1 1L13 13" stroke="black" strokeWidth="2"
                                                      strokeLinecap="round"/>
                                            </svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M7 1V13M1 7H13" stroke="black" strokeWidth="2"
                                                      strokeLinecap="round"/>
                                            </svg>
                                        )}
                                    </span>
                                    <span className="text-[18px] md:text-[20px] font-bold text-black leading-snug">
                                        {item.question}
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        openIndex === index
                                            ? 'grid-rows-[1fr] opacity-100 mt-4'
                                            : 'grid-rows-[0fr] opacity-0 mt-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <span
                                            className="block pl-9 text-[14px] md:text-[15px] text-gray-800 leading-relaxed w-full">
                                            {item.answer}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
