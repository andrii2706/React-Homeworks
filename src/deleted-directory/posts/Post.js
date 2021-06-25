export default function Post({item: {title, id}}){
    console.log(title);
    return(
        <div className={'xxx'}>
            <h5>{id}. {title}</h5>
        </div>


    )
}



