import React from 'react';

const RatingStarBox = ({ StarPoint }) => {
    let BeautifulStarPoint = 0; 

    if (!StarPoint) BeautifulStarPoint = 0;
    else if (StarPoint > 5) {
        BeautifulStarPoint = 5;
    } else {
        BeautifulStarPoint = Math.round(StarPoint);
    }
    
    return (			
        <span class="rate">
            <i class={BeautifulStarPoint - 1 + 1 > 0 ? "fa fa-star" : "fa fa-star-o" }/>
            <i class={BeautifulStarPoint - 2 + 1 > 0 ? "fa fa-star" : "fa fa-star-o" }/>
            <i class={BeautifulStarPoint - 3 + 1 > 0 ? "fa fa-star" : "fa fa-star-o" }/>
            <i class={BeautifulStarPoint - 4 + 1 > 0 ? "fa fa-star" : "fa fa-star-o" }/>
            <i class={BeautifulStarPoint - 5 + 1 > 0 ? "fa fa-star" : "fa fa-star-o" }/>
        </span>
    );
}

export default RatingStarBox;