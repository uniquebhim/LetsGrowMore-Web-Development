const resultForm = document.getElementById("resultForm");
const resultTable = document.getElementById("resultTable");
const tbody = resultTable.querySelector("tbody");

resultForm.addEventListener("submit", function (event) {
event.preventDefault();

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const DSAInput = document.getElementById("DSA");
const BASICELECTRONICSInput = document.getElementById("BASICELECTRONICS");
const CPROGRAMMINGInput = document.getElementById("CPROGRAMMING");

const name = nameInput.value;
const roll = rollInput.value;
const DSA = DSAInput.value;
const BASICELECTRONICS = BASICELECTRONICSInput.value;
const CPROGRAMMING = CPROGRAMMINGInput.value;

const total = parseInt(DSA) + parseInt(BASICELECTRONICS) + parseInt(CPROGRAMMING);
const percentage = ((total / 300) * 100).toFixed(2);

const newRow = document.createElement("tr");
newRow.innerHTML = `
<td>${name}</td>
<td>${roll}</td>
<td>${DSA}</td>
<td>${BASICELECTRONICS}</td>
<td>${CPROGRAMMING}</td>
<td>${total}</td>
<td>${percentage}%</td>
<td>
<button class="edit-button" onclick="editResult(this)">Edit</button>
<button class="delete-button" onclick="deleteResult(this)">Delete</button>
</td>
`;

tbody.appendChild(newRow);

nameInput.value = "";
rollInput.value = "";
DSAInput.value = "";
BASICELECTRONICSInput.value = "";
CPROGRAMMINGInput.value = "";
});

function editResult(button) {
const row = button.parentNode.parentNode;
const cells = row.querySelectorAll("td");

const name = cells[0].textContent;
const roll = cells[1].textContent;
const DSA = cells[2].textContent;
const BASICELECTRONICS = cells[3].textContent;
const CPROGRAMMING = cells[4].textContent;

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const DSAInput = document.getElementById("DSA");
const BASICELECTRONICSInput = document.getElementById("BASICELECTRONICS");
const CPROGRAMMINGInput = document.getElementById("CPROGRAMMING");

nameInput.value = name;
rollInput.value = roll;
DSAInput.value = DSA;
BASICELECTRONICSInput.value = BASICELECTRONICS;
CPROGRAMMINGInput.value = CPROGRAMMING;

row.remove();
}

function deleteResult(button) {
const row = button.parentNode.parentNode;
row.remove();
}

function resetForm() {
resultForm.reset();
}