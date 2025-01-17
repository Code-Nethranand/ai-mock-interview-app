"use client"
import React from 'react'
import { useState } from "react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



function AddNewInterview() {

  const [openDialog, setopenDialog] = useState(false)
  const [JobPosition, setJobPosition] = useState()
  const [JobDesc, setJobDesc] = useState()
  const [JobExperience, setJobExperience] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(JobPosition, JobDesc, JobExperience)
  }
  
  

  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-lg
       cursor-pointer transition-all duration-300 ease-in-out'
       onClick={() => setopenDialog(true)}
      >
        <h2 className='text-lg text-center'>+ Add New</h2>
      </div>

   
      <Dialog open={openDialog}>
      <DialogContent className='max-w-2xl'>
        <DialogHeader>
          <DialogTitle className="text-2xl">Tell us more about your interviewing</DialogTitle>
          <DialogDescription>
            <form onSubmit={onSubmit}>
            <div>
              <h2>Add details about your job position/role, Job description and yers of experience</h2>
              
              <div className='mt-7 my-3'>
                <label>Job Role/Job Position</label>
                <Input placeholder="Ex. Full Stack Developer" required
                onChange={(event) => setJobPosition(event.target.value)}
                />
              </div>
              
              <div className='my-3'>
                <label>Job Description/ Tech Stack (In short)</label>
                <Textarea placeholder="Ex. React, Angular, NodeJs, MySql etc" required 
                onChange={(event) => setJobDesc(event.target.value)}
                />
              </div>
              
              <div className='my-3'>
                <label>Years of experience</label>
                <Input placeholder="Ex. 5" type="number" max="100" required
                onChange={(event) => setJobExperience(event.target.value)}
                />
              </div>

            </div>
            <div className='flex gap-5 justify-end'>
              <Button type="button" variant="ghost"
              onClick={() => setopenDialog(false)}>
                Cancel</Button>
              <Button type="submit">Start Interview</Button>
            </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    </div>
  )
}

export default AddNewInterview