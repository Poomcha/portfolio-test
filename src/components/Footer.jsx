import "../style/Footer.css"

export default function Footer() {
    const style = {
        footer: {
            backgroundColor: 'blue',
            minHeight: '10vh',
            display: 'flex',
            alignItems: 'center'
        }
    }
    return <footer style={style.footer}>Footer</footer>
}