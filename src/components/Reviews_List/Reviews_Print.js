import React from 'react'
import Stars from './Stars_Reviews_List';
import Recommended from './Recomended_Reviews_List';
const dateFormat = require('dateformat');
const now = new Date();

const Review_Print = (props) => {
    return (
        <ul className="reviews-list">
            <div className="scroll-reviews">
                {props.renderNextButton && 
                    <button onClick={props.handleNext}>{'>'}</button>}
                {props.renderPreviousButton &&
                    <button onClick={props.handlePrevious}>{'< '}</button>}
            </div>
            {
                props.reviews.map((r, i) => {
                    return (
                        <div className="row" key={i}>
                            <div className="personal">
                                <p className="bold">{r.username}</p>
                                <p className="grey">Age: {r.age}</p>
                                <p className="grey">Height: {r.height}</p>
                                <p className="grey">Location: {r.location}</p>
                            </div>
                            <div className="opinnion">
                                <div className="star-date">
                                    <Stars stars={r.stars}/>
                                    <p className="grey">{dateFormat(r.date, "mm/dd/yyyy")}</p>
                                </div>
                                <p>{r.title}</p>
                                <p className="grey">{r.body}</p>
                                <p className="grey"><span className="bold">Fit: </span >{r.fit}</p>
                                <p className="grey"><span className="bold">Size Purchased: </span>{r.sizePurchased}</p>
                                <p className="grey"><span className="bold">Size Normaly Worn: </span>{r.sizeNormalyWorn}</p>
                                <br></br>
                                <Recommended recomend={r.recommended}/>
                                <br></br>
                            </div>
                            <div className="border-bottom"></div>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default Review_Print