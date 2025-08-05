import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Input,Select,RTE } from '../index';
import authService from '../../appwrite/auth';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function PostForm() {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: ""
    },
    
  });

  return (
    <div>
      
    </div>
  )
}

export default PostForm; 
