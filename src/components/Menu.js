import React from "react";
import Recipe from "./Recipe";

const Menu = ({ recipes }) => {
    return (
        <article>
            <header>
                <h1>맛있게 만드는 레시피</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );
}
export default Menu;