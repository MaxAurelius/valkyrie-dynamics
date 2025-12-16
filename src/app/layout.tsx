import './globals.css'
export const metadata = { title: 'VALKYRIE DYNAMICS' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}