import type React from 'react'
const ContactGroup: React.FC<IContactGroupProps> = ({ title, contacts }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
        {title}
    </>
  )
}

export default ContactGroup
