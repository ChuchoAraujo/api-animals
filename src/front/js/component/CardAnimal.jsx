import React from 'react'

export const CardAnimal = ({animal}) => {
  return (
      <div className="contenedor">
          {animal.map((element, index) => (
              <div key={index} className="tarjeta">
                  <img src={element.url} />
                  <div className="texto">
                      <p className="name"><strong>Name: </strong>{element.name}</p>
                      <p className="description"><strong>Description: </strong>{element.description}</p>
                  </div>

              </div>

          ))}
      </div>
  )
}
