/**
 * B1: Khai báo biến colorList chứa các color
 * B2: Tạo hàm add button color vào html
 * B3: Tạo hàm change color và thêm class active cho button color khi click
 */

const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

// Add button color for HTML
let addColorButton = () => {
    let content = "";
    colorList.map((color) => {
        content += `
        <button class="color-button ${color}"></button>
        `
    });
    document.querySelector("#colorContainer").innerHTML = content;
}
addColorButton();

// Function change color and add active for buttonColor
let changeColor = () => {
    // Tạo biến chứa các button color
    let btnColors = document.querySelectorAll('#colorContainer .color-button')
    // Gắn class active cho button color đầu tiên
    btnColors[0].classList.add('active')
    // Duyêt mảng btnColors bằng forEach 
    btnColors.forEach(btnColor => {
        btnColor.onclick = function() {
            // Khi click vào btn thì sẽ kiểm tra xem có button nào có class active không. Nếu có thì bỏ class active đi trước khi add vào button mới. Bằng cách dom tới button có class active rồi remove nó 
            document.querySelector('.color-button.active').classList.remove('active');
            
            // Gắn class active cho button được click
            btnColor.classList.add('active');
        }
    });

    colorList.map((color) => {
        // Dom tới button chứa class color tạo sự kiện click đổi màu cho ngôi nhà. Khi click vào một button color bất kì sẽ add class color tương ứng vào div chứa id house
        document.querySelector(`.${color}`).addEventListener("click", function () {
            // console.log(color);
            document.querySelector("#house").className = `house ${color}`;

        })
    })

}
changeColor()



// colorList.map((color) => {
//     document.querySelector(`.${color}`).addEventListener("click", function () {
//         // console.log(color);
//         document.querySelector("#house").className = `house ${color}`;

//     })
// })
