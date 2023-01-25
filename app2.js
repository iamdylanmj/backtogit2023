const banner = document.querySelector(".banner");
const overlay = document.querySelector(".overlay");

window.addEventListener("scroll", () => {
    let scroll = scrollY;
    banner.style.backgroundSize = `${100 + scroll * 0.1}%`;

    //* the following line gives more smooth change to the overlay , but I have no idea how it works
    
    // let opacVal = scroll * 1.7 / window.innerHeight;

    //* after few days later I figure it out, innerHeight is a read only value , it returns height of the windows's content area, this value has beed used to take a smaller value, multiplying by 1.7 does not mean any mathematical calculation, formula or something, in here, it is used for make the returning value (opacVal in this case) more smaller, to give a  smooth opacity transition, that's it.


    let opacVal = scroll * 0.001;
    console.log(opacVal);
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacVal})`;
    
});