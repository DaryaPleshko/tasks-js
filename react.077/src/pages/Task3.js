// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

function Task3() {
    const array = ['ijih@', 'jghb', 'dxgfcxfg@h'];
    const newArray = array.filter(el => el.includes('@'));
    return (
        <div>
            {newArray}
        </div>
    )
}
export default Task3;