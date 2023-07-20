link.onclick = function(href) {
  let follow = confirm(`${document.querySelector('a')} 에 이동하시겠습니까?`);
  if (!follow) return false;  
};
