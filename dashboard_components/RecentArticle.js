import React from 'react'
import Image from 'next/image'
import Moment from 'react-moment'
const RecentArticle = ({articles}) => {
  return (
  <table className=" bg-white rounded-lg whitespace-nowrap ml-2 w-full">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Article Title</th>
      <th scope="col">Date</th>
      <th scope="col">Category</th>
      <th scope="col">Comment</th>
      <th scope="col">Like</th>
      <th scope="col">Shared</th>
      <th scope="col">Viewers</th>
    </tr>
  </thead>
  <tbody>
  {articles && articles.map((article,index) =>   
    <tr key={article._id}>
      <th scope="row">{index}</th>
      <td scope="row"><div className='flex items-center justify-center space-x-2'><Image className='rounded-lg' src={`${article.image}`} height={40} width={40}/><p className='text-gray-300 text-sm'>{article.title}</p></div></td>
      <td scope='row' className='text-center'><Moment date={article.createdAt} format="MM/DD/YYYY"/></td>
      <td scope='row' className='text-center'>{article.category}</td>
      <td scope='row' className='text-center'>44K</td>
      <td scope='row' className='text-center'>45k</td>
      <td scope='row' className='text-center'>45k</td>
      <td scope='row' className='text-center'>45k</td>
    </tr>)}
    
  </tbody>
</table>
  )
}

export default RecentArticle