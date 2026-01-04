import { Settings, SquarePlus } from "lucide-react";
import { ArrowLeft, ArrowRight,ArrowDown, Edit } from "lucide-react";
import Link from "next/link";

export default function Home(){
    return(
        <div className="home-main-container max-w-md mx-auto px-4">
            <nav className="bookname mt-2 mb-4">Libro por defecto</nav>
            <main className="resume">
                <div className="date-month-year flex flex-row justify-baseline align-center text-sm space-x-2 text-gray-600">
                    <ArrowLeft size={16}/>
                    <p>Day / Month</p>
                    <ArrowRight size={16}/>
                </div>

                <div className="budget flex align-center justify-center text-center items-center space-x-2 space-y-2 flex-col m-2 bg-gray-200/50 shadow-xs rounded-md p-8 ">
                    <p>Presupuesto Mensual Restante</p>
                    <h1 className="text-xl font-bold">$1,120</h1>
                    <div className="flex flex-row justify-between text-xs text-gray-600 space-x-2 ">
                        <p>Presupuesto total: $1,200</p> 
                        <Edit size={14}/>
                    </div>
                </div>

                <div className="income-expense flex flex-row m-2 space-x-2 justify-between">
                    <div className="income align-center text-center w-full flex flex-col p-4 border-1 border-gray-100/10  bg-gray-200/50 shadow-xs rounded-md">
                        <p>Income</p>
                        <p className="text-green-800">$1,200</p>
                    </div>
                    <div className="expense align-center text-center w-full flex flex-col p-4 border-1 border-gray-100/10  bg-gray-200/50 shadow-xs rounded-md">
                        <p>Expense</p>
                        <p className="text-red-800">$80,00</p>
                    </div>
                </div>
            </main>
            <main className="transactions">
                <div className="details flex flex-row justify-between text-sm px-2 mb-2 text-gray-600">
                    <div className="date-day-month"><p>Day / Month</p></div>
                    <div className="amounts-income-expense flex flex-row space-x-2 "><p>Expense:$amount Income:$amount</p><ArrowDown size={16}/></div>
                </div>
                <div className="last-transactions m-2 rounded-md border-b-1 border-l-1 border-r-1 border-gray-300">
                    <div className="transaction-map flex flex-row justify-between p-2 border-t-1 border-gray-300 ">Transaction 1</div>
                    <div className="transaction-map flex flex-row justify-between p-2 border-t-1 border-gray-300 ">Transaction 2</div>
                    <div className="transaction-map flex flex-row justify-between p-2 border-t-1 border-gray-300 ">Transaction 3</div>
                </div>
            </main>
            <div className="add-transaction h-full flex justify-end">
                <Link href={'/transactions'}><button className="cursor-pointer p-2" ><SquarePlus size={20}/></button></Link>
            </div>
            
        </div>
    );
}