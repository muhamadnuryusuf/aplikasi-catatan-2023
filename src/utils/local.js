let array_todos = [
  {
    id: 1,
    title: "Senin",
    description: "Melakukan Instalasi jaringan di gedung produksi baru",
    createdAt: "13/11/2023",
  },
  {
    id: 2,
    title: "Selasa",
    description: "Mengerjakan printer dan laptop yang mempunyai masalah operasional.",
    createdAt: "14/11/2023",
  },
  {
    id: 3,
    title: "Rabu",
    description: "Mengerjakan Instalasi kamera CCTV pada point yang sudah ditentukan.",
    createdAt: "15/11/2023",
  },
  {
    id: 4,
    title: "Kamis",
    description: "Networking membagi bandwidth internet",
    createdAt: "16/11/2023",
  },
  {
    id: 5,
    title: "Jum'at",
    description: "Menyiapkan Ruangan meeting dan piranti yang digunakan untuk meeting seperti mic dan speaker.",
    createdAt: "16/11/2023",
  },
  {
    id: 6,
    title: "Sabtu",
    description: "Mengerjakan tugas MSIB Vocasia Batch 5.",
    createdAt: "16/11/2023",
  },
];

function getTodos() {
  return array_todos;
}

function deleteTodos(deleted_index) {
  array_todos = array_todos.filter((todo, index) => index !== deleted_index);
}

function addTodo(todo) {
  array_todos = [...array_todos, todo];
}

export { getTodos, deleteTodos, addTodo };
