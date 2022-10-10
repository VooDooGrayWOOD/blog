import React from 'react'

const AboutMe = () => {
    return (
        <div className="container mx-auto max-w-[760px] pt-5 pl-6 pr-6 text-xl text-teal-700">
            <h2 className="text-xl font-extrabold tracking-tight text-teal-700 sm:text-4xl">
                Меня зовут Сергей.
            </h2>
            <div className="mt-4  text-gray-500">
                <p className="pb-6">
                    Я Front-End разработчик, живу в России. У меня серьезная
                    страсть к эффектам, анимации и созданию интуитивно
                    понятного, динамичного пользовательского интерфейса.
                </p>
                <p className="pb-6">
                    Хорошо организованный человек, умеющий решать проблемы, с
                    большим вниманием к деталям. Поклонник рыбалки, активного
                    отдыха, кино и сериалов. Семейный человек и отец двух детей.
                </p>
                <p className="pb-6">
                    Интересуюсь всем спектром интерфейсов и работаю над
                    амбициозными проектами с позитивными людьми.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
