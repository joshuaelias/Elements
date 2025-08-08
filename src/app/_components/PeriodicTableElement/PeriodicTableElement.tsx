

interface PeriodicTableElementProps {
    symbol: string;
    number: number;
    name: string
}


export default function PeriodicTableElement({ symbol, number, name }: PeriodicTableElementProps) {


    return (
        <div className="pl-1 hover:cursor-pointer border border-white transform transition-transform duration-150 hover:scale-125 bg-black">
            <div className="flex flex-col">
                <p className="text-xs">{number}</p>
                <p className="text-base font-bold">{symbol}</p>
                <p className="text-xs">{name}</p>
            </div>
        </div>
    )
}