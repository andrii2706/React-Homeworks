export default function Post({item}){

    console.log(item);
    
    return(
<div>
    {item.id} - {item.body}
</div>
)}