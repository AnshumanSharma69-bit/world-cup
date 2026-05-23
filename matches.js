import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://amhroeasxahrrolsqqnz.supabase.co',
  'sb_publishable_Ox7fpjoHdikihZOBC_sMMA_OGuuXOwq'
)

const yearsGrid = document.getElementById('years-grid')
const matchesContainer = document.getElementById('matches-container')
const stageButtons = document.querySelectorAll('.stage-btn')

let selectedYear = null
let selectedStage = null

const years = [
  2022, 2018, 2014, 2010, 2006, 2002,
  1998, 1994, 1990, 1986, 1982, 1978,
  1974, 1970, 1966, 1962, 1958, 1954,
  1950, 1938, 1934, 1930
]

// Render Year Grid
years.forEach(year => {
  const card = document.createElement('div')
  card.classList.add('year-card')
card.innerHTML = `
  <div class="year-num">${year}</div>
`

  card.addEventListener('click', () => {
    document.querySelectorAll('.year-card').forEach(c => c.classList.remove('active'))
    card.classList.add('active')
    selectedYear = year
    loadMatches()
  })

  yearsGrid.appendChild(card)
})

// Stage Buttons Event Listeners
stageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    stageButtons.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    selectedStage = btn.dataset.stage
    loadMatches()
  })
})

// Fetch and Render Matches
async function loadMatches() {
  if (!selectedYear || !selectedStage) {
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
if (selectedStage === 'Group') {

  query = query.ilike('Round', '%Group%')

} else if (selectedStage === 'Final') {

  query = query
    .ilike('Round', '%Final%')
    .not('Round', 'ilike', '%Semi%')
    .not('Round', 'ilike', '%Quarter%')

} else if (selectedStage === 'Semi-finals') {

  query = query.ilike('Round', '%Semi%')

} else if (selectedStage === 'Quarter-finals') {

  query = query.ilike('Round', '%Quarter%')

} else if (selectedStage === 'Round of') {

  query = query.ilike('Round', '%Round of%')

} else if (selectedStage === 'Third') {

  query = query.or(
    'Round.ilike.%Third%,Round.ilike.%3rd%'
  )

}
  const { data, error } = await query.order(
  'Date',
  { ascending: true }
)

  console.log('Data:', data)
  console.log('Error:', error)

  if (error) {
    matchesContainer.innerHTML = `
      <div class="empty">
        Error loading matches<br>
${error.message}
      </div>
    `
    return
  }

  if (!data || data.length === 0) {
    matchesContainer.innerHTML = `
      <div class="empty">
        No matches found
      </div>
    `
    return
  }
function getFlag(team) {

  const flags = {

    Argentina: 'ar',
    France: 'fr',
    Brazil: 'br',
    Germany: 'de',
    Spain: 'es',
    England: 'gb-eng',
    Portugal: 'pt',
    Croatia: 'hr',
    Morocco: 'ma',
    Netherlands: 'nl',
    Belgium: 'be',
    Italy: 'it',
    Uruguay: 'uy',
    Mexico: 'mx',
    Japan: 'jp',
    Korea: 'kr',
    USA: 'us'

  }

  return flags[team] || 'un'
}
  matchesContainer.innerHTML = ''

  data.forEach(match => {
    const card = document.createElement('div')
    card.classList.add('match-card')
card.innerHTML = `

<div class="card-glow"></div>

<div class="card-header">

  <div class="round-pill">
    ${match.Round || 'MATCH'}
  </div>

  <div class="match-date">
    ${match.Date || ''}
  </div>

</div>

<div class="card-main">

  <div class="team-side home">

    <img
      class="team-flag"
      src="https://flagcdn.com/w160/${getFlag(match.home_team || match.HomeTeam)}.png"
    >

    <div class="team-name">
      ${match.home_team || match.HomeTeam || 'Unknown'}
    </div>

  </div>

  <div class="center-score">

    <div class="score-box">

      <span>
        ${match.home_score ?? match.HomeGoals ?? 0}
      </span>

      <div class="score-divider"></div>

      <span>
        ${match.away_score ?? match.AwayGoals ?? 0}
      </span>

    </div>

    <div class="vs-text">
      FULL TIME
    </div>

  </div>

  <div class="team-side away">

    <img
      class="team-flag"
      src="https://flagcdn.com/w160/${getFlag(match.away_team || match.AwayTeam)}.png"
    >

    <div class="team-name">
      ${match.away_team || match.AwayTeam || 'Unknown'}
    </div>

  </div>

</div>

<div class="card-bottom">

  <div class="bottom-item">
    📍 ${match.Venue || match.Stadium || 'Unknown Venue'}
  </div>

  <div class="bottom-item">
    👥 ${match.Attendance || 'N/A'}
  </div>

</div>

`

    matchesContainer.appendChild(card)
  })
}