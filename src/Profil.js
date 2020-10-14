import React from 'react'

export default function Profil({name, height, birth_year}) {
    return(
    <div>
        Nom: {name}<br/>
        Taille: {height}cm <br/>
        Année de naissance: {birth_year}
    </div>
    )
}