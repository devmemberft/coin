export default function Savings(){
    return(
        <main className="flex flex-col min-h-screen p-4 bg-transparent text-white/80">
            <section className="investments flex flex-col bg-gray-100 rounded-xl space-y-2 p-4 mb-6">
                <p className="text-gray-500">Resumen inversiones</p>
            </section>
            <section className="savings flex flex-col bg-gray-100 rounded-xl space-y-2 p-4 mb-6">
                <p className="text-gray-500">Resumen ahorros</p>
            </section>
        </main>
    );
}