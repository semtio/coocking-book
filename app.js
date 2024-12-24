// Пример локальной базы данных рецептов
const recipes = [
    {
        title: "Яичница с помидорами",
        ingredients: ["яйца", "помидоры", "масло"],
        instructions: "Смешайте яйца, обжарьте с нарезанными помидорами."
    },
    {
        title: "Блины",
        ingredients: ["яйца", "молоко", "мука"],
        instructions: "Смешайте все ингредиенты, обжарьте на сковороде."
    },
    {
        title: "Салат Цезарь",
        ingredients: ["курица", "салат", "сыр", "соус"],
        instructions: "Смешайте курицу, салат, сыр и заправьте соусом."
    },
    {
        title: "Куриный суп",
        ingredients: ["курица", "морковь", "лук", "картофель"],
        instructions: "Варите курицу с овощами до готовности."
    },
    {
        title: "Пицца",
        ingredients: ["мука", "сыр", "помидоры", "ветчина"],
        instructions: "Испеките тесто, добавьте начинку и запеките."
    }
];



function findRecipes() {
    const input = document.getElementById("ingredients").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    if (!input.trim()) {
        resultsDiv.innerHTML = '<p class="error">Пожалуйста, введите ингредиенты.</p>';
        return;
    }

    const keywords = input.split(',').map(word => word.trim());
    const matchingRecipes = recipes.filter(recipe =>
        keywords.every(keyword => recipe.ingredients.includes(keyword))
    );

    if (matchingRecipes.length === 0) {
        resultsDiv.innerHTML = '<p class="error">Рецепты не найдены.</p>';
        return;
    }

    const limitedResults = matchingRecipes.slice(0, 5);
    resultsDiv.innerHTML = limitedResults
        .map(recipe => `
            <p>
                <strong>${recipe.title}</strong><br>
                <em>Ингредиенты:</em> ${recipe.ingredients.join(", ")}<br>
                <em>Инструкции:</em> ${recipe.instructions}
            </p>
        `)
        .join("");
}

