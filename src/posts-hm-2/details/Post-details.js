export default function PostDetails ({item}){
    console.log(item);
    
    return(
        <div className={'function'}>
            {item.id}
            {item.body}
            {item.title}

        </div>
    )
}