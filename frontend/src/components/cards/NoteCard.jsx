import React from 'react'
import { MdCreate, MdDelete, MdLocalFireDepartment, MdOutlinePushPin, MdTitle } from 'react-icons/md';
import moment from "moment"
const NoteCard = ({title, date, isPinned , onPinNote, Content, onEdit, onDelete, tags}) => {
  return (
    <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
        <div className='flex items-center justify-between'> 
            <div>
                <h6 className='text-sm font-medium'> {title}</h6>
                <span className='text-xs text-green-700'>{moment(date).format("Do MMM YYYY")}</span>
            </div>
            <MdOutlinePushPin  className={`icon-btn ${isPinned ? "text-[#2B85FF]": "text-slate-300"} cursor-pointer` } onClick={onPinNote}/>
        </div>
        <p className='text-xs text-slate-600 mt-2'>{Content?.slice(0,60)}</p>
    <div className='felx items-center justify-between mt-2'>
        <div className='text-xs text-slate-500'>{tags}</div>
        <div className='flex items-center gap-8'>
            <MdCreate className='icon-btn hover:text-green-600' onClick={onEdit}/> 
            <MdDelete className='ico-btn hover:text-red-500 cursor-pointer' onClick={onDelete}
            />
        </div>
    </div>
    </div>
  )
}

export default NoteCard