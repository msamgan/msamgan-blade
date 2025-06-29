import React from "react";
import apiBook from "../../images/laravel-api.png";
import battleBook from "../../images/battle-ready-laravel.png";

const LearnWithMe = () => {
    return (
        <section className="py-20 bg-gray-100 text-center">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                Learn With Me
            </h2>

            {/* Book Display Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
                {[apiBook, battleBook].map((book, index) => (
                    <div key={index}>
                        <img
                            src={book}
                            alt={`Book ${index + 1}`}
                            className="h-80 object-contain mx-auto"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LearnWithMe;
