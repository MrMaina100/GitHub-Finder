function RepoItem({repo}) {

   const {name,description, html_url} = repo
  return (
    <div className='bg-gray-800 rounded-md card mb-4'>
      
      <div className="card-body">
         <h3 className="mb-2 text-xl font-semibold">
            <a href={html_url}>
               {name}
            </a>
         </h3>
         <p>
            {description}
         </p>
      </div>

     

    </div>
  )
}



export default RepoItem