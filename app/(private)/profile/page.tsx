'use client'

import { useLogout } from "../../hooks/useLogout";

export default function Profile() {

  const {loading, errorMsg, handleLogout,} = useLogout(()=>(window.location.href='/login'));

  return (
    <main className="min-h-screen p-4 bg-transparent">

      <section className="flex flex-col bg-gray-100 rounded-xl space-y-2 p-4 mb-6 items-center align-center text-center">
        <div className="flex w-26 h-26 bg-gray-200 rounded-xl shadow"></div>
        <p className="text-sm text-gray-500">Random Anonimous Username</p>
        <p className="text-xs text-gray-500">Token activo: ****-****-1234</p>
      </section>
      <div className="space-y-3">
        <button className="w-full cursor-pointer text-left text-gray-200 border border-white/20 bg-transparent rounded-xl p-3 hover:bg-green-500/15 flex flex-row justify-between"><p>Cambiar moneda</p><p className="text-gray-500">COP $</p></button>
        <button className="w-full cursor-pointer text-left text-gray-200 border border-white/20 bg-transparent rounded-xl p-3 hover:bg-green-500/15">Exportar datos</button>
        <button className="w-full cursor-pointer text-left text-gray-200 border border-white/20 bg-transparent rounded-xl p-3 hover:bg-green-500/15 flex flex-row justify-between"><p>Cambiar idioma</p><p className="text-gray-500">ES</p></button>
        <button className="w-full cursor-pointer text-left text-gray-200 border border-white/20 bg-transparent rounded-xl p-3 hover:bg-green-500/15">Resetear todo</button>
        <button type='submit' onClick={handleLogout} className="w-full cursor-pointer text-left bg-red-100 text-gray-500 p-3 rounded-xl hover:bg-red-200">{loading ? 'Saliendo...' : 'Cerrar sesión'}</button>
        {errorMsg && <p>{errorMsg}</p>}
      </div>

    </main>
  )
}
