const pattern = /[~!@#$%^&*()=+[{\]}:?,<>\/]/g;
function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replace(pattern, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '');

  id = id.slice(0, 15);
  id = id.replace(/^\.|\.$/g, '');

  if (id === '') {
    id = 'aaa';
  }
  while (id.length <= 2) {
    let last = id[id.length - 1];
    id += last;
  }
  return id;
}
