export default function ContentLayout({ children }) {
    return (
        <main className="flex flex-col w-full min-h-screen mx-auto px-4 py-6 md:px-8 bg-app-bg">
            {children}
        </main>
    )
}