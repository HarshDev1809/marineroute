export default function insertAt(arr, index, element) {
  return [
    ...arr.slice(0, index),
    element,
    ...arr.slice(index)
  ];
}
