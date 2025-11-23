import { Settings } from "lucide-react";

export default function Home(){
    return(
        <div className="home-main-container max-w-md mx-auto px-4">

            <main className="min-h-screen p-4 bg-transparent text-gray-900 space-y-2 ">
                
                <section className="settings flex w-full justify-between align-center">
                    <h1 className="flex text-xl text-white font-bold mb-4 align-center text-center justify-center">Bienvenido</h1>
                    <button className="setting-button cursor-pointer"><Settings color={'white'}size={22}/></button>
                </section>
                
                <section className="information w-full flex justify-between py-2 text-xs">
                    <p className="register-date font-bold text-white">Fecha de registro</p>
                    <p className="data text-white">Variable fecha</p>
                </section>


                <section className="Psico-profile w-full flex flex-row text-white/80">
                    <div><p className="py-2 text-sm">Descubre tu perfil psicologico basado en tus gastos</p></div>
                </section>

                <section className="General-overview flex text-white flex-col space-y-2">
                    <div className="income flex flex-row space-x-2 justify-between border border-white/20 p-2 bg-transparent rounded-xl">
                        <p className="font-bold">Ingresos Totales</p>
                        <p>$1,230</p>
                    </div>
                    <div className="expenses flex flex-row space-x-2 justify-between border border-white/20 p-2 bg-transparent rounded-xl">
                        <p className="font-bold">Gastos Totales</p>
                        <p>$789</p>
                    </div>
                </section>
                
                <section className="transactions-resume flex flex-col gap-4 mt-2 border border-white/10 p-4 rounded-t-xl">
                    <p className="Transactions-list text-white font-bold text-xl">Ultimas transacciones</p>

                    <div className="flex flex-row justify-between border-b-1 border-white/20 p-2 shadow">
                        <p className="text-white font-bold text-sm">Gasto</p>
                        <p className="text-sm font-semibold text-white/80">$300</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-1 border-white/20 p-2 shadow">
                        <p className="text-white font-bold text-sm">Ingreso</p>
                        <p className="text-sm font-semibold text-white/80">$1,500</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-1 border-white/20 p-2 shadow">
                        <p className="text-white font-bold text-sm">Ingreso</p>
                        <p className="text-sm font-semibold text-white/80">$600</p>
                    </div>
                </section>

                <button className="w-full cursor-pointer border border-white/20 text-white rounded-xl p-3 hover:bg-green-800/20">+ Nueva Transacción</button>
            </main>

        </div>
    );
}