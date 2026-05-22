import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
)

const yearsGrid = document.getElementById('years-grid')
const matchesContainer = document.getElementById('matches-container')
const stageButtons = document.querySelectorAll('.stage-btn')

let selectedYear = null
let selectedStage = null

const years = [
  2022,2018,2014,2010,2006,2002,
  1998,1994,1990,1986,1982,1978,
  1974,1970,1966,1962,1958,1954,
  1950,1938,1934,1930
]

years.forEach(year => {

  const card = document.createElement('div')

  card.classList.add('year-card')

  card.innerHTML = `
    <div class="year">${year}</div>
  `

  card.addEventListener('click', () => {

    document.querySelectorAll('.year-card')
      .forEach(c => c.classList.remove('active'))

    card.classList.add('active')

    selectedYear = year

    loadMatches()
  })

  yearsGrid.appendChild(card)

})

stageButtons.forEach(btn => {

  btn.addEventListener('click', () => {

    stageButtons.forEach(b => b.classList.remove('active'))

    btn.classList.add('active')

    selectedStage = btn.dataset.stage

    loadMatches()
  })

})

async function loadMatches(){

  if(!selectedYear || !selectedStage){
    return
  }

  matchesContainer.innerHTML = `
    <div class="empty">
      Loading matches...
    </div>
  `

  let query = supabase
    .from('matches')
    .select('*')
    .eq('Year', selectedYear)

  if(selectedStage === 'Group'){

    query = query.ilike('Round', '%Group%')

  }else{

    query = query.ilike('Round', `%${selectedStage}%`)
  }

  const { data, error } = await query

  console.log(data)
  console.log(error)

  if(error){

    matchesContainer.innerHTML = `
      <div class="empty">
        Error loading matches
      </div>
    `

    return
  }

  if(!data || data.length === 0){

    matchesContainer.innerHTML = `
      <div class="empty">
        No matches found
      </div>
    `

    return
  }

  matchesContainer.innerHTML = ''

  data.forEach(match => {

    const card = document.createElement('div')

    card.classList.add('match-card')

    card.innerHTML = `

      <div class="match-top">

        <div>
          ${match.Round}
        </div>

        <div>
          ${match.Date || ''}
        </div>

      </div>

      <div class="teams">

        <div class="team">
          ${match.home_team}
        </div>

        <div class="score">
          ${match.home_score} - ${match.away_score}
        </div>

        <div class="team">
          ${match.away_team}
        </div>

      </div>

      <div class="match-info">

        📍 ${match.Venue || 'Unknown Venue'} <br>

        🌍 Host: ${match.Host || 'Unknown'} <br>

        👥 Attendance: ${match.Attendance || 'N/A'}

      </div>

    `

    matchesContainer.appendChild(card)

  })

}