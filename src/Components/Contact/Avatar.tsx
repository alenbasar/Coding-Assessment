import React, { useState } from 'react'
import { AvatarContainer, AvatarImage } from './ContactList.styles.ts'
import { IAvatarProps } from './types.ts'
import Icon from '../Icon'

const Avatar: React.FC<IAvatarProps> = ({ contact }) => {
  const [imageError, setImageError] = useState<boolean | null>(null)

  if (imageError || !contact.avatarUrl) {
    return <Icon name={'person'} width={30} height={30} viewBox="0 -5 20 20" />
  }

  return (
    <>
      <AvatarContainer>
        <AvatarImage
          src={contact.avatarUrl}
          alt={`${contact.firstName} ${contact.lastName} Avatar`}
          onError={() => setImageError(true)}
        />
      </AvatarContainer>
    </>
  )
}

export default Avatar
