import { useEffect, useContext } from "react"
import GithubContext from "../Context/Github/GithubContext"
import { useParams } from "react-router-dom";
import {FaCodepen, FaUserFriends, FaUsers, FaStore} from 'react-icons/fa'
import { Link } from "react-router-dom";
import RepoList from "../Repo/RepoList";


function User() {


   const {GetUser, user, GetUserRepos, repos} = useContext(GithubContext)

   const params = useParams()
   useEffect(()=>{
      GetUser(params.login)
      GetUserRepos(params.login)

   },[]);

   const {name, type, avatar_url, location, bio, blog, twitter_username, login, html_url, followers, following, public_repos, public_gists, hirable} = user
  return (
    <>
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
         <Link to='/' className="btn btn-ghost">
            Back
         </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
         <div className=" mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card"> 
               
                  <img src={avatar_url} alt=""  />               
            </div>
         </div>

         <div className="col-span-2">
            <div className="mb-6">
               <h1 className="text-3xl card-title">
                  {name}
                 
               </h1>
               <p>{bio}</p>

               <div className="mt-4 card-actions">
                  <a href={html_url} target='_blank' rel="noreferrer" className="btn btn-outline">
                     View Github profile
                  </a>
               </div>
            </div>

            <div className="w-full rounded-lg shadow-md ng-base-100 stats">
               {location && (
                  <div className="stat">
                     <div className="stat-title text-sm">Location</div>
                     <div className="text-md stat-value">{location}</div>
                  </div>
               )}

               {blog && (
                  <div className="stat">
                     <div className="stat-title text-sm">Website</div>
                     <div className="text-lg"><a href={`https://${blog}`} target='_blank' rel="noreferrer" >
                        </a>{blog}</div>
                  </div>
               )}

               {twitter_username && (
                  <div className="stat">
                     <div className="stat-title text-sm">Twitter</div>
                       <div className="text-lg"><a href={`https://twitter.com/${twitter_username}`} target='_blank' rel="noreferrer" >
                        </a>{twitter_username}</div>
                    
                  </div>
               )}
            </div>


            <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">

            <div className="stat">
               <div className="stat-figure text-white">
                  <FaUsers className=" text-3xl md-text-4xl"/>
               </div>
               <div className="stat-title pr-5">
                  Followers
               </div>
               <div className="stat-value pr-5 text-2xl md:text-3xl">
                  {followers}
               </div>
            </div>

            

             <div className="stat">
               <div className="stat-figure text-white">
                  <FaUserFriends className=" text-3xl md-text-4xl"/>
               </div>
               <div className="stat-title pr-5">
                  Following
               </div>
               <div className="stat-value pr-5 text-2xl md:text-3xl">
                  {following}
               </div>
            </div>

             <div className="stat">
               <div className="stat-figure text-white">
                  <FaCodepen className=" text-3xl md-text-4xl"/>
               </div>
               <div className="stat-title pr-5">
                  PublicRepos
               </div>
               <div className="stat-value pr-5 text-2xl md:text-3xl">
                  {public_repos}
               </div>
            </div>

            <div className="stat">
               <div className="stat-figure text-white">
                  <FaStore className=" text-3xl md-text-4xl"/>
               </div>
               <div className="stat-title pr-5">
                  PublicGists
               </div>
               <div className="stat-value pr-5 text-2xl md:text-3xl">
                  {public_gists}
               </div>
            </div>
         </div>
         </div>
              
      </div>

     <RepoList repos={repos}/>
      


    </div>
    
    </>
  )
}
export default User