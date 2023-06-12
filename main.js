const TYPE_INPUT = 1
const TYPE_PARAGRAPH = 2
const TYPE_RADIO = 3
const TYPE_CHECKBOX = 4


let questions = [
  {
    id: 1,
    name: "Cau hoi loai input",
    type: TYPE_INPUT,
    answer: "",
    answerOptions: [],
  },
  {
    id: 2,
    name: "Cau hoi loai doan van",
    type: TYPE_PARAGRAPH,
    answer: "",
    answerOptions: [],
  },
  {
    id: 3,
    name: "Cau hoi loai radio",
    type: TYPE_RADIO,
    answer: [],
    answerOptions: [
      {
        name: '0 - 30',
        value: 30
      },
      {
        name: '31 - 60',
        value: 60
      },
      {
        name: '61 - 100',
        value: 100
      },
    ],
  },
  {
    id: 4,
    name: "Cau hoi loai checkbox",
    type: TYPE_CHECKBOX,
    answer: [],
    answerOptions: [
      {
        name: 'I have a bike',
        value: 'Bike'
      },
      {
        name: 'I have a car',
        value: 'Car'
      },
      {
        name: 'I have a boat',
        value: 'Boat'
      },
    ],
  },
]

function Question(item, index) {
  return `
    <br />
    <br />
    <span>${index+1}. </span><input type="text" placeholder="Enter question ... " value="${item.name}">
    <label for="type-question-${item.id}">Type question</label>
    <select id="type-question-${item.id}" name="question-${item.id}">
      <option value="${TYPE_INPUT}">Input</option>
      <option value="${TYPE_PARAGRAPH}">Paragraph</option>
      <option value="${TYPE_RADIO}">Radio</option>
      <option value="${TYPE_CHECKBOX}">Checkbox</option>
    </select>
  `
}

function Answer(item) {
  switch (item.type) {
    case TYPE_INPUT:
      return `
        <br/>
        <input type="text" placeholder="Enter answer ... " disabled>
        <br><br>
      `
    case TYPE_PARAGRAPH:
      return `
          <br/>
          <textarea type="text" placeholder="Enter answer ... " disabled></textarea>
          <br><br>
        `
    case TYPE_RADIO:
    case TYPE_CHECKBOX:
      const typeInput = item.type === TYPE_RADIO ? 'radio' : 'checkbox'
      const htmls = item.answerOptions?.map(option =>
        `
          <input type="${typeInput}" id="${option.name}" name="${item.name}" value="${option.value}">
          <label for="${option.name}">${option.name}</label><br>
        `
      ).join('')
      console.log(htmls);
      return `
        <br />
        ${htmls}
        <br><br>
      `
    default:
      break;
  }
}

function render() {
  const containerQuestionEl = document.getElementById('container-question')
  const htmls = questions.map((item,index) =>
    `
      ${Question(item,index)}
      ${Answer(item)}
    `
  ).join('')
  containerQuestionEl.innerHTML = htmls
}

render()

function setQuestion(mewQuestions) {
  questions = mewQuestions
  render()
}

function handleClickAddQuestion() {
  const newId = questions[questions.length - 1].id + 1
  const newQuestion = [
    ...questions,
    {
      id: newId,
      name: "",
      type: TYPE_INPUT,
      answer: "",
      answerOptions: [],
    },
  ]
  setQuestion(newQuestion)
}

