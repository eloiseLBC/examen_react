import "./Films.scss"

export default function Films() {
    return(
        <><div class="focus-container">
            <><div class="banner">
                <div class="content">
                    <img src="./../assets/thumbnail.png" alt="Photo film" />
                    <div class="right">
                        <div class="top">
                            <div class="score">80%</div>
                            <div class="title-date">
                                <h1>Spider-Man : No Way Home (2021)</h1>
                                <span>15 sept 2021 - Action, Aventure, Science-Fiction - 2h 28m</span>
                            </div>
                        </div>
                        <div class="synopsis">
                            <h2>Synopsis</h2>
                            <p>
                                Après les évènements liés à l'affrontement avec Mystério, l'identité secrète de Spider-Man a été révélée. Il est poursuivi par le gouvernement américain, qui l'accuse du meurtre de
                                Mystério, et est traqué par les médias. Cet évènement a également des conséquences terribles sur la vie de sa petite- amie M. J. et de son meilleur ami Ned. Désemparé, Peter Parker
                                demande alors de l'aide au Docteur Strange. Ce dernier lance un sort pour que tout le monde oublie que Peter est Spider-Man. Mais les choses ne se passent pas comme prévu et cette
                                action altère la stabilité de l'espace-temps. Cela ouvre le « Multivers », un concept terrifiant dont ils ne savent quasiment rien.
                            </p>
                        </div>
                    </div>
                </div>
            </div><div class="casting">
                    <h2>Casting</h2>
                    <div class="actors">
                        <div class="actor">
                            <img src="./Ressources/Spiderman/tom.png" alt="" />
                            <h4>Tom Holland</h4>
                            <span>Peter Parker / Spider-Man</span>
                        </div>
                        <div class="actor">
                            <img src="./Ressources/Spiderman/zendaya.png" alt="" />
                            <h4>Zendaya</h4>
                            <span>Michelle 'MJ' Jones</span>
                        </div>
                        <div class="actor">
                            <img src="./Ressources/Spiderman/benedict.png" alt="" />
                            <h4>Benedict Cumberbatch</h4>
                            <span>Doctor Strange</span>
                        </div>
                        <div class="actor">
                            <img src="./Ressources/Spiderman/jacob.png" alt="" />
                            <h4>Jacob Batalon</h4>
                            <span>Ned Leeds</span>
                        </div>
                    </div>
                </div></>
        </div></>
    );
}
