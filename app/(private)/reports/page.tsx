import { Settings } from "lucide-react";

export default function Transactions() {
  return (
    <main className="min-h-screen p-4 bg-transparent mb-12">
      <h1 className="text-xl font-bold mb-4">Historial Transacciones</h1>

      <main className="min-h-screen p-4 bg-transparent space-y-2 ">
        
        <section className="settings flex w-full justify-between align-center">
            <h1 className="flex text-xl  font-bold mb-4 align-center text-center justify-center">Bienvenido</h1>
            <button className="setting-button cursor-pointer"><Settings color={'white'}size={22}/></button>
        </section>
        
        <section className="information w-full flex justify-between py-2 text-xs">
            <p className="register-date font-bold ">Fecha de registro</p>
            <p className="data ">Variable fecha</p>
        </section>


        <section className="Psico-profile w-full flex flex-row /80">
            <div><p className="py-2 text-sm">Descubre tu perfil psicologico basado en tus gastos</p></div>
        </section>

        <section className="General-overview flex  flex-col space-y-2">
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
            <p className="Transactions-list  font-bold text-xl">Ultimas transacciones</p>

            <div className="flex flex-row justify-between border-b-1 border-white/20 p-2 shadow">
                <p className=" font-bold text-sm">Gasto</p>
                <p className="text-sm font-semibold /80">$300</p>
            </div>

            <div className="flex flex-row justify-between border-b-1 border-white/20 p-2 shadow">
                <p className=" font-bold text-sm">Ingreso</p>
                <p className="text-sm font-semibold /80">$1,500</p>
            </div>

            <div className="flex flex-row justify-between border-b-1 border-white/20 p-2 shadow">
                <p className=" font-bold text-sm">Ingreso</p>
                <p className="text-sm font-semibold /80">$600</p>
            </div>
        </section>

        <button className="w-full cursor-pointer border border-white/20  rounded-xl p-3 hover:bg-green-800/20">+ Nueva Transacción</button>
    </main>

      <div className="space-y-3">
        {[
          { type: 'Ingreso', amount: 300, desc: 'Pago freelance', date: '12 Jun' },
          { type: 'Gasto', amount: 50, desc: 'Uber', date: '11 Jun' },
          { type: 'Gasto', amount: 50, desc: 'Uber', date: '11 Jun' },
          { type: 'Ingreso', amount: 300, desc: 'Pago freelance', date: '12 Jun' },
          { type: 'Gasto', amount: 50, desc: 'Uber', date: '11 Jun' },
          { type: 'Ingreso', amount: 300, desc: 'Pago freelance', date: '12 Jun' },
          { type: 'Gasto', amount: 50, desc: 'Uber', date: '11 Jun' },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b-1 border-white/20 bg-transparent p-3">
          <div>
            <div className="flex flex-row w-full space-x-2 items-center align-center text-center">
              <p className="h-10 w-10 rounded-full border border-white/20"></p>
              <p className="text-sm font-semibold">{item.desc}</p>
            </div>
              <p className=" py-1 px-2 text-xs text-gray-600">{item.date}</p>
          </div>
            <p className={`text-sm font-bold ${item.type === 'Ingreso' ? 'text-green-700/80' : 'text-red-700/80'}`}>
              {item.type === 'Ingreso' ? '+' : '-'}${item.amount}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
