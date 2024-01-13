import React from 'react'
import { Welcome } from './Welcome/Welcome'


type ContentProps = {}

export const Content: React.FC<ContentProps> = () => {
    return (
        <div>
            <Welcome welcomeText={`Храм в честь иконы Божьей Матери "Неупиваемая Чаша".`} />
            <Welcome welcomeText={`Храм в честь иконы Божьей Матери "Неупиваемая Чаша".`} />
            <Welcome welcomeText={`Храм в честь иконы Божьей Матери "Неупиваемая Чаша".`} />
        </div>
    )
}
