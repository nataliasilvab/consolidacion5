document.getElementById('range1-5').addEventListener('mouseenter', () => fetchCharacters(1, 5));
document.getElementById('range6-11').addEventListener('mouseenter', () => fetchCharacters(6, 10));
document.getElementById('range12-17').addEventListener('mouseenter', () => fetchCharacters(11, 16));

function fetchCharacters(start, end) {
    const characterInfo = document.getElementById('characterInfo');
    characterInfo.innerHTML = '';

   
    async function showCharacters() {
        let displayed = 0; 

        for (let i = start; i <= end; i++) {
            if (displayed >= 5) break;  
            
            try {
                const response = await fetch(`https://swapi.dev/api/people/${i}/`);
                const character = await response.json();

              
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('col-12', 'col-md-6', 'col-lg-4');
                characterDiv.innerHTML = `

                            
                             <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                        <div class="timeline-icon"><i aria-hidden="true"></i></div>
                                        <div class="timeline-text">
                                            
                                        <div >
                                            <h6>${character.name}</h6>
                                             <p>Altura: ${character.height} cm</p>
                                            <p>Peso: ${character.mass} cm</p>
                                                
                                        </div>
                                           
                                            
                                        </div>
                                    </div>
                       
                `;

                
                characterInfo.parentElement.appendChild(characterDiv);

                displayed++;  
            } catch (error) {
                console.error(`Error al obtener el personaje ${i}:`, error);
            }
        }
    }

    showCharacters();
}
