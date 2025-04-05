// Write your code here!
let bod = document.querySelector("body")
let main = bod.querySelector("main")
bod.removeChild(main)

let newHeader = document.createElement("h1")
newHeader.id="victory"

newHeader.textContent="Andrew is the champion"