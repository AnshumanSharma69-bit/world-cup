import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://amhroeasxahrrolsqqnz.supabase.co',
'sb_publishable_Ox7fpjoHdikihZOBC_sMMA_OGuuXOwq'
)

async function loadHistory() {

  const { data, error } = await supabase
    .from('world_cups')
    .select('*')

  console.log("DATA:", data)
  console.log("ERROR:", error)

  const container = document.getElementById('history-container')

  if (!data || data.length === 0) {
    container.innerHTML = "<h2>No data found</h2>"
    return
  }

  data.forEach((cup) => {

    const card = document.createElement('div')

    card.style.border = "1px solid cyan"
    card.style.padding = "20px"
    card.style.margin = "20px"
    card.style.background = "#111"
    card.style.color = "white"

    card.innerHTML = `
      <h2>${cup.year}</h2>
      <p>Host: ${cup.host}</p>
      <p>Winner: ${cup.winner}</p>
      <p>Runner Up: ${cup.runner_up}</p>
    `

    container.appendChild(card)
  })
}

loadHistory()