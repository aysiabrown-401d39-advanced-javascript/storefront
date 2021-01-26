// products reducers 
import Game from './objects/games'

// vg = videogames, bg = boardgames 
let initialState = {products: [
    new Game('VIDEOGAMES', 'The Sims 4', '$39.99','https://images-na.ssl-images-amazon.com/images/I/71otyq1xFNL._SL1499_.jpg',100),
    new Game('VIDEOGAMES', 'Stardew Valley', '$19.99','https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png',100),
    new Game('VIDEOGAMES', 'Minecraft', '$24.99', 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png', 200),
    new Game('BOARDGAMES', 'Unstable Unicorns', '$19.99', 'https://thepopinsider.com/wp-content/uploads/2020/05/unstable-games_unstable-unicorns-feat.jpg', 8),
    new Game('BOARDGAMES', 'Exploding Kittens', '$14.99', 'https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__opengraph_letterbox/img/bVtWv5GCZePNgqEo2yB17lXubsQ=/fit-in/1200x630/filters:fill(auto):strip_icc()/pic2691976.png', 0),
    new Game('BOARDGAMES', 'Coup', '$12.99','https://cogsthebrainshop.ie/wp-content/uploads/2018/05/coup-card-game.jpg',50)
]};



    
export default (state=initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        default:
            return state;
    }
}