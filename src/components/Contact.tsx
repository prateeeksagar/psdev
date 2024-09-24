"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Download } from 'lucide-react';



const Contact = () => {

    const [mail, setMail] = useState("");
    
    const handleSubmit = () => {
        
    }

    const downloadResume = () => {

    }

  return (
    <div>
        <Card>
            <CardHeader className='pb-1'>
                <CardTitle className='scroll-m-20 text-md font-extrabold tracking-tight lg:text-3xl flex flex-row justify-between'>
                    <div>Want to hire me?</div>
                    <a href="https://drive.google.com/uc?export=download&id=1x7hurM0aWEcMQXt-lUexTLtULUMF8MuW"><Button variant='ghost'>Resume <Download className='ml-2 h-4 w-4'/></Button></a>
                    </CardTitle>
                <CardDescription className='scroll-m-20 text-sm'>Drop your message! Let's discuss.</CardDescription>
            </CardHeader>
            <CardContent className='grid grid-row-2'>
                <div className='border-b-2 py-4'>
                <a href="https://wa.me/917827445441?text=Hi, I am here discuss regarding an opportunity." 
                target="_blank" 
                rel="noopener noreferrer"
                ><Button className='text-[10px] md:text-sm bg-green-600 hover:bg-green-500 border w-22 h-8 '>Chat on Whatsapp</Button></a>
                </div>
                <div className='py-3'>
                    <h3>Drop in your email ID and i will get back to you</h3>
                    <div className='flex flex-row justify-between gap-3'>
                    <Input type="email" placeholder="prateeksagar2103@gmail.com" onChange={({target}) => setMail(target.value)}/>
                    <Button onClick={handleSubmit}>Send</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default Contact
