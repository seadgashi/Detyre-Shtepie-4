function kliko() {
    let x = document.querySelector('#option').value;
    var theData = {
        "personat": [{
                "name":"Cristiano",
                "surname":"Ronaldo",
                "age":37,
                "team":"Manchester United",
                "position":"Sulmues",
                "number":"7",
            },

            {
                "name":"Lionel",
                "surname":"Messi",
                "age":34,
                "team":"Paris Saint-Germain",
                "position":"Sulmues",
                "number":"30",
            },

            {
                "name":"Xherdan",
                "surname":"Shaqiri",
                "age":30,
                "team":"Chicago Fire",
                "position":"Sulmues",
                "number":"10",
            },

            {
                "name":"Granit",
                "surname":"Xhaka",
                "age":29,
                "team":"Arsenal",
                "position":"Mesfushor",
                "number":"34",
            },

            {
                "name":"Vedat",
                "surname":"Muriqi",
                "age":27,
                "team":" Mallorca",
                "position":"Sulmues",
                "number":"7",
            },
            {
                "name":"Milot",
                "surname":"Rashica",
                "age":25,
                "team":" Norwich City",
                "position":"Sulmues",
                "number":"17",
            }
            

        ]
    };
    theData.personat.filter(personi => {
        if (personi.name == x || personi.name.toUpperCase() == x || personi.name.toLowerCase() == x){
            document.querySelector('#tedhanat').innerHTML +=`
            <div class="teDhenat">
                <p>Emri:${personi.name}</p>
                <p>Mbiemri:${personi.surname}</p>
                <p>Mosha:${personi.age}</p>
                <p>Ekipi:${personi.team}</p>
                <p>Pozicioni:${personi.position}</p>
                <p>Numri:${personi.number}</p>
                <p>---------------------------</p>
            </div>
        `;
        } 
    })  
    
}
