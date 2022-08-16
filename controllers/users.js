let users = [
  { id: '1', name: 'Vlad' },
  { id: '2', name: 'Kris' },
  { id: '3', name: 'Tom' },
];

export const getAllUsers = (request, response) => {
  response.json(users);
}
