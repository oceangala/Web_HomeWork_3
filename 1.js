const cel = Number.parseFloat(prompt('Введите температуру в градусах Цельсия:'));
let faren = Math.round(((9/5) * cel + 32)*100)/100;
alert(`Цельсий: ${cel}, Фаренгейт: ${faren}`);