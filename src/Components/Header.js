export default function Header() {
    return (
        <div className="navbar">
            <h4 className="title">Casa de Masa</h4>
            <div className="nav--right">
                <h6 className="menu"><a href="google.com">Menu</a></h6>
                <h6 className="about"><a href="google.com">About</a></h6>
                <h6 className="contact"><a href="google.com">Contact</a></h6>
                <h6 className="bookings"><a href="google.com">Bookings</a></h6>
            </div>
            <button className="menu--icon"></button>
            
        </div>
    )
}

const menuIcon = document.querySelector(".menu--icon");
const menuHidden = document.querySelector(".menu--hidden");
let menuStatus = "off";

menuIcon.addEventListener("click", () => {
    if (menuStatus === "off") {
        menuStatus = "on";
        menuHidden.style.visibility = "visible";
    }
    else if (menuStatus === "on") {
        menuStatus = "off";
        menuHidden.style.visibility = "hidden";
    }
})