import PeriodicTableElement from "@/app/_components/PeriodicTableElement/PeriodicTableElement";
import elementsJSON from "../../../../public/elements.json";

interface Element {
    symbol: string;
    number: number;
    group: number;   // 1..18
    period: number;  // 1..7
    names: { en: string, de: string }
}

const toCol = (group: number) => group <= 2 ? group : group + 1 // überspringt die 0-Spalte
const isLanthanide = (n: number) => n >= 57 && n <= 71;
const isActinide   = (n: number) => n >= 89 && n <= 103;

export default function PeriodicTable() {
    const elements : Element[] = Object.values(elementsJSON)

    // 1) Hauptgitter: ohne f-Block
    const mainGrid = elements
        .filter(el => !isLanthanide(el.number) && !isActinide(el.number));


    return (
        <div className="m-20 grid [grid-template-columns:repeat(18,1fr)] [grid-template-rows:repeat(7,1fr)] gap-1">
            {mainGrid.map((el) => (
                <div
                    key={el.number}
                    style={{
                        gridColumn: el.group,
                        gridRow: el.period,
                    }}
                >
                    <PeriodicTableElement symbol={el.symbol} number={el.number} name={el.names.en} />
                </div>
            ))}
        </div>
    )
}