export default function Savings(){
    return(
        <main className="flex flex-col min-h-screen p-4 bg-transparent text-white/80">
            <section className="flex w-full h-60 align-center items-center text-center justify-center">
                <div>Aqui informacion sobre el tipo de transaccion y que mejora se puede hacer sobre ella</div>
            </section>
            <section className=" bg-green-500/40 rounded-xl p-2">
                <div className="flex flex-row justify-between">
                <h1 className="font-bold text-xl">Informacion de transaccion</h1>
                </div>
                <div className="flex w-full border-b-1 border-white/20 py-1"></div>

                <div className="flex flex-row justify-between p-2 space-x-2 items-center text-center align-center">
                    <p className="rounded-full w-12 h-8 border border-white/20"></p>
                    <p className="w-full">Gastos</p>
                    <p className="font-bold w-32">16/11/25</p>
                </div>

                <div className="flex w-full">
                    <input placeholder="$10,00" required maxLength={4} className="flex align-center text-center items-center text-4xl font-bold text-white p-4"></input>
                </div>

                <div className="flex flex-row w-full justify-between p-2">

                    <p>Compras de la cena en el super</p>
                    <p className="border-b-1 border-white/20">Categoria</p>
                </div>

                <div className="flex flex-row w-full p-2 justify-between align-middle text-center items-center">

                    <button className="border border-white/20 rounded-xl p-2 hover:bg-gray-800/80 cursor-pointer">Guardar</button>
                    <button className="border border-white/20 rounded-xl p-2 hover:bg-red-700/70 cursor-pointer">Eliminar</button>
                </div>
            </section>
        </main>
    );
}