import React from "react";
import PrevArrow from "./Slider/ArrowPrevious"
import NextArrow from "./Slider/ArrowNext"


export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
                initialSlide: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

export const categories = {
    movieCategories: {
        Upcoming: "Upcoming movies",
        Top: "Top rated movies",
        Popular: "Popular movies",
        PlayingNow: "Movies playing now"
    },
    gamesCategories: {
        Upcoming: "Upcoming games",
        Top: "Top rated games",
        Popular: "Popular games",
    }
}