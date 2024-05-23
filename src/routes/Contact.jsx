import { useParams } from "react-router-dom"
import { getContact } from "../data/items";
import { useMemo } from "react";

function Contact() {

  const params = useParams();

  const contact = useMemo(() => {
    return getContact(params.contactId)
  }, [params.contactId])

  if(!contact) throw new Error('Contact does not exist')

    return (
      <div>
        <h1>{contact.name}</h1>   
        <p>{contact.telephone}</p>
        <p>{contact.favorite? 'Favorite': 'Regular Contact'}</p>
      </div>
  )
}

export default Contact