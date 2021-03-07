const data = [
  {
    name: 'file name 1',
    type: 'file'
  },
  {
    name: 'file name 2',
    type: 'file'
  },
  {
    name: 'folder 1',
    type: 'directory',
    children: [
      {
        name: 'file name',
        type: 'file'
      },
      {
        name: 'file name',
        type: 'file'
      },
      {
        name: 'sub folder',
        type: 'directory',
        children: [
          {
            name: 'file name',
            type: 'file'
          },
          {
            name: 'file name',
            type: 'file'
          },
          {
            name: 'sub folder',
            type: 'directory',
            children: [
              {
                name: 'file name',
                type: 'file'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'folder 2',
    type: 'directory',
    children: [
      {
        name: 'file name',
        type: 'file'
      },
      {
        name: 'file name',
        type: 'file'
      },
      {
        name: 'sub folder',
        type: 'directory',
        children: [
          {
            name: 'file name',
            type: 'file'
          },
          {
            name: 'file name',
            type: 'file'
          }
        ]
      },
    ]
  },
  {
    name: 'folder 2',
    type: 'directory',
    children: [
      {
        name: 'sub folder',
        type: 'directory',
        children: [
          {
            name: 'file name',
            type: 'file'
          },
          {
            name: 'file name',
            type: 'file'
          }
        ]
      },
      {
        name: 'file name',
        type: 'file'
      },
      {
        name: 'file name',
        type: 'file'
      }
    ]
  }
]

document.addEventListener('DOMContentLoaded', function () {
  const createList = function(data) {
    const root = document.createElement('ul');
    data.forEach(function (item) {
      const child = document.createElement('li');
      const classlist= item.type==='file' ? "file spec" : 'folder spec';
      child.className = classlist;
      child.textContent = item.name;
      if(item.type==='directory') {
        child.append(createList(item.children));
      } 
      root.appendChild(child);
    })
    return root;
  }

  const wrapper = document.querySelector('.folder-wrapper');

  wrapper.addEventListener('click', function(event) {
    if(event.target.classList.contains('folder')) {
      event.target.classList.toggle('active');
    }
  })

  wrapper.append(createList(data));
});