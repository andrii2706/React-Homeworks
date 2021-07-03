

export default function Post({item}){
    return(
<div>
    <h2>{item.id}</h2>

    <h3>{item.title}</h3>
        <p>
            {item.body}
        </p>


</div>
)}