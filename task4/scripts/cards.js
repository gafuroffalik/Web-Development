class Card {
    constructor(id, name, provider, src, desc) {
        this.id = id;
        this.name = name;
        this.provider = provider;
        this.src = src;
        this.desc = desc;
    }
}


function loadCards() {
    let cards = JSON.parse(window.localStorage.getItem("cards"));

    if (cards === null)
        return;

    for (let i = 0; i < cards.length; ++i) {
        const divCard = document.createElement("div");
        divCard.id = `card${i}`;
        divCard.setAttribute('class', "card");
        document.getElementsByClassName("cards-list")[0].appendChild(divCard);

        const divCardContent = document.createElement("div");
        divCardContent.id = `cardContent${i}`;
        divCardContent.setAttribute('class', "card__content flex__column-start");
        document.getElementById(`card${i}`).appendChild(divCardContent);


        const divCardSubtitle = document.createElement("div");
        divCardSubtitle.id = `cardSubtitle${i}`;
        divCardSubtitle.setAttribute('class', "card__subtitle flex__space-between");
        document.getElementById(`cardContent${i}`).appendChild(divCardSubtitle);

        const divCardId = document.createElement("span");
        divCardId.id = `cardId${i}`;
        divCardId.textContent = `ID: ${cards[i].id} (${cards[i].provider})`;
        document.getElementById(`cardSubtitle${i}`).appendChild(divCardId);

        const divCardEdit = document.createElement("a");
        divCardEdit.id = `cardEdit${i}`;
        divCardEdit.textContent = "Изменить";
        divCardEdit.type = "edit";
        divCardEdit.addEventListener('click', onOpenEditForm);
        document.getElementById(`cardSubtitle${i}`).appendChild(divCardEdit);


        const divCardSubcontent = document.createElement("div");
        divCardSubcontent.id = `cardSubcontent${i}`;
        divCardSubcontent.setAttribute('class', "card__subcontent flex__start");
        document.getElementById(`cardContent${i}`).appendChild(divCardSubcontent);

        const divCardImg = document.createElement("img");
        divCardImg.id = `cardImg${i}`;
        divCardImg.src = `${cards[i].src}`;
        divCardImg.alt = `${cards[i].name}`;
        document.getElementById(`cardSubcontent${i}`).appendChild(divCardImg);

        const divCardName = document.createElement("span");
        divCardName.id = `cardName${i}`;
        divCardName.textContent = cards[i].name;
        divCardName.setAttribute('class', "card__name");
        document.getElementById(`cardSubcontent${i}`).appendChild(divCardName);

        const divCardDesc = document.createElement("span");
        divCardDesc.id = `cardDesc${i}`;
        divCardDesc.textContent = cards[i].desc;
        divCardDesc.setAttribute('class', "card__desc");
        document.getElementById(`cardContent${i}`).appendChild(divCardDesc);
    }
}


function setupCards() {
    let dataArray = [
        new Card(1, "Штаны", "Pirosmani", "https://pirosmani.info/media/catalog/product/cache/985836dd58930a7cd92441e19f9ba0fb/2/b/2b6b76a4-c4ed-4a15-a405-fea6fe80068f.jpeg", "Сидят идеально"),
        new Card(2, "Одеколон Саша", "NEW ZARIA", "https://www.newzaria.ru/pics/novaia-zaria_sasha.jpg", "Пахни как Саша"),
        new Card(3, "Боевая единица", "Forbes", "https://cdn.forbes.ru/sites/default/files/users/user12852/HogRider.png", "Уничтожит всех"),
        new Card(4, "Джек Потрошитель", "Комсомольская правда", "https://s09.stc.yc.kpcdn.net/share/i/12/10844949/de-1200.jpg", "Будь с ним осторожен"),
        new Card(5, "Щенок", "Purina", "https://www.purina.ru/sites/default/files/2021-07/Щенок%20не%20ест%20mob.jpg", "Ну разве не милаш?")
    ];
    updateLocalStorage(dataArray);
    location.reload();
}


function addCard() {
    let cards = JSON.parse(window.localStorage.getItem("cards"));

    if (cards === null) {
        cards = [];
    }

    let id = document.getElementsByName('idCreate')[0].value;
    let name = document.getElementsByName('nameCreate')[0].value;
    let provider = document.getElementsByName('providerCreate')[0].value;
    let src = document.getElementsByName('srcCreate')[0].value;
    let desc = document.getElementsByName('descCreate')[0].value;

    if (id === "" || provider === "" || name === "" || src === "") {
        closeForm('createForm');
        return;
    }
    let card = new Card(id,
        name,
        provider,
        src,
        desc);

    cards.push(card);

    updateLocalStorage(cards);

    closeForm('createForm');
    location.reload();
}


function onOpenEditForm(event) {
    let id = event.target.id.substring(8);
    let cards = JSON.parse(window.localStorage.getItem("cards"));
    let card = cards.at(id);
    document.getElementsByName('idEdit')[0].value = card.id;
    document.getElementsByName('nameEdit')[0].value = card.name;
    document.getElementsByName('providerEdit')[0].value = card.provider;
    document.getElementsByName('srcEdit')[0].value = card.src;
    document.getElementsByName('descEdit')[0].value = card.desc;
    document.getElementById("edit-btn").idx = id;
    document.getElementById("delete-btn").idx = id;
    openForm('editForm');
}


function editCard(event) {
    let cards = JSON.parse(window.localStorage.getItem("cards"));

    cards[event.target.idx].id = document.getElementsByName('idEdit')[0].value;
    cards[event.target.idx].name = document.getElementsByName('nameEdit')[0].value;
    cards[event.target.idx].provider = document.getElementsByName('providerEdit')[0].value;
    cards[event.target.idx].src = document.getElementsByName('srcEdit')[0].value;
    cards[event.target.idx].desc = document.getElementsByName('descEdit')[0].value;

    updateLocalStorage(cards);

    closeForm('editForm');
    location.reload();
}


function deleteCard(event) {
    let cards = JSON.parse(window.localStorage.getItem("cards"));
    cards.splice(event.target.idx, 1);

    updateLocalStorage(cards);

    closeForm('editForm');
    location.reload();
}


function updateLocalStorage(cards) {
    window.localStorage.clear();
    window.localStorage.setItem('cards', JSON.stringify(cards));
}


const setupBtn = document.getElementById('setup-btn');
setupBtn.addEventListener('click', setupCards);

window.onload = loadCards;