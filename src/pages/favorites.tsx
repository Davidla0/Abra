import { useContext, useState } from "react";
import { QuoteContext } from "../app-root";

export const Favorites = () => {
    const [search, setSearch] = useState<string | number | readonly string[] | undefined>()
    const quote = useContext(QuoteContext);

    const onSearch = (value: string) => {
        console.log(value)
        setTimeout(() => {
            setSearch(value)
        }, 500)
    }


    return (<>

        <div>
            <input
                type="text"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)} />
        </div>
        <div className="favorites">
            {quote.likeQuote && quote.likeQuote.length > 0 &&
                quote.likeQuote.map((q, index) => (
                    <div key={index}>
                        <p>{q.author}</p>
                        <p>{q.permalink}</p>
                    </div>
                ))
            }
        </div>
    </>
    );
}

