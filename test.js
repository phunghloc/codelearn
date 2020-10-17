// const axios = require('axios');

// const url = 'https://my-burger-phl.firebaseio.com';

// axios.get(url + '/allpractice/-MJoNGLZKwRoVVWcIX3i.json')
//     .then(res => {
//         console.log(res.data[0]);
//     })
//     .catch(() => console.log('error'));

// const questions = [
//     {
//         detail: "Each of us must take ______ for out own actions.",
//         type: 'radio',
//         answers: [
//             'probability',
//             'ability',
//             'possibility',
//             'responsibility',
//         ],
//         correct: 'responsibility',
//     },
//     {
//         detail: "He wanted to know ______.",
//         type: 'radio',
//         answers: [
//             'where he could change some money',
//             'where he can change some money',
//             'where could he change some money',
//             'where can he change some money',
//         ],
//         correct: 'where he could change some money',
//     },
//     {
//         detail: "Mary didn't remember what I ______ her the day before.",
//         type: 'radio',
//         answers: [
//             'have told',
//             'told',
//             'was telling',
//             'had told',
//         ],
//         correct: 'had told',
//     },
//     {
//         detail: "_____, a husband should share certain thoughts to his wife only",
//         type: 'radio',
//         answers: [
//             'In my opinion',
//             'To all people',
//             'My hobbies',
//             'Agreement',
//         ],
//         correct: 'In my opinion',
//     },
//     {
//         detail: "Women also work to share the household financial _____ with their husbands.",
//         type: 'radio',
//         answers: [
//             'burden',
//             'weight',
//             'milestone',
//             'load',
//         ],
//         correct: 'burden',
//     },
//     {
//         detail: "The boys who enjoy playing tricks and annoying people are _____.",
//         type: 'radio',
//         answers: [
//             'caring',
//             'supportive',
//             'mischievous',
//             'obedient',
//         ],
//         correct: 'mischievous',
//     },
//     {      
//         detail: "Your opinion is reasonable, so it is _____.",
//         type: 'radio',
//         answers: [
//             'acceptable',
//             'suffered',
//             'denied',
//             'refused',
//         ],
//         correct: 'acceptable',
//     },
//     {
//         detail: "In some special social situations, pointing at someone is completely _____.",
//         type: 'radio',
//         answers: [
//             'lovely',
//             'acceptable',
//             'gentle',
//             'formal',
//         ],
//         correct: 'acceptable',
//     },
//     {
//         detail: "_____, a teacher may point to student so as to get his or her attention.",
//         type: 'radio',
//         answers: [
//             'Forgive',
//             'Forever',
//             'For instance',
//             'For the sack of',
//         ],
//         correct: 'For instance',
//     },
//     {
//         detail: "In some social situations, _____ is allowed to friends.",
//         type: 'radio',
//         answers: [
//             'fighting seriously',
//             'rudeness',
//             'accurate',
//             'informality',
//         ],
//         correct: 'informality',
//     },
//     {
//         detail: "Your _____ to life decides whether you are happy or not.",
//         type: 'radio',
//         answers: [
//             'thinking',
//             'opinion',
//             'attitude',
//             'dream',
//         ],
//         correct: 'attitude',
//     },
//     {
//         detail: "I do not think there is a real _____ between men and women at home as well as in society.",
//         type: 'radio',
//         answers: [
//             'attitude',
//             'value',
//             'measurement',
//             'equality',
//         ],
//         correct: 'equality',
//     },
//     {
//         detail: "They decide to divorce and Mary is _____ to get the right to raise the child.",
//         type: 'radio',
//         answers: [
//             'equal',
//             'determined',
//             'obliged',
//             'active',
//         ],
//         correct: 'determined',
//     },
//     {
//         detail: "Some researchers have just _____ a survey of young people's points of view on contractual marriage.",
//         type: 'radio',
//         answers: [
//             'sent',
//             'directed',
//             'managed',
//             'conducted',
//         ],
//         correct: 'conducted',
//     },
//     {
//         detail: "It is not easy to _____ our beauty when we get older and older.",
//         type: 'radio',
//         answers: [
//             'maintain',
//             'develop',
//             'gain',
//             'collect',
//         ],
//         correct: 'maintain',
//     },
//     {
//         detail: "We can use _____ and _____ forms of communication to attract one's attention.",
//         type: 'radio',
//         answers: [
//             'silent / noise',
//             'verbal / non-verbal',
//             'verb / adverb',
//             'gentle / impolite',
//         ],
//         correct: 'verbal / non-verbal',
//     },
//     {
//         detail: "Probably the most common ways of attracting someone's attention is by _____.",
//         type: 'radio',
//         answers: [
//             'dancing',
//             'singing',
//             'yelling',
//             'waving',
//         ],
//         correct: 'waving',
//     },
//     {
//         detail: "When you see your brother _____ the plane, you may _____ to call his name.",
//         type: 'radio',
//         answers: [
//             'look at / throw a stone to him',
//             'pass by / whistle and clap your hands',
//             'get off / claps your hands',
//             'get off / jump up and down',
//         ],
//         correct: 'get off / claps your hands',
//     },
//     {
//         detail: "There are some social _____ where smaller, non-verbal signals are more appropriate.",
//         type: 'radio',
//         answers: [
//             'situations',
//             'signatures',
//             'attractions',
//             'documents',
//         ],
//         correct: 'situations',
//     },
//     {
//         detail: "When you approve someone's opinion, you can stare at him or her and _____ slightly.",
//         type: 'radio',
//         answers: [
//             'kneel',
//             'nod',
//             'shake you head',
//             'sigh',
//         ],
//         correct: 'nod',
//     },
//     {
//         detail: "I said that I had met her _____.",
//         type: 'radio',
//         answers: [
//             'yesterday',
//             'the previous day',
//             'the day',
//             'the before day',
//         ],
//         correct: 'the previous day',
//     },
//     {
//         detail: "The man asked the boys _____.",
//         type: 'radio',
//         answers: [
//             'why did they fight',
//             'why they were fighting',
//             'why they fight',
//             'why were they fighting',
//         ],
//         correct: 'why they were fighting',
//     },
//     {
//         detail: "Peter tried his best and passed the driving test at the first _____.",
//         type: 'radio',
//         answers: [
//             'try',
//             'attempt',
//             'doing',
//             'aim',
//         ],
//         correct: 'attempt',
//     },
//     {
//         detail: "Don't put your cup on the _____ of the table – someone will knock it off.",
//         type: 'radio',
//         answers: [
//             'outside',
//             'edge',
//             'border',
//             'boundary',
//         ],
//         correct: 'edge',
//     },
//     {
//         detail: "I was looking forward _____ at the new restaurant, but it was closed.",
//         type: 'radio',
//         answers: [
//             'to eat',
//             'to have eaten',
//             'to eating',
//             'eating',
//         ],
//         correct: 'edge',
//     },
// ];

// const orderList = Array.from(Array(questions.length), (value, index) => index);

// const newList = 
//     orderList.sort(() => Math.random() - 1)
//         .map(index => questions[index]);
        
// axios.post(url + '/allpractice.json', newList)
// .then(res => {
//     const titlePackage = {
//         title: `Combo 25 câu`,
//         id: res.data.name,
//     }
//     axios.post(url + '/alltitle.json', titlePackage)
//         .then(() => console.log(`success`))
//         .catch(() => console.log(`error title`));
// })
// .catch(() => console.log(`error title`));
