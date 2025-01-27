const loadallplayer = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayPlayer(data);
        });
}
trk = {};
const displayPlayer = (players_info) => {
    const players = players_info.player;
    console.log(players);

    const playerCont = document.getElementById("player-container");
    const input_info = document.getElementById("input");

    input_info.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            document.getElementById("search").click()
        }
    });

    const player_filtered = players.filter(p => p.strPlayer.includes(input_info.value));

    const cnt = player_filtered.length;

    playerCont.innerHTML = ''
    if (cnt == 0) {
        playerCont.innerHTML = `<h1>Not found</h1>`;
        return;
    }
    player_filtered.forEach(player => {
        const div = document.createElement("div");
        console.log(player);
        div.classList.add("col-3");
        div.classList.add("plr");
        div.classList.add("p-2");
        // div.onclick = () => {
        //     addToCart(player);
        // };
        const dtls = player.strDescriptionEN;


        div.innerHTML = `
                <img class="img-fluid" src="${player.strThumb}" alt=""/>
                <h1>Name: ${player.strPlayer}</h1>
                <h5>Nationality: ${player.strNationality}</h5>
                <h5>Team: ${player.strTeam}</h5>
                <h5>Sport: ${player.strSport}</h5>
                <h5>Wage: ${player.strWage}</h5>
                <h5>Gender: ${player.strGender}</h5>
                <h5>Description: ${dtls}}</h5>
                <h5>Social media: 
                <a href=""><img src="rsz_icon_facebook.jpg" alt=""/></a>
                <a href=""><img src="rsz_icon_twitter.jpg" alt=""/></a>
                </h5>
                <button onclick="addToCart('${player.strPlayer}', '${player.idPlayer}')" class="m-2 bg-info">Add to group</button>
                <button onclick="addmodal('${player.strPlayer}', '${player.strNationality}', '${player.strTeam}', '${player.strSport}', '${player.strWage}', '${player.strGender}')" data-bs-toggle="modal" data-bs-target="#Modal1" class = "m-2 bg-info">Details</button>
                `;
        playerCont.appendChild(div);
    });
}

const addmodal = (name, Nationality, Team, Sport, Wage, Gender) => {
    const mdttl = document.getElementById("modal-title");
    mdttl.innerText = `Name: '${name}'`;
    document.getElementById("modal-body-1").innerText = `Nationality: '${Nationality}'`; 
    document.getElementById("modal-body-2").innerText = `Team: '${Team}'`; 
    document.getElementById("modal-body-3").innerText = `Sport: '${Sport}'`; 
    document.getElementById("modal-body-4").innerText = `Wage: '${Wage}'`; 
    document.getElementById("modal-body-5").innerText = `Gender: '${Gender}'`; 
};



const addToCart = (name, playerID) => {
    
    
    if (name == "") {
        alert("there is no valid name");
        return;
    }
    if (trk[playerID] == true) {
        alert("already added");
        return;
    }
    const count_member = document.getElementById("count_members");
    cnt = parseInt(count_member.innerText)
    if (cnt == 11) {
        alert("already 11 members added");
        return;
    }
    count_member.innerText = cnt + 1;
    console.log(cnt);
    
    const crt = document.getElementById("cart-container");
    const h = document.createElement("h5");
    h.innerText = name;
    crt.appendChild(h);
    trk[playerID] = true;
};

loadallplayer()