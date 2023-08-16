import { Copyright, Quote } from "../types"

interface Props {
    quote: Quote,
    copyright: Copyright,
    getNewQuote: () => void,
    onLikeQuote: (quote: Quote) => void,

}

export const Actions = ({ quote, getNewQuote, onLikeQuote, copyright }: Props) => {
    return (
        <div className="actions">
            <button onClick={() => onLikeQuote(quote)}>
                Like
            </button>
            <button onClick={getNewQuote}>
                New Quote
            </button>
            <p>
                {quote.author}
            </p>
            <p>
                {copyright.url}
            </p>

        </div>
    )
}