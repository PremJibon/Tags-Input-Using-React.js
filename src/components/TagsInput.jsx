import {useState} from 'react'
export default function TagsInput(){
  const [tags,setTags] = useState([])
  function handleKeyDown(e){
    if(e.key !== "Enter") return
    const value= e.target.value
    if(!value.trim())return
    setTags([...tags,value])
  }
  return (

    <div className='tags-input-container'>
      { tags.map((tag,index)=>(
        <div className='tag-item'>
          <span className='text'>{tag} {index+1}</span>
          <span className="close">&times;</span>
        </div>
      ))}
      
      <input type="text" name="" onKeyDown={handleKeyDown}id="tags-input" placeholder='Type SOme Thing' />
    </div>

  )
}