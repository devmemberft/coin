import {MoveUpRight, MoveDownLeft, TrendingUp} from "lucide-react"
export default function AddTransaction(){
    return(
        <main className="min-h-screen p-4 bg-transparent">
            <div className="flex w-full items-center text-center align-center"><h1 className="text-xl font-bold my-2">Nueva Transacción</h1></div>

            <form className="space-y-4">
                <div className="amount">
                    <input
                    type=""
                    required
                    maxLength={4}
                    placeholder="Monto"
                    className="w-full p-6 font-bold text-4xl items-center text-center align-center"
                    />
                </div>
                <div className="type flex flex-row space-x-2 border border-white/20 rounded-xl">
                    
                    <button className="flex flex-row w-full justify-between p-2 hover:bg-green-800 hover:border-x border-white/10 rounded-xl cursor-pointer">   
                        <MoveUpRight size={20}/>
                        <option selected className="w-full">Ingreso</option>
                    </button>

                    <button className="flex flex-row w-full justify-between p-2 hover:bg-green-800 hover:border-x border-white/10 rounded-xl cursor-pointer">
                        <MoveDownLeft size={20}/>
                        <option className="w-full">Egreso</option>
                    </button>

                    <button className="flex flex-row w-full justify-between p-2 hover:bg-green-800 hover:border-x border-white/10 rounded-xl cursor-pointer">
                        <TrendingUp size={20}/>
                        <option className="w-full">Inversion</option>
                    </button>

                </div>

                <div className="space-y-2">
                    <select className="w-full p-3 border border-white/20 rounded-xl">
                    <option>Categoria</option>
                    <option>Comida</option>
                    <option>Transporte</option>
                    </select>

                    <textarea
                    placeholder="Descripción"
                    className="w-full p-2 border border-white/20 rounded-xl"
                    />
                </div>

                <div className="flex gap-4">
                <button type="submit" className="flex-1 bg-green-800 text-white p-3 rounded-xl">Guardar</button>
                <button type="reset" className="flex-1 bg-gray-200 text-black p-3 rounded-xl">Cancelar</button>
                </div>
            </form>
        </main>
    );
}