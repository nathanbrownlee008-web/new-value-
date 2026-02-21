import './globals.css'

export const metadata = {
  title: 'Value Bet Tracker',
  description: 'Card Layout Betting Tracker'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen p-6">{children}</body>
    </html>
  )
}