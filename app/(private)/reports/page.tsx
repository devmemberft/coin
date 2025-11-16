export default function Transactions() {
  return (
    <main className="min-h-screen p-4 bg-transparent mb-12">
      <h1 className="text-xl font-bold mb-4">Transacciones</h1>

      <div className="flex w-full h-16 my-2 justify-between items-center align-middle text-center bg-gray-100/80 rounded-xl p-2 shadow">
      </div>

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
          <div key={i} className="flex justify-between items-center bg-gray-100 text-gray-800 rounded-xl p-3 shadow">
          <div>
            <div className="flex flex-row w-full space-x-2 items-center align-center text-center">
              <p className="h-10 w-10 rounded-full border border-black/10"></p>
              <p className="text-sm font-semibold">{item.desc}</p>
            </div>
              <p className="px-2 text-xs text-gray-500">{item.date}</p>
          </div>
            <p className={`text-sm font-bold ${item.type === 'Ingreso' ? 'text-green-600' : 'text-red-600'}`}>
              {item.type === 'Ingreso' ? '+' : '-'}${item.amount}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
