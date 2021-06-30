export default function Comment({item}){
return(
<div>
    <h2>{item.id}</h2>
    <h3>
        {item.name}
    </h3>
    <p>
        {item.body}
    </p>
</div>
)}