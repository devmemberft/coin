export default function Transactions() {
  return (
    <main className="min-h-screen p-4 bg-transparent mb-12">
      <h1 className="text-xl font-bold mb-4">Historial Transacciones</h1>

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
          <div key={i} className="flex justify-between items-center border-b-1 border-white/20 bg-transparent text-gray-200 p-3">
          <div>
            <div className="flex flex-row w-full space-x-2 items-center align-center text-center">
              <p className="h-10 w-10 rounded-full border border-white/20"></p>
              <p className="text-sm font-semibold">{item.desc}</p>
            </div>
              <p className=" py-1 px-2 text-xs text-gray-500">{item.date}</p>
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
