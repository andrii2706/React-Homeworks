export default function Post2({item,selectPost}){
    return(
        <div className={'function'}>
            <h2 className={'header-2'}>{item.id}</h2>
                <h3>
                    {item.title}
                </h3>
            <p>
                {item.body}
            </p>
            <button className={'btn'} onClick={() => {
                selectPost(item.id, item.title,item.body);
            }}>click pls</button>
            {/*<button onClick={() =>{*/}
            {/*//     selectPost()*/}
            {/*//     selectPost()*/}
            {/*} }>*/}
            {/*click here</button>*/}
        </div>
    )
}