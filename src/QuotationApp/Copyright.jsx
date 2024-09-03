

export function Copyright({year="", author=""}){
    return(
        <div>
            <p className="fs-6">
                &copy; {year} {author}
            </p>
        </div>
    )
}