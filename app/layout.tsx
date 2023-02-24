import './components/reset.css'
import NavBar from './components/navbar/NavBar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
