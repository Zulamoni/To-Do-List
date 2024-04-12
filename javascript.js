function addItem() {
    var newItem = document.getElementById('new-item').value;
    var itemList = document.getElementById('itemlist');
    
    var li = document.createElement('li');
    li.textContent = newItem;
    
    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
      var updatedItem = prompt('Enter updated item:', li.textContent);
      li.textContent = updatedItem;
    };
    
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      itemList.removeChild(li);
    };
    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    itemList.appendChild(li);
  }
  