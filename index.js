// 요소 가져오기 getElementsByClassName, querySelect, getElementById

// html의 요소를 선택할 때 사용하며 id(#), class(.), html태그 등 다양한 요소들을 선택 가능
//이름과 같을 경우 최상단 요소를 선택한다. -> 아래 선언은 요소를 얻기위해 사용됨
let input = document.getElementById("entered-list"); //할일 입력
let addBtn = document.getElementById("add-list"); //버튼 추가하기
let tasks = document.getElementById("tasks"); //추가된 할일

addBtn.addEventListener("click", function () {
  if (!input.value)
    // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
    alert("내용을 입력해 주세요!");
  else {
    var list = document.createElement("p"); //<li>
    list.innerText = input.value; // <li>입력된 할 일</li>
    tasks.appendChild(list); // 할 일 리스트창에 자식으로 붙이기
  }

  list.addEventListener("click", function () {
    // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
    list.style.textDecoration = "line-through";
  });
  list.addEventListener("dblclick", function () {
    // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
    tasks.removeChild(list);
  });
});
/*add -
  list.addEventListener("click", function () {
    var list = document.createElement("li");
    if (!input.value)
      // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
      alert("내용을 입력해 주세요!");
    else {
      list.innerText = input.value; // <li>입력된 할 일</li>
      tasks.appendChild(list); // 할 일 리스트창에 자식으로 붙이기
    }

    list.addEventListener("click", function () {
      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
      list.style.textDecoration = "line-through";
    });
    list.addEventListener("dblclick", function () {
      // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
      tasks.removeChild(list);
    });
  });
  */

// add btn disabled

// addEventListener()는 document의 특정요소(Id,class,tag 등등..)
// event(ex - click하면 함수를 실행하라, 마우스를 올리면 함수를 실행하라 등등.. )를 등록할 때 사용합니다.
// 버튼을 누르면 버튼에 적힌 값이 alert창으로 뜨는 스크립트입니다.
//input.addEventListener("keyup", () => {
//    if(input.value.trim() ! == 0)
//});
