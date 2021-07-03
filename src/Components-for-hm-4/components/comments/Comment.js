

export default function Comment({item}){
return(
<div>

    <h2>{item.id}</h2>
    <h2>{item.name}</h2>
    <h3>{item.email}</h3>
<p>
    {item.body}
</p>

</div>
)}