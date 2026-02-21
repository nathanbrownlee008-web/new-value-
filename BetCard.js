'use client'
import { edge, profit } from '../lib/calculations'

export default function BetCard({ bet, updateBet }) {

  const handleChange = (field, value) => {
    updateBet(bet.id, field, value)
  }

  const calcEdge = edge(bet.probability, bet.odds).toFixed(2)
  const calcProfit = profit(bet.odds, bet.stake, bet.result)

  return (
    <div className="bg-slate-800 p-5 rounded-2xl shadow-lg space-y-3">
      <div className="font-bold text-lg">{bet.match}</div>
      <div className="text-sm text-slate-400">{bet.date}</div>

      <input
        className="bg-slate-700 p-2 rounded w-full"
        value={bet.market}
        onChange={(e) => handleChange('market', e.target.value)}
        placeholder="Market"
      />

      <div className="flex gap-2">
        <input type="number" value={bet.odds}
          onChange={(e) => handleChange('odds', parseFloat(e.target.value))}
          className="bg-slate-700 p-2 rounded w-full" placeholder="Odds" />
        <input type="number" value={bet.probability}
          onChange={(e) => handleChange('probability', parseFloat(e.target.value))}
          className="bg-slate-700 p-2 rounded w-full" placeholder="Probability %" />
      </div>

      <input type="number" value={bet.stake}
        onChange={(e) => handleChange('stake', parseFloat(e.target.value))}
        className="bg-slate-700 p-2 rounded w-full" placeholder="Stake" />

      <div className="text-emerald-400">Edge: {calcEdge}%</div>

      <select
        value={bet.result}
        onChange={(e) => handleChange('result', e.target.value)}
        className="bg-slate-700 p-2 rounded w-full">
        <option value="pending">Pending</option>
        <option value="win">Win</option>
        <option value="loss">Loss</option>
      </select>

      {bet.result !== 'pending' && (
        <div className={calcProfit >= 0 ? "text-emerald-400" : "text-red-400"}>
          Profit: {calcProfit.toFixed(2)} units
        </div>
      )}
    </div>
  )
}