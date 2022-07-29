import React from 'react'
import './article.css'

const articlePost = () => {
    return (
        <>
            <div className="post">
                <div className="post__content">
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
                    </ul>
                </div>
            </div>

            <article className="post">
                <div className="post__header">
                    <a className="post__preview" href="#">
                        <img
                            src="../images/post-2.jpg"
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
                        <li className="post__data-item">
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