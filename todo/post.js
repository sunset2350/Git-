(async ()=> {
  const response = await fetch ("http://localhost:8080/posts");
  const container = document.querySelector('div')

const result = await response.json();
console.log(result);

for (let item of result){
  const value = `<hr>게시자 : ${item.creatorName}
                 <h3>제목 : ${item.title}</h3>
                 <p>본문 내용 : ${item.content}</p>
                 <hr>
                 <p>시간 : ${item.createdTime}</p> `
  
  console.log(item.creatorName)

  container.insertAdjacentHTML("afterbegin",value)
  
}
})();
