'use client'



const person = ({params}) => {


   console.log(params.personid)

    return (
    <div>
      {params.personid}
       
      
    </div>
  );
};

export default person;



