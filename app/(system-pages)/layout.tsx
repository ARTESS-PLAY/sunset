import Footer from '@/shared/components/Layout/Footer/Footer'
import Logo from '@/shared/components/ui/Logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Страница не найдена',
	description: 'Что-то пошло не так, страница не найдена',
}

export default function SystemPagesLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div
			className={`antialiased h-[calc(100vh+160px)] w-[100vw] bg-black-gradient text-white  relative overflow-x-hidden`}
		>
			<div className='flex justify-center mt-10'>
				<Logo />
			</div>
			<main className='h-[calc(100vh-160px-80px)]'>{children}</main>
			<Footer />
		</div>
	)
}