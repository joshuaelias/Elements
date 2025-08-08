import elementsJSON from '../../public/elements.json';

export default function Home() {
    const elements : any[] = Object.values(elementsJSON)

    console.log(elements);

    return (
        <div>
            {elements.map((el, id) => {
                return (
                    <div>{el.symbol}</div>
                )
            })}
        </div>
    );
}
