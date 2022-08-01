import React from 'react'
import './article.css'

const articlePost = () => {
    return (
        <>
            <article className="post">
                <div className="post__header">
                    <a className="post__preview" href="#">
                        <img
                            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                            alt="Как писать быстро и безболезненно?"
                        />
                    </a>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <a href="#">Как писать быстро и безболезненно?</a>
                    </h2>
                    <p className="post__text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Delectus, placeat laudantium? Repellat nam harum
                        magni perferendis maxime deleniti repudiandae in beatae
                        ut, fugiat sed praesentium omnis, excepturi labore,
                        incidunt assumenda.
                    </p>
                </div>
                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2022-09-28 19:24">28.09.2022</time>
                        </li>
                        <li className="post__data-item-title">
                            <a href="№">создание сайтов</a>
                        </li>
                    </ul>

                    <a href="#" className="post__read">
                        читать
                    </a>
                </div>
            </article>
            <article className="post">
                <div className="post__header">
                    <a className="post__preview" href="#">
                        <img
                            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Купил новый ноутбук для работы"
                        />
                    </a>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <a href="#">Купил новый ноутбук для работы</a>
                    </h2>
                    <p className="post__text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Delectus, placeat laudantium? Repellat nam harum
                        magni perferendis maxime deleniti repudiandae in beatae
                        ut, fugiat sed praesentium omnis, excepturi labore,
                        incidunt assumenda.
                    </p>
                </div>
                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2022-09-28 19:24">28.09.2022</time>
                        </li>
                        <li className="post__data-item-title">
                            <a href="№">создание сайтов</a>
                        </li>
                    </ul>

                    <a href="#" className="post__read">
                        читать
                    </a>
                </div>
            </article>
        </>
    )
}

export default articlePost
