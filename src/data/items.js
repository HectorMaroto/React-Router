export const items = [
    {
        id: '0',
        name: 'Marcos',
        telephone: '111222233',
        favorite: false
    },
    {
        id: '1',
        name: 'Pepe',
        telephone: '34392024',
        favorite: true
    },
]

export function getContact(id) {
    return items.find(item => item.id === id);
}