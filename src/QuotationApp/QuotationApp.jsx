import { Copyright } from "./Copyright"
import { FancyText } from "./FancyText"
import { QuotationGenerator } from "./QuotationGenerator"

export function QuotationApp(){
    return(
        <div className="mb-3">
            <h1>Quotation App</h1>
            <QuotationGenerator></QuotationGenerator>
            <Copyright year={"2025"} author={"Black Beetle"}></Copyright>
        </div>
    )
}