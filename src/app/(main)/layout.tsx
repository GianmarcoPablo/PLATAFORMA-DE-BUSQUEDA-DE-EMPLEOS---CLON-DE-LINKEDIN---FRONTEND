
export default function IndeedLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main >
            <div >
                {children}
            </div>
        </main>
    );
}