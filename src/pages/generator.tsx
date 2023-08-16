import { useContext, useEffect, useState } from "react"
import data from '../assets/data/data.json'
import { Actions } from '../cmps/actions'
import { Quote, QuoteData } from "../types"
import { QuoteContext } from "../app-root"

export const Generator = () => {
    const [quote, setQuote] = useState<QuoteData | undefined>()
    const likeQuote = useContext(QuoteContext);


    useEffect(() => {
        setQuote(data)
    }, [])

    const getNewQuote = () => {
        console.log('new quote')
    }

    const onLikeQuote = (quote: Quote) => {
        console.log('like')
        likeQuote.updateQuote(quote)
    }

    if (!quote) return <p>Loading... </p>
    return (
        <div className="quotes">
            {
                quote.quotes.map(q => <>

                    <div key={q.id} className="quote">
                        {q.quote}
                    </div>
                    <div>
                        <Actions 
                        quote={q} 
                        getNewQuote={getNewQuote} 
                        onLikeQuote={onLikeQuote} 
                        copyright={quote.copyright} />
                    </div>
                </>
                )
            }

        </div>
    )

}