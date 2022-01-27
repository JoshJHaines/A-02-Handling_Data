const userData = [
	{
		id: "111",
		name: "Peter",
		favorites: {
			food: ["burgers", "pizza"],
			activites: ["basketball", "baseball"],
		},
	},
	{
		id: "222",
		name: "John",
		favorites: {
			food: ["burgers", "tacos"],
			activites: ["football", "golf"],
		},
	},
	{
		id: "333",
		name: "Mary",
		favorites: {
			food: ["pizza", "tacos", "fried chicken"],
			activites: ["volleyball", "softball"],
		},
	},
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const map1 = userData.map((user) => {
	return {
		id: user.id,
		favoriteFoods: user.favorites.food.length,
	};
});

console.log(map1);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

// 7. Show us an example of a switch statement being used
