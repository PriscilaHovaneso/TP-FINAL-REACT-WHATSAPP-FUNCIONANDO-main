const contacts =[
    {
        id: 1,
        name: 'Harry',
        description: 'jugando quidditch',
        avatar: 'https://static.wikia.nocookie.net/esharrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg',
        last_connection: '17:36',
        connection_status: 'offline',
        messages: [
            {
    emisor: 'YO',
    hora: '23:10',
    id: 1,
    texto: 'Hola',
    status:'visto'
    },
     {
    emisor: 'otro',
    hora: '23:10',
    id: 2,
    texto: 'Hola, como estas?',
    status:'visto'
    },
     {
    emisor: 'YO',
    hora: '23:10',
    id: 3,
    texto: 'Todo bien',
    status:'visto'
    },
     {
    emisor: 'YO',
    hora: '23:10',
    id: 4,
    texto: 'Me alegro',
    status:'visto'
    }

        ]
    },
    {
       id: 2,
        name: 'Ron',
        description: 'tengo hambre',
        avatar: 'https://static.wikia.nocookie.net/the-truth-behind-aurora/images/8/85/Ron_Weasley.jpg',
        last_connection: '15:40',
        connection_status: 'offline', 
        messages: [
            {
    emisor: 'YO',
    hora: '23.10',
    id: 1,
    texto: 'Que onda?',
    status:'visto'
    },
     {
    emisor: 'otro',
    hora: '23.10',
    id: 2,
    texto: 'Aburrido, vos?',
    status:'visto'
    },
     {
    emisor: 'YO',
    hora: '23.10',
    id: 3,
    texto: 'Tengo hambre',
    status:'visto'
    },
     {
    emisor: 'YO',
    hora: '23.10',
    id: 4,
    texto: 'Hola, como estas?',
    status:'visto'
    }

        ]
    }


];

  const getContactList = () => {
    return contacts 
}

  const getContactById =(contact_id) =>{
    for (const contact of contacts){
        if (Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
     return null

    
}

export {getContactList, getContactById}
