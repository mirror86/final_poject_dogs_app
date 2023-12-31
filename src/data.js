
export const allQuestions = {
    energy: "I am active and would like to have a very active dog",
    barking: "I don't mind a dog barking at all",
    shedding: "A lot of falling hair is not a problem",
    trainability: "I would love a smart and fast learning dog",
    protectiveness: "I need a good guard dog",
    good_with_children: "The dog must fully accept children",
    good_with_other_dogs:"The dog must fully accept other dogs"
}
export const dogHeightPreferences = {
    large: {
        label: "The bigger the better",
        heightRange: {
            min_height_male: 20,
            max_height_male: 50,
        },
    },
    medium: {
        label: "I like medium dogs",
        heightRange: {
            min_height_male: 10,
            max_height_male: 35,
        },
    },
    small: {
        label: "I love little dogs",
        heightRange: {
            min_height_male: 0,
            max_height_male: 15,
        },
    },
    notMatter: {
        label: "Size doesn't matter",
        heightRange: {
            min_height_male: 0,
            max_height_male: 0,
        },
    },
};

export const dogWeightPreferences = {
    skinny: {
        label:  "The skinny type",
        weightRange: {
            min_weight_male: 2,
            max_weight_male: 60,
        },
    },
    brawler: {
        label:  "Brawler type",
        weightRange: {
            min_weight_male: 70,
            max_weight_male: 200,
        },
    },
    notMatter: {
        label: "Doesn't matter",
        weightRange: {
            min_weight_male: 0,
            max_weight_male: 0,
        },
    },
};

export const apiUrl = "https://api.api-ninjas.com/v1/dogs?";
export const apiKey = "Puy2zDCkC5Og1tl/a9AkYQ==duVwVJvXcT0MnzNG";

export const labelValues = {
    0: "Not important",
    1: "It doesn't fit at all",
    2: "It doesn't quite fit",
    3: "It fits a bit",
    4: "It fits well",
    5: "It fits perfectly!"
}

export const traits = [
    {title: ' Min weight', key: 'min_weight_male'},
    {title: ' Max weight', key: 'max_weight_male'},
    {title: ' Min height', key: 'min_height_male'},
    {title: ' Max height', key: 'max_height_male'},
    { title: 'Energy', key: 'energy' },
    { title: 'Loudness', key: 'barking' },
    { title: 'Shedding', key: 'shedding' },
    { title: 'Trainability', key: 'trainability' },
    { title: 'Protectiveness', key: 'protectiveness' },
    { title: 'Good with children', key: 'good_with_children' },
    { title: 'Good with other dogs', key: 'good_with_other_dogs' },
];