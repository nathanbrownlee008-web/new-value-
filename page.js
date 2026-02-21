'use client'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import BetCard from '../components/BetCard'

export default function Home() {

  const [bets, setBets] = useState([])
  const [tab, setTab] = useState('value')

  const addBet = () => {
    setBets([...bets, {
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      match: 'Team A vs Team B',
      market: 'Over 2.5',
      odds: 2.0,
      probability: 50,
      stake: 1,
      result: 'pending'
    }])
  }

  const updateBet = (id, field, value) => {
    setBets(bets.map(b => b.id === id ? { ...b, [field]: value } : b))
  }

  const valueBets = bets.filter(b => b.result === 'pending')
  const historyBets = bets.filter(b => b.result !== 'pending')

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Value Bet Tracker</h1>

      <div className="flex gap-4">
        <button onClick={() => setTab('value')}
          className={`px-4 py-2 rounded-xl ${tab === 'value' ? 'bg-emerald-500' : 'bg-slate-700'}`}>
          Value Bets
        </button>
        <button onClick={() => setTab('history')}
          className={`px-4 py-2 rounded-xl ${tab === 'history' ? 'bg-emerald-500' : 'bg-slate-700'}`}>
          History
        </button>
      </div>

      {tab === 'value' && (
        <>
          <button onClick={addBet}
            className="bg-emerald-500 px-4 py-2 rounded-xl">
            Add Bet
          </button>

          <div className="grid md:grid-cols-2 gap-4">
            {valueBets.map(bet => (
              <BetCard key={bet.id} bet={bet} updateBet={updateBet} />
            ))}
          </div>
        </>
      )}

      {tab === 'history' && (
        <div className="grid md:grid-cols-2 gap-4">
          {historyBets.map(bet => (
            <BetCard key={bet.id} bet={bet} updateBet={updateBet} />
          ))}
        </div>
      )}
    </div>
  )
}