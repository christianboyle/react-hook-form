import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import './styles.css'

const initialValues = {
  gender: 'male',
  skills: {
    JavaScript: true,
    react: false,
    nodejs: true,
    angular: false
  }
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      gender: initialValues.gender,
      skills: Object.keys(initialValues.skills).filter(
        (item) => initialValues.skills[item] === true
      )
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Please enter a valid email'
              }
            })}
          />
          {errors.email && <p className='errorMsg'>{errors.email.message}</p>}
        </Form.Group>
        <Form.Group className='mb-3' controlId='gender'>
          <Form.Label>Select Gender</Form.Label>
          <Form.Check
            type='radio'
            label='Male'
            value='male'
            {...register('gender', {
              required: 'Please select your gender'
            })}
          />
          <Form.Check
            type='radio'
            label='Female'
            value='female'
            {...register('gender')}
          />
          {errors.gender && <p className='errorMsg'>{errors.gender.message}</p>}
        </Form.Group>
        <Form.Group className='mb-3' controlId='skills'>
          <Form.Label>Select Your Skills</Form.Label>
          <Form.Check
            type='checkbox'
            label='JavaScript'
            value='JavaScript'
            {...register('skills', {
              required: 'Please select at-least one skill'
            })}
          />
          <Form.Check
            type='checkbox'
            label='React'
            value='react'
            {...register('skills')}
          />
          <Form.Check
            type='checkbox'
            label='Node.js'
            value='nodejs'
            {...register('skills')}
          />
          <Form.Check
            type='checkbox'
            label='Angular'
            value='angular'
            {...register('skills')}
          />
          {errors.skills && <p className='errorMsg'>{errors.skills.message}</p>}
        </Form.Group>
        <label></label>
        <Button type='submit' variant='primary'>
          Submit
        </Button>
      </form>
    </div>
  )
}
