const listaRecommended = [
    {
        "id": 1,
        "title": "Arcane",
        "description": "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League Of Legends champions and the power that will tear them apart. The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun.",
        "image": "movies/Arcane/arcane.jpg",
        "rating": 5,
        "banner": "movies/Arcane/arcane-final-poster-16x9-no-text-no-border"
    },
    {
        "id": 2,
        "title": "1899",
        "description": "Lorem ipsum al piso mah boy yes sir",
        "image": "movies/1899/1899.jpg",
        "rating": 5,
        "banner": "movies/1899/..."
    },
    {
        "id": 3,
        "title": "Las chicas del cable",
        "description": "Lorem ipsum al piso mah boy yes sir1",
        "image": "movies/Cable/las chicas.jpg",
        "rating": 4,
        "banner": "movies/Cable/..."
    },
    {
        "id": 4,
        "title": "13 Reasons why",
        "description": "Lorem ipsum al piso mah boy yes sir2",
        "image": "movies/13/13.jpg",
        "rating": 3,
        "banner": "movies/13/..."
    },
    {
        "id": 5,
        "title": "The Crown",
        "description": "Lorem ipsum al piso mah boy yes sir3",
        "image": "movies/Crown/crown.jpg",
        "rating": 4,
        "banner": "movies/Crown/..."
    },
    
]

const listaTrending = [
    {
        "id": 6,
        "title": "Sabrina",
        "description": "Otro lorem ipsum aja",
        "image": "movies/Sabrina/sabrina.png",
        "rating": 5,
        "banner": "movies/Sabrina/..."
    },
    {
        "id": 7,
        "title": "Mindhunter",
        "description": "Lorem ipsum al piso mah boy yes sir",
        "image": "movies/Mind/mindhunter.jpg",
        "rating": 5,
        "banner": "movies/Mind/..."
    },
    {
        "id": 8,
        "title": "Sandman",
        "description": "Lorem ipsum al piso mah boy yes sir1",
        "image": "movies/Sand/sandman.jpg",
        "rating": 4,
        "banner": "movies/Sand/..."
    },
    {
        "id": 9,
        "title": "Stranger Things",
        "description": "Lorem ipsum al piso mah boy yes sir2",
        "image": "movies/ST3/stranger.jpeg",
        "rating": 3,
        "banner": "movies/ST3/..."
    },
    {
        "id": 10,
        "title": "You",
        "description": "Lorem ipsum al piso mah boy yes sir3",
        "image": "movies/You/you.jpg",
        "rating": 4,
        "banner": "movies/You/..."
    },
    
]

const containerLista1 = document.querySelector(".recommended_scroll");
const containerLista2 = document.querySelector(".trending");

const myRecommended = (product) => {

    for (let item of product) {
        let movie = new RenderStuff (item.image, item.title);
        const RenderMov = movie.render();
        containerLista1.appendChild(RenderMov);

       // movie.addClickListener();
    }
}

const myTrending = (product) => {

    for (let item of product) {
        let movie = new RenderStuff (item.image, item.title);
        const RenderMov = movie.render();
        containerLista2.appendChild(RenderMov);

       // movie.addClickListener();
    }
}

class RenderStuff {
    image = "";
    id = "";
    description = "";
    rating = "";
    banner = "";

    constructor(image,id,description,rating,banner) {
        this.image = image;
        this.id = id;
        this.description = description;
        this.rating = rating;
        this.banner = banner;
    }

    render(){

        const movie_container = document.createElement('div');
        movie_container.setAttribute("class", "movie_container");

        const movie_specs = document.createElement('div');
        movie_specs.setAttribute("class", "movie_specs");

        const coverImg = document.createElement('img');

        const lowerInfo = document.createElement('div');
        lowerInfo.setAttribute("class", "lower_info");

        const ratings = document.createElement('div');
        ratings.setAttribute("class", "ratings");

        const rateText = document.createElement('p');
        const textNode = document.createTextNode("Ratings:");

        const stars0 = document.createElement('div');
        const stars1 = document.createElement('div');
        const stars2 = document.createElement('div');
        const stars3 = document.createElement('div');
        const stars4 = document.createElement('div');
        
        movie_container.appendChild(movie_specs);
        movie_specs.appendChild(coverImg);
        movie_container.appendChild(lowerInfo);
        lowerInfo.appendChild(ratings);
        ratings.appendChild(rateText)
        ratings.appendChild(stars0)
        ratings.appendChild(stars1)
        ratings.appendChild(stars2)
        ratings.appendChild(stars3)
        ratings.appendChild(stars4)
        rateText.appendChild(textNode);

        coverImg.id =  this.id;
        coverImg.src = this.image;

        for (let index = 1; index <= 5; index++) {
            const stars0 = document.createElement('div');
    
                if (index < this.rating) {
                    stars0.setAttribute("class","rating1");
                } else {
                    stars0.setAttribute("class","rating0");
                    ratings.appendChild(stars0)
                }
                ratings.appendChild(stars0)
                
            }

            
            
            return movie_container;
            return movie_specs;
            return coverImg;
            return lowerInfo;
            return stars0;
            return stars1;
            return stars2;
            return stars3;
            return stars4;
            
        }
        
      //  addClickListener() {
      //      const imageClick = document.querySelector(this.image);
      //      imageClick.addEventListener("click", () => {
      //          console.log("hi");
      //          document.getElementsByClassName("upper_container").style.backgroundimage = url(this.banner);
      //          document.getElementsByClassName("main_title_item1") = this.description;
      //          document.getElementsByClassName("main_title_item2") = "Rating" + this.rating;
      //      })
      //  }
}
    
myRecommended(listaRecommended);
myTrending(listaTrending);

