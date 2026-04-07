export default function PageLayout({title, children}) {
    return (
        <main className="flex flex-col gap-6 w-screen h-screen items-center justify-center">
            <Header title={title} />
            {children}
        </main>
    )
}