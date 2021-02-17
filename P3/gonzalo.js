var a,b; 
var fet,fet1; 
var team;
const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function (event) {
            event.preventDefault();
            fet1 = `https://api-nba-v1.p.rapidapi.com/teams/shortName/${document.getElementById("equipo").value}`;

            fetch(fet1, {
                "method": "GET",
                "headers": {
                    Accept: "application/json",
                    "x-rapidapi-key": "eff27f9e46msh80863b8a34d6ae5p1da6e2jsn6a71e9fd7170",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            })

                .then(response => {
                    //console.log(response)
                    response.json().then(r => {
                        a = r;
                        let html2 ='';
                        html2+=
                            `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">`+
                                `<div class="col p-4 d-flex flex-column position-static">`+
                                    `<h2>${a.api.teams[0].fullName}</h2>`+
                                    `<p class= "card-text mb-auto"><strong>Conferencia: </strong>Este</p>`+
                                `</div>`+
                                `<div class=col-auto d-none d-lg-block> `+
                                    `<img src=${a.api.teams[0].logo} class="img-circle" alt="Cinque Terre" width="100" height="100">`+
                                `</div>`+    
                            `</div>`;
                            
                        document.getElementById("titulo-equipo").innerHTML = html2
                        team = a.api.teams[0].teamId;
                        //document.write(a.api.teams[0].teamId)
                        fet = `https://api-nba-v1.p.rapidapi.com/players/teamId/${team}`;

                        fetch(fet, {
                            "method": "GET",
                            "headers": {
                                Accept: "application/json",
                                "x-rapidapi-key": "eff27f9e46msh80863b8a34d6ae5p1da6e2jsn6a71e9fd7170",
                                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                                "useQueryString": true
                            }
                        })

                            .then(response => {
                                //console.log(response)
                                response.json().then(r => {
                                    b = r;
                                    let html = '';
                                    r.api.players.forEach(c => {

                                        if (c.yearsPro == "0") {
                                        } else {
                                            if (1) {

                                                html +=
                                                    `<tr>` +
                                                    `<td>${c.firstName} ${c.lastName} </td>` +
                                                    `<td>${c.country} </td>` +
                                                    `<td>${c.yearsPro} </td>` +
                                                    `<td> ${c.dateOfBirth}</td>` +
                                                    `<td> ${c.heightInMeters}</td>` +
                                                    `<td> ${c.weightInKilograms}</td>` +
                                                    `<td> ${c.collegeName}</td>` +
                                                    `<td> ${c.startNba}</td>`+
                                                    `</tr>`;
                                            }
                                        }
                                    });

                                    document.getElementById("tabla").innerHTML = html;
                                });
                            })

                            .catch(err => {
                                console.error(err);
                            });

                    });
                })

                .catch(err => {
                    console.error(err);
                });

            return false;
        })


