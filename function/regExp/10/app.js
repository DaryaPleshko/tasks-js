// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const checkCommit = (commit) => {
    try {
        const code = commit.replaceAll(/^\<\!\-\- [a-zA-Z0-9<\/>\s]+ -->$/gm, ``);
        if (commit.length === code.length) throw new Error(`Коммитов нет в коде`);
        return code;
    } catch (error) {
        return error.message;
    }
}
console.log(checkCommit(`
<div class="wrapper">
<div class="wrapper">
<input class="inp" placeholder="Select Occupation" readonly>
<!-- <div>
    <div></div> 
</div> -->
</div>
`));