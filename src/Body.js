
const bu =
[{  
      
      
  im: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" />,
  name :"jdf",
  cusion : ["ede", 'jkde'],

  
  rating :"4.2"
},
{


name :"ijhiudc",
  cusion : ["ede", 'jkde'],

  
  rating :"4.2"
},
{
  
  name :"de",
  cusion : ["ede", 'jkde'],

  rating :"4.2"
}
]
const Card = (props)=> {
  console.log(props)

  return (
    <div className="card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" />

      <h1>{ props.bu.name}</h1>
      <h2>{props.bu.cusion}</h2>
      <h3>{props.bu.rating}</h3>


    </div>  
  )

}

const Body = ()=>{
return(

  <>

  <div className="m">
 <Card  bu = {bu[0]}/>
 <Card bu = {bu[1]}/>

 <Card bu = {bu[2]}/>
 </div>

 </>
);
}
export default Body





