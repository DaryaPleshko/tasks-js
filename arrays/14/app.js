// На входе задан массив [‘test’, ‘test_0’, ‘test_1’]. Напишите все возможные способы обращения к первому элементу и последнему 

const arr = [test, test_0, test_1];

//1    console.log(arr[0], arr[arr.lenght - 1]);
//     console.log(arr.indexOf(0), arr.lastIndexOf);

//2    for (let i = 0; i < arr.length; i++)  if (i === 0 || i === arr.length - 1) console.log(arr[i]);


//3    arr.forEach(element => {
//         if (element.indexOf(0) === element  element.lastIndexOf() === arr[arr.length - 1]) console.log(element);
//     });