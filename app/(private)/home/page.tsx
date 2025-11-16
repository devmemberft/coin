
export default function Home(){
    return(
        <div className="home-main-container max-w-md mx-auto px-4">

            <main className="min-h-screen p-4 bg-transparent text-gray-900">
                <h1 className="text-xl text-white font-bold mb-4">Resumen General</h1>
                
                <section className="information w-full flex justify-between p-2 text-xs">
                    <p className="register-date font-bold text-white">Fecha de registro</p>
                    <p className="data text-white">Variable fecha</p>
                </section>

                <section className="settings flex w-full justify-between items-center align-center text-center space-y-2">

                    <div className="settings flex items-center align-center text-center">
                        <button className="setting-button cursor-pointer border border-white/10 rounded-xl bg-gray-500/20 hover:bg-green-800/80">
                        <p className="text-white p-2">Ajustes de perfil</p>
                        </button>
                    </div>

                    <div className="currency flex text-white items-center align-center text-center">
                        <button className="currency-button cursor-pointer hover:bg-green-800/80 border border-white/10 rounded-xl">
                        <p className="currency-name p-2">COP $</p>
                        </button>
                    </div>
                </section>

                

                <section className="profile-information w-full flex flex-row align-center justify-between text-white font-bold text-xl text-center align-center items-center px-2">
                    <div className="nickname"><p className="items-center text-center align-center justify-center">Nombre de perfil</p></div> <div className="icon rounded-full border-8 bg-gray-500/20 border-white/5">OO</div>
                </section>

                <section className="Psico-profile w-full flex flex-row text-white/80">
                    <div><p className="p-2 text-sm">Averiguemos tu perfil psicologico basado en tus gastos</p></div>
                </section>

                <section className="General-overview flex text-white flex-col space-y-2">
                    <div className="income flex flex-row space-x-2 justify-between border border-white/5 p-2 bg-gray-500/20 rounded-xl">
                        <p className="font-bold">Ingresos Totales</p>
                        <p>1230$ ejemplo</p>
                    </div>
                    <div className="expenses flex flex-row space-x-2 justify-between border border-white/5 p-2 bg-gray-500/20 rounded-xl">
                        <p className="font-bold">Gastos Totales</p>
                        <p>789$ ejemplo</p>
                    </div>
                </section>
                
                <section className="transactions-resume flex flex-col gap-4 mt-2 border border-white/10 bg-gray-500/20 p-4 rounded-t-xl">
                    <p className="Transactions-list text-white font-bold text-xl">Transacciones</p>

                    <div className="flex flex-row justify-between bg-green-500/50 rounded-2xl p-2 shadow">
                        <p className="text-white font-bold text-sm">Ingresos</p>
                        <p className="text-sm font-semibold text-white/80">$1,500 ejemplo</p>
                    </div>

                    <div className="bg-red-100 rounded-2xl p-2 shadow">
                        <p className="text-sm">Gastos</p>
                        <p className="text-sm font-semibold text-red-700">$800 variable</p>
                    </div>

                    <div className="bg-blue-100 rounded-2xl p-2 shadow col-span-2">
                        <p className="text-sm">Balance</p>
                        <p className="text-sm font-bold text-blue-700">$700</p>
                    </div>
                </section>

                <button className="w-full bg-black text-white rounded-xl p-3">+ Nueva Transacción</button>
            </main>

        </div>
    );
}