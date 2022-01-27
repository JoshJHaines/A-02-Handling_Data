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

const reduce1 = userData.reduce((accumulator, user) => {
  return [...accumulator, user.name]
},
  []
)

console.log(reduce1)

// 7. Show us an example of a switch statement being used

switch ("burgers") {
	case "pizza":
		console.log("this food is not healthy");
		break;

	case "tacos":
		console.log("this food is only available on Tuesday");
		break;

	case "fried chicken":
		console.log("this food is finger lickin");
		break;
	case "burgers":
		console.log("pure American happiness");
		break;

	default:
		console.log("we dont know this food");
}