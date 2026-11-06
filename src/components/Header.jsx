function Header(props) { 
    return(
        <header className="bg-blue-600 p-5 text-white">
            <h1 className="text-2x1 font-bold">
                {props.title}
            </h1>
        </header>
    )
}

export default Header