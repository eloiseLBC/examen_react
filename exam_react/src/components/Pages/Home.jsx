import "../Pages/Home.scss"
export default function Home() {
    return (
        <>  
    <div class="search-container saveMe">
      <input type="text" placeholder="Rechercher un film" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </div>

    <div class="wrapper">
      <div class="tendances-container container">
        <div class="title-filter" id="title-tendances">
          <h2>Tendances</h2>
          <button class="active" id="day">Aujourd'hui</button>
          <button id="week">Cette semaine</button>
        </div>
        <div class="grid-tendances" id="tendances"></div>
        <div>
            <a href="#">
                <img src="./../assets/thumbnail.png"></img>
                <div class="score">
                <p>80</p>
            </div>
            <h5>Spiderman</h5>
            <p>01-01-2025</p>
            </a>
        </div>
      </div>
    </div>

    <div class="wrapper-pop">
      <div class="populaires-container container">
        <div class="title-filter saveMe" id="title-category">
          <h2>Séries TV</h2>

          <button class="active" id="top_rated">Mieux notées</button>
          <button id="popular">Populaires</button>
        </div>
        <div class="grid-tendances" id="populaires"></div>
      </div>
    </div></>)
}