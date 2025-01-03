import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'

import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound'
})

const workSans = Work_Sans({
	subsets: ['latin'],
	variable: '--font-workSans',
	weight: ['500', '600']
})

export const metadata: Metadata = {
	title: 'Hadji dastulashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar va dastulash sohasidagi eng songgi xabarlar. Bizning blogda dasturlashni organish va rivojlanish uchun qollanma topishingiz mumkin'
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body suppressHydrationWarning
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
export default RootLayout
