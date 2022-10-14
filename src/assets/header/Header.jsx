import Title from './Title'

function Header() {

    const headerWrapper = {
        backgroundColor: "white",
        padding: "10px 0 0 25px",
    }

    return(
        <div style={headerWrapper}>
            <Title />
        </div>
    )
}

export default Header