export function renderCandy(candy) {

    const candyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const typeEl = document.createElement('ul');
    const sweetnessEl = document.createElement('p');
    const yummyEl = document.createElement('p');

    candyEl.classList.add('candy-item');

    nameEl.textContent = candy.candy;
    // typeEl.textContent = candy.type;
    sweetnessEl.textContent = candy.sweet;
    yummyEl.textContent = candy.yummy;

    for (let item of candy.type) {
        const li = document.createElement('li');

        li.textContent = item;
        //tells to create a li element then update text to that element
        //then append it to the li we just created
        typeEl.appendChild(li);
    }

    candyEl.append(nameEl, sweetnessEl, typeEl, yummyEl);

    return candyEl;
}
