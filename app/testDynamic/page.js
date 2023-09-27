
import Link from "next/link"
export default function dynamic(){
    return(
        <div>
            <h3>Dynamic test</h3>
            <Link href="/testDynamic/123">Redirect</Link>
        </div>
    )
}