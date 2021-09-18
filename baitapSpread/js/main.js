// Giải thích code
/**
 * B1: Tạo biến chứa đoạn text trong thẻ h2.heading.
 * B2: Tạo biến chứa các kí tự của đoạn text sau khi dùng g Spread Operator
 * B3: Tạo biến các kí tự đã được lọc bằng filter để loại kí tự khoảng trắng ra khỏi mảng kí tự
 * B4: Dùng hàm map với mảng đã lọc để hiện thị UI bằng nối chuỗi (Template literals)
 */


let textEffect = () => {
    let stringText = document.querySelector('.heading').innerHTML
    // console.log(stringText)
    let characters = [...stringText]
    // console.log(characters)
    let words = characters.filter((character) => {
        return character !==" "
    });
    // console.log(words)
    let content =""
    words.map((word) => {
        content += `
            <span>${word}</span>
        `
    });
    document.querySelector('.heading').innerHTML = content;

}

textEffect()