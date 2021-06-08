import React from "react"; 

const List = ({people}) => {
    return (
        <>
          {people.map((person) => {
              const {id, name, age, image} = person ;
              return <article>
                  
                  <div className="container">

                      <h4>{name}</h4>
                      <p>{age} Years</p>
                     
                  </div>
              </article>
          })}
        </>
    )
}


export default List;