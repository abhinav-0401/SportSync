'use client'

import { StoreProvider } from '@/redux/StoreProvider'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    return <StoreProvider><ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider></StoreProvider>
}